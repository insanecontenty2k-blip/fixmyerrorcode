/** Researched unique copy — Samsung dryer codes. Sources: Samsung US/CA Support, AppliancePartsPros */
export default [
  {
    brand: "samsung", appliance: "dryer", error_code: "he",
    title: "Samsung Dryer HE Error Code",
    summary: "Heating system not reaching target exhaust temp",
    meta_description: "Samsung dryer HE means weak or no heat. Clean lint and vent first, then test thermal fuse and element before blaming the board.",
    meaning: "HE (hE on some displays) logs when exhaust temperature fails to climb during a heat cycle. Samsung disables the element or gas valve as protection—restricted vent airflow is the most common trigger before any part failure.",
    causes: [
      "Clogged lint screen or vent run raising exhaust temp slowly",
      "Blown thermal fuse on the heater housing after prior overheat",
      "Open electric heating element or weak gas igniter glow",
      "Faulty thermistor sending low readings to the control"
    ],
    fixes: [
      "Clean the lint filter and vacuum the vent hose from both ends",
      "Run a timed dry on high heat and feel airflow at the exterior hood",
      "Replace the thermal fuse only after confirming the vent is clear—otherwise it blows again",
      "On gas models watch for igniter glow without flame—gas valve or coils may follow"
    ],
    when_to_call_technician: "Clear vent with good fuse continuity but persistent HE needs thermistor, element, or gas valve diagnosis with live voltage tests.",
    affected_models: ["Samsung DVE45R6100W", "Samsung DV42H5000EW", "Samsung DVE50R5400V"],
    related_codes: ["hc", "te", "fc"], difficulty: "medium", estimated_time: "30 min"
  },
  {
    brand: "samsung", appliance: "dryer", error_code: "te",
    title: "Samsung Dryer tE Error Code",
    summary: "Exhaust thermistor signal out of range",
    meta_description: "Samsung tE dryer code flags invalid thermistor readings. Reseat the blower-housing sensor and clear lint before replacing parts.",
    meaning: "tE appears when the thermistor on the blower housing reports resistance the board considers impossible—open, shorted, or stuck. Heat cycles abort because Samsung cannot safely regulate exhaust temperature without valid feedback.",
    causes: [
      "Thermistor connector loose near the blower inlet",
      "Lint packed around the sensor causing erratic readings",
      "Broken wire rubbing the drum shell",
      "Failed thermistor element after years of heat cycles"
    ],
    fixes: [
      "Unplug and remove the rear access panel on electric models",
      "Locate the two-wire thermistor clipped to the blower duct and reseat the plug",
      "Vacuum the blower wheel and housing thoroughly",
      "Retry a timed dry and note whether tE appears in the first two minutes or after mid-cycle heat"
    ],
    when_to_call_technician: "Ohms at the thermistor must match Samsung's chart for your model year—technicians test against spec quickly.",
    affected_models: ["Samsung DV50F9A6EVP", "Samsung DVE50M7450P", "Samsung DV45K6200GW"],
    related_codes: ["he", "hc", "9c1"], difficulty: "medium", estimated_time: "30 min"
  },
  {
    brand: "samsung", appliance: "dryer", error_code: "de",
    title: "Samsung Dryer dE Error Code",
    summary: "Door switch not confirming closed",
    meta_description: "Samsung dryer dE means the door interlock circuit is open. Close the door firmly, check the latch, and inspect the door switch.",
    meaning: "dE stops the drum and heat because the door switch never reads closed at cycle start. Samsung dryers require a confirmed latch before the motor and heater energize—distinct from washer dE but same door-lock logic.",
    causes: [
      "Door not fully latched against the strike",
      "Worn door catch allowing gap at the switch",
      "Failed door switch behind the front panel",
      "Broken wire in the door harness from repeated opening"
    ],
    fixes: [
      "Press the door until it clicks and retry without forcing",
      "Inspect the plastic latch hook for cracks or wear",
      "Power off two minutes, then start a Air Fluff cycle to test switch without heat",
      "Listen for drum attempt—silence with dE confirms switch circuit open"
    ],
    when_to_call_technician: "Door closes flush with dE every start requires door switch or latch assembly replacement.",
    affected_models: ["Samsung DVE45R6300V", "Samsung DV42H5000EW", "Samsung DVE50R5400V"],
    related_codes: ["bE", "ac", "he"], difficulty: "medium", estimated_time: "30 min"
  },
  {
    brand: "samsung", appliance: "dryer", error_code: "fe",
    title: "Samsung Dryer FE Error Code",
    summary: "AC line frequency sensing fault",
    meta_description: "Samsung dryer FE indicates power frequency irregularity. Plug into a dedicated 240 V outlet—no extension cords or shared strips.",
    meaning: "FE is grouped with FC as a Frequency Error—the control detects mains frequency outside tolerance or the sensing circuit failed. Electric dryers on unstable supply or import models on wrong grids see FE at startup.",
    causes: [
      "Extension cord or undersized power strip",
      "Partially tripped double-pole breaker dropping one leg",
      "Generator power with frequency drift",
      "Failed frequency detect circuit on main PCB"
    ],
    fixes: [
      "Plug directly into the rated 30 A dryer outlet—remove adapters",
      "Reset the double breaker fully off then on once",
      "Confirm both hot legs at the terminal block if comfortable with electrical safety",
      "Avoid stacked Multi-Control kit glitches—wait five seconds after washer power-on before controlling dryer"
    ],
    when_to_call_technician: "FE on verified 240 V at the terminal block points to control board replacement.",
    affected_models: ["Samsung DVE45R6100W", "Samsung DVE50M7450P", "Samsung DV45K6200GW"],
    related_codes: ["fc", "9c1", "9c2"], difficulty: "medium", estimated_time: "30 min"
  },
  {
    brand: "samsung", appliance: "dryer", error_code: "ae",
    title: "Samsung Dryer AE Error Code",
    summary: "Internal board communication failure",
    meta_description: "Samsung dryer AE means components stopped talking to the main PCB. Power-cycle two minutes; recurring AE needs harness or board service.",
    meaning: "AE (Et, EEE, E3 variants) is a Communication Error between the display, main control, and motor driver. Cycles may freeze mid-dry or show garbled remaining time until the link restores.",
    causes: [
      "Loose ribbon cable after moving the stacked laundry center",
      "Moisture on connectors in humid laundry rooms",
      "Power surge damaging UART communication lines",
      "Failed sub-PCB on Wi-Fi or display modules"
    ],
    fixes: [
      "Unplug or breaker off two full minutes before restart",
      "Ensure the dryer cord is fully seated at the junction block",
      "Update firmware via SmartThings if Samsung published a comms fix for your model",
      "Note whether AE appears at power-on or only during heat segments"
    ],
    when_to_call_technician: "AE every cycle after reset requires ribbon inspection and likely PCB replacement.",
    affected_models: ["Samsung DVE50R5400V", "Samsung DV50F9A6EVP", "Samsung DVE45R6300V"],
    related_codes: ["ac", "ee", "9c1"], difficulty: "hard", estimated_time: "Call technician"
  },
  {
    brand: "samsung", appliance: "dryer", error_code: "be",
    title: "Samsung Dryer bE Error Code",
    summary: "Control panel button stuck",
    meta_description: "Samsung dryer bE means a key reads pressed continuously. Power off and press every button edge; replace panel if bE returns idle.",
    meaning: "bE (bE2, 6E, 6C2 family) reports a Jammed Button held more than ten seconds. The dryer will not start until the touch matrix clears—distinct from washer vibration BE on other platforms.",
    causes: [
      "Moisture on the touch panel after cleaning",
      "Coin or object leaning on the control surface",
      "Failed touch membrane shorting a row",
      "Control board key input stuck low"
    ],
    fixes: [
      "Power off and individually work each button edge-to-edge",
      "Dry the panel completely before restart",
      "Unplug two minutes if bE appeared after steam cycle condensation",
      "Avoid abrasive cleaners that scratch capacitive glass"
    ],
    when_to_call_technician: "bE with a dry untouched panel requires UI or main board replacement.",
    affected_models: ["Samsung DVE45R6100W", "Samsung DV42H5000EW", "Samsung DVE50M7450P"],
    related_codes: ["bE", "ac", "de"], difficulty: "easy", estimated_time: "10 min"
  },
  {
    brand: "samsung", appliance: "dryer", error_code: "ce",
    title: "Samsung Dryer CE Error Code",
    summary: "Compressor or heat-pump cooling fault",
    meta_description: "Samsung heat-pump dryer CE flags cooling system stress. Clean condenser filters and ensure room ventilation on hybrid models.",
    meaning: "CE on Samsung heat-pump and hybrid dryers indicates a cooling error—the refrigerant loop or auxiliary fan cannot shed heat fast enough. Vented electric models rarely show CE; verify your dryer type in the manual.",
    causes: [
      "Condenser lint filter clogged on heat-pump models",
      "Room temperature below minimum spec for heat-pump operation",
      "Failed condenser fan motor",
      "Refrigerant leak or compressor overload"
    ],
    fixes: [
      "Clean the condenser filter drawer per the monthly schedule in your manual",
      "Ensure intake and exhaust grilles have 4 inches clearance",
      "Allow the unit to cool 30 minutes before retry on long cycles",
      "Run a timed low-heat cycle as a diagnostic after filter service"
    ],
    when_to_call_technician: "CE after condenser service on a heat-pump model needs sealed-system or fan motor diagnosis—EPA-certified work for refrigerant.",
    affected_models: ["Samsung DV22N6800HW", "Samsung DV20K6800EW", "Samsung DV22N6850HW"],
    related_codes: ["he", "hc", "te"], difficulty: "hard", estimated_time: "Call technician"
  },
  {
    brand: "samsung", appliance: "dryer", error_code: "ee",
    title: "Samsung Dryer EE Error Code",
    summary: "Control EEPROM memory error",
    meta_description: "Samsung dryer EE means corrupted board memory—often after surges. One power-cycle may clear it; persistent EE needs PCB swap.",
    meaning: "EE signals EEPROM failure on the main control—the stored cycle profiles and calibration data read invalid. The display may show random characters or refuse every cycle until the board passes memory check.",
    causes: [
      "Lightning strike or repeated brownouts",
      "Age-related EEPROM chip failure",
      "Interrupted SmartThings firmware update",
      "Moisture on the PCB after vent leak into the console"
    ],
    fixes: [
      "Breaker off two minutes, then restore power once",
      "Plug into a grounded outlet without shared loads",
      "Record model and serial from the door jamb sticker before parts lookup",
      "Compare repair quote to dryer age—EE repair is usually main PCB"
    ],
    when_to_call_technician: "EE returning after one clean power cycle requires main control board replacement.",
    affected_models: ["Samsung DVE50R5400V", "Samsung DV45K6200GW", "Samsung DVE45R6100W"],
    related_codes: ["ae", "ac", "9c1"], difficulty: "hard", estimated_time: "Call technician"
  },
  {
    brand: "samsung", appliance: "dryer", error_code: "nf",
    title: "Samsung Dryer nF Error Code",
    summary: "Steam water supply not detected",
    meta_description: "Samsung steam dryer nF means no water at the steam valve. Open the supply tap, check the Y-connector, and verify the inlet hose.",
    meaning: "nF (Not Filling) on Samsung steam dryers appears when the steam generator valve opens but no water arrives—similar to washer 4E but for the auxiliary steam line. Non-steam models may show nF for other fill-related faults; confirm steam kit installation.",
    causes: [
      "Steam supply valve closed at the wall tee",
      "Kinked thin steam inlet hose behind the dryer",
      "Clogged screen at the steam solenoid connection",
      "Failed steam inlet valve or flow sensor"
    ],
    fixes: [
      "Open the dedicated cold tap feeding the steam Y-connector fully",
      "Inspect the ¼-inch steam hose for sharp bends at the rear panel",
      "Run a Steam Refresh cycle and listen for valve click and water enter",
      "Confirm the steam kit was installed per manual—some models ship without steam enabled"
    ],
    when_to_call_technician: "Water at the hose fitting with dry steam output during Steam cycle means valve or generator service.",
    affected_models: ["Samsung DVE50M7450P", "Samsung DV50F9A6EVP", "Samsung DVE45R6300V"],
    related_codes: ["he", "te", "4e"], difficulty: "easy", estimated_time: "10 min"
  },
  {
    brand: "samsung", appliance: "dryer", error_code: "hc",
    title: "Samsung Dryer HC Error Code",
    summary: "Cabinet overheating during dry cycle",
    meta_description: "Samsung HC means the dryer ran too hot—usually blocked vent or lint screen. Clean exhaust path before replacing fuses.",
    meaning: "HC (hC, HC4, 1 HC) is a Heating Error for over-temperature—the exhaust or cavity temp climbed beyond safe limits. Samsung stops heat and may run the drum to cool down. Restricted airflow causes most HC codes on vented models.",
    causes: [
      "Lint screen packed solid between loads",
      "Crushed transition duct behind the dryer",
      "Exterior hood flap stuck closed by bird nest or paint",
      "Cycling thermal fuse already weakened from prior vent neglect"
    ],
    fixes: [
      "Clean the lint filter with soap and water if fabric softener film is present",
      "Disconnect the vent from the dryer and vacuum both directions",
      "Verify the outside hood opens when the dryer runs—feel strong airflow",
      "Do not run high heat again until vent restriction is cleared"
    ],
    when_to_call_technician: "HC with a clean vent and strong hood airflow suggests gas valve stuck open or failed high-limit thermostat—urgent service.",
    affected_models: ["Samsung DVE45R6100W", "Samsung DV42H5000EW", "Samsung DVE50R5400V"],
    related_codes: ["he", "te", "hc2"], difficulty: "easy", estimated_time: "10 min"
  },
  {
    brand: "samsung", appliance: "dryer", error_code: "fc",
    title: "Samsung Dryer FC Error Code",
    summary: "Power frequency out of specification",
    meta_description: "Samsung FC dryer error flags line frequency problems. Use direct wall outlet; reset breaker if FC followed an outage.",
    meaning: "FC groups with FE as a Frequency Error on Samsung laundry electronics. The inverter or main board detects AC frequency outside the narrow band expected for motor and heat control—common after generator use or bad breaker contacts.",
    causes: [
      "One leg of 240 V missing at the outlet",
      "Loose terminal at the dryer cord connection",
      "Import model on incompatible mains frequency",
      "Failed frequency measurement on control PCB"
    ],
    fixes: [
      "Reset the double-pole breaker fully off, wait 30 seconds, on",
      "Inspect the terminal block for discolored or loose strap wires",
      "Remove extension cords and power strips entirely",
      "If stacked with Multi-Control, update dryer firmware via SmartThings for known 9C1/FC glitches"
    ],
    when_to_call_technician: "Electrician should verify 240 V at the receptacle before board replacement if FC persists.",
    affected_models: ["Samsung DVE50M7450P", "Samsung DV45K6200GW", "Samsung DVE50R5400V"],
    related_codes: ["fe", "9c1", "9c2"], difficulty: "medium", estimated_time: "30 min"
  },
  {
    brand: "samsung", appliance: "dryer", error_code: "ac",
    title: "Samsung Dryer AC Error Code",
    summary: "Electronic control communication fault",
    meta_description: "Samsung dryer AC means internal components lost communication. Breaker reset two minutes; AC that returns needs PCB or harness repair.",
    meaning: "AC (1 AC, AE3 variants) indicates the main PCB cannot exchange data with a sub-module—display, motor driver, or moisture sensor board. The dryer may beep and halt with time frozen on the LED.",
    causes: [
      "Ribbon cable unseated during console removal",
      "Condensation on connectors in unventilated closets",
      "Surge damage to communication lines",
      "Failed display or interface PCB"
    ],
    fixes: [
      "Turn breaker off two minutes—longer than a brief button power-off",
      "Ensure closet installations have louver vents per Samsung clearance specs",
      "Check SmartThings for firmware updates addressing comms errors",
      "Document whether AC appears before drum start or mid-cycle with heat active"
    ],
    when_to_call_technician: "Repeating AC after extended power loss requires harness continuity tests and likely PCB swap.",
    affected_models: ["Samsung DV50F9A6EVP", "Samsung DVE45R6300V", "Samsung DVE45R6100W"],
    related_codes: ["ae", "ee", "1ac7"], difficulty: "hard", estimated_time: "Call technician"
  },
  {
    brand: "samsung", appliance: "dryer", error_code: "9c1",
    title: "Samsung Dryer 9C1 Error Code",
    summary: "Abnormal supply voltage detected",
    meta_description: "Samsung 9C1 is a voltage error—check 240 V outlet, breaker, and cord. Stacked Multi-Control kits may false-trigger 9C1 without a firmware update.",
    meaning: "9C1 (9E, 2E, 9E1 family) logs when incoming voltage is too low, too high, or one leg of 240 V is missing. Electric dryers need both hot lines for heat and motor—single-leg supply triggers 9C1 within seconds of start.",
    causes: [
      "Partially tripped double-pole breaker",
      "Loose or burned dryer cord terminal",
      "Undersized or long extension wiring",
      "Multi-Control stack sending dryer command within five seconds of washer boot"
    ],
    fixes: [
      "Reset the dryer breaker fully off 30 seconds then on",
      "Verify the cord strap screws are tight at the terminal block",
      "Add the dryer to SmartThings and install available firmware if stacked with washer",
      "Have an electrician measure 240 V at the receptacle if the cord and breaker look intact"
    ],
    when_to_call_technician: "Correct voltage at the wall with 9C1 at every start suggests main PCB voltage sensing failure.",
    affected_models: ["Samsung DVE45R6100W", "Samsung DVE50R5400V", "Samsung DV42H5000EW"],
    related_codes: ["9c2", "fc", "fe"], difficulty: "medium", estimated_time: "30 min"
  },
  {
    brand: "samsung", appliance: "dryer", error_code: "9c2",
    title: "Samsung Dryer 9C2 Error Code",
    summary: "Secondary voltage irregularity fault",
    meta_description: "Samsung 9C2 pairs with 9C1 for power problems—confirm dedicated 30 A circuit and tight terminal connections.",
    meaning: "9C2 (9E2, 19C2) is the companion voltage error to 9C1—often logged when voltage recovers briefly then drops again during motor inrush. Samsung protects the inverter by locking out until supply stabilizes.",
    causes: [
      "Shared circuit with electric range or welder causing voltage sag",
      "Aluminum wire connection oxidizing at the outlet",
      "Weak utility feed during neighborhood peak load",
      "Control board voltage monitor out of calibration after surge"
    ],
    fixes: [
      "Move the dryer to a dedicated 30 A circuit if currently shared",
      "Tighten outlet and terminal block screws with breaker off",
      "Retry during off-peak hours to rule out utility sag",
      "Replace cord if prongs or wires show heat discoloration"
    ],
    when_to_call_technician: "Stable 240 V measured under load with repeating 9C2 indicates PCB replacement.",
    affected_models: ["Samsung DVE50M7450P", "Samsung DV45K6200GW", "Samsung DVE45R6300V"],
    related_codes: ["9c1", "fc", "ee"], difficulty: "medium", estimated_time: "30 min"
  },
  {
    brand: "samsung", appliance: "dryer", error_code: "bE",
    title: "Samsung Dryer bE Error Code (Display Variant)",
    summary: "Jammed touch key on control panel",
    meta_description: "Samsung bE on the display means a stuck button—distinct from lowercase be in some exports. Cycle every key and power-cycle.",
    meaning: "bE displays with capital E on many Samsung dryer panels when a capacitive key reads continuously pressed. Functionally identical to the jammed-button bE family—Samsung uses mixed casing on different firmware builds.",
    causes: [
      "Static discharge locking a touch row until power cycle",
      "Cleaning solution trapped under the glass bezel",
      "Physical pressure from laundry stacked against the console",
      "Failed UI membrane shorting the Start key"
    ],
    fixes: [
      "Hold Power three seconds, unplug one minute, restore power",
      "Press and release each control including Steam and Adjust Time edges",
      "Keep the panel dry—wring cloths before wiping",
      "Clear the top surface so nothing presses keys during vibration"
    ],
    when_to_call_technician: "Capital bE at idle on a dry panel needs touch panel assembly DG34-series replacement per model lookup.",
    affected_models: ["Samsung DVE45R6100W", "Samsung DV50F9A6EVP", "Samsung DVE50R5400V"],
    related_codes: ["be", "ac", "de"], difficulty: "easy", estimated_time: "10 min"
  }
];
