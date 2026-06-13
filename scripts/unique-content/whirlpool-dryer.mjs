/** Researched unique copy — Whirlpool dryer codes. Sources: Whirlpool Duet HE dryer docs, Product Help, Sears PartsDirect */
export default [
  {
    brand: "whirlpool", appliance: "dryer", error_code: "f01",
    title: "Whirlpool Dryer F01 Error Code",
    summary: "Main electronic control board failure",
    meta_description: "Whirlpool dryer F01 means main control board fault. Power-cycle 10 minutes; replace board if code returns on start.",
    meaning: "F01 means the dryer's main electronic control board failed its self-check or stopped responding. On Duet HE models the board manages heat, motor, and moisture sensing—when it faults, the dryer may not start or may stop mid-cycle.",
    causes: [
      "Power surge damaging ERC memory or processor",
      "Loose wire harness at the main control connector",
      "Failed relay on the control board heat circuit",
      "Moisture intrusion behind the console from a vent leak"
    ],
    fixes: [
      "Turn off the dryer circuit breaker for ten minutes, then restore power",
      "Start a timed dry cycle and watch whether F01 reappears within one minute",
      "Check that the power cord terminal block screws are tight at the rear",
      "If F01 returns immediately at power-up, the main control board needs replacement"
    ],
    when_to_call_technician: "Control board replacement on gas dryers also requires verifying gas valve wiring—have a technician install the correct board for your model.",
    affected_models: ["Whirlpool WED5620HW", "Whirlpool WED6600MW", "Whirlpool WGD5620HW"],
    related_codes: ["pf", "f31", "f40"],
    difficulty: "hard", estimated_time: "Call technician"
  },
  {
    brand: "whirlpool", appliance: "dryer", error_code: "f22",
    title: "Whirlpool Dryer F22 Error Code",
    summary: "Outlet exhaust thermistor open circuit",
    meta_description: "Whirlpool dryer F22 is an open outlet thermistor. Test for ~10K ohms at room temp, check blower housing wiring.",
    meaning: "F22 means the exhaust outlet thermistor on the blower housing reads as electrically open. The dryer cannot monitor outgoing air temperature and disables heat as a safety precaution.",
    causes: [
      "Thermistor connector unplugged at the blower housing",
      "Broken wire in the two-wire harness to the control board",
      "Failed outlet thermistor element",
      "Lint moisture corroding thermistor terminals"
    ],
    fixes: [
      "Unplug the dryer and locate the thermistor on the blower housing next to the thermal fuse",
      "Reseat the connector and inspect wires for burns or breaks",
      "Measure resistance across the thermistor—expect about 10,000 ohms at room temperature",
      "Replace the outlet thermistor if the meter reads open/infinite"
    ],
    when_to_call_technician: "If a new thermistor reads correctly but F22 persists, the main control board input circuit may be damaged.",
    affected_models: ["Whirlpool WED5620HW", "Whirlpool WED5100HC", "Whirlpool WGD5620HW"],
    related_codes: ["f23", "f24", "f30"],
    difficulty: "medium", estimated_time: "45 min"
  },
  {
    brand: "whirlpool", appliance: "dryer", error_code: "f23",
    title: "Whirlpool Dryer F23 Error Code",
    summary: "Outlet thermistor shorted or out of range",
    meta_description: "Whirlpool dryer F23 means outlet thermistor shorted. Clean connector, measure resistance, replace sensor at blower.",
    meaning: "F23 is the companion fault to F22—here the outlet thermistor reads shorted or below the expected resistance curve. The control treats exhaust temperature as unreliable and stops heating.",
    causes: [
      "Shorted thermistor from lint moisture at the blower housing",
      "Pinched harness wire shorting to the dryer cabinet",
      "Failed thermistor reading near zero ohms",
      "Control board misreading a good sensor due to a faulty input"
    ],
    fixes: [
      "Disconnect power and pull the lint screen—vacuum the housing slot thoroughly",
      "Inspect the thermistor harness for crushed wires along the cabinet edge",
      "Measure sensor resistance—values far below 8,000 ohms at room temp indicate a short",
      "Install a new outlet thermistor and rerun a timed heat cycle for five minutes"
    ],
    when_to_call_technician: "Schedule service if a new thermistor with good wiring still triggers F23—board replacement may be required.",
    affected_models: ["Whirlpool WED6600MW", "Whirlpool WED5620HW", "Whirlpool WGD5620HW"],
    related_codes: ["f22", "f24", "f25"],
    difficulty: "medium", estimated_time: "45 min"
  },
  {
    brand: "whirlpool", appliance: "dryer", error_code: "f24",
    title: "Whirlpool Dryer F24 Error Code",
    summary: "Inlet thermistor open at high-limit thermostat",
    meta_description: "Whirlpool dryer F24 is an open inlet thermistor. Check high-limit thermostat harness, expect ~50K ohms at room temp.",
    meaning: "F24 means the inlet thermistor integrated into the high-limit thermostat assembly reads open. This sensor tracks incoming air temperature before it passes the heating element.",
    causes: [
      "Inlet thermistor wire broken at the high-limit thermostat",
      "Connector vibrated loose on the heater housing",
      "Failed inlet thermistor inside the thermostat assembly",
      "Thermal fuse blowing and taking the thermistor circuit offline"
    ],
    fixes: [
      "Unplug the dryer and access the heater housing on the blower outlet",
      "Locate the high-limit thermostat with the inlet thermistor pigtail",
      "Measure thermistor resistance—Duet docs expect roughly 50,000 ohms at room temperature",
      "Replace the high-limit thermostat assembly if the inlet sensor reads open"
    ],
    when_to_call_technician: "Gas dryer inlet thermistor replacement sits near the burner tube—use a technician if you are not comfortable working near gas lines.",
    affected_models: ["Whirlpool WED5100HC", "Whirlpool WED5620HW", "Whirlpool WGD5620HW"],
    related_codes: ["f25", "f22", "f31"],
    difficulty: "medium", estimated_time: "1 hour"
  },
  {
    brand: "whirlpool", appliance: "dryer", error_code: "f25",
    title: "Whirlpool Dryer F25 Error Code",
    summary: "Inlet thermistor shorted at heater inlet",
    meta_description: "Whirlpool dryer F25 means inlet thermistor shorted. Test high-limit thermostat sensor, inspect heater housing wires.",
    meaning: "F25 reports a shorted inlet thermistor at the high-limit thermostat. The dryer interprets incoming air temperature as impossibly high or low and shuts down the heating circuit.",
    causes: [
      "Inlet thermistor shorted from years of heat cycling",
      "Harness wire rubbing the heater shield causing a short to ground",
      "Failed high-limit thermostat with internal short",
      "Control board inlet sensor input damaged"
    ],
    fixes: [
      "Disconnect power and remove the back panel to reach the heater inlet housing",
      "Inspect the thermistor harness for bare wire touching the metal shield",
      "Measure inlet thermistor resistance—readings well below 40,000 ohms at room temp suggest a short",
      "Replace the high-limit thermostat and thermistor assembly as one unit"
    ],
    when_to_call_technician: "If F25 returns with a new thermostat, the main control board sensor circuit needs professional testing.",
    affected_models: ["Whirlpool WED6600MW", "Whirlpool WED5620HW", "Whirlpool WGD5620HW"],
    related_codes: ["f24", "f23", "f31"],
    difficulty: "medium", estimated_time: "1 hour"
  },
  {
    brand: "whirlpool", appliance: "dryer", error_code: "f26",
    title: "Whirlpool Dryer F26 Error Code",
    summary: "Drive motor not responding to control",
    meta_description: "Whirlpool dryer F26 is a drive motor failure. Check motor connector, test for obstructions, verify harness to control.",
    meaning: "F26 means the drive motor is not operating when commanded. On Cabrio and Duet dryers the control sends run voltage to the motor but receives no confirmation of drum rotation.",
    causes: [
      "Loose or burnt connector at the drive motor plug",
      "Object lodged under the drum preventing rotation",
      "Failed drive motor winding or centrifugal switch",
      "Open wire in the motor harness to the control board"
    ],
    fixes: [
      "Unplug the dryer and try rotating the drum by hand—it should turn smoothly",
      "Remove the rear access panel and reseat the motor connector—look for heat marks",
      "Clear any clothing or objects visible between the drum and cabinet",
      "Restore power and run air fluff—no rotation with F26 confirms motor or harness failure"
    ],
    when_to_call_technician: "Motor replacement on stacked or gas dryers involves drum support—book service if the connector and drum are clear.",
    affected_models: ["Whirlpool WED5620HW", "Whirlpool WED5100HC", "Whirlpool WGD5620HW"],
    related_codes: ["f01", "f40", "f41"],
    difficulty: "hard", estimated_time: "Call technician"
  },
  {
    brand: "whirlpool", appliance: "dryer", error_code: "f28",
    title: "Whirlpool Dryer F28 Error Code",
    summary: "Moisture sensor circuit failure",
    meta_description: "Whirlpool dryer F28 is a moisture sensor fault. Clean sensor bars, check harness inside drum, test resistance.",
    meaning: "F28 means the moisture sensor bars inside the drum front are not returning valid readings. Auto-dry cycles that rely on conductivity across the bars cannot determine when clothes are dry.",
    causes: [
      "Fabric softener residue insulating the sensor strips",
      "Loose moisture sensor harness connector inside the drum bulkhead",
      "Broken sensor bar wiring from drum rotation wear",
      "Failed sensor bar assembly reading open"
    ],
    fixes: [
      "Unplug the dryer and wipe the two metal sensor bars inside the drum with rubbing alcohol",
      "Remove accumulated dryer-sheet waxy coating using a non-abrasive pad",
      "Check the harness behind the front bulkhead where the sensor wires exit",
      "Run a sensor dry cycle after cleaning—F28 at start means replace the sensor bars"
    ],
    when_to_call_technician: "Sensor bar replacement requires front bulkhead access—schedule service if cleaning and harness checks do not clear F28.",
    affected_models: ["Whirlpool WED6600MW", "Whirlpool WED5620HW", "Whirlpool WGD5620HW"],
    related_codes: ["f29", "f30", "f22"],
    difficulty: "easy", estimated_time: "15 min"
  },
  {
    brand: "whirlpool", appliance: "dryer", error_code: "f29",
    title: "Whirlpool Dryer F29 Error Code",
    summary: "Moisture sensor shorted or low resistance",
    meta_description: "Whirlpool dryer F29 means moisture sensor short. Clean bars, inspect harness for shorts, replace sensor strips.",
    meaning: "F29 is the short-circuit counterpart to F28 on Whirlpool dryers. The moisture sensor circuit reads abnormally low resistance, often from contamination or a wiring short at the drum bulkhead.",
    causes: [
      "Water or metal object bridging the two sensor bars",
      "Shorted harness wire inside the drum front panel",
      "Corroded sensor terminals creating a constant low-resistance path",
      "Control board moisture sensor input failure"
    ],
    fixes: [
      "Power off and inspect the drum for wet items or metal leaving a film on the bars",
      "Clean both sensor strips until the metal shines evenly",
      "Disconnect the sensor harness and measure bar-to-bar resistance—it should be high when dry",
      "Replace the moisture sensor assembly if resistance stays near zero with dry bars"
    ],
    when_to_call_technician: "If new sensor bars test open when dry but F29 persists, the main control board input is likely faulty.",
    affected_models: ["Whirlpool WED5620HW", "Whirlpool WED5100HC", "Whirlpool WGD5620HW"],
    related_codes: ["f28", "f30", "f22"],
    difficulty: "medium", estimated_time: "30 min"
  },
  {
    brand: "whirlpool", appliance: "dryer", error_code: "f30",
    title: "Whirlpool Dryer F30 Error Code",
    summary: "Restricted exhaust airflow detected",
    meta_description: "Whirlpool dryer F30 means vent restriction. Clean lint screen, vacuum hose, clear exterior vent cap and wall duct.",
    meaning: "F30 indicates restricted outlet airflow on Duet HE dryers—the blower cannot move enough air through the exhaust path. The dryer may continue running but heat cycles off early, leaving clothes damp.",
    causes: [
      "Lint packed into the screen housing below the filter",
      "Crushed or kinked flexible vent hose behind the dryer",
      "Exterior vent cap flap stuck closed by lint or a nest",
      "Long duct run with multiple 90° elbows exceeding length limits"
    ],
    fixes: [
      "Pull and wash the lint screen, then vacuum the slot it sits in",
      "Disconnect the rear vent hose and clear lint from both ends",
      "Go outside during a timed cycle and confirm strong airflow at the wall cap",
      "Replace crushed foil hose with rigid or semi-rigid metal duct per install guide"
    ],
    when_to_call_technician: "Professional duct cleaning is warranted when exterior airflow stays weak after the hose is disconnected and the blower is strong.",
    affected_models: ["Whirlpool WED6600MW", "Whirlpool WED5620HW", "Whirlpool WGD5620HW"],
    related_codes: ["f28", "f22", "f31"],
    difficulty: "easy", estimated_time: "15 min"
  },
  {
    brand: "whirlpool", appliance: "dryer", error_code: "f31",
    title: "Whirlpool Dryer F31 Error Code",
    summary: "Low L2 line voltage below 30 volts",
    meta_description: "Whirlpool dryer F31 or L2 means missing voltage leg. Reset both breakers, check cord at terminal block, verify 240V.",
    meaning: "F31 (often paired with L2 on the display) means the second 120-volt leg of the 240-volt supply is missing or below about 30 volts. Electric dryers may tumble on one leg but cannot energize the heating element.",
    causes: [
      "One half of the 30-amp double breaker tripped",
      "Loose or burned wire at the dryer terminal block",
      "Damaged power cord prongs not making contact",
      "House wiring fault on the L2 leg to the outlet"
    ],
    fixes: [
      "Flip both dryer circuit breakers fully off, then back on",
      "Unplug the dryer and tighten all three or four cord screws at the terminal block",
      "Inspect the outlet and cord for heat discoloration—replace a burned cord",
      "Run a timed high-heat cycle—no heat with tumbling confirms single-leg power"
    ],
    when_to_call_technician: "Call an electrician if both breakers are on but the dryer still shows F31—a panel or outlet wiring fault is likely.",
    affected_models: ["Whirlpool WED5620HW", "Whirlpool WED6600MW", "Whirlpool WED5100HC"],
    related_codes: ["pf", "f01", "f40"],
    difficulty: "easy", estimated_time: "15 min"
  },
  {
    brand: "whirlpool", appliance: "dryer", error_code: "f32",
    title: "Whirlpool Dryer F32 Error Code",
    summary: "Steam inlet thermistor circuit fault",
    meta_description: "Whirlpool dryer F32 is a steam thermistor error on steam models. Check steam generator sensor wiring and connections.",
    meaning: "F32 appears on Whirlpool steam dryers when the steam inlet thermistor circuit reads invalid. The steam generator cannot verify inlet water temperature and disables steam cycles while the fault is active.",
    causes: [
      "Steam thermistor connector loose at the steam generator",
      "Scale buildup on the steam inlet sensor probe",
      "Broken wire in the steam harness along the cabinet left side",
      "Failed steam inlet thermistor reading open"
    ],
    fixes: [
      "Unplug the dryer and locate the steam generator thermistor per your model tech sheet",
      "Reseat the thermistor plug and inspect for mineral deposits on the probe",
      "Descale the steam system following the owner's manual steam-clean procedure",
      "Measure thermistor resistance against the spec on the tech sheet at room temperature"
    ],
    when_to_call_technician: "Steam generator thermistor replacement involves sealed water lines—use service if descaling does not clear F32.",
    affected_models: ["Whirlpool WED9600TA", "Whirlpool WGD9600TA", "Whirlpool WED85HEFW"],
    related_codes: ["f24", "f25", "f22"],
    difficulty: "hard", estimated_time: "1 hour"
  },
  {
    brand: "whirlpool", appliance: "dryer", error_code: "f40",
    title: "Whirlpool Dryer F40 Error Code",
    summary: "Control board lost communication with motor board",
    meta_description: "Whirlpool dryer F40 means CCU-to-MCU comm failure. Check interconnect harness, inspect boards for burn marks.",
    meaning: "F40 on Whirlpool Oasis and similar dryers means the main electronic control cannot communicate with the motor control board that drives the blower. The dryer may flash F40 when Start is pressed and refuse to run.",
    causes: [
      "Loose ribbon cable between main control and motor control",
      "Burned solder joint on the main control board connector",
      "Failed motor control board after a thermal event",
      "Blown blower thermal fuse cutting power to the motor board"
    ],
    fixes: [
      "Turn off the breaker for five minutes, then inspect the interconnect harness connectors",
      "Look at the main control board for visible arcing or discoloration near motor pins",
      "Reseat both ends of the CCU-to-MCU cable with power removed",
      "If F40 returns instantly at start, plan for motor control or main board replacement"
    ],
    when_to_call_technician: "Board-level F40 repair requires model-matched parts—have a technician confirm which board lost communication.",
    affected_models: ["Whirlpool WED9600TA", "Whirlpool WED85HEFW", "Whirlpool WGD9600TA"],
    related_codes: ["f41", "f42", "f01"],
    difficulty: "hard", estimated_time: "Call technician"
  },
  {
    brand: "whirlpool", appliance: "dryer", error_code: "f41",
    title: "Whirlpool Dryer F41 Error Code",
    summary: "Blower motor or motor control board fault",
    meta_description: "Whirlpool dryer F41 points to blower motor failure. Check motor plug, test blower wheel, verify motor control board.",
    meaning: "F41 means the blower motor or its dedicated motor control board is not operating correctly. The dryer needs blower airflow for heat distribution—without it, the control halts the cycle.",
    causes: [
      "Blower wheel clogged with lint jamming the motor",
      "Loose motor connector with burnt pins",
      "Failed blower motor capacitor or winding",
      "Motor control board not sending run voltage"
    ],
    fixes: [
      "Unplug the dryer and spin the blower wheel by hand—it should turn freely",
      "Vacuum lint from the blower housing and wheel fins",
      "Reseat the blower motor harness at the motor control board",
      "Run air fluff after cleaning—no blower sound with F41 means motor or board replacement"
    ],
    when_to_call_technician: "Blower motor replacement on stacked units is labor-intensive—schedule service if the wheel is clear but the motor does not run.",
    affected_models: ["Whirlpool WED9600TA", "Whirlpool WED85HEFW", "Whirlpool WGD5620HW"],
    related_codes: ["f40", "f26", "f30"],
    difficulty: "hard", estimated_time: "Call technician"
  },
  {
    brand: "whirlpool", appliance: "dryer", error_code: "f42",
    title: "Whirlpool Dryer F42 Error Code",
    summary: "Heater state cannot be verified by motor control",
    meta_description: "Whirlpool dryer F42 means heater thermistor undetected. Check MCU heater sense circuit, wiring, replace MCU if needed.",
    meaning: "F42 means the motor control unit cannot detect whether the heater is on or off through its monitoring thermistor. The dryer disables heat until the sense circuit returns valid feedback.",
    causes: [
      "Heater thermistor wire open at the motor control unit",
      "Failed heater relay on the motor control board",
      "Shorted heating element drawing abnormal current",
      "Motor control unit sense circuit damaged"
    ],
    fixes: [
      "Disconnect power and inspect heater thermistor wiring at the MCU per the tech sheet",
      "Check the heating element terminals for loose spade connectors",
      "Measure element resistance—it should match the spec on your model wiring diagram",
      "Replace the motor control unit if wiring and element test good but F42 persists"
    ],
    when_to_call_technician: "MCU replacement on electric dryers interfaces with high-voltage heat circuits—use a qualified technician.",
    affected_models: ["Whirlpool WED9600TA", "Whirlpool WED85HEFW", "Whirlpool WGD9600TA"],
    related_codes: ["f40", "f41", "f31"],
    difficulty: "hard", estimated_time: "Call technician"
  },
  {
    brand: "whirlpool", appliance: "dryer", error_code: "pf",
    title: "Whirlpool Dryer PF Error Code",
    summary: "Power interrupted during a cycle",
    meta_description: "Whirlpool dryer PF means power failure. Press Start to resume or Power to clear—check breaker if PF repeats often.",
    meaning: "PF is an informational power-failure code, not a component fault. The dryer detected a loss of line voltage mid-cycle—from a tripped breaker, brief outage, or unplugging—and paused with PF on the display.",
    causes: [
      "Household power outage or brownout during drying",
      "Tripped 30-amp breaker on one leg of the dryer circuit",
      "Loose power cord at the terminal block causing intermittent contact",
      "User unplugging the dryer before the cycle finished"
    ],
    fixes: [
      "Press and hold Start to resume the cycle from where it stopped",
      "Press Power to clear PF from the display if you do not want to continue",
      "Check both dryer breakers in the panel and reset any that tripped",
      "Tighten the power cord screws at the rear terminal block if PF appears frequently"
    ],
    when_to_call_technician: "Call an electrician if PF shows on every heated cycle—intermittent voltage loss at the outlet may be the root cause.",
    affected_models: ["Whirlpool WED5620HW", "Whirlpool WED6600MW", "Whirlpool WGD5620HW"],
    related_codes: ["f31", "f01", "f40"],
    difficulty: "easy", estimated_time: "5 min"
  }
];
