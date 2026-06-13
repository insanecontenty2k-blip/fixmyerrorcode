/** Keyword-target additions — LG codes not in primary brand files. Sources: LG USA Support, service manuals */
export default [
  {
    brand: "lg", appliance: "dryer", error_code: "te1",
    title: "LG Dryer tE1 Error Code",
    summary: "Inlet thermistor reading out of range",
    meta_description: "LG dryer tE1 means the inlet air thermistor failed. Clean the heat exchanger area, reseat the sensor plug, and test after vent service.",
    meaning: "tE1 is a thermistor sub-fault on LG condenser and heat-pump dryers—the sensor at the inlet heat exchanger sent resistance outside the board's valid range. Unlike exhaust tE, tE1 points to the cooler inlet path where lint and condensate collect.",
    causes: [
      "Condensate dripping onto the inlet thermistor harness after a long steam cycle",
      "Lint mat blocking airflow across the inlet sensor housing",
      "Thermistor wire chafed where the drum seal meets the front bulkhead",
      "Failed inlet thermistor after repeated overheat from blocked condenser coils"
    ],
    fixes: [
      "Unplug the dryer and vacuum the condenser coil behind the lower front panel per your model guide",
      "Locate the inlet thermistor near the heat exchanger and firmly reseat its two-pin connector",
      "Wipe moisture from the sensor pocket and allow the cabinet to dry one hour before retest",
      "Run a Timed Dry on low heat for ten minutes and confirm tE1 does not return at startup"
    ],
    when_to_call_technician: "tE1 after coil cleaning and connector reseat needs thermistor resistance checked against LG spec—open readings require sensor or board service.",
    affected_models: ["LG DLHC5502W", "LG DLHC1455W", "LG DLHC8888W"],
    related_codes: ["te", "he", "d80"],
    difficulty: "medium", estimated_time: "30 min"
  },
  {
    brand: "lg", appliance: "washing-machine", error_code: "u5",
    title: "LG Washing Machine u5 Error Code",
    summary: "Door lock cannot release after cycle",
    meta_description: "LG washer u5 means unable to unlock door. Wait two minutes, drain water, then check door lock motor and wiring if u5 persists.",
    meaning: "u5 reports Unable to Unlock—the door lock motor energized to release but the latch never reported an open position within the timeout. Water may still be in the tub, which is why LG blocks the door until the fault clears or you drain manually.",
    causes: [
      "Standing water in the tub keeping pressure on the door seal",
      "Door lock motor burned out on the release stroke",
      "Broken door latch hook binding the lock mechanism",
      "Control board relay stuck energizing lock without releasing"
    ],
    fixes: [
      "Wait two minutes without forcing the door—LG may auto-retry the unlock sequence",
      "Open the lower front access panel, drain the emergency hose into a pan, then press Start/Pause to retry unlock",
      "Unplug for five minutes, restore power, and run Spin Only after confirming the drum is empty",
      "If the door opens manually after drain but u5 returns every cycle, stop forcing the latch and schedule lock service"
    ],
    when_to_call_technician: "Door stays locked with an empty drum after power reset—the door lock assembly or main PCB likely needs replacement.",
    affected_models: ["LG WM4000HWA", "LG WM3900HWA", "LG WM3500CW"],
    related_codes: ["de", "oe", "le"],
    difficulty: "medium", estimated_time: "30 min"
  },
  {
    brand: "lg", appliance: "washing-machine", error_code: "cl",
    title: "LG Washing Machine CL Error Code",
    summary: "Child Lock active—not a mechanical fault",
    meta_description: "LG washer CL means Child Lock is on. Hold Temp and Options three seconds to disable—buttons stay dead until CL clears.",
    meaning: "CL is Child Lock, not a failure code. LG disables cycle selection and temperature buttons so children cannot start or change a wash. The display may flash CL when any locked button is pressed.",
    causes: [
      "Child Lock enabled by holding Temp and Options together during cleaning",
      "SmartThinQ app lock turned on remotely",
      "Power surge restoring lock state on some firmware builds",
      "Guest accidentally activating lock while wiping the control panel"
    ],
    fixes: [
      "Press and hold the Temp and Options buttons together for three seconds until CL disappears",
      "On models with a dedicated Lock key, hold Lock three seconds instead",
      "Open the ThinQ app and disable Control Lock under appliance settings",
      "Confirm buttons respond after CL clears by changing spin speed on an idle machine"
    ],
    when_to_call_technician: "Only if the panel stays unresponsive after CL is gone—then suspect UI board failure, not the lock feature.",
    affected_models: ["LG WM3400CW", "LG WT7800CW", "LG WM8100HVA"],
    related_codes: ["de", "pe", "ue"],
    difficulty: "easy", estimated_time: "5 min"
  },
  {
    brand: "lg", appliance: "dishwasher", error_code: "6e",
    title: "LG Dishwasher 6E Error Code",
    summary: "Inlet water flow too low during fill",
    meta_description: "LG dishwasher 6E means weak inlet flow. Open supply valve, clean inlet screen, straighten hose, and confirm hot water at the sink.",
    meaning: "6E is LG's inlet flow error—the fill valve opened but the flow meter or level switch did not see enough water within the programmed window. The cycle aborts before wash to avoid running the pump dry.",
    causes: [
      "Hot supply valve under the sink closed or only partially open",
      "Inlet hose kinked where it passes through the cabinet side panel",
      "Mesh strainer at the dishwasher inlet clogged with pipe scale",
      "Failed inlet valve solenoid passing only a trickle on one side"
    ],
    fixes: [
      "Run hot water at the kitchen sink for thirty seconds, then open the dishwasher supply valve fully",
      "Inspect the copper or braided inlet line for sharp bends behind the kick plate",
      "Disconnect the inlet hose at the dishwasher, rinse the internal screen into a bucket, and reconnect",
      "Power-cycle two minutes and start a Normal cycle—listen for steady fill hiss in the first minute"
    ],
    when_to_call_technician: "Strong flow at the disconnected inlet with 6E during fill points to inlet valve or flow sensor replacement under the tub.",
    affected_models: ["LG LDF5545ST", "LG LDP6797ST", "LG LDTS5552S"],
    related_codes: ["ie", "oe", "fe"],
    difficulty: "easy", estimated_time: "15 min"
  },
  {
    brand: "lg", appliance: "refrigerator", error_code: "che",
    title: "LG Refrigerator CHE Error Code",
    summary: "Compressor or inverter communication fault",
    meta_description: "LG CHE means compressor system error. Power reset, check rear harness at inverter board—persistent CHE needs compressor service.",
    meaning: "CHE is a Compressor Error on LG linear inverter refrigerators—the main board lost valid feedback from the inverter or compressor windings. Cooling may stop while the display shows CHE, and freezer temps climb within hours.",
    causes: [
      "Loose three-wire harness between main PCB and inverter board at the rear bottom",
      "Inverter board overheated after condenser coils were never cleaned",
      "Compressor winding fault detected by the inverter driver",
      "Power surge damaging inverter communication circuitry"
    ],
    fixes: [
      "Unplug or flip the breaker for five minutes for a full board reset",
      "Pull the fridge forward safely and vacuum condenser coils at the bottom rear grille",
      "Reseat the inverter-to-compressor harness plug—LG marks it with a colored clip",
      "Monitor freezer temp for four hours after reset; note whether CHE returns on schedule"
    ],
    when_to_call_technician: "CHE that reappears within three hours after coil cleaning and harness reseat requires inverter board or compressor diagnosis—live compressor tests only.",
    affected_models: ["LG LFXS26973S", "LG LRMVS3006S", "LG LRFVS3006S"],
    related_codes: ["co", "cf", "er"],
    difficulty: "hard", estimated_time: "Call technician"
  },
  {
    brand: "lg", appliance: "refrigerator", error_code: "cle",
    title: "LG Refrigerator CLE Error Code",
    summary: "Control Lock enabled on the display",
    meta_description: "LG CLE on fridge display means Control Lock is active. Hold the Lock button three seconds to unlock dispensers and touch keys.",
    meaning: "CLE is Control Lock Engaged—the same function as CL on other LG displays. Water and ice dispensers and temperature keys are disabled until lock is cleared. It is not a cooling or sensor fault.",
    causes: [
      "Lock button held during door or dispenser cleaning",
      "ThinQ app Control Lock toggled on",
      "Factory default lock state after firmware update on some door-in-door models",
      "Child pressed lock combo while leaning on the panel"
    ],
    fixes: [
      "Press and hold the Lock button on the dispenser or door UI for three seconds until CLE clears",
      "Check SmartThinQ for an active lock icon on the refrigerator card",
      "On models without a Lock label, hold Water and Ice together three seconds per the door chart",
      "Dispense water once to confirm the panel accepts input after CLE disappears"
    ],
    when_to_call_technician: "Call only if dispenser buttons remain dead after CLE clears—UI board failure is separate from lock.",
    affected_models: ["LG LFXS28968S", "LG LRFXC2416S", "LG LFXC22526S"],
    related_codes: ["cl", "co", "gf"],
    difficulty: "easy", estimated_time: "5 min"
  },
];
