/** Researched unique copy — Whirlpool refrigerator codes 22–36. Sources: Whirlpool tech sheet W11509412, MyPros+ ice maker diagnostics */
export default [
  {
    brand: "whirlpool", appliance: "refrigerator", error_code: "22",
    title: "Whirlpool Refrigerator Error Code 22",
    summary: "Pantry compartment sensor 2 out of range",
    meta_description: "Whirlpool fridge code 22 means PC sensor 2 resistance fault. Check module connector, test cold-side thermistor.",
    meaning: "Code 22 means the resistance of pantry compartment (PC) sensor 2 is outside the normal range—above 45K ohms when cold. The ice maker module or UI cannot read accurate temperature for the refrigerated drawer zone.",
    causes: [
      "Loose connector at the ice maker or pantry module",
      "Open-circuit PC2 thermistor wire in the door harness",
      "Failed PC2 sensor reading too high when chilled",
      "Corroded pins at the module J1 connector from condensation"
    ],
    fixes: [
      "Enter service diagnostics per your tech sheet and note whether 22 appears in Test 56 or the module display",
      "Unplug the refrigerator and reseat the PC sensor harness at the module",
      "Measure PC2 sensor resistance at the connector against the cold-temperature spec on the tech sheet",
      "Replace the PC2 thermistor if resistance stays above 45K ohms at refrigerator temperature"
    ],
    when_to_call_technician: "Module replacement may be required if the sensor tests good but code 22 persists in diagnostics.",
    affected_models: ["Whirlpool WRX735SDHZ", "Whirlpool WRF555SDFZ", "Whirlpool WRX986SIHZ"],
    related_codes: ["23", "24", "25"],
    difficulty: "hard", estimated_time: "1 hour"
  },
  {
    brand: "whirlpool", appliance: "refrigerator", error_code: "23",
    title: "Whirlpool Refrigerator Error Code 23",
    summary: "Ice maker switch not cycling during harvest",
    meta_description: "Whirlpool fridge code 23 means ice maker switch fault. Check harvest cam, test switch continuity, clear ice jam.",
    meaning: "Code 23 means the board did not see the ice maker switch cycle during the harvest rotation. The harvest cam should momentarily open the switch at home position—without that pulse the module thinks the gearbox is out of sync.",
    causes: [
      "Ice jam preventing the ejector from reaching home",
      "Broken switch actuator tab on the ice maker gearbox",
      "Failed microswitch inside the ice maker head",
      "Loose wire at the switch harness on the module"
    ],
    fixes: [
      "Remove the ice bin and inspect for cubes blocking the ejector rake",
      "Manually rotate the ice maker cam through one harvest using the test jumper per the tech sheet",
      "Listen for a click as the cam passes the switch home position",
      "Replace the ice maker assembly if the cam moves but no switch click is heard"
    ],
    when_to_call_technician: "Ice maker module and gearbox replacement is easiest through service if manual harvest does not produce a switch pulse.",
    affected_models: ["Whirlpool WRX735SDHZ", "Whirlpool WRF555SDFZ", "Whirlpool WRX986SIHZ"],
    related_codes: ["26", "24", "27"],
    difficulty: "medium", estimated_time: "45 min"
  },
  {
    brand: "whirlpool", appliance: "refrigerator", error_code: "24",
    title: "Whirlpool Refrigerator Error Code 24",
    summary: "Ice tray sensor resistance too high",
    meta_description: "Whirlpool fridge code 24 means ice tray sensor open/high. Test tray thermistor, check module wiring, replace sensor.",
    meaning: "Code 24 means the ice tray thermistor resistance is above the normal upper limit—greater than about 45K ohms. The module cannot determine mold temperature for freeze and harvest timing.",
    causes: [
      "Open ice tray thermistor wire in the ice maker harness",
      "Failed thermistor inside the ice mold body",
      "Connector unplugged at the ice maker head",
      "Ice buildup insulating the sensor from the mold metal"
    ],
    fixes: [
      "Run Service Test 58 on models with ice maker diagnostics to view tray thermistor live values",
      "Disconnect power and remove the ice maker to access the tray sensor plug",
      "Measure tray sensor resistance—compare to the chart on the tech sheet at freezer temp",
      "Replace the ice maker if the tray thermistor reads open or above spec"
    ],
    when_to_call_technician: "Tray sensor is often integral to the ice maker head—service can swap the assembly if resistance is out of range.",
    affected_models: ["Whirlpool WRX735SDHZ", "Whirlpool WRF555SDFZ", "Whirlpool WRX986SIHZ"],
    related_codes: ["25", "26", "22"],
    difficulty: "medium", estimated_time: "1 hour"
  },
  {
    brand: "whirlpool", appliance: "refrigerator", error_code: "25",
    title: "Whirlpool Refrigerator Error Code 25",
    summary: "Ice tray sensor resistance too low",
    meta_description: "Whirlpool fridge code 25 means ice tray sensor shorted. Inspect harness for shorts, replace ice maker thermistor.",
    meaning: "Code 25 is the low-resistance counterpart to code 24—the ice tray thermistor reads below about 660 ohms, indicating a shorted or damaged sensor circuit.",
    causes: [
      "Shorted tray thermistor from water intrusion into the mold body",
      "Pinched harness wire shorting to the freezer liner",
      "Connector bridged by moisture or corrosion",
      "Failed module misreading a good sensor"
    ],
    fixes: [
      "Unplug the unit and inspect the ice maker harness along the freezer liner for pinch points",
      "Dry the connector at the ice maker head if frost melt left moisture",
      "Measure tray sensor resistance—values under 660 ohms at freezer temp confirm a short",
      "Install a new ice maker assembly if the sensor is non-replaceable separately"
    ],
    when_to_call_technician: "If a new ice maker still shows code 25, the receiver module may need replacement.",
    affected_models: ["Whirlpool WRX735SDHZ", "Whirlpool WRF555SDFZ", "Whirlpool WRX986SIHZ"],
    related_codes: ["24", "26", "30"],
    difficulty: "medium", estimated_time: "1 hour"
  },
  {
    brand: "whirlpool", appliance: "refrigerator", error_code: "26",
    title: "Whirlpool Refrigerator Error Code 26",
    summary: "Ice maker motor timed out",
    meta_description: "Whirlpool fridge code 26 means icemaker motor timeout. Check gearbox for ice jam, test motor, replace ice maker.",
    meaning: "Code 26 means the ice maker drive motor ran longer than allowed without completing its rotation. The gearbox did not return to the start position within the module timeout window.",
    causes: [
      "Frozen ice binding the ejector rake",
      "Stripped plastic gears inside the ice maker gearbox",
      "Failed motor winding drawing low torque",
      "Bent ejector arm hitting the bin auger housing"
    ],
    fixes: [
      "Remove the ice bin and melt any ice bridging the ejector with a hair dryer on low",
      "Rotate the ice maker cam by hand—it should move smoothly through 360 degrees",
      "Run a manual harvest from service diagnostics and watch for full rotation",
      "Replace the ice maker head if the motor hums but the cam does not advance"
    ],
    when_to_call_technician: "Gearbox replacement is bundled with the ice maker module—service is the fastest path if manual rotation is stiff.",
    affected_models: ["Whirlpool WRX735SDHZ", "Whirlpool WRF555SDFZ", "Whirlpool WRX986SIHZ"],
    related_codes: ["27", "23", "28"],
    difficulty: "medium", estimated_time: "45 min"
  },
  {
    brand: "whirlpool", appliance: "refrigerator", error_code: "27",
    title: "Whirlpool Refrigerator Error Code 27",
    summary: "Ice maker motor current too high",
    meta_description: "Whirlpool fridge code 27 means icemaker motor overcurrent. Clear ice jams, inspect gearbox, replace ice maker motor.",
    meaning: "Code 27 means the ice maker motor is drawing more current than expected—usually from a mechanical bind or failing motor bearings inside the gearbox.",
    causes: [
      "Ice cube stuck under the ejector arm increasing load torque",
      "Worn gearbox bearings creating drag",
      "Motor armature short increasing amp draw",
      "Module incorrectly calibrated for a replaced ice maker"
    ],
    fixes: [
      "Empty the bin and clear any cube fragments under the rake",
      "Manually turn the cam—grinding or hard spots indicate gearbox damage",
      "Run one harvest cycle from diagnostics and listen for motor strain",
      "Replace the ice maker assembly if current stays high with a clear mold"
    ],
    when_to_call_technician: "Motor overcurrent can damage the module—stop using the ice maker until the gearbox is replaced.",
    affected_models: ["Whirlpool WRX735SDHZ", "Whirlpool WRF555SDFZ", "Whirlpool WRX986SIHZ"],
    related_codes: ["26", "28", "31"],
    difficulty: "medium", estimated_time: "1 hour"
  },
  {
    brand: "whirlpool", appliance: "refrigerator", error_code: "28",
    title: "Whirlpool Refrigerator Error Code 28",
    summary: "Water inlet solenoid current too high",
    meta_description: "Whirlpool fridge code 28 means fill solenoid overcurrent. Check fill tube for freeze, test valve coil, replace solenoid.",
    meaning: "Code 28 means the ice maker water inlet solenoid is drawing excessive current when energized. The module protects the driver circuit by logging code 28 and skipping fill.",
    causes: [
      "Frozen fill tube causing back-pressure on the valve",
      "Shorted solenoid coil on the ice maker fill valve",
      "Mineral buildup restricting the valve pintle",
      "Module driver feeding voltage into a shorted harness"
    ],
    fixes: [
      "Inspect the fill tube above the ice maker for an ice plug—thaw with a warm towel",
      "Disconnect power and measure fill valve coil resistance per the tech sheet",
      "Manually trigger a fill from diagnostics and watch for normal water stream into the mold",
      "Replace the ice maker fill valve if coil resistance is below spec"
    ],
    when_to_call_technician: "If the valve tests good but code 28 persists, the ice maker module driver needs service replacement.",
    affected_models: ["Whirlpool WRX735SDHZ", "Whirlpool WRF555SDFZ", "Whirlpool WRX986SIHZ"],
    related_codes: ["29", "26", "33"],
    difficulty: "medium", estimated_time: "45 min"
  },
  {
    brand: "whirlpool", appliance: "refrigerator", error_code: "29",
    title: "Whirlpool Refrigerator Error Code 29",
    summary: "Water inlet solenoid current too low",
    meta_description: "Whirlpool fridge code 29 means fill solenoid undercurrent. Check valve wiring, test coil ohms, verify water supply.",
    meaning: "Code 29 means the fill solenoid drew less current than expected—often an open coil, poor connection, or no water reaching the valve when fill was commanded.",
    causes: [
      "Open-circuit solenoid coil on the ice maker valve",
      "Loose wire at the valve connector behind the freezer liner",
      "House water supply off to the refrigerator saddle valve",
      "Kinked quarter-inch water line starving the valve"
    ],
    fixes: [
      "Confirm the refrigerator water supply valve under the sink is fully open",
      "Inspect the copper or plastic supply line for kinks behind the fridge",
      "Measure valve coil resistance—an open reading means replace the valve",
      "Run a manual fill from diagnostics and watch for water entering the mold cup"
    ],
    when_to_call_technician: "Schedule service if water flows at the disconnected line but code 29 appears during fill—the module or harness may be open.",
    affected_models: ["Whirlpool WRX735SDHZ", "Whirlpool WRF555SDFZ", "Whirlpool WRX986SIHZ"],
    related_codes: ["28", "33", "26"],
    difficulty: "easy", estimated_time: "30 min"
  },
  {
    brand: "whirlpool", appliance: "refrigerator", error_code: "30",
    title: "Whirlpool Refrigerator Error Code 30",
    summary: "Ice mold heater not reaching temperature",
    meta_description: "Whirlpool fridge code 30 means mold heater error. Test heater resistance, check mold thermostat, run harvest test.",
    meaning: "Code 30 means the ice mold heater failed to heat the mold to release temperature during harvest. The module timed out waiting for the thermistor to confirm the mold warmed enough to eject cubes.",
    causes: [
      "Open mold heater element inside the ice maker body",
      "Burned heater connection at the ice maker harness",
      "Failed mold thermostat opening too early",
      "Heavy scale insulating the mold from the heater"
    ],
    fixes: [
      "Remove the ice maker and inspect heater wires for heat discoloration",
      "Measure mold heater resistance—it should not read open",
      "Run Service Test 58 heater activation and watch for mold surface warming",
      "Replace the ice maker if the heater is open or does not warm during test"
    ],
    when_to_call_technician: "Mold heater replacement is part of the ice maker head—service can swap the assembly if harvest repeatedly fails with code 30.",
    affected_models: ["Whirlpool WRX735SDHZ", "Whirlpool WRF555SDFZ", "Whirlpool WRX986SIHZ"],
    related_codes: ["34", "26", "32"],
    difficulty: "medium", estimated_time: "1 hour"
  },
  {
    brand: "whirlpool", appliance: "refrigerator", error_code: "31",
    title: "Whirlpool Refrigerator Error Code 31",
    summary: "Harvest motor failed range check",
    meta_description: "Whirlpool fridge code 31 means harvest motor range error. Inspect gearbox, test motor current, replace ice maker.",
    meaning: "Code 31 means the harvest motor current or speed fell outside the calibrated range during the eject stroke. The module detected abnormal motor performance compared to factory limits.",
    causes: [
      "Partial ice jam allowing only half rotation of the cam",
      "Worn motor brushes or gearbox slip",
      "Incorrect ice maker installed for the module firmware",
      "Loose motor connector intermittent during harvest"
    ],
    fixes: [
      "Clear all ice from the mold and ejector path before retesting",
      "Reseat the motor plug at the ice maker head",
      "Run a forced harvest from diagnostics and count full cam rotation",
      "Replace the ice maker if the motor stutters or stops mid-harvest"
    ],
    when_to_call_technician: "Module firmware mismatches require a matched ice maker part number—verify against the tech sheet before ordering.",
    affected_models: ["Whirlpool WRX735SDHZ", "Whirlpool WRF555SDFZ", "Whirlpool WRX986SIHZ"],
    related_codes: ["27", "35", "26"],
    difficulty: "medium", estimated_time: "1 hour"
  },
  {
    brand: "whirlpool", appliance: "refrigerator", error_code: "32",
    title: "Whirlpool Refrigerator Error Code 32",
    summary: "Harvest thermistor out of calibrated range",
    meta_description: "Whirlpool fridge code 32 means harvest thermistor range fault. Test mold sensor, check wiring, replace ice maker.",
    meaning: "Code 32 means the harvest thermistor reading during the eject phase was outside the expected resistance band. The module uses this sensor to confirm the mold released ice before returning to freeze.",
    causes: [
      "Drifted harvest thermistor reading high or low vs calibration",
      "Wire fracture in the thermistor harness at the door hinge",
      "Ice shield blocking the sensor from the mold surface",
      "Module EEPROM calibration lost after a power surge"
    ],
    fixes: [
      "Run Service Test 58 and record thermistor values during freeze and harvest",
      "Inspect the harness where it exits the freezer door for wire chafing",
      "Compare live readings to the resistance table on the tech sheet",
      "Replace the ice maker if the harvest thermistor is out of spec at known temperatures"
    ],
    when_to_call_technician: "If the sensor tests good in isolation, the receiver module may need recalibration or replacement.",
    affected_models: ["Whirlpool WRX735SDHZ", "Whirlpool WRF555SDFZ", "Whirlpool WRX986SIHZ"],
    related_codes: ["36", "24", "25"],
    difficulty: "hard", estimated_time: "1 hour"
  },
  {
    brand: "whirlpool", appliance: "refrigerator", error_code: "33",
    title: "Whirlpool Refrigerator Error Code 33",
    summary: "Fill tube heater out of range",
    meta_description: "Whirlpool fridge code 33 means fill tube heater fault. Thaw fill tube, test heater ohms, check ice box fan airflow.",
    meaning: "Code 33 means the fill tube heater resistance or current is outside the acceptable range. A cold fill tube freezes incoming water and prevents the mold from filling—code 33 catches heater circuit failures early.",
    causes: [
      "Open fill tube heater wire along the freezer ceiling",
      "Ice plug in the fill tube from a failed heater",
      "Failed heater element on the plastic fill tube assembly",
      "Ice box fan not running, allowing tube freeze even with a good heater"
    ],
    fixes: [
      "Thaw the fill tube with a warm cloth until water can pass freely",
      "Run Service Test 36 to confirm the ice box fan operates",
      "Measure fill tube heater resistance at the connector per tech sheet",
      "Replace the fill tube heater kit if resistance reads open"
    ],
    when_to_call_technician: "Fill tube and heater replacement in the freezer ceiling is tedious—service can install the correct tube kit for your model.",
    affected_models: ["Whirlpool WRX735SDHZ", "Whirlpool WRF555SDFZ", "Whirlpool WRX986SIHZ"],
    related_codes: ["28", "29", "36"],
    difficulty: "medium", estimated_time: "1 hour"
  },
  {
    brand: "whirlpool", appliance: "refrigerator", error_code: "34",
    title: "Whirlpool Refrigerator Error Code 34",
    summary: "Mold heater current outside limits",
    meta_description: "Whirlpool fridge code 34 means mold heater range error. Test heater amps, inspect module connection, replace ice maker.",
    meaning: "Code 34 means the mold heater current during harvest was higher or lower than the module expects. Unlike code 30's timeout, code 34 flags marginal heater performance still within time but outside electrical limits.",
    causes: [
      "Partially shorted mold heater drawing excess current",
      "High-resistance connection dropping voltage to the heater",
      "Module current sense resistor drift after years of heat cycles",
      "Wrong voltage ice maker installed on a 120V module"
    ],
    fixes: [
      "Inspect heater spade terminals for arcing or carbon buildup",
      "Measure heater resistance and compare to the new-part spec",
      "Run a harvest test and note whether cubes release partially",
      "Replace the ice maker if heater resistance is out of the published range"
    ],
    when_to_call_technician: "Current sense faults on the module board require a technician with the model-specific diagnostic software.",
    affected_models: ["Whirlpool WRX735SDHZ", "Whirlpool WRF555SDFZ", "Whirlpool WRX986SIHZ"],
    related_codes: ["30", "35", "26"],
    difficulty: "hard", estimated_time: "1 hour"
  },
  {
    brand: "whirlpool", appliance: "refrigerator", error_code: "35",
    title: "Whirlpool Refrigerator Error Code 35",
    summary: "Harvest motor speed out of range",
    meta_description: "Whirlpool fridge code 35 means harvest motor range fault. Clear jams, verify cam timing, replace ice maker gearbox.",
    meaning: "Code 35 means the harvest motor speed profile did not match calibrated limits—too fast or too slow through the eject stroke. The module uses timing feedback to detect slipping gears or weak motors.",
    causes: [
      "Gearbox grease hardened slowing cam rotation",
      "Motor bearing wear causing uneven speed",
      "Ice fragment briefly binding then releasing the rake",
      "Module software version mismatch with the ice maker revision"
    ],
    fixes: [
      "Remove the bin and ensure the ejector path is completely clear",
      "Time one manual harvest rotation—it should complete in the seconds listed on the tech sheet",
      "Listen for uneven motor speed during diagnostics harvest",
      "Replace the ice maker if rotation is visibly slow or jerky"
    ],
    when_to_call_technician: "If a new ice maker still triggers code 35, update or replace the receiver module per Whirlpool bulletin for your serial range.",
    affected_models: ["Whirlpool WRX735SDHZ", "Whirlpool WRF555SDFZ", "Whirlpool WRX986SIHZ"],
    related_codes: ["31", "27", "26"],
    difficulty: "medium", estimated_time: "1 hour"
  },
  {
    brand: "whirlpool", appliance: "refrigerator", error_code: "36",
    title: "Whirlpool Refrigerator Error Code 36",
    summary: "Harvest thermistor failed calibration check",
    meta_description: "Whirlpool fridge code 36 means harvest thermistor range fault. Run Test 58, compare mold temps, replace ice maker.",
    meaning: "Code 36 means the harvest thermistor failed a range check distinct from code 32—typically comparing mold temperature delta before and after the heater cycle. The module concludes the sensor cannot reliably report release temperature.",
    causes: [
      "Harvest thermistor decal detached from the mold wall",
      "Sensor reading stuck high after a failed harvest",
      "Water film on the thermistor from a leaking fill valve",
      "End-of-life ice maker with drifted sensor curve"
    ],
    fixes: [
      "Run Service Test 58 and record thermistor values at freeze and post-heat",
      "Dry the mold interior and confirm the sensor pad contacts the metal wall",
      "Compare readings to the chart—flat readings across temperature change mean a bad sensor",
      "Replace the ice maker head when the harvest thermistor fails the delta test"
    ],
    when_to_call_technician: "Module recalibration after ice maker replacement is model-specific—service can confirm code 36 clears in Test 56.",
    affected_models: ["Whirlpool WRX735SDHZ", "Whirlpool WRF555SDFZ", "Whirlpool WRX986SIHZ"],
    related_codes: ["32", "30", "25"],
    difficulty: "hard", estimated_time: "1 hour"
  }
];
