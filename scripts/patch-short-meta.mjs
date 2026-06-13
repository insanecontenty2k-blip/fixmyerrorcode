import { readFileSync, writeFileSync } from "node:fs";

const PATCHES = {
  "frigidaire:oven:f11":
    "Frigidaire oven F11 means a shorted touchpad key. Dry the control panel after spills, clean grease from buttons, and replace the overlay if the short persists.",
  "ge:dryer:e003":
    "GE dryer E003 is an open exhaust thermistor fault. Reseat the sensor plug at the blower housing, inspect wiring, and replace the thermistor if readings stay open.",
  "ge:dryer:e006":
    "GE dryer E006 is a console-to-board communication fault. Reseat the ribbon cable at the main control, check for corrosion, and replace the UI if E006 returns.",
  "ge:dryer:e007":
    "GE dryer E007 means a shorted moisture sensor bar circuit. Dry the sensor bars, inspect the harness at the drum, and replace the sensor if the short persists.",
  "ge:dryer:e009":
    "GE dryer E009 indicates a shorted keypad on the console. Dry the panel after spills, clean around buttons, and replace the UI assembly if E009 latches.",
  "ge:refrigerator:h2":
    "GE refrigerator H2 is a fresh-food duct sensor error. Reseat the sensor clip in the duct, test resistance, and replace the thermistor if H2 returns after reset.",
  "ge:refrigerator:h5":
    "GE refrigerator H5 points to a defrost thermostat fault. Test the bimetal on the evaporator for continuity when cold, and replace if open at freezer temperature.",
  "ge:refrigerator:h9":
    "GE refrigerator H9 signals a compressor start fault. Test the start relay and overload at the compressor, verify wiring, and call a tech if the compressor will not run.",
  "ge:oven:f03":
    "GE oven F03 means the RTD temperature probe circuit is open. Reseat the probe connector, test ~1080 ohms at room temp, and replace the probe if F03 persists.",
  "ge:oven:f04":
    "GE oven F04 means a shorted RTD probe circuit. Inspect wire routing behind the range, replace a damaged probe, and verify the connector at the ERC is clean.",
  "ge:oven:f05":
    "GE oven F05 is a door lock error on self-clean models. Clean the latch mechanism, verify the lock motor runs, and replace the latch assembly if F05 repeats.",
  "ge:oven:f06":
    "GE oven F06 indicates a lock switch fault during self-clean. Test latch microswitches with the door shut, reseat harness plugs, and replace worn lock switches.",
  "ge:oven:f07":
    "GE oven F07 means the lock motor failed during the self-clean cycle. Test voltage at the motor during lock, inspect gears, and replace the motor if it does not turn.",
  "ge:oven:f08":
    "GE oven F08 is a cooling fan error. Spin the fan by hand when cool, reseat the rear harness, and replace the fan motor if the board still reports F08.",
  "ge:oven:f10":
    "GE oven F10 means runaway heat detected. Power off immediately, test bake element and RTD for shorts, and replace the ERC if F10 returns after cooling down.",
  "ge:oven:f11":
    "GE oven F11 means a shorted key on the touchpad. Dry the control panel after spills, clean grease around buttons, and replace the touchpad if F11 will not clear.",
  "ge:oven:f12":
    "GE oven F12 means a stuck key on the keypad. Clean grease and debris around buttons, dry the overlay after steam, and replace the UI if one key reads pressed.",
  "ge:oven:f13":
    "GE oven F13 is an ERC memory error. Unplug for five minutes to reset, verify power is stable, and replace the electronic range control if F13 returns on boot.",
  "ge:oven:f14":
    "GE oven F14 is a control data mismatch fault. Confirm the correct ERC part number for your model, reseat UI ribbons, and replace the board if F14 persists.",
  "ge:oven:f15":
    "GE oven F15 means the UI lost communication with the ERC. Reseat the ribbon cable between console and board, check grounds, and replace the ERC if F15 latches.",
  "ge:oven:f16":
    "GE oven F16 is a display-to-control communication error. Reseat UI and ERC ribbons, verify matched board pair, and replace the failed assembly if F16 repeats.",
  "ge:oven:f17":
    "GE oven F17 indicates a meat probe jack fault. Seat the probe fully, inspect jack wiring at the ERC, and replace the probe or receptacle if F17 persists while inserted.",
};

const path = "data/error-codes.json";
const data = JSON.parse(readFileSync(path, "utf8"));
let updated = 0;

for (const entry of data) {
  const key = `${entry.brand}:${entry.appliance}:${entry.error_code}`;
  const patch = PATCHES[key];
  if (patch) {
    entry.meta_description = patch;
    updated++;
  }
}

writeFileSync(path, `${JSON.stringify(data, null, 2)}\n`);
console.log(`Patched ${updated} meta descriptions.`);
