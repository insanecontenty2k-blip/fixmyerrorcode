/** Researched unique copy — Bosch dryer codes. Sources: Bosch Home US dryer error codes, Coolblue, Express Appliances */
export default [
  {
    brand: "bosch", appliance: "dryer", error_code: "e01",
    title: "Bosch Dryer E01 Error Code",
    summary: "Lint filter airflow sensor blocked",
    meta_description: "Bosch E01 means restricted airflow at the lint filter. Clean the screen, vacuum the filter slot, and rinse the mesh on heat-pump models.",
    meaning: "E01 is Bosch's early airflow warning—the lint filter sensor detects restricted exhaust before critical overheating. Heat-pump models like the WTG86400 series will continue running but drying times stretch and the display holds E01 until airflow improves.",
    causes: [
      "Lint screen packed after several loads without cleaning",
      "Secondary mesh filter on heat-pump models caked with fine lint",
      "Filter installed upside down or not fully seated in the track",
      "Moisture sensor strips coated with dryer-sheet residue near the filter housing"
    ],
    fixes: [
      "Pull the lint screen and peel off all lint—rinse under warm water on washable filters",
      "Vacuum the filter channel inside the door opening",
      "On heat-pump dryers, remove and rinse the condenser cartridge per the maintenance flap guide",
      "Run one timed cycle and confirm E01 clears in the first five minutes"
    ],
    when_to_call_technician: "If E01 returns immediately after a fully cleaned filter and condenser, the airflow sensor or blower housing needs service.",
    affected_models: ["Bosch WTG86401UC", "Bosch WTG865H4UC", "Bosch WQB245AXUC"],
    related_codes: ["e03", "e12", "e05"],
    difficulty: "easy", estimated_time: "10 min"
  },
  {
    brand: "bosch", appliance: "dryer", error_code: "e03",
    title: "Bosch Dryer E03 Error Code",
    summary: "Condensation drain hose blocked or kinked",
    meta_description: "Bosch E03 means the condensation drain path is restricted. Straighten the drain hose, clean the siphon, and verify the wall drain accepts water.",
    meaning: "E03 on Bosch condenser and heat-pump dryers means the condensation drainage hose is blocked, kinked, or installed too high. Water that should leave the condenser backs up and triggers E03—distinct from lint-related E01.",
    causes: [
      "Drain hose looped above the 1 m maximum height in the install manual",
      "Kink where the hose passes through a cabinet wall",
      "Siphon connector at the standpipe clogged with lint slurry",
      "Frozen condensate line in unheated utility rooms during winter"
    ],
    fixes: [
      "Trace the drain hose from the dryer rear to the standpipe without lifting above shoulder height",
      "Detach the hose at the siphon, flush with warm water, and clear the connector",
      "Confirm the standpipe is not sealed airtight—Bosch requires an air gap",
      "Run a timed dry cycle and watch for water entering the drain during the first ten minutes"
    ],
    when_to_call_technician: "E03 with a verified open hose and active wall drain may indicate a failed condensate pump on plumbed heat-pump models.",
    affected_models: ["Bosch WTG86401UC", "Bosch WQB245B0UC", "Bosch WTG865H4UC"],
    related_codes: ["e01", "e18", "e17"],
    difficulty: "easy", estimated_time: "10 min"
  },
  {
    brand: "bosch", appliance: "dryer", error_code: "e05",
    title: "Bosch Dryer E05 Error Code",
    summary: "Main control board relay fault",
    meta_description: "Bosch E05 indicates an electronic relay error on the dryer control board. Reset the breaker; recurring E05 needs authorized service.",
    meaning: "E05 is grouped with Bosch electronic fault codes indicating a relay or driver failure on the main control board. The drum may not start, heat may not engage, or the display may flash E05 at power-up after a surge.",
    causes: [
      "Power surge through the laundry circuit during a storm",
      "Relay welded after prior overheating from blocked airflow",
      "Loose neutral at the dryer terminal block causing erratic board voltage",
      "Control board moisture after condensate leak in the base"
    ],
    fixes: [
      "Turn off the dryer breaker for thirty seconds, then restore power",
      "Verify the cord or junction connections are tight and the outlet delivers stable 240V on electric models",
      "Run one empty timed cycle after reset before loading clothes",
      "Stop using the dryer if E05 returns at startup without any cycle run"
    ],
    when_to_call_technician: "Bosch lists E05-class faults as technician-only—board relay testing and replacement require authorized service.",
    affected_models: ["Bosch WTG86401UC", "Bosch WQB245AXUC", "Bosch WTG865H4UC"],
    related_codes: ["e06", "e08", "e09"],
    difficulty: "hard", estimated_time: "Call technician"
  },
  {
    brand: "bosch", appliance: "dryer", error_code: "e06",
    title: "Bosch Dryer E06 Error Code",
    summary: "Heating element circuit failure",
    meta_description: "Bosch E06 means the heating element failed or reads open. Unplug, inspect connections, and schedule service—E63 is the newer equivalent code.",
    meaning: "E06 on older Bosch dryer firmware indicates heating element failure—the drum tumbles but exhaust air stays cool and the cycle runs without drying. Newer models often show E63 for the same fault; troubleshooting is identical.",
    causes: [
      "Open heating element coil after years of high-heat cycles",
      "Loose spade connector at the element terminal block",
      "Tripped thermal fuse in series with the element from prior overheating",
      "Control board heat relay not sending voltage to the element"
    ],
    fixes: [
      "Unplug the dryer before inspecting any rear-panel connections",
      "Check whether the drum turns but laundry stays cold and damp after forty minutes",
      "Reset breaker thirty seconds once—do not repeatedly force heat cycles if E06 persists",
      "Note model and serial from the door jamb tag before calling service"
    ],
    when_to_call_technician: "Element, thermal fuse, and relay testing require rear-panel access and live voltage checks—Bosch recommends authorized repair for E06.",
    affected_models: ["Bosch WTG86401UC", "Bosch WTG865H4UC", "Bosch WQB245B0UC"],
    related_codes: ["e08", "e09", "e12"],
    difficulty: "hard", estimated_time: "Call technician"
  },
  {
    brand: "bosch", appliance: "dryer", error_code: "e07",
    title: "Bosch Dryer E07 Error Code",
    summary: "Moisture sensor signal invalid",
    meta_description: "Bosch E07 means the drum moisture sensor failed. Clean the two metal strips inside the door opening with rubbing alcohol.",
    meaning: "E07 reports a fault in the moisture sensing circuit—the two curved metal strips inside the drum opening did not send valid conductivity readings. Auto-dry programs stop early or refuse to start because the board cannot judge remaining dampness.",
    causes: [
      "Dryer-sheet residue insulating the moisture sensor bars",
      "Corrosion on sensor strips in humid laundry rooms",
      "Broken wire at the sensor harness inside the front bulkhead",
      "Control board moisture input circuit failure"
    ],
    fixes: [
      "Unplug and wipe both curved metal strips inside the door opening with isopropyl alcohol on a soft cloth",
      "Avoid dryer sheets for one test cycle—or use a timed dry program to bypass auto-dry sensing",
      "Inspect strips for bending or damage from zippers scraping the drum lip",
      "Reset power thirty seconds after cleaning and run a medium timed cycle"
    ],
    when_to_call_technician: "E07 on timed dry with clean strips points to sensor harness or board replacement behind the front panel.",
    affected_models: ["Bosch WTG86401UC", "Bosch WQB245AXUC", "Bosch WTG865H4UC"],
    related_codes: ["e01", "e16", "e10"],
    difficulty: "easy", estimated_time: "10 min"
  },
  {
    brand: "bosch", appliance: "dryer", error_code: "e08",
    title: "Bosch Dryer E08 Error Code",
    summary: "Electronic control fault on heat circuit",
    meta_description: "Bosch E08 is an electronic heat-circuit error. Reset the breaker once; persistent E08 requires a Bosch authorized technician.",
    meaning: "E08 is among Bosch dryer electronic fault codes tied to heat regulation electronics. The display may show E08 at cycle start or mid-dry when the board detects an invalid heat circuit signal—often after E01 or E12 airflow warnings were ignored.",
    causes: [
      "Control board heat driver failure after repeated thermal stress",
      "Communication error between UI and power board on heat-pump models",
      "Voltage drop on a shared laundry circuit during element engagement",
      "Prior E12 overheating event damaging board traces"
    ],
    fixes: [
      "Turn off breaker thirty seconds and restore—single reset only",
      "Ensure lint filter and condenser are clean before retrying after E08",
      "Avoid extension cords or shared circuits with the washer motor",
      "Do not open rear panels unless qualified—capacitors hold charge"
    ],
    when_to_call_technician: "Bosch groups E08 with codes requiring authorized service—board-level repair is not a typical DIY fix.",
    affected_models: ["Bosch WQB245B0UC", "Bosch WTG865H4UC", "Bosch WTG86401UC"],
    related_codes: ["e06", "e09", "e05"],
    difficulty: "hard", estimated_time: "Call technician"
  },
  {
    brand: "bosch", appliance: "dryer", error_code: "e09",
    title: "Bosch Dryer E09 Error Code",
    summary: "Heat pump or element regulation fault",
    meta_description: "Bosch E09 indicates a heat regulation electronic fault. Clean airflow paths, reset power, then contact Bosch support if E09 returns.",
    meaning: "E09 on Bosch heat-pump dryers indicates an electronic fault in the heat regulation path—grouped with E06 and E08 on the official chart. Heat output stops even though the drum may continue tumbling on some firmware versions.",
    causes: [
      "Heat pump module communication loss after condenser overheating",
      "Refrigerant circuit fault on sealed heat-pump systems",
      "Board relay failure preventing compressor or element activation",
      "Thermal cutoff opened from prior lint blockage"
    ],
    fixes: [
      "Clean lint filter, condenser, and drain hose before any retry",
      "Reset breaker thirty seconds per Bosch guidance",
      "Run a timed cycle on low heat to test—avoid high heat until E09 clears",
      "Record whether the exhaust air ever warms during the test cycle"
    ],
    when_to_call_technician: "Recurring E09 after full maintenance cleaning requires heat-pump module or board service—refrigerant work is sealed-system only.",
    affected_models: ["Bosch WQB245AXUC", "Bosch WTG865H4UC", "Bosch WTG86401UC"],
    related_codes: ["e06", "e08", "e12"],
    difficulty: "hard", estimated_time: "Call technician"
  },
  {
    brand: "bosch", appliance: "dryer", error_code: "e10",
    title: "Bosch Dryer E10 Error Code",
    summary: "Drum drive motor not reaching speed",
    meta_description: "Bosch E10 means the drum motor faulted. Check for a jammed drum, reset power, and service the motor if E10 persists empty.",
    meaning: "E10 indicates the drum motor did not reach operating speed after start—the belt, motor, or motor capacitor failed to turn the drum at the expected RPM. You may hear a hum with no rotation, or the drum moves briefly then stops with E10.",
    causes: [
      "Broken drive belt off the motor pulley",
      "Motor capacitor failure on older Bosch condenser models",
      "Foreign object wedged between drum and cabinet",
      "Seized motor bearings after long idle storage"
    ],
    fixes: [
      "Unplug and try rotating the drum by hand—it should turn smoothly with slight belt resistance",
      "Remove any visible obstruction through the lint filter opening only—do not reach into moving parts powered",
      "Reset breaker thirty seconds and run a short timed cycle with an empty drum",
      "Listen for motor hum without drum movement—that pattern confirms drive failure"
    ],
    when_to_call_technician: "Empty-drum E10 after reset requires belt, capacitor, or motor replacement with rear-panel access.",
    affected_models: ["Bosch WTG86401UC", "Bosch WTG865H4UC", "Bosch WQB245B0UC"],
    related_codes: ["e04", "e16", "e07"],
    difficulty: "hard", estimated_time: "Call technician"
  },
  {
    brand: "bosch", appliance: "dryer", error_code: "e12",
    title: "Bosch Dryer E12 Error Code",
    summary: "Heat pump overheating from limescale or blocked airflow",
    meta_description: "Bosch E12 means overheating—often limescale in the heat pump or blocked lint paths. Clean filter, condenser, and vent; allow cooldown before retry.",
    meaning: "E12 on Bosch heat-pump dryers signals overheating—official guidance cites limescale buildup in the heat pump when airflow was already restricted. The dryer shuts down to protect the sealed refrigeration circuit and heating components.",
    causes: [
      "Limescale coating the heat exchanger in hard-water regions",
      "Lint-blocked condenser after skipping maintenance cycles",
      "Crushed vent transition on vented hybrid installs",
      "Thermal limiter tripped from a prior long cycle on a packed drum"
    ],
    fixes: [
      "Allow the dryer to cool completely—thirty minutes minimum—before any work",
      "Clean the lint filter and rinse the removable condenser under running water",
      "Run Bosch's basic appliance care program if your model displays CrE reminders",
      "Descale per manual if you are in a hard-water area and E12 followed months of heavy use"
    ],
    when_to_call_technician: "E12 returning immediately after condenser cleaning and care program may require heat-pump service or thermal limiter replacement.",
    affected_models: ["Bosch WQB245AXUC", "Bosch WTG865H4UC", "Bosch WTG86401UC"],
    related_codes: ["e01", "e03", "e09"],
    difficulty: "medium", estimated_time: "30 min"
  },
  {
    brand: "bosch", appliance: "dryer", error_code: "e14",
    title: "Bosch Dryer E14 Error Code",
    summary: "Ambient room temperature too low to run",
    meta_description: "Bosch E14 appears when room temp is below the minimum for heat-pump drying. Warm the laundry room or wait for milder conditions.",
    meaning: "E14 means ambient temperature is outside the operating window—heat-pump Bosch dryers often require roughly 41°F (5°C) minimum at the installation location. Cold garages and unheated mudrooms trigger E14 at startup because the heat pump cannot extract moisture efficiently.",
    causes: [
      "Dryer installed in an unheated garage below minimum ambient temp",
      "Cold snap dropping laundry room temperature overnight",
      "Heat pump refrigerant pressure too low in extreme cold",
      "Faulty ambient sensor reading colder than actual room temp"
    ],
    fixes: [
      "Raise room temperature or relocate drying to a heated space temporarily",
      "Wait until indoor temperature rises above the manual minimum before restarting",
      "Close garage doors and run a small heater in the utility area if safe and permitted",
      "Retry on a timed program once the room has warmed for an hour"
    ],
    when_to_call_technician: "E14 in a heated room above 50°F suggests ambient sensor or heat-pump board fault—not an environmental limit.",
    affected_models: ["Bosch WQB245B0UC", "Bosch WQB245AXUC", "Bosch WTG865H4UC"],
    related_codes: ["e12", "e01", "e03"],
    difficulty: "easy", estimated_time: "10 min"
  },
  {
    brand: "bosch", appliance: "dryer", error_code: "e15",
    title: "Bosch Dryer E15 Error Code",
    summary: "Condensate collection tank full",
    meta_description: "Bosch E15 means the internal water tank is full on tank-drain models. Empty the reservoir and confirm drain-hose routing if plumbed.",
    meaning: "E15 on Bosch condenser dryers with a removable tank means the condensate reservoir is full—the machine stops to prevent overflow. On plumbed installs, E15 can also appear when condensate cannot reach the drain despite an empty tank symbol.",
    causes: [
      "Condensate tank not emptied after several cycles",
      "Tank seated incorrectly on the drawer rails",
      "Plumbed drain hose looped too high blocking gravity flow",
      "Float switch stuck in the tank housing"
    ],
    fixes: [
      "Pull the condensate drawer from the upper panel and empty it at a sink",
      "Rinse the tank, dry the float area, and reseat until it clicks",
      "On plumbed models, verify the drain hose has no loop above one meter",
      "Run a short timed cycle and watch whether water enters the tank or wall drain"
    ],
    when_to_call_technician: "E15 with an empty, well-seated tank on a plumbed install may need condensate pump or float switch service.",
    affected_models: ["Bosch WTG86401UC", "Bosch WTG865H4UC", "Bosch WQB245B0UC"],
    related_codes: ["e03", "e18", "e17"],
    difficulty: "easy", estimated_time: "10 min"
  },
  {
    brand: "bosch", appliance: "dryer", error_code: "e16",
    title: "Bosch Dryer E16 Error Code",
    summary: "Door opened during an active cycle",
    meta_description: "Bosch E16 records that the door opened mid-cycle. Close firmly and press Start—or enable child lock to prevent repeats.",
    meaning: "E16 is informational—the door switch opened while the dryer was running. Bosch stops the drum and heat as a safety measure. The code clears when you close the door and restart; it is not a hardware failure unless E16 appears without anyone opening the door.",
    causes: [
      "User opened the door to add an item mid-cycle",
      "Door not fully latched after closing",
      "Weak door catch allowing vibration to break contact",
      "Failed door switch reading open when door is shut"
    ],
    fixes: [
      "Close the door firmly at the center until the latch clicks",
      "Press Start to resume the interrupted program",
      "Enable child lock if children frequently open the door during cycles",
      "Inspect the door gasket for bulges that prevent full closure"
    ],
    when_to_call_technician: "E16 without any door opening suggests a worn latch or switch—replace when the door visibly closes but E16 returns every start.",
    affected_models: ["Bosch WTG86401UC", "Bosch WQB245AXUC", "Bosch WTG865H4UC"],
    related_codes: ["e01", "e07", "e10"],
    difficulty: "easy", estimated_time: "10 min"
  },
  {
    brand: "bosch", appliance: "dryer", error_code: "e17",
    title: "Bosch Dryer E17 Error Code",
    summary: "Maximum drying time reached without finish",
    meta_description: "Bosch E17 means the four-hour dry limit was hit. Reduce load size, clean lint paths, and verify heat output.",
    meaning: "E17 appears when Bosch's built-in maximum drying duration—about four hours on many models—is reached without the moisture sensor detecting dry clothes. Clothes remain damp and the cycle terminates with E17 to prevent endless run time.",
    causes: [
      "Overloaded drum preventing tumbling and evaporation",
      "Blocked lint filter or condenser reducing heat and airflow",
      "Heating fault causing cold tumbling only",
      "Auto-dry sensor coated so the board never sees dry readings"
    ],
    fixes: [
      "Split the load—clothes should tumble freely with a hand-width gap at the top",
      "Complete E01 cleaning steps for filter and condenser before retrying",
      "Use timed dry on medium heat to test whether exhaust air warms",
      "Clean moisture sensor strips with isopropyl alcohol if auto-dry never completes"
    ],
    when_to_call_technician: "E17 on small loads with warm exhaust points to sensor or control faults; cold exhaust with E17 suggests heating service.",
    affected_models: ["Bosch WTG86401UC", "Bosch WTG865H4UC", "Bosch WQB245AXUC"],
    related_codes: ["e04", "e03", "e12"],
    difficulty: "medium", estimated_time: "30 min"
  },
  {
    brand: "bosch", appliance: "dryer", error_code: "e18",
    title: "Bosch Dryer E18 Error Code",
    summary: "Condensate pump or drain path blocked",
    meta_description: "Bosch E18 means condensate cannot leave the dryer. Clear the drain hose, pump filter, and standpipe connection.",
    meaning: "E18 signals condensate removal failure—water from the heat exchanger cannot exit through the drain hose or internal pump. Distinct from E03 kink faults, E18 often means a clog or failed pump on plumbed heat-pump dryers.",
    causes: [
      "Sludge clog in the condensate drain hose",
      "Pump impeller blocked by lint entering the drain circuit",
      "Standpipe blocked at the wall connection",
      "Failed condensate pump motor on auto-drain models"
    ],
    fixes: [
      "Unplug and disconnect the drain hose at both ends—flush with warm water",
      "Check the pump access area per your manual for debris in the impeller",
      "Verify the standpipe accepts water from a bucket pour test",
      "Run a timed cycle and listen for pump operation in the first ten minutes"
    ],
    when_to_call_technician: "E18 with a clear hose and active standpipe usually requires condensate pump replacement inside the cabinet.",
    affected_models: ["Bosch WQB245B0UC", "Bosch WQB245AXUC", "Bosch WTG865H4UC"],
    related_codes: ["e03", "e15", "e17"],
    difficulty: "medium", estimated_time: "30 min"
  },
  {
    brand: "bosch", appliance: "dryer", error_code: "e19",
    title: "Bosch Dryer E19 Error Code",
    summary: "Control board communication error",
    meta_description: "Bosch E19 indicates lost communication between dryer control modules. Reset breaker once; recurring E19 needs board service.",
    meaning: "E19 means internal communication failure between the user interface board and the power or heat-pump control module. The display may freeze, cycles may cancel randomly, or E19 appears at power-up after electrical disturbance.",
    causes: [
      "Loose ribbon cable between UI and power board after moving the dryer",
      "Power surge damaging UART communication lines",
      "Moisture on connectors after condensate leak into the base",
      "Failed sub-PCB after prior E12 overheating event"
    ],
    fixes: [
      "Turn off breaker thirty seconds—single reset attempt",
      "Ensure the dryer cord is fully seated at the junction block",
      "Avoid running on an extension cord or overloaded laundry circuit",
      "Note whether E19 appears at every power-on or only mid-cycle"
    ],
    when_to_call_technician: "Persistent E19 after one reset requires UI or power board replacement—match parts to the door-jamb model number.",
    affected_models: ["Bosch WTG86401UC", "Bosch WQB245AXUC", "Bosch WTG865H4UC"],
    related_codes: ["e05", "e08", "e09"],
    difficulty: "hard", estimated_time: "Call technician"
  }
];
