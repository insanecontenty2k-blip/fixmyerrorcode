/** Researched unique copy — Samsung refrigerator codes. Sources: Samsung US Support, MyPros+, ApplianceTechInfo */
export default [
  {
    brand: "samsung", appliance: "refrigerator", error_code: "41e",
    title: "Samsung Refrigerator 41E Error Code",
    summary: "Freezer evaporator fan not running",
    meta_description: "Samsung 41E means freezer fan failure. Thaw ice blocking the blade; replace motor if 41E returns after manual defrost.",
    meaning: "41E logs when the freezer evaporator fan fails to reach expected speed feedback. The compressor may still run but cold air stops circulating—warm freezer spots and soft ice cream often appear before the code.",
    causes: [
      "Ice dam locking the fan blade after defrost failure",
      "Failed BLDC evaporator fan motor",
      "Door left ajar frosting over the evaporator cover",
      "Main board inverter not driving the fan circuit"
    ],
    fixes: [
      "Force defrost via button combo in your manual if supported",
      "Empty the freezer, unplug 8–12 hours, and towel the floor",
      "After thaw, spin the fan blade—it should rotate without scraping",
      "Restore power and listen for fan within 30 seconds of closing the door"
    ],
    when_to_call_technician: "Unobstructed blade with no motor hum after defrost requires evaporator fan motor or board fan driver replacement.",
    affected_models: ["Samsung RF28R7351SG", "Samsung RS27T5200SR", "Samsung RF23M8590SG"],
    related_codes: ["40e", "38e", "33e"], difficulty: "medium", estimated_time: "30 min"
  },
  {
    brand: "samsung", appliance: "refrigerator", error_code: "40e",
    title: "Samsung Refrigerator 40E Error Code",
    summary: "Ice room fan not operating",
    meta_description: "Samsung 40E (40C) flags the ice compartment fan. Reset power; replace fan if ice room stays warm after defrost.",
    meaning: "40E means the fan that circulates air through the ice room failed to spin or report RPM. Dual ice maker models stop producing ice in the fridge-side bucket while the code is active.",
    causes: [
      "Ice buildup around the ice room fan from humid air infiltration",
      "Failed ice room fan motor",
      "Loose connector at the ice duct harness",
      "Defrost fault refreezing the ice room weekly"
    ],
    fixes: [
      "Turn off ice maker, unplug 4 hours minimum to melt ice room frost",
      "Verify the ice room door or duct seal closes fully—no gap at the gasket",
      "Power back and listen for a faint whir when ice maker calls for cooling",
      "Keep freezer at 0 °F or below to reduce ice room frost load"
    ],
    when_to_call_technician: "Fan blade free with silence powered on needs ice room fan motor replacement.",
    affected_models: ["Samsung RF28R6241SR", "Samsung RF23M8070SR", "Samsung RF27T5501SR"],
    related_codes: ["39e", "41e", "29e"], difficulty: "medium", estimated_time: "30 min"
  },
  {
    brand: "samsung", appliance: "refrigerator", error_code: "39e",
    title: "Samsung Refrigerator 39E Error Code",
    summary: "Ice maker function self-test failed",
    meta_description: "Samsung 39E (39C) means general ice maker malfunction. Toggle ice maker off/on; service module if 39E persists.",
    meaning: "39E is a broad Ice Maker Function Error—the fridge ice maker module failed an internal diagnostic during harvest or fill. Production stops until the fault clears; paired codes like 28E or 35E narrow the failing sub-component.",
    causes: [
      "Ice maker module gear or motor failed mid-harvest",
      "Fill tube frozen blocking water entry",
      "Ice level arm stuck in the off position",
      "Main PCB lost communication with the ice maker board"
    ],
    fixes: [
      "Toggle ice maker OFF for two minutes, then ON at the panel",
      "Clear visible ice jam in the bucket and auger path",
      "Thaw the fill tube with a hair dryer on low if no water enters the mold",
      "Breaker off five minutes for a cold reset before retesting harvest"
    ],
    when_to_call_technician: "39E after reset with empty mold and no fill suggests ice maker assembly or water valve service.",
    affected_models: ["Samsung RF28R7351SG", "Samsung RF23M8590SG", "Samsung RF28R6241SR"],
    related_codes: ["28e", "35e", "40e"], difficulty: "medium", estimated_time: "30 min"
  },
  {
    brand: "samsung", appliance: "refrigerator", error_code: "38e",
    title: "Samsung Refrigerator 38E Error Code",
    summary: "Freezer compartment fan motor fault",
    meta_description: "Samsung 38E indicates freezer fan motor error. Defrost first; test motor if blade spins freely but stays silent powered.",
    meaning: "38E specifically targets the freezer fan motor circuit—distinct from 41E on some firmware builds but with the same user symptom: uneven freezer temps and slow ice production when airflow stops.",
    causes: [
      "Motor winding failure after years of continuous duty",
      "Ice bridge blocking blade rotation",
      "Harness wire broken at the evaporator clip",
      "Board fan output driver burned"
    ],
    fixes: [
      "Manual defrost before assuming motor failure—ice mimics 38E",
      "Remove freezer rear panel after thaw and spin blade by hand",
      "Reseat the fan connector behind the evaporator cover",
      "Monitor 24 hours after repair before reloading a full freezer"
    ],
    when_to_call_technician: "Free blade with no RPM feedback requires freezer fan motor replacement.",
    affected_models: ["Samsung RS27T5200SR", "Samsung RF23M8070SR", "Samsung RF27T5501SR"],
    related_codes: ["41e", "33e", "37e"], difficulty: "medium", estimated_time: "30 min"
  },
  {
    brand: "samsung", appliance: "refrigerator", error_code: "37e",
    title: "Samsung Refrigerator 37E Error Code",
    summary: "Fresh food compartment fan failed",
    meta_description: "Samsung 37E means refrigerator fan motor fault. Check for ice at the damper; replace RC fan if 37E returns after thaw.",
    meaning: "37E flags the refrigerator (fresh food) fan motor—not the freezer evaporator fan. Warm milk in the door bins while the freezer still feels cold is a typical pattern before 37E appears.",
    causes: [
      "Ice blocking the RC fan at the damper opening",
      "Failed refrigerator evaporator fan motor",
      "Damper stuck closed starving the fan duct of airflow",
      "Loose CN connector at the main PCB fan output"
    ],
    fixes: [
      "Unplug and defrost 8 hours if fresh food section is warm with a cold freezer",
      "Verify the damper door between compartments opens during compressor run",
      "Listen for RC fan when the fridge calls for cooling with doors closed",
      "Keep vents inside the fridge unobstructed—no items against the rear panel"
    ],
    when_to_call_technician: "Clear damper with silent RC fan after defrost needs refrigerator fan motor service.",
    affected_models: ["Samsung RF28R7351SG", "Samsung RF28R6241SR", "Samsung RF23M8590SG"],
    related_codes: ["38e", "34e", "31e"], difficulty: "medium", estimated_time: "30 min"
  },
  {
    brand: "samsung", appliance: "refrigerator", error_code: "36e",
    title: "Samsung Refrigerator 36E Error Code",
    summary: "Ice duct heater open circuit",
    meta_description: "Samsung 36E means FF ice duct heater fault. Measure ~135 Ω at CN79/CN51; replace heater if open.",
    meaning: "36E is an Ice Duct Heater error—the resistive heater that keeps the air channel between ice maker and fresh food free of frost reads open. Without it, frost blocks the duct and warm spots develop in the fridge section.",
    causes: [
      "Connector CN79 or CN51 loose at the main PCB",
      "Heater element open from thermal stress",
      "Wire break in the duct harness from door swing fatigue",
      "Shorted heater tripping the bimetal cutout open"
    ],
    fixes: [
      "Breaker off five minutes for reset—36E from a one-time glitch may clear once",
      "Inspect visible wiring at the ice duct cover for unplugged connectors",
      "Avoid blocking the ice duct vent with tall containers",
      "Schedule service if 36E returns within 48 hours of reset"
    ],
    when_to_call_technician: "Technicians measure 135 Ω ±7% across the ice duct heater circuit—open reading confirms heater replacement.",
    affected_models: ["Samsung RF23M8590SG", "Samsung RF28R7351SG", "Samsung RF23M8070SR"],
    related_codes: ["35e", "33e", "39e"], difficulty: "hard", estimated_time: "Call technician"
  },
  {
    brand: "samsung", appliance: "refrigerator", error_code: "35e",
    title: "Samsung Refrigerator 35E Error Code",
    summary: "Fridge ice maker heater circuit open",
    meta_description: "Samsung 35E flags fridge-side ice maker heater failure. Ice stuck in mold; service ice maker module if harvest fails repeatedly.",
    meaning: "35E is an Ice Maker (FF) Function Error—the heater that releases cubes from the fridge-compartment mold reads open. Harvest stalls with ice frozen in the tray and 35E on the display.",
    causes: [
      "Ice maker housing shifted stressing the heater wires",
      "Corroded connector at the ice maker harness",
      "Open heater element inside the module",
      "Thermal fuse in the ice maker circuit blown"
    ],
    fixes: [
      "Remove stuck cubes manually after unplugging—never pry with metal tools on the mold",
      "Toggle ice maker off 24 hours to let the module dry if moisture triggered once",
      "Verify water fill works on the next cycle before blaming heat only",
      "Breaker reset five minutes before re-enabling ice maker"
    ],
    when_to_call_technician: "35E with good fill and empty harvest requires fridge ice maker assembly replacement.",
    affected_models: ["Samsung RF28R6241SR", "Samsung RF23M8590SG", "Samsung RF28R7351SG"],
    related_codes: ["28e", "36e", "39e"], difficulty: "hard", estimated_time: "Call technician"
  },
  {
    brand: "samsung", appliance: "refrigerator", error_code: "34e",
    title: "Samsung Refrigerator 34E Error Code",
    summary: "Fresh food defrost heater fault",
    meta_description: "Samsung 34E means FF defrost heater error. Check ~120 Ω at CN70 white/gray wires; defrost may run 80 min without finishing.",
    meaning: "34E flags the fresh food compartment defrost heater circuit—open, shorted, or defrost ran 80 continuous minutes without completing. Frost builds on the RC evaporator until airflow stops and the fridge section warms.",
    causes: [
      "Blown thermal fuse in the FF defrost loop",
      "Open defrost heater element",
      "Bimetal thermostat stuck open",
      "Wire separation at the heater housing clip"
    ],
    fixes: [
      "Manual defrost 12 hours to buy time if the fridge is warming",
      "Keep doors closed minimally during defrost outage to protect food",
      "Breaker reset five minutes after thaw before judging 34E clearance",
      "Vacuum rear condenser coils—poor heat rejection worsens defrost load"
    ],
    when_to_call_technician: "34E after defrost needs CN70 resistance test—120 Ω ±7% spec—or heater/fuse replacement.",
    affected_models: ["Samsung RF28R7351SG", "Samsung RF27T5501SR", "Samsung RF23M8070SR"],
    related_codes: ["37e", "33e", "27e"], difficulty: "hard", estimated_time: "Call technician"
  },
  {
    brand: "samsung", appliance: "refrigerator", error_code: "33e",
    title: "Samsung Refrigerator 33E Error Code",
    summary: "Ice pipe heater failure",
    meta_description: "Samsung 33E means ice pipe heater error. Unplug 30 minutes to reset; persistent 33E needs heater service.",
    meaning: "33E indicates the heater wrapped around the ice maker fill pipe failed—the pipe freezes and water cannot reach the mold. Ice production stops even when the freezer temperature reads normal.",
    causes: [
      "Open ice pipe heater element",
      "Connector loose at the main PCB heater output",
      "Fill tube frozen from prior heater failure compounding the fault",
      "Shorted heater blowing the inline fuse"
    ],
    fixes: [
      "Unplug 30 minutes per Samsung guidance, then restore power once",
      "Thaw the visible fill tube with low heat if no water enters the mold",
      "Turn ice maker off until 33E clears to avoid burned fill valve",
      "Check freezer temp is at 0 °F—warm freezer accelerates pipe freeze"
    ],
    when_to_call_technician: "33E returning after pipe thaw requires ice pipe heater replacement—access from the ice maker area.",
    affected_models: ["Samsung RF23M8590SG", "Samsung RF28R7351SG", "Samsung RF28R6241SR"],
    related_codes: ["29e", "35e", "39e"], difficulty: "medium", estimated_time: "30 min"
  },
  {
    brand: "samsung", appliance: "refrigerator", error_code: "32e",
    title: "Samsung Refrigerator 32E Error Code",
    summary: "Freezer compressor drive fault",
    meta_description: "Samsung 32E indicates freezer compressor error. Listen for inverter click; 32E with warm freezer needs sealed-system service.",
    meaning: "32E logs a freezer compressor or inverter fault—the linear compressor failed to start, locked, or lost communication with the main board. Both sections warm if the compressor stops entirely.",
    causes: [
      "Inverter board not sending drive signal to the compressor",
      "Compressor windings failed or seized",
      "Refrigerant leak lowering suction pressure",
      "Loose inverter harness after moving the fridge"
    ],
    fixes: [
      "Breaker off two minutes—compressor faults sometimes follow single glitches",
      "Ensure condenser coils are clean and condenser fan runs at the bottom rear",
      "Listen for a brief click at compressor start—silence with 32E is serious",
      "Move food to backup cooling if both sections are rising above safe temps"
    ],
    when_to_call_technician: "32E with no compressor hum requires inverter or compressor diagnosis—EPA-certified refrigerant work.",
    affected_models: ["Samsung RF23M8070SR", "Samsung RS27T5200SR", "Samsung RF27T5501SR"],
    related_codes: ["41e", "38e", "84c"], difficulty: "hard", estimated_time: "Call technician"
  },
  {
    brand: "samsung", appliance: "refrigerator", error_code: "31e",
    title: "Samsung Refrigerator 31E Error Code",
    summary: "Cool Select Room fan feedback error",
    meta_description: "Samsung 31E means Cool Select Room fan fault. Check 7–12 V at CN7; reseat motor harness if fan silent.",
    meaning: "31E targets the Cool Select Room fan—the independent temperature zone fan must spin and return a feedback signal at startup. Without it, that drawer warms while the rest of the fridge may still cool.",
    causes: [
      "Feedback signal line contact error at the motor plug",
      "Motor wire separation from vibration",
      "Internal motor failure—no spin on startup",
      "Main PCB not supplying 7–12 V at CN7 during fan call"
    ],
    fixes: [
      "Empty the Cool Select drawer and verify nothing blocks the vent grille",
      "Power-cycle five minutes after confirming the drawer is fully closed",
      "Listen for fan when changing Cool Select temp setpoint",
      "Avoid overfilling the drawer against the rear air slot"
    ],
    when_to_call_technician: "Correct voltage at CN7 with a silent fan requires Cool Select fan motor replacement.",
    affected_models: ["Samsung RF28R7351SG", "Samsung RF23M8590SG", "Samsung RF28R6241SR"],
    related_codes: ["27e", "37e", "41e"], difficulty: "medium", estimated_time: "30 min"
  },
  {
    brand: "samsung", appliance: "refrigerator", error_code: "30e",
    title: "Samsung Refrigerator 30E Error Code",
    summary: "Ice maker compartment fan error",
    meta_description: "Samsung 30E flags ice maker fan failure. Defrost ice around the fan duct; replace motor if 30E persists.",
    meaning: "30E means the fan that moves cold air through the ice maker compartment failed—related to 40E on some model years. Ice production slows and the ice bucket area may feel warm to the touch.",
    causes: [
      "Frost locking the ice maker fan blade",
      "Failed fan motor in the ice duct",
      "Door gasket leak letting humid air into the ice zone",
      "Defrost system fault refreezing weekly"
    ],
    fixes: [
      "Turn ice maker off and defrost the ice compartment 6–8 hours",
      "Verify the ice bucket is seated and the duct cover is installed",
      "Clean the door gasket track—sticky seals cause warm air infiltration",
      "Retry ice maker after 24 hours stable operation below 0 °F freezer"
    ],
    when_to_call_technician: "30E after thorough defrost with a free blade needs ice maker fan motor replacement.",
    affected_models: ["Samsung RF23M8590SG", "Samsung RF28R7351SG", "Samsung RF23M8070SR"],
    related_codes: ["40e", "29e", "33e"], difficulty: "medium", estimated_time: "30 min"
  },
  {
    brand: "samsung", appliance: "refrigerator", error_code: "29e",
    title: "Samsung Refrigerator 29E Error Code",
    summary: "Ice room temperature sensor invalid",
    meta_description: "Samsung 29E means ice room sensor fault. Reseat CN30 pins 8–9; voltage should read 1.0–4.5 V when active.",
    meaning: "29E is an Ice Room Temperature Sensor error—the thermistor in the ice maker section sent readings outside the valid range. The board stops ice maker operation until the sensor circuit is trustworthy.",
    causes: [
      "Sensor connector unplugged at CN30 on the main PCB",
      "Cut or shorted wire in the ice room harness",
      "Failed ice room thermistor element",
      "Moisture corrosion at the sensor jack after defrost overflow"
    ],
    fixes: [
      "Breaker off five minutes, reseat the ice room sensor plug at the board",
      "Dry the sensor area if frost melt recently pooled in the ice duct",
      "Toggle ice maker off/on after reset",
      "Allow one hour after reseat before judging 29E clearance"
    ],
    when_to_call_technician: "Technicians verify 1.0–4.5 V at CN30 pins 8–9 and ohm the sensor against Samsung spec.",
    affected_models: ["Samsung RF28R6241SR", "Samsung RF23M8590SG", "Samsung RF28R7351SG"],
    related_codes: ["28e", "30e", "39e"], difficulty: "medium", estimated_time: "30 min"
  },
  {
    brand: "samsung", appliance: "refrigerator", error_code: "28e",
    title: "Samsung Refrigerator 28E Error Code",
    summary: "Fridge ice maker ejector motor failed",
    meta_description: "Samsung 28E means ice maker motor rotation fault at self-test. Clear ice jams; replace module if ejector won't turn.",
    meaning: "28E fires when the fridge-compartment ice maker ejector motor fails its startup rotation check—cubes stay frozen in the mold and the harvest cycle aborts. Distinct from 39E which is a broader function fault.",
    causes: [
      "Ice jam blocking the ejector rake",
      "Stripped drive gear inside the ice maker module",
      "Failed ejector motor winding",
      "Loose harness at the ice maker connector"
    ],
    fixes: [
      "Remove the bucket and clear visible ice bridging the ejector path",
      "Reset ice maker arm or toggle off/on at the panel",
      "Never force the ejector manually with power on—motor damage risk",
      "Run one harvest cycle empty after clearing jam"
    ],
    when_to_call_technician: "28E with clear mold and silent ejector requires ice maker module replacement.",
    affected_models: ["Samsung RF28R7351SG", "Samsung RF23M8070SR", "Samsung RF28R6241SR"],
    related_codes: ["35e", "39e", "29e"], difficulty: "hard", estimated_time: "Call technician"
  },
  {
    brand: "samsung", appliance: "refrigerator", error_code: "27e",
    title: "Samsung Refrigerator 27E Error Code",
    summary: "Pantry or Flex Zone damper heater fault",
    meta_description: "Samsung 27E (27C) means damper heater open in Pantry/Flex Room. Measure ~135 Ω at CN74; ice on damper follows heater failure.",
    meaning: "27E is a Damper Heater error in the Pantry, Flex Room, or CoolSelect compartment—the small heater that keeps the damper flap ice-free reads open or shorted. The damper sticks and that zone drifts out of temperature.",
    causes: [
      "Damper heater housing separated from its mount",
      "Open bimetal thermal cutout after overheat event",
      "Loose CN74 connector pins 1 and 2 at the main PCB",
      "Shorted heater element reading 0 Ω"
    ],
    fixes: [
      "Power-cycle five minutes after noting which specialty drawer is warm",
      "Verify the Flex or Pantry drawer is not overfilled against the damper vent",
      "Listen for damper movement when changing that zone's setpoint",
      "Manual defrost that zone area if ice visibly blocks the flap"
    ],
    when_to_call_technician: "Technicians measure 135 Ω ±7% at CN74 for the damper heater—open circuit needs heater or damper assembly.",
    affected_models: ["Samsung RF32FMQDBSR", "Samsung RF28R7351SG", "Samsung RF23M8590SG"],
    related_codes: ["31e", "34e", "37e"], difficulty: "hard", estimated_time: "Call technician"
  }
];
