/** Researched unique copy — LG dryer codes. Sources: LG USA Support Flow Sense, AMP Appliance */
export default [
  {
    brand: "lg", appliance: "dryer", error_code: "d80",
    title: "LG Dryer D80 Error Code",
    summary: "Exhaust airflow blocked about 80%",
    meta_description: "LG D80 means Flow Sense detected 80% vent restriction. Clean lint filter, hose, and exterior cap before running again.",
    meaning: "D80 is a Flow Sense warning that roughly 80% of exhaust airflow is blocked. LG gas and electric dryers measure blower strain; when hot humid air cannot exit, the display shows D80 and drying times stretch far beyond normal.",
    causes: [
      "Lint packed into the elbow behind the dryer",
      "Crushed or kinked flexible vent hose against the wall",
      "Exterior vent hood flap stuck closed by lint or a bird nest",
      "Long duct run with multiple 90° bends exceeding LG length limits"
    ],
    fixes: [
      "Pull and wash the lint screen—then vacuum the lint screen housing slot",
      "Unplug the dryer, disconnect the rear vent hose, and vacuum lint from both hose ends",
      "Go outside while the dryer runs and confirm strong airflow at the wall cap",
      "Replace crushed foil hose with rigid or semi-rigid metal duct per LG install guide"
    ],
    when_to_call_technician: "Schedule vent cleaning if D80 returns immediately after a full duct clean—blockage may be deep inside wall ducts.",
    affected_models: ["LG DLEX3900W", "LG DLG3501W", "LG DLE3400W"],
    related_codes: ["d90", "d95", "te"],
    difficulty: "easy", estimated_time: "10 min"
  },
  {
    brand: "lg", appliance: "dryer", error_code: "d90",
    title: "LG Dryer D90 Error Code",
    summary: "Severe vent blockage near 90%",
    meta_description: "LG D90 indicates 90% exhaust restriction. Clean entire vent path from dryer to outside cap—fire risk if ignored.",
    meaning: "D90 means Flow Sense measured about 90% blockage in the exhaust path. At this level the heating element may cycle off early to prevent overheating, leaving clothes damp after extended runs.",
    causes: [
      "Years of lint accumulation inside wall ducting",
      "Vent cap louvers painted shut or blocked by storm debris",
      "Transition duct longer than 8 feet combined with sharp bends",
      "Blower housing lint cake on models rarely cleaned behind the drum"
    ],
    fixes: [
      "Complete the D80 cleaning steps, then snake the wall duct with a vent brush kit",
      "Remove the exterior cap and scrape lint from the last few feet of duct",
      "Run one timed dry cycle on high heat and watch whether D90 clears at startup",
      "Measure total duct length—LG recommends under 65 feet equivalent with elbows counted as 5 feet each"
    ],
    when_to_call_technician: "Professional duct cleaning is warranted when exterior airflow stays weak after hose disconnect proves the dryer blower is strong.",
    affected_models: ["LG DLEX4000W", "LG DLHC5502W", "LG DLE7300WE"],
    related_codes: ["d80", "d95", "hs"],
    difficulty: "easy", estimated_time: "10 min"
  },
  {
    brand: "lg", appliance: "dryer", error_code: "d95",
    title: "LG Dryer D95 Error Code",
    summary: "Critical vent blockage about 95%",
    meta_description: "LG D95 is near-total airflow loss. Stop using the dryer until the full vent system is cleared—serious fire hazard.",
    meaning: "D95 is the most severe Flow Sense code—about 95% exhaust restriction. LG treats this as an immediate safety alert. The dryer may refuse heat or shut down mid-cycle until airflow is restored.",
    causes: [
      "Completely clogged wall duct with no exterior airflow",
      "Disconnected vent hose blowing lint into the wall cavity",
      "Snow or ice blocking a roof vent termination in winter",
      "Failed blower wheel still turning but unable to move air past a solid clog"
    ],
    fixes: [
      "Stop running heated cycles until the vent path is verified open end-to-end",
      "Disconnect the rear hose and run blower-only—strong air at the back confirms the clog is in the house duct",
      "Hire a certified vent cleaner for roof or long horizontal runs you cannot reach",
      "After cleaning, run an empty timed cycle and confirm D95 does not reappear in the first five minutes"
    ],
    when_to_call_technician: "If D95 shows with the vent hose fully disconnected, the internal blower housing or duct inside the cabinet needs service.",
    affected_models: ["LG DLEX9000V", "LG DLG7151W", "LG DLE7150W"],
    related_codes: ["d90", "d80", "te"],
    difficulty: "medium", estimated_time: "30 min"
  },
  {
    brand: "lg", appliance: "dryer", error_code: "te",
    title: "LG Dryer tE Error Code",
    summary: "Thermistor signal invalid",
    meta_description: "LG dryer tE means the exhaust thermistor reading failed. Check sensor wiring at the blower housing.",
    meaning: "tE on LG dryers indicates a thermistor error—the temperature sensor in the exhaust path sent an out-of-range signal. The board cannot safely modulate heat without valid exhaust temperature feedback.",
    causes: [
      "Thermistor connector loose on the blower housing",
      "Lint moisture shorting the two-wire sensor harness",
      "Open thermistor after overheating from blocked vents",
      "Main board thermistor input circuit failure"
    ],
    fixes: [
      "Clean vents first—tE often follows repeated D80/D90 events that overheated the sensor area",
      "Unplug and reseat the thermistor plug on the blower assembly",
      "Inspect wires for burn marks near the heater box",
      "Power-cycle for five minutes and run a short timed dry on low heat"
    ],
    when_to_call_technician: "Technicians measure thermistor resistance at room temp against LG specs; replace if open or shorted.",
    affected_models: ["LG DLEX3900W", "LG DLE3400W", "LG DLG3501W"],
    related_codes: ["he", "hs", "d80"],
    difficulty: "medium", estimated_time: "30 min"
  },
  {
    brand: "lg", appliance: "dryer", error_code: "he",
    title: "LG Dryer HE Error Code",
    summary: "Heater circuit not producing heat",
    meta_description: "LG dryer HE means the heating element or gas igniter circuit failed to heat. Check breakers, vents, and heater connections.",
    meaning: "HE indicates a heating error—the dryer ran but exhaust temperature never reached the target within the allowed time. On electric models this points to the element or thermal fuse; on gas models, igniter or gas supply.",
    causes: [
      "Tripped house breaker on electric dryers—heat leg lost while motor leg runs",
      "Blown thermal fuse from prior vent blockage overheating",
      "Gas supply valve closed or flex line kinked on gas dryers",
      "Failed heating element coil on electric models"
    ],
    fixes: [
      "Reset the double-pole dryer breaker fully off then on",
      "Confirm strong airflow at the exterior vent before testing heat again",
      "On gas units, verify the shutoff valve behind the dryer is parallel to the pipe",
      "Run Timed Dry high—if drum turns but air stays cold, stop and schedule heater service"
    ],
    when_to_call_technician: "Element, igniter, and thermal fuse tests require cabinet disassembly and live voltage checks.",
    affected_models: ["LG DLEX4000W", "LG DLG7151W", "LG DLE7300WE"],
    related_codes: ["te", "hs", "d90"],
    difficulty: "medium", estimated_time: "30 min"
  },
  {
    brand: "lg", appliance: "dryer", error_code: "fe",
    title: "LG Dryer FE Error Code",
    summary: "Power frequency out of range",
    meta_description: "LG FE on some dryers indicates line frequency fault. Verify outlet voltage and avoid shared circuits with heavy loads.",
    meaning: "FE reports a frequency or power-quality issue detected by the inverter or control board—more common on LG heat-pump and inverter-motor dryers where stable AC input is required for compressor and drum drive.",
    causes: [
      "Generator or inverter power supply with unstable frequency",
      "Shared circuit with welders or large motors causing voltage sag",
      "Loose neutral at the dryer outlet",
      "Control board power monitoring fault after surge"
    ],
    fixes: [
      "Plug the dryer into a dedicated 120V or 240V outlet per the rating plate—no extension cords",
      "Avoid running on backup generator power unless frequency is verified stable",
      "Have an electrician check outlet voltage under load if lights dim when the dryer starts",
      "Power-cycle after storms before assuming board failure"
    ],
    when_to_call_technician: "Persistent FE on utility power with verified correct voltage indicates main board or inverter module service.",
    affected_models: ["LG DLHC5502W", "LG DLHC3902W", "LG DLHC5557W"],
    related_codes: ["pf", "ce", "he"],
    difficulty: "hard", estimated_time: "Call technician"
  },
  {
    brand: "lg", appliance: "dryer", error_code: "ae",
    title: "LG Dryer AE Error Code",
    summary: "Auto shutoff from internal fault",
    meta_description: "LG AE dryer code triggers automatic shutdown. Inspect for overheating, vent blockage, or control faults after AE appears.",
    meaning: "AE is an Auto Error shutoff—the control board stopped operation to protect components, often following overheating, repeated sensor faults, or an internal self-test failure.",
    causes: [
      "Severe vent restriction causing repeated high-limit trips",
      "Moisture sensor short from fabric softener sheet residue",
      "Main board detecting abnormal current draw",
      "Condenser or heat-pump coil iced on ventless models"
    ],
    fixes: [
      "Clear the full vent path if any D80/D90 code appeared recently",
      "Clean moisture sensor bars inside the drum with rubbing alcohol",
      "Unplug for ten minutes to reset protective logic",
      "On heat-pump models, ensure room temperature is within the manual's operating range"
    ],
    when_to_call_technician: "AE that returns on the first cycle after vent cleaning needs board or heat-pump system diagnosis.",
    affected_models: ["LG DLEX9000V", "LG DLHC5502W", "LG DLE7150W"],
    related_codes: ["he", "te", "d95"],
    difficulty: "medium", estimated_time: "30 min"
  },
  {
    brand: "lg", appliance: "dryer", error_code: "ce",
    title: "LG Dryer CE Error Code",
    summary: "Communication fault between control boards",
    meta_description: "LG dryer CE means internal board communication failed. Power reset first; recurring CE needs PCB replacement.",
    meaning: "CE is a Communication Error between the main control and display or inverter sub-board. Buttons may freeze and the drum may not start even though power is present.",
    causes: [
      "Loose ribbon cable after moving the dryer",
      "Power surge damaging UART lines between boards",
      "Condensation on connectors in humid laundry rooms",
      "Failed display PCB or main board comm chip"
    ],
    fixes: [
      "Unplug five minutes and restore power",
      "Ensure the dryer is on a surge-protected dedicated circuit",
      "Avoid stacking heavy items on top that flex the control panel housing",
      "Note whether CE appears at power-on or mid-cycle for the service call"
    ],
    when_to_call_technician: "CE at every startup after reset typically requires main or UI board replacement with matching part numbers.",
    affected_models: ["LG DLEX3900W", "LG DLEX4000W", "LG DLE3400W"],
    related_codes: ["pf", "fe", "nf"],
    difficulty: "hard", estimated_time: "Call technician"
  },
  {
    brand: "lg", appliance: "dryer", error_code: "de",
    title: "LG Dryer dE Error Code",
    summary: "Door switch not confirming closed",
    meta_description: "LG dE on dryers means the door circuit did not latch. Check door strike, switch, and child-lock settings.",
    meaning: "dE means the door switch never confirmed closure before the motor or heat circuit energized. LG dryers will not tumble with an open-door signal.",
    causes: [
      "Door not fully shut against the gasket",
      "Broken door catch or worn strike",
      "Door switch lever stuck from lint at the hinge",
      "Child lock or control lock enabled on smart models"
    ],
    fixes: [
      "Firmly push the door until the latch clicks once",
      "Inspect the plastic strike on the frame for cracks",
      "Wipe lint from the switch actuator slot along the door opening",
      "Disable Control Lock by holding the designated button per your model label"
    ],
    when_to_call_technician: "Replace the door switch assembly if the door closes firmly but dE shows every start.",
    affected_models: ["LG DLEX3900W", "LG DLG3501W", "LG DLE7300WE"],
    related_codes: ["cl", "pf", "ce"],
    difficulty: "easy", estimated_time: "10 min"
  },
  {
    brand: "lg", appliance: "dryer", error_code: "nf",
    title: "LG Dryer nF Error Code",
    summary: "No gas flame detected on gas models",
    meta_description: "LG nF on gas dryers means no flame sensed. Verify gas supply, listen for igniter glow, call service if gas smell present.",
    meaning: "nF is No Flame on LG gas dryers. The igniter glowed or the gas valve opened but the flame sensor never detected combustion within the timeout—so heat stops for safety.",
    causes: [
      "Household gas valve closed behind the dryer",
      "Clogged burner orifice from lint drawn into the gas assembly",
      "Weak igniter not reaching ignition temperature",
      "Failed flame sensor rod coated with white oxidation"
    ],
    fixes: [
      "Confirm the gas shutoff is fully open and other gas appliances work",
      "Smell for gas—if present, shut off supply and leave the room before calling the utility",
      "Clean the lint filter and vent—poor airflow can cause flame rollout trips",
      "Listen for the igniter click-then-glow sequence on a timed high heat cycle"
    ],
    when_to_call_technician: "Gas valve, igniter, and flame sensor work must be done by a qualified technician—never bypass flame proving.",
    affected_models: ["LG DLG3501W", "LG DLG7151W", "LG DLGX4001W"],
    related_codes: ["he", "hs", "d80"],
    difficulty: "hard", estimated_time: "Call technician"
  },
  {
    brand: "lg", appliance: "dryer", error_code: "pf",
    title: "LG Dryer PF Error Code",
    summary: "Power lost during cycle",
    meta_description: "LG PF means power interruption mid-dry. Reset breaker and press Start to resume if offered.",
    meaning: "PF is Power Failure—the board lost AC during operation. It is informational, not a parts fault. Some LG models let you resume; others require restarting the cycle.",
    causes: [
      "Tripped 30A dryer breaker",
      "Brief outage or brownout",
      "Loose cord at the terminal block",
      "Using an undersized extension cord on 120V compact dryers"
    ],
    fixes: [
      "Check the breaker and reset if tripped",
      "Press Start to resume when the display prompts",
      "Tighten terminal block screws if the cord was recently installed",
      "Avoid sharing the laundry circuit with space heaters or window AC units"
    ],
    when_to_call_technician: "Frequent PF with no breaker trips suggests a failing cord, outlet, or main board power supply.",
    affected_models: ["LG DLEX3900W", "LG DLE3400W", "LG DLE7300WE"],
    related_codes: ["fe", "ce", "de"],
    difficulty: "easy", estimated_time: "10 min"
  },
  {
    brand: "lg", appliance: "dryer", error_code: "e13",
    title: "LG Dryer E13 Error Code",
    summary: "Steam generator or steam function fault",
    meta_description: "LG E13 on steam dryers indicates a steam system error. Check water supply to the steam kit and clean the steam nozzle.",
    meaning: "E13 appears on LG steam-capable dryers when the steam generator cannot produce steam—water not reaching the steam chamber, a clogged nozzle, or a steam valve fault.",
    causes: [
      "Steam water supply valve closed at the Y-connector",
      "Mineral scale blocking the steam nozzle at the drum",
      "Kinked thin steam inlet tube behind the dryer",
      "Failed steam generator solenoid"
    ],
    fixes: [
      "Open the small steam water valve tied to the cold inlet",
      "Run a Steam Fresh cycle with the nozzle facing down per manual diagram",
      "Descale the steam line using LG-approved cleaner if hard water is present",
      "Confirm standard drying still works—E13 only affects steam features on most models"
    ],
    when_to_call_technician: "If steam cycles never produce mist after supply checks, the steam generator assembly needs replacement.",
    affected_models: ["LG DLEX9000V", "LG DLGX9001V", "LG DLEX9500K"],
    related_codes: ["he", "te", "pf"],
    difficulty: "medium", estimated_time: "30 min"
  },
  {
    brand: "lg", appliance: "dryer", error_code: "hs",
    title: "LG Dryer HS Error Code",
    summary: "Humidity sensor reading failed",
    meta_description: "LG HS means the humidity sensor signal is bad. Clean sensor bars and vent path; replace sensor if HS persists.",
    meaning: "HS is a Humidity Sensor error on sensor-dry models. The board cannot read fabric moisture level, so automatic cycles may stop early or never advance from sensing mode.",
    causes: [
      "Fabric softener residue insulating the moisture bars",
      "Shorted sensor harness inside the drum bulkhead",
      "Corrosion on sensor contacts from chlorine bleach splash",
      "Control board humidity input failure"
    ],
    fixes: [
      "Wipe the two metal moisture strips inside the drum with isopropyl alcohol and a soft cloth",
      "Avoid dryer sheets on loads when testing sensor dry after HS",
      "Run a Timed Dry cycle to confirm heat and tumble work independently of the sensor",
      "Retry Sensor Dry on a mixed load after cleaning the bars"
    ],
    when_to_call_technician: "Replace the humidity sensor harness if HS returns immediately after cleaning the bars.",
    affected_models: ["LG DLEX4000W", "LG DLE7300WE", "LG DLEX3900W"],
    related_codes: ["te", "he", "ae"],
    difficulty: "medium", estimated_time: "30 min"
  },
  {
    brand: "lg", appliance: "dryer", error_code: "cl",
    title: "LG Dryer CL Error Code",
    summary: "Child lock is active—not a fault",
    meta_description: "LG CL means Control Lock is on. Hold the child lock button 3 seconds to disable—dryer is not broken.",
    meaning: "CL displays Child Lock engaged. The control panel buttons are disabled to prevent accidental cycle changes—this is intentional, not a malfunction.",
    causes: [
      "Child Lock enabled by holding two buttons per manual",
      "SmartThinQ app lock turned on remotely",
      "Control lock after cleaning the panel while pressing buttons",
      "Factory default lock setting on display demo units mistakenly left enabled"
    ],
    fixes: [
      "Press and hold the Child Lock or Rack Dry button for three seconds until CL clears",
      "Check the SmartThinQ app for an active control lock toggle",
      "Refer to the button icon chart on the panel bezel for your model's exact combo",
      "Unplug two minutes only if the lock combo is unknown—note this resets some settings"
    ],
    when_to_call_technician: "No service needed for CL alone—only if buttons remain dead after lock is cleared.",
    affected_models: ["LG DLEX3900W", "LG DLEX4000W", "LG DLE3400W"],
    related_codes: ["de", "pf", "ce"],
    difficulty: "easy", estimated_time: "10 min"
  },
  {
    brand: "lg", appliance: "dryer", error_code: "te",
    title: "LG Dryer tE Error Code (Display Variant)",
    summary: "Thermistor fault—alternate display",
    meta_description: "LG tE on the display is the same thermistor error as TE. Clean vents and check blower housing sensor wiring.",
    meaning: "Some LG dryer panels show tE with mixed case for the same thermistor fault as TE. Exhaust temperature feedback failed—often after vent blockage overheated the blower area.",
    causes: [
      "Same root causes as TE—sensor unplugged or vent restriction",
      "Display firmware labeling tE instead of TE on certain model years",
      "Moisture in the harness after cleaning vents with wet lint",
      "Thermistor replaced with wrong part number"
    ],
    fixes: [
      "Follow TE troubleshooting: clean full vent path first",
      "Reseat the thermistor at the blower housing",
      "Run low-heat timed dry five minutes after power-cycle",
      "Document whether the code shows as tE or TE for parts ordering"
    ],
    when_to_call_technician: "Same as TE—ohm test the thermistor if the code returns after vent service.",
    affected_models: ["LG DLEX3900W", "LG DLE3400W", "LG DLG3501W"],
    related_codes: ["he", "hs", "d80"],
    difficulty: "medium", estimated_time: "30 min"
  },
];
