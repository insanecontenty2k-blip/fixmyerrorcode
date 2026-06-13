/** Researched unique copy — Samsung oven/range codes. Sources: ApplianceFaultCodes, Samsung US Support, Hill Country Repairs */
export default [
  {
    brand: "samsung", appliance: "oven", error_code: "e-0e",
    title: "Samsung Oven E-0E Error Code",
    summary: "Self-clean door lock failed to engage",
    meta_description: "Samsung E-0E means the door did not lock within one minute of self-clean start. Cool down, clean latch area, service lock motor if needed.",
    meaning: "E-0E is a Door Locking Error during self-clean—the control commanded lock but the latch never reached the locked position within 60 seconds. Samsung aborts clean heat to prevent opening a hot cavity. Not an overheating code despite similar lettering on other brands.",
    causes: [
      "Food soil or foil blocking the lock hook path",
      "Failed door lock motor actuator",
      "Broken lock switch not confirming engagement",
      "Warped door hinge misaligning the latch striker"
    ],
    fixes: [
      "Cancel self-clean and allow the oven to cool completely",
      "Wipe the latch receiver on the frame—grease buildup is common",
      "Retry self-clean only after confirming the door closes flush with no rack protruding",
      "Listen for lock motor buzz with no movement—motor replacement likely"
    ],
    when_to_call_technician: "E-0E every self-clean attempt with a clean latch track needs lock motor or switch assembly service.",
    affected_models: ["Samsung NE63T8751SS", "Samsung NV51K7770DS", "Samsung NE59M6850SS"],
    related_codes: ["e-0f", "e-13", "e-19"], difficulty: "hard", estimated_time: "Call technician"
  },
  {
    brand: "samsung", appliance: "oven", error_code: "e-08",
    title: "Samsung Oven E-08 Error Code",
    summary: "Oven failed to reach 100 °F in ten minutes",
    meta_description: "Samsung E-08 is a heating error—cavity stayed cold during preheat. Check bake element, igniter, sensor, and gas supply on ranges.",
    meaning: "E-08 sets when the cavity temperature cannot exceed 100 °F (38 °C) within ten minutes after heat starts with the door closed. Samsung shuts down to avoid endless heat attempts—gas models often need igniter service, electric models the bake element or sensor.",
    causes: [
      "Weak gas igniter glowing without opening the valve",
      "Open bake element on electric or dual-fuel ovens",
      "Temperature sensor reading ~1080 Ω out of spec at room temp",
      "Household gas valve closed or LP tank empty on gas ranges"
    ],
    fixes: [
      "Breaker off five minutes, then retry Bake at 350 °F with door closed",
      "On gas, confirm the shutoff behind the range is fully open and watch for igniter glow",
      "On electric, inspect the lower bake element for blister breaks or bright spots",
      "Avoid broil-only tests first—standard Bake isolates the lower heat circuit"
    ],
    when_to_call_technician: "E-08 below 400 °F setpoint after element or igniter visual check needs sensor, valve, or relay board testing.",
    affected_models: ["Samsung NE58F9710WS", "Samsung NE63A6511SS", "Samsung NV51K6650DS"],
    related_codes: ["e-0a", "e-17", "e-18"], difficulty: "medium", estimated_time: "30 min"
  },
  {
    brand: "samsung", appliance: "oven", error_code: "e-0a",
    title: "Samsung Oven E-0A Error Code",
    summary: "Cavity temperature exceeded 650 °F outside clean mode",
    meta_description: "Samsung E-0A is overheating above 650 °F during normal bake/broil. Turn off breaker; test sensor and stuck relay.",
    meaning: "E-0A is an Overheating Error—the probe reported above 650 °F (343 °C) while the oven was on and not in self-clean. Samsung disables heat immediately. A shorted sensor telling the board the oven is cold while heat runs wild is a frequent cause.",
    causes: [
      "Temperature sensor shorted reading falsely low to the board",
      "Relay welded closed on the bake or broil circuit",
      "Cooling fan not running during broil on convection models",
      "Failed board logic after power surge"
    ],
    fixes: [
      "Turn OFF the breaker immediately if E-0A appears with smell or smoke",
      "Wait until the cavity is completely cool before opening or resetting",
      "Do not restart broil until the code clears and sensor wiring is inspected",
      "Retry standard Bake at 300 °F only after a full cooldown and breaker reset"
    ],
    when_to_call_technician: "E-0A on moderate setpoints after cooldown requires sensor ohms test and relay board diagnosis—safety priority.",
    affected_models: ["Samsung NE59M6850SS", "Samsung NE63T8751SS", "Samsung NV51K7770DS"],
    related_codes: ["e-08", "e-15", "e-16"], difficulty: "hard", estimated_time: "Call technician"
  },
  {
    brand: "samsung", appliance: "oven", error_code: "e-0c",
    title: "Samsung Oven E-0C Error Code",
    summary: "Flex Duo partition plate not detected",
    meta_description: "Samsung E-0C means partition switch error on dual-cavity models. Reinstall the divider fully or verify the rear switch is not pressed.",
    meaning: "E-0C (also dC on some displays) is a Partition Switch Error for Flex Duo ovens—the divider plate is missing, crooked, or the switch reads open when the board expects closed. Twin-mode cooking is blocked until the partition state is valid.",
    causes: [
      "Partition plate not pushed to the third slot from top on electric models",
      "Plate removed while a dual-cavity mode was already selected",
      "Partition switch defective—spec ~1750–1850 Ω",
      "Object pressing the switch paddle when the plate is out"
    ],
    fixes: [
      "Remove and reinstall the divider until both sides click into the correct rail slots",
      "Cancel any active dual mode before removing the partition",
      "Verify nothing contacts the rear partition switch with the plate stored outside",
      "Consult the manual for which modes require the divider—Single Oven modes may work without it"
    ],
    when_to_call_technician: "Correctly seated partition with E-0C every time needs switch or harness replacement at the cavity rear.",
    affected_models: ["Samsung NV51K7770DS", "Samsung NV51K6650DS", "Samsung NE63T8751SS"],
    related_codes: ["e-0e", "e-11", "e-19"], difficulty: "easy", estimated_time: "10 min"
  },
  {
    brand: "samsung", appliance: "oven", error_code: "e-0f",
    title: "Samsung Oven E-0F Error Code",
    summary: "Door unlock failed after clean or bake",
    meta_description: "Samsung E-0F indicates door lock won't release. Wait for cooldown; never force—service lock motor if door stays locked cold.",
    meaning: "E-0F is the unlock counterpart to E-0E—the lock motor or switch did not report unlocked after the cycle finished or was cancelled. The door may remain latched while the display shows E-0F even though heat has stopped.",
    causes: [
      "Normal hot lockout still within safety cooldown window",
      "Lock motor failed to retract the hook",
      "Broken lock linkage after high-heat self-clean",
      "Control board not sending unlock command"
    ],
    fixes: [
      "Wait 30–60 minutes for automatic unlock as cavity temperature falls",
      "Turn breaker off only after confirming burners and elements are off",
      "Do not pry the door—tempered glass can shatter",
      "Once cool and unlocked, apply high-temperature grease to the slide rail per service bulletins"
    ],
    when_to_call_technician: "Door locked cold for over two hours with E-0F requires manual lock release and motor service.",
    affected_models: ["Samsung NE63T8751SS", "Samsung NE59M6850SS", "Samsung NV51K7770DS"],
    related_codes: ["e-0e", "e-13", "e-19"], difficulty: "hard", estimated_time: "Call technician"
  },
  {
    brand: "samsung", appliance: "oven", error_code: "e-11",
    title: "Samsung Oven E-11 Error Code",
    summary: "Humidity or steam sensor fault",
    meta_description: "Samsung E-11 means steam/humidity sensor open on steam-assist ranges. Inspect probe and harness at the cavity top.",
    meaning: "E-11 flags an open humidity or steam sensor circuit—common on Samsung ranges with steam bake or steam clean assist. The board cannot regulate moisture injection and locks out steam modes until the sensor reads valid resistance.",
    causes: [
      "Steam sensor connector loose at the main PCB",
      "Open sensor probe from steam corrosion at the cavity top",
      "Wire harness chafed at the door hinge",
      "Using steam modes without the reservoir filled triggering false faults on some firmware"
    ],
    fixes: [
      "Fill the steam reservoir to the max line before steam bake tests",
      "Breaker off five minutes, then reseat the humidity sensor plug",
      "Dry the cavity if E-11 followed a steam cycle with spillover",
      "Retry standard Bake without steam to confirm non-steam modes still heat"
    ],
    when_to_call_technician: "E-11 on steam modes with standard Bake working needs humidity sensor replacement.",
    affected_models: ["Samsung NE63T8751SS", "Samsung NE58F9710WS", "Samsung NE63A6511SS"],
    related_codes: ["e-12", "e-14", "e-08"], difficulty: "medium", estimated_time: "30 min"
  },
  {
    brand: "samsung", appliance: "oven", error_code: "e-12",
    title: "Samsung Oven E-12 Error Code",
    summary: "Humidity sensor shorted or secondary sensor fault",
    meta_description: "Samsung E-12 indicates shorted steam sensor or secondary probe. Test sensor ohms; replace if near zero.",
    meaning: "E-12 is the short-circuit counterpart to E-11—the humidity or secondary cavity sensor reads abnormally low resistance. Steam assist and some convection humidity modes disable until the circuit is repaired.",
    causes: [
      "Sensor wire pinched against hot cavity metal shorting to ground",
      "Probe damaged by steam cleaning before dry-out",
      "Moisture bridge across connector pins",
      "Failed sensor element internally shorted"
    ],
    fixes: [
      "Turn off breaker before touching sensor wiring",
      "Inspect harness along the upper cavity for pinches near the broil area",
      "Allow 24 hours dry time if E-12 appeared once after heavy steam use",
      "Measure sensor resistance—should not read near zero ohms at room temperature"
    ],
    when_to_call_technician: "Replace sensor and harness if short persists with probe disconnected at the board side.",
    affected_models: ["Samsung NV51K7770DS", "Samsung NE59M6850SS", "Samsung NE63T8751SS"],
    related_codes: ["e-11", "e-18", "e-0a"], difficulty: "medium", estimated_time: "30 min"
  },
  {
    brand: "samsung", appliance: "oven", error_code: "e-13",
    title: "Samsung Oven E-13 Error Code",
    summary: "Electronic door lock circuit fault",
    meta_description: "Samsung E-13 is a door lock fault distinct from E-0E timing—lock state invalid during bake or clean. Service latch assembly.",
    meaning: "E-13 reports a Door Lock fault—the lock switch and motor feedback disagree with the command during bake or clean, not only the one-minute self-clean timeout of E-0E. Oven may refuse to start or remain locked after cancel.",
    causes: [
      "Lock position switch worn or misadjusted",
      "Lock motor thermal fuse opened",
      "Bent lock hook from forcing a hot door",
      "Wiring break in the door lock harness"
    ],
    fixes: [
      "Allow full cooldown before attempting any manual intervention",
      "Clean the latch receiver and hook with non-flammable cleaner after cool-down",
      "Power-cycle at the breaker five minutes after the oven is off",
      "Run standard Bake before retrying self-clean to isolate lock demand"
    ],
    when_to_call_technician: "E-13 on every bake start with a cool oven needs door lock motor and switch assembly replacement.",
    affected_models: ["Samsung NE63A6511SS", "Samsung NE58F9710WS", "Samsung NV51K6650DS"],
    related_codes: ["e-0e", "e-0f", "e-19"], difficulty: "hard", estimated_time: "Call technician"
  },
  {
    brand: "samsung", appliance: "oven", error_code: "e-14",
    title: "Samsung Oven E-14 Error Code",
    summary: "Secondary oven temperature sensor fault",
    meta_description: "Samsung E-14 means auxiliary cavity sensor failure on dual-sensor models. Check upper probe wiring and connector.",
    meaning: "E-14 indicates a fault with the secondary oven temperature sensor—used on dual-cavity or multi-probe Samsung ranges to monitor upper cavity or broil zone separately from the main RTD. Heat distribution or broil may disable.",
    causes: [
      "Secondary probe disconnected at the sub PCB",
      "Open secondary RTD reading infinite ohms",
      "Harness routed too close to broil element insulation damage",
      "Sub board not reading the second sensor channel"
    ],
    fixes: [
      "Power off and reseat the secondary sensor connector behind the console",
      "Compare main and secondary sensor readings in service mode if your manual documents access",
      "Retry broil after reset—E-14 often appears first on broil, not bake",
      "Inspect upper cavity probe for visible damage where it enters the liner"
    ],
    when_to_call_technician: "Secondary sensor ohms out of spec with intact wiring requires probe replacement from inside the cavity.",
    affected_models: ["Samsung NV51K7770DS", "Samsung NE63T8751SS", "Samsung NE59M6850SS"],
    related_codes: ["e-17", "e-18", "e-08"], difficulty: "medium", estimated_time: "30 min"
  },
  {
    brand: "samsung", appliance: "oven", error_code: "e-15",
    title: "Samsung Oven E-15 Error Code",
    summary: "Thermal limit or high-limit sensor tripped",
    meta_description: "Samsung E-15 flags thermal limit sensor fault. Oven ran too hot—cool fully, inspect limit switch and main sensor.",
    meaning: "E-15 is a Thermal Limit or temperature limit sensor fault—the high-limit device opened or the board detected unsafe thermal rise through the limit circuit. Related to E-0A overheating but specifically the limit sensor channel.",
    causes: [
      "High-limit thermostat opened after prior overheat event",
      "Limit sensor wiring open at the connector",
      "Cooling fan failure letting control bay overheat",
      "Stuck relay combined with valid limit trip"
    ],
    fixes: [
      "Breaker off until the cavity and console are cool to the touch",
      "Reset once after cooldown—do not immediately rerun broil or self-clean",
      "Verify the rear cooling fan spins during bake on convection models",
      "Inspect for burnt wiring at the limit sensor near the broil cavity"
    ],
    when_to_call_technician: "E-15 returning on 300 °F Bake after cooldown needs limit sensor, fan, and relay board sequence testing.",
    affected_models: ["Samsung NE58F9710WS", "Samsung NE63A6511SS", "Samsung NV51K6650DS"],
    related_codes: ["e-0a", "e-16", "e-08"], difficulty: "hard", estimated_time: "Call technician"
  },
  {
    brand: "samsung", appliance: "oven", error_code: "e-16",
    title: "Samsung Oven E-16 Error Code",
    summary: "Cavity or PCB cooling fan not running",
    meta_description: "Samsung E-16 means cooling fan error. Fan protects electronics and door glass—clear blockage, replace fan if silent during bake.",
    meaning: "E-16 (C-A2 family) logs when the air intake or cavity cooling fan fails to spin when commanded—often after self-clean high ambient heat behind the console. Samsung may lock out bake until the fan circuit restores.",
    causes: [
      "Fan blade blocked by grease dust behind the control panel",
      "Failed cooling fan motor",
      "Harness melted or unplugged near the oven top vent",
      "Board not sending fan voltage after surge"
    ],
    fixes: [
      "Allow complete cooldown with breaker off before inspection",
      "Listen for a small fan when starting Bake—silence confirms E-16 cause",
      "Avoid covering rear vent slots on the backguard or warming drawer gap",
      "Vacuum vent grilles without removing panels if accessible from the rear"
    ],
    when_to_call_technician: "Silent fan with verified 120 V at the motor connector needs fan motor or PCB fan driver replacement.",
    affected_models: ["Samsung NE63T8751SS", "Samsung NV51K7770DS", "Samsung NE59M6850SS"],
    related_codes: ["e-0a", "e-15", "e-18"], difficulty: "medium", estimated_time: "30 min"
  },
  {
    brand: "samsung", appliance: "oven", error_code: "e-17",
    title: "Samsung Oven E-17 Error Code",
    summary: "Main temperature sensor open circuit",
    meta_description: "Samsung E-17 means oven RTD open—reads over 2950 Ω. Reseat connector; replace probe if infinite ohms at room temp.",
    meaning: "E-17 (E-21/E-27 family) is an open Oven Temperature Sensor error—the main RTD or its wiring reads over 2950 Ω, so the board cannot detect cavity temperature and disables heat.",
    causes: [
      "Sensor connector loose at the main PCB",
      "Broken sensor wire inside cavity insulation",
      "RTD probe internally open after years of heat cycles",
      "Previous repair left the sensor unplugged"
    ],
    fixes: [
      "Breaker off before accessing sensor wires at the rear",
      "Disconnect sensor and measure ohms—expect ~1080 Ω at room temp, not open",
      "Reseat the plug at the board if ohms were borderline",
      "Retry preheat after reseat if reading was intermittent"
    ],
    when_to_call_technician: "Open reading with intact harness requires oven temperature sensor probe replacement from the cavity wall.",
    affected_models: ["Samsung NE59M6850SS", "Samsung NE58F9710WS", "Samsung NE63A6511SS"],
    related_codes: ["e-18", "e-08", "e-14"], difficulty: "medium", estimated_time: "30 min"
  },
  {
    brand: "samsung", appliance: "oven", error_code: "e-18",
    title: "Samsung Oven E-18 Error Code",
    summary: "Main temperature sensor shorted",
    meta_description: "Samsung E-18 means oven RTD short—under 930 Ω. Unplug probe; replace sensor if reading near zero.",
    meaning: "E-18 (E-22/E-28 family) is a shorted Oven Temperature Sensor error—resistance below 930 Ω. The board sees invalid low readings and shuts heat to prevent uncontrolled temperature rise.",
    causes: [
      "Sensor wire pinched against cavity metal during rack install",
      "Shorted RTD after grease fire or broil overshoot damage",
      "Moisture bridge after steam cycle before dry-out",
      "Harness chafe at the door hinge area"
    ],
    fixes: [
      "Turn off breaker before touching the probe harness",
      "Measure ohms at the sensor plug—should be ~1080 Ω at 77 °F, not near zero",
      "Inspect wiring along the upper oven cavity for pinches",
      "Allow 24 hours dry time if E-18 triggered once after steam moisture"
    ],
    when_to_call_technician: "Short persists with sensor unplugged from the probe side—replace RTD and damaged harness section.",
    affected_models: ["Samsung NE63T8751SS", "Samsung NV51K6650DS", "Samsung NE59M6850SS"],
    related_codes: ["e-17", "e-0a", "e-08"], difficulty: "medium", estimated_time: "30 min"
  },
  {
    brand: "samsung", appliance: "oven", error_code: "e-19",
    title: "Samsung Oven E-19 Error Code",
    summary: "Communication error between oven PCBs",
    meta_description: "Samsung E-19 means main and sub PCB lost communication. Breaker off 15 minutes; check ribbon cables if E-19 persists.",
    meaning: "E-19 (E-83/C-F0 family) is a Communication Error between the main oven PCB and a sub-board—relay board, touch UI, or cooktop interface. Display may freeze or cancel cycles mid-preheat.",
    causes: [
      "Loose ribbon cable after console removal",
      "Power surge during self-clean damaging UART lines",
      "Moisture on connectors after steam clean",
      "Failed sub PCB after overheating in the control bay"
    ],
    fixes: [
      "Turn breaker OFF fifteen minutes per Samsung hard-reset guidance",
      "Avoid starting self-clean until E-19 clears on standard Bake",
      "Ensure the range cord is fully seated at the junction box—no extension cord",
      "Note whether E-19 appears only in self-clean or all modes for service"
    ],
    when_to_call_technician: "Persistent E-19 after extended power loss requires ribbon inspection and model-matched PCB replacement.",
    affected_models: ["Samsung NE58F9710WS", "Samsung NE63A6511SS", "Samsung NV51K7770DS"],
    related_codes: ["e-1a", "e-16", "e-0c"], difficulty: "hard", estimated_time: "Call technician"
  },
  {
    brand: "samsung", appliance: "oven", error_code: "e-1a",
    title: "Samsung Oven E-1A Error Code",
    summary: "Meat probe circuit open or shorted",
    meta_description: "Samsung E-1A means meat probe fault (E-2E family). Remove probe; clean jack; replace probe if E-1A shows with no probe inserted.",
    meaning: "E-1A is a Meat Probe Error—the jack reads open or shorted when probe mode is active, or debris in the socket mimics a fault with no probe inserted. Convection probe roast modes disable until the input clears.",
    causes: [
      "Probe not fully seated in the oven jack",
      "Greasy or corroded probe socket contacts",
      "Damaged probe cable from door pinch",
      "Failed probe thermistor internally open"
    ],
    fixes: [
      "Remove the probe completely and cancel probe mode on the panel",
      "Clean the jack with a dry cotton swab—no liquid cleaners in the socket",
      "Retry standard Bake without probe to confirm base oven heats",
      "Test with a known-good Samsung probe if available before ordering parts"
    ],
    when_to_call_technician: "E-1A with no probe inserted after socket cleaning needs jack wiring or sub PCB probe input repair.",
    affected_models: ["Samsung NV51K7770DS", "Samsung NE63T8751SS", "Samsung NE59M6850SS"],
    related_codes: ["e-14", "e-17", "e-08"], difficulty: "easy", estimated_time: "10 min"
  }
];
