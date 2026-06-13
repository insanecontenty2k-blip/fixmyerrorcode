/** Researched unique copy — Bosch oven/range codes. Sources: AppliancePartsPros, Sears PartsDirect, Appliance Helpers */
export default [
  {
    brand: "bosch", appliance: "oven", error_code: "f31",
    title: "Bosch Oven F31 Error Code",
    summary: "Oven temperature sensor short circuit",
    meta_description: "Bosch F31 means shorted oven temp sensor. Turn off breaker, inspect probe wiring—replace sensor if resistance reads near zero.",
    meaning: "F31 indicates a short circuit in the oven temperature sensor—the PT500 probe in the upper rear cavity sent resistance near zero, so the board disables bake and broil to prevent uncontrolled heating.",
    causes: [
      "Sensor wire pinched against oven cavity metal during rack insertion",
      "Shorted RTD probe from grease fire or steam damage",
      "Moisture bridge across sensor terminals after cleaning",
      "Harness chafe at the door hinge pass-through"
    ],
    fixes: [
      "Turn off the breaker and allow the oven to cool completely",
      "Locate the sensor rod entering the upper rear wall and follow wires to the rear harness",
      "Reseat the connector and inspect for bare wires touching chassis metal",
      "Allow twenty-four hours dry time if steam cleaning triggered F31 once"
    ],
    when_to_call_technician: "Replace the oven temperature sensor if short persists with the probe unplugged from the board side.",
    affected_models: ["Bosch HBL8753UC", "Bosch HBL8454UC", "Bosch HBE5451UC"],
    related_codes: ["f32", "f35", "f111"],
    difficulty: "medium", estimated_time: "30 min"
  },
  {
    brand: "bosch", appliance: "oven", error_code: "f32",
    title: "Bosch Oven F32 Error Code",
    summary: "Open circuit in oven temperature sensor",
    meta_description: "Bosch F32 means broken oven sensor circuit. Test probe ohms at room temp—expect about 1080Ω, not open infinity.",
    meaning: "F32 indicates an open break in the oven temperature sensor circuit—the probe or wiring lost continuity, so the control cannot read cavity temperature. On double ovens, F32 often refers to the lower cavity sensor per Bosch service literature.",
    causes: [
      "Broken sensor rod from impact during rack sliding",
      "Wire broken at the P24 connector on the power board",
      "Connector unplugged during prior service",
      "Open RTD element inside the probe tip"
    ],
    fixes: [
      "Turn off breaker before touching sensor wiring",
      "Disconnect the sensor at the board and measure ohms—approximately 1080Ω at room temperature",
      "Inspect the full wire path for breaks especially where wires bend into the cavity",
      "Reseat P24 on the power board if solder joints look cracked"
    ],
    when_to_call_technician: "Infinite ohms at the probe with intact visible wiring requires sensor replacement; if sensor tests good, replace the power board.",
    affected_models: ["Bosch HBLP751UC", "Bosch HBL8454UC", "Bosch HBL8753UC"],
    related_codes: ["f31", "f36", "f111"],
    difficulty: "medium", estimated_time: "30 min"
  },
  {
    brand: "bosch", appliance: "oven", error_code: "f33",
    title: "Bosch Oven F33 Error Code",
    summary: "Warming drawer sensor short circuit",
    meta_description: "Bosch F33 means shorted warming drawer sensor. Unplug range, check drawer probe wiring at the rear connector.",
    meaning: "F33 indicates a short circuit in the warming drawer temperature sensor—the probe that monitors the drawer cavity sent abnormally low resistance, disabling warming drawer heat on models with a separate warming zone below the oven.",
    causes: [
      "Drawer sensor wire crushed when the drawer was forced closed",
      "Spilled liquid shorting the drawer probe connector",
      "Failed RTD shorted to ground inside the drawer cavity",
      "Harness pinch between drawer slide and cabinet"
    ],
    fixes: [
      "Turn off breaker and pull the warming drawer out fully",
      "Inspect the sensor entering the drawer rear wall and its harness along the slide",
      "Dry any moisture at the connector before reseat",
      "Test drawer sensor ohms per manual—should not read near zero"
    ],
    when_to_call_technician: "Persistent F33 with dry, intact wiring requires warming drawer sensor replacement.",
    affected_models: ["Bosch HBLP751UC", "Bosch HBL8753UC", "Bosch HBL8443UC"],
    related_codes: ["f34", "f31", "f32"],
    difficulty: "medium", estimated_time: "30 min"
  },
  {
    brand: "bosch", appliance: "oven", error_code: "f34",
    title: "Bosch Oven F34 Error Code",
    summary: "Open circuit in warming drawer sensor",
    meta_description: "Bosch F34 means warming drawer sensor open. Check probe connection; replace drawer sensor if F34 persists.",
    meaning: "F34 signifies an open break in the warming drawer sensor circuit—the drawer heat zone cannot regulate temperature without a valid probe signal and the display locks warming functions until F34 clears.",
    causes: [
      "Drawer removed for cleaning without disconnecting carefully—wire pulled loose",
      "Open RTD in the drawer probe from age",
      "Connector corrosion at the power board warming drawer input",
      "Broken wire in the drawer slide flex area"
    ],
    fixes: [
      "Turn off breaker and remove the warming drawer to access the rear sensor port",
      "Reseat the probe connector and inspect for broken wires at the slide hinge",
      "Measure sensor resistance—open infinity confirms probe or wire failure",
      "Retry warming drawer on low after one reseat attempt"
    ],
    when_to_call_technician: "Replace the warming drawer temperature sensor when ohms read open at the probe body.",
    affected_models: ["Bosch HBL8454UC", "Bosch HBLP751UC", "Bosch HBE5451UC"],
    related_codes: ["f33", "f31", "f41"],
    difficulty: "medium", estimated_time: "30 min"
  },
  {
    brand: "bosch", appliance: "oven", error_code: "f35",
    title: "Bosch Oven F35 Error Code",
    summary: "Upper oven cavity sensor out of range",
    meta_description: "Bosch F35 flags upper oven sensor failure on double units. Reseat P24 connector; replace upper probe if F35 returns.",
    meaning: "F35 on Bosch double-wall ovens indicates the upper cavity temperature sensor failed open or short—similar family to F31/F32 but logged specifically for the upper oven zone on dual-cavity models like the HBL8753UC series.",
    causes: [
      "Upper probe damaged by broil element overshoot or rack impact",
      "P24 power board connector loose on double-oven harness",
      "Wire pinched between upper and lower cavity divider insulation",
      "Upper sensor RTD drifted out of calibration range"
    ],
    fixes: [
      "Turn off breaker and identify the upper cavity probe at the rear top wall",
      "Reseat P24 and the sensor plug at the power board per service diagram",
      "Test upper sensor ohms separately from lower if two probes are present",
      "Run upper oven bake at 350°F only after wiring verification"
    ],
    when_to_call_technician: "Upper sensor replacement on double ovens is tight—professional service avoids damaging cavity insulation.",
    affected_models: ["Bosch HBL8753UC", "Bosch HBLP751UC", "Bosch HBL8443UC"],
    related_codes: ["f31", "f36", "f111"],
    difficulty: "medium", estimated_time: "30 min"
  },
  {
    brand: "bosch", appliance: "oven", error_code: "f36",
    title: "Bosch Oven F36 Error Code",
    summary: "Lower oven temperature sensor shorted",
    meta_description: "Bosch F36 means lower oven sensor short on double units. Inspect lower probe wiring for pinched shorts to chassis.",
    meaning: "F36 indicates a short circuit in the lower oven temperature sensor on dual-cavity Bosch wall ovens—the lower probe circuit read grounded or near-zero resistance, disabling lower bake and broil.",
    causes: [
      "Lower cavity sensor wire routed through hot air gap and melted insulation",
      "Short at P24 lower sensor pins on the power board",
      "Metal rack screw dropped behind cavity piercing harness",
      "Failed lower RTD shorted internally"
    ],
    fixes: [
      "Turn off breaker and access the lower rear sensor from inside the lower cavity",
      "Inspect where lower wires pass through insulation for pinches",
      "Disconnect lower sensor and ohm to ground—should be isolated from chassis",
      "Reseat P24 lower sensor pins if visible corrosion present"
    ],
    when_to_call_technician: "Lower sensor short with intact external wiring requires probe replacement from the rear service panel.",
    affected_models: ["Bosch HBL8753UC", "Bosch HBL8454UC", "Bosch HBLP751UC"],
    related_codes: ["f32", "f35", "f44"],
    difficulty: "medium", estimated_time: "30 min"
  },
  {
    brand: "bosch", appliance: "oven", error_code: "f37",
    title: "Bosch Oven F37 Error Code",
    summary: "Convection cooling fan not running",
    meta_description: "Bosch F37 means convection fan fault. Listen for fan at preheat; F37 blocks convection modes until fan or wiring is repaired.",
    meaning: "F37 indicates the convection cooling fan did not start or did not reach expected speed—the fan that moves air past the convection element on European-style Bosch ovens failed self-test, so convection bake and roast modes are disabled.",
    causes: [
      "Convection fan blade obstructed by foil or rack misplacement",
      "Failed convection fan motor capacitor or winding",
      "Loose P10 connector at the fan motor harness",
      "Power board fan relay not energizing after self-clean heat stress"
    ],
    fixes: [
      "Turn off breaker and verify no foil or paper lined the convection cavity",
      "Spin the convection fan blade by hand when cool—it should rotate freely",
      "Restore power and listen at preheat start on Convection Bake 350°F",
      "Use standard Bake until F37 clears—avoid self-clean until fan is verified"
    ],
    when_to_call_technician: "Silent convection fan with free blade rotation requires motor or power board fan circuit service.",
    affected_models: ["Bosch HBL8454UC", "Bosch HBE5451UC", "Bosch HBL8753UC"],
    related_codes: ["f111", "f41", "f31"],
    difficulty: "hard", estimated_time: "Call technician"
  },
  {
    brand: "bosch", appliance: "oven", error_code: "f38",
    title: "Bosch Oven F38 Error Code",
    summary: "Door lock motor overcurrent during lock attempt",
    meta_description: "Bosch F38 means door lock motor fault during lock cycle. Clean latch area; F38 before self-clean needs latch service.",
    meaning: "F38 logs door lock motor overcurrent—the motorized latch drew excessive current trying to engage, often before self-clean when the lock must secure the door above 900°F operating temperatures.",
    causes: [
      "Food debris or foil scraps jamming the latch hook",
      "Misaligned door hinge preventing latch alignment",
      "Weak latch motor gears stripped after repeated self-clean cycles",
      "Latch switch stuck closed telling the board the door is already locked"
    ],
    fixes: [
      "Turn off breaker and clean the latch receiver on the frame and hook on the door",
      "Open and close the door fully—feel for binding before starting self-clean",
      "Power-cycle five minutes and retry lock on self-clean only after cleaning",
      "Do not force the latch manually with pliers—risk bending the motor cam"
    ],
    when_to_call_technician: "F38 repeating on a clean latch path requires door latch motor assembly replacement.",
    affected_models: ["Bosch HBL8753UC", "Bosch HBLP751UC", "Bosch HBL8443UC"],
    related_codes: ["f41", "f43", "f45"],
    difficulty: "hard", estimated_time: "Call technician"
  },
  {
    brand: "bosch", appliance: "oven", error_code: "f39",
    title: "Bosch Oven F39 Error Code",
    summary: "Meat probe sensor short circuit",
    meta_description: "Bosch F39 means shorted meat probe circuit. Unplug probe jack; if F39 clears, replace the probe—not the oven sensor.",
    meaning: "F39 indicates a short circuit in the meat probe input—the jack on the control panel detected low resistance on the probe circuit while probe mode was selected or a probe was inserted.",
    causes: [
      "Meat probe cable damaged with conductors touching",
      "Moisture in the probe jack after cleaning",
      "Probe inserted while oven was in self-clean lockout confusing the board",
      "Internal jack wiring shorted to chassis"
    ],
    fixes: [
      "Turn off breaker and remove any probe from the jack",
      "Dry the probe port with a soft cloth if wet",
      "Inspect probe cable for cuts or melted spots near the handle",
      "Retry without probe on standard Bake—F39 should not appear"
    ],
    when_to_call_technician: "F39 with no probe inserted suggests jack or board probe circuit repair; replace probe if short follows the accessory.",
    affected_models: ["Bosch HBL8454UC", "Bosch HBE5451UC", "Bosch HBL8753UC"],
    related_codes: ["f40", "f31", "f32"],
    difficulty: "easy", estimated_time: "10 min"
  },
  {
    brand: "bosch", appliance: "oven", error_code: "f40",
    title: "Bosch Oven F40 Error Code",
    summary: "Meat probe open circuit or not detected",
    meta_description: "Bosch F40 means meat probe not connected or failed open. Reseat probe fully; replace probe if F40 persists in probe mode.",
    meaning: "F40 indicates a meat probe error—the control selected probe cooking but the jack read an open circuit, as if no probe was inserted or the probe RTD failed internally.",
    causes: [
      "Probe not fully seated in the jack",
      "Open circuit in probe tip RTD from repeated high-temp use",
      "Broken probe wire at the strain relief by the handle",
      "Jack connector loose on the control board"
    ],
    fixes: [
      "Insert the Bosch probe firmly until it clicks in the jack",
      "Wiggle gently—intermittent F40 often means a frayed probe cable",
      "Test standard Bake without probe to confirm oven otherwise heats",
      "Replace the probe if F40 only appears when probe is fully seated"
    ],
    when_to_call_technician: "New probe with persistent F40 requires control panel probe jack or board service.",
    affected_models: ["Bosch HBL8454UC", "Bosch HBLP751UC", "Bosch HBE5451UC"],
    related_codes: ["f39", "f31", "f151"],
    difficulty: "easy", estimated_time: "10 min"
  },
  {
    brand: "bosch", appliance: "oven", error_code: "f41",
    title: "Bosch Oven F41 Error Code",
    summary: "Oven door latch will not lock",
    meta_description: "Bosch F41 means self-clean latch failed to lock. Clean latch path, power-cycle; F41 blocks pyrolytic clean until repaired.",
    meaning: "F41 means the upper or single oven motorized latch will not lock—the latch motor ran but switches never confirmed a locked position, so self-clean cannot start. Standard baking may still work on some models.",
    causes: [
      "Latch hook obstructed by spilled food hardened near the frame",
      "P24 connector loose on the power board",
      "Latch motor failed after prior F38 overcurrent events",
      "Door slightly misaligned on hinge cam wear"
    ],
    fixes: [
      "Turn off breaker and scrape debris from the latch slot with a plastic tool",
      "Reseat P24 at the power board if accessible from the rear service panel",
      "Close the door and listen for latch motor whir during self-clean attempt",
      "Avoid self-clean until F41 clears—forced heat without lock is unsafe"
    ],
    when_to_call_technician: "F41 with clean latch track requires door latch motor assembly replacement.",
    affected_models: ["Bosch HBL8753UC", "Bosch HBLP751UC", "Bosch HBL8454UC"],
    related_codes: ["f45", "f43", "f38"],
    difficulty: "hard", estimated_time: "Call technician"
  },
  {
    brand: "bosch", appliance: "oven", error_code: "f42",
    title: "Bosch Oven F42 Error Code",
    summary: "Lower oven door latch will not lock",
    meta_description: "Bosch F42 means lower cavity latch failed on double ovens. Clean lower latch; service motor if self-clean won't start below.",
    meaning: "F42 on Bosch double ovens indicates the lower motorized latch will not lock—same failure mode as F41 but for the lower cavity used independently on dual-wall units.",
    causes: [
      "Lower door latch obstructed by rack or foil left in the cavity",
      "P10 latch motor wire pinched to chassis on lower hinge side",
      "Lower latch switch stuck open",
      "Lower latch motor gear failure"
    ],
    fixes: [
      "Remove all racks and debris from the lower cavity before lock attempt",
      "Clean the lower latch receiver and verify the door closes flush",
      "Power-cycle five minutes and retry lower self-clean only",
      "Check P10 connector per service bulletin if rear access is available"
    ],
    when_to_call_technician: "Lower latch motor or switch replacement is required when F42 persists on a clean, aligned door.",
    affected_models: ["Bosch HBL8753UC", "Bosch HBL8443UC", "Bosch HBLP751UC"],
    related_codes: ["f44", "f41", "f43"],
    difficulty: "hard", estimated_time: "Call technician"
  },
  {
    brand: "bosch", appliance: "oven", error_code: "f43",
    title: "Bosch Oven F43 Error Code",
    summary: "Upper latch motor or wiring fault",
    meta_description: "Bosch F43 flags upper door latch motor wiring fault. Inspect P24 and P10; replace latch assembly if F43 repeats.",
    meaning: "F43 indicates the upper or single oven latch motor or its wiring failed during a lock command—Bosch service literature groups F43 with jammed switches, pinched common wires, and defective latch motors on the power board P24 circuit.",
    causes: [
      "Latch motor wire pinched between oven frame and chassis",
      "Common wire shorted to ground on the latch harness",
      "Broken solder joint in P24 header on the power board",
      "Latch motor windings failed open"
    ],
    fixes: [
      "Turn off breaker and inspect latch wiring visible at the door hinge pass-through",
      "Verify latch switches click manually when the hook engages—do not bypass switches",
      "Reseat P24 and P10 connectors from the rear service access",
      "Do not run self-clean until latch confirms lock audibly"
    ],
    when_to_call_technician: "F43 after connector reseat requires latch motor assembly or power board replacement.",
    affected_models: ["Bosch HBL8753UC", "Bosch HBL8454UC", "Bosch HBLP751UC"],
    related_codes: ["f41", "f45", "f38"],
    difficulty: "hard", estimated_time: "Call technician"
  },
  {
    brand: "bosch", appliance: "oven", error_code: "f44",
    title: "Bosch Oven F44 Error Code",
    summary: "Lower latch motor or wiring fault",
    meta_description: "Bosch F44 means lower oven latch wiring fault on doubles. Check P10 harness; replace lower latch if F44 persists.",
    meaning: "F44 indicates lower oven latch motor or wiring failure on dual-cavity models—the lower lock circuit on P24/P10 did not complete, blocking lower self-clean and sometimes lower bake safety interlocks.",
    causes: [
      "Lower hinge wire harness chafed after repeated door removal",
      "Lower latch switch not releasing after manual door pull during a lock attempt",
      "P10 connector corrosion on the lower latch branch",
      "Lower latch motor failed mechanically mid-travel"
    ],
    fixes: [
      "Turn off breaker and inspect lower hinge area for visible wire damage",
      "Operate the lower door slowly—binding suggests hinge cam wear affecting latch alignment",
      "Reseat P10 if rear access is available per model service sheet",
      "Avoid forcing the lower door during an active lock attempt"
    ],
    when_to_call_technician: "F44 with intact visible wiring requires lower door latch assembly replacement.",
    affected_models: ["Bosch HBL8753UC", "Bosch HBL8443UC", "Bosch HBL8454UC"],
    related_codes: ["f42", "f43", "f36"],
    difficulty: "hard", estimated_time: "Call technician"
  },
  {
    brand: "bosch", appliance: "oven", error_code: "f45",
    title: "Bosch Oven F45 Error Code",
    summary: "Door latch switches stuck or defective",
    meta_description: "Bosch F45 means latch switches read wrong. Inspect switch actuators; replace latch assembly if switches fail manual test.",
    meaning: "F45 means the electronic control detected door latch sensor switches stuck or defective—the motor may move but microswitches on the latch assembly do not change state, so the board refuses heat modes that require a confirmed lock or unlock position.",
    causes: [
      "Latch switch lever stuck from grease carbonization",
      "Switch internal contacts welded after arcing",
      "Common wire pinched between latch bracket and chassis",
      "Latch assembly physically intact but switches no longer toggle"
    ],
    fixes: [
      "Turn off breaker and manually actuate the latch hook—switches should audibly click",
      "Clean grease from the latch cam area with degreaser on a cloth, not dripping liquid into switches",
      "Reseat P24 connector at the power board",
      "Retry standard Bake before self-clean to confirm basic switch feedback"
    ],
    when_to_call_technician: "Replace the door latch assembly when switches fail to toggle during manual hook movement.",
    affected_models: ["Bosch HBL8753UC", "Bosch HBLP751UC", "Bosch HBE5451UC"],
    related_codes: ["f41", "f43", "f38"],
    difficulty: "hard", estimated_time: "Call technician"
  }
];
