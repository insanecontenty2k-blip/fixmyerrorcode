/** Researched unique copy — Whirlpool dishwasher codes. Sources: Whirlpool Product Help, Neli HE dishwasher guide, MyPros+ */
export default [
  {
    brand: "whirlpool", appliance: "dishwasher", error_code: "f24",
    title: "Whirlpool Dishwasher F24 Error Code",
    summary: "Overfill float switch stuck open",
    meta_description: "Whirlpool dishwasher F24 means float switch open. Level the unit, check the overfill disc, inspect for base pan water.",
    meaning: "F24 reports the overfill float switch in the front-right tub floor is stuck in the open position. The control interprets this as a flood risk and stops filling or running until the switch resets.",
    causes: [
      "Dishwasher not level, tilting the float disc into the raised position",
      "Debris under the overfill float preventing it from dropping",
      "Water in the base drip pan from a tub seal leak",
      "Failed float switch microswitch inside the housing"
    ],
    fixes: [
      "Turn off power and open the door—gently press the float disc down until you hear a click",
      "Level the dishwasher front-to-back and side-to-side with a bubble level",
      "Remove the toe kick and check the drip pan below for standing water",
      "Dry the base pan completely and locate the leak source before restarting"
    ],
    when_to_call_technician: "If the float clicks freely but F24 returns with a dry base pan, replace the float switch assembly through service.",
    affected_models: ["Whirlpool WDT730PAHZ", "Whirlpool WDT750SAKZ", "Whirlpool WDF540PADM"],
    related_codes: ["f6e4", "f8e2", "f21"],
    difficulty: "easy", estimated_time: "15 min"
  },
  {
    brand: "whirlpool", appliance: "dishwasher", error_code: "f21",
    title: "Whirlpool Dishwasher F21 Error Code",
    summary: "Heater relay not switching properly",
    meta_description: "Whirlpool dishwasher F21 is a heater relay fault. Check heating element, test relay on control board, inspect wiring.",
    meaning: "F21 on legacy Whirlpool dishwasher displays indicates the heater relay on the control board is not switching the heating element correctly. The machine may finish cycles with cold water and wet dishes.",
    causes: [
      "Welded or stuck heater relay on the electronic control board",
      "Open heating element circuit under the tub",
      "Loose spade connector at the heater terminals",
      "Scale bridging heater terminals causing abnormal current"
    ],
    fixes: [
      "Disconnect power and remove the lower access panel to reach the heater terminals",
      "Measure element resistance—most Whirlpool heaters read between 10 and 50 ohms",
      "Inspect relay area on the control board for heat discoloration through the door panel access",
      "Cycle breaker off for one minute and run a heated dry cycle to test relay operation"
    ],
    when_to_call_technician: "Control board relay replacement requires the correct part number for your series—book service if the element tests good.",
    affected_models: ["Whirlpool WDT730PAHZ", "Whirlpool WDF540PADM", "Whirlpool WDT750SAKZ"],
    related_codes: ["f7e1", "f7e2", "f8e2"],
    difficulty: "hard", estimated_time: "1 hour"
  },
  {
    brand: "whirlpool", appliance: "dishwasher", error_code: "f2e2",
    title: "Whirlpool Dishwasher F2E2 Error Code",
    summary: "User interface cannot talk to main control",
    meta_description: "Whirlpool dishwasher F2E2 is a UI-to-CCU comm error. Reseat ribbon cable at door, check P1C connector for 5VDC.",
    meaning: "F2E2 means the touchpad user interface cannot communicate with the main control board inside the door. The display may freeze, flash, or show F2E2 alternating with blank segments.",
    causes: [
      "Loose ribbon cable between the UI and the main control at P1C",
      "Corroded connector pins from steam migration through the door vent",
      "Failed user interface board sending garbled serial data",
      "Main control board UI port no longer providing 5 VDC"
    ],
    fixes: [
      "Flip the breaker off, open the door, and remove the inner door screws to access the wire harness",
      "Unplug and reseat the UI ribbon at the main control P1C connector",
      "Clean connector pins with electrical contact cleaner if green corrosion is visible",
      "Restore power for one minute off/on—if F2E2 is immediate, plan UI or main board replacement"
    ],
    when_to_call_technician: "UI and main board faults look identical on F2E2—a technician can measure 5 VDC at P1C-2 to P1C-4 before you buy parts.",
    affected_models: ["Whirlpool WDT750SAKZ", "Whirlpool WDT730PAHZ", "Whirlpool WDF540PADM"],
    related_codes: ["f1e2", "f2e4", "f6e2"],
    difficulty: "hard", estimated_time: "1 hour"
  },
  {
    brand: "whirlpool", appliance: "dishwasher", error_code: "f8e2",
    title: "Whirlpool Dishwasher F8E2 Error Code",
    summary: "Drain pump electrical circuit fault",
    meta_description: "Whirlpool dishwasher F8E2 means drain motor electrical problem. Check pump harness, clear impeller, test pump windings.",
    meaning: "F8E2 means the drain pump motor circuit has an electrical fault—open, shorted, or not responding when the control energizes drain. Water remains in the tub after the drain phase times out.",
    causes: [
      "Glass shard or food debris jamming the drain impeller",
      "Loose two-wire connector at the drain pump under the tub",
      "Failed drain pump motor winding",
      "Open wire in the drain circuit between pump and control"
    ],
    fixes: [
      "Disconnect power and remove the lower filter cover to access the drain pump",
      "Clear the impeller of debris and confirm it spins freely by hand",
      "Reseat the pump harness plug at the motor body",
      "Run a cancel/drain cycle—listen for pump hum; silence with F8E2 means replace the pump"
    ],
    when_to_call_technician: "If a new pump still triggers F8E2, the control board drain triac or harness has a board-level fault.",
    affected_models: ["Whirlpool WDT730PAHZ", "Whirlpool WDT750SAKZ", "Whirlpool WDF540PADM"],
    related_codes: ["f8e1", "f9e1", "f24"],
    difficulty: "medium", estimated_time: "45 min"
  },
  {
    brand: "whirlpool", appliance: "dishwasher", error_code: "f6e4",
    title: "Whirlpool Dishwasher F6E4 Error Code",
    summary: "Float switch open or dishwasher not level",
    meta_description: "Whirlpool dishwasher F6E4 means float switch open. Level the unit, reset the overfill disc, dry the drip pan.",
    meaning: "F6E4 is the modern F/E code for an open overfill float switch—the same condition as F24 on numeric displays. The control detected the flood sensor tripped before or during a fill step.",
    causes: [
      "Overfill float disc stuck in the up position from a tilted install",
      "Suds or water splash holding the float raised",
      "Actual overfill from a stuck-open inlet valve",
      "Water in the leak pan from a loose hose clamp"
    ],
    fixes: [
      "Press the float disc down gently at the tub front-right corner until it clicks",
      "Use a level on the door frame and adjust front legs until the tub is square",
      "Cancel the cycle and bail water if the tub overfilled—then shut off the supply faucet",
      "Remove the kick plate and towel-dry the base pan before restarting"
    ],
    when_to_call_technician: "Persistent F6E4 with a dry tub and level install points to a failed float switch or inlet valve needing replacement.",
    affected_models: ["Whirlpool WDT750SAKZ", "Whirlpool WDT730PAHZ", "Whirlpool WDF540PADM"],
    related_codes: ["f24", "f8e1", "f6e2"],
    difficulty: "easy", estimated_time: "15 min"
  },
  {
    brand: "whirlpool", appliance: "dishwasher", error_code: "f7e1",
    title: "Whirlpool Dishwasher F7E1 Error Code",
    summary: "Heating element not working",
    meta_description: "Whirlpool dishwasher F7E1 means no heat. Test element ohms, check hi-limit thermostat, verify wiring at control.",
    meaning: "F7E1 means the dishwasher ran a cycle but the control detected no heat from the wash or dry heater. Dishes come out cold and wet even though the cycle appeared to complete.",
    causes: [
      "Open heating element under the tub",
      "Blown hi-limit thermostat in series with the heater",
      "Loose heater wire at the control board relay",
      "Control board heater relay not closing during heat step"
    ],
    fixes: [
      "Disconnect power and access the heater terminals from the lower rear or toe-kick area",
      "Measure element resistance—expect roughly 10–50 ohms on most models",
      "Press the red hi-limit button if your model has a manual-reset thermostat",
      "Run a high-temp wash and feel the door mid-cycle—no warmth with F7E1 confirms heat failure"
    ],
    when_to_call_technician: "Replace the element or thermostat through service if resistance is open or the hi-limit will not reset.",
    affected_models: ["Whirlpool WDT730PAHZ", "Whirlpool WDF540PADM", "Whirlpool WDT750SAKZ"],
    related_codes: ["f7e2", "f21", "f3e2"],
    difficulty: "medium", estimated_time: "45 min"
  },
  {
    brand: "whirlpool", appliance: "dishwasher", error_code: "f9e1",
    title: "Whirlpool Dishwasher F9E1 Error Code",
    summary: "Diverter disc cannot find position",
    meta_description: "Whirlpool dishwasher F9E1 means diverter motor fault. Check disc in sump, inspect diverter wiring, run position test.",
    meaning: "F9E1 means the wash diverter motor cannot locate its home position to route water between upper and lower spray arms. The control times out waiting for the position sensor to confirm arm selection.",
    causes: [
      "Diverter disc missing or cracked at the tub bottom sump",
      "Food debris jamming the diverter motor cam",
      "Loose connector at the diverter motor under the tub",
      "Failed diverter motor or position optical sensor"
    ],
    fixes: [
      "Remove the lower filter and confirm the diverter disc is seated in the sump floor",
      "Rotate the disc by hand—it should click through upper, lower, and middle stops",
      "Clear any broken glass or bones caught in the diverter track",
      "Power-cycle one minute and start a normal wash—listen for the diverter motor stepping at fill"
    ],
    when_to_call_technician: "Diverter motor replacement requires tub access from below—schedule service if the disc is present but the motor never moves.",
    affected_models: ["Whirlpool WDT750SAKZ", "Whirlpool WDT730PAHZ", "Whirlpool WDF540PADM"],
    related_codes: ["f8e2", "f4e1", "f8e1"],
    difficulty: "hard", estimated_time: "1 hour"
  },
  {
    brand: "whirlpool", appliance: "dishwasher", error_code: "f5e1",
    title: "Whirlpool Dishwasher F5E1 Error Code",
    summary: "Door not latched within three seconds of Start",
    meta_description: "Whirlpool dishwasher F5E1 is a door switch error. Close door firmly, check latch switches, inspect linkage.",
    meaning: "F5E1 means the door was not confirmed latched within three seconds of pressing Start/Resume, or one of the two door switches failed. The dishwasher will not fill until the latch circuit reports closed.",
    causes: [
      "Door not fully closed against the tub gasket",
      "Broken latch linkage not actuating both microswitches",
      "Failed door switch in the latch assembly",
      "Loose wire at the door switch harness entering the door liner"
    ],
    fixes: [
      "Close the door with firm pressure until the latch clicks—do not slam",
      "Remove the inner door panel and operate the latch by hand—both switches should click",
      "Test door switches with a multimeter for continuity when the latch is engaged",
      "Replace the door latch assembly if switches fail to toggle with the linkage moving"
    ],
    when_to_call_technician: "Latch assembly replacement is straightforward but requires door disassembly—book service if switches test bad.",
    affected_models: ["Whirlpool WDT730PAHZ", "Whirlpool WDF540PADM", "Whirlpool WDT750SAKZ"],
    related_codes: ["f2e2", "f6e4", "f8e1"],
    difficulty: "medium", estimated_time: "45 min"
  },
  {
    brand: "whirlpool", appliance: "dishwasher", error_code: "f3e2",
    title: "Whirlpool Dishwasher F3E2 Error Code",
    summary: "OWI or thermistor temperature circuit shorted",
    meta_description: "Whirlpool dishwasher F3E2 means shorted OWI/thermistor. Check turbidity sensor wiring, test NTC resistance.",
    meaning: "F3E2 means the Optical Water Indicator or tub thermistor temperature circuit reads shorted. The control cannot measure wash water temperature or turbidity for cycle optimization.",
    causes: [
      "Moisture in the OWI sensor connector under the tub",
      "Shorted thermistor from mineral scale on the probe",
      "Pinched harness wire at the tub base shorting to ground",
      "Failed OWI sensor sending a constant low-resistance reading"
    ],
    fixes: [
      "Disconnect power and locate the OWI sensor at the sump per your tech sheet",
      "Dry the connector and inspect for green corrosion on the pins",
      "Measure thermistor resistance—it should not read near zero ohms at room temperature",
      "Cycle breaker off one minute and run a normal wash to see if F3E2 clears after drying the plug"
    ],
    when_to_call_technician: "Replace the OWI/thermistor assembly if resistance is out of spec after connector cleaning.",
    affected_models: ["Whirlpool WDT750SAKZ", "Whirlpool WDT730PAHZ", "Whirlpool WDF540PADM"],
    related_codes: ["f7e1", "f8e1", "f2e2"],
    difficulty: "medium", estimated_time: "45 min"
  },
  {
    brand: "whirlpool", appliance: "dishwasher", error_code: "f2e4",
    title: "Whirlpool Dishwasher F2E4 Error Code",
    summary: "Touch panel or UI wiring fault",
    meta_description: "Whirlpool dishwasher F2E4 means UI wiring issue. Reseat touch panel harness, inspect for damage, power-cycle 5 minutes.",
    meaning: "F2E4 indicates a fault with the user interface or its associated wiring—similar to laundry F2E4 alerts. The touch panel may not register inputs or may flash F2E4 when a cycle is selected.",
    causes: [
      "Ribbon cable partially seated at the UI board",
      "Cracked solder joint on the touch panel from door flexing",
      "Moisture behind the UI overlay from steam venting",
      "Failed UI EEPROM not matching the installed main control"
    ],
    fixes: [
      "Unplug or flip the breaker for five minutes to reset the UI processor",
      "Open the door liner and reseat the UI ribbon cable at both ends",
      "Inspect the ribbon for crease damage along the door hinge path",
      "Press Power, select a cycle, and hold Start—if F2E4 returns instantly, replace the UI board"
    ],
    when_to_call_technician: "UI board replacement must match the main control revision—verify part numbers before ordering.",
    affected_models: ["Whirlpool WDT730PAHZ", "Whirlpool WDT750SAKZ", "Whirlpool WDF540PADM"],
    related_codes: ["f2e2", "f1e2", "f6e2"],
    difficulty: "hard", estimated_time: "1 hour"
  },
  {
    brand: "whirlpool", appliance: "dishwasher", error_code: "f1e2",
    title: "Whirlpool Dishwasher F1E2 Error Code",
    summary: "Main control board memory corruption",
    meta_description: "Whirlpool dishwasher F1E2 means CCU memory fault. Power-cycle one minute, replace main control if code persists.",
    meaning: "F1E2 means the main control board detected corrupted memory or a failed self-check on its EEPROM. The dishwasher may power on but refuse to start cycles or may flash F1E2 immediately.",
    causes: [
      "Power surge corrupting control board memory",
      "Failed EEPROM chip on the main control",
      "Moisture drip on the control board from a tub vent leak",
      "Incorrect control board installed for the model series"
    ],
    fixes: [
      "Disconnect power for one full minute at the breaker, then restore",
      "Check for water stains on the control board inside the door after removing the panel",
      "Verify the model tag and compare the board part number to the tech sheet",
      "If F1E2 appears at power-up every time, replace the main electronic control board"
    ],
    when_to_call_technician: "Board replacement should use the exact revision listed on your tech sheet—have a technician confirm before purchase.",
    affected_models: ["Whirlpool WDT750SAKZ", "Whirlpool WDF540PADM", "Whirlpool WDT730PAHZ"],
    related_codes: ["f2e2", "f2e4", "f6e2"],
    difficulty: "hard", estimated_time: "Call technician"
  },
  {
    brand: "whirlpool", appliance: "dishwasher", error_code: "f8e1",
    title: "Whirlpool Dishwasher F8E1 Error Code",
    summary: "Slow drain or inadequate water level",
    meta_description: "Whirlpool dishwasher F8E1 means slow drain or low water. Clear filter, check drain hose, verify garbage disposal knockout.",
    meaning: "F8E1 means the dishwasher did not reach the expected water level or could not drain within the allotted time. The tub may show a shallow pool at the bottom when the code appears.",
    causes: [
      "Clogged drain filter and sump trapping water",
      "Drain hose kinked where it connects to the garbage disposal",
      "Garbage disposal knockout plug still blocking the dishwasher branch",
      "Partially blocked drain pump slowing emptying"
    ],
    fixes: [
      "Remove and rinse the lower filter assembly under running water",
      "Confirm the drain hose air-gap or high loop is installed per the install guide",
      "If connected to a disposal, verify the knockout plug was removed during install",
      "Run Cancel/Drain and listen—weak pump flow means clear the impeller or replace the pump"
    ],
    when_to_call_technician: "Schedule service if the pump runs strong but water still pools and F8E1 returns every drain step.",
    affected_models: ["Whirlpool WDT730PAHZ", "Whirlpool WDT750SAKZ", "Whirlpool WDF540PADM"],
    related_codes: ["f8e2", "f9e1", "f6e4"],
    difficulty: "easy", estimated_time: "20 min"
  },
  {
    brand: "whirlpool", appliance: "dishwasher", error_code: "f6e2",
    title: "Whirlpool Dishwasher F6E2 Error Code",
    summary: "Water inlet valve electrical fault",
    meta_description: "Whirlpool dishwasher F6E2 means fill valve electrical problem. Check supply, test valve coils, inspect wiring.",
    meaning: "F6E2 means the water inlet fill valve circuit has an electrical fault—the valve did not open when commanded or the control cannot verify valve current. The tub stays dry through the fill window.",
    causes: [
      "House water supply turned off or kinked inlet hose",
      "Clogged inlet screen at the valve reducing flow to a trickle",
      "Failed inlet valve solenoid coil",
      "Loose wire at the fill valve two-coil harness"
    ],
    fixes: [
      "Confirm the supply faucet under the sink is fully open",
      "Disconnect the inlet hose and check the screen inside the valve for sediment",
      "Listen at fill—you should hear the valve buzz briefly when the cycle starts",
      "Measure valve coil resistance per tech sheet—open readings mean replace the valve"
    ],
    when_to_call_technician: "If the valve buzzes but no water enters with an open supply, the valve body is stuck and needs replacement.",
    affected_models: ["Whirlpool WDF540PADM", "Whirlpool WDT730PAHZ", "Whirlpool WDT750SAKZ"],
    related_codes: ["f8e1", "f6e4", "f5e1"],
    difficulty: "medium", estimated_time: "30 min"
  },
  {
    brand: "whirlpool", appliance: "dishwasher", error_code: "f7e2",
    title: "Whirlpool Dishwasher F7E2 Error Code",
    summary: "Heating element stuck on",
    meta_description: "Whirlpool dishwasher F7E2 means heater won't shut off. Turn off breaker immediately, test relay, replace control board.",
    meaning: "F7E2 is a serious fault—the control detected the heating element staying energized when it should be off. This can overheat water and damage the tub if ignored.",
    causes: [
      "Welded heater relay on the control board stuck closed",
      "Shorted heater wire touching the tub chassis",
      "Failed triac on the control continuously powering heat",
      "Hi-limit thermostat not opening to break the circuit"
    ],
    fixes: [
      "Turn off the dishwasher breaker immediately and leave it off until diagnosed",
      "Feel the tub wall after power-off—if still heating, the relay is welded closed",
      "Inspect heater wiring for bare copper touching the stainless tub",
      "Replace the control board and hi-limit thermostat after confirming the element is not shorted"
    ],
    when_to_call_technician: "F7E2 is a safety code—do not run the dishwasher until a technician verifies the heater circuit and replaces the failed board.",
    affected_models: ["Whirlpool WDT750SAKZ", "Whirlpool WDT730PAHZ", "Whirlpool WDF540PADM"],
    related_codes: ["f7e1", "f21", "f1e2"],
    difficulty: "hard", estimated_time: "Call technician"
  },
  {
    brand: "whirlpool", appliance: "dishwasher", error_code: "f4e1",
    title: "Whirlpool Dishwasher F4E1 Error Code",
    summary: "Circulation pump communication failure",
    meta_description: "Whirlpool dishwasher F4E1 means wash motor comm error. Check pump harness under tub, test motor, clear sump debris.",
    meaning: "F4E1 means the main control lost communication with the circulation (wash) pump motor. Spray arms may not spin and the control halts the cycle shortly after fill completes.",
    causes: [
      "Loose harness at the wash pump motor under the tub",
      "Glass or debris locking the wash pump impeller",
      "Failed wash pump motor winding",
      "Open wire in the motor circuit between sump and door control"
    ],
    fixes: [
      "Disconnect power and remove the lower filter to reach the wash pump area",
      "Clear debris from the sump and confirm the impeller turns by hand",
      "Reseat the wash pump connector at the motor housing",
      "Start a wash cycle—no pump hum within 30 seconds of fill end means motor or harness failure"
    ],
    when_to_call_technician: "Wash pump replacement requires tipping or accessing the dishwasher from below—use service if the impeller is clear but F4E1 persists.",
    affected_models: ["Whirlpool WDT730PAHZ", "Whirlpool WDT750SAKZ", "Whirlpool WDF540PADM"],
    related_codes: ["f9e1", "f8e2", "f6e2"],
    difficulty: "hard", estimated_time: "1 hour"
  }
];
