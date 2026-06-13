import { writeFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));

/** @type {import('../lib/types.ts').ErrorCodeEntry[]} */
const entries = [
  {
    brand: "lg",
    appliance: "washing-machine",
    error_code: "oe",
    title: "LG Washing Machine OE Error Code",
    summary: "Washing machine won't drain",
    meta_description:
      "LG washing machine OE error code means the washer cannot drain water. Here is what causes it and how to fix it.",
    meaning:
      "The OE error means the washing machine failed to drain water within the expected time. The control board stops the cycle when the water level sensor still reads water in the tub after the drain pump has run.",
    causes: [
      "Kinked or blocked drain hose",
      "Clogged pump filter",
      "Faulty drain pump",
      "Lid or door not closing properly",
    ],
    fixes: [
      "Check the drain hose for kinks or blockages",
      "Clean the pump filter located at the bottom front of the machine",
      "Run a spin-only cycle to test drainage",
      "If issue persists, the drain pump may need replacing",
    ],
    when_to_call_technician:
      "If cleaning the filter and checking the hose does not resolve the issue after two attempts.",
    affected_models: ["LG WM3400CW", "LG WM3900HWA", "LG WM4000HWA"],
    related_codes: ["le", "ue", "de"],
  },
  {
    brand: "lg",
    appliance: "washing-machine",
    error_code: "le",
    title: "LG Washing Machine LE Error Code",
    summary: "Motor locked, drum won't turn",
    meta_description:
      "LG washer LE error indicates a locked motor rotor. Learn how to reset the machine and when the stator assembly may be at fault.",
    meaning:
      "LE appears when the motor cannot rotate the drum because the rotor is physically locked or the hall sensor loses communication with the control board. Overloading the drum is the most common trigger on front-load models.",
    causes: [
      "Overloaded drum preventing rotation",
      "Foreign object wedged between drum and tub",
      "Loose rotor bolt on the back of the motor",
      "Failed stator or hall sensor",
    ],
    fixes: [
      "Remove several items from the load and restart the cycle",
      "Unplug the washer for 10 minutes, then run a rinse and spin",
      "Spin the drum by hand with the door open to check for obstruction",
      "Inspect the rotor bolt through the rear access panel if the error returns immediately",
    ],
    when_to_call_technician:
      "Call for service if the drum spins freely by hand but LE returns on every cycle, or if you hear grinding from the rear panel.",
    affected_models: ["LG WM3500CW", "LG WM3700HWA", "LG WM9000HVA"],
    related_codes: ["oe", "ue"],
  },
  {
    brand: "lg",
    appliance: "washing-machine",
    error_code: "ue",
    title: "LG Washing Machine UE Error Code",
    summary: "Unbalanced load during spin",
    meta_description:
      "LG UE error code signals an unbalanced load. Steps to redistribute laundry and prevent repeat UE errors on LG washers.",
    meaning:
      "UE means the washer detected excessive vibration during the spin phase and halted to protect the suspension and bearings. Small loads with a single heavy item—like a bath mat or blanket—trigger this most often.",
    causes: [
      "Single heavy item clumped on one side of the drum",
      "Washer not level on the floor",
      "Worn suspension rods or dampers",
      "Shipping bolts still installed on a new unit",
    ],
    fixes: [
      "Open the door and redistribute the load evenly around the drum",
      "Add one or two towels to balance a very small load",
      "Place a level on top of the washer and adjust the front feet",
      "Remove shipping bolts from the rear if this is a newly installed machine",
    ],
    when_to_call_technician:
      "Schedule repair if UE appears on balanced, full loads after confirming the machine is level.",
    affected_models: ["LG WM3400CW", "LG WT7800CW", "LG WM8100HVA"],
    related_codes: ["oe", "le"],
  },
  {
    brand: "lg",
    appliance: "washing-machine",
    error_code: "de",
    title: "LG Washing Machine dE Error Code",
    summary: "Door not locking before cycle start",
    meta_description:
      "LG dE error means the washer door did not lock. Check the latch, strike plate, and wiring before replacing parts.",
    meaning:
      "dE displays when the control board sends a lock command but never receives confirmation that the door switch closed. The washer will not fill or agitate until the lock circuit reports success.",
    causes: [
      "Clothing caught in the door seal preventing closure",
      "Warped or misaligned door strike hitting the latch crooked",
      "Failed door lock actuator assembly",
      "Broken wire in the harness between the door and main board",
    ],
    fixes: [
      "Remove any fabric from the gasket area and press the door firmly until it clicks",
      "Inspect the strike plate on the cabinet for looseness and retighten the screws",
      "Power-cycle the washer by unplugging it for two minutes",
      "Listen for a brief motor buzz at the lock when the cycle starts—silence often means a bad latch",
    ],
    when_to_call_technician:
      "Replace the door lock through a technician if the latch buzzes repeatedly but dE never clears.",
    affected_models: ["LG WM3997HWA", "LG WM4370HKA", "LG WM4200HBA"],
    related_codes: ["oe", "le"],
  },
  {
    brand: "lg",
    appliance: "dishwasher",
    error_code: "le",
    title: "LG Dishwasher LE Error Code",
    summary: "Circulation pump motor fault",
    meta_description:
      "LG dishwasher LE error points to a motor or wiring fault in the circulation pump circuit. Troubleshooting steps before calling for parts.",
    meaning:
      "On LG dishwashers, LE indicates the main control board detected an abnormal current draw from the circulation motor. The dishwasher stops mid-cycle and may leave standing water in the tub.",
    causes: [
      "Debris blocking the chopper blade and binding the motor",
      "Water in the base pan triggering the leak sensor and cutting power",
      "Loose wire harness at the circulation pump",
      "Burned-out circulation motor windings",
    ],
    fixes: [
      "Turn off power at the breaker and remove the lower spray arm and filter",
      "Clear any glass or food debris from the sump area",
      "Tilt the dishwasher slightly and check the base pan for water; dry it if wet",
      "Restore power and run a short cycle without dishes to test the motor",
    ],
    when_to_call_technician:
      "If the base pan keeps filling with water or LE returns after clearing the sump, the circulation motor or pump seal likely needs replacement.",
    affected_models: ["LG LDF5545ST", "LG LDP6797ST", "LG LDTS5552S"],
    related_codes: ["ae", "he"],
  },
  {
    brand: "lg",
    appliance: "dishwasher",
    error_code: "ae",
    title: "LG Dishwasher AE Error Code",
    summary: "Leak detected in base pan",
    meta_description:
      "LG dishwasher AE error means a leak was detected. Find the source of water in the base pan and reset the float switch.",
    meaning:
      "AE is LG's leak detection code. A float switch in the base pan rises when water collects underneath the tub, and the control board shuts off the inlet valve to prevent floor damage.",
    causes: [
      "Cracked or loose drain hose connection under the sink",
      "Failed door gasket letting rinse water escape",
      "Over-sudding from regular dish soap instead of detergent",
      "Cracked spray arm spraying water through the door seal",
    ],
    fixes: [
      "Pull the dishwasher forward and remove the toe kick panel",
      "Soak up water in the base pan with towels until the float drops",
      "Inspect the door gasket for tears and the spray arms for cracks",
      "Verify the drain hose clamp at the sink disposal is tight",
    ],
    when_to_call_technician:
      "Contact a technician if the pan refills within one cycle after drying—this usually means an internal tub or hose seal has failed.",
    affected_models: ["LG LDF5545ST", "LG LDP7808SN", "LG LDTS5552S"],
    related_codes: ["le", "he"],
  },
  {
    brand: "lg",
    appliance: "dishwasher",
    error_code: "he",
    title: "LG Dishwasher HE Error Code",
    summary: "Heater circuit not working",
    meta_description:
      "LG dishwasher HE error indicates a heating fault during wash or dry. Check the element, thermistor, and incoming hot water.",
    meaning:
      "HE flags when the dishwasher expected to raise water temperature—either through the inline heater or by drawing sufficient hot water from the home supply—but the thermistor never saw the target reached within the allotted time.",
    causes: [
      "Household water heater delivering water below 120°F",
      "Open heating element under the tub",
      "Thermistor detached from the tub wall",
      "Control board relay not sending voltage to the heater",
    ],
    fixes: [
      "Run the kitchen tap until hot before starting a heavy cycle",
      "Select a high-temp or sanitize option and pause mid-cycle to feel wash water",
      "Inspect the element terminals under the tub for corrosion or burn marks",
      "Confirm the dishwasher is on its own hot water line without a long dead-leg pipe run",
    ],
    when_to_call_technician:
      "Have the element and thermistor ohm-tested if water stays lukewarm through an entire heated cycle with verified hot supply.",
    affected_models: ["LG LDP6810SS", "LG LDFN4542S", "LG LDPS6762D"],
    related_codes: ["ae", "le"],
  },
  {
    brand: "lg",
    appliance: "dryer",
    error_code: "d80",
    title: "LG Dryer D80 Error Code",
    summary: "Dryer vent 80% blocked",
    meta_description:
      "LG dryer D80 means airflow is restricted to 80% blockage. Clean the lint filter, vent run, and exhaust hood to clear this code.",
    meaning:
      "D80 is part of LG's vent blockage monitoring system. The dryer measures exhaust temperature rise and flags D80 when airflow is reduced enough to extend drying times by roughly 80% of normal capacity.",
    causes: [
      "Lint buildup in the flexible vent hose behind the dryer",
      "Crushed or kinked transition duct",
      "Blocked exterior vent hood flapper",
      "Accumulated lint inside the dryer cabinet beyond the filter",
    ],
    fixes: [
      "Clean the lint screen and wash it with warm soapy water if residue remains",
      "Pull the dryer away from the wall and disconnect the vent hose; vacuum both ends",
      "Check the outside vent hood for bird nests or lint clumps",
      "Run a timed dry cycle with the vent reconnected and confirm the code clears",
    ],
    when_to_call_technician:
      "If D80 persists after a full vent cleaning, the internal ductwork or blower wheel inside the dryer may need professional disassembly.",
    affected_models: ["LG DLEX3900W", "LG DLGx4001W", "LG DLE7300WE"],
    related_codes: ["d90"],
  },
  {
    brand: "lg",
    appliance: "dryer",
    error_code: "d90",
    title: "LG Dryer D90 Error Code",
    summary: "Dryer vent 90% blocked",
    meta_description:
      "LG D90 error means severe vent restriction. Clean the full exhaust path before the dryer disables heating entirely.",
    meaning:
      "D90 is a more severe airflow warning than D80. The dryer's sensors detect that exhaust temperature is climbing faster than normal because almost no air is leaving the cabinet, which creates a fire risk.",
    causes: [
      "Completely clogged rigid or flexible vent run",
      "Exterior hood flapper stuck shut with lint cement",
      "Bird or rodent nest inside the wall duct",
      "Blower wheel coated in lint and spinning inefficiently",
    ],
    fixes: [
      "Disconnect power and pull the dryer out to access the full vent hose",
      "Use a vent brush kit from the interior wall opening through to the outside hood",
      "Remove and wash the lint filter housing if lint packs into the screen channel",
      "Run one empty timed dry on low heat and verify D90 does not return",
    ],
    when_to_call_technician:
      "Call a vent cleaning service if the exterior hood still has no airflow after brushing—the blockage may be inside a wall cavity.",
    affected_models: ["LG DLEX4000W", "LG DLE7150W", "LG DLHC5502W"],
    related_codes: ["d80"],
  },
  {
    brand: "lg",
    appliance: "refrigerator",
    error_code: "if",
    title: "LG Refrigerator IF Error Code",
    summary: "Ice maker fan not responding",
    meta_description:
      "LG refrigerator IF error indicates the ice compartment fan failed. Check for ice buildup around the fan blade and duct.",
    meaning:
      "IF appears on LG French-door models when the fan that circulates cold air over the ice maker compartment stops reporting RPM to the main board. Without that airflow, ice production slows and the freezer section may warm unevenly.",
    causes: [
      "Ice accumulation locking the fan blade",
      "Failed fan motor in the ice maker duct",
      "Door left open allowing frost to bridge the air channel",
      "Main board not sending voltage to the fan harness",
    ],
    fixes: [
      "Unplug the refrigerator and leave doors open for eight hours to melt duct ice",
      "Remove the ice bucket and inspect the fan opening for visible frost blockage",
      "Plug back in and listen for the fan in the upper left freezer corner",
      "Confirm the freezer door switch depresses fully when the door closes",
    ],
    when_to_call_technician:
      "Schedule service if the fan is ice-free but silent when the compressor runs—the motor or board relay likely failed.",
    affected_models: ["LG LRFVS3006S", "LG LRFXC2416S", "LG LRMVS3006S"],
    related_codes: ["ae", "le"],
  },
  {
    brand: "lg",
    appliance: "oven",
    error_code: "f9",
    title: "LG Oven F9 Error Code",
    summary: "Cooling fan failed during bake",
    meta_description:
      "LG oven F9 error means the cavity cooling fan is not running. The oven locks out heat until the fan circuit is restored.",
    meaning:
      "F9 triggers when the oven control detects that the cooling fan—used to pull air across the electronics and door glass during and after baking—never reached operating speed. LG ovens refuse to heat as a safety precaution.",
    causes: [
      "Obstruction blocking the fan blade behind the rear panel",
      "Open winding in the cooling fan motor",
      "Loose connector at the fan on the upper back wall",
      "Control board fan relay not closing",
    ],
    fixes: [
      "Turn off power at the breaker and remove the oven's rear access panel",
      "Spin the fan blade by hand—it should rotate freely without scraping",
      "Reseat the two-wire connector on the fan motor",
      "Restore power and start a bake at 350°F while listening for the fan",
    ],
    when_to_call_technician:
      "Replace the fan motor through service if the blade spins freely but F9 returns within 30 seconds of starting bake.",
    affected_models: ["LG LREL6325F", "LG LWC3063ST", "LG LDG4315ST"],
    related_codes: ["if", "d80"],
  },
  {
    brand: "whirlpool",
    appliance: "washing-machine",
    error_code: "f21",
    title: "Whirlpool Washing Machine F21 Error Code",
    summary: "Drain error, water not emptying",
    meta_description:
      "Whirlpool F21 is a long drain error. Check the pump filter, drain hose, and coin trap on Cabrio and front-load models.",
    meaning:
      "F21 tells you the washer took too long to empty the tub—typically beyond eight minutes on most Whirlpool platforms. The drain pump runs, but water is not leaving fast enough for the pressure switch to register an empty tub.",
    causes: [
      "Clogged coin trap or pump filter",
      "Drain hose pushed too far into the standpipe, creating a siphon lock",
      "Failed drain pump impeller",
      "Excess suds slowing water evacuation",
    ],
    fixes: [
      "Open the small access door at the bottom front and drain the emergency hose into a pan",
      "Remove the pump filter and clear lint, coins, or hair ties",
      "Ensure the drain hose forms a U-shape and sits only 4.5 inches into the standpipe",
      "Run a clean washer cycle with affresh or white vinegar to cut suds residue",
    ],
    when_to_call_technician:
      "If water drains slowly from the emergency hose with the filter removed, the drain pump itself is likely worn and should be replaced professionally.",
    affected_models: ["Whirlpool WFW560CHW", "Whirlpool WTW8127LW", "Whirlpool WFW9620HC"],
    related_codes: ["f09", "f08"],
  },
  {
    brand: "whirlpool",
    appliance: "washing-machine",
    error_code: "f09",
    title: "Whirlpool Washing Machine F09 Error Code",
    summary: "Overflow or overfill fault",
    meta_description:
      "Whirlpool washer F09 indicates an overflow condition. Inspect the water inlet valve, pressure hose, and control board connections.",
    meaning:
      "F09 means the control board believes the tub has overfilled or that water entered when it should not have. On Duet and Cabrio washers this often traces to a stuck-open inlet valve or a disconnected pressure switch hose.",
    causes: [
      "Inlet valve stuck open due to mineral buildup",
      "Pressure switch air dome tube disconnected or cracked",
      "Control board relay welded closed",
      "Drain failure causing water to accumulate across cycles",
    ],
    fixes: [
      "Turn off both hot and cold supply valves behind the washer immediately",
      "Unplug the machine and inspect the clear pressure hose running from the tub to the top control panel",
      "Reconnect or replace the hose if it is cracked or loose at either end",
      "Turn water back on and run a rinse cycle while watching for uncontrolled fill",
    ],
    when_to_call_technician:
      "If the tub fills with the washer unplugged, both inlet valves need replacement—do not continue using the machine.",
    affected_models: ["Whirlpool WFW8620HC", "Whirlpool WTW5000DW", "Whirlpool WFW560CHW"],
    related_codes: ["f21", "f08"],
  },
  {
    brand: "whirlpool",
    appliance: "washing-machine",
    error_code: "f08",
    title: "Whirlpool Washing Machine F08 Error Code",
    summary: "Water valve circuit fault",
    meta_description:
      "Whirlpool F08 signals a problem with the water inlet valve circuit. Test supply pressure and valve coils before replacing the board.",
    meaning:
      "F08 reports that the washer cannot verify proper operation of the dual water inlet valve—either no water arrived when commanded, or the valve drew unexpected current. Front-load models show this during the initial fill stage.",
    causes: [
      "Both supply taps turned off or partially closed",
      "Inlet screens clogged with sediment",
      "One solenoid coil open on the water valve assembly",
      "Wire harness corrosion at the valve connector",
    ],
    fixes: [
      "Confirm hot and cold faucets behind the washer are fully open",
      "Unscrew inlet hoses and rinse the mesh screens inside the valve ports",
      "Start a cold wash and listen for a click at the valve—repeat on hot fill",
      "Inspect the six-pin connector on the valve for bent pins or moisture",
    ],
    when_to_call_technician:
      "Valve replacement is straightforward but often bundled with board testing—call if both coils test open with a multimeter.",
    affected_models: ["Whirlpool WFW9150FW", "Whirlpool WFW6620HC", "Whirlpool WTW7120HW"],
    related_codes: ["f09", "f21"],
  },
  {
    brand: "whirlpool",
    appliance: "washing-machine",
    error_code: "f22",
    title: "Whirlpool Washing Machine F22 Error Code",
    summary: "Door lock not engaging",
    meta_description:
      "Whirlpool washer F22 means the door lock circuit failed. Inspect the latch, wiring, and control output before ordering parts.",
    meaning:
      "F22 appears when the central control unit energizes the door lock but does not detect the locked position switch within the timeout window. The machine aborts before filling to prevent opening mid-cycle.",
    causes: [
      "Broken door latch hook not reaching the switch",
      "Defective door lock motor assembly",
      "Frayed wire in the door boot harness",
      "Control board lock triac failed",
    ],
    fixes: [
      "Open the door and examine the latch strike for plastic cracks",
      "Close the door firmly and listen for a single lock click within three seconds",
      "Power-cycle by unplugging for one minute",
      "Wiggle the door boot wiring harness where it passes through the hinge",
    ],
    when_to_call_technician:
      "If the lock clicks but F22 persists, the position switch inside the latch assembly has likely failed.",
    affected_models: ["Whirlpool WFW560CHW", "Whirlpool WFW9620HC", "Whirlpool WFW9150FW"],
    related_codes: ["f21", "f08"],
  },
  {
    brand: "whirlpool",
    appliance: "dishwasher",
    error_code: "f24",
    title: "Whirlpool Dishwasher F24 Error Code",
    summary: "Water not heating in wash",
    meta_description:
      "Whirlpool dishwasher F24 means the water temperature is too low. Check the heating element, thermostat, and incoming hot water supply.",
    meaning:
      "F24 appears when the thermistor reports that water did not reach the target temperature during a wash segment. The dishwasher may finish the cycle but leave dishes greasy because sanitizing heat was never achieved.",
    causes: [
      "Household water heater set below 120°F",
      "Failed heating element in the tub floor",
      "Faulty thermistor or wiring to the control board",
      "Long plumbing run delivering cold water to the dishwasher inlet",
    ],
    fixes: [
      "Run the kitchen faucet until water feels hot before starting the dishwasher",
      "Start a heated wash cycle and open the door carefully mid-cycle to feel the water temperature",
      "Check your water heater thermostat and raise it to at least 120°F if needed",
      "Inspect the heating element terminals under the tub for visible burn marks",
    ],
    when_to_call_technician:
      "Book service if water stays cold throughout a heated cycle with hot water confirmed at the sink—the element or thermistor needs testing with a multimeter.",
    affected_models: ["Whirlpool WDT750SAKZ", "Whirlpool WDF540PADM", "Whirlpool WDTA50SAKZ"],
    related_codes: ["f21", "f01"],
  },
  {
    brand: "whirlpool",
    appliance: "dryer",
    error_code: "f01",
    title: "Whirlpool Dryer F01 Error Code",
    summary: "Control board failure",
    meta_description:
      "Whirlpool dryer F01 is a primary control board failure code. Try a power reset first, then inspect board connections and moisture damage.",
    meaning:
      "F01 on Whirlpool and Maytag dryers signals that the main electronic control board has detected an internal fault or lost communication with a key component. The dryer will not start until the code is cleared or the board is replaced.",
    causes: [
      "Power surge damaging the control board",
      "Loose wiring harness at the board connector",
      "Moisture or lint accumulation on the board",
      "Failed EEPROM or relay on the control assembly",
    ],
    fixes: [
      "Unplug the dryer or flip the breaker off for five full minutes",
      "Remove the top panel and reseat the large wiring harness on the control board",
      "Inspect the board for burn marks, swollen capacitors, or lint bridging contacts",
      "Restore power and hold the Start button for three seconds to attempt a reset",
    ],
    when_to_call_technician:
      "F01 that returns immediately after a reset usually requires a new control board—have the model number ready when ordering the part.",
    affected_models: ["Whirlpool WED4815EW", "Whirlpool WED6620HC", "Whirlpool WGD5620HW"],
    related_codes: ["f24", "f22"],
  },
  {
    brand: "whirlpool",
    appliance: "dryer",
    error_code: "f22",
    title: "Whirlpool Dryer F22 Error Code",
    summary: "Dryer door switch open",
    meta_description:
      "Whirlpool dryer F22 indicates the door circuit reads open while running. Adjust the strike, test the switch, and check the harness.",
    meaning:
      "F22 on dryers is different from the washer code with the same number—it means the door switch contact opened when the control expected it closed. The drum stops and the display flashes F22 to prevent operation with a weak latch.",
    causes: [
      "Door catch bent and not depressing the switch plunger",
      "Worn door switch with intermittent contact",
      "Loose wire at the switch terminal block",
      "Door hinge sagging on older top-load matched sets",
    ],
    fixes: [
      "Press firmly on the door while holding Start to see if the dryer runs",
      "Inspect the plastic catch on the door frame for cracks",
      "Remove the top panel and locate the switch along the front bulkhead",
      "Manually actuate the switch lever—you should hear a faint click",
    ],
    when_to_call_technician:
      "Door switch replacement is inexpensive but requires cabinet disassembly—technicians often bundle it with hinge adjustment.",
    affected_models: ["Whirlpool WED4950HW", "Whirlpool WED5000DW", "Whirlpool YWED5620HW"],
    related_codes: ["f01", "f24"],
  },
  {
    brand: "whirlpool",
    appliance: "refrigerator",
    error_code: "22",
    title: "Whirlpool Refrigerator Error Code 22",
    summary: "Compressor relay not starting",
    meta_description:
      "Whirlpool refrigerator code 22 points to a compressor start relay or overload issue. Clicks with no cooling often mean a failed relay.",
    meaning:
      "On Whirlpool bottom-freezer and side-by-side platforms, code 22 logs when the compressor fails to start after the relay energizes. You may hear repeated clicking from the lower rear panel every few minutes.",
    causes: [
      "Failed compressor start relay",
      "Open compressor overload protector",
      "Seized compressor bearings drawing lock rotor amps",
      "Loose wire on the compressor terminal block",
    ],
    fixes: [
      "Unplug the refrigerator and pull it forward to access the rear bottom panel",
      "Remove the rectangular relay plugged onto the compressor side",
      "Shake the relay—rattling often indicates a broken internal component",
      "Plug back in briefly and listen for one clean start rather than rapid clicking",
    ],
    when_to_call_technician:
      "If a new relay does not stop the clicking, the compressor itself has likely failed—a major repair on most units.",
    affected_models: ["Whirlpool WRX735SDHZ", "Whirlpool WRS325SDHZ", "Whirlpool WRX986SIHZ"],
    related_codes: ["f24", "f01"],
  },
  {
    brand: "whirlpool",
    appliance: "oven",
    error_code: "f03",
    title: "Whirlpool Oven F03 Error Code",
    summary: "Open oven temperature sensor",
    meta_description:
      "Whirlpool oven F03 means the temperature sensor circuit reads open. Test the probe resistance before replacing the control board.",
    meaning:
      "F03 appears when the oven control board senses an infinite resistance from the temperature sensor probe inside the cavity. Without that reading, the board cannot regulate heat and locks out bake and broil.",
    causes: [
      "Sensor probe unplugged from the wiring harness",
      "Broken sensor wire inside the cavity insulation",
      "Corroded connector behind the rear panel",
      "Failed RTD sensor element",
    ],
    fixes: [
      "Turn off power at the breaker before accessing the oven rear",
      "Locate the sensor probe entering the upper left cavity wall",
      "Follow its wire to the connector and ensure it is fully seated",
      "Measure sensor resistance at room temperature—it should read roughly 1,080 ohms",
    ],
    when_to_call_technician:
      "Sensor replacement is a simple part swap; call if resistance reads correctly but F03 remains with a verified good connector.",
    affected_models: ["Whirlpool WFE505W0JS", "Whirlpool WOS51EC0HS", "Whirlpool WFG505M0BS"],
    related_codes: ["f01", "f24"],
  },
  {
    brand: "samsung",
    appliance: "washing-machine",
    error_code: "4e",
    title: "Samsung Washing Machine 4E Error Code",
    summary: "No water supply detected",
    meta_description:
      "Samsung washer 4E error means no water supply detected. Verify inlet hoses, supply valves, and the mesh filters at the connections.",
    meaning:
      "4E (shown as 4E or nF on some displays) means the washer did not detect incoming water within the fill window. The inlet valves opened, but the water level sensor never registered a rise in the tub.",
    causes: [
      "Closed or partially closed hot/cold supply valves",
      "Kinked inlet hoses behind the machine",
      "Clogged mesh filters inside the hose connections at the washer",
      "Frozen pipes in winter installations",
    ],
    fixes: [
      "Turn both supply valves behind the washer fully counterclockwise",
      "Straighten inlet hoses and ensure they are not pinched against the wall",
      "Unscrew the hoses from the back of the washer and rinse the mesh screens in a bucket",
      "Run a cold fill cycle after reconnecting hoses to confirm water enters the tub",
    ],
    when_to_call_technician:
      "If water flows strongly at the hose ends but the tub still does not fill, the inlet valve solenoid or water level sensor may need replacement.",
    affected_models: ["Samsung WF45T6000AW", "Samsung WF45R6100AW", "Samsung WA50R5400AW"],
    related_codes: ["4c", "ub"],
  },
  {
    brand: "samsung",
    appliance: "washing-machine",
    error_code: "4c",
    title: "Samsung Washing Machine 4C Error Code",
    summary: "Water supply issue during fill",
    meta_description:
      "Samsung 4C error (also shown as 4E on some models) means insufficient water fill. Check valves, hoses, and inlet filters.",
    meaning:
      "4C indicates the washer detected that water entered too slowly or stopped mid-fill. Unlike a total no-fill, 4C often appears after a brief trickle when pressure drops or one side of the dual valve fails.",
    causes: [
      "Low household water pressure below 20 psi",
      "One inlet valve solenoid failed while the other works",
      "Partially clogged hot-side mesh screen",
      "Water supply turned off mid-cycle",
    ],
    fixes: [
      "Verify both supply valves are fully open and other fixtures in the house have normal pressure",
      "Swap hot and cold hoses at the wall to see if the error follows one line",
      "Clean both inlet screens at the back of the washer",
      "Run a warm fill cycle and watch whether both sides enter the drum",
    ],
    when_to_call_technician:
      "If pressure is good at the wall but only one temperature fills, replace the dual inlet valve assembly.",
    affected_models: ["Samsung WF45R6300AV", "Samsung WA52M7750AW", "Samsung WF50K7500AV"],
    related_codes: ["4e", "ub"],
  },
  {
    brand: "samsung",
    appliance: "washing-machine",
    error_code: "ub",
    title: "Samsung Washing Machine UB Error Code",
    summary: "Unbalanced load during spin",
    meta_description:
      "Samsung UB error code indicates an unbalanced load during spin. How to fix uneven laundry distribution on Samsung washers.",
    meaning:
      "UB stops the spin cycle when the washer's vibration sensor detects movement beyond safe limits. Samsung front-loaders are especially sensitive to mixed fabric loads where heavy denim sits on one side of the drum.",
    causes: [
      "Mixed fabric load with uneven weight distribution",
      "Machine installed on an uneven or soft surface",
      "Damaged shock absorbers on front-load models",
      "Transit bolts left in place on a new installation",
    ],
    fixes: [
      "Pause the cycle, open the door, and spread items evenly around the drum",
      "Separate very heavy items and wash them with similar-weight fabrics",
      "Check that all four feet contact the floor firmly and lock the nuts on the adjustable legs",
      "Verify transit bolts were removed from the rear if the washer was recently delivered",
    ],
    when_to_call_technician:
      "Persistent UB on normal mixed loads after leveling often means worn shock absorbers or suspension springs inside the cabinet.",
    affected_models: ["Samsung WF45T6000AW", "Samsung WA54R7600AC", "Samsung WF50R8500AV"],
    related_codes: ["4e", "dc"],
  },
  {
    brand: "samsung",
    appliance: "washing-machine",
    error_code: "dc",
    title: "Samsung Washing Machine DC Error Code",
    summary: "Load imbalance before spin start",
    meta_description:
      "Samsung DC error means the washer paused before high-speed spin due to imbalance. Redistribute the load and check leveling.",
    meaning:
      "DC is an early-stage balance code that fires before UB on many Samsung EcoBubble models. The washer attempts several slow spins to distribute laundry, then stops with DC if the drum still reads off-center.",
    causes: [
      "Single absorbent item such as a rug or comforter",
      "Non-he garment bunched in one pocket of the drum",
      "Weak suspension allowing tub sway on spin-up",
      "Washer feet not locked after leveling",
    ],
    fixes: [
      "Cancel spin and manually rotate items 180 degrees around the drum",
      "Add two towels to a single large item to equalize weight",
      "Run spin only at 800 RPM before retrying full speed",
      "Re-level the cabinet and tighten the jam nuts on each foot",
    ],
    when_to_call_technician:
      "DC on every spin with balanced loads suggests worn drum spiders or shock absorbers inside the tub assembly.",
    affected_models: ["Samsung WW22K6800AW", "Samsung WF45K6500AV", "Samsung WA50R5400AW"],
    related_codes: ["ub", "4c"],
  },
  {
    brand: "samsung",
    appliance: "dishwasher",
    error_code: "lc",
    title: "Samsung Dishwasher LC Error Code",
    summary: "Leak sensor triggered",
    meta_description:
      "Samsung dishwasher LC error detects a leak in the base. Dry the leak sensor area and trace the source before resetting the code.",
    meaning:
      "LC (also displayed as LE on some models) means the leak sensor in the bottom tray detected moisture. Samsung dishwashers cut off the water inlet immediately and display LC to prevent water from reaching the floor.",
    causes: [
      "Loose drain hose clamp at the garbage disposal",
      "Overfill from too much detergent creating suds overflow",
      "Cracked water guide or upper spray arm",
      "Worn door seal along the bottom edge",
    ],
    fixes: [
      "Turn off the dishwasher breaker and pull the lower access panel",
      "Absorb water around the leak sensor with a cloth—the sensor is a small styrofoam float",
      "Inspect the door gasket and lower spray arm for visible cracks or food buildup",
      "Tighten the drain hose clamp where it connects under the sink",
    ],
    when_to_call_technician:
      "If LC reappears after a single cycle with a dry base pan, an internal hose or tub seal is likely leaking and requires disassembly.",
    affected_models: ["Samsung DW80R5060US", "Samsung DW80B7070US", "Samsung DW80R9950US"],
    related_codes: ["5e", "he"],
  },
  {
    brand: "samsung",
    appliance: "dishwasher",
    error_code: "5e",
    title: "Samsung Dishwasher 5E Error Code",
    summary: "Drain function failed",
    meta_description:
      "Samsung dishwasher 5E error means water is not draining. Clean the filter, check the drain hose, and inspect the drain pump.",
    meaning:
      "5E (sometimes shown as SE) appears when water remains in the tub after the drain pump runs for the allotted time. The dishwasher may beep and halt before the dry phase.",
    causes: [
      "Clogged fine filter and sump under the lower rack",
      "Drain hose kinked where it routes through the cabinet",
      "Check valve stuck closed at the drain pump outlet",
      "Failed drain pump motor",
    ],
    fixes: [
      "Remove the lower rack and twist out the cylindrical filter assembly",
      "Rinse the filter and clear debris from the white drain sump",
      "Verify the drain hose under the sink has a high loop above the connection",
      "Run a cancel/drain cycle and listen for the pump humming",
    ],
    when_to_call_technician:
      "If the pump hums but water never moves, the impeller may be jammed or the pump needs replacement.",
    affected_models: ["Samsung DW80N3030US", "Samsung DW80R7031US", "Samsung DW80B6060US"],
    related_codes: ["lc", "he"],
  },
  {
    brand: "samsung",
    appliance: "dryer",
    error_code: "he",
    title: "Samsung Dryer HE Error Code",
    summary: "Heating system fault",
    meta_description:
      "Samsung dryer HE error indicates a heating fault. Check the thermal fuse, heating element, and vent airflow before replacing parts.",
    meaning:
      "HE means the dryer ran a heat cycle but the exhaust temperature did not climb as expected. Samsung dryers disable the heating element as a safety measure when airflow is blocked or when a thermal cutoff has tripped.",
    causes: [
      "Blown thermal fuse on the heater assembly",
      "Open heating element coil",
      "Restricted vent causing overheating and fuse trip",
      "Faulty thermistor reporting incorrect readings to the board",
    ],
    fixes: [
      "Clean the lint filter and inspect the full vent run to the outside hood",
      "Unplug the dryer and remove the rear panel to access the thermal fuse on the heater duct",
      "Test the heating element for continuity with a multimeter if you have one",
      "Replace the thermal fuse only after confirming the vent is clear—otherwise it will blow again",
    ],
    when_to_call_technician:
      "Call for service if the vent is clean and the thermal fuse tests good but HE persists; the main board or thermistor may need diagnosis.",
    affected_models: ["Samsung DVE45R6100W", "Samsung DV42H5000EW", "Samsung DVE50R5400V"],
    related_codes: ["lc", "te"],
  },
  {
    brand: "samsung",
    appliance: "dryer",
    error_code: "te",
    title: "Samsung Dryer tE Error Code",
    summary: "Thermistor reading out of range",
    meta_description:
      "Samsung dryer tE error means the temperature sensor signal is invalid. Inspect the thermistor wiring and exhaust airflow.",
    meaning:
      "tE flags when the thermistor on the blower housing sends a resistance value the control board considers impossible—either open, shorted, or changing too slowly during heat-up.",
    causes: [
      "Thermistor connector loose on the blower housing",
      "Lint-packed blower wheel causing erratic temperature readings",
      "Broken thermistor wire rubbing against the drum",
      "Failed thermistor element",
    ],
    fixes: [
      "Unplug the dryer and remove the lint duct cover on the back",
      "Locate the two-wire thermistor clipped near the blower inlet",
      "Reseat the connector and inspect wires for heat damage",
      "Vacuum the blower wheel area thoroughly before retesting",
    ],
    when_to_call_technician:
      "Thermistor resistance specs vary by model—technicians can verify ohm readings against the service chart quickly.",
    affected_models: ["Samsung DV50F9A6EVP", "Samsung DVE50M7450P", "Samsung DV45K6200GW"],
    related_codes: ["he", "lc"],
  },
  {
    brand: "samsung",
    appliance: "refrigerator",
    error_code: "41e",
    title: "Samsung Refrigerator 41E Error Code",
    summary: "Freezer fan motor error",
    meta_description:
      "Samsung refrigerator 41E indicates the evaporator fan failed. Check for ice blockage before replacing the motor.",
    meaning:
      "41E logs when the evaporator fan in the freezer compartment does not reach expected speed feedback. Cooling continues at the compressor but cold air stops circulating evenly, leading to warm spots.",
    causes: [
      "Ice dam blocking the fan blade after a defrost failure",
      "Failed fan motor assembly",
      "Main board inverter not driving the fan",
      "Door left ajar causing heavy frost over the evaporator cover",
    ],
    fixes: [
      "Initiate a forced defrost if your model supports the button combination on the panel",
      "Empty the freezer and remove the rear panel once frost melts",
      "Spin the fan blade—it should rotate without scraping the housing",
      "Plug in and listen for the fan within 30 seconds of closing the door",
    ],
    when_to_call_technician:
      "If the fan is unobstructed but silent, the motor or board fan driver has failed.",
    affected_models: ["Samsung RF28R7351SG", "Samsung RS27T5200SR", "Samsung RF23M8590SG"],
    related_codes: ["4c", "he"],
  },
  {
    brand: "samsung",
    appliance: "oven",
    error_code: "e-0e",
    title: "Samsung Oven E-0E Error Code",
    summary: "Overheating detected in cavity",
    meta_description:
      "Samsung oven E-0E error means the cavity exceeded safe temperature. Inspect the sensor, cooling fan, and relay stuck on.",
    meaning:
      "E-0E appears when the oven temperature probe reports values above the maximum safe threshold while bake or broil is active. Samsung ovens shut down heat and lock the door until the cavity cools.",
    causes: [
      "Temperature sensor shorted reading high resistance as low",
      "Cooling fan not running during broil",
      "Relay welded closed sending continuous heat",
      "Calibration lost after power surge",
    ],
    fixes: [
      "Turn off the breaker and wait for the oven to cool completely",
      "Inspect the sensor probe for damage where it enters the cavity",
      "Start a bake at 300°F and monitor whether temperature climbs steadily without overshooting",
      "Avoid using broil until the code clears to reduce thermal stress",
    ],
    when_to_call_technician:
      "Board or sensor replacement requires model-specific parts—service is recommended if E-0E returns below 400°F set points.",
    affected_models: ["Samsung NE63T8751SS", "Samsung NV51K7770DS", "Samsung NE59M6850SS"],
    related_codes: ["he", "te"],
  },
  {
    brand: "bosch",
    appliance: "washing-machine",
    error_code: "e18",
    title: "Bosch Washing Machine E18 Error Code",
    summary: "Drain pump blocked or slow",
    meta_description:
      "Bosch washer E18 means drainage took too long. Clean the pump filter, check the drain hose, and inspect the impeller.",
    meaning:
      "E18 on Bosch Axxis and Serie models reports that the drain phase exceeded its time limit. Water remains visible in the door glass and the pump may hum without moving water.",
    causes: [
      "Pump filter clogged with coins or hair",
      "Drain hose obstructed at the standpipe",
      "Pump impeller jammed by a small object",
      "Weak drain pump motor capacitor",
    ],
    fixes: [
      "Open the round pump access door at the bottom front",
      "Place a shallow tray under the emergency drain hose and empty the tub",
      "Unscrew the filter cap and remove debris from the chamber",
      "Refit the filter firmly and run a spin/drain cycle only",
    ],
    when_to_call_technician:
      "If the pump runs dry but E18 persists, the pressure switch or control module may need diagnosis.",
    affected_models: ["Bosch WAT28400UC", "Bosch WAW285H1UC", "Bosch WGA12400UC"],
    related_codes: ["e23", "e17"],
  },
  {
    brand: "bosch",
    appliance: "washing-machine",
    error_code: "e23",
    title: "Bosch Washing Machine E23 Error Code",
    summary: "Aquastop leak detected",
    meta_description:
      "Bosch E23 error triggers the Aquastop system after moisture enters the base. Dry the tray and find the leak source.",
    meaning:
      "E23 activates when the Aquastop float in the base pan detects water. Bosch washers cut inlet water and display E23 to prevent flooding from a hose or tub seal failure.",
    causes: [
      "Loose fill hose at the rear of the machine",
      "Door boot tear letting water escape during spin",
      "Overdosing detergent creating suds overflow",
      "Internal tub hose clamp slipped off",
    ],
    fixes: [
      "Unplug the washer and tilt it slightly forward to inspect the base tray",
      "Soak up water until the float drops and the code can clear",
      "Inspect the door gasket for pinholes along the bottom fold",
      "Tighten both inlet hose connections at the back with the water supply off",
    ],
    when_to_call_technician:
      "Aquastop trips again after one cycle usually means an internal hose needs replacement inside the cabinet.",
    affected_models: ["Bosch WAW285H1UC", "Bosch WAT28400UC", "Bosch WGB246AXUC"],
    related_codes: ["e18", "e17"],
  },
  {
    brand: "bosch",
    appliance: "washing-machine",
    error_code: "e17",
    title: "Bosch Washing Machine E17 Error Code",
    summary: "Water supply timeout",
    meta_description:
      "Bosch washer E17 means water did not arrive in time. Check supply valves, inlet filters, and household pressure.",
    meaning:
      "E17 is Bosch's insufficient-fill code. The washer opened the inlet valves but the flow meter never registered enough liters within the programmed window.",
    causes: [
      "Closed wall supply valve",
      "Clogged inlet strainer at the rear connection",
      "Kinked inlet hose",
      "Faulty flow meter or inlet valve",
    ],
    fixes: [
      "Confirm both hot and cold taps are open if the model uses dual supply",
      "Remove inlet hoses and rinse the small filters inside the valve body",
      "Straighten hoses and ensure minimum 20 psi at nearby faucets",
      "Run a cold rinse to verify fill completes",
    ],
    when_to_call_technician:
      "If water enters manually but E17 persists, the flow sensor on the inlet assembly may need replacement.",
    affected_models: ["Bosch WAT28400UC", "Bosch WGG254AXUC", "Bosch WGA12400UC"],
    related_codes: ["e18", "e23"],
  },
  {
    brand: "bosch",
    appliance: "dishwasher",
    error_code: "e15",
    title: "Bosch Dishwasher E15 Error Code",
    summary: "Base pan flood protection tripped",
    meta_description:
      "Bosch dishwasher E15 means water in the safety tray. Dry the pan and locate the leak before resetting.",
    meaning:
      "E15 is Bosch's flood protection code. A sensor in the sealed base pan detects moisture from a leaking hose, pump seal, or overfill condition and stops all functions.",
    causes: [
      "Spray arm cracked and spraying toward the door vent",
      "Circulation pump seal weeping into the pan",
      "Door gasket not seating on the lower edge",
      "Excess rinse aid causing suds escape",
    ],
    fixes: [
      "Turn off power and remove the kick plate",
      "Use towels to dry the base pan completely—tilting the unit slightly helps",
      "Inspect spray arms for splits and replace if water jets sideways",
      "Run a quick wash without dishes and watch for new water under the tub",
    ],
    when_to_call_technician:
      "Recurring E15 after drying the pan points to a pump seal or inlet valve hose inside the case.",
    affected_models: ["Bosch SHPM88Z75N", "Bosch SHEM63W55N", "Bosch SHX878ZD5N"],
    related_codes: ["e24", "e09"],
  },
  {
    brand: "bosch",
    appliance: "dishwasher",
    error_code: "e24",
    title: "Bosch Dishwasher E24 Error Code",
    summary: "Dishwasher not draining",
    meta_description:
      "Bosch E24 drain error—check the filter, drain hose loop, and garbage disposal knockout plug.",
    meaning:
      "E24 displays when the drain pump runs but water level in the tub does not fall below the sensor threshold. Dishes may sit in dirty water at cycle end.",
    causes: [
      "Filter basket clogged with food glass",
      "Drain hose lacking a high loop under the counter",
      "Garbage disposal knockout plug still in place on new installs",
      "Check valve stuck in the drain pump outlet",
    ],
    fixes: [
      "Remove the lower rack and lift out the filter assembly",
      "Clean the mesh screen and the sump cavity beneath it",
      "Verify the drain hose routes up to the underside of the counter before descending to the disposal",
      "If newly installed, confirm the disposal drain port was punched through",
    ],
    when_to_call_technician:
      "Persistent E24 with a clear hose often means a failed drain pump or stuck check valve requiring cabinet access.",
    affected_models: ["Bosch SHE53B75UC", "Bosch SHPM65Z55N", "Bosch SHX5AVF5UC"],
    related_codes: ["e15", "e09"],
  },
  {
    brand: "bosch",
    appliance: "dishwasher",
    error_code: "e09",
    title: "Bosch Dishwasher E09 Error Code",
    summary: "Heating element fault",
    meta_description:
      "Bosch dishwasher E09 indicates a heating error. Test the element, flow-through heater, and wiring to the control module.",
    meaning:
      "E09 logs when the dishwasher cannot raise wash water to the target temperature using the flow-through or tub heater. Sanitize cycles abort and dishes may feel greasy.",
    causes: [
      "Scale buildup on the flow-through heater",
      "Open heating element circuit",
      "Loose wire at the heater terminal block",
      "Control module not sending heat command",
    ],
    fixes: [
      "Run hot water at the sink before starting a heavy cycle",
      "Inspect the heater assembly under the tub for visible damage",
      "Use a dishwasher cleaner to descale the internal heater passage",
      "Retry on a long wash with heated dry disabled to isolate the fault",
    ],
    when_to_call_technician:
      "Element replacement on Bosch often requires pulling the dishwasher—technicians handle the tilt and reconnect.",
    affected_models: ["Bosch SHPM65Z55N", "Bosch SHX878ZD5N", "Bosch SHEM78WH5N"],
    related_codes: ["e24", "e15"],
  },
  {
    brand: "bosch",
    appliance: "dryer",
    error_code: "e01",
    title: "Bosch Dryer E01 Error Code",
    summary: "Dryer door not detected closed",
    meta_description:
      "Bosch dryer E01 means the door switch circuit is open. Adjust the latch and inspect the switch on the front panel.",
    meaning:
      "E01 on Bosch vented and heat-pump dryers indicates the door interlock did not close before the cycle started. The drum will not turn and the display holds E01 until the switch reads closed.",
    causes: [
      "Lint or clothing preventing full door closure",
      "Door switch lever not contacting the catch",
      "Broken door hinge causing misalignment",
      "Failed interlock switch",
    ],
    fixes: [
      "Wipe the door gasket and ensure nothing blocks the latch pocket",
      "Press the door firmly at the center and retry",
      "Inspect the catch on the frame for plastic wear",
      "Listen for a click from the switch area when the door closes",
    ],
    when_to_call_technician:
      "Door switch replacement is model-specific—order by full model number from the door tag.",
    affected_models: ["Bosch WTG86401UC", "Bosch WTG865H4UC", "Bosch WQB245AXUC"],
    related_codes: ["e03", "e18"],
  },
  {
    brand: "bosch",
    appliance: "dryer",
    error_code: "e03",
    title: "Bosch Dryer E03 Error Code",
    summary: "Exhaust airflow restricted",
    meta_description:
      "Bosch dryer E03 signals blocked exhaust. Clean the lint filter, condenser (if heat pump), and vent path.",
    meaning:
      "E03 appears when the dryer detects insufficient exhaust airflow during drying. Heat-pump Bosch models also monitor the condenser airflow path and stop with E03 if lint blocks the heat exchanger.",
    causes: [
      "Full lint filter or secondary filter in heat-pump models",
      "Condenser unit clogged on WTG86400 series",
      "Crushed vent hose on vented models",
      "Blower wheel packed with lint",
    ],
    fixes: [
      "Clean the primary lint screen after every load",
      "On heat-pump models, remove and rinse the condenser cartridge under running water",
      "Disconnect the vent hose and verify strong airflow at the wall port",
      "Vacuum the blower housing through the lint slot",
    ],
    when_to_call_technician:
      "If E03 returns immediately after condenser cleaning on a heat-pump unit, the airflow sensor may need service.",
    affected_models: ["Bosch WTG86401UC", "Bosch WQB245B0UC", "Bosch WTG865H4UC"],
    related_codes: ["e01", "e18"],
  },
  {
    brand: "bosch",
    appliance: "refrigerator",
    error_code: "e2",
    title: "Bosch Refrigerator E2 Error Code",
    summary: "Refrigerator door open alarm",
    meta_description:
      "Bosch fridge E2 indicates the door was open too long or the switch failed. Check alignment and the door contact switch.",
    meaning:
      "E2 is Bosch's extended door-open alarm on built-in refrigeration. After several minutes with the switch open, the panel beeps and shows E2 while the compressor runs continuously to recover temperature.",
    causes: [
      "Door not fully closed against a bulging item",
      "Misaligned panel after hinge adjustment",
      "Failed door switch in the upper jamb",
      "Dirty gasket preventing seal contact",
    ],
    fixes: [
      "Rearrange shelves so containers do not push against the door",
      "Clean the gasket with warm water and verify it seals evenly",
      "Press the door switch manually—you should hear the fan change tone",
      "Level the unit so doors self-close on built-in installs",
    ],
    when_to_call_technician:
      "Switch or hinge cam replacement on built-in Bosch units often needs two-person alignment.",
    affected_models: ["Bosch B36CL80ENS", "Bosch B36CT80SNB", "Bosch B11CB50SSS"],
    related_codes: ["e15", "e24"],
  },
  {
    brand: "bosch",
    appliance: "oven",
    error_code: "f31",
    title: "Bosch Oven F31 Error Code",
    summary: "Upper oven temperature sensor fault",
    meta_description:
      "Bosch oven F31 means the upper cavity sensor circuit failed. Inspect the probe and connector at the rear.",
    meaning:
      "F31 on Bosch double-oven and single-wall units flags the upper cavity temperature sensor as out of range. The oven disables bake and broil in that cavity until the sensor circuit reads normally.",
    causes: [
      "Sensor probe damaged during rack insertion",
      "Wire pinched between the oven frame and insulation",
      "Connector corrosion at the rear harness",
      "Open RTD sensor element",
    ],
    fixes: [
      "Turn off the breaker and allow the oven to cool",
      "Locate the sensor entering the upper rear cavity wall",
      "Follow the wire to the plug behind the oven and reseat it",
      "Inspect for visible breaks where the wire bends into the cavity",
    ],
    when_to_call_technician:
      "Double-oven sensor access is tight—professional replacement avoids damaging the insulation blanket.",
    affected_models: ["Bosch HBL8753UC", "Bosch HBLP751UC", "Bosch HBL8454UC"],
    related_codes: ["e09", "e01"],
  },
];

writeFileSync(
  join(__dirname, "..", "data", "error-codes.json"),
  JSON.stringify(entries, null, 2) + "\n",
  "utf8"
);

console.log(`Wrote ${entries.length} error code entries.`);
