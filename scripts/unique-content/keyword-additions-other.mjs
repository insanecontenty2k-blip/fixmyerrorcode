/** Keyword-target additions — other brands. Sources: Bosch, Frigidaire, Kenmore, GE, Maytag service documentation */
export default [
  {
    brand: "bosch", appliance: "dishwasher", error_code: "e22",
    title: "Bosch Dishwasher E22 Error Code",
    summary: "Flood sensor triggered in base pan",
    meta_description: "Bosch dishwasher E22 means leak detected. Dry the base float, find the leak source, tilt and inspect hoses before resetting E22.",
    meaning: "E22 is Bosch's flood protection code—the polystyrene float in the base pan detected water. The inlet valve shuts immediately and the display shows E22 to keep water off your kitchen floor.",
    causes: [
      "Loose drain hose clamp dripping at the garbage disposal connection",
      "Cracked inlet hose under the kick plate weeping during fill",
      "Over-sudding from hand soap instead of dishwasher detergent",
      "Worn door gasket along the bottom edge seeping during wash"
    ],
    fixes: [
      "Turn off power at the breaker and remove the toe-kick panel",
      "Absorb water around the float until it drops freely in the base tray",
      "Inspect the sump, door gasket bottom, and hose clamps for active drips",
      "Tighten the drain hose at the high loop and disposal inlet before restoring power"
    ],
    when_to_call_technician: "E22 after one dry empty cycle points to an internal tub seal or circulation hose—requires tilt and disassembly.",
    affected_models: ["Bosch SHPM88Z75N", "Bosch SHPM65W55N", "Bosch SHEM3AY55N"],
    related_codes: ["e24", "e25", "e15"],
    difficulty: "medium", estimated_time: "30 min"
  },
  {
    brand: "frigidaire", appliance: "dishwasher", error_code: "i20",
    title: "Frigidaire Dishwasher i20 Error Code",
    summary: "Vent motor or drying fan circuit fault",
    meta_description: "Frigidaire i20 means vent error. Check door vent fan, inspect wiring at inner door top—i20 after dry phase needs vent motor.",
    meaning: "i20 on Frigidaire dishwashers indicates the vent motor or drying fan circuit failed—the control energized the vent assembly during the dry phase but did not detect proper operation. Dishes may finish wet when i20 appears.",
    causes: [
      "Vent fan motor seized from mineral buildup in the door vent housing",
      "Loose connector at the vent assembly on the inner door top",
      "Vent door linkage jammed preventing fan startup",
      "Control board relay failure on the vent fan circuit"
    ],
    fixes: [
      "Inspect the top vent grille on the door for grease or plastic film blockage",
      "Open the inner door panel and confirm the vent fan blade spins freely by hand",
      "Reseat the vent fan harness at the door liner",
      "Run a High Temp cycle and note whether i20 appears only at the dry end"
    ],
    when_to_call_technician: "Free fan blade with i20 every dry phase needs vent motor or vent assembly replacement.",
    affected_models: ["Frigidaire FGIP2468UF", "Frigidaire FDPH4316AS", "Frigidaire FGID2479SF"],
    related_codes: ["i30", "i40", "i50"],
    difficulty: "medium", estimated_time: "45 min"
  },
  {
    brand: "kenmore", appliance: "washing-machine", error_code: "f21",
    title: "Kenmore Washing Machine F21 Error Code",
    summary: "Drain cycle exceeded time limit",
    meta_description: "Kenmore washer F21 means long drain. Clean pump filter, check drain hose, reduce suds—Kenmore F21 matches Whirlpool Duet logic.",
    meaning: "F21 on Kenmore front-load washers is the long-drain fault inherited from Whirlpool Duet platform—the drain pump ran longer than about eight minutes without emptying the tub. The washer pauses and locks the door until water is removed.",
    causes: [
      "Pump filter packed with lint, coins, or bobby pins",
      "Drain hose kinked behind the washer or too deep in the standpipe",
      "Excess suds from non-HE detergent slowing pump flow",
      "Failed drain pump motor or seized impeller"
    ],
    fixes: [
      "Unplug five minutes, open the lower front access panel, and drain the emergency hose",
      "Twist out the pump clean-out filter, rinse debris, and reinstall firmly",
      "Straighten the drain hose and confirm flow at the standpipe during Spin",
      "Run Rinse & Spin with half the usual HE detergent if suds were visible"
    ],
    when_to_call_technician: "Pump hums with no water movement—the impeller or pump motor needs replacement.",
    affected_models: ["Kenmore 41302", "Kenmore 41982", "Kenmore 31652"],
    related_codes: ["f09", "f27", "f33"],
    difficulty: "easy", estimated_time: "15 min"
  },
  {
    brand: "ge", appliance: "washing-machine", error_code: "e2",
    title: "GE Washing Machine E2 Error Code",
    summary: "Fill timeout—water not reaching level",
    meta_description: "GE washer E2 means fill error. Open supply valves, clean inlet screens, check pressure switch hose on E2.",
    meaning: "E2 on GE washers indicates a fill timeout—the control opened inlet valves but the water level switch never confirmed expected fill within the programmed window. GE halts before agitation to avoid dry drum operation.",
    causes: [
      "Hot or cold supply valves closed at the wall",
      "Inlet hose screens clogged with sediment at the valve bodies",
      "Kinked inlet hoses restricting flow below minimum pressure",
      "Pressure switch air dome hose disconnected or cracked"
    ],
    fixes: [
      "Verify both supply faucets are fully open and water reaches the inlet hoses",
      "Disconnect hoses at the washer, rinse metal screens, and reconnect",
      "Inspect the clear pressure hose from the tub to the control panel for kinks",
      "Power-cycle two minutes and run a short fill cycle with an empty drum"
    ],
    when_to_call_technician: "Strong flow at disconnected hoses with E2 during fill points to inlet valve or pressure switch replacement.",
    affected_models: ["GE GFW550SSNWW", "GE GTW465ASNWW", "GE GFW850SPNRS"],
    related_codes: ["e4", "e8", "e10"],
    difficulty: "easy", estimated_time: "15 min"
  },
  {
    brand: "maytag", appliance: "dishwasher", error_code: "f8e4",
    title: "Maytag Dishwasher F8E4 Error Code",
    summary: "Water inlet flood or flow fault",
    meta_description: "Maytag dishwasher F8E4 means inlet flood detected. Check float in tub, level install, shut off supply if tub overfills.",
    meaning: "F8E4 on Maytag dishwashers reports a water inlet flood condition—the overfill float or flow sensor detected excess water entering or not draining during fill. Maytag stops the cycle to limit tub overflow.",
    causes: [
      "Overfill float disc stuck in the up position from a tilted install",
      "Inlet valve stuck open filling past normal level",
      "Suds holding the float raised at the tub front-right",
      "Actual leak into the base pan from a loose hose clamp"
    ],
    fixes: [
      "Press the float disc down gently at the tub front corner until it clicks",
      "Level the dishwasher on the door frame and adjust front legs if needed",
      "Turn off the supply faucet if the tub overfilled—bail water before restarting",
      "Remove the kick plate and towel-dry the base pan if moisture is present"
    ],
    when_to_call_technician: "F8E4 with a dry level tub and square install needs float switch or inlet valve replacement.",
    affected_models: ["Maytag MDB4949SKZ", "Maytag MDB7759AWW", "Maytag MDB8959SKZ"],
    related_codes: ["f6e4", "f9e1", "f7e1"],
    difficulty: "easy", estimated_time: "15 min"
  },
  {
    brand: "maytag", appliance: "washing-machine", error_code: "f5",
    title: "Maytag Washing Machine F5 Error Code",
    summary: "Door or lid lock circuit fault",
    meta_description: "Maytag washer F5 means door lock error. Close lid firmly, check latch tab, inspect lock assembly if F5 repeats every cycle.",
    meaning: "F5 on Maytag washers indicates a door or lid lock fault—the control did not confirm a locked position before fill or spin. On front-loaders it maps to door latch circuits; on top-load Bravos models it relates to the lid lock plunger.",
    causes: [
      "Door or lid not fully closed against the strike",
      "Broken lid lock tab on top-load models",
      "Clothing trapped in door gasket preventing closure on front-loaders",
      "Failed lock motor or switch in the latch assembly"
    ],
    fixes: [
      "Close the door or lid firmly until a single click is heard",
      "Inspect the latch tab or lid lock hole for cracks or debris",
      "Power-cycle two minutes and retry Start without opening mid-cycle",
      "On top-loaders listen for lid lock engagement before the basket spins"
    ],
    when_to_call_technician: "F5 every cycle with proper closure needs lid lock or door latch assembly replacement.",
    affected_models: ["Maytag MVW7232HW", "Maytag MHW5630HW", "Maytag MVW6500MW"],
    related_codes: ["f5e2", "f5e3", "f7e1"],
    difficulty: "medium", estimated_time: "30 min"
  },
];
