/** Researched unique copy — Whirlpool washing machine codes. Sources: Whirlpool Duet service docs, ApplianceAssistant, Product Help */
export default [
  {
    brand: "whirlpool", appliance: "washing-machine", error_code: "f21",
    title: "Whirlpool Washing Machine F21 Error Code",
    summary: "Drain cycle taking too long",
    meta_description: "Whirlpool washer F21 means long drain. Clean the pump filter, check the drain hose, and reduce suds from HE detergent.",
    meaning: "F21 is Whirlpool's long-drain fault on Duet and similar front-load washers. The drain pump ran longer than about eight minutes without emptying the tub. The washer pauses and locks the door until water is removed or the fault clears.",
    causes: [
      "Pump filter packed with lint, coins, or bobby pins",
      "Drain hose kinked behind the washer or pushed too deep into the standpipe",
      "Excess suds from non-HE detergent slowing pump flow",
      "Failed drain pump motor or impeller seized by debris"
    ],
    fixes: [
      "Unplug the washer for five minutes, then open the lower front access panel and drain the emergency hose into a shallow pan",
      "Twist out the pump clean-out filter, rinse debris, and reinstall firmly",
      "Straighten the drain hose and confirm water flows freely at the standpipe during a Spin/Drain test",
      "Run a Rinse & Spin cycle with half the usual HE detergent if suds were visible before the error"
    ],
    when_to_call_technician: "Schedule service if the pump hums during drain but water never moves—the impeller or pump motor likely needs replacement.",
    affected_models: ["Whirlpool WFW560CHW", "Whirlpool WFW9620HW", "Whirlpool WFW9150FW"],
    related_codes: ["f09", "f27", "f33"],
    difficulty: "easy", estimated_time: "15 min"
  },
  {
    brand: "whirlpool", appliance: "washing-machine", error_code: "f09",
    title: "Whirlpool Washing Machine F09 Error Code",
    summary: "Overflow water level detected",
    meta_description: "Whirlpool washer F09 means overflow sensed. Shut off water, check inlet valves and pressure switch, drain standing water.",
    meaning: "F09 reports an overflow condition on Whirlpool Duet front-load washers. The pressure switch sees tub water above the safe fill level. The drain pump may run continuously trying to lower the level while the cycle is halted.",
    causes: [
      "Inlet valve stuck open and filling when the washer is off",
      "Pressure switch air dome hose disconnected or cracked",
      "Drain pump unable to remove water during a fill phase",
      "Main control board relay welded on the water valve circuit"
    ],
    fixes: [
      "Turn off hot and cold supply valves behind the washer immediately",
      "Unplug the unit and confirm whether water still enters the tub with power removed",
      "Inspect the clear pressure hose from the tub dome to the control panel for kinks or loose ends",
      "With water off, restore power and run Drain/Spin only—do not start a fill cycle until F09 clears"
    ],
    when_to_call_technician: "Call a technician if the tub fills while unplugged—both inlet valves are stuck open and must be replaced before use.",
    affected_models: ["Whirlpool WFW8620HC", "Whirlpool WFW560CHW", "Whirlpool WFW9150FW"],
    related_codes: ["f21", "f27", "f20"],
    difficulty: "medium", estimated_time: "30 min"
  },
  {
    brand: "whirlpool", appliance: "washing-machine", error_code: "f08",
    title: "Whirlpool Washing Machine F08 Error Code",
    summary: "Wash water not heating properly",
    meta_description: "Whirlpool washer F08 is a heater fault. Check element wiring, test heater resistance, verify incoming hot water supply.",
    meaning: "F08 means the washer could not raise water temperature as expected—on Duet models the tub must pass 86°F within the first 40 minutes of a heated cycle. The heater circuit or element is not delivering heat the control board can verify.",
    causes: [
      "Open-circuit heating element inside the stainless tub",
      "Loose wire at the heater terminal block behind the rear panel",
      "No hot water supply to the hot inlet valve",
      "Heater relay on the main control board not energizing"
    ],
    fixes: [
      "Confirm the home hot water faucet is on and delivers warm water at the inlet hoses",
      "Unplug the washer and access the rear panel to inspect heater wire connections",
      "Measure heater resistance with a multimeter—it should not read open/infinite",
      "Run a Sanitize or Heavy Duty cycle and listen for the heater engaging after fill completes"
    ],
    when_to_call_technician: "Replace the tub heater or control board through service if F08 returns after confirming good wiring and hot water supply.",
    affected_models: ["Whirlpool WFW6620HC", "Whirlpool WFW560CHW", "Whirlpool WFW9620HW"],
    related_codes: ["f23", "f24", "f20"],
    difficulty: "hard", estimated_time: "1 hour"
  },
  {
    brand: "whirlpool", appliance: "washing-machine", error_code: "f22",
    title: "Whirlpool Washing Machine F22 Error Code",
    summary: "Door lock failed after six attempts",
    meta_description: "Whirlpool washer F22 is a door lock error. Check door tab alignment, clear gasket obstructions, test the lock assembly.",
    meaning: "F22 appears when the door lock motor cannot achieve a locked position after six tries. Whirlpool front-loaders will not fill or spin until the latch confirms closure. You may hear repeated lock attempts before the code displays.",
    causes: [
      "Broken door tab that inserts into the lock hole",
      "Clothing trapped in the door gasket fold preventing full closure",
      "Misaligned strike plate on the cabinet frame",
      "Failed door lock motor or wiring at the DLS harness"
    ],
    fixes: [
      "Remove fabric from the gasket fold and press the door until a single lock click is heard",
      "Inspect the plastic tab on the door edge for cracks and replace the door if broken",
      "Power-cycle by unplugging for two minutes, then close the door firmly and restart",
      "Listen at the lock during start—a buzzing with no click points to a failed latch motor"
    ],
    when_to_call_technician: "Replace the door lock assembly if the door physically closes but F22 appears every cycle.",
    affected_models: ["Whirlpool WFW560CHW", "Whirlpool WFW8620HC", "Whirlpool WFW9150FW"],
    related_codes: ["f26", "f29", "f20"],
    difficulty: "medium", estimated_time: "30 min"
  },
  {
    brand: "whirlpool", appliance: "washing-machine", error_code: "f20",
    title: "Whirlpool Washing Machine F20 Error Code",
    summary: "No water detected during fill",
    meta_description: "Whirlpool washer F20 or FH means no fill detected. Open both supply valves, clear inlet screens, straighten hoses.",
    meaning: "F20 (also shown as FH on some displays) means the pressure sensor detected no water in the tub within about 30 seconds of the inlet valves opening. Both hot and cold supplies must be connected—single-hose setups trigger this fault on Duet washers.",
    causes: [
      "One or both supply faucets turned off behind the washer",
      "Inlet hose screens clogged with sediment at the valve connections",
      "Kinked inlet hoses restricting flow below 10 psi",
      "Flood-preventing supply hoses tripping their internal shutoff from high flow"
    ],
    fixes: [
      "Verify both hot and cold faucets are fully open and water reaches the inlet hoses",
      "Disconnect hoses at the washer, rinse the metal screens inside each valve, and reconnect",
      "Straighten inlet hoses and remove any kinks against the wall",
      "Pause/Cancel twice to clear the display, then restart the cycle with both valves confirmed on"
    ],
    when_to_call_technician: "If water flows strongly at the disconnected hoses but F20 persists, the inlet valve solenoids or pressure switch likely need service.",
    affected_models: ["Whirlpool WFW560CHW", "Whirlpool WFW6620HC", "Whirlpool WFW9620HW"],
    related_codes: ["f09", "f27", "f08"],
    difficulty: "easy", estimated_time: "15 min"
  },
  {
    brand: "whirlpool", appliance: "washing-machine", error_code: "f23",
    title: "Whirlpool Washing Machine F23 Error Code",
    summary: "Heater not warming water in time",
    meta_description: "Whirlpool washer F23 is a wash heater error. Test element resistance, check wiring at the tub heater, confirm hot supply.",
    meaning: "F23 is a wash-heater fault distinct from F08 on some model years. The control timed out waiting for the in-tub heater to bring water to the programmed temperature during the initial wash phase.",
    causes: [
      "Burned-out tub heating element",
      "Corroded spade connectors at the heater terminals",
      "Tripped house breaker on the dedicated washer circuit during heat",
      "Main control board heater relay not closing"
    ],
    fixes: [
      "Unplug the washer and pull the rear access panel to reach the heater wire harness",
      "Reseat both heater connectors and look for heat discoloration at the terminals",
      "Measure element resistance—an open reading confirms a failed heater",
      "Run a warm or sanitize cycle and monitor whether the glass door feels warmer during wash"
    ],
    when_to_call_technician: "Heater replacement requires tub access and electrical testing—book service if resistance is open or F23 repeats on a warm cycle.",
    affected_models: ["Whirlpool WFW9150FW", "Whirlpool WFW8620HC", "Whirlpool WFW560CHW"],
    related_codes: ["f08", "f24", "f20"],
    difficulty: "hard", estimated_time: "1 hour"
  },
  {
    brand: "whirlpool", appliance: "washing-machine", error_code: "f24",
    title: "Whirlpool Washing Machine F24 Error Code",
    summary: "Tub temperature sensor reading invalid",
    meta_description: "Whirlpool washer F24 is a thermistor error. Check the NTC sensor at the tub bottom, verify wire harness to the control.",
    meaning: "F24 means the tub temperature sensor (NTC thermistor) at the rear bottom of the outer tub sent an out-of-range reading. The washer cannot safely regulate wash heat or cold-water rinses without valid temperature feedback.",
    causes: [
      "Thermistor connector loose at the main control harness",
      "Damaged two-wire harness between tub and control panel",
      "Failed NTC thermistor reading open or shorted",
      "Water intrusion into the sensor connector from a tub seal leak"
    ],
    fixes: [
      "Unplug the washer and inspect the thermistor plug near the tub bottom next to the heater",
      "Check continuity of the sensor harness from tub to CCU—repair any frayed wires",
      "Measure thermistor resistance at room temperature against the tech sheet spec for your model",
      "Power-cycle for two minutes and run a cold rinse to see if F24 clears without heat demand"
    ],
    when_to_call_technician: "Replace the tub thermistor or main control if readings are out of spec after harness inspection.",
    affected_models: ["Whirlpool WFW9620HW", "Whirlpool WFW560CHW", "Whirlpool WFW6620HC"],
    related_codes: ["f23", "f08", "f25"],
    difficulty: "hard", estimated_time: "1 hour"
  },
  {
    brand: "whirlpool", appliance: "washing-machine", error_code: "f25",
    title: "Whirlpool Washing Machine F25 Error Code",
    summary: "Motor tachometer signal missing",
    meta_description: "Whirlpool washer F25 is a motor tach error. Check MS2 harness connections, test tachometer resistance near 115 ohms.",
    meaning: "F25 means the motor tachometer on the direct-drive stator is not reporting drum speed to the main control. Without tach feedback the washer cannot modulate spin acceleration and stops the cycle as a safety precaution.",
    causes: [
      "Loose connector at MS2.1 on the main control board",
      "Broken tachometer wire in the motor harness",
      "Failed tachometer coil on the motor stator",
      "Motor control unit not forwarding speed data to the CCU"
    ],
    fixes: [
      "Unplug the washer and verify the MS2 motor harness is fully seated at the control board",
      "Inspect the motor rear harness for pin damage where it enters the stator",
      "Measure tachometer resistance—Duet service docs expect roughly 115Ω",
      "Run a spin-only cycle after reset; a brief hum with no drum rotation confirms motor or tach failure"
    ],
    when_to_call_technician: "Motor or tachometer replacement requires rear-panel disassembly—schedule service if resistance is out of range.",
    affected_models: ["Whirlpool WFW9150FW", "Whirlpool WFW8620HC", "Whirlpool WFW9620HW"],
    related_codes: ["f28", "f31", "f33"],
    difficulty: "hard", estimated_time: "Call technician"
  },
  {
    brand: "whirlpool", appliance: "washing-machine", error_code: "f26",
    title: "Whirlpool Washing Machine F26 Error Code",
    summary: "Door switch not confirming open cycles",
    meta_description: "Whirlpool washer F26 is a door switch error. Verify the door was opened between loads, check switch and lock wiring.",
    meaning: "F26 triggers when the control does not detect the door opening after three consecutive completed loads, or when the door switch reads open while the lock is engaged. The washer assumes the door switch circuit has failed.",
    causes: [
      "Door switch stuck in the closed position inside the lock assembly",
      "Broken actuator on the door latch not pressing the switch",
      "Loose wire at the door lock DLS connector",
      "User never opening the door between back-to-back cycles on the same day"
    ],
    fixes: [
      "Open the door fully, wait five seconds, close it firmly, and start a new cycle",
      "Inspect the door lock for foreign objects jamming the switch plunger",
      "Unplug for two minutes to reset the control memory of load count",
      "Check the door switch with a multimeter—it should toggle when the latch engages"
    ],
    when_to_call_technician: "Replace the door lock assembly if the switch fails continuity testing while the door is open and closed.",
    affected_models: ["Whirlpool WFW560CHW", "Whirlpool WFW6620HC", "Whirlpool WFW9150FW"],
    related_codes: ["f22", "f29", "f20"],
    difficulty: "medium", estimated_time: "30 min"
  },
  {
    brand: "whirlpool", appliance: "washing-machine", error_code: "f27",
    title: "Whirlpool Washing Machine F27 Error Code",
    summary: "Water level above overflow threshold",
    meta_description: "Whirlpool washer F27 means overflow detected. Shut off faucets, test inlet valves, check drain pump and pressure switch.",
    meaning: "F27 is an overflow error—the water level sensor reports the tub at or above the overfill threshold. Unlike F09 on some models, F27 specifically tracks sustained high level readings during or between cycles.",
    causes: [
      "Inlet valve leaking or slow-filling when commanded closed",
      "Pressure switch stuck reporting a low air pressure (high water) reading",
      "Drain pump not removing water during a concurrent fill command",
      "Main control board incorrectly energizing fill valves"
    ],
    fixes: [
      "Shut off both supply faucets and observe whether the tub level drops on its own",
      "If water enters with the washer unplugged, replace both inlet fill valves immediately",
      "Run a drain-only cycle to empty the tub before investigating further",
      "Inspect the pressure switch hose for water inside indicating a cracked tub air dome"
    ],
    when_to_call_technician: "Persistent overfill with good valves and pump points to a main control board or pressure switch failure.",
    affected_models: ["Whirlpool WFW8620HC", "Whirlpool WFW9620HW", "Whirlpool WFW560CHW"],
    related_codes: ["f09", "f20", "f21"],
    difficulty: "medium", estimated_time: "30 min"
  },
  {
    brand: "whirlpool", appliance: "washing-machine", error_code: "f28",
    title: "Whirlpool Washing Machine F28 Error Code",
    summary: "Main and motor control not communicating",
    meta_description: "Whirlpool washer F28 is a serial comm error between CCU and MCU. Check interconnect harness, reset both boards.",
    meaning: "F28 means the Central Control Unit lost serial communication with the Motor Control Unit. The washer cannot command drum rotation until both boards exchange data again. A two-minute power reset is the first recovery step.",
    causes: [
      "Loose ribbon or wire harness between CCU and MCU",
      "Corroded connector pins at the motor control board",
      "Failed motor control unit after overheating",
      "Failed main control board UART circuit"
    ],
    fixes: [
      "Unplug the washer for two minutes to reset both control boards",
      "Remove the top panel and reseat the CCU-to-MCU communication harness",
      "Inspect connectors for bent pins or moisture at the MCU near the motor",
      "Run a quick diagnostic spin test—F28 during motor command confirms board-level failure"
    ],
    when_to_call_technician: "CCU and MCU boards are expensive—have a technician isolate which board lost communication before ordering parts.",
    affected_models: ["Whirlpool WFW9150FW", "Whirlpool WFW8620HC", "Whirlpool WFW9620HW"],
    related_codes: ["f25", "f31", "f33"],
    difficulty: "hard", estimated_time: "Call technician"
  },
  {
    brand: "whirlpool", appliance: "washing-machine", error_code: "f29",
    title: "Whirlpool Washing Machine F29 Error Code",
    summary: "Door will not unlock after six tries",
    meta_description: "Whirlpool washer F29 is a door unlock error. Check for obstructions, inspect lock motor, verify DLS wiring.",
    meaning: "F29 means the door lock motor could not release the latch after six unlock attempts. Clothes remain trapped inside and the display stays locked until the fault is cleared or power is removed.",
    causes: [
      "Broken lock motor gear or seized latch mechanism",
      "Foreign object wedged in the door lock striker area",
      "Loose wiring at the DLS, DL, or DCS harness connections",
      "Main control board not sending unlock voltage to the lock"
    ],
    fixes: [
      "Unplug the washer and wait two minutes—many locks release when power is removed",
      "Gently pull the door while pressing Cancel to assist the lock motor",
      "Remove the top panel and inspect the lock assembly for broken plastic tabs",
      "Check for a tripped house breaker that cut power mid-cycle leaving the lock energized"
    ],
    when_to_call_technician: "Do not force the door—service can manually release the lock and replace the failed latch assembly.",
    affected_models: ["Whirlpool WFW560CHW", "Whirlpool WFW6620HC", "Whirlpool WFW9150FW"],
    related_codes: ["f22", "f26", "f29"],
    difficulty: "medium", estimated_time: "30 min"
  },
  {
    brand: "whirlpool", appliance: "washing-machine", error_code: "f30",
    title: "Whirlpool Washing Machine F30 Error Code",
    summary: "Detergent dispenser cannot reach position",
    meta_description: "Whirlpool washer F30 is a dispenser motor error. Check dispenser linkage, run C02 diagnostic, clear detergent buildup.",
    meaning: "F30 means the automatic detergent dispenser motor could not drive the diverter to the commanded position. The washer detects the cup is not aligned for prewash, main wash, or bleach dosing.",
    causes: [
      "Detergent buildup binding the dispenser slider linkage",
      "Loose wire at the dispenser motor on top of the drawer assembly",
      "Failed dispenser actuator motor",
      "Object dropped into the dispenser tray blocking movement"
    ],
    fixes: [
      "Remove the dispenser drawer and wash all cups with warm water to dissolve caked detergent",
      "Run the C02 quick diagnostic step to watch the linkage move through each position",
      "Listen for the motor humming without movement—indicates a jammed or stripped linkage",
      "Power-cycle and retry using only one dispenser compartment to isolate the stuck section"
    ],
    when_to_call_technician: "Replace the dispenser motor assembly if the linkage moves freely by hand but the motor cannot drive it.",
    affected_models: ["Whirlpool WFW9620HW", "Whirlpool WFW8620HC", "Whirlpool WFW560CHW"],
    related_codes: ["f20", "f28", "f31"],
    difficulty: "medium", estimated_time: "30 min"
  },
  {
    brand: "whirlpool", appliance: "washing-machine", error_code: "f31",
    title: "Whirlpool Washing Machine F31 Error Code",
    summary: "Motor control unit overheated",
    meta_description: "Whirlpool washer F31 means MCU heat sink trip. Let the machine cool, check drum for binding, inspect MCU ventilation.",
    meaning: "F31 appears when the Motor Control Unit heat sink exceeds its safe temperature and shuts down the drive motor. After four consecutive heat trips the code latches on the display until the MCU cools or is replaced.",
    causes: [
      "Overloaded drum binding the motor during ramp-up",
      "Failed MCU heat sink thermal interface or clogged airflow",
      "Shorted motor windings drawing excessive current",
      "Restricted rear-panel ventilation from pushed-in installation"
    ],
    fixes: [
      "Unplug the washer for 30 minutes to let the MCU heat sink cool",
      "Reduce load size and redistribute heavy items evenly before retrying",
      "Pull the washer forward to ensure at least one inch of rear clearance for airflow",
      "Rotate the drum by hand with the door open—it should turn with slight resistance only"
    ],
    when_to_call_technician: "Repeated F31 on light loads after cooling indicates a failing MCU or drive motor needing professional diagnosis.",
    affected_models: ["Whirlpool WFW9150FW", "Whirlpool WFW9620HW", "Whirlpool WFW8620HC"],
    related_codes: ["f25", "f28", "f33"],
    difficulty: "hard", estimated_time: "Call technician"
  },
  {
    brand: "whirlpool", appliance: "washing-machine", error_code: "f33",
    title: "Whirlpool Washing Machine F33 Error Code",
    summary: "Drain pump lost communication with control",
    meta_description: "Whirlpool washer F33 is a drain pump drive error. Check pump harness, clear blockages, test pump motor continuity.",
    meaning: "F33 means the Central Control Unit lost communication with the drain pump driver circuit. The washer cannot confirm pump operation during drain phases and halts with water still in the tub.",
    causes: [
      "Loose connector at the drain pump two-wire harness",
      "Clogged pump impeller stalling the motor and tripping the driver",
      "Failed drain pump motor winding",
      "Open circuit in the pump wiring between tub and CCU"
    ],
    fixes: [
      "Unplug the washer and tilt or access the bottom panel to reach the drain pump connector",
      "Reseat the pump harness and clear the impeller of coins, pins, or lint clumps",
      "Spin the impeller by hand—it should rotate freely without grinding",
      "Measure pump motor resistance per your tech sheet; an open reading means replace the pump"
    ],
    when_to_call_technician: "If the pump runs in manual diagnostic but F33 persists, the CCU pump driver or harness has a board-level fault.",
    affected_models: ["Whirlpool WFW560CHW", "Whirlpool WFW6620HC", "Whirlpool WFW9150FW"],
    related_codes: ["f21", "f28", "f31"],
    difficulty: "medium", estimated_time: "45 min"
  }
];
