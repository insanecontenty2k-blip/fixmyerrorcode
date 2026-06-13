/** Researched unique copy — Samsung dishwasher codes. Sources: Samsung US Support, Fred's Appliance Academy */
export default [
  {
    brand: "samsung", appliance: "dishwasher", error_code: "lc",
    title: "Samsung Dishwasher LC Error Code",
    summary: "Leak sensor wet in the base pan",
    meta_description: "Samsung LC (LE on some models) means moisture in the bottom tray. Dry the float sensor and find the leak before resetting.",
    meaning: "LC is Samsung's Leak Code—the styrofoam float in the base pan detected water. The inlet valve shuts immediately and the display shows LC to keep water off your floor. LE on older firmware is the same fault.",
    causes: [
      "Loose drain hose clamp at the garbage disposal",
      "Cracked water guide or upper spray arm spraying outward",
      "Over-sudding from regular dish soap instead of dishwasher detergent",
      "Worn door gasket along the bottom edge weeping during wash"
    ],
    fixes: [
      "Turn off the breaker and remove the toe-kick panel",
      "Absorb water around the leak sensor until the float drops freely",
      "Inspect the lower spray arm and door seal for cracks or food buildup",
      "Tighten the drain hose high-loop connection under the sink"
    ],
    when_to_call_technician: "LC after one dry cycle with an empty tub points to an internal hose or tub seal—requires tilt and disassembly.",
    affected_models: ["Samsung DW80R5060US", "Samsung DW80B7070US", "Samsung DW80R9950US"],
    related_codes: ["5e", "oe", "he"], difficulty: "medium", estimated_time: "30 min"
  },
  {
    brand: "samsung", appliance: "dishwasher", error_code: "5e",
    title: "Samsung Dishwasher 5E Error Code",
    summary: "Drain cycle timed out with water in tub",
    meta_description: "Samsung 5E (SE on some displays) means water did not drain. Clean the filter sump, check the drain hose loop, and listen to the pump.",
    meaning: "5E appears when the drain pump runs but the water level sensor still reads high after the allotted drain window. Samsung halts before dry and may leave standing water at the bottom of the tub.",
    causes: [
      "Cylindrical fine filter and sump clogged under the lower rack",
      "Drain hose lacking a high loop under the counter",
      "Garbage disposal knockout plug still in place on new installs",
      "Check valve stuck closed at the pump outlet"
    ],
    fixes: [
      "Remove the lower rack and twist out the filter assembly counterclockwise",
      "Rinse the mesh and clear debris from the white sump cavity",
      "Verify the drain hose routes up to the underside of the counter before descending",
      "Run Cancel/Drain and listen—humming without water movement suggests jammed impeller"
    ],
    when_to_call_technician: "Clear sump with silent pump motor requires drain pump or check valve replacement under the tub.",
    affected_models: ["Samsung DW80N3030US", "Samsung DW80R7031US", "Samsung DW80B6060US"],
    related_codes: ["lc", "oe", "se"], difficulty: "easy", estimated_time: "10 min"
  },
  {
    brand: "samsung", appliance: "dishwasher", error_code: "4e",
    title: "Samsung Dishwasher 4E Error Code",
    summary: "Water supply not reaching the tub",
    meta_description: "Samsung dishwasher 4E means fill failure. Open the supply valve, check the inlet hose, and confirm the flood-safe hose is not tripped.",
    meaning: "4E is a fill timeout—Samsung opened the inlet valve but the flow meter or level switch never confirmed enough water entered within the programmed window. The cycle stops before wash.",
    causes: [
      "Supply valve under the sink closed or partially open",
      "Kinked copper or braided inlet line in the cabinet",
      "Inlet valve screen clogged with pipe scale",
      "Flood-safe hose tripped and internally shut off flow"
    ],
    fixes: [
      "Open the hot supply valve fully and run hot at the sink first",
      "Inspect the inlet hose path for sharp bends behind the kick plate",
      "Power-cycle two minutes after confirming water at the dishwasher connection",
      "Replace flood-safe hoses with standard braided lines if the valve inside tripped"
    ],
    when_to_call_technician: "Strong flow at the inlet fitting with 4E during fill means inlet valve or flow sensor replacement.",
    affected_models: ["Samsung DW80R5060US", "Samsung DW80B7070US", "Samsung DW80R7031US"],
    related_codes: ["ie", "oe", "lc"], difficulty: "easy", estimated_time: "10 min"
  },
  {
    brand: "samsung", appliance: "dishwasher", error_code: "7e",
    title: "Samsung Dishwasher 7E Error Code",
    summary: "WaterWall reflector blocked or misinstalled",
    meta_description: "Samsung 7E on WaterWall models means the reflector cannot travel the rail. Remove packing tape, clear obstructions, and reseat the vane.",
    meaning: "7E (7C variant) flags the WaterWall reflector stuck on its shuttle—the linear wash arm that moves along the bottom rail. Samsung pauses wash when the position sensor sees no travel, common on first use if shipping tape remains.",
    causes: [
      "Blue packing tape still on the reflector rail from factory",
      "Pot handle or utensil blocking reflector travel",
      "Reflector installed backward on the gray shuttle",
      "Motor or belt driving the shuttle failed"
    ],
    fixes: [
      "Remove all dishes and check the rail for obstructions and leftover tape",
      "Lift the vane, rotate so the WaterWall logo faces forward and up, reseat on the shuttle",
      "Breaker off two minutes to clear the code after correcting position",
      "Run a quick wash empty to confirm reflector slides full length"
    ],
    when_to_call_technician: "Correct assembly with 7E after power cycle is rare—Samsung notes service is usually unnecessary unless the drive motor failed.",
    affected_models: ["Samsung DW80J7550US", "Samsung DW80H9950US", "Samsung DW80H9930US"],
    related_codes: ["5e", "pe", "lc"], difficulty: "easy", estimated_time: "10 min"
  },
  {
    brand: "samsung", appliance: "dishwasher", error_code: "he",
    title: "Samsung Dishwasher HE Error Code",
    summary: "Wash water not reaching heat target",
    meta_description: "Samsung dishwasher HE means heating fault. Run hot at the sink first; on rotary models check the flow-through heater and thermistor.",
    meaning: "HE on Samsung rotary-spray models indicates the water did not reach target temperature during wash—often the flow-through heater, thermistor, or incoming water was too cold. WaterWall models may map HE differently; check your manual.",
    causes: [
      "Cold plumbing dead-leg—first water from tap is lukewarm",
      "Scale buildup in the flow-through heater passage",
      "Open heating element or loose wire at the terminal block",
      "Failed thermistor reporting low temp to the board"
    ],
    fixes: [
      "Run hot water at the kitchen sink 30 seconds before starting Heavy cycle",
      "Use a dishwasher cleaner to descale the internal heater channel",
      "Retry with Heated Dry off to isolate wash heat from dry heat",
      "Avoid starting sanitize cycles when the water heater is set below 120 °F"
    ],
    when_to_call_technician: "HE on consecutive cycles with hot inlet water needs heater or thermistor testing under the tub.",
    affected_models: ["Samsung DW80R5060US", "Samsung DW80B6060US", "Samsung DW80N3030US"],
    related_codes: ["te", "4e", "lc"], difficulty: "medium", estimated_time: "30 min"
  },
  {
    brand: "samsung", appliance: "dishwasher", error_code: "te",
    title: "Samsung Dishwasher tE Error Code",
    summary: "Temperature sensor signal invalid",
    meta_description: "Samsung dishwasher tE (tE1 on some) flags thermistor fault. Reseat harness wires; replace sensor if readings stay out of range.",
    meaning: "tE means the wash thermistor sent resistance outside Samsung's valid band—open, shorted, or drifting. Sanitize and heavy cycles abort because the board cannot confirm safe water temperature.",
    causes: [
      "Thermistor connector loose at the sump harness",
      "Corroded pins after steam moisture wicking into the plug",
      "Probe cracked from limescale expansion",
      "Main PCB input circuit failure mimicking sensor fault"
    ],
    fixes: [
      "Breaker off two minutes, then reseat the sump wiring harness",
      "Run hot at the sink and retry a normal wash—not sanitize—for baseline test",
      "Inspect visible thermistor wiring under the toe kick for chafe marks",
      "Note if tE pairs with HE—sensor first, heater second in diagnosis order"
    ],
    when_to_call_technician: "Technicians ohm the thermistor against Samsung's temperature-resistance chart at known water temp.",
    affected_models: ["Samsung DW80R7031US", "Samsung DW80B7070US", "Samsung DW80R9950US"],
    related_codes: ["he", "ie", "ae"], difficulty: "medium", estimated_time: "30 min"
  },
  {
    brand: "samsung", appliance: "dishwasher", error_code: "ae",
    title: "Samsung Dishwasher AE Error Code",
    summary: "Communication fault on control boards",
    meta_description: "Samsung dishwasher AE means PCB communication loss. Power-cycle at the breaker; persistent AE needs harness or board service.",
    meaning: "AE indicates the main power board lost reliable communication with a sub-module—touch UI, diverter driver, or Wi-Fi board. Cycles may freeze with lights flashing and no progress.",
    causes: [
      "Loose ribbon cable after door service",
      "Moisture on connectors following LC leak event",
      "Surge damage to serial communication lines",
      "Failed touch panel PCB"
    ],
    fixes: [
      "Turn breaker off two full minutes—not just Cancel on the panel",
      "Dry the control area if AE followed an LC code",
      "Ensure the dishwasher shares no outlet with garbage disposal switches that spike",
      "Record whether AE appears at cycle start or mid-wash for service notes"
    ],
    when_to_call_technician: "AE every power-up after dry reset requires main PCB or UI board replacement with model-specific part numbers.",
    affected_models: ["Samsung DW80B7070US", "Samsung DW80R9950US", "Samsung DW80R5060US"],
    related_codes: ["ee", "be", "fe"], difficulty: "hard", estimated_time: "Call technician"
  },
  {
    brand: "samsung", appliance: "dishwasher", error_code: "be",
    title: "Samsung Dishwasher bE Error Code",
    summary: "Touch panel button sensed as stuck",
    meta_description: "Samsung dishwasher bE is a jammed key fault. Power off and press each button; replace panel if bE shows when idle.",
    meaning: "bE reports a button held continuously on the touch interface—Samsung stops all functions until the key matrix clears. Common after liquid runs down the glass during cleaning.",
    causes: [
      "Water or cleaner residue bridging touch pads",
      "Child leaning on the door during cycle",
      "Failed touch membrane shorting the Start row",
      "Control board input stuck after surge"
    ],
    fixes: [
      "Dry the panel thoroughly and leave unused ten minutes",
      "Press every button edge individually while powered off",
      "Breaker cycle two minutes before restart",
      "Avoid spray cleaners directly on controls—wipe damp cloth only"
    ],
    when_to_call_technician: "bE on a dry untouched panel needs touch control assembly replacement.",
    affected_models: ["Samsung DW80N3030US", "Samsung DW80R7031US", "Samsung DW80B6060US"],
    related_codes: ["ae", "fe", "de"], difficulty: "easy", estimated_time: "10 min"
  },
  {
    brand: "samsung", appliance: "dishwasher", error_code: "ce",
    title: "Samsung Dishwasher CE Error Code",
    summary: "Over-temperature or inlet water too hot",
    meta_description: "Samsung dishwasher CE often means incoming water exceeds safe fill temp—check hose routing. Some models use CE for cooling faults.",
    meaning: "CE on Samsung dishwashers frequently groups with 4C2—extremely hot water entering the cold inlet because supply hoses are swapped. The board aborts fill to protect seals and plastic sump components.",
    causes: [
      "Hot and cold supply lines reversed under the sink",
      "Water heater set above 140 °F feeding the dishwasher inlet",
      "Failed inlet thermistor reading falsely high",
      "Stuck fill valve letting steam backflow on rare installs"
    ],
    fixes: [
      "Confirm blue/cold hose to cold inlet and hot to hot per label on the valve",
      "Run cold at the sink—if scalding, fix plumbing before retrying dishwasher",
      "Lower water heater to 120 °F per energy guidelines",
      "Power-cycle after correcting hose routing—CE should not return"
    ],
    when_to_call_technician: "Correct plumbing with repeating CE suggests inlet thermistor or main PCB fault.",
    affected_models: ["Samsung DW80R5060US", "Samsung DW80B7070US", "Samsung DW80R7031US"],
    related_codes: ["4e", "he", "te"], difficulty: "easy", estimated_time: "10 min"
  },
  {
    brand: "samsung", appliance: "dishwasher", error_code: "de",
    title: "Samsung Dishwasher dE Error Code",
    summary: "Door not latched or switch open",
    meta_description: "Samsung dishwasher dE means door interlock open. Remove obstruction from gasket, close until click, inspect latch striker.",
    meaning: "dE halts the cycle because the door switch never confirmed closed—Samsung will not fill or energize wash motor with an open door circuit. Child lock combinations can mimic dE on some models.",
    causes: [
      "Upper rack rail stopping the door before latch engagement",
      "Utensil handle caught in the gasket",
      "Warped door latch hook or striker misalignment",
      "Failed door switch assembly"
    ],
    fixes: [
      "Push the upper rack fully in and clear the gasket fold",
      "Close the door firmly until one audible latch click",
      "Inspect the striker plate on the tub frame for looseness",
      "Power-cycle and retry—listen for fill within 30 seconds of start"
    ],
    when_to_call_technician: "Door closes flush with dE every start requires door latch switch replacement.",
    affected_models: ["Samsung DW80B6060US", "Samsung DW80R9950US", "Samsung DW80N3030US"],
    related_codes: ["lc", "be", "4e"], difficulty: "medium", estimated_time: "30 min"
  },
  {
    brand: "samsung", appliance: "dishwasher", error_code: "fe",
    title: "Samsung Dishwasher FE Error Code",
    summary: "Line frequency or power anomaly",
    meta_description: "Samsung dishwasher FE flags AC frequency fault. Plug into a dedicated circuit; avoid extension cords sharing with disposal switches.",
    meaning: "FE is a Frequency Error—the control detects mains frequency outside expected range or the sensing circuit failed. Often appears alongside voltage faults after outages or on shared kitchen circuits.",
    causes: [
      "Shared circuit with microwave or disposal causing noise",
      "Extension cord or power strip on the dishwasher feed",
      "Partial breaker trip dropping voltage briefly",
      "Failed frequency detect on main power board"
    ],
    fixes: [
      "Plug directly into a dedicated 15 A kitchen circuit",
      "Reset the breaker fully off 30 seconds then on",
      "Avoid running disposal and dishwasher start simultaneously for test",
      "Record if FE follows lightning or neighborhood outage"
    ],
    when_to_call_technician: "FE on a verified dedicated circuit needs main power board replacement.",
    affected_models: ["Samsung DW80R7031US", "Samsung DW80B7070US", "Samsung DW80R5060US"],
    related_codes: ["ae", "ee", "he"], difficulty: "medium", estimated_time: "30 min"
  },
  {
    brand: "samsung", appliance: "dishwasher", error_code: "ie",
    title: "Samsung Dishwasher IE Error Code",
    summary: "Clogged filter or water not passing screen",
    meta_description: "Samsung IE on WaterWall models means filter blockage. On rotary models IE may indicate heater fault—check your manual variant.",
    meaning: "IE (1E) on WaterWall dishwashers signals water cannot pass through the fine filter assembly—restricted flow before the wash pump. Rotary models may display IE for high-temperature heater faults instead; confirm against the sticker inside the door.",
    causes: [
      "Fine filter not locked after cleaning—gap lets debris bypass and clog",
      "Food glass or seeds packed in the mesh cylinder",
      "Water supply valve partially closed restricting fill through filter",
      "Inlet path blocked before flow reaches the tub on WaterWall designs"
    ],
    fixes: [
      "Remove and rinse the cylindrical filter under running water",
      "Twist filter clockwise until it seats with a definite stop",
      "Clear the sump area beneath the filter of gelatin or pasta starch",
      "Run hot at the sink, then start a normal wash empty to verify flow"
    ],
    when_to_call_technician: "Clean filter with IE persisting suggests inlet valve or circulation pump inlet obstruction inside the cabinet.",
    affected_models: ["Samsung DW80J7550US", "Samsung DW80H9950US", "Samsung DW80R5060US"],
    related_codes: ["4e", "5e", "he"], difficulty: "easy", estimated_time: "10 min"
  },
  {
    brand: "samsung", appliance: "dishwasher", error_code: "oe",
    title: "Samsung Dishwasher OE Error Code",
    summary: "Overfill—too much water in the tub",
    meta_description: "Samsung OE (OC, 0C) means over-level water. Shut supply, check inlet valve, float, and suds overflow.",
    meaning: "OE reports the water level above the safe threshold—often inlet valve stuck open, failed float switch, or suds mimicking high level. Samsung stops fill and may run drain to protect the kitchen floor.",
    causes: [
      "Inlet valve solenoid stuck open after power surge",
      "Float or pressure sensor hose disconnected",
      "Excess detergent creating foam that reads as high water",
      "Drain failure leaving water from prior cycle plus new fill"
    ],
    fixes: [
      "Turn off the supply valve under the sink immediately",
      "Cancel and run drain-only to lower the level",
      "Inspect the float assembly in the tub bottom for free movement",
      "Retry with half the recommended detergent on the next cycle"
    ],
    when_to_call_technician: "Tub fills with supply off—replace inlet valve before next use.",
    affected_models: ["Samsung DW80B6060US", "Samsung DW80N3030US", "Samsung DW80R7031US"],
    related_codes: ["4e", "lc", "5e"], difficulty: "medium", estimated_time: "30 min"
  },
  {
    brand: "samsung", appliance: "dishwasher", error_code: "pe",
    title: "Samsung Dishwasher PE Error Code",
    summary: "Half-load diverter or spray arm fault",
    meta_description: "Samsung PE means half-load mode failed—diverter did not move inner spray arm. Inspect diverter motor and wiring.",
    meaning: "PE is a motor Position Error in half-load mode—the diverter assembly did not switch the inner spray arm path when commanded. Full-load cycles may still work; PE often appears only when Half Load is selected.",
    causes: [
      "Diverter motor gear stripped or jammed by broken plastic tab",
      "Loose wire at the diverter actuator connector",
      "Food debris blocking diverter flap movement",
      "Failed sump motor assembly not driving diverter shaft"
    ],
    fixes: [
      "Cancel half-load and run a standard full cycle to confirm PE is mode-specific",
      "Remove lower spray arm and clear debris around the diverter port",
      "Power-cycle two minutes and avoid half-load until inspected",
      "Listen at start for diverter click—silence suggests motor failure"
    ],
    when_to_call_technician: "PE on every half-load with clear diverter path needs diverter motor or sump assembly service—requires pulling the dishwasher.",
    affected_models: ["Samsung DW80R9950US", "Samsung DW80B7070US", "Samsung DW80R5060US"],
    related_codes: ["7e", "5e", "ae"], difficulty: "hard", estimated_time: "Call technician"
  },
  {
    brand: "samsung", appliance: "dishwasher", error_code: "se",
    title: "Samsung Dishwasher SE Error Code",
    summary: "Drain error variant of 5E family",
    meta_description: "Samsung SE matches 5E drain timeout on many models. Clean filter sump, verify high loop, and test drain pump operation.",
    meaning: "SE displays the same drain fault as 5E and 5C on Samsung firmware variants—the pump ran but water level did not fall below the sensor threshold in time. Letter S versus numeral 5 is display formatting only on many units.",
    causes: [
      "Identical root causes to 5E—filter, hose, disposal plug, pump",
      "Check valve flapper stuck closed after glass chip jam",
      "Air gap overflow blocked on codes-compliant installs",
      "Weak drain pump motor capacitor on older units"
    ],
    fixes: [
      "Follow full filter and sump cleaning procedure for 5E",
      "Punch through disposal drain knockout if this is a new kitchen install",
      "Verify air gap cap is clear if plumbed through countertop air gap",
      "Run Cancel/Drain twice—second attempt sometimes clears suds lock"
    ],
    when_to_call_technician: "SE with verified clear path and audible pump requires drain pump replacement.",
    affected_models: ["Samsung DW80N3030US", "Samsung DW80R7031US", "Samsung DW80B6060US"],
    related_codes: ["5e", "lc", "oe"], difficulty: "easy", estimated_time: "10 min"
  }
];
