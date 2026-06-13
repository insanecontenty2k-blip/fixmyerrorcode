/** Researched unique copy — Bosch washing machine codes. Sources: Bosch Home US, Bosch QA support, Prime Repair UK */
export default [
  {
    brand: "bosch", appliance: "washing-machine", error_code: "e18",
    title: "Bosch Washing Machine E18 Error Code",
    summary: "Drain pump timed out with water still in drum",
    meta_description: "Bosch E18 means the washer could not drain in time. Clean the pump filter, straighten the drain hose, and spin the impeller by hand.",
    meaning: "E18 (also shown as F18 or d02 on some Axxis displays) means the drain phase exceeded its time limit. Water stays visible behind the door glass and the cycle stops before spin. Bosch logs this when the pump runs but the water level sensor never sees an empty tub.",
    causes: [
      "Pump filter blocked by coins, hairpins, or lint sludge",
      "Drain hose kinked where it passes through the cabinet cutout",
      "Pump impeller jammed by a sock or underwire",
      "Standpipe back-pressure from a pushed-in drain hose"
    ],
    fixes: [
      "Place towels under the round access panel at the bottom front",
      "Drain the emergency hose into a shallow pan, then unscrew the filter cap slowly",
      "Remove debris from the filter chamber and rotate the impeller—it should spin freely",
      "Straighten the drain hose and rerun Spin/Drain only before a full wash"
    ],
    when_to_call_technician: "If the pump hums with a clean filter and free impeller but E18 returns every drain, the drain pump motor or pressure switch likely needs replacement.",
    affected_models: ["Bosch WAT28400UC", "Bosch WAW285H1UC", "Bosch WGA12400UC"],
    related_codes: ["e13", "e23", "e17"],
    difficulty: "easy", estimated_time: "10 min"
  },
  {
    brand: "bosch", appliance: "washing-machine", error_code: "e23",
    title: "Bosch Washing Machine E23 Error Code",
    summary: "AquaStop detected water in the base pan",
    meta_description: "Bosch E23 activates flood protection when moisture hits the base tray. Dry the pan, find the leak, and turn off the water supply until fixed.",
    meaning: "E23 (F23 on some models) means the AquaStop float in the sealed base pan detected water. Bosch cuts inlet valves and locks the display to prevent floor flooding from a hose, tub seal, or suds overflow.",
    causes: [
      "Loose fill hose connection weeping at the rear valve block",
      "Door boot tear along the bottom fold spraying during high spin",
      "Overdosed detergent creating suds that escape the door gasket",
      "Internal tub-to-pump hose clamp slipped off inside the cabinet"
    ],
    fixes: [
      "Turn off hot and cold supply taps behind the washer immediately",
      "Unplug the machine and tilt forward slightly to inspect the base tray with a flashlight",
      "Soak up water until the float drops—E23 may clear after the pan is dry",
      "Run one short cycle while watching under the machine for a new leak path"
    ],
    when_to_call_technician: "If AquaStop trips again after one dry cycle, an internal hose or tub seal inside the cabinet is leaking and needs professional access.",
    affected_models: ["Bosch WAW285H1UC", "Bosch WAT28400UC", "Bosch WGB246AXUC"],
    related_codes: ["e18", "e25", "e17"],
    difficulty: "medium", estimated_time: "30 min"
  },
  {
    brand: "bosch", appliance: "washing-machine", error_code: "e17",
    title: "Bosch Washing Machine E17 Error Code",
    summary: "Water did not fill within the time limit",
    meta_description: "Bosch E17 means insufficient water entered the drum. Open supply taps, clean inlet screens, and verify household pressure.",
    meaning: "E17 (F17) is Bosch's insufficient-fill fault. The inlet valves opened but the flow meter never registered enough liters within the programmed window—often within the first two minutes of a cycle on Serie 4 and 6 front-loaders.",
    causes: [
      "Wall supply valve closed or only partially open",
      "Inlet mesh screens clogged with rust or sediment at the hose connection",
      "Kinked inlet hose trapped when the washer was pushed against the wall",
      "Failed inlet valve solenoid or flow sensor on the valve body"
    ],
    fixes: [
      "Confirm both supply taps are fully open on dual-inlet models",
      "Shut off water, disconnect each inlet hose, and rinse the small filters in the valve ports",
      "Straighten hoses and verify nearby faucets run at normal pressure",
      "Run a cold rinse-only cycle to confirm fill completes without E17"
    ],
    when_to_call_technician: "When water flows freely at the disconnected hose but E17 persists, the flow meter or inlet valve assembly needs live testing.",
    affected_models: ["Bosch WAT28400UC", "Bosch WGG254AXUC", "Bosch WGA12400UC"],
    related_codes: ["e28", "e18", "e23"],
    difficulty: "easy", estimated_time: "10 min"
  },
  {
    brand: "bosch", appliance: "washing-machine", error_code: "e13",
    title: "Bosch Washing Machine E13 Error Code",
    summary: "Drain pump exceeded its run time",
    meta_description: "Bosch E13 is a drain timeout like E18—water remains after the pump runs. Clean the filter, check the hose, and test the impeller.",
    meaning: "E13 reports the same drain-time failure as E18 on many Bosch platforms—the pump ran but water did not leave the drum within the allowed interval. Some firmware shows E13 where others show E18; the troubleshooting path is identical.",
    causes: [
      "Blocked pump filter stopping water from reaching the impeller",
      "Partially clogged drain hose at the standpipe connection",
      "Weak drain pump motor that spins but moves little water",
      "Pressure switch stuck reporting water when the tub is empty"
    ],
    fixes: [
      "Open the bottom-front service panel and drain residual water via the emergency hose",
      "Remove and clean the pump filter, checking the impeller cavity for fabric",
      "Disconnect the drain hose at the standpipe and confirm gravity flow during spin",
      "Retry on Drain/Spin with an empty drum before washing a full load"
    ],
    when_to_call_technician: "Replace the drain pump if E13 returns with a verified clear hose and a filter that stays clean between cycles.",
    affected_models: ["Bosch WAT2440UC", "Bosch WAW285H1UC", "Bosch WAT28400UC"],
    related_codes: ["e18", "e23", "e17"],
    difficulty: "easy", estimated_time: "10 min"
  },
  {
    brand: "bosch", appliance: "washing-machine", error_code: "e02",
    title: "Bosch Washing Machine E02 Error Code",
    summary: "Drive motor blocked or not turning",
    meta_description: "Bosch E02 means the drum motor will not rotate. Reset power, reduce load, and check for objects jamming the drum.",
    meaning: "E02 (F02) indicates a motor fault—the control module commanded rotation but the brushless drive motor did not reach expected speed. You may hear a brief hum, then the cycle aborts before wash or spin begins.",
    causes: [
      "Overloaded drum binding the motor on heavy bedding",
      "Garment or coin caught between the inner drum and outer tub",
      "Motor tachometer wire loose at the rear stator connector",
      "Failed motor control module after a power surge"
    ],
    fixes: [
      "Unplug the washer for two minutes to reset the motor inverter",
      "Remove several items and redistribute the load evenly around the drum",
      "With power off, rotate the drum by hand—it should turn with moderate resistance only",
      "Stop using the machine if E02 returns on a light test load after reset"
    ],
    when_to_call_technician: "Motor module and tachometer diagnostics require rear-panel access and live voltage tests—schedule Bosch service if E02 repeats on an empty drum.",
    affected_models: ["Bosch WGG254AXUC", "Bosch WAT28400UC", "Bosch WGA12400UC"],
    related_codes: ["e04", "e11", "e21"],
    difficulty: "hard", estimated_time: "Call technician"
  },
  {
    brand: "bosch", appliance: "washing-machine", error_code: "e04",
    title: "Bosch Washing Machine E04 Error Code",
    summary: "Motor module communication failure",
    meta_description: "Bosch E04 indicates lost communication between the main board and motor module. Power-cycle; persistent E04 needs module service.",
    meaning: "E04 means the main control board lost CAN-bus communication with the motor inverter module at the rear of the tub. The washer may flash E04 at startup or mid-cycle when the motor module stops responding.",
    causes: [
      "Loose ribbon connector between main PCB and motor module",
      "Moisture on the motor module connector after a prior leak",
      "Motor module firmware mismatch after an incomplete update",
      "Failed motor inverter board after overheating"
    ],
    fixes: [
      "Unplug for five minutes, then restart on a short rinse cycle",
      "Ensure the washer sits level so wiring harnesses are not stressed at the rear",
      "Note whether E04 appears only after long hot cycles—heat can aggravate connector faults",
      "Do not repeatedly force cycles if E04 returns at the first motor command"
    ],
    when_to_call_technician: "E04 that survives a cold power reset usually requires motor module or main board replacement with model-matched parts.",
    affected_models: ["Bosch WAW285H1UC", "Bosch WGB246AXUC", "Bosch WGG254AXUC"],
    related_codes: ["e02", "e11", "e21"],
    difficulty: "hard", estimated_time: "Call technician"
  },
  {
    brand: "bosch", appliance: "washing-machine", error_code: "e11",
    title: "Bosch Washing Machine E11 Error Code",
    summary: "Motor overheated during operation",
    meta_description: "Bosch E11 means the drive motor exceeded safe temperature. Let the washer cool, lighten the load, and retry.",
    meaning: "E11 logs motor thermal overload—the inverter detected the stator temperature rising faster than allowed, often after repeated start attempts on a jammed drum or an overloaded cycle in a warm laundry room.",
    causes: [
      "Repeated E02-style jams causing the motor to stall and heat",
      "Very heavy load run back-to-back without cooling time",
      "Blocked rear ventilation grille trapping motor heat",
      "Failing motor bearings increasing friction and heat"
    ],
    fixes: [
      "Unplug and leave the door open at least 30 minutes for the motor to cool",
      "Remove half the load and run a shorter program at lower spin speed",
      "Vacuum dust from the rear panel vents and ensure two inches clearance to the wall",
      "Retry only after the drum spins freely by hand with no grinding"
    ],
    when_to_call_technician: "E11 on light loads after cooling points to motor bearing or inverter failure rather than user overload.",
    affected_models: ["Bosch WAT28400UC", "Bosch WGA12400UC", "Bosch WAW285H1UC"],
    related_codes: ["e02", "e04", "e21"],
    difficulty: "medium", estimated_time: "30 min"
  },
  {
    brand: "bosch", appliance: "washing-machine", error_code: "e16",
    title: "Bosch Washing Machine E16 Error Code",
    summary: "Door not closed or lock not confirmed",
    meta_description: "Bosch E16 means the door interlock did not report closed. Clear the gasket, close firmly, and listen for the lock click.",
    meaning: "E16 (F16) appears when the door lock switch never confirms a locked position before fill or spin. Bosch front-loaders refuse to run with an open or unlatched door to prevent water escape during wash.",
    causes: [
      "Clothing trapped in the door gasket fold",
      "Door not pushed until the latch engages the strike",
      "Broken door hook on the hinged assembly",
      "Failed door lock motor after years of cycles"
    ],
    fixes: [
      "Pull fabric out of the gasket channel and press the door until you hear one lock click",
      "Inspect the strike plate on the cabinet for looseness and retighten screws",
      "Power-cycle by unplugging two minutes, then close the door firmly and restart",
      "Listen at the lock during start—a buzz without a click suggests a failed latch motor"
    ],
    when_to_call_technician: "Replace the door lock assembly if the door physically closes flush but E16 appears every cycle.",
    affected_models: ["Bosch WAT28400UC", "Bosch WGG254AXUC", "Bosch WGB246AXUC"],
    related_codes: ["e19", "e26", "e28"],
    difficulty: "medium", estimated_time: "30 min"
  },
  {
    brand: "bosch", appliance: "washing-machine", error_code: "e19",
    title: "Bosch Washing Machine E19 Error Code",
    summary: "Water did not reach target heat in time",
    meta_description: "Bosch E19 means heating timed out. Run a descaling cycle, verify hot supply on dual-inlet models, then call service if E19 persists.",
    meaning: "E19 (F19) means heating time exceeded—the NTC sensor never reported wash water reaching the programmed temperature within the allowed window. Cotton programs at 140°F are a common trigger when limescale coats the element.",
    causes: [
      "Limescale insulating the tubular heating element",
      "Cold-only supply connected where hot was expected on a dual-inlet model",
      "Failed heating element open circuit",
      "NTC temperature sensor reading incorrectly low"
    ],
    fixes: [
      "Run an empty 194°F (90°C) maintenance wash with Bosch descaler or citric acid",
      "Confirm the hot inlet hose is connected if your model uses separate hot fill",
      "Run hot water at the nearest sink for 30 seconds before starting the washer",
      "Avoid heavy soil programs until E19 clears on a short warm cycle"
    ],
    when_to_call_technician: "If E19 returns immediately after descaling on a verified hot supply, the element or NTC needs ohm testing.",
    affected_models: ["Bosch WAW285H1UC", "Bosch WAT28400UC", "Bosch WGA12400UC"],
    related_codes: ["e20", "e21", "e16"],
    difficulty: "medium", estimated_time: "30 min"
  },
  {
    brand: "bosch", appliance: "washing-machine", error_code: "e20",
    title: "Bosch Washing Machine E20 Error Code",
    summary: "Unexpected heating detected in drum",
    meta_description: "Bosch E20 flags heating when the control did not command it—often a stuck relay or shorted element. Stop the cycle and reset power.",
    meaning: "E20 (F20) means unexpected heating—the board detected the heating element energizing without a heat command, or water temperature rising when only cold fill was requested. This is a safety code that can appear after control board relay failures.",
    causes: [
      "Welded heater relay on the main control board",
      "Shorted heating element to ground",
      "NTC sensor short giving false high-temperature readings",
      "Residual heat from a prior cycle misread as active heating"
    ],
    fixes: [
      "Cancel the cycle and unplug the washer immediately if the drum feels hot unexpectedly",
      "Leave unplugged five minutes, then restart on a cold rinse only",
      "Do not run hot programs until E20 clears on cold rinse",
      "Note whether the drum warms during a cold-only test—that confirms a stuck heater circuit"
    ],
    when_to_call_technician: "Heating during an unplugged cold test or immediate E20 on cold rinse requires element and board relay diagnosis—do not continue hot cycles.",
    affected_models: ["Bosch WGG254AXUC", "Bosch WGB246AXUC", "Bosch WAT28400UC"],
    related_codes: ["e19", "e21", "e26"],
    difficulty: "hard", estimated_time: "Call technician"
  },
  {
    brand: "bosch", appliance: "washing-machine", error_code: "e21",
    title: "Bosch Washing Machine E21 Error Code",
    summary: "Motor speed sensor signal missing",
    meta_description: "Bosch E21 means the tachometer did not detect drum rotation. Check for jams, reset power, then service the motor module if E21 returns.",
    meaning: "E21 indicates the motor tachometer never saw the expected RPM after the inverter applied drive—distinct from E02 where the motor is commanded but blocked. The drum may not move at all, or may jerk once then stop with E21.",
    causes: [
      "Tachometer magnet detached from the motor rotor",
      "Hall sensor wire broken at the stator harness",
      "Motor module not reading pulses due to CAN fault",
      "Mechanical jam preventing any drum movement"
    ],
    fixes: [
      "Unplug two minutes and verify the drum turns freely by hand",
      "Run a spin-only cycle with an empty drum after reset",
      "Listen for a single rotation attempt before E21—no movement suggests sensor or module fault",
      "Avoid heavy loads until a bare-drum spin test passes"
    ],
    when_to_call_technician: "Empty-drum spin failing with E21 after reset typically requires motor module or tachometer harness replacement.",
    affected_models: ["Bosch WAW285H1UC", "Bosch WAT28400UC", "Bosch WGA12400UC"],
    related_codes: ["e02", "e04", "e11"],
    difficulty: "hard", estimated_time: "Call technician"
  },
  {
    brand: "bosch", appliance: "washing-machine", error_code: "e25",
    title: "Bosch Washing Machine E25 Error Code",
    summary: "Turbidity sensor fault during wash",
    meta_description: "Bosch E25 means the turbidity sensor failed or read out of range. Clean the sump area; persistent E25 needs sensor service.",
    meaning: "E25 (F25) flags the turbidity sensor that measures wash water clarity for automatic program adjustment. On models with ActiveWater or i-DOS, a failed turbidity reading stops the cycle because the board cannot judge soil level.",
    causes: [
      "Detergent residue coating the optical turbidity cell",
      "Air bubble trapped in the turbidity chamber after drain",
      "Failed turbidity sensor after hard-water mineral buildup",
      "Wiring harness corrosion at the sump sensor plug"
    ],
    fixes: [
      "Run an empty 194°F maintenance wash with descaler to flush the sump circuit",
      "Cancel and drain, then restart on a standard cotton program without i-DOS overdosing",
      "Avoid excess powder detergent that leaves cloudy suspension in the sump",
      "Power-cycle and retry once before assuming hardware failure"
    ],
    when_to_call_technician: "E25 on every program after descaling points to turbidity sensor or sump harness replacement inside the tub assembly.",
    affected_models: ["Bosch WGG254AXUC", "Bosch WGB246AXUC", "Bosch WAW285H1UC"],
    related_codes: ["e26", "e28", "e23"],
    difficulty: "medium", estimated_time: "30 min"
  },
  {
    brand: "bosch", appliance: "washing-machine", error_code: "e26",
    title: "Bosch Washing Machine E26 Error Code",
    summary: "Analog pressure sensor out of range",
    meta_description: "Bosch E26 means the water level pressure sensor signal failed. Check the pressure hose; E26 after leaks may need board service.",
    meaning: "E26 (F26) reports a fault in the analogue pressure sensor circuit—the air dome tube from the tub to the pressure switch sent resistance outside calibrated limits, so the board cannot confirm fill or drain level.",
    causes: [
      "Pressure dome hose disconnected from the tub nipple",
      "Cracked or kinked clear hose between tub and control panel",
      "Pressure sensor failure after prior E23 flooding",
      "Main board pressure input circuit damaged"
    ],
    fixes: [
      "Unplug and trace the clear pressure hose from the tub dome to the top control area",
      "Reconnect any loose hose ends and inspect for pinholes or cracks",
      "Ensure the tub is empty before restart—water trapped can skew pressure readings",
      "Run a short rinse after hose verification"
    ],
    when_to_call_technician: "E26 with a verified intact pressure hose usually requires pressure sensor or main PCB replacement.",
    affected_models: ["Bosch WAT28400UC", "Bosch WGA12400UC", "Bosch WGG254AXUC"],
    related_codes: ["e25", "e28", "e17"],
    difficulty: "hard", estimated_time: "Call technician"
  },
  {
    brand: "bosch", appliance: "washing-machine", error_code: "e28",
    title: "Bosch Washing Machine E28 Error Code",
    summary: "Inlet flow meter not detecting water",
    meta_description: "Bosch E28 means the flow sensor saw no pulses during fill. Clean inlet screens and verify supply; replace the flow meter if E28 persists.",
    meaning: "E28 (F28) means the inlet flow sensor did not register water passing during fill—the reed switch or turbine in the inlet path reported zero flow while valves were open. Related to E17 but specifically flags the flow meter circuit.",
    causes: [
      "Clogged inlet filter stopping flow before the meter",
      "Flow meter turbine stuck by mineral deposits",
      "Inlet valve opens but no household pressure at the tap",
      "Broken wire at the flow meter connector"
    ],
    fixes: [
      "Shut off water and clean both inlet mesh screens at the rear valves",
      "Confirm full flow at the disconnected hose into a bucket for ten seconds",
      "Run a cold rinse and listen for initial fill before E28 appears",
      "Reset breaker thirty seconds if a glitch followed a brief power dip"
    ],
    when_to_call_technician: "Confirmed strong flow at the hose with recurring E28 requires inlet assembly or flow meter replacement.",
    affected_models: ["Bosch WAT28400UC", "Bosch WGG254AXUC", "Bosch WGB246AXUC"],
    related_codes: ["e17", "e26", "e25"],
    difficulty: "medium", estimated_time: "30 min"
  },
  {
    brand: "bosch", appliance: "washing-machine", error_code: "e29",
    title: "Bosch Washing Machine E29 Error Code",
    summary: "Load too unbalanced to reach spin speed",
    meta_description: "Bosch E29 stops spin when the drum cannot balance. Redistribute laundry, level the washer, and avoid single heavy items alone.",
    meaning: "E29 means unbalanced load—the drum speed sensor detected excessive wobble before reaching final spin RPM. Bosch aborts high-speed spin rather than walk the machine across the floor or stress suspension components.",
    causes: [
      "Single heavy item such as a bath mat clumped on one side",
      "Mixed load with dense jeans and light shirts unevenly packed",
      "Washer not level—front feet uneven or lock nuts loose",
      "Worn shock absorbers allowing excessive tub movement"
    ],
    fixes: [
      "Pause, open the door, and spread items around the full drum perimeter",
      "Add one or two towels when washing a lone heavy piece",
      "Place a level on the washer top and adjust front feet until centered, then tighten lock nuts",
      "Retry Spin at 800 RPM before running a full wash cycle"
    ],
    when_to_call_technician: "E29 on balanced full loads after leveling suggests worn suspension rods or shock absorbers inside the tub assembly.",
    affected_models: ["Bosch WAW285H1UC", "Bosch WAT28400UC", "Bosch WGA12400UC"],
    related_codes: ["e16", "e02", "e11"],
    difficulty: "easy", estimated_time: "10 min"
  }
];
