/** Keyword-target additions — Whirlpool codes. Sources: Whirlpool Duet service data, Product Help, ApplianceAssistant */
export default [
  {
    brand: "whirlpool", appliance: "washing-machine", error_code: "sd",
    title: "Whirlpool Washing Machine Sd Error Code",
    summary: "Excess suds detected during drain",
    meta_description: "Whirlpool Sd or 5d means suds lock. Use HE detergent, run a rinse cycle, and clean the pump filter if foam blocks drain.",
    meaning: "Sd (also shown as 5d on some displays) is Suds Detected—a suds lock fault. The washer sensed too much foam during drain and extended the pump time trying to break suds. Whirlpool pauses the cycle until suds drop or you intervene.",
    causes: [
      "Non-HE detergent or more than the recommended amount creating foam",
      "Liquid fabric softener poured into the detergent tray instead of the softener cup",
      "Cold water wash with detergent that needs warmer water to dissolve",
      "Partially blocked drain path trapping sudsy water in the tub"
    ],
    fixes: [
      "Cancel the cycle and run Rinse & Spin with no detergent on an empty drum",
      "Switch to HE detergent and use the marked lines inside the dispenser drawer",
      "Add one cup of white vinegar to an empty hot rinse to cut residual suds",
      "Clean the pump filter if foam was visible and Sd appeared near the end of drain"
    ],
    when_to_call_technician: "Sd on every cycle with correct HE detergent and an empty tub suggests drain pump or pressure sensor service—not a suds issue.",
    affected_models: ["Whirlpool WFW560CHW", "Whirlpool WFW9620HW", "Whirlpool WFW6620HC"],
    related_codes: ["f21", "f09", "f08"],
    difficulty: "easy", estimated_time: "15 min"
  },
  {
    brand: "whirlpool", appliance: "washing-machine", error_code: "f5e3",
    title: "Whirlpool Washing Machine F5E3 Error Code",
    summary: "Door failed to unlock after cycle",
    meta_description: "Whirlpool F5E3 is door unlock fault. Drain water, wait two minutes, power-cycle—replace lock if door stays latched.",
    meaning: "F5E3 means the door lock motor tried to release but the latch never reported unlocked. Whirlpool front-loaders block the door when water remains or when the lock motor fails on the release stroke.",
    causes: [
      "Water still in the tub preventing seal pressure release",
      "Door lock motor failed on unlock after years of cycles",
      "Broken latch hook keeping the lock jammed mechanically",
      "Wiring fault at the door lock harness near the hinge"
    ],
    fixes: [
      "Wait two minutes without pulling the door—allow the auto-unlock retry",
      "Drain via the lower emergency hose if water is visible through the door glass",
      "Unplug five minutes, restore power, and press Start/Pause once to trigger unlock",
      "If the door opens after drain but F5E3 returns every finish, schedule lock assembly replacement"
    ],
    when_to_call_technician: "Door physically locked with an empty drum after power reset needs door lock motor or main control board service.",
    affected_models: ["Whirlpool WFW8620HC", "Whirlpool WFW9150FW", "Whirlpool WFW560CHW"],
    related_codes: ["f22", "f5e2", "f21"],
    difficulty: "medium", estimated_time: "30 min"
  },
  {
    brand: "whirlpool", appliance: "washing-machine", error_code: "f9e1",
    title: "Whirlpool Washing Machine F9E1 Error Code",
    summary: "Drain cycle exceeded time limit",
    meta_description: "Whirlpool washer F9E1 means long drain. Clean pump filter, check drain hose routing, and reduce suds from excess detergent.",
    meaning: "F9E1 is Whirlpool's long-drain fault—the drain pump ran longer than about eight minutes without emptying the tub. The washer stops before spin and may display F9E1 alongside a flashing Start light.",
    causes: [
      "Pump filter clogged with coins, hair, or bobby pins",
      "Drain hose kinked behind the washer or inserted too deep into the standpipe",
      "Excess suds from non-HE detergent slowing water removal",
      "Failed drain pump motor humming without moving water"
    ],
    fixes: [
      "Unplug five minutes, open the lower front panel, and drain the emergency hose into a shallow pan",
      "Twist out the pump clean-out filter, rinse debris, and reinstall firmly",
      "Straighten the drain hose and confirm free flow at the standpipe during Spin",
      "Run Rinse & Spin with half the usual HE detergent if suds were visible before F9E1"
    ],
    when_to_call_technician: "Pump hums during drain but water never moves—the impeller or pump motor likely needs replacement.",
    affected_models: ["Whirlpool WFW560CHW", "Whirlpool WFW9620HW", "Whirlpool WFW6620HC"],
    related_codes: ["f21", "sd", "f09"],
    difficulty: "easy", estimated_time: "15 min"
  },
  {
    brand: "whirlpool", appliance: "washing-machine", error_code: "f8e1",
    title: "Whirlpool Washing Machine F8E1 Error Code",
    summary: "Water level stuck on fill or drain step",
    meta_description: "Whirlpool F8E1 means cycle stuck—water level not changing. Check pressure hose, drain path, and inlet valves.",
    meaning: "F8E1 reports the main control detected no water level change during a fill or drain step—the pressure switch reading stayed flat when the board expected rise or fall. Whirlpool halts the cycle to avoid flooding or dry pump run.",
    causes: [
      "Pressure switch air dome hose disconnected from the tub",
      "Drain pump unable to remove water during a drain-phase check",
      "Inlet valve stuck closed so fill never starts",
      "Pressure switch stuck in one position from suds in the air dome"
    ],
    fixes: [
      "Inspect the clear pressure hose from the tub dome to the control panel for kinks or loose ends",
      "Run Drain & Spin and listen for pump activity—water should leave the tub",
      "Confirm both supply valves are open and water enters on a short fill test",
      "Power-cycle two minutes after reseating the pressure hose and retry a Normal cycle"
    ],
    when_to_call_technician: "F8E1 with confirmed fill and drain at the hose but flat level reading needs pressure switch or main control board diagnosis.",
    affected_models: ["Whirlpool WFW8620HC", "Whirlpool WFW9150FW", "Whirlpool WFW560CHW"],
    related_codes: ["f20", "f09", "f3e1"],
    difficulty: "medium", estimated_time: "30 min"
  },
  {
    brand: "whirlpool", appliance: "washing-machine", error_code: "f5e2",
    title: "Whirlpool Washing Machine F5E2 Error Code",
    summary: "Door lock failed to engage",
    meta_description: "Whirlpool F5E2 is door lock fault on close. Clear gasket obstructions, check door tab, replace latch if F5E2 repeats.",
    meaning: "F5E2 means the door lock motor could not achieve a locked position after multiple attempts. Whirlpool will not fill or spin until the latch confirms closure—you may hear repeated lock buzzing before F5E2 displays.",
    causes: [
      "Clothing trapped in the door gasket fold preventing full closure",
      "Broken plastic tab on the door edge that inserts into the lock",
      "Misaligned strike plate on the cabinet frame",
      "Failed door lock motor or wiring at the DLS harness"
    ],
    fixes: [
      "Remove fabric from the gasket fold and press the door until a single lock click is heard",
      "Inspect the door tab for cracks—replace the door assembly if the hook is broken",
      "Power-cycle by unplugging two minutes, then close firmly and restart",
      "Listen at the lock during start—buzzing with no click points to a failed latch motor"
    ],
    when_to_call_technician: "Door closes flush but F5E2 appears every cycle—the door lock assembly needs replacement.",
    affected_models: ["Whirlpool WFW560CHW", "Whirlpool WFW8620HC", "Whirlpool WFW9620HW"],
    related_codes: ["f22", "f5e3", "f20"],
    difficulty: "medium", estimated_time: "30 min"
  },
  {
    brand: "whirlpool", appliance: "washing-machine", error_code: "f3e1",
    title: "Whirlpool Washing Machine F3E1 Error Code",
    summary: "Pressure switch out of range at idle",
    meta_description: "Whirlpool F3E1 means pressure switch fault. Check air dome hose, clear suds from the dome, test switch if tub is empty.",
    meaning: "F3E1 indicates the water level pressure switch reported an out-of-range reading when the tub should be empty—or the signal never matched expected fill steps. The control cannot safely open inlet valves without valid level feedback.",
    causes: [
      "Air dome hose disconnected, cracked, or clogged with detergent residue",
      "Pressure switch stuck closed from moisture in the hose",
      "Suds in the pressure dome fooling the switch during drain",
      "Failed pressure switch or main control board input circuit"
    ],
    fixes: [
      "Unplug and inspect the clear hose from the tub dome to the control panel—reconnect if loose",
      "Blow through the disconnected hose gently—it should be open with no back pressure when the tub is empty",
      "Run an empty Drain & Spin to clear suds before retesting F3E1",
      "Power-cycle and start a cycle with an empty drum to see if F3E1 appears before fill"
    ],
    when_to_call_technician: "Empty tub with a clear hose and persistent F3E1 at startup requires pressure switch or control board replacement.",
    affected_models: ["Whirlpool WFW6620HC", "Whirlpool WFW560CHW", "Whirlpool WFW9150FW"],
    related_codes: ["f8e1", "f09", "f20"],
    difficulty: "medium", estimated_time: "30 min"
  },
  {
    brand: "whirlpool", appliance: "washing-machine", error_code: "f7e1",
    title: "Whirlpool Washing Machine F7E1 Error Code",
    summary: "Heater did not reach target wash temperature",
    meta_description: "Whirlpool F7E1 is a heater fault. Verify hot water supply, check element wiring, test heater ohms on heated cycles.",
    meaning: "F7E1 means the washer could not raise water temperature as programmed—the tub did not pass the minimum heat threshold within the allowed window on a cycle that calls for hot wash water.",
    causes: [
      "Hot water supply valve closed or delivering only cold at the inlet hoses",
      "Open-circuit heating element inside the stainless tub",
      "Loose wire at the heater terminal block behind the rear panel",
      "Heater relay on the main control board not energizing"
    ],
    fixes: [
      "Confirm the home hot faucet is on and delivers warm water at the washer inlet hoses",
      "Unplug and inspect heater wire connections at the rear terminal block",
      "Run a Sanitize or Heavy Duty cycle and note whether water warms in the first forty minutes",
      "Measure heater resistance with a multimeter—it should not read open/infinite"
    ],
    when_to_call_technician: "Good hot supply and intact wiring with F7E1 on every heated cycle needs tub heater or control board service.",
    affected_models: ["Whirlpool WFW6620HC", "Whirlpool WFW9620HW", "Whirlpool WFW560CHW"],
    related_codes: ["f08", "f23", "f24"],
    difficulty: "hard", estimated_time: "1 hour"
  },
  {
    brand: "whirlpool", appliance: "washing-machine", error_code: "f8e6",
    title: "Whirlpool Washing Machine F8E6 Error Code",
    summary: "Water supply fault during fill attempt",
    meta_description: "Whirlpool F8E6 means water not entering properly. Open both valves, clean inlet screens, straighten hoses, check flood hoses.",
    meaning: "F8E6 is a water supply error—the control opened inlet valves but flow did not meet minimum rate or stopped unexpectedly mid-fill. Whirlpool aborts before agitation to protect the drum and heater from dry operation.",
    causes: [
      "One or both supply faucets closed behind the washer",
      "Inlet hose screens clogged with sediment at the valve connections",
      "Kinked inlet hoses restricting flow below 10 psi",
      "Flood-preventing supply hoses tripped their internal shutoff from high flow"
    ],
    fixes: [
      "Verify both hot and cold faucets are fully open and water reaches the inlet hoses",
      "Disconnect hoses at the washer, rinse the metal screens inside each valve, and reconnect",
      "Straighten inlet hoses and remove kinks against the wall",
      "Pause/Cancel twice to clear the display, then restart with both valves confirmed on"
    ],
    when_to_call_technician: "Strong flow at disconnected hoses with F8E6 during fill points to inlet valve solenoids or flow meter service.",
    affected_models: ["Whirlpool WFW8620HC", "Whirlpool WFW9150FW", "Whirlpool WFW560CHW"],
    related_codes: ["f20", "f8e1", "lf"],
    difficulty: "easy", estimated_time: "15 min"
  },
  {
    brand: "whirlpool", appliance: "washing-machine", error_code: "lf",
    title: "Whirlpool Washing Machine LF Error Code",
    summary: "Fill cycle took too long to complete",
    meta_description: "Whirlpool LF means long fill. Open supply valves, clean inlet screens, check pressure, and verify both hot and cold connected.",
    meaning: "LF is Long Fill—the washer did not reach the expected water level within the fill timeout, usually about six to eight minutes. Both hot and cold must be connected on Duet front-loaders; single-hose installs trigger LF.",
    causes: [
      "Low household water pressure during peak use elsewhere in the home",
      "One inlet valve coil failed while the other side still trickles",
      "Partially blocked inlet screen on hot or cold connection only",
      "Pressure switch slow to respond from clogged air dome hose"
    ],
    fixes: [
      "Open both supply valves fully and run water at a nearby fixture to purge air",
      "Disconnect inlet hoses and rinse screens at the washer valve bodies",
      "Avoid running dishwasher or showers on the same branch during a fill test",
      "Run a Normal cycle with an empty drum and watch fill through the door glass"
    ],
    when_to_call_technician: "Good pressure at both hose ends with LF on warm fill usually means dual inlet valve replacement.",
    affected_models: ["Whirlpool WFW560CHW", "Whirlpool WFW6620HC", "Whirlpool WFW9620HW"],
    related_codes: ["f20", "f8e6", "f3e1"],
    difficulty: "easy", estimated_time: "15 min"
  },
  {
    brand: "whirlpool", appliance: "washing-machine", error_code: "e1",
    title: "Whirlpool Washing Machine E1 Error Code",
    summary: "Main control detected internal fault",
    meta_description: "Whirlpool washer E1 is a main control error. Power-cycle five minutes; recurring E1 needs ACU or UI board diagnosis.",
    meaning: "E1 on Whirlpool washers signals a Main Control fault—the ACU logged an internal error or lost synchronization with a subsystem. The washer may stop mid-cycle and flash E1 or F1E1 depending on display firmware.",
    causes: [
      "Power surge or brief outage corrupting control memory",
      "Loose wire harness at the central control unit connector",
      "Failed motor control unit communication on models with separate MCU",
      "ACU board component failure after moisture exposure"
    ],
    fixes: [
      "Unplug the washer for five minutes or flip the breaker off and on",
      "Confirm the outlet delivers stable 120 V—avoid extension cords and shared circuits",
      "Retry a short Spin Only cycle with an empty drum after reset",
      "Note whether E1 appears at startup or only mid-cycle—timing helps service diagnosis"
    ],
    when_to_call_technician: "E1 on every power-on after reset requires main control board or MCU replacement with model-matched parts.",
    affected_models: ["Whirlpool WTW8127LW", "Whirlpool WFW560CHW", "Whirlpool WTW5057LW"],
    related_codes: ["f1e1", "f6e8", "f20"],
    difficulty: "hard", estimated_time: "Call technician"
  },
  {
    brand: "whirlpool", appliance: "washing-machine", error_code: "f5",
    title: "Whirlpool Washing Machine F5 Error Code",
    summary: "Door switch circuit open at cycle start",
    meta_description: "Whirlpool F5 means door not detected closed. Check latch, strike alignment, door switch continuity before replacing parts.",
    meaning: "F5 is a door switch fault—the control did not see the door circuit close within the startup window. On some Cabrio and VMT top-loaders F5 relates to lid lock; on front-load Duet models it maps to door latch circuits similar to F22/F5E2.",
    causes: [
      "Door or lid not fully closed against the strike",
      "Broken lid lock tab on top-load models",
      "Failed door or lid switch not clicking when latched",
      "Loose wire at the latch harness entering the door or top panel"
    ],
    fixes: [
      "Close the door or lid firmly until a single click is heard—do not slam",
      "Inspect the strike and latch tab for cracks or misalignment",
      "Power-cycle two minutes and retry Start without opening mid-cycle",
      "On top-loaders, listen for lid lock engagement before the basket tries to spin"
    ],
    when_to_call_technician: "F5 every cycle with a door that appears closed needs latch switch or lock assembly replacement.",
    affected_models: ["Whirlpool WTW8127LW", "Whirlpool WFW560CHW", "Whirlpool WTW5057LW"],
    related_codes: ["f22", "f5e2", "f5e3"],
    difficulty: "medium", estimated_time: "30 min"
  },
  {
    brand: "whirlpool", appliance: "washing-machine", error_code: "f6e8",
    title: "Whirlpool Washing Machine F6E8 Error Code",
    summary: "UI lost communication with main control",
    meta_description: "Whirlpool F6E8 means display board cannot talk to ACU. Check UI harness, reseat connectors, replace UI if F6E8 persists.",
    meaning: "F6E8 reports lost communication between the User Interface board and the Appliance Control Unit. Buttons may be dead, lights flash randomly, or the display shows F6E8 while the washer will not start.",
    causes: [
      "Loose ribbon cable between UI and main control behind the console",
      "Corroded connector pins after steam from a leaking fill hose",
      "Failed UI board after power surge",
      "Main ACU UART port failure preventing handshake"
    ],
    fixes: [
      "Unplug five minutes for a full communication reset",
      "Remove the top or rear console access per model and reseat the UI-to-ACU harness",
      "Confirm no moisture on connectors from a prior fill hose leak at the back",
      "Retry power-on—if F6E8 flashes immediately with no button response, stop cycling breakers"
    ],
    when_to_call_technician: "Reseated harness with instant F6E8 at boot needs UI board or ACU replacement—order by full model number.",
    affected_models: ["Whirlpool WFW9620HW", "Whirlpool WFW8620HC", "Whirlpool WFW6620HC"],
    related_codes: ["e1", "f1e1", "f20"],
    difficulty: "hard", estimated_time: "Call technician"
  },
  {
    brand: "whirlpool", appliance: "dishwasher", error_code: "f8e4",
    title: "Whirlpool Dishwasher F8E4 Error Code",
    summary: "Detergent dispenser flow not detected",
    meta_description: "Whirlpool dishwasher F8E4 means dispenser did not dispense. Clear clogged dispenser, check wax motor, verify detergent type.",
    meaning: "F8E4 means the control opened the detergent dispenser but did not detect the expected water flow or actuator movement through the dispenser chamber. Wash performance drops because main wash detergent never entered the tub.",
    causes: [
      "Caked detergent blocking the dispenser lid or wax motor plunger",
      "Failed wax motor or dispenser actuator not opening the door",
      "Using tablet pods that stick to a wet dispenser cup",
      "Loose wire at the dispenser harness on the door liner"
    ],
    fixes: [
      "Remove caked detergent from the dispenser cup and lid with warm water and a soft brush",
      "Run a cycle and listen for the dispenser click during the first wash fill",
      "Use powder or liquid detergent until F8E4 clears—some pods delay release",
      "Wipe the dispenser cup dry before adding detergent on the next load"
    ],
    when_to_call_technician: "Clean dispenser with no click during wash fill requires wax motor or dispenser assembly replacement on the door.",
    affected_models: ["Whirlpool WDT750SAKZ", "Whirlpool WDT730PAHZ", "Whirlpool WDF540PADM"],
    related_codes: ["fae4", "f7e1", "f9e1"],
    difficulty: "medium", estimated_time: "30 min"
  },
  {
    brand: "whirlpool", appliance: "dishwasher", error_code: "f6e1",
    title: "Whirlpool Dishwasher F6E1 Error Code",
    summary: "Vent and fan circuit electrical fault",
    meta_description: "Whirlpool dishwasher F6E1 means vent fan error. Check vent on door top, inspect fan wiring, test fan motor if F6E1 returns.",
    meaning: "F6E1 is a vent/electric fault on Whirlpool dishwashers with a drying fan in the door vent assembly—the control detected an open or shorted circuit when energizing the vent fan during the dry phase.",
    causes: [
      "Vent fan motor seized from steam mineral buildup",
      "Loose connector at the vent assembly on the inner door top",
      "Damaged vent door linkage preventing fan startup",
      "Control board relay failure on the vent fan circuit"
    ],
    fixes: [
      "Inspect the top vent grille on the door for blockage from grease or plastic film",
      "Open the inner door panel and confirm the vent fan spins freely by hand",
      "Reseat the vent fan harness plug at the door liner",
      "Run a High Temp wash and note whether F6E1 appears only at the dry end of the cycle"
    ],
    when_to_call_technician: "Fan blade free with F6E1 every dry phase needs vent fan motor or vent assembly replacement.",
    affected_models: ["Whirlpool WDT750SAKZ", "Whirlpool WDT730PAHZ", "Whirlpool WDF540PADM"],
    related_codes: ["f6e4", "f7e1", "f8e4"],
    difficulty: "medium", estimated_time: "45 min"
  },
  {
    brand: "whirlpool", appliance: "dishwasher", error_code: "e1f9",
    title: "Whirlpool Dishwasher E1F9 Error Code",
    summary: "Wash temperature sensor reading invalid",
    meta_description: "Whirlpool E1F9 means thermistor fault. Check OWI sensor harness at tub, replace sensor if E1F9 persists after reset.",
    meaning: "E1F9 reports the wash temperature sensor (thermistor in the tub or OWI assembly) sent resistance outside the expected range. The control cannot regulate heat or verify sanitizing temperature without valid readings.",
    causes: [
      "Thermistor wire broken at the tub clamp near the heating element",
      "Connector corrosion after steam exposure at the lower tub harness",
      "Shorted sensor from water in the OWI optical housing on some models",
      "Control board input circuit failure reading the thermistor"
    ],
    fixes: [
      "Disconnect power and inspect the lower tub area for loose thermistor plugs",
      "Wipe the OWI window if your model uses an optical water sensor alongside thermistor",
      "Power-cycle one minute and run a Normal wash—note if E1F9 appears before heat step",
      "Avoid running until E1F9 clears if water temperature on display reads erratic"
    ],
    when_to_call_technician: "Technicians ohm the wash thermistor at room temperature against Whirlpool spec—replace if open or out of range.",
    affected_models: ["Whirlpool WDT750SAKZ", "Whirlpool WDF540PADM", "Whirlpool WDT730PAHZ"],
    related_codes: ["e1f1", "f7e1", "f3e2"],
    difficulty: "medium", estimated_time: "45 min"
  },
  {
    brand: "whirlpool", appliance: "dishwasher", error_code: "e1f1",
    title: "Whirlpool Dishwasher E1F1 Error Code",
    summary: "Optical water indicator sensor fault",
    meta_description: "Whirlpool E1F1 means OWI sensor error. Clean OWI window in tub floor, check harness, replace OWI if E1F1 continues.",
    meaning: "E1F1 flags the Optical Water Indicator—the sensor in the tub floor that detects water presence and turbidity. Whirlpool uses OWI feedback for fill verification and soil sensing; E1F1 means the signal was missing or out of range.",
    causes: [
      "Detergent film or grease coating the OWI lens in the tub sump",
      "Loose OWI harness connector under the tub after prior service",
      "Cracked OWI housing allowing water into the sensor cavity",
      "Failed OWI sensor board after repeated high-temp wash cycles"
    ],
    fixes: [
      "Cancel the cycle and wipe the OWI window in the tub floor with a soft cloth and vinegar",
      "Remove the lower rack and inspect the round lens near the sump—no scratches or cracks",
      "Power-cycle two minutes after cleaning and run an empty rinse cycle",
      "Avoid abrasive cleaners on the OWI lens—they scratch the optical surface"
    ],
    when_to_call_technician: "Clean lens with E1F1 at every fill attempt needs OWI sensor assembly replacement under the tub.",
    affected_models: ["Whirlpool WDT750SAKZ", "Whirlpool WDT730PAHZ", "Whirlpool WDF540PADM"],
    related_codes: ["e1f9", "f8e1", "f6e4"],
    difficulty: "medium", estimated_time: "30 min"
  },
  {
    brand: "whirlpool", appliance: "dishwasher", error_code: "fae4",
    title: "Whirlpool Dishwasher FAE4 Error Code",
    summary: "Dispenser actuator position not confirmed",
    meta_description: "Whirlpool FAE4 is dispenser actuator fault. Inspect detergent cup, test wax motor, check door wiring for FAE4.",
    meaning: "FAE4 means the detergent dispenser actuator did not reach the expected position after the control sent open command—related to F8E4 but specifically on models that monitor actuator travel with a position switch.",
    causes: [
      "Wax motor plunger stuck from hardened detergent buildup",
      "Broken dispenser door spring not allowing full open travel",
      "Position switch on the dispenser not actuated when door opens",
      "Door harness wire broken at the hinge from repeated door flexing"
    ],
    fixes: [
      "Soak the dispenser cup with hot water and clear hardened detergent from the wax motor area",
      "Manually flip the dispenser lid—it should spring back and latch smoothly",
      "Run a cycle and watch the dispenser during first wash fill for full door swing",
      "Use liquid or powder detergent until FAE4 clears to rule out pod sticking"
    ],
    when_to_call_technician: "Dispenser door moves freely by hand but FAE4 every cycle needs dispenser assembly with wax motor replacement.",
    affected_models: ["Whirlpool WDT750SAKZ", "Whirlpool WDF540PADM", "Whirlpool WDT730PAHZ"],
    related_codes: ["f8e4", "f7e1", "f5e1"],
    difficulty: "medium", estimated_time: "30 min"
  },
  {
    brand: "whirlpool", appliance: "dryer", error_code: "f4e4",
    title: "Whirlpool Dryer F4E4 Error Code",
    summary: "Lint screen thermistor signal invalid",
    meta_description: "Whirlpool dryer F4E4 means lint screen thermistor fault. Clean screen housing, reseat sensor plug, replace if F4E4 returns.",
    meaning: "F4E4 reports the lint screen thermistor—mounted in the lint filter housing—sent an out-of-range temperature signal. Whirlpool uses this sensor on some ventless and console models to detect restricted airflow at the filter slot.",
    causes: [
      "Lint packed around the thermistor pocket in the filter housing",
      "Thermistor connector loose inside the top console or bulkhead",
      "Open thermistor after overheating from running without the lint screen installed",
      "Main control board input failure on the lint screen sensor circuit"
    ],
    fixes: [
      "Remove and wash the lint screen, then vacuum the housing slot where the screen seats",
      "Confirm the lint screen is fully inserted—running without it triggers false readings",
      "Unplug and reseat the thermistor harness at the filter housing if accessible per service guide",
      "Run a timed dry ten minutes and note whether F4E4 appears at startup or mid-cycle"
    ],
    when_to_call_technician: "Clean housing with F4E4 at every start needs lint screen thermistor or control board service.",
    affected_models: ["Whirlpool WED8127LW", "Whirlpool WGD8620HC", "Whirlpool WED9620HW"],
    related_codes: ["f26", "f28", "f29"],
    difficulty: "medium", estimated_time: "30 min"
  },
  {
    brand: "whirlpool", appliance: "oven", error_code: "f1",
    title: "Whirlpool Oven F1 Error Code",
    summary: "Electronic control memory or relay fault",
    meta_description: "Whirlpool oven F1 means control board fault. Power-cycle breaker five minutes—persistent F1 needs ERC replacement.",
    meaning: "F1 on Whirlpool ovens indicates an Electronic Range Control fault—bad EEPROM checksum, stuck relay, or internal board failure. The display may beep and show F1 at idle or lock out bake and broil until power is removed.",
    causes: [
      "Power surge corrupting control board memory",
      "Welded bake or broil relay on the ERC",
      "Moisture on the control board from steam or spill down the panel",
      "Age-related component failure on the oven ERC"
    ],
    fixes: [
      "Flip the oven breaker off for five minutes—not just Cancel on the panel",
      "Verify the range cord or junction box connections are tight and not overheating",
      "After restore, observe whether F1 appears before pressing any key",
      "Avoid using the oven for bake or broil until F1 is cleared or diagnosed"
    ],
    when_to_call_technician: "F1 immediately after breaker reset requires Electronic Range Control replacement—model-specific part required.",
    affected_models: ["Whirlpool WOS51ES4JS", "Whirlpool WFE515S0JS", "Whirlpool WFG505M0BS"],
    related_codes: ["f1e0", "f2", "f9e0"],
    difficulty: "hard", estimated_time: "Call technician"
  },
  {
    brand: "whirlpool", appliance: "oven", error_code: "f2",
    title: "Whirlpool Oven F2 Error Code",
    summary: "Oven cavity temperature too high",
    meta_description: "Whirlpool oven F2 means runaway heat. Turn off breaker, check stuck relay, test oven sensor—do not use oven until F2 clears.",
    meaning: "F2 means the oven temperature sensor reported cavity temperature above the safe limit—often above 620°F on electric models—or the control detected a runaway heat condition. Whirlpool locks out heat to prevent fire risk.",
    causes: [
      "Stuck closed bake or broil relay continuing heat after shutoff command",
      "Shorted oven temperature sensor wiring touching hot metal",
      "Failed ERC reading sensor voltage incorrectly",
      "Oven cooling fan not running after broil leaving residual over-temp reading"
    ],
    fixes: [
      "Turn off the oven breaker immediately and allow the cavity to cool completely",
      "Do not open the door repeatedly during cool-down—wait at least thirty minutes",
      "After cool, restore power and check whether F2 returns without starting a cycle",
      "If F2 appeared during self-clean, wait for full cool-down before any reset attempt"
    ],
    when_to_call_technician: "F2 with a cool oven after hour-long power off needs oven sensor, relay board, or ERC service before next use.",
    affected_models: ["Whirlpool WFE515S0JS", "Whirlpool WFG505M0BS", "Whirlpool WOS51ES4JS"],
    related_codes: ["f1", "f3", "f9e0"],
    difficulty: "hard", estimated_time: "Call technician"
  },
  {
    brand: "whirlpool", appliance: "oven", error_code: "f1e0",
    title: "Whirlpool Oven F1E0 Error Code",
    summary: "EEPROM error on electronic control",
    meta_description: "Whirlpool F1E0 means EEPROM fault on oven ERC. Power reset; if F1E0 returns at boot, replace electronic control board.",
    meaning: "F1E0 is the modern F/E display for EEPROM failure on the oven Electronic Range Control—the non-volatile memory that stores calibration and cycle data failed checksum at power-on.",
    causes: [
      "Power surge during storm or grid fluctuation",
      "Partially tripped breaker dropping one leg of 240 V supply",
      "Corrupted firmware after interrupted self-clean power loss",
      "Failed ERC memory chip after years of heat exposure behind the panel"
    ],
    fixes: [
      "Flip the dedicated oven breaker fully off for five minutes",
      "Confirm the range outlet delivers 240 V on both legs to the terminal block",
      "Restore power and note whether F1E0 appears before touching any pad",
      "Record the full code pair if additional digits flash after F1E0"
    ],
    when_to_call_technician: "F1E0 on every power-on after breaker reset requires ERC replacement—board is not user-serviceable.",
    affected_models: ["Whirlpool WOS51ES4JS", "Whirlpool WFE515S0JS", "Whirlpool WFG505M0BS"],
    related_codes: ["f1", "f6e1", "f9e0"],
    difficulty: "hard", estimated_time: "Call technician"
  },
  {
    brand: "whirlpool", appliance: "oven", error_code: "f9e0",
    title: "Whirlpool Oven F9E0 Error Code",
    summary: "Cooling fan not operating when required",
    meta_description: "Whirlpool oven F9E0 means cooling fan fault. Check fan behind control panel, test harness—F9E0 after broil needs fan service.",
    meaning: "F9E0 reports the oven cooling fan did not run when the control commanded it—typically after broil or self-clean when the control panel and electronics need forced air cooling. Whirlpool locks functions until the fan circuit is verified.",
    causes: [
      "Cooling fan motor seized from grease dust behind the control panel",
      "Loose fan connector at the ERC or fan motor pigtail",
      "Failed fan motor capacitor on models with separate cap",
      "ERC relay not sending voltage to the cooling fan circuit"
    ],
    fixes: [
      "Power off the breaker and allow the oven to cool if F9E0 appeared after broil",
      "Listen for cooling fan hum behind the top panel after restoring power at idle",
      "Confirm no object blocking the fan grille above the oven or in the control console",
      "Retry broil briefly—F9E0 within two minutes of broil end confirms fan circuit fault"
    ],
    when_to_call_technician: "No fan spin with voltage at the motor needs cooling fan motor or ERC relay replacement.",
    affected_models: ["Whirlpool WFE515S0JS", "Whirlpool WOS51ES4JS", "Whirlpool WFG505M0BS"],
    related_codes: ["f2", "f1e0", "f6e1"],
    difficulty: "hard", estimated_time: "Call technician"
  },
  {
    brand: "whirlpool", appliance: "oven", error_code: "f6e1",
    title: "Whirlpool Oven F6E1 Error Code",
    summary: "Door lock circuit fault during clean or bake",
    meta_description: "Whirlpool oven F6E1 means door switch error. Check door closure, latch motor, and switch harness on wall ovens.",
    meaning: "F6E1 on Whirlpool ovens indicates a door switch or latch circuit fault—the control did not see the expected door lock position during self-clean, broil vent lock, or standard bake interlock checks.",
    causes: [
      "Door not fully closed against the gasket before latch attempt",
      "Failed door latch motor on self-clean lock assembly",
      "Broken door switch actuator on the latch striker",
      "Loose wire at the door switch harness through the hinge area"
    ],
    fixes: [
      "Close the oven door firmly until the latch engages—listen for a click on lock models",
      "Cancel any active clean cycle and wait for latch release if the door is locked",
      "Inspect the latch hook and striker for bent metal preventing switch actuation",
      "Power-cycle the breaker five minutes after confirming the door opens and closes freely"
    ],
    when_to_call_technician: "Door closes properly with F6E1 every start needs door latch motor or door switch assembly replacement.",
    affected_models: ["Whirlpool WOS51ES4JS", "Whirlpool WFE515S0JS", "Whirlpool WFG505M0BS"],
    related_codes: ["f1e0", "f9e0", "f2"],
    difficulty: "medium", estimated_time: "45 min"
  },
];
