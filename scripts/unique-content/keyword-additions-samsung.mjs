/** Keyword-target additions — Samsung codes. Sources: Samsung US Support, Fred's Appliance Academy, Repair Aid */
export default [
  {
    brand: "samsung", appliance: "washing-machine", error_code: "nd",
    title: "Samsung Washing Machine ND Error Code",
    summary: "Water not draining from the drum",
    meta_description: "Samsung ND means no drain. Clean pump filter, check drain hose, clear standpipe—ND persists if pump motor failed.",
    meaning: "ND is Samsung's No Drain error—the drain pump ran but the water level sensor still read high after the allotted drain window. The washer stops before high-speed spin to avoid running with a full tub.",
    causes: [
      "Pump filter clogged with lint, coins, or hair at the front access panel",
      "Drain hose kinked behind the washer or pushed too deep into the standpipe",
      "Excess suds from non-HE detergent trapping water in the pump",
      "Failed drain pump motor humming without moving water"
    ],
    fixes: [
      "Open the lower front access panel, drain the emergency hose into a pan, and clean the pump filter",
      "Straighten the drain hose and keep clearance from the wall so it cannot kink",
      "Disconnect at the standpipe and confirm water flows freely during Spin Only",
      "Run Rinse & Spin with no detergent if suds were visible before ND appeared"
    ],
    when_to_call_technician: "Pump hums during drain but water never moves—the impeller or drain pump motor needs replacement.",
    affected_models: ["Samsung WF45T6000AW", "Samsung WF45R6100AW", "Samsung WA50R5400AW"],
    related_codes: ["oe", "4e", "5e"],
    difficulty: "easy", estimated_time: "10 min"
  },
  {
    brand: "samsung", appliance: "washing-machine", error_code: "5e",
    title: "Samsung Washing Machine 5E Error Code",
    summary: "Motor tachometer signal not detected",
    meta_description: "Samsung washer 5E means motor error. Reduce load, reset power—5E on light load needs hall sensor or stator service.",
    meaning: "5E on Samsung washers indicates a motor fault—the inverter did not receive valid tachometer feedback from the drum motor during agitation or spin. This differs from dishwasher 5E (drain); on washers it points to the direct-drive or belt-drive motor circuit.",
    causes: [
      "Overloaded drum binding the motor on heavy bedding",
      "Loose motor bolt on direct-drive models letting the rotor rub",
      "Failed hall sensor on the stator assembly",
      "Inverter board not driving the motor after power surge"
    ],
    fixes: [
      "Unplug fifteen minutes to reset the inverter board",
      "Remove several items and redistribute laundry evenly in the drum",
      "Rotate the drum by hand with the door open—it should move with slight resistance",
      "Retry a light load Spin Only—if 5E returns immediately, stop using the washer"
    ],
    when_to_call_technician: "5E on an empty drum after reset requires hall sensor, stator, or inverter diagnosis—rear panel service.",
    affected_models: ["Samsung WF45R6300AV", "Samsung WA52M7750AW", "Samsung WF50K7500AV"],
    related_codes: ["3c", "8c", "se"],
    difficulty: "hard", estimated_time: "Call technician"
  },
  {
    brand: "samsung", appliance: "washing-machine", error_code: "9c8",
    title: "Samsung Washing Machine 9C8 Error Code",
    summary: "AC power frequency out of tolerance",
    meta_description: "Samsung 9C8 means power frequency fault. Plug into dedicated outlet, reset breaker—no extension cords on 9C8.",
    meaning: "9C8 reports the control detected mains frequency outside Samsung's acceptable band—often below 45 Hz or above 65 Hz on the sensing circuit. Washers on extension cords, generator backup, or damaged supply legs see 9C8 at startup.",
    causes: [
      "Extension cord or power strip reducing voltage and confusing frequency sense",
      "Partially tripped double-pole breaker dropping one 120 V leg",
      "Generator or inverter power with unstable frequency",
      "Failed frequency detect circuit on the main PCB"
    ],
    fixes: [
      "Plug the washer directly into a dedicated wall outlet—remove all extension cords",
      "Reset the dryer or washer breaker fully off then on at the panel",
      "Confirm the outlet delivers stable 120 V with both legs present on 240 V split circuits",
      "Retry power-on after five minutes off—note whether 9C8 appears before pressing Start"
    ],
    when_to_call_technician: "9C8 on a direct wall outlet after breaker reset needs main control board replacement.",
    affected_models: ["Samsung WF45T6000AW", "Samsung WA54R7600AC", "Samsung WF50R8500AV"],
    related_codes: ["9c1", "9c2", "sc"],
    difficulty: "medium", estimated_time: "30 min"
  },
  {
    brand: "samsung", appliance: "washing-machine", error_code: "8c",
    title: "Samsung Washing Machine 8C Error Code",
    summary: "MEMS vibration sensor communication fault",
    meta_description: "Samsung 8C means MEMS sensor error. Check harness at tub top, reseat connector—8C every spin needs sensor board.",
    meaning: "8C flags the MEMS imbalance sensor—the accelerometer on the tub frame that monitors vibration during spin. Samsung cannot safely ramp RPM without valid MEMS data, so spin aborts and 8C displays.",
    causes: [
      "Loose MEMS sensor connector at the top rear of the tub frame",
      "Sensor wire pinched between tub and cabinet during prior service",
      "Failed MEMS module after repeated UB/DC events",
      "Main PCB not reading I2C communication from the sensor"
    ],
    fixes: [
      "Unplug and remove the top panel per model guide to access the tub frame sensor",
      "Reseat the MEMS harness plug at the sensor board on the tub",
      "Confirm transit bolts were removed—four rear bolts with plastic spacers",
      "Level the washer and retry Spin Only at 800 RPM on an empty drum"
    ],
    when_to_call_technician: "8C on empty spin after reseat and leveling needs MEMS sensor or main PCB replacement.",
    affected_models: ["Samsung WF45R6300AV", "Samsung WF45K6500AV", "Samsung WW22K6800AW"],
    related_codes: ["ub", "dc", "3c"],
    difficulty: "hard", estimated_time: "Call technician"
  },
  {
    brand: "samsung", appliance: "washing-machine", error_code: "3c",
    title: "Samsung Washing Machine 3C Error Code",
    summary: "Motor position sensor not calibrated",
    meta_description: "Samsung 3C means motor position fault. Power reset, check motor harness—3C at start needs hall sensor service.",
    meaning: "3C indicates the motor position sensor did not report expected rotor position at startup or during load sensing. Samsung's inverter needs hall sensor feedback to commutate the brushless motor—3C stops the cycle before agitation.",
    causes: [
      "Loose hall sensor harness at the stator rear",
      "Object jammed between inner drum and outer tub blocking rotation",
      "Failed hall sensor after water leak onto the motor area",
      "Inverter board not processing position pulses"
    ],
    fixes: [
      "Unplug fifteen minutes for inverter reset",
      "Rotate the drum by hand—it must spin freely without scraping",
      "Inspect the rear motor area for signs of water staining after a prior leak",
      "Retry Start on an empty drum—3C before any movement confirms sensor circuit fault"
    ],
    when_to_call_technician: "Free drum with 3C at every start requires hall sensor or stator assembly service.",
    affected_models: ["Samsung WF45T6000AW", "Samsung WF45R6100AW", "Samsung WA50R5400AW"],
    related_codes: ["5e", "8c", "se"],
    difficulty: "hard", estimated_time: "Call technician"
  },
  {
    brand: "samsung", appliance: "washing-machine", error_code: "sud",
    title: "Samsung Washing Machine SUD Error Code",
    summary: "Excess suds slowing drain and spin",
    meta_description: "Samsung SUD means too much foam detected. Use HE detergent, run rinse cycle, clean filter if suds block drain.",
    meaning: "SUD (also shown as 5Ud) means Samsung detected excessive suds during drain or spin. The washer extends drain time trying to break foam and may pause with SUD on the display until suds level drops.",
    causes: [
      "Non-HE detergent or double dose creating foam",
      "Liquid fabric softener in the wrong dispenser compartment",
      "Cold wash with powder that needs warmer water to dissolve",
      "Partial drain restriction trapping sudsy water in the tub"
    ],
    fixes: [
      "Cancel and run Spin Only with no detergent on an empty drum",
      "Switch to HE detergent at the marked lines in the dispenser drawer",
      "Add one cup of white vinegar to an empty hot rinse to cut foam",
      "Clean the pump filter if suds were visible when SUD appeared"
    ],
    when_to_call_technician: "SUD every cycle with correct HE detergent on an empty tub suggests drain pump or pressure sensor service.",
    affected_models: ["Samsung WF45R6100AW", "Samsung WA52M7750AW", "Samsung WF45T6000AW"],
    related_codes: ["nd", "oe", "4e"],
    difficulty: "easy", estimated_time: "10 min"
  },
  {
    brand: "samsung", appliance: "washing-machine", error_code: "sc",
    title: "Samsung Washing Machine SC Error Code",
    summary: "Communication lost between control boards",
    meta_description: "Samsung SC means board communication fault. Power reset five minutes, check UI harness—SC at boot needs PCB service.",
    meaning: "SC reports lost communication between the main PCB and subsystems—often the UI board, inverter, or Wi-Fi module. Buttons may freeze and SC flashes when the handshake fails at power-on or mid-cycle.",
    causes: [
      "Loose ribbon cable between UI and main board behind the console",
      "Moisture on connectors from a prior fill hose leak",
      "Power surge damaging UART communication lines",
      "Failed UI board or main PCB communication port"
    ],
    fixes: [
      "Unplug five minutes for a full board communication reset",
      "Reseat the UI-to-main harness if console access is available per model guide",
      "Confirm no active extension cord or shared circuit causing voltage drop at startup",
      "Note whether SC appears instantly at power-on or only during specific cycle steps"
    ],
    when_to_call_technician: "SC immediately after every reset with dead buttons needs UI board or main PCB replacement.",
    affected_models: ["Samsung WF50R8500AV", "Samsung WF45R6300AV", "Samsung WA54R7600AC"],
    related_codes: ["9c8", "se", "5e"],
    difficulty: "hard", estimated_time: "Call technician"
  },
  {
    brand: "samsung", appliance: "washing-machine", error_code: "ur",
    title: "Samsung Washing Machine UR Error Code",
    summary: "Unbalanced load—redistribute and retry spin",
    meta_description: "Samsung UR means unbalanced load. Spread laundry evenly, level washer, remove transit bolts if UR repeats on full loads.",
    meaning: "UR is Samsung's Unbalanced Reload code—the drum could not redistribute laundry enough to safely reach spin speed. The washer pauses and displays UR so you can open the door and rearrange items.",
    causes: [
      "Heavy items clumped on one side of the drum",
      "Single large piece such as a comforter without balancing towels",
      "Washer not level or transit bolts still installed on new delivery",
      "Worn shock absorbers allowing excessive tub sway"
    ],
    fixes: [
      "Pause, open the door, and spread clothes around the full drum circumference",
      "Add similar-weight items when washing one heavy piece alone",
      "Level the washer with a bubble level on top and lock jam nuts on the feet",
      "Confirm four rear transit bolts with spacers were removed after install"
    ],
    when_to_call_technician: "UR on every balanced full load after leveling suggests shock absorber or suspension spring replacement.",
    affected_models: ["Samsung WF45T6000AW", "Samsung WA50R5400AW", "Samsung WF45R6100AW"],
    related_codes: ["ub", "dc", "8c"],
    difficulty: "easy", estimated_time: "10 min"
  },
  {
    brand: "samsung", appliance: "washing-machine", error_code: "nf",
    title: "Samsung Washing Machine NF Error Code",
    summary: "No water detected during fill",
    meta_description: "Samsung nF means no fill. Open both supply valves, clean inlet screens, straighten hoses—same as 4E on some models.",
    meaning: "nF (also shown as 4E on newer displays) means Not Filling—the inlet valves opened but the water level sensor never saw a rise within the fill window. Samsung aborts before agitation to protect the drum from dry running.",
    causes: [
      "Hot or cold supply valves closed at the wall",
      "Kinked inlet hoses pinched against the rear panel",
      "Mesh strainers at washer connections clogged with sediment",
      "Drain hose siphoning fill water out through a deep standpipe insert"
    ],
    fixes: [
      "Turn both wall valves fully open and confirm pressure at nearby fixtures",
      "Straighten inlet hoses and maintain clearance from the rear panel",
      "Disconnect hoses at the washer, rinse internal screens, and reconnect",
      "Verify drain hose standpipe insert is 6–8 inches deep—not deep enough to siphon"
    ],
    when_to_call_technician: "Strong flow at hose ends with dry tub after fill means dual inlet valve or pressure switch replacement.",
    affected_models: ["Samsung WF45R6100AW", "Samsung WA52M7750AW", "Samsung WF45T6000AW"],
    related_codes: ["4e", "4c", "oe"],
    difficulty: "easy", estimated_time: "10 min"
  },
  {
    brand: "samsung", appliance: "washing-machine", error_code: "se",
    title: "Samsung Washing Machine SE Error Code",
    summary: "System error—motor or control fault",
    meta_description: "Samsung SE washer code means system error. Power reset; SE on start with 5E or 3C points to motor or PCB service.",
    meaning: "SE is a general System Error on Samsung washers—often paired with motor faults 5E or 3C on the same cycle. The main board logged an unspecified fault in the drive or communication subsystem and halted the cycle.",
    causes: [
      "Inverter board failure after power surge",
      "Motor hall sensor intermittent during spin ramp",
      "Main PCB self-test failure at power-on",
      "Loose motor harness connector at the rear stator"
    ],
    fixes: [
      "Unplug fifteen minutes for full inverter and main board reset",
      "Retry Spin Only on an empty drum to isolate load-related causes",
      "Note any companion codes such as 5E or 3C displayed before SE",
      "Avoid repeated start attempts if SE returns instantly—log timing for service"
    ],
    when_to_call_technician: "SE with 5E or 3C on empty drum after reset needs motor, hall sensor, or main PCB diagnosis.",
    affected_models: ["Samsung WF45R6300AV", "Samsung WF50K7500AV", "Samsung WA54R7600AC"],
    related_codes: ["5e", "3c", "sc"],
    difficulty: "hard", estimated_time: "Call technician"
  },
  {
    brand: "samsung", appliance: "dishwasher", error_code: "oc",
    title: "Samsung Dishwasher OC Error Code",
    summary: "Water level too high in the tub",
    meta_description: "Samsung dishwasher OC means overfill. Shut off supply, check inlet valve, clear suds—OC with dry tub needs float switch.",
    meaning: "OC is Over Level water—the level sensor read high when the control expected normal wash depth, or water kept entering after shutoff. Samsung may run the drain pump continuously trying to lower the level.",
    causes: [
      "Inlet valve stuck open after power glitch",
      "Excess suds from regular dish soap fooling the level sensor",
      "Stuck overfill float or leak sensor in the base pan",
      "Drain pump unable to remove water during a fill phase"
    ],
    fixes: [
      "Turn off the hot supply valve under the sink immediately",
      "Cancel the cycle and inspect for standing water or foam in the tub",
      "Use dishwasher detergent only—never hand soap or laundry detergent",
      "Power-cycle two minutes with water off, then run Cancel/Drain before restarting"
    ],
    when_to_call_technician: "OC with a dry tub after drain needs inlet valve or level sensor service under the tub.",
    affected_models: ["Samsung DW80R5060US", "Samsung DW80B7070US", "Samsung DW80R7031US"],
    related_codes: ["lc", "5e", "4e"],
    difficulty: "medium", estimated_time: "30 min"
  },
  {
    brand: "samsung", appliance: "dishwasher", error_code: "pc",
    title: "Samsung Dishwasher PC Error Code",
    summary: "Zone wash or half-load position fault",
    meta_description: "Samsung dishwasher PC means position error. Check Zone Booster rail, remove packing tape, clear obstructions on PC code.",
    meaning: "PC flags a Position Error on Samsung dishwashers with movable wash zones—Zone Booster or WaterWall reflector systems. The control commanded travel along the bottom rail but the position sensor never confirmed the expected location.",
    causes: [
      "Shipping tape still on the Zone Booster or reflector rail from factory",
      "Utensil or pot handle blocking shuttle travel along the bottom",
      "Reflector or booster vane installed incorrectly on the gray shuttle",
      "Motor or belt driving the zone shuttle failed"
    ],
    fixes: [
      "Remove the lower rack and inspect the bottom rail for blue packing tape remnants",
      "Confirm the Zone Booster or reflector moves freely by hand along the full rail",
      "Clear any fallen silverware from the rail track before starting a cycle",
      "Power-cycle one minute and run a Normal cycle—listen for shuttle movement at wash start"
    ],
    when_to_call_technician: "Free rail travel with PC every cycle needs zone motor or position sensor replacement.",
    affected_models: ["Samsung DW80R9950US", "Samsung DW80B7070US", "Samsung DW80N3030US"],
    related_codes: ["7e", "5e", "lc"],
    difficulty: "medium", estimated_time: "20 min"
  },
  {
    brand: "samsung", appliance: "dishwasher", error_code: "5c",
    title: "Samsung Dishwasher 5C Error Code",
    summary: "Drain timeout with water remaining",
    meta_description: "Samsung dishwasher 5C means drain error. Clean filter sump, verify high drain loop, check disposal knockout plug.",
    meaning: "5C is Samsung's drain fault—the pump ran but water level remained high after the drain window. Same family as 5E display variant; water stays in the tub bottom and the cycle stops before dry.",
    causes: [
      "Fine filter and sump clogged under the lower rack",
      "Drain hose missing high loop under the counter",
      "Garbage disposal knockout plug still in place on new installs",
      "Check valve at pump outlet stuck closed"
    ],
    fixes: [
      "Remove the lower rack and twist out the cylindrical filter counterclockwise",
      "Rinse the mesh and clear debris from the white sump cavity",
      "Verify drain hose routes up to the underside of the counter before descending to disposal",
      "Run Cancel/Drain and listen—humming without water movement suggests jammed impeller"
    ],
    when_to_call_technician: "Clear sump with silent pump requires drain pump or check valve replacement under the tub.",
    affected_models: ["Samsung DW80R5060US", "Samsung DW80B6060US", "Samsung DW80R7031US"],
    related_codes: ["5e", "oc", "lc"],
    difficulty: "easy", estimated_time: "10 min"
  },
  {
    brand: "samsung", appliance: "dishwasher", error_code: "3c",
    title: "Samsung Dishwasher 3C Error Code",
    summary: "Wash motor position sensor fault",
    meta_description: "Samsung dishwasher 3C means motor position error. Check wash motor harness, clear sump jams—3C at wash needs motor service.",
    meaning: "3C on Samsung dishwashers indicates the wash motor position sensor did not report expected rotor alignment—the circulation motor cannot start wash spray until the hall sensor confirms position.",
    causes: [
      "Glass or bone shard jammed in the wash motor impeller under the filter",
      "Loose hall sensor harness at the wash motor",
      "Failed wash motor after bearing seizure from hard water scale",
      "Main PCB not receiving position pulses from the motor"
    ],
    fixes: [
      "Remove power and clear the sump area under the filter for debris blocking the impeller",
      "Spin the wash motor impeller through the filter opening—it should turn freely",
      "Power-cycle two minutes and start a Normal wash—note if 3C appears before spray",
      "Avoid running with 3C repeating—motor stall can overheat the windings"
    ],
    when_to_call_technician: "Free impeller with 3C every wash start needs wash motor or hall sensor replacement.",
    affected_models: ["Samsung DW80R5060US", "Samsung DW80B7070US", "Samsung DW80N3030US"],
    related_codes: ["5e", "7e", "se"],
    difficulty: "hard", estimated_time: "Call technician"
  },
  {
    brand: "samsung", appliance: "dryer", error_code: "dc",
    title: "Samsung Dryer DC Error Code",
    summary: "Door circuit open at cycle start",
    meta_description: "Samsung dryer DC means door open. Close door firmly, check latch and door switch—DC every start needs switch replacement.",
    meaning: "DC on Samsung dryers means the door switch circuit read open when the control expected closed. Heat and drum motion are blocked until the latch confirms the door is sealed—distinct from washer DC imbalance code.",
    causes: [
      "Door not fully latched against the strike",
      "Worn door catch allowing gap at the switch plunger",
      "Failed door switch behind the front panel",
      "Broken wire in the door harness from repeated opening"
    ],
    fixes: [
      "Press the door until it clicks and retry without forcing",
      "Inspect the plastic latch hook for cracks or wear at the tip",
      "Power off two minutes, then start Air Fluff to test without heat",
      "Silence with DC on start confirms switch circuit is open"
    ],
    when_to_call_technician: "Door closes flush with DC every cycle needs door switch or latch assembly replacement.",
    affected_models: ["Samsung DVE45R6100W", "Samsung DV42H5000EW", "Samsung DVE50R5400V"],
    related_codes: ["de", "he", "te"],
    difficulty: "medium", estimated_time: "30 min"
  },
  {
    brand: "samsung", appliance: "dryer", error_code: "cl9",
    title: "Samsung Dryer CL9 Error Code",
    summary: "Exhaust vent restriction at ninety percent",
    meta_description: "Samsung dryer CL9 means 90% vent blockage. Clean lint filter, vent hose, and exterior cap—CL9 is a serious fire risk.",
    meaning: "CL9 (C9 variant) reports roughly ninety percent exhaust airflow restriction on Samsung vent-sense models. The dryer measures blower strain; at this level heat cycles shorten and CL9 warns before a full block triggers shutdown.",
    causes: [
      "Lint packed in the flexible vent hose elbow behind the dryer",
      "Exterior vent hood flap stuck closed by lint or debris",
      "Crushed foil transition duct against the wall",
      "Long duct run with multiple bends exceeding Samsung length limits"
    ],
    fixes: [
      "Clean the lint screen and vacuum the filter housing slot",
      "Disconnect the rear vent hose and vacuum both ends thoroughly",
      "Run the dryer and confirm strong airflow at the exterior wall cap",
      "Replace crushed foil hose with rigid or semi-rigid metal duct"
    ],
    when_to_call_technician: "CL9 immediately after full vent cleaning suggests blockage deep in wall ducts—professional vent service.",
    affected_models: ["Samsung DVE45R6300V", "Samsung DVE50R5400V", "Samsung DV50F9A6EVP"],
    related_codes: ["d90", "d80", "he"],
    difficulty: "easy", estimated_time: "15 min"
  },
  {
    brand: "samsung", appliance: "dryer", error_code: "h01",
    title: "Samsung Dryer H01 Error Code",
    summary: "Gas supply not detected on gas models",
    meta_description: "Samsung dryer H01 means gas supply fault. Open gas valve, check flex line, confirm other gas appliances work on H01.",
    meaning: "H01 appears on Samsung gas dryers when the control does not detect gas supply pressure or the gas valve failed to open during a heat request. Electric models never show H01—confirm your unit is gas before troubleshooting fuel.",
    causes: [
      "Gas shutoff valve behind the dryer turned perpendicular to the pipe",
      "Kinked or crushed gas flex line restricting flow",
      "Utility gas outage or depleted propane tank on LP installs",
      "Failed gas valve coils not opening after igniter glow"
    ],
    fixes: [
      "Verify the gas shutoff handle is parallel to the pipe for full open",
      "Check that other gas appliances in the home operate normally",
      "Inspect the flex line for sharp bends or damage—replace if flattened",
      "On LP systems confirm the tank valve is open and gauge shows fuel"
    ],
    when_to_call_technician: "Open gas supply with H01 during heat and no flame after igniter glow needs gas valve or pressure switch service.",
    affected_models: ["Samsung DVG45R6100W", "Samsung DV45K6200GZ", "Samsung DVG50R5400V"],
    related_codes: ["he", "hc", "te"],
    difficulty: "medium", estimated_time: "30 min"
  },
  {
    brand: "samsung", appliance: "dryer", error_code: "d90",
    title: "Samsung Dryer D90 Error Code",
    summary: "Vent airflow blocked about ninety percent",
    meta_description: "Samsung dryer D90 means severe vent restriction. Clean full vent path from dryer to outside—D90 risks overheating if ignored.",
    meaning: "D90 is Samsung's vent blockage warning at roughly ninety percent restriction. Heat may cycle off early and drying times stretch far beyond normal until airflow is restored.",
    causes: [
      "Years of lint accumulation inside wall ducting",
      "Vent cap louvers blocked by lint or storm debris",
      "Transition duct longer than recommended with sharp bends",
      "Blower housing lint cake on models rarely cleaned inside the cabinet"
    ],
    fixes: [
      "Complete lint screen and hose cleaning, then snake wall duct with a vent brush kit",
      "Remove the exterior cap and scrape lint from the last few feet of duct",
      "Run a timed high-heat cycle and watch whether D90 clears within five minutes",
      "Measure total duct length—count each 90° elbow as extra equivalent feet per Samsung guide"
    ],
    when_to_call_technician: "Weak exterior airflow after hose disconnect at the dryer proves house duct clog—professional vent cleaning.",
    affected_models: ["Samsung DVE45R6100W", "Samsung DVE50M7450P", "Samsung DV45K6200GW"],
    related_codes: ["cl9", "d80", "he"],
    difficulty: "easy", estimated_time: "15 min"
  },
  {
    brand: "samsung", appliance: "dryer", error_code: "3c",
    title: "Samsung Dryer 3C Error Code",
    summary: "Drive motor position sensor fault",
    meta_description: "Samsung dryer 3C means motor position error. Power reset, check drum turns freely—3C at start needs motor service.",
    meaning: "3C on Samsung dryers indicates the drive motor hall sensor did not report valid rotor position at startup. The drum will not turn until the inverter receives position feedback from the motor.",
    causes: [
      "Belt off the idler pulley letting the drum spin free while motor stalls",
      "Object jammed in the blower wheel preventing motor rotation",
      "Failed hall sensor on the drive motor",
      "Inverter board not processing motor position after surge"
    ],
    fixes: [
      "Unplug and try rotating the drum by hand—it should turn with belt resistance",
      "Remove the rear access panel on electric models and confirm the belt is on the pulley",
      "Power off five minutes, then start Air Fluff without heat",
      "Listen for brief motor attempt—3C with no drum movement confirms drive fault"
    ],
    when_to_call_technician: "Belt intact with 3C every start needs drive motor, hall sensor, or inverter board service.",
    affected_models: ["Samsung DVE45R6300V", "Samsung DV42H5000EW", "Samsung DVE50R5400V"],
    related_codes: ["5e", "he", "sc"],
    difficulty: "hard", estimated_time: "Call technician"
  },
];
