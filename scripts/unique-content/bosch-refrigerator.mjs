/** Researched unique copy — Bosch refrigerator codes. Sources: Bosch Home US refrigeration, TopUnitService, Schematic Expert */
export default [
  {
    brand: "bosch", appliance: "refrigerator", error_code: "e2",
    title: "Bosch Refrigerator E2 Error Code",
    summary: "Freezer compartment temperature sensor fault",
    meta_description: "Bosch E2 means the freezer thermistor failed. Reset power, reseat the sensor plug; E2 with warm freezer needs sensor replacement.",
    meaning: "E2 on Bosch built-in and counter-depth refrigerators indicates the freezer compartment temperature sensor is faulty—the thermistor in the freezer section stopped sending valid resistance readings, so the board cannot regulate compressor and defrost cycles accurately.",
    causes: [
      "Freezer thermistor wire broken at the evaporator clip",
      "Connector corrosion after defrost water exposure",
      "Sensor shorted from ice piercing the harness",
      "Control board freezer input circuit failure"
    ],
    fixes: [
      "Turn off breaker thirty seconds per Bosch guidance",
      "Rearrange freezer items so nothing blocks the sensor probe area on the rear panel",
      "Listen for evaporator fan after reset—silence with E2 suggests cooling loss",
      "Monitor freezer temp display for erratic or blank readings"
    ],
    when_to_call_technician: "E2 with rising freezer temps after reset requires thermistor ohm testing against Bosch spec—typically near 5kΩ at room temperature depending on model.",
    affected_models: ["Bosch B36CL80ENS", "Bosch B36CT80SNB", "Bosch B36CD50SNS"],
    related_codes: ["e3", "e4", "e15"],
    difficulty: "medium", estimated_time: "30 min"
  },
  {
    brand: "bosch", appliance: "refrigerator", error_code: "e3",
    title: "Bosch Refrigerator E3 Error Code",
    summary: "FlexBar or deli drawer sensor failed",
    meta_description: "Bosch E3 means the temperature-controlled drawer sensor faulted. Check drawer seating; persistent E3 needs sensor service.",
    meaning: "E3 indicates the temperature sensor in the FlexBar, deli, or chiller drawer failed—the separate zone cannot hold precise temps for cheeses and deli meats while the main fridge and freezer may continue running normally.",
    causes: [
      "Drawer not fully pushed onto the sensor pin at the rear cavity",
      "Drawer thermistor harness unplugged during cleaning",
      "Failed sensor after liquid spill in the drawer track",
      "Control board drawer-zone input fault"
    ],
    fixes: [
      "Remove the drawer completely and reinstall until it slides smoothly on both rails",
      "Wipe the drawer cavity and ensure the rear sensor pin is not bent",
      "Reset breaker thirty seconds and set the drawer to medium chill",
      "Avoid overloading the drawer so the lid seal contacts evenly"
    ],
    when_to_call_technician: "E3 with a properly seated drawer after reset requires drawer thermistor or harness replacement.",
    affected_models: ["Bosch B36CL80ENS", "Bosch B11CB50SSS", "Bosch B36CT80SNB"],
    related_codes: ["e2", "e4", "e10"],
    difficulty: "medium", estimated_time: "30 min"
  },
  {
    brand: "bosch", appliance: "refrigerator", error_code: "e4",
    title: "Bosch Refrigerator E4 Error Code",
    summary: "Condenser or defrost sensor fault",
    meta_description: "Bosch E4 means a condenser-area sensor failed. Clean rear coils, reset power; E4 with hot compressor needs sensor service.",
    meaning: "E4 indicates a condenser or defrost-related sensor fault on Bosch refrigeration—the sensor monitoring heat exchange or defrost termination sent readings outside calibrated limits. Warm freezer corners or long compressor run times may precede E4.",
    causes: [
      "Condenser sensor wire chafed against the rear panel",
      "Heavy dust on condenser coils causing overheating sensor trips",
      "Defrost sensor open after repeated manual defrost damage",
      "Main board sensor bus failure"
    ],
    fixes: [
      "Pull the unit forward safely and vacuum condenser coils at the bottom rear",
      "Ensure two inches clearance behind the unit for airflow on built-in installs",
      "Reset breaker thirty seconds after coil cleaning",
      "Verify both doors seal fully so the compressor is not running continuously"
    ],
    when_to_call_technician: "E4 returning with clean coils and good door seals requires condenser or defrost sensor replacement.",
    affected_models: ["Bosch B36CD50SNS", "Bosch B36CT80SNB", "Bosch B36CL80ENS"],
    related_codes: ["e6", "e12", "e2"],
    difficulty: "medium", estimated_time: "30 min"
  },
  {
    brand: "bosch", appliance: "refrigerator", error_code: "e5",
    title: "Bosch Refrigerator E5 Error Code",
    summary: "Fresh food compartment sensor fault",
    meta_description: "Bosch E5 means the refrigerator section thermistor failed. Check door seal and sensor connection; service if fridge temp swings.",
    meaning: "E5 means the fresh food compartment temperature sensor failed—the thermistor in the upper refrigerator section stopped reporting valid data, causing overcooling that freezes produce or warm spots that risk spoilage.",
    causes: [
      "Fridge thermistor displaced from the clip on the rear liner",
      "Wire harness damaged when removing shelves for cleaning",
      "Sensor failed after prior power surge",
      "Control board refrigerator-zone input circuit fault"
    ],
    fixes: [
      "Reset breaker thirty seconds and avoid opening doors repeatedly during recovery",
      "Verify the gasket seals evenly with a dollar-bill drag test around the fresh food door",
      "Set fridge temp to 37°F and monitor for twelve hours after reset",
      "Move items away from the rear panel air sensor area"
    ],
    when_to_call_technician: "E5 with frozen vegetables in the crisper or a fridge temp display stuck high/low needs thermistor replacement.",
    affected_models: ["Bosch B36CL80ENS", "Bosch B11CB50SSS", "Bosch B36CD50SNS"],
    related_codes: ["e2", "e3", "e15"],
    difficulty: "medium", estimated_time: "30 min"
  },
  {
    brand: "bosch", appliance: "refrigerator", error_code: "e6",
    title: "Bosch Refrigerator E6 Error Code",
    summary: "Compressor running hot—condenser airflow issue",
    meta_description: "Bosch E6 warns the compressor is overheating. Clean condenser coils, verify fan runs, and ensure ventilation clearance.",
    meaning: "E6 indicates the compressor is running hot—often because condenser coils are dust-clogged or the condenser fan is not moving enough air across the coils. Built-in installs with tight toe-kick ventilation are a frequent trigger.",
    causes: [
      "Years of pet hair and dust on bottom-mounted condenser coils",
      "Condenser fan not spinning at startup",
      "Toe-kick grille blocked on integrated panel installs",
      "Failed start relay causing compressor to hum without cooling"
    ],
    fixes: [
      "Unplug and vacuum condenser coils through the bottom front grille",
      "Restore power and listen for condenser fan within two minutes at the rear bottom",
      "Verify the integrated panel vent slots are not covered by flooring or cabinetry",
      "Leave space for air to enter the toe kick per the install manual"
    ],
    when_to_call_technician: "E6 with a running fan and clean coils may indicate compressor or start-component failure—schedule service before food loss.",
    affected_models: ["Bosch B36CT80SNB", "Bosch B36CL80ENS", "Bosch B36CD50SNS"],
    related_codes: ["e12", "e4", "e13"],
    difficulty: "easy", estimated_time: "10 min"
  },
  {
    brand: "bosch", appliance: "refrigerator", error_code: "e7",
    title: "Bosch Refrigerator E7 Error Code",
    summary: "Evaporator fan not reporting speed",
    meta_description: "Bosch E7 means evaporator fan failure. Listen for fan after reset; manual defrost if iced, then replace fan if silent.",
    meaning: "E7 means the evaporator fan motor did not provide speed feedback—the fan that circulates cold air from the freezer coil to both compartments stopped or the board lost its signal. Warm fridge with cold freezer floor often appears before E7.",
    causes: [
      "Ice buildup locking the evaporator fan blade",
      "Failed BLDC evaporator motor after years of run time",
      "Defrost system fault refreezing the coil weekly",
      "Loose fan connector behind the freezer rear panel"
    ],
    fixes: [
      "Reset breaker thirty seconds and listen for fan whir in the freezer",
      "If fan is silent, unplug and manually defrost eight to twelve hours with doors open on towels",
      "After thaw, spin the fan blade by hand—it should move freely",
      "Avoid loading warm leftovers that raise humidity until airflow is restored"
    ],
    when_to_call_technician: "Free fan blade with no motor hum after defrost requires evaporator fan motor replacement.",
    affected_models: ["Bosch B36CL80ENS", "Bosch B36CD50SNS", "Bosch B11CB50SSS"],
    related_codes: ["e13", "e8", "e2"],
    difficulty: "medium", estimated_time: "30 min"
  },
  {
    brand: "bosch", appliance: "refrigerator", error_code: "e8",
    title: "Bosch Refrigerator E8 Error Code",
    summary: "Ice maker or ice compartment sensor fault",
    meta_description: "Bosch E8 means ice maker sensor failure. Verify ice maker is ON; E8 with no ice production needs sensor or module service.",
    meaning: "E8 indicates an ice maker or ice compartment temperature sensor fault—the sensor that tells the board when to harvest ice or protect the ice box from warm air failed. Ice production stops while E8 is active on models with factory ice makers.",
    causes: [
      "Ice maker thermistor disconnected during bucket removal",
      "Frozen fill tube causing sensor misread",
      "Failed ice maker control module sensor input",
      "Door left ajar letting humid air confuse the ice box sensor"
    ],
    fixes: [
      "Confirm the ice maker switch is ON and the freezer is set to 0°F or lower",
      "Remove the ice bucket and reinstall until it seats on the drive auger",
      "Reset breaker thirty seconds and wait twenty-four hours for a harvest attempt",
      "Check the freezer door seal along the ice dispenser area"
    ],
    when_to_call_technician: "E8 after twenty-four hours with no harvest attempt requires ice maker module or sensor service.",
    affected_models: ["Bosch B36CL80ENS", "Bosch B36CT80SNB", "Bosch B36CD50SNS"],
    related_codes: ["e11", "e2", "e7"],
    difficulty: "medium", estimated_time: "30 min"
  },
  {
    brand: "bosch", appliance: "refrigerator", error_code: "e9",
    title: "Bosch Refrigerator E9 Error Code",
    summary: "Humidity or ambient sensor out of range",
    meta_description: "Bosch E9 means humidity sensor fault. Reset power; persistent E9 on display models needs sensor or UI module service.",
    meaning: "E9 reports a humidity or ambient condition sensor fault on Bosch refrigerators with electronic display modules—the sensor that helps adapt defrost and fan timing to kitchen conditions sent invalid readings.",
    causes: [
      "Sensor exposed to steam from a kettle directly under the display panel",
      "Connector moisture after cleaning with excessive water near the UI",
      "Failed humidity sensor in the fresh food section",
      "Display control module input circuit damage"
    ],
    fixes: [
      "Reset breaker thirty seconds and avoid steaming appliances directly under the fridge panel",
      "Dry the display area with a soft cloth if moisture was recently introduced",
      "Run the unit for twelve hours on default settings after reset",
      "Note whether E9 appears only after heavy door traffic in humid kitchens"
    ],
    when_to_call_technician: "E9 at every startup in a dry kitchen suggests display module or humidity sensor replacement.",
    affected_models: ["Bosch B36CL80ENS", "Bosch B11CB50SSS", "Bosch B36CT80SNB"],
    related_codes: ["e15", "e10", "e5"],
    difficulty: "hard", estimated_time: "Call technician"
  },
  {
    brand: "bosch", appliance: "refrigerator", error_code: "e10",
    title: "Bosch Refrigerator E10 Error Code",
    summary: "Dispenser user interface fault",
    meta_description: "Bosch E10 means dispenser UI error. Reset breaker; E10 with dead water or ice dispenser needs UI or valve service.",
    meaning: "E10 indicates a dispenser user interface fault per Bosch US refrigeration support—the through-door display or paddle electronics failed communication or self-test. Water and ice dispensing may stop while cabinet cooling continues.",
    causes: [
      "Dispenser UI ribbon cable loose after door removal for service",
      "Frozen water line behind the dispenser causing UI timeout faults",
      "Failed dispenser switch matrix after liquid spill",
      "Main board to dispenser UI communication error"
    ],
    fixes: [
      "Reset breaker thirty seconds per Bosch procedure",
      "Press each dispenser paddle firmly and listen for valve clicks on water",
      "Leave the freezer door closed for two hours if you suspect a frozen dispenser line",
      "Avoid using the dispenser until E10 clears after reset"
    ],
    when_to_call_technician: "E10 with non-responsive paddles after reset requires dispenser UI or water valve diagnosis.",
    affected_models: ["Bosch B36CL80ENS", "Bosch B36CD50SNS", "Bosch B36CT80SNB"],
    related_codes: ["e11", "e3", "e9"],
    difficulty: "hard", estimated_time: "Call technician"
  },
  {
    brand: "bosch", appliance: "refrigerator", error_code: "e11",
    title: "Bosch Refrigerator E11 Error Code",
    summary: "Water inlet valve or filter flow fault",
    meta_description: "Bosch E11 means water supply to ice or dispenser failed. Replace filter, verify saddle valve, and check for frozen lines.",
    meaning: "E11 indicates a water inlet fault for the ice maker or door dispenser—the valve did not fill within the expected time or filter pressure drop exceeded limits. Ice hollow cubes or slow water often precede E11.",
    causes: [
      "Clogged external water filter reducing flow below 20 psi effective",
      "Saddle valve on copper line partially closed or scaled shut",
      "Frozen water line in the freezer door during cold kitchen conditions",
      "Inlet valve solenoid failed to open on dispense command"
    ],
    fixes: [
      "Replace the inline or fridge filter if overdue per the indicator",
      "Verify the household shutoff under the sink is fully open",
      "Dispense two cups of water to purge air after filter change",
      "Leave freezer closed two hours if you suspect a frozen door line"
    ],
    when_to_call_technician: "E11 with a new filter and open supply requires inlet valve or door-line thaw service.",
    affected_models: ["Bosch B36CL80ENS", "Bosch B36CT80SNB", "Bosch B11CB50SSS"],
    related_codes: ["e8", "e10", "e14"],
    difficulty: "medium", estimated_time: "30 min"
  },
  {
    brand: "bosch", appliance: "refrigerator", error_code: "e12",
    title: "Bosch Refrigerator E12 Error Code",
    summary: "Condenser fan motor not running",
    meta_description: "Bosch E12 means condenser fan failure. Vacuum coils, spin fan by hand; replace motor if E12 returns in three hours.",
    meaning: "E12 means the condenser fan at the compressor base is not running or not reporting speed—the motor that rejects heat from the sealed system failed. Bosch may clear E12 briefly after reset but it often returns within three hours until repaired.",
    causes: [
      "Condenser fan bearing seized from dust",
      "Wire harness unplugged during moving the unit",
      "Object blocking the fan blade under the machine",
      "Main board fan driver failure"
    ],
    fixes: [
      "Unplug and vacuum coils and the fan grille at the bottom rear",
      "Spin the fan blade by hand—it should rotate without grinding",
      "Restore power and confirm fan starts within two minutes",
      "Keep toe-kick vents clear on built-in installs"
    ],
    when_to_call_technician: "E12 on schedule after cleaning requires condenser fan motor replacement.",
    affected_models: ["Bosch B36CD50SNS", "Bosch B36CL80ENS", "Bosch B36CT80SNB"],
    related_codes: ["e6", "e13", "e4"],
    difficulty: "medium", estimated_time: "30 min"
  },
  {
    brand: "bosch", appliance: "refrigerator", error_code: "e13",
    title: "Bosch Refrigerator E13 Error Code",
    summary: "Freezer fan or defrost circuit fault",
    meta_description: "Bosch E13 indicates freezer airflow or defrost fault. Defrost manually if iced; service fan or defrost heater if E13 persists.",
    meaning: "E13 indicates a freezer fan or defrost circuit fault—the board expected airflow or defrost heat that never materialized. Heavy frost on the freezer rear panel with E13 points to defrost heater or bi-metal sensor failure rather than a simple fan stall.",
    causes: [
      "Defrost heater open after years of ice storms on the coil",
      "Bi-metal defrost thermostat stuck open",
      "Freezer fan motor failed while defrost drain is iced shut",
      "Defrost timer or board output not energizing heater"
    ],
    fixes: [
      "Manual defrost: unplug, empty freezer, open doors eight plus hours on towels",
      "Clear iced drain pan tube after thaw with warm water flush",
      "Reset and monitor whether frost returns on the rear panel within one week",
      "Listen for fan and brief heater warmth during defrost cycle"
    ],
    when_to_call_technician: "Frost returning within days after manual defrost with E13 requires defrost heater, fuse, or fan service.",
    affected_models: ["Bosch B36CL80ENS", "Bosch B11CB50SSS", "Bosch B36CD50SNS"],
    related_codes: ["e7", "e2", "e12"],
    difficulty: "medium", estimated_time: "30 min"
  },
  {
    brand: "bosch", appliance: "refrigerator", error_code: "e14",
    title: "Bosch Refrigerator E14 Error Code",
    summary: "Main to display board communication fault",
    meta_description: "Bosch E14 means control board communication error. Reset breaker; persistent E14 needs PCB service on built-in models.",
    meaning: "E14 indicates communication failure between the main refrigeration control board and a sub-module—display, inverter compressor driver, or door UI. Temperature settings may not respond while the compressor runs on last known commands.",
    causes: [
      "Loose ribbon cable after integrated panel service",
      "Inverter compressor board disconnect on variable-speed models",
      "Power surge damaging UART lines between boards",
      "Condensation on connectors in humid kitchens"
    ],
    fixes: [
      "Reset breaker thirty seconds—minimize door openings during the outage if food safety allows",
      "Ensure the fridge is on a grounded outlet without extension cords",
      "Note whether E14 appears at startup or randomly mid-day",
      "Avoid simultaneous heavy loads on the kitchen circuit during reset"
    ],
    when_to_call_technician: "E14 at every power-on after reset typically requires main or inverter board replacement with model-matched parts.",
    affected_models: ["Bosch B36CL80ENS", "Bosch B36CT80SNB", "Bosch B36CD50SNS"],
    related_codes: ["e15", "e10", "e9"],
    difficulty: "hard", estimated_time: "Call technician"
  },
  {
    brand: "bosch", appliance: "refrigerator", error_code: "e15",
    title: "Bosch Refrigerator E15 Error Code",
    summary: "Ambient temperature sensor at display failed",
    meta_description: "Bosch E15 means ambient sensor fault at the display module. Reset power; recurring E15 needs display PCB replacement.",
    meaning: "E15 points to a problem with the ambient temperature sensor at the display control module—the sensor that helps the UI and main board adapt to room temperature failed. Efficiency drops in warm kitchens when E15 is active.",
    causes: [
      "Ambient sensor disconnected during panel removal",
      "Display module moisture after steam exposure",
      "Failed RTD in the UI housing",
      "Main board unable to read display module sensor bus"
    ],
    fixes: [
      "Reset breaker thirty seconds per Bosch guidance",
      "Keep the refrigerator area ventilated—avoid enclosing the top grille on built-ins",
      "Wipe the display dry if condensation is visible",
      "Run default temperature settings for twenty-four hours after reset"
    ],
    when_to_call_technician: "E15 returning daily after reset requires display control module replacement—programming may be required on some built-ins.",
    affected_models: ["Bosch B36CL80ENS", "Bosch B11CB50SSS", "Bosch B36CT80SNB"],
    related_codes: ["e14", "e9", "e5"],
    difficulty: "hard", estimated_time: "Call technician"
  },
  {
    brand: "bosch", appliance: "refrigerator", error_code: "e16",
    title: "Bosch Refrigerator E16 Error Code",
    summary: "Door open alarm exceeded time limit",
    meta_description: "Bosch E16 means door left open too long. Close doors fully, level unit; E16 without open door needs switch service.",
    meaning: "E16 is Bosch's extended door-open alarm—the door switch stayed open long enough that the display shows E16 and an audible alert while the compressor runs to recover temperature. Built-in models with heavy panel doors are prone if items block closure.",
    causes: [
      "Door not fully closed against a bulging container",
      "Misaligned integrated panel after hinge adjustment",
      "Failed door switch in the upper jamb",
      "Dirty gasket preventing seal contact on the hinge side"
    ],
    fixes: [
      "Rearrange shelves so bottles do not push against the door",
      "Clean the gasket with warm water and verify even seal contact",
      "Press the door switch manually—you should hear the fan tone change",
      "Level the unit so doors self-close on built-in installs"
    ],
    when_to_call_technician: "E16 when doors visibly seal flush requires door switch or hinge cam replacement—often a two-person alignment on built-ins.",
    affected_models: ["Bosch B36CL80ENS", "Bosch B36CD50SNS", "Bosch B36CT80SNB"],
    related_codes: ["e2", "e5", "e6"],
    difficulty: "easy", estimated_time: "10 min"
  }
];
