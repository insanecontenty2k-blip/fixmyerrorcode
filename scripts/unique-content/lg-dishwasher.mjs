/** Researched unique copy — LG dishwasher codes. Sources: LG USA Support, RepairMeYourself */
export default [
  {
    brand: "lg", appliance: "dishwasher", error_code: "oe",
    title: "LG Dishwasher OE Error Code",
    summary: "Water remains in the tub after drain",
    meta_description: "LG dishwasher OE means drain failure. Clean the filter, check the drain hose high loop, and verify garbage disposal knockout.",
    meaning: "OE is a water outlet error—the dishwasher ran the drain pump but the tub still held water when the timer expected it empty. LG stops the cycle to avoid washing in dirty standing water.",
    causes: [
      "Cylindrical filter at the tub bottom clogged with food paste",
      "Drain hose sagging below the sink trap without a high loop",
      "Garbage disposal knockout plug still in place on new installs",
      "Kinked drain hose when the unit was pushed under the counter"
    ],
    fixes: [
      "Remove the lower rack, twist the filter counterclockwise, and rinse all sections under hot tap water",
      "Confirm the drain hose arcs up at least 10 inches above the dishwasher floor before dropping to the sink",
      "Run the kitchen disposal 30 seconds with water if the dishwasher shares that drain",
      "Use Cancel & Drain (hold Delicate + Dual Control on many models) to force a drain test"
    ],
    when_to_call_technician: "If you hear the drain pump humming but water never moves, the pump impeller or motor likely needs service.",
    affected_models: ["LG LDF5545ST", "LG LDP6797ST", "LG LDTS5552S"],
    related_codes: ["ie", "le", "ae"],
    difficulty: "easy", estimated_time: "10 min"
  },
  {
    brand: "lg", appliance: "dishwasher", error_code: "le",
    title: "LG Dishwasher LE Error Code",
    summary: "Wash motor locked or stalled",
    meta_description: "LG dishwasher LE means the circulation motor won't turn. Power-reset, clear debris from the sump, then call service if LE returns.",
    meaning: "LE indicates the main wash motor stalled. LG's sump motor drives spray arms; if something jams the impeller or the motor overheats, LE appears and the cycle aborts.",
    causes: [
      "Glass shard or seed lodged in the wash impeller",
      "Motor thermal overload after repeated heavy loads",
      "Failed motor capacitor or winding",
      "Wiring harness corrosion at the motor plug"
    ],
    fixes: [
      "Turn off power at the breaker for 15 minutes to cool the motor",
      "Remove the filter and inspect the sump for foreign objects—use flashlight only, not fingers",
      "Reinstall the filter and run a short Normal cycle with an empty tub",
      "Stop using the dishwasher if LE returns on an empty cycle"
    ],
    when_to_call_technician: "LG lists LE as motor service—replacement is common when no debris is found after reset.",
    affected_models: ["LG LDF5545ST", "LG LDP7808BD", "LG LDTS5552S"],
    related_codes: ["ce", "oe", "ie"],
    difficulty: "hard", estimated_time: "Call technician"
  },
  {
    brand: "lg", appliance: "dishwasher", error_code: "ie",
    title: "LG Dishwasher IE Error Code",
    summary: "Not enough water entering the tub",
    meta_description: "LG IE error means fill timeout. Open supply valve, clean inlet screens, and check the float switch isn't stuck.",
    meaning: "IE is an Inlet Error—the fill valve opened but the water level never reached the minimum within the allowed time. The board assumes no water entered or the level sensor failed.",
    causes: [
      "Under-sink supply valve partially closed",
      "Inlet hose mesh screen clogged with pipe scale",
      "Kinked copper or braided inlet line",
      "Stuck overfill float or faulty water level switch"
    ],
    fixes: [
      "Turn the dishwasher supply valve fully open under the sink",
      "Shut off water, disconnect the inlet hose at the dishwasher, and rinse the screen in a bucket",
      "Listen during fill for a steady inlet valve hum and water entering the tub",
      "Verify the door is latched—some models won't fill with dE conditions present"
    ],
    when_to_call_technician: "If water flows at the disconnected hose but the tub stays dry, the inlet valve or level sensor needs testing.",
    affected_models: ["LG LDF5545ST", "LG LDP6797ST", "LG LDTS5552S"],
    related_codes: ["oe", "fe", "ae"],
    difficulty: "easy", estimated_time: "10 min"
  },
  {
    brand: "lg", appliance: "dishwasher", error_code: "he",
    title: "LG Dishwasher HE Error Code",
    summary: "Heater did not reach target temperature",
    meta_description: "LG dishwasher HE means water didn't heat in time. Check incoming hot water at the sink before assuming element failure.",
    meaning: "HE reports a heating error—the thermistor did not see water reach the programmed wash temperature within the heat window. On LG dishwashers this often traces to lukewarm house water rather than a dead element.",
    causes: [
      "Household water heater set below 120°F",
      "Running hot water elsewhere during fill",
      "Open heating element or blown thermal limit",
      "Faulty thermistor reporting false cold readings"
    ],
    fixes: [
      "Run the kitchen faucet until hot before starting a cycle",
      "Select a high-temp or sanitize option and feel the door glass mid-wash for warmth",
      "Confirm the dishwasher is connected to hot water, not cold-only plumbing",
      "Retry after ensuring the water heater recovered from prior use"
    ],
    when_to_call_technician: "If water stays cold through a sanitize cycle with verified hot supply, the element or thermistor needs bench testing.",
    affected_models: ["LG LDP7808BD", "LG LDP6797ST", "LG LDTS5552S"],
    related_codes: ["te", "ie", "oe"],
    difficulty: "medium", estimated_time: "30 min"
  },
  {
    brand: "lg", appliance: "dishwasher", error_code: "fe",
    title: "LG Dishwasher FE Error Code",
    summary: "Overfill detected in the tub",
    meta_description: "LG FE means too much water in the tub. Shut off supply and inspect inlet valve and float assembly for stuck-open fill.",
    meaning: "FE is a Fill Error tied to overfill—the tub gained more water than the level sensor expected, or the float triggered flood protection.",
    causes: [
      "Inlet valve stuck open from scale on the solenoid",
      "Float switch stuck in the down position",
      "Drain failure leaving water from a prior cycle",
      "Detergent oversuds pushing water over the door seal"
    ],
    fixes: [
      "Turn off the under-sink supply valve immediately",
      "Cancel the cycle and run drain-only if available",
      "Inspect the float dome in the tub corner—it should move freely up and down",
      "Use the recommended detergent amount for soft water areas"
    ],
    when_to_call_technician: "If the tub fills while power is off, replace the inlet valve before operating again.",
    affected_models: ["LG LDF5545ST", "LG LDP6797ST", "LG LDTS5552S"],
    related_codes: ["ae", "ie", "oe"],
    difficulty: "medium", estimated_time: "30 min"
  },
  {
    brand: "lg", appliance: "dishwasher", error_code: "ae",
    title: "LG Dishwasher AE Error Code",
    summary: "Leak or flood sensor triggered",
    meta_description: "LG AE indicates leak detection in the base pan. Dry the area, check door gasket and hose clamps, wait 48 hours if E1-style flood logic applies.",
    meaning: "AE indicates Auto Error from the leak pan sensor under the dishwasher. A small amount of water in the base tray trips the switch and shuts down fill and wash to protect flooring.",
    causes: [
      "Loose drain hose clamp dripping during pump-out",
      "Door gasket tear letting rinse water escape at the bottom",
      "Overfill event draining into the pan",
      "Cracked spray arm hub spraying water downward past the tub seal"
    ],
    fixes: [
      "Unplug and remove the toe kick to inspect the pan for standing water",
      "Tighten the drain hose clamp at the pump and sink connection",
      "Wipe the pan dry and tilt the unit slightly to drain residual moisture",
      "Run a short rinse and watch for new drips before leaving unattended"
    ],
    when_to_call_technician: "Persistent AE with a dry pan suggests a faulty leak sensor or internal hose failure behind the tub.",
    affected_models: ["LG LDP7808BD", "LG LDP6797ST", "LG LDTS5552S"],
    related_codes: ["fe", "oe", "le"],
    difficulty: "medium", estimated_time: "30 min"
  },
  {
    brand: "lg", appliance: "dishwasher", error_code: "te",
    title: "LG Dishwasher tE Error Code",
    summary: "Thermistor signal out of range",
    meta_description: "LG dishwasher tE means bad temperature sensor reading. Reseat thermistor wiring at the heater assembly.",
    meaning: "tE is a Thermistor Error—the NTC sensor that reports wash water temperature sent an invalid resistance. Heat cycles may abort or never start.",
    causes: [
      "Thermistor plug loose at the heating element",
      "Wire chafing against the tub shell",
      "Scale-covered sensor bulb giving erratic readings",
      "Control board heat input circuit damaged"
    ],
    fixes: [
      "Power off at the breaker and reseat the two-wire thermistor connector",
      "Run a high-temp cycle and note whether tE appears before or after fill completes",
      "Descale the tub if white mineral coats the heater area",
      "Power-cycle 5 minutes before retesting"
    ],
    when_to_call_technician: "Compare thermistor ohms to LG chart at room temperature—open readings require replacement.",
    affected_models: ["LG LDP7808BD", "LG LDP6797ST", "LG LDF5545ST"],
    related_codes: ["he", "ie", "ce"],
    difficulty: "medium", estimated_time: "30 min"
  },
  {
    brand: "lg", appliance: "dishwasher", error_code: "ce",
    title: "LG Dishwasher CE Error Code",
    summary: "Motor communication or circulation fault",
    meta_description: "LG CE on dishwashers often pairs with motor issues. Power-cycle; if CE persists with LE, motor service is likely.",
    meaning: "CE indicates a circulation or communication fault on the wash motor circuit—distinct from LE in some firmware versions but often appearing together when the motor cannot report speed to the board.",
    causes: [
      "Motor harness unplugged during filter service",
      "Control board motor driver failure",
      "Sump debris intermittently jamming the impeller",
      "Power surge damaging motor inverter circuitry"
    ],
    fixes: [
      "Shut off power 15 minutes and retry on a rinse-only cycle",
      "Confirm the filter is seated—misalignment can splash water onto connectors",
      "Listen for a single click then silence at cycle start",
      "Note whether CE alternates with LE for the technician"
    ],
    when_to_call_technician: "CE after clean sump and reset usually means motor or main board replacement.",
    affected_models: ["LG LDF5545ST", "LG LDP7808BD", "LG LDTS5552S"],
    related_codes: ["le", "pe", "se"],
    difficulty: "hard", estimated_time: "Call technician"
  },
  {
    brand: "lg", appliance: "dishwasher", error_code: "ne",
    title: "LG Dishwasher nE Error Code",
    summary: "Spray arm or motor speed fault",
    meta_description: "LG nE can indicate spray arm obstruction or motor speed error. Verify arms spin freely and nothing blocks rotation.",
    meaning: "nE on LG dishwashers relates to spray arm or motor speed detection—the board expected a certain RPM or spray pattern and did not detect it.",
    causes: [
      "Tall pan blocking the lower spray arm",
      "Spray arm bearing clogged with food grit",
      "Motor speed sensor mismatch",
      "Upper rack not fully inserted, blocking the middle arm"
    ],
    fixes: [
      "Reload dishes so spray arm paths are clear—avoid nesting bowls over the hub",
      "Remove spray arms and rinse holes under the faucet",
      "Spin each arm by hand—they should rotate freely",
      "Re-run a normal load with lighter stacking"
    ],
    when_to_call_technician: "If nE appears on an empty test cycle with free arms, motor or board diagnosis is needed.",
    affected_models: ["LG LDP6797ST", "LG LDTS5552S", "LG LDF5545ST"],
    related_codes: ["le", "ce", "oe"],
    difficulty: "easy", estimated_time: "10 min"
  },
  {
    brand: "lg", appliance: "dishwasher", error_code: "be",
    title: "LG Dishwasher bE Error Code",
    summary: "Button or touch panel stuck",
    meta_description: "LG bE means a button is sensed as pressed. Dry the panel, release stuck keys, power-cycle the UI.",
    meaning: "bE is a Button Error—the control thinks a key is continuously pressed. Cycles won't start or may flash bE until the panel state clears.",
    causes: [
      "Moisture on touch panel after steam from opening mid-cycle",
      "Physical debris under a membrane button",
      "Child pressing buttons during dry cycle",
      "Failed touch panel flex circuit"
    ],
    fixes: [
      "Dry the control panel with a soft cloth and leave the door open 10 minutes",
      "Press each button once to release a possible stuck contact",
      "Turn off breaker power for two minutes",
      "Avoid using cleaners that leave film on touch surfaces"
    ],
    when_to_call_technician: "bE at idle with a dry panel indicates UI board replacement.",
    affected_models: ["LG LDP7808BD", "LG LDP6797ST", "LG LDTS5552S"],
    related_codes: ["ce", "pf", "cl"],
    difficulty: "easy", estimated_time: "10 min"
  },
  {
    brand: "lg", appliance: "dishwasher", error_code: "pe",
    title: "LG Dishwasher PE Error Code",
    summary: "Water level pressure sensor fault",
    meta_description: "LG PE means the pressure sensor can't read tub level. Check the air hose to the switch and inlet fill behavior.",
    meaning: "PE is a Pressure Error—the water level sensor did not provide a valid signal during fill or drain transitions.",
    causes: [
      "Air chamber hose disconnected from the tub",
      "Pressure switch clogged with detergent slime",
      "Loose connector at the main board",
      "Split hose letting air escape without tub pressure change"
    ],
    fixes: [
      "Power off and trace the thin hose from the tub to the pressure switch",
      "Blow through the hose—it should be unobstructed",
      "Reattach firmly at both ends",
      "Run a fill test and watch whether water stops at the correct height"
    ],
    when_to_call_technician: "Intact hose with persistent PE requires pressure switch or board replacement.",
    affected_models: ["LG LDF5545ST", "LG LDP6797ST", "LG LDTS5552S"],
    related_codes: ["fe", "ie", "oe"],
    difficulty: "medium", estimated_time: "30 min"
  },
  {
    brand: "lg", appliance: "dishwasher", error_code: "se",
    title: "LG Dishwasher SE Error Code",
    summary: "System or motor sensor mismatch",
    meta_description: "LG SE indicates a sensor error on the motor or system bus. Try power reset; recurring SE needs professional diagnosis.",
    meaning: "SE is a Sensor Error—feedback from the wash motor or system sensors disagreed with commanded state. Often follows LE events or water in connectors.",
    causes: [
      "Moisture in the motor harness after an AE leak event",
      "Hall or tach sensor failure on the circulation motor",
      "Main board sensor input damaged",
      "Loose ground wire at the terminal block"
    ],
    fixes: [
      "Ensure the base pan is dry before restarting after any leak code",
      "Power off 15 minutes and run rinse only",
      "Inspect motor plug for corrosion",
      "Document cycle stage when SE appears for service"
    ],
    when_to_call_technician: "SE with LE together strongly indicates motor assembly replacement.",
    affected_models: ["LG LDP7808BD", "LG LDF5545ST", "LG LDTS5552S"],
    related_codes: ["le", "ce", "pe"],
    difficulty: "hard", estimated_time: "Call technician"
  },
  {
    brand: "lg", appliance: "dishwasher", error_code: "de",
    title: "LG Dishwasher dE Error Code",
    summary: "Door not latched for cycle start",
    meta_description: "LG dE means door switch open. Close the door firmly, check for obstructions in the gasket track.",
    meaning: "dE means the door switch did not confirm closure. LG dishwashers won't fill or heat until the latch reports locked.",
    causes: [
      "Rack sticking out and hitting the door",
      "Utensil handle caught in the gasket",
      "Warped tub gasket preventing seal",
      "Failed door latch switch"
    ],
    fixes: [
      "Push racks fully in and close the door until one latch click",
      "Inspect the gasket channel for food debris",
      "Press Start again after confirming the door is flush with the frame",
      "Listen for the latch motor buzz without click—sign of failure"
    ],
    when_to_call_technician: "Door latch assembly replacement if dE persists with proper closure.",
    affected_models: ["LG LDF5545ST", "LG LDP6797ST", "LG LDTS5552S"],
    related_codes: ["ie", "oe", "be"],
    difficulty: "easy", estimated_time: "10 min"
  },
  {
    brand: "lg", appliance: "dishwasher", error_code: "ff",
    title: "LG Dishwasher FF Error Code",
    summary: "Freeze protection on inlet lines",
    meta_description: "LG FF on dishwashers signals freezing risk. Warm the installation area and thaw inlet plumbing before use.",
    meaning: "FF indicates Freeze Fault—ambient or inlet water approached freezing and the dishwasher locked out fill to protect valves and hoses.",
    causes: [
      "Dishwasher installed in an unheated garage or vacation home",
      "Frozen supply line under a cold sink cabinet",
      "Residual water in inlet valve froze overnight",
      "Long power outage during sub-freezing weather"
    ],
    fixes: [
      "Raise cabinet area temperature above 40°F",
      "Use a hair dryer on low on accessible inlet lines—never open flame",
      "Open under-sink doors to let warm house air reach pipes",
      "After thaw, run hot water at the sink then start a rinse cycle"
    ],
    when_to_call_technician: "FF in a heated kitchen above 50°F suggests a failed freeze sensor or cracked inlet valve body.",
    affected_models: ["LG LDTS5552S", "LG LDF5545ST", "LG LDP6797ST"],
    related_codes: ["ie", "pf", "fe"],
    difficulty: "medium", estimated_time: "30 min"
  },
  {
    brand: "lg", appliance: "dishwasher", error_code: "pf",
    title: "LG Dishwasher PF Error Code",
    summary: "Power interrupted during cycle",
    meta_description: "LG PF means power loss mid-cycle. Restore breaker and restart; drain first if water remains.",
    meaning: "PF is Power Failure—the control lost AC during operation. It is not a component fault; restart or resume depending on model.",
    causes: [
      "Tripped kitchen breaker",
      "Brief outage",
      "Loose plug on portable dishwasher models",
      "GFCI outlet trip from moisture"
    ],
    fixes: [
      "Reset the breaker or GFCI feeding the dishwasher",
      "Press Start to resume if the display offers continuation",
      "If water sits in the tub, cancel to drain before restarting",
      "Avoid sharing the circuit with microwave and toaster simultaneously"
    ],
    when_to_call_technician: "Frequent PF without breaker trips—inspect terminal connections and cord heat damage.",
    affected_models: ["LG LDF5545ST", "LG LDP6797ST", "LG LDTS5552S"],
    related_codes: ["ce", "be", "ff"],
    difficulty: "easy", estimated_time: "10 min"
  },
];
