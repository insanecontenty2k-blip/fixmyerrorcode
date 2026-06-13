/** Researched unique copy — Bosch dishwasher codes. Sources: Bosch Home US dishwasher error codes, ServiceWorks Academy */
export default [
  {
    brand: "bosch", appliance: "dishwasher", error_code: "e15",
    title: "Bosch Dishwasher E15 Error Code",
    summary: "Water detected in the base flood pan",
    meta_description: "Bosch E15 activates AquaStop when water hits the base tray. Turn off supply, dry the pan, and find the leak before running again.",
    meaning: "E15 means the leakage protection float in the sealed base pan detected water. Bosch cuts inlet flow and refuses all cycles until the pan is dry—turn off the water supply at the wall when E15 first appears.",
    causes: [
      "Cracked spray arm jetting water toward the door vent",
      "Circulation pump seal weeping into the sump pan",
      "Door gasket gap along the lower edge on uneven installs",
      "Overfill from stuck inlet valve combined with drain failure"
    ],
    fixes: [
      "Turn off the dishwasher breaker and the hot water supply valve under the sink",
      "Remove the kick plate and towel-dry the base pan completely",
      "Tilt the unit backward carefully to drain residual water from the float chamber",
      "Inspect spray arms for splits and run a quick wash while watching for new moisture under the tub"
    ],
    when_to_call_technician: "E15 returning after one dry cycle usually means an internal hose, pump seal, or inlet valve is actively leaking inside the cabinet.",
    affected_models: ["Bosch SHPM88Z75N", "Bosch SHEM63W55N", "Bosch SHX878ZD5N"],
    related_codes: ["e24", "e09", "e16"],
    difficulty: "medium", estimated_time: "30 min"
  },
  {
    brand: "bosch", appliance: "dishwasher", error_code: "e24",
    title: "Bosch Dishwasher E24 Error Code",
    summary: "Drain filter blocked or pump cover loose",
    meta_description: "Bosch E24 means the dishwasher will not drain. Clean the filter, seat the pump cover, and check the disposal knockout plug.",
    meaning: "E24 displays when water remains in the tub after the drain pump runs—Bosch's most common owner-fixable code. The drain filter, loose pump cover, or blocked hose prevents water from falling below the level sensor.",
    causes: [
      "Cylindrical filter clogged with food paste and glass grit",
      "Pump cover under the filter not clicked fully into place",
      "Garbage disposal knockout plug still blocking the drain port on new installs",
      "Drain hose sagging below the sink trap without a high loop"
    ],
    fixes: [
      "Remove the lower rack and twist out the filter assembly—rinse all sections under hot tap water",
      "Lift the pump cover with a spoon handle until it clicks down—Bosch manuals show the pry point",
      "Confirm the drain hose loops up to the underside of the counter before dropping to the disposal",
      "Run Cancel/Drain and listen for pump hum with falling water level"
    ],
    when_to_call_technician: "E24 with a clean filter and verified hose often means a failed drain pump or jammed check valve requiring tub removal.",
    affected_models: ["Bosch SHE53B75UC", "Bosch SHPM65Z55N", "Bosch SHX5AVF5UC"],
    related_codes: ["e15", "e09", "e14"],
    difficulty: "easy", estimated_time: "10 min"
  },
  {
    brand: "bosch", appliance: "dishwasher", error_code: "e09",
    title: "Bosch Dishwasher E09 Error Code",
    summary: "Heat pump internal heater fault",
    meta_description: "Bosch E09 means the heat pump heater failed on CrystalDry models. Reset breaker; E09 after reset needs authorized heat-pump service.",
    meaning: "E09 indicates a heat pump internal heater fault on Bosch 800 Series and Benchmark dishwashers with CrystalDry or Zeolite drying. Sanitize and heavy cycles abort when wash water or dry air cannot reach target temperature.",
    causes: [
      "Scale buildup on the flow-through heater passage",
      "Open heating element in the heat pump module",
      "Heat pump refrigerant circuit fault on sealed systems",
      "Control board not commanding heat after prior E12 limescale event"
    ],
    fixes: [
      "Run hot water at the kitchen sink thirty seconds before starting a cycle",
      "Reset breaker thirty seconds per Bosch guidance",
      "Use Bosch descaler on an empty hot cycle if E12 appeared recently",
      "Retry on Normal without Sanitize to see if E09 is heat-pump specific"
    ],
    when_to_call_technician: "E09 after descaling and reset requires heat-pump module service—Bosch programs replacement boards in many regions.",
    affected_models: ["Bosch SHPM65Z55N", "Bosch SHX878ZD5N", "Bosch SHEM78WH5N"],
    related_codes: ["e12", "e10", "e07"],
    difficulty: "hard", estimated_time: "Call technician"
  },
  {
    brand: "bosch", appliance: "dishwasher", error_code: "e14",
    title: "Bosch Dishwasher E14 Error Code",
    summary: "Flow meter not detecting inlet water",
    meta_description: "Bosch E14 means water is not entering correctly. Open supply, clean inlet filters, and verify 10 L/min flow at the tap.",
    meaning: "E14 means flow meter failure or inadequate fill—the reed-switch flow sensor at the inlet did not register expected pulses while the inlet valve was open. Cycles may stop before wash begins or mid-fill with E14.",
    causes: [
      "Closed or partially closed hot water supply valve",
      "Inlet hose kinked when the dishwasher was pushed under the counter",
      "Clogged inlet filter screen at the valve body",
      "Failed flow meter turbine or inlet valve solenoid"
    ],
    fixes: [
      "Confirm the supply valve under the sink is fully open",
      "Inspect the inlet hose for kinks along its length to the valve",
      "Shut off water, disconnect the hose, and rinse the mesh screen in the valve port",
      "Measure roughly 10 liters per minute at the disconnected hose per Bosch spec"
    ],
    when_to_call_technician: "Strong flow at the hose with recurring E14 requires flow meter or inlet valve replacement inside the kick panel.",
    affected_models: ["Bosch SHPM88Z75N", "Bosch SHE53B75UC", "Bosch SHX5AVF5UC"],
    related_codes: ["e16", "e24", "e15"],
    difficulty: "medium", estimated_time: "30 min"
  },
  {
    brand: "bosch", appliance: "dishwasher", error_code: "e01",
    title: "Bosch Dishwasher E01 Error Code",
    summary: "Heat pump motor circuit fault at control board",
    meta_description: "Bosch E01 indicates a heat pump motor circuit error on the main board. Reset breaker once; persistent E01 needs Bosch service.",
    meaning: "E01 means a heat pump motor circuit fault at the main control board—the drive that circulates refrigerant in CrystalDry heat-pump dishwashers is not responding. The dishwasher may not start or may stop during dry phase with E01.",
    causes: [
      "Heat pump motor driver failure on the power module",
      "Loose connector at the heat pump assembly after shipping",
      "Power surge damaging the motor circuit on the board",
      "Heat pump motor seized from lack of maintenance descaling"
    ],
    fixes: [
      "Reset breaker thirty seconds per Bosch official procedure",
      "Ensure the dishwasher is on a dedicated 15A or 20A circuit without extension cords",
      "Run one empty Normal cycle after reset before loading dishes",
      "Stop using Sanitize/CrystalDry until E01 clears on a basic cycle"
    ],
    when_to_call_technician: "E01 after reset requires Bosch-certified heat pump or power module service—boards may need programming.",
    affected_models: ["Bosch SHPM88Z75N", "Bosch SHX878ZD5N", "Bosch SHEM78WH5N"],
    related_codes: ["e02", "e09", "e07"],
    difficulty: "hard", estimated_time: "Call technician"
  },
  {
    brand: "bosch", appliance: "dishwasher", error_code: "e02",
    title: "Bosch Dishwasher E02 Error Code",
    summary: "Main control board relay fault",
    meta_description: "Bosch E02 indicates a relay error on the main control board. Power-cycle at the breaker; recurring E02 requires technician repair.",
    meaning: "E02 reports a main control board relay fault—the power module relay that switches heater, pump, or valve circuits failed self-test or welded shut. Random cycle aborts or failure to start are common with E02.",
    causes: [
      "Relay failure after repeated E12 overheating from limescale",
      "Power spike on the kitchen circuit during multi-appliance use",
      "Moisture on the power module after prior E15 flooding",
      "Manufacturing defect in early production power modules"
    ],
    fixes: [
      "Turn off breaker thirty seconds and restore power once",
      "Avoid running the dishwasher alongside high-draw appliances on the same circuit",
      "Note which cycle phase triggers E02—fill, wash, or dry—for service calls",
      "Do not attempt board replacement without Bosch programming tools"
    ],
    when_to_call_technician: "Recurring E02 after a single reset requires power module replacement by a Bosch-authorized technician.",
    affected_models: ["Bosch SHPM65Z55N", "Bosch SHEM63W55N", "Bosch SHX878ZD5N"],
    related_codes: ["e01", "e04", "e05"],
    difficulty: "hard", estimated_time: "Call technician"
  },
  {
    brand: "bosch", appliance: "dishwasher", error_code: "e04",
    title: "Bosch Dishwasher E04 Error Code",
    summary: "Heater electronics failed self-test",
    meta_description: "Bosch E04 means faulty heater electronics detected at startup. Contact Bosch support—E04 is not cleared by filter cleaning.",
    meaning: "E04 means the dishwasher detected faulty heater electronics during power-on self-test—the heat pump or flow-through heater circuit read out of specification before any cycle began. Distinct from E09 which occurs during operation.",
    causes: [
      "Open heater element detected at startup",
      "Shorted heater wiring to chassis ground",
      "Power module heater driver failure",
      "Heat pump module communication error at boot"
    ],
    fixes: [
      "Reset breaker thirty seconds once",
      "Verify the dishwasher cord and junction connections are tight",
      "Do not run repeated cycles hoping E04 clears—it indicates hardware fault",
      "Record the full model number from the door edge before calling support"
    ],
    when_to_call_technician: "Bosch directs E04 to Customer Support at 1-800-944-2904—heater electronics replacement is technician work.",
    affected_models: ["Bosch SHPM88Z75N", "Bosch SHEM78WH5N", "Bosch SHX878ZD5N"],
    related_codes: ["e09", "e12", "e02"],
    difficulty: "hard", estimated_time: "Call technician"
  },
  {
    brand: "bosch", appliance: "dishwasher", error_code: "e05",
    title: "Bosch Dishwasher E05 Error Code",
    summary: "Wash arm diverter circuit fault",
    meta_description: "Bosch E05 means the wash arm diverter motor circuit failed. Reset power; E05 on every start needs board or diverter service.",
    meaning: "E05 indicates a wash arm diverter circuit fault at the main control board—the motor that switches water between upper and lower spray arms did not respond. Poor wash performance on one rack may precede E05 on AutoAir and PowerControl models.",
    causes: [
      "Diverter motor jammed by food debris in the sump",
      "Failed diverter motor windings",
      "Control board driver circuit for the diverter",
      "Loose wiring at the diverter plug under the tub"
    ],
    fixes: [
      "Reset breaker thirty seconds per Bosch procedure",
      "Remove and clean the filter—check the sump area below for seeds or glass",
      "Run a Normal cycle and listen for a brief diverter click at cycle start",
      "Avoid PowerControl lower-rack-only programs until E05 clears"
    ],
    when_to_call_technician: "E05 after filter cleaning and reset requires diverter motor or power module replacement inside the tub base.",
    affected_models: ["Bosch SHPM88Z75N", "Bosch SHPM65Z55N", "Bosch SHX878ZD5N"],
    related_codes: ["e01", "e02", "e06"],
    difficulty: "hard", estimated_time: "Call technician"
  },
  {
    brand: "bosch", appliance: "dishwasher", error_code: "e06",
    title: "Bosch Dishwasher E06 Error Code",
    summary: "Door sensor circuit fault",
    meta_description: "Bosch E06 means the door sensor circuit failed. Close the door firmly, clear rack obstructions, reset breaker if E06 persists.",
    meaning: "E06 reports a door sensor circuit fault—the switch that confirms the door is latched before fill did not send a valid signal. Bosch prevents water fill when E06 is active to avoid mid-cycle door leaks.",
    causes: [
      "Upper rack or tall pan blocking door closure",
      "Door latch switch out of alignment on the frame",
      "Broken wire in the door harness at the hinge",
      "Failed door sensor after repeated heavy slamming"
    ],
    fixes: [
      "Pull the upper rack forward and confirm nothing hits the door gasket",
      "Close the door firmly until the latch clicks—no gap at the top corner",
      "Reset breaker thirty seconds and retry on a short rinse",
      "Inspect the latch catch on the tub frame for plastic wear or cracks"
    ],
    when_to_call_technician: "E06 with a visibly flush door after reset requires door latch switch or harness replacement.",
    affected_models: ["Bosch SHE53B75UC", "Bosch SHEM63W55N", "Bosch SHX5AVF5UC"],
    related_codes: ["e16", "e15", "e05"],
    difficulty: "medium", estimated_time: "30 min"
  },
  {
    brand: "bosch", appliance: "dishwasher", error_code: "e07",
    title: "Bosch Dishwasher E07 Error Code",
    summary: "CrystalDry Zeolite fan motor defective",
    meta_description: "Bosch E07 means the Zeolite drying fan failed. Reset breaker; E07 on CrystalDry models needs fan or module service.",
    meaning: "E07 means the Zeolite (CrystalDry) fan motor is defective—the fan that moves air through the zeolite chamber for efficient drying did not report speed to the board. Dishes may wash but stay wet at cycle end with E07.",
    causes: [
      "Zeolite fan motor bearing seized",
      "Foreign debris blocking the fan blade in the dry module",
      "Harness connector loose at the heat pump assembly",
      "Control board fan driver failure after E12 limescale event"
    ],
    fixes: [
      "Reset breaker thirty seconds once",
      "Run a Normal cycle with Extra Dry disabled to test wash-only function",
      "Ensure the dishwasher has adequate side clearance for airflow per install guide",
      "Note whether E07 appears only at dry phase end"
    ],
    when_to_call_technician: "E07 after reset requires Zeolite fan or heat-pump module service on CrystalDry-equipped models.",
    affected_models: ["Bosch SHPM88Z75N", "Bosch SHX878ZD5N", "Bosch SHEM78WH5N"],
    related_codes: ["e10", "e09", "e01"],
    difficulty: "hard", estimated_time: "Call technician"
  },
  {
    brand: "bosch", appliance: "dishwasher", error_code: "e08",
    title: "Bosch Dishwasher E08 Error Code",
    summary: "Heat exchanger or turbidity sensor fault",
    meta_description: "Bosch E08 indicates a heat exchanger sensing fault on some 500/800 models. Descale the machine; persistent E08 needs module service.",
    meaning: "E08 on select Bosch dishwashers flags a heat exchanger or water-quality sensor fault—the internal heat exchanger that preheats inlet water sent readings outside range. Often appears in hard-water areas after months without descaling.",
    causes: [
      "Limescale insulating the heat exchanger passages",
      "Turbidity or conductivity sensor coated with mineral film",
      "Heat exchanger thermistor open circuit",
      "Inlet water colder than design minimum for sensor calibration"
    ],
    fixes: [
      "Run an empty cycle with Bosch descaler at the hottest available temperature",
      "Fill the salt reservoir if your model has a water softener function",
      "Reset breaker thirty seconds after descaling completes",
      "Use rinse aid and softening salt regularly in hard-water regions"
    ],
    when_to_call_technician: "E08 returning within a week after descaling suggests heat exchanger sensor or module replacement.",
    affected_models: ["Bosch SHPM65Z55N", "Bosch SHEM63W55N", "Bosch SHX5AVF5UC"],
    related_codes: ["e12", "e09", "e14"],
    difficulty: "medium", estimated_time: "30 min"
  },
  {
    brand: "bosch", appliance: "dishwasher", error_code: "e10",
    title: "Bosch Dishwasher E10 Error Code",
    summary: "Zeolite chamber heater fault",
    meta_description: "Bosch E10 means the CrystalDry zeolite chamber heater failed. Reset breaker; E10 requires heat-pump drying module service.",
    meaning: "E10 indicates a Zeolite (CrystalDry) chamber heater fault—the heater that regenerates the zeolite material for efficient drying did not reach target temperature. Premium Bosch models show E10 during or after the dry phase when dishes remain wet.",
    causes: [
      "Open zeolite chamber heater element",
      "Heat pump module relay not powering the chamber heater",
      "Thermal fuse opened in the dry module from prior overheating",
      "Control board dry-phase timer fault"
    ],
    fixes: [
      "Reset breaker thirty seconds per Bosch guidance",
      "Run a Normal wash without CrystalDry to confirm wash functions still work",
      "Ensure incoming water is hot by running the kitchen tap first",
      "Avoid Sanitize plus CrystalDry combinations until E10 clears"
    ],
    when_to_call_technician: "E10 after reset requires zeolite module or heat-pump assembly service— not a filter or hose fix.",
    affected_models: ["Bosch SHPM88Z75N", "Bosch SHX878ZD5N", "Bosch SHEM78WH5N"],
    related_codes: ["e07", "e09", "e12"],
    difficulty: "hard", estimated_time: "Call technician"
  },
  {
    brand: "bosch", appliance: "dishwasher", error_code: "e12",
    title: "Bosch Dishwasher E12 Error Code",
    summary: "Limescale buildup in the heat pump",
    meta_description: "Bosch E12 means limescale in the heat pump. Run Bosch descaler, use softening salt, and descale regularly in hard-water areas.",
    meaning: "E12 means limescale buildup in the heat pump—the sealed drying circuit cannot transfer heat efficiently until descaled. Bosch displays E12 before more serious E09 heater faults if scaling continues unchecked.",
    causes: [
      "Months of use in hard-water areas without descaling",
      "Softening salt reservoir empty on models with water softener",
      "High-temperature cycles run exclusively without maintenance washes",
      "Inlet water hardness above recommended limits"
    ],
    fixes: [
      "Purchase Bosch descaler and run an empty hottest cycle per package directions",
      "Refill softening salt in the base compartment if equipped",
      "Run a monthly maintenance wash at 140°F or higher with citric acid or Bosch cleaner",
      "Reset breaker after descaling and run a test cycle without dishes"
    ],
    when_to_call_technician: "E12 persisting immediately after two descaling attempts may require heat-pump professional descaling or module replacement.",
    affected_models: ["Bosch SHPM88Z75N", "Bosch SHPM65Z55N", "Bosch SHX878ZD5N"],
    related_codes: ["e09", "e10", "e08"],
    difficulty: "easy", estimated_time: "10 min"
  },
  {
    brand: "bosch", appliance: "dishwasher", error_code: "e13",
    title: "Bosch Dishwasher E13 Error Code",
    summary: "Hot water inlet valve or thermistor fault",
    meta_description: "Bosch E13 means hot water path fault. Run the kitchen tap hot first; E13 after reset may need inlet valve service.",
    meaning: "E13 on many Bosch dishwashers indicates a fault in the hot water inlet path—the valve or inlet thermistor did not deliver water at expected temperature within the fill window. Models plumbed to hot-only supply show E13 when the household water heater is distant or set too low.",
    causes: [
      "Household water heater set below 120°F",
      "Long plumbing run delivering cold slug at cycle start",
      "Hot inlet valve solenoid failed to open",
      "Inlet thermistor reading incorrectly at the valve body"
    ],
    fixes: [
      "Run the kitchen faucet until fully hot before starting the dishwasher",
      "Verify the dishwasher inlet is connected to hot supply per install manual",
      "Reset breaker thirty seconds and retry on a Normal cycle",
      "Check whether cold-only cycles complete without E13"
    ],
    when_to_call_technician: "E13 on hot cycles with verified hot tap water at the disconnected hose requires inlet valve or thermistor replacement.",
    affected_models: ["Bosch SHE53B75UC", "Bosch SHEM63W55N", "Bosch SHX5AVF5UC"],
    related_codes: ["e14", "e16", "e09"],
    difficulty: "medium", estimated_time: "30 min"
  },
  {
    brand: "bosch", appliance: "dishwasher", error_code: "e16",
    title: "Bosch Dishwasher E16 Error Code",
    summary: "Water not entering the tub correctly",
    meta_description: "Bosch E16 means fill system fault—water cannot enter properly. Check inlet hose, supply valve, and 10 L/min flow rate.",
    meaning: "E16 (often paired with E17 on some firmware) means water is not entering the dishwasher correctly—the fill system timed out or the level stayed too low after the inlet valve opened. Distinct from E14 which specifically flags the flow meter.",
    causes: [
      "Kinked or damaged inlet hose under the sink",
      "Supply valve closed or flow restrictor installed upstream",
      "Inlet valve screen clogged with sediment",
      "Fill phase aborted by air gap siphon effect on improper install"
    ],
    fixes: [
      "Inspect the full inlet hose path from valve to dishwasher for kinks",
      "Open the supply valve fully and remove any aftermarket flow restrictors",
      "Disconnect the hose and confirm roughly 10 liters per minute flow into a bucket",
      "Reset breaker thirty seconds after verifying supply"
    ],
    when_to_call_technician: "Confirmed strong inlet flow with recurring E16 requires inlet valve or fill pressure switch service.",
    affected_models: ["Bosch SHPM65Z55N", "Bosch SHE53B75UC", "Bosch SHX878ZD5N"],
    related_codes: ["e14", "e24", "e15"],
    difficulty: "medium", estimated_time: "30 min"
  }
];
