/** Researched unique copy — Samsung washing machine codes. Sources: Samsung US Support, Whitegoods Help, Repair Aid */
export default [
  {
    brand: "samsung", appliance: "washing-machine", error_code: "4e",
    title: "Samsung Washing Machine 4E Error Code",
    summary: "No water entering the tub",
    meta_description: "Samsung 4E (also nF on some models) means the washer never detected fill. Open supply valves, clean inlet screens, and verify hose routing.",
    meaning: "4E is Samsung's Not Filling error. The inlet valves energize but the water level sensor never sees a rise within the programmed fill window—often within two to four minutes depending on cycle. The machine aborts before agitation to avoid running dry.",
    causes: [
      "Hot or cold supply valves closed or only partially open",
      "Kinked inlet hoses pinched against the wall",
      "Mesh strainers at the washer connections clogged with sediment",
      "Drain hose inserted too far into standpipe causing siphon during fill"
    ],
    fixes: [
      "Turn both wall valves fully counterclockwise and confirm other fixtures have normal pressure",
      "Straighten hoses and keep 4–6 inches clearance from the rear panel",
      "Disconnect hoses at the washer, rinse the internal screens into a bucket, and reconnect",
      "Verify the drain hose standpipe insert is 6–8 inches deep—not deep enough to siphon fill water out"
    ],
    when_to_call_technician: "Strong flow at the hose ends with a dry tub after fill usually means a failed dual inlet valve or pressure switch—not a plumbing issue.",
    affected_models: ["Samsung WF45T6000AW", "Samsung WF45R6100AW", "Samsung WA50R5400AW"],
    related_codes: ["4c", "oe", "1e"], difficulty: "easy", estimated_time: "10 min"
  },
  {
    brand: "samsung", appliance: "washing-machine", error_code: "4c",
    title: "Samsung Washing Machine 4C Error Code",
    summary: "Slow or interrupted water fill",
    meta_description: "Samsung 4C means water entered too slowly or stopped mid-fill. Check pressure, inlet valve, and hot/cold hose routing.",
    meaning: "4C flags insufficient fill rate rather than a total no-fill. Samsung monitors flow after the valves open; a trickle, pressure drop, or one dead solenoid side triggers 4C even when some water is visible through the door glass.",
    causes: [
      "Household pressure below roughly 20 psi during peak use",
      "One inlet valve coil failed while the opposite temperature still fills",
      "Partially blocked screen on the hot side only",
      "Supply briefly shut off mid-cycle by another fixture"
    ],
    fixes: [
      "Run a warm fill and watch whether both hot and cold enter the drum",
      "Swap hot and cold hoses at the wall—if 4C follows one line, that valve or screen is suspect",
      "Clean both inlet filters and retest on a Cotton cycle with empty load",
      "Avoid running dishwasher or showers on the same branch during the fill test"
    ],
    when_to_call_technician: "Good pressure at both hose ends with 4C on warm fill points to the dual inlet valve assembly.",
    affected_models: ["Samsung WF45R6300AV", "Samsung WA52M7750AW", "Samsung WF50K7500AV"],
    related_codes: ["4e", "4c2", "te"], difficulty: "easy", estimated_time: "10 min"
  },
  {
    brand: "samsung", appliance: "washing-machine", error_code: "ub",
    title: "Samsung Washing Machine UB Error Code",
    summary: "Load too unbalanced for spin",
    meta_description: "Samsung UB stops spin when vibration exceeds safe limits. Redistribute laundry, level the washer, and remove transit bolts if new.",
    meaning: "UB is an Unbalanced error at high-speed spin. Samsung's MEMS vibration sensor reads drum movement; when weight sits on one side the inverter ramps down and displays UB rather than walk the cabinet across the floor.",
    causes: [
      "Heavy denim or towels clumped on one drum wall",
      "Single large item such as a comforter without balancing towels",
      "Washer not level or feet unlocked after adjustment",
      "Worn shock absorbers on front-load EcoBubble platforms"
    ],
    fixes: [
      "Pause, open the door, and spread items around the full drum circumference",
      "Add one or two similar-weight items when washing a lone heavy piece",
      "Place a bubble level on top and adjust front legs until centered, then tighten jam nuts",
      "Confirm rear transit bolts were removed after delivery—four bolts with plastic spacers"
    ],
    when_to_call_technician: "UB on every full load after leveling often requires shock absorber or suspension spring replacement inside the tub.",
    affected_models: ["Samsung WF45T6000AW", "Samsung WA54R7600AC", "Samsung WF50R8500AV"],
    related_codes: ["dc", "ue", "3e"], difficulty: "easy", estimated_time: "10 min"
  },
  {
    brand: "samsung", appliance: "washing-machine", error_code: "dc",
    title: "Samsung Washing Machine DC Error Code",
    summary: "Early imbalance before spin ramp-up",
    meta_description: "Samsung DC appears during slow redistribution spins before UB. Rearrange the load or add items to balance the drum.",
    meaning: "DC fires during Samsung's pre-spin tumble sequence—before full RPM. The washer tries several slow rotations to even out laundry; if the drum still reads off-center, DC displays and the cycle pauses.",
    causes: [
      "Small mixed load with one waterlogged item",
      "Bedding bunched into a single pocket",
      "Weak suspension letting the tub sway on spin-up",
      "Non-HE garments twisted into a rope along one side"
    ],
    fixes: [
      "Cancel spin, manually rotate items 180°, and restart Spin Only at 800 RPM",
      "Pair a single rug or mat with two towels of similar absorbency",
      "Run Drain+Spin on an empty drum to confirm DC is load-related, not mechanical",
      "Re-level and lock all four adjustable feet against the floor"
    ],
    when_to_call_technician: "DC on balanced full loads suggests worn drum spider or shock kit—internal tub service.",
    affected_models: ["Samsung WW22K6800AW", "Samsung WF45K6500AV", "Samsung WA50R5400AW"],
    related_codes: ["ub", "oe", "le"], difficulty: "easy", estimated_time: "10 min"
  },
  {
    brand: "samsung", appliance: "washing-machine", error_code: "le",
    title: "Samsung Washing Machine LE Error Code",
    summary: "Leak or moisture detected in base",
    meta_description: "Samsung LE means the leak sensor found moisture—not a motor lock. Inspect hoses, door boot, and reduce suds if foam escaped.",
    meaning: "LE (also LE1 or lE) indicates water where it should not be—typically at the base leak sensor or along the door boot channel. Samsung cuts fill and may stop the cycle to limit floor damage. This is unrelated to LG's motor LE code.",
    causes: [
      "Loose fill or drain hose clamp dripping onto the base pan",
      "Door boot tear or pinhole spraying during high spin",
      "Over-sudsing from non-HE detergent pushing foam past the seal",
      "Internal tub-to-pump hose clamp slipped after prior service"
    ],
    fixes: [
      "Unplug and inspect the floor and rear hose connections for active drips",
      "Run an empty rinse-and-spin with no detergent to clear suds if foam was visible",
      "Check the gray door gasket fold for splits along the bottom six o'clock area",
      "Tighten the drain hose screw-on holder at the rear—Samsung warns against removing this bracket"
    ],
    when_to_call_technician: "Dry exterior with LE returning on the next cycle means an internal hose or pump seal leak requiring cabinet disassembly.",
    affected_models: ["Samsung WF45R6100AW", "Samsung WA52M7750AW", "Samsung WF45T6000AW"],
    related_codes: ["oe", "4e", "1e"], difficulty: "medium", estimated_time: "30 min"
  },
  {
    brand: "samsung", appliance: "washing-machine", error_code: "oe",
    title: "Samsung Washing Machine OE Error Code",
    summary: "Overflow—tub water level too high",
    meta_description: "Samsung OE means overfill detected. Shut off water, check inlet valve, pressure hose, and excessive suds.",
    meaning: "OE (also 0E or OC on some displays) reports water above the expected level in the tub. The pressure switch or level sensor sees a high reading—often from a stuck-open inlet valve, blocked pressure dome hose, or suds fooling the sensor.",
    causes: [
      "Inlet valve solenoid stuck open after power glitch",
      "Pressure switch air tube disconnected from the tub dome",
      "Excess detergent creating foam that reads as high water",
      "Failed pressure switch reporting false high level"
    ],
    fixes: [
      "Turn off hot and cold supply valves immediately when OE appears with water near the door",
      "Unplug and inspect the clear pressure hose from the tub to the control panel for cracks or disconnects",
      "Run a Spin+Drain cycle with the water supply off to lower the level",
      "Retry with half the normal HE detergent dose on the next wash"
    ],
    when_to_call_technician: "Tub fills while unplugged confirms stuck inlet valves—do not run the washer until they are replaced.",
    affected_models: ["Samsung WF50R8500AV", "Samsung WF45K6500AV", "Samsung WA54R7600AC"],
    related_codes: ["4e", "le", "1e"], difficulty: "medium", estimated_time: "30 min"
  },
  {
    brand: "samsung", appliance: "washing-machine", error_code: "he",
    title: "Samsung Washing Machine HE Error Code",
    summary: "Water not reaching target temperature",
    meta_description: "Samsung HE heating fault—NTC thermistor or element issue. Descale in hard water areas; test sensor ohms before replacing parts.",
    meaning: "HE (with HC on related firmware) means the NTC thermistor or heating element circuit failed to bring wash water to the setpoint within the allowed time. Samsung pauses heat to protect the element and wiring.",
    causes: [
      "Failed NTC thermistor reading open or out of range (~30 kΩ at room temp)",
      "Limescale blanket on element or sensor in hard-water homes",
      "Open heating element circuit or loose terminal at the tub",
      "Control board heat relay not energizing the element"
    ],
    fixes: [
      "Run hot water at the nearest sink for 30 seconds before starting a warm cycle",
      "Run a tub clean or descaling cycle if white scale is visible on the element area",
      "Power-cycle for 60 seconds and retry Sanitize or Heavy Duty with a light load",
      "Note whether HE appears only on hot cycles—cold-only success isolates the hot inlet path"
    ],
    when_to_call_technician: "Technicians measure NTC resistance against Samsung's chart and test element continuity—board faults need live diagnosis.",
    affected_models: ["Samsung WF45T6000AW", "Samsung WF45R6300AV", "Samsung WA50R5400AW"],
    related_codes: ["te", "4c2", "ce"], difficulty: "medium", estimated_time: "30 min"
  },
  {
    brand: "samsung", appliance: "washing-machine", error_code: "3e",
    title: "Samsung Washing Machine 3E Error Code",
    summary: "Direct-drive motor or hall sensor fault",
    meta_description: "Samsung 3E is a motor drive error on Digital Inverter models—check drum rotation, hall sensor, and wiring. Some models show 3E for voltage instead.",
    meaning: "3E (also SE or EA on related displays) means the inverter did not get valid feedback from the brushless motor or hall sensor. The drum may hum briefly then stop. Check your manual—on a few Samsung models 3E indicates voltage error instead of motor fault.",
    causes: [
      "Hall sensor on the stator failed or connector loose at the rear",
      "Object wedged between drum and door boot binding rotation",
      "Quiet Drive motor cover displaced on applicable platforms",
      "Motor winding or inverter board failure after overload"
    ],
    fixes: [
      "Unplug and spin the drum by hand—it should move with slight resistance, not lock solid",
      "Remove overload—bedding plus towels often exceeds weight limits on compact models",
      "Power off 60 seconds to reset the inverter, then run Spin Only with two towels",
      "Inspect the rear motor harness plug for corrosion if 3E followed a leak code"
    ],
    when_to_call_technician: "Free drum with repeating 3E on light loads requires hall sensor or motor assembly service—rear panel access.",
    affected_models: ["Samsung WW22K6800AW", "Samsung WF45K6500AV", "Samsung WF45R6100AW"],
    related_codes: ["ub", "9c1", "ae"], difficulty: "hard", estimated_time: "Call technician"
  },
  {
    brand: "samsung", appliance: "washing-machine", error_code: "ae",
    title: "Samsung Washing Machine AE Error Code",
    summary: "Communication fault between PCBs",
    meta_description: "Samsung AE means the main board lost contact with a sub-PCB. Power-cycle 60 seconds; persistent AE needs harness or board service.",
    meaning: "AE (AC6, ACb variants) is a Communication Error between Samsung's main control and a sub-board—display, inverter, or Wi-Fi module. Cycles may freeze mid-step or refuse to start until the link restores.",
    causes: [
      "Loose ribbon cable after moving the washer",
      "Moisture on board connectors following a leak repair",
      "Power surge damaging UART lines on the main PCB",
      "Failed sub-board after lightning or brownout"
    ],
    fixes: [
      "Unplug for 60 seconds—avoid extension cords and shared circuits with microwaves",
      "Ensure the washer sits on a grounded outlet, not a surge strip rated below appliance load",
      "Note whether AE appears at power-on or randomly mid-cycle for the technician",
      "Dry the control area thoroughly if AE followed an LE or overflow event"
    ],
    when_to_call_technician: "AE every startup after reset typically requires main or sub PCB replacement with model-matched parts.",
    affected_models: ["Samsung WF50K7500AV", "Samsung WA52M7750AW", "Samsung WF45R6300AV"],
    related_codes: ["ee", "fe", "3e"], difficulty: "hard", estimated_time: "Call technician"
  },
  {
    brand: "samsung", appliance: "washing-machine", error_code: "be",
    title: "Samsung Washing Machine BE Error Code",
    summary: "Stuck button or vibration sensor fault",
    meta_description: "Samsung BE can mean a jammed touch key or MEMS vibration sensor error—check your manual. Press every button; power-cycle if BE persists.",
    meaning: "BE has two meanings on Samsung washers: a Jammed Button detected held more than ten seconds, or on other models a MEMS vibration sensor fault (same family as 8E). Your user manual identifies which applies—button BE is far more common on front-touch panels.",
    causes: [
      "Moisture or residue holding a capacitive touch key",
      "Physical object pressing the panel during vibration",
      "Failed touch membrane behind the glass",
      "MEMS sensor disconnected on models where BE means vibration fault"
    ],
    fixes: [
      "Power off and press each button edge-to-edge to release stuck contacts",
      "Dry the panel thoroughly after cleaning—no dripping spray directly on glass",
      "Unplug 60 seconds before restart",
      "If BE2 appears, confirm whether your manual lists button or sensor meaning before replacing parts"
    ],
    when_to_call_technician: "BE at idle with a dry panel indicates UI board or MEMS sensor replacement depending on model family.",
    affected_models: ["Samsung WF45T6000AW", "Samsung WA54R7600AC", "Samsung WF50R8500AV"],
    related_codes: ["ae", "8e", "fe"], difficulty: "easy", estimated_time: "10 min"
  },
  {
    brand: "samsung", appliance: "washing-machine", error_code: "ce",
    title: "Samsung Washing Machine CE Error Code",
    summary: "Cooling fault on washer-dryer combo units",
    meta_description: "Samsung CE is a cooling/over-temperature error on combo models—or hot inlet water on 4C2 family. Ventilate the cabinet and verify hose routing.",
    meaning: "CE on Samsung washer-dryer combos means the cabinet overheated and the cooling fan runs until temperature drops. On separate washers, CE groups with 4C2 when cold supply water arrives too hot because hoses are swapped red-to-blue.",
    causes: [
      "Blocked ventilation gaps around a combo unit installed in a closet",
      "Cooling fan failed on washer-dryer hybrid models",
      "Hot and cold supply hoses reversed at the wall",
      "Extended dry segment in combo mode without adequate airflow"
    ],
    fixes: [
      "Leave 2 inches side clearance and open any closet louver vents on combo installs",
      "Allow the machine to cool 30 minutes—the fan may run after CE clears",
      "Verify blue hose to cold inlet and red to hot on dual-supply models",
      "Run a cold rinse-only cycle to test whether CE was heat-related"
    ],
    when_to_call_technician: "CE returning on a properly vented combo with correct plumbing needs cooling fan or thermistor service.",
    affected_models: ["Samsung WD53K6800AZ", "Samsung WD45K6500AZ", "Samsung WF45K6500AV"],
    related_codes: ["he", "4c2", "te"], difficulty: "medium", estimated_time: "30 min"
  },
  {
    brand: "samsung", appliance: "washing-machine", error_code: "de",
    title: "Samsung Washing Machine dE Error Code",
    summary: "Door not locked before cycle start",
    meta_description: "Samsung dE means the door interlock never confirmed closed. Clear the gasket, close firmly until one click, and inspect the latch.",
    meaning: "dE (dE1, dE2, dL variants) stops fill and spin because the door lock switch never reported locked. Samsung front-loaders require confirmed latch before the inlet valves open—Child Lock with water in the tub can also trigger dE.",
    causes: [
      "Clothing caught in the door gasket fold",
      "Broken door hook or misaligned strike plate",
      "Failed door lock motor—buzz with no click at start",
      "Child Lock enabled with water in tub and door opened"
    ],
    fixes: [
      "Remove fabric from the gasket and press the door until a single lock click",
      "Disable Child Lock from the panel if enabled with water present",
      "Power-cycle two minutes, then close the door firmly and restart",
      "Listen at the lock during start—continuous buzz suggests a failed actuator"
    ],
    when_to_call_technician: "Door physically latched with dE every cycle requires door lock assembly replacement.",
    affected_models: ["Samsung WF45R6100AW", "Samsung WF45T6000AW", "Samsung WW22K6800AW"],
    related_codes: ["dc", "oe", "le"], difficulty: "medium", estimated_time: "30 min"
  },
  {
    brand: "samsung", appliance: "washing-machine", error_code: "ee",
    title: "Samsung Washing Machine EE Error Code",
    summary: "Control board EEPROM memory fault",
    meta_description: "Samsung EE indicates corrupted non-volatile memory on the main PCB—often after surges. Power-cycle once; recurring EE needs board replacement.",
    meaning: "EE is an EEPROM fault—the main control cannot read stored calibration and cycle data reliably. Samsung may flash random segments or refuse cycles until the board passes self-test.",
    causes: [
      "Lightning or brownout corrupting EEPROM chip",
      "Age-related memory failure on decade-old boards",
      "Moisture intrusion after base pan leak",
      "Failed firmware write during interrupted SmartThings update"
    ],
    fixes: [
      "Unplug 60 seconds and retry—EE from a single glitch sometimes clears once",
      "Move the washer to a dedicated grounded outlet without shared loads",
      "Record model and serial before calling—EE repair is usually board swap",
      "Compare repair cost to machine age before ordering a main PCB"
    ],
    when_to_call_technician: "Persistent EE after one clean power cycle requires main control board replacement and reprogramming.",
    affected_models: ["Samsung WA50R5400AW", "Samsung WF45K6500AV", "Samsung WF50K7500AV"],
    related_codes: ["ae", "fe", "9c1"], difficulty: "hard", estimated_time: "Call technician"
  },
  {
    brand: "samsung", appliance: "washing-machine", error_code: "fe",
    title: "Samsung Washing Machine FE Error Code",
    summary: "Line frequency or power sensing fault",
    meta_description: "Samsung FE flags abnormal AC frequency or power sensing—use a wall outlet, no extension cord. FE may follow 9C1 voltage errors.",
    meaning: "FE is a Frequency Error—the control detects mains supply outside expected 60 Hz (or 50 Hz export models) or the frequency sensing circuit on the board failed. Similar root causes as 9E voltage faults.",
    causes: [
      "Extension cord or power strip limiting current",
      "Generator or inverter power with unstable frequency",
      "Import model on wrong regional grid",
      "Failed frequency detection circuit on main PCB"
    ],
    fixes: [
      "Plug directly into a dedicated 120 V outlet—remove adapters and strips",
      "Reset the circuit breaker once if FE appeared after outage",
      "Confirm the rating plate matches your local voltage supply",
      "Avoid sharing the circuit with high-draw appliances during wash start"
    ],
    when_to_call_technician: "FE on a verified good outlet with correct voltage needs main board diagnosis.",
    affected_models: ["Samsung WF45R6300AV", "Samsung WA52M7750AW", "Samsung WF45T6000AW"],
    related_codes: ["9c1", "9c2", "ee"], difficulty: "medium", estimated_time: "30 min"
  },
  {
    brand: "samsung", appliance: "washing-machine", error_code: "te",
    title: "Samsung Washing Machine tE Error Code",
    summary: "Wash water temperature sensor invalid",
    meta_description: "Samsung tE means the NTC thermistor signal is out of range. Descale hard-water buildup; test sensor ohms before replacing the element.",
    meaning: "tE (tC variants) reports an invalid NTC thermistor reading—open, shorted, or changing too slowly during heat-up. Samsung disables heating until the sensor circuit reads within spec, often paired with HE on retries.",
    causes: [
      "NTC probe disconnected at the tub harness",
      "Scale insulating the sensor in hard-water regions",
      "Corroded connector after leak moisture",
      "Failed thermistor element internally open"
    ],
    fixes: [
      "Run a hot service wash or tub clean to dissolve light scale before parts ordering",
      "Power off 60 seconds and retry a warm cycle with hot tap primed at the sink",
      "Inspect the rear harness plug to the heating assembly for green corrosion",
      "If tE and HE appear together, treat sensor first—element second"
    ],
    when_to_call_technician: "Technicians compare NTC ohms at known water temp against Samsung's service chart—typically ~30 kΩ at room air.",
    affected_models: ["Samsung WF45T6000AW", "Samsung WF45R6100AW", "Samsung WA54R7600AC"],
    related_codes: ["he", "4c2", "ce"], difficulty: "medium", estimated_time: "30 min"
  }
];
