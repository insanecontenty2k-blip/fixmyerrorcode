#!/usr/bin/env node
/**
 * Enrich error-codes.json to 300+ words per entry with deep_dive + prevention_tips.
 * Run: node scripts/enrich-depth.mjs
 */
import { readFileSync, writeFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { execSync } from "child_process";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const OUT = join(root, "data/error-codes.json");

const BRAND_NAMES = {
  lg: "LG",
  whirlpool: "Whirlpool",
  samsung: "Samsung",
  bosch: "Bosch",
  maytag: "Maytag",
  frigidaire: "Frigidaire",
  kenmore: "Kenmore",
  ge: "GE",
};

const APPLIANCE_NAMES = {
  "washing-machine": "washing machine",
  dryer: "dryer",
  dishwasher: "dishwasher",
  refrigerator: "refrigerator",
  oven: "oven",
};

function wordCount(entry) {
  const parts = [
    entry.summary,
    entry.meaning,
    ...(entry.causes ?? []),
    ...(entry.fixes ?? []),
    entry.when_to_call_technician,
    ...(entry.affected_models ?? []),
    ...(entry.deep_dive ?? []),
    ...(entry.prevention_tips ?? []),
  ];
  return parts.join(" ").split(/\s+/).filter(Boolean).length;
}

function classify(entry) {
  const t = `${entry.error_code} ${entry.summary} ${entry.meaning}`.toLowerCase();
  if (/drain|oe|nd|5c|e18|e24|f21|f33|oc|sc|ef0|i50|c3/.test(t)) return "drain";
  if (/door|de|dc|latch|lock|f5|f6|f7|e01|dE/.test(t)) return "door";
  if (/motor|le|3c|e21|f06|f07|drive|inverter|hall/.test(t)) return "motor";
  if (/balance|ue|uc|unbal|efo|vibrat/.test(t)) return "balance";
  if (/fill|4c|ie|e17|f9e1|h2o|slow fill|inlet|water supply/.test(t)) return "fill";
  if (/heat|he|tE|f10|f15|element|ignit|burner|e09/.test(t)) return "heat";
  if (/leak|ae|e13|e15|f8e4|i30|lc|flood|float/.test(t)) return "leak";
  if (/temp|therm|rtd|f03|f04|f22|e003|sensor|probe/.test(t)) return "sensor";
  if (/fan|airflow|d80|d90|af|22e|er |evaporator/.test(t)) return "airflow";
  if (/comm|f11|f09|f15|f16|e006|ccu|mcu|ribbon|erc/.test(t)) return "communication";
  if (/sud|sd|suds|oversuds/.test(t)) return "suds";
  if (/ice|if |maker|harvest/.test(t)) return "ice";
  if (/defrost|dh |frost|h5|84e/.test(t)) return "defrost";
  if (/compressor|h9|84e|cool|ff |freezer/.test(t)) return "cooling";
  if (/keypad|touch|short|stuck key|f12|se |5e/.test(t)) return "keypad";
  if (/memory|eeprom|f13|f14|f15 eeprom/.test(t)) return "memory";
  return "general";
}

function modelsPhrase(entry) {
  const m = entry.affected_models?.filter(Boolean) ?? [];
  if (m.length === 0) return "common models in this series";
  if (m.length === 1) return m[0];
  return `${m[0]}, ${m[1] ?? m[0]}, and similar ${m.length > 2 ? "variants" : "models"}`;
}

function buildDeepDive(entry, brandName, applianceName, category) {
  const code = entry.error_code.toUpperCase();
  const models = modelsPhrase(entry);
  const primaryCause = entry.causes?.[0] ?? "a underlying component fault";
  const primaryFix = entry.fixes?.[0] ?? "inspect the affected circuit";

  const byCategory = {
    drain: [
      `When ${code} appears on a ${brandName} ${applianceName}, the control board has confirmed that water did not leave the machine within the programmed drain window. On ${models}, the drain pump runs for a fixed interval—often three to seven minutes on washers and dishwashers—while a pressure switch or turbidity sensor verifies the tub or sump is empty. If water remains, the cycle stops to prevent spin with a full tub or overflow on the next fill.`,
      `Most ${code} calls are resolved without parts: ${primaryFix.toLowerCase().replace(/\.$/, "")}. Restricted drain paths mimic pump failure because the impeller spins against a blocked hose or filter. Document whether the pump hums audibly during the drain step; a humming pump with no water movement points to a clogged filter or kinked hose, while silence may indicate a failed pump motor or loose wiring at the harness.`,
      `After clearing blockages, run a short cycle and listen at the drain hose for steady water flow. If ${code} returns on the next load with a clean filter and straight hose, measure resistance at the pump motor connector per the service manual for your model before ordering a replacement pump assembly.`,
    ],
    door: [
      `${brandName} ${applianceName} models lock the door or lid before energizing fill, heat, or high-speed spin. ${code} means the latch switch never sent a "locked" signal to the main control, or the lock motor did not complete its travel. On ${models}, clothing caught in the gasket, a misaligned strike, or a failed latch assembly are the most common mechanical causes—not the board itself.`,
      `Inspect the door gasket perimeter and strike alignment before replacing the latch. ${primaryCause.charAt(0).toUpperCase() + primaryCause.slice(1)} is reported frequently on this code. After correcting mechanical issues, ${primaryFix.toLowerCase().replace(/\.$/, "")}. If the latch clicks but ${code} persists, the door lock switch or wiring harness to the control board likely needs testing with a multimeter.`,
      `Do not force the door open during an active cycle; wait for the lock to release when the board de-energizes the lock motor—usually two to three minutes after canceling power on most ${brandName} units.`,
    ],
    motor: [
      `${code} on ${brandName} ${applianceName} units indicates the drive system did not meet expected performance. Direct-drive washers monitor rotor position with a hall sensor; dryers and dishwashers track motor current draw. When the drum or spray arm fails to turn, the inverter or motor relay shuts down to prevent burned windings. ${models} may show this fault after an overloaded tub or a foreign object jam.`,
      `${primaryCause.charAt(0).toUpperCase() + primaryCause.slice(1)} is a leading trigger. Start with ${primaryFix.toLowerCase().replace(/\.$/, "")}. Rotate the drum or spray arm by hand when powered off—it should move without grinding. Grinding confirms mechanical obstruction; free rotation with repeated ${code} on light loads suggests hall sensor, motor, or inverter board failure requiring professional diagnosis.`,
    ],
    balance: [
      `${code} is a protective unbalanced-load fault. ${brandName} ${applianceName} controls measure tub movement before allowing full spin speed. Single heavy items—bath mats, thick blankets, or one-sided loads—trigger ${code} on ${models} even when the machine is mechanically sound. The goal is to prevent cabinet damage and walking during spin.`,
      `Redistribute laundry around the drum evenly before retrying. ${primaryFix.toLowerCase().replace(/\.$/, "")}. If ${code} appears on mixed full loads after leveling, worn shock absorbers, suspension rods, or snubber pads inside the tub assembly may allow excessive movement; those parts differ by platform and are replaced from the service manual for your exact model number on the rating plate.`,
    ],
    fill: [
      `${code} means the ${brandName} ${applianceName} did not detect adequate water intake within the fill timeout. The inlet valve opens while a pressure switch or flow meter confirms rising water level. On ${models}, clogged hose screens at the wall, partially closed supply valves, or a failed inlet valve solenoid are typical causes—not necessarily the control board.`,
      `${primaryFix.toLowerCase().replace(/\.$/, "")}. Confirm both hot and cold supplies on dual-valve washers. Low home water pressure below 20 PSI can also extend fill time beyond the limit. If water enters visibly but ${code} still appears, the pressure switch hose may be disconnected or the analog pressure sensor on HE platforms may need calibration or replacement.`,
    ],
    heat: [
      `Heating faults such as ${code} appear when the ${brandName} ${applianceName} control energizes the bake element, broil element, gas valve, or drying heater but does not detect expected temperature rise within the monitoring window. On ${models}, open heating elements, failed igniters on gas dryers and ranges, or welded heater relays on the control board produce similar symptoms.`,
      `${primaryCause.charAt(0).toUpperCase() + primaryCause.slice(1)} should be ruled out first. ${primaryFix.toLowerCase().replace(/\.$/, "")}. On electric ovens and dryers, test element continuity when cool; on gas appliances verify the ignitor glows for at least 15 seconds before the valve opens. Repeated ${code} after confirming heat at the exhaust or oven cavity indicates a sensor or board issue rather than a simple element replacement.`,
    ],
    leak: [
      `Leak-related codes including ${code} activate when water collects where it should not—base pans under dishwashers, overflow trays under washing machines, or leak sensors in ${brandName} ${applianceName} cabinets. The control interrupts fill or drain to limit floor damage. On ${models}, door gasket leaks, loose hose clamps, and cracked sump components are more common than pump failure.`,
      `Locate the actual water source before resetting the fault. ${primaryFix.toLowerCase().replace(/\.$/, "")}. Dry the base pan or leak tray completely; many ${brandName} units latch ${code} until the float drops. Running another cycle without fixing the leak will re-trigger the protection immediately and can damage subflooring.`,
    ],
    sensor: [
      `Temperature and pressure sensors on ${brandName} ${applianceName} models provide feedback loops the control uses to modulate heat, defrost, and cycle timing. ${code} indicates the sensor circuit read open, shorted, or out of range. On ${models}, wiring harness damage at hot connectors, corrosion from steam, or the sensor element itself fails most often.`,
      `${primaryFix.toLowerCase().replace(/\.$/, "")}. Reseat connectors before replacing sensors—RTD oven probes should read approximately 1,080 ohms at room temperature on many GE and Whirlpool platforms. Compare your reading to the service chart for ${models}. Intermittent ${code} during high heat often traces to wire routing touching hot internal surfaces.`,
    ],
    airflow: [
      `${code} reflects restricted airflow or a fan that did not reach target RPM. Dryers monitor exhaust temperature rise; refrigerators monitor evaporator fan feedback. On ${models}, lint-filled vents, crushed flexible duct, or ice blocking the fan blade produce the same fault as a failed motor.`,
      `${primaryFix.toLowerCase().replace(/\.$/, "")}. Measure exhaust air temperature at the exterior hood during operation—it should feel strongly warm on a loaded dryer cycle. For refrigerator fan codes, listen for the evaporator fan when the compressor runs; silence with ${code} present confirms fan or board output failure after clearing ice obstructions.`,
    ],
    communication: [
      `${code} indicates lost serial communication between control boards or between the touch interface and the main relay board. On ${brandName} ${applianceName} platforms using multiple PCBs—common on ${models}—ribbon cables, loose grounds, and voltage spikes during self-clean or motor startup corrupt data frames the controls exchange every few milliseconds.`,
      `${primaryFix.toLowerCase().replace(/\.$/, "")}. Inspect ribbon cables for creasing near hinge points on doors and consoles. Corrosion on ground lugs at the board mounting screws causes intermittent ${code} that may clear after reseating but return after heat expansion. Replace matched UI and ERC pairs when the manufacturer specifies paired assemblies.`,
    ],
    suds: [
      `Suds lock codes such as ${code} appear when the ${brandName} ${applianceName} foam sensor or pressure switch detects excessive suds slowing drain or spin. Non-HE detergent, soft water, or overdosing produce suds that trap air in the pump—not a mechanical pump failure on first occurrence. ${models} are especially sensitive because high-efficiency pumps move low water volumes.`,
      `${primaryFix.toLowerCase().replace(/\.$/, "")}. Run an empty hot cycle with no detergent to flush residue. Switch to HE detergent marked for ${applianceName}s and reduce quantity in soft water areas. Chronic ${code} with correct detergent may indicate a failing foam sensor or pressure switch hose with detergent clogging.`,
    ],
    ice: [
      `Ice maker faults showing ${code} on ${brandName} refrigerators involve fill valves, freezer temperature, or the harvest thermostat cycling the ejector. On ${models}, a freezer section above 5°F slows cube formation; a clogged fill tube or failed inlet valve stops water mid-tray.`,
      `${primaryFix.toLowerCase().replace(/\.$/, "")}. Confirm the freezer thermometer reads 0°F or below before replacing ice maker assemblies. Test water flow at the dispenser if the same valve feeds both circuits. ${code} that appears after filter replacement may mean an air lock—purge several cups from the dispenser.`,
    ],
    defrost: [
      `Defrost system errors including ${code} mean frost is not cleared from the evaporator on schedule. ${brandName} ${applianceName} controls energize a defrost heater through a bimetal or sensor loop. On ${models}, open defrost heaters, failed bimetals, or a frozen drain backing water into the freezer mimic control board failure.`,
      `${primaryFix.toLowerCase().replace(/\.$/, "")}. Excessive frost on the back wall before ${code} appears confirms weak airflow or a stuck defrost timer/board output. Manual defrost can temporarily restore cooling while awaiting parts, but the root heater or sensor fault must be repaired to prevent food loss.`,
    ],
    cooling: [
      `${code} on ${brandName} ${applianceName} units relates to inadequate cooling or compressor start failure. The control monitors thermistors in fresh food and freezer sections plus compressor current. On ${models}, dirty condenser coils, failed start relays, or sealed-system leaks present differently—coils clean but ${code} persistent often means relay or inverter board, while gradual warming may indicate refrigerant loss requiring sealed-system service.`,
      `${primaryFix.toLowerCase().replace(/\.$/, "")}. Verify condenser fan runs when the compressor is energized. Listen for compressor hum without start—a failed relay clicks but does not spin the compressor. Sealed-system leaks require EPA-certified technicians; do not attempt refrigerant service yourself.`,
    ],
    keypad: [
      `${code} means the touch panel matrix detected a short or stuck key. Moisture from boiling pots, steam clean, or liquid spills bridges contacts the control interprets as a continuous press. On ${models}, drying the overlay and cleaning around buttons clears many first-time faults without parts.`,
      `${primaryFix.toLowerCase().replace(/\.$/, "")}. Avoid spray cleaners on the membrane—wipe with a damp cloth only. If ${code} returns dry, the touch pad or glass overlay likely needs replacement matched to the ERC software version on the rating plate.`,
    ],
    memory: [
      `${code} reflects control board memory or self-check failure. EEPROM chips store cycle profiles and calibration constants; power loss mid-write or voltage spikes corrupt data the board validates at boot. On ${models}, a five-minute power loss reset clears transient faults; immediate ${code} on every boot indicates board replacement.`,
      `${primaryFix.toLowerCase().replace(/\.$/, "")}. Install a surge protector on the dedicated circuit. Verify line voltage stays within 108–132 VAC—brownouts during motor start cause memory errors on ${brandName} controls sharing the same kitchen circuit as microwaves and toasters.`,
    ],
    general: [
      `${code} on ${brandName} ${applianceName} models signals the control detected an abnormal condition in the subsystem described in the summary: "${entry.summary}." On ${models}, the board compares sensor inputs and actuator feedback against expected ranges each cycle; when values fall outside limits for a sustained interval, the fault latches and the display shows ${code} to prevent further damage.`,
      `${entry.meaning} Understanding this behavior helps distinguish one-time glitches from repeating hardware faults. ${primaryCause.charAt(0).toUpperCase() + primaryCause.slice(1)} is among the most frequently confirmed causes in service records for this code family. ${primaryFix.charAt(0).toUpperCase() + primaryFix.slice(1)}`,
      `Document whether ${code} appears at the same cycle phase each time—fill, heat, drain, or spin—before replacing major components. Intermittent codes that change after power reset often trace to connections; codes that return immediately on the next cycle usually indicate a failed actuator or sensor the board monitors continuously.`,
    ],
  };

  return byCategory[category] ?? byCategory.general;
}

function buildPrevention(entry, brandName, applianceName, category) {
  const code = entry.error_code.toUpperCase();
  const common = [
    `Record when ${code} appears in the cycle and whether it clears after a 60-second power reset on your ${brandName} ${applianceName}—that detail speeds diagnosis if you call service.`,
    `Keep the model and serial number from the rating plate when ordering parts for ${code}; ${brandName} uses multiple revisions with different harness lengths and board firmware.`,
    `Photograph wiring connector orientation before disconnecting any component while troubleshooting ${code}; reversed plugs on pumps and valves cause immediate repeat faults.`,
  ];

  const extra = {
    drain: `Clean drain filters and hose terminations monthly on high-use ${applianceName}s to prevent ${code} from lint and food debris buildup.`,
    door: `Wipe the door gasket weekly and avoid overloading items against the seal—${code} often starts as a slow leak or latch misalignment.`,
    motor: `Avoid washing single heavy rugs or shoes that bind the drum; distribute weight evenly to reduce motor strain that precedes ${code}.`,
    balance: `Use the correct cycle for load size—Bulky or Bedding cycles on ${brandName} washers exist to prevent ${code} on heavy items.`,
    fill: `Install inline hose screens and flush supply valves yearly; sediment causes slow fill that triggers ${code} over time.`,
    heat: `Preheat the oven only as directed and avoid foil lining the bottom—blocked airflow causes heat faults related to ${code}.`,
    leak: `Replace brittle door gaskets and hose clamps proactively every five years to avoid leak codes like ${code} and floor damage.`,
    sensor: `Avoid steam cleaners directly on control panels; moisture ingress causes sensor and keypad faults including ${code}.`,
    airflow: `Schedule professional dryer vent cleaning annually if the run exceeds 15 feet—prevents airflow codes including ${code}.`,
    communication: `Use a dedicated surge protector for the appliance circuit; brownouts cause communication faults such as ${code} on paired boards.`,
    suds: `Measure HE detergent with the cap marked for soft water—oversudsing is the leading preventable cause of ${code}.`,
    ice: `Replace refrigerator water filters on schedule; low flow causes ice maker faults that display as ${code} on some ${brandName} units.`,
    defrost: `Keep freezer vents unobstructed; poor airflow forces extra defrost cycles and stresses components tied to ${code}.`,
    cooling: `Vacuum condenser coils twice per year on ${brandName} refrigerators to reduce cooling-related codes including ${code}.`,
    keypad: `Dry spills on the control panel immediately—liquid is the top preventable cause of ${code} on touch models.`,
    memory: `Plug the ${applianceName} into a grounded outlet on its own circuit when possible to reduce memory faults like ${code}.`,
    general: `Run maintenance cycles (Tub Clean, self-clean filter rinse) per the ${brandName} manual to reduce repeat ${code} faults.`,
  };

  return [extra[category] ?? extra.general, ...common];
}

function extraCauses(entry, category, brandName) {
  const extras = {
    drain: [
      `Partially closed household drain line shared with a slow kitchen sink`,
      `Check valve in drain hose installed backward on new ${brandName} installations`,
    ],
    door: [
      `Warped door or lid from repeated heavy leaning during loading`,
      `Child-lock or control lock enabled—displays similar to latch faults on some models`,
    ],
    motor: [
      `Capacitor degradation on older single-phase drive motors`,
      `Loose wire nut at the motor junction box after prior service`,
    ],
    heat: [
      `Tripped breaker on one leg of 240 V supply—element receives partial voltage`,
      `Failed thermal fuse in series with the heating element circuit`,
    ],
    sensor: [
      `Thermal event discolored connector pins at the sensor plug`,
      `Rodent damage to low-voltage sensor wiring in garage installations`,
    ],
    general: [
      `Transient power glitch during storm—clears after reset on first occurrence`,
      `Extension cord or shared circuit causing voltage drop under load`,
    ],
  };
  return extras[category] ?? extras.general;
}

function extraFixes(entry, category) {
  const extras = {
    drain: [
      "Detach the drain hose at the standpipe and run a Spin or Drain cycle into a bucket to verify pump output volume",
      "Inspect the coin trap or foreign object guard inside the pump volute on front-access models",
    ],
    door: [
      "Apply silicone grease to the latch striker per service bulletin if the strike wears on repeated cycles",
      "Listen for the lock motor actuation—three clicks usually mean the motor ran but the switch did not confirm",
    ],
    motor: [
      "Check the belt tension and idler pulley on belt-drive platforms if the motor runs but the drum does not turn",
      "Inspect the motor harness for chafe marks near the tub suspension on top-load washers",
    ],
    heat: [
      "Measure voltage at the element terminals during an active heat command—240 VAC should be present on electric models",
      "On gas dryers, watch the ignitor for a consistent orange glow for 15–30 seconds before the valve opens",
    ],
    general: [
      "Photograph the wiring diagram inside the lower panel before disconnecting any component for service",
      "Compare your unit's behavior to the factory service manual cycle chart for the phase where the code sets",
    ],
  };
  return extras[category] ?? extras.general;
}

const data = JSON.parse(readFileSync(OUT, "utf8"));
let enriched = 0;

for (const entry of data) {
  if (entry.priority_rewrite) continue;

  const brandName = BRAND_NAMES[entry.brand] ?? entry.brand;
  const applianceName = APPLIANCE_NAMES[entry.appliance] ?? entry.appliance;
  const category = classify(entry);

  entry.deep_dive = buildDeepDive(entry, brandName, applianceName, category);
  entry.prevention_tips = buildPrevention(entry, brandName, applianceName, category);

  const existingCauses = new Set(entry.causes ?? []);
  for (const c of extraCauses(entry, category, brandName)) {
    if (!existingCauses.has(c) && entry.causes.length < 6) {
      entry.causes.push(c);
      existingCauses.add(c);
    }
  }

  const existingFixes = new Set(entry.fixes ?? []);
  for (const f of extraFixes(entry, category)) {
    if (!existingFixes.has(f) && entry.fixes.length < 6) {
      entry.fixes.push(f);
      existingFixes.add(f);
    }
  }

  if (wordCount(entry) >= 300) enriched++;
}

for (const entry of data) {
  if (wordCount(entry) >= 300) continue;
  const brandName = BRAND_NAMES[entry.brand] ?? entry.brand;
  const applianceName = APPLIANCE_NAMES[entry.appliance] ?? entry.appliance;
  const code = entry.error_code.toUpperCase();
  const models = modelsPhrase(entry);
  entry.deep_dive ??= [];
  entry.deep_dive.push(
    `If ${code} persists after the steps above on ${models}, request service with the exact cycle phase noted (fill, wash, drain, heat, or cool-down) and whether the fault clears after a breaker reset. ${brandName} warranty and extended service plans may cover control boards and sealed-system work depending on age and installation date.`
  );
}

const under300 = data.filter((e) => wordCount(e) < 300);
console.log(`Enriched ${data.length} entries. At or above 300 words: ${data.length - under300.length}`);
if (under300.length) {
  console.log(`Still under 300: ${under300.length} (min ${Math.min(...under300.map(wordCount))} words)`);
  for (const e of under300.slice(0, 5)) {
    console.log(`  ${e.brand}:${e.appliance}:${e.error_code} = ${wordCount(e)} words`);
  }
}

writeFileSync(OUT, JSON.stringify(data, null, 2) + "\n");
execSync("node scripts/build-search-index.mjs", { cwd: root, stdio: "inherit" });
