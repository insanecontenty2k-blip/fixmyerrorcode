export interface ApplianceHubContent {
  intro: string;
  common_symptoms: string[];
  general_troubleshooting: string[];
}

export function getApplianceHubKey(brand: string, appliance: string): string {
  return `${brand}:${appliance}`;
}

/** Brand + appliance hub copy — symptoms and pre-code troubleshooting */
export const APPLIANCE_HUB_CONTENT: Record<string, ApplianceHubContent> = {
  "lg:washing-machine": {
    intro:
      "LG front-load and top-load washers use direct-drive motors and self-diagnostic codes on the display or ThinQ app. Most faults relate to drain performance, load balance, or the door lock before spin.",
    common_symptoms: [
      "Water left in the tub after the cycle finishes (often OE or dE)",
      "Washer stops before high-speed spin with UE on the display",
      "Drum won't turn and LE appears even on light loads",
      "Long fill times or IE when both supply valves are open",
      "Excess vibration or banging during spin after years of use",
    ],
    general_troubleshooting: [
      "Unplug the washer for 15 minutes to reset the inverter board, then run a Spin Only cycle with an empty drum",
      "Clean the pump filter behind the lower front panel and confirm the drain hose has a high loop without kinks",
      "Level the washer with a bubble level on top—adjust front legs until stable, then tighten lock nuts",
      "Use HE detergent only and run Tub Clean monthly on models like WM4000HWA and WM3900HWA",
      "Verify both hot and cold supply valves are fully open and inlet screens are not clogged with sediment",
    ],
  },
  "lg:dryer": {
    intro:
      "LG dryers report airflow, moisture sensor, and gas/electric heat faults as alphanumeric codes. Flow Sense models track exhaust restriction over multiple cycles before showing d80–d95.",
    common_symptoms: [
      "Clothes still damp after a full Normal cycle (flow restriction or weak heat)",
      "d80, d90, or d95 after several loads when the vent run is long",
      "TE or tE1 temperature errors on electric and heat-pump models",
      "Dryer runs but produces no heat on gas units (ignition-related codes)",
      "Drum turns but display shows door or moisture sensor faults",
    ],
    general_troubleshooting: [
      "Clean the lint filter and vacuum the lint trap housing before every load",
      "Inspect the full vent run to the exterior hood—remove lint at elbows and confirm the damper opens",
      "Wipe the moisture sensor bars inside the drum with rubbing alcohol if cycles finish early",
      "On gas dryers, confirm the supply valve is open and the vent is not crushed behind the unit",
      "Run a Timed Dry on high heat with a small wet load to separate airflow issues from sensor faults",
    ],
  },
  "lg:dishwasher": {
    intro:
      "LG dishwashers display LE, OE, IE, and AE codes for motor, drain, fill, and leak faults. QuadWash and TrueSteam models add extra sensors at the sump and door.",
    common_symptoms: [
      "Standing water in the bottom after a cycle (OE drain fault)",
      "Dishwasher won't start and LE shows on the display",
      "AE or leak icon with water under the kick plate",
      "Dishes come out cold when the heating element circuit fails",
      "Long fill or IE when the inlet valve or float switch misreads",
    ],
    general_troubleshooting: [
      "Cancel the cycle, remove the lower rack, and clean the filter assembly at the sump",
      "Check the drain hose high loop under the sink and clear the garbage disposal knockout if newly installed",
      "Inspect the door gasket and corner gaskets for food debris preventing a seal",
      "Run an empty cycle with dishwasher cleaner on LDFN4542S and similar models",
      "Verify the home water supply to the dishwasher valve is fully open",
    ],
  },
  "lg:refrigerator": {
    intro:
      "LG refrigerators use ER, FF, dH, and IF codes for fan, freezer, defrost, and ice maker faults. Linear compressor models may show different patterns than conventional units.",
    common_symptoms: [
      "Fresh food section warming while freezer still cools (evaporator fan ER codes)",
      "Ice maker stopped producing or IF fault on the display",
      "Frost buildup in the freezer with dH defrost errors",
      "Compressor runs constantly with FF freezer sensor faults",
      "Water under the crisper drawers from a clogged defrost drain",
    ],
    general_troubleshooting: [
      "Confirm both doors seal fully—clean gasket folds and check for items blocking closure",
      "Vacuum the condenser coils at the rear or behind the lower front grille",
      "Allow 24 hours after a power outage before assuming a sensor fault",
      "Clear ice from the freezer back panel area if airflow feels weak",
      "Check that the unit has 1 inch clearance on sides and rear for ventilation",
    ],
  },
  "lg:oven": {
    intro:
      "LG ranges and wall ovens show F codes for temperature, door lock, and communication faults between the touch panel and main relay board.",
    common_symptoms: [
      "F9 or F11 during or after self-clean when the door lock fails",
      "Oven heats unevenly or F10 runaway temperature alerts",
      "Touch panel unresponsive with F11 or F19 communication errors",
      "Broil or bake element not heating with F15 or F16 element circuit faults",
      "Temperature swings during bake on LREL6325F and similar models",
    ],
    general_troubleshooting: [
      "Cancel self-clean and allow the oven to cool completely before retrying",
      "Verify the range is on a dedicated 240 V circuit without extension cords",
      "Calibrate oven temperature through the settings menu if available on your model",
      "Inspect the door gasket for tears that allow heat loss during bake",
      "Power off at the breaker for five minutes to reset the relay board after a surge",
    ],
  },
  "whirlpool:washing-machine": {
    intro:
      "Whirlpool, Maytag, and Kenmore HE washers share similar F-series and SD codes. Cabrio and top-load models use different patterns than Duet front-loaders.",
    common_symptoms: [
      "F21 or F33 drain faults with water left in the tub",
      "Sd or Sud suds lockout mid-cycle on HE models",
      "F9E1 long fill when screens or valves restrict water",
      "F06 or F07 drive motor faults on Cabrio and Vantage platforms",
      "Excessive vibration before spin on overloaded mixed loads",
    ],
    general_troubleshooting: [
      "Use HE detergent and run Clean Washer with Affresh on WFW5605MW and similar front-loaders",
      "Check the drain pump filter on front-load models behind the lower access panel",
      "Inspect supply hose screens at the wall valves for sediment blocking fill",
      "Redistribute laundry evenly and avoid washing single heavy items alone",
      "Unplug for two minutes to reset the main control after a power blink",
    ],
  },
  "whirlpool:dryer": {
    intro:
      "Whirlpool dryer codes include F01 control faults, F22 exhaust thermistor errors, and AF airflow restriction warnings on vented models.",
    common_symptoms: [
      "AF or lint screen message after every load (restricted vent)",
      "Clothes hot but still damp at cycle end",
      "F22 or F24 thermistor faults on electric models",
      "Gas dryer ignites then shuts off within seconds",
      "Drum not turning with drive belt or motor-related codes",
    ],
    general_troubleshooting: [
      "Clean lint screen and wash with warm soapy water if fabric softener residue builds up",
      "Measure vent run length—Whirlpool recommends professional cleaning if over 25 feet equivalent",
      "Verify the exterior vent hood flap opens fully during operation",
      "On gas units, confirm the shutoff valve is fully open and the line is not kinked",
      "Run a timed high-heat cycle with three wet towels to test heat and airflow together",
    ],
  },
  "whirlpool:dishwasher": {
    intro:
      "Whirlpool and KitchenAid dishwashers use F8, F9, and F12 codes for drain, fill, and heating faults. Flood float switches trigger F8E4 on many 2020+ models.",
    common_symptoms: [
      "F8E4 or overfill with water in the base pan",
      "F9E1 long fill or slow fill at the start of a cycle",
      "Dishes wet and cold when the heating element fails",
      "Grinding noise at drain with F6 or chopper-related faults",
      "Door won't latch and cycle won't start",
    ],
    general_troubleshooting: [
      "Remove kick plate and check for water in the float pan—towel dry if present",
      "Clean the filter and sump area under the lower spray arm",
      "Verify the drain hose loop is at least 20 inches high under the counter",
      "Run a hot water tap at the sink for 30 seconds before starting the dishwasher",
      "Use fresh rinse aid and avoid oversudsing detergent in soft water areas",
    ],
  },
  "whirlpool:refrigerator": {
    intro:
      "Whirlpool refrigerator faults include cooling failures, defrost issues, and ice maker errors on WRX and WRF series units.",
    common_symptoms: [
      "Freezer cold but refrigerator section warm",
      "Ice maker not harvesting or producing hollow cubes",
      "Frost on freezer back wall with defrost heater faults",
      "Water on the kitchen floor from a clogged defrost drain",
      "Compressor running constantly without reaching set temperature",
    ],
    general_troubleshooting: [
      "Clean condenser coils twice per year on bottom-mount and side-by-side models",
      "Verify door gaskets seal by closing a dollar bill in the door—it should resist pull",
      "Check that the freezer vents inside the refrigerator section are not blocked by food",
      "Replace water filter if ice production slowed after six months on filtered models",
      "Allow 24 hours after moving or tipping the unit before plugging in",
    ],
  },
  "whirlpool:oven": {
    intro:
      "Whirlpool oven F-codes cover RTD temperature probes, door lock motors, and touch pad shorts on electric and gas ranges.",
    common_symptoms: [
      "F2 or F3 temperature sensor faults during preheat",
      "F5 door lock errors during self-clean on WFE and WGE ranges",
      "F9 or F11 touch pad or ERC communication faults",
      "Broil works but bake does not (element or relay fault)",
      "Display goes blank after a power surge",
    ],
    general_troubleshooting: [
      "Allow the oven to cool completely before running self-clean again",
      "Verify the oven probe is fully seated if using temperature probe mode",
      "Check that the range cord or junction box connections are tight on electric models",
      "Clean the touch panel with a damp cloth only—no spray cleaners on the membrane",
      "Reset power at the breaker for 60 seconds after F9 communication errors",
    ],
  },
  "samsung:washing-machine": {
    intro:
      "Samsung washers show 4C, 5C, nd, UE, and dC codes on the display or SmartThings. AddWash and EcoBubble models share most fault logic.",
    common_symptoms: [
      "4C or 4E fill errors when water enters slowly",
      "5C, SC, or nd drain faults with water in the tub",
      "UE unbalanced load before spin on WF45 and WF50 series",
      "dC or dc door faults when the latch doesn't confirm",
      "3C or motor faults when the drum won't rotate",
    ],
    general_troubleshooting: [
      "Check both supply hoses and clean inlet valve screens on WF45T6000AW and similar",
      "Clean the drain pump filter at the front lower access panel",
      "Run Spin Only with an empty drum after redistributing a heavy load",
      "Close the AddWash door firmly if your model has the secondary door",
      "Update firmware through SmartThings if Samsung publishes a control board fix",
    ],
  },
  "samsung:dryer": {
    intro:
      "Samsung dryers report tE, hE, dC, and vent blockage codes. Steam models add extra sensors at the drum and duct.",
    common_symptoms: [
      "tE or hE heating element or gas ignition faults",
      "Clothes damp with vent restriction warnings",
      "dC door open codes when the latch switch fails",
      "9C1 or 9E power supply errors after installation",
      "Sensor Dry ends early leaving items damp",
    ],
    general_troubleshooting: [
      "Clean lint filter and sensor bars inside the drum",
      "Inspect flexible vent behind the dryer for crushing or disconnection",
      "On gas models DV45K6500GV and similar, confirm LP or natural gas orifice is correct",
      "Run a Time Dry cycle to bypass moisture sensors during testing",
      "Verify the dryer cord matches the outlet type (3-wire vs 4-wire)",
    ],
  },
  "samsung:dishwasher": {
    intro:
      "Samsung dishwashers display LC leak, OC overflow, 4C fill, and HE heat errors. WaterWall models add extra motor codes.",
    common_symptoms: [
      "LC or leak sensor triggered with water under the unit",
      "OC or over-level when the fill valve sticks open",
      "4C slow fill at cycle start",
      "HE heat fault with cold dishes after the dry cycle",
      "Heavy noise at drain on DW80 and DW50 series",
    ],
    general_troubleshooting: [
      "Inspect door gasket and bottom of the door for food debris causing leaks",
      "Clean the fine and coarse filters in the tub sump",
      "Check the drain hose connection at the sink air gap or disposal",
      "Run Normal cycle with Samsung dishwasher cleaner on DW80CG5451SR",
      "Ensure the unit is level left-to-right and front-to-back",
    ],
  },
  "samsung:refrigerator": {
    intro:
      "Samsung Family Hub and standard French-door refrigerators use 22E, 33E, 40E, and 84E codes for fan, ice maker, and defrost faults.",
    common_symptoms: [
      "22E or 33E evaporator fan faults with warm refrigerator section",
      "Ice maker frozen or not producing on RF28 and RS27 models",
      "84E compressor or inverter faults with no cooling",
      "Water under deli drawer from a frozen or clogged defrost drain",
      "Display panel error after a power outage",
    ],
    general_troubleshooting: [
      "Reset the unit by holding Energy Saver and Lighting on some models for 10 seconds",
      "Manual defrost if heavy frost blocks the evaporator fan on RF23M8070SR",
      "Verify the doors align and gaskets seal on French-door models",
      "Replace water filter if ice production dropped after six months",
      "Leave space for airflow per installation guide—Samsung needs rear clearance",
    ],
  },
  "samsung:oven": {
    intro:
      "Samsung ovens and ranges show SE, tE, and C codes for touch panel, temperature, and communication faults on NX58 and NE63 models.",
    common_symptoms: [
      "SE or 5E touch panel short or stuck key",
      "tE temperature sensor errors during bake or broil",
      "Self-clean interrupted with door lock faults",
      "Convection fan not running during convection bake",
      "Wi-Fi or SmartThings disconnect after board errors",
    ],
    general_troubleshooting: [
      "Dry the control panel if steam from cooktop reached the touch surface",
      "Allow the oven to cool before restarting self-clean on NX60A6511SS",
      "Verify the anti-tip bracket is engaged so the range doesn't tilt",
      "Test bake at 350°F with an oven thermometer to confirm sensor accuracy",
      "Power cycle at the breaker for 60 seconds after SE errors",
    ],
  },
  "bosch:washing-machine": {
    intro:
      "Bosch compact front-load washers use E18 drain, E13 leak, and E01 door lock codes. 500 and 800 series share diagnostic entry via spin and temperature buttons.",
    common_symptoms: [
      "E18 drain timeout with water in the drum",
      "E13 leak protection with water in the base tray",
      "E01 door lock not engaging before fill",
      "E17 or E19 fill faults when supply is restricted",
      "Excessive vibration on spin with unbalanced loads",
    ],
    general_troubleshooting: [
      "Clean the pump access and filter on WAW28440UC and WAT28400UC models",
      "Check the drain hose for kinks—Bosch requires a specific height loop",
      "Dry the base pan if E13 appeared and tilt the unit slightly to drain residual water",
      "Use HE detergent marked for front-loaders only",
      "Run a 90°C sanitize cycle empty monthly to reduce odor and suds residue",
    ],
  },
  "bosch:dryer": {
    intro:
      "Bosch ventless heat-pump dryers use F-codes for condenser, heat pump, and moisture sensor faults distinct from vented American dryers.",
    common_symptoms: [
      "Long dry times on heat-pump models WTG86400UC",
      "Condenser unit needs cleaning message or poor drying performance",
      "Door won't lock and cycle won't start",
      "Heat pump not warming the drum on eco cycles",
      "Lint buildup in the condenser chamber reducing airflow",
    ],
    general_troubleshooting: [
      "Clean the lint filter and the condenser drawer per the manual schedule",
      "Empty the condensed water reservoir if not plumbed to a drain",
      "Avoid overloading—Bosch compact drums need room for heat-pump airflow",
      "Run a high-heat timed cycle to test heat pump separately from sensor dry",
      "Verify the room temperature is above 50°F for heat-pump efficiency",
    ],
  },
  "bosch:dishwasher": {
    intro:
      "Bosch dishwashers are known for E15 leak, E24 drain, E09 heating, and E22 filter errors. Ascenta, 300, 500, and 800 series share many codes.",
    common_symptoms: [
      "E15 flood protection with water in the base and float raised",
      "E24 drain fault at the end of a cycle",
      "E09 heating fault with dishes cold and wet",
      "E22 filter blocked message on the display",
      "E01 or pump errors with humming but no wash action",
    ],
    general_troubleshooting: [
      "Remove the filter assembly in the tub floor and rinse under running water",
      "Check the drain hose for kinks and verify the garbage disposal knockout is removed",
      "Towel-dry the base pan after E15 and locate the source of the leak before resetting",
      "Use Bosch-recommended detergent and rinse aid to avoid oversudsing",
      "Run an empty sanitize cycle on SHPM88Z75N and SHEM63W55N models monthly",
    ],
  },
  "bosch:refrigerator": {
    intro:
      "Bosch counter-depth refrigerators report cooling, ice maker, and door alarm faults on B36 and B30 series built-in units.",
    common_symptoms: [
      "Warm refrigerator section with freezer still cold",
      "Ice maker not filling or producing on B36CL80ENS",
      "Door ajar alarm with gasket seal issues",
      "Water under crisper from defrost drain clogs",
      "Compressor runs loud or constantly after a heat wave",
    ],
    general_troubleshooting: [
      "Clean condenser coils on built-in models per installation clearance requirements",
      "Verify the unit is level so doors self-close and seal",
      "Check ice maker water valve supply if cubes stopped mid-tray",
      "Clear defrost drain with warm water if standing water appears in the fridge",
      "Allow 24 hours after installation before loading fully",
    ],
  },
  "bosch:oven": {
    intro:
      "Bosch wall ovens and ranges use E or F codes for temperature, door lock, and touch control faults on HBL and HDI series.",
    common_symptoms: [
      "Error during pyrolytic self-clean when door lock fails",
      "Temperature inaccurate during European convection bake",
      "Touch panel unresponsive after steam from cooktop",
      "Heating element not energizing on bake but broil works",
      "Cooling fan runs continuously after the oven is off",
    ],
    general_troubleshooting: [
      "Allow the oven to cool completely before self-clean on HBL8453UC",
      "Verify the oven is on a dedicated circuit rated for the nameplate amperage",
      "Clean the door gasket and check the door hinges for smooth closure",
      "Reset by turning off the breaker for five minutes after control errors",
      "Use the temperature offset calibration in the service menu if bake runs hot or cold",
    ],
  },
  "maytag:washing-machine": {
    intro:
      "Maytag washers use F-series codes similar to Whirlpool platforms. MVW and MHW models cover top-load and front-load lines.",
    common_symptoms: [
      "F21 drain fault on MHW5630HW front-loaders",
      "F9E1 long fill when supply screens clog",
      "Sd suds lockout with too much detergent",
      "Lid lock faults on MVW7232HW top-load Bravos",
      "Grinding at spin when the tub bearing wears",
    ],
    general_troubleshooting: [
      "Use HE detergent and run Clean Washer cycle monthly",
      "Clean the drain pump filter on front-load models",
      "Check lid strike alignment on top-loaders if the lid won't lock",
      "Level the washer and lock front leg nuts after adjustment",
      "Unplug two minutes to reset the control after a power surge",
    ],
  },
  "maytag:dryer": {
    intro:
      "Maytag dryer codes include AF airflow, F01 control, and gas valve faults on MED and MGD series vented dryers.",
    common_symptoms: [
      "AF restricted airflow after every load",
      "Clothes still damp with adequate heat at the exhaust",
      "F22 exhaust thermistor on electric MED6230HW",
      "Gas burner cycles off quickly on MGD6230HW",
      "Drum thumping when the support rollers wear",
    ],
    general_troubleshooting: [
      "Clean lint screen and inspect vent run to exterior",
      "Vacuum lint from the blower housing if accessible",
      "Verify gas valve is open on MGD models",
      "Replace crushed flexible vent with rigid or semi-rigid duct",
      "Run timed dry to test heat independent of moisture sensors",
    ],
  },
  "maytag:dishwasher": {
    intro:
      "Maytag dishwashers share Whirlpool F-code logic with MDB and MDT series units for drain, fill, and heat faults.",
    common_symptoms: [
      "F8E4 overfill with water in the base pan",
      "Dishes not drying when the heating element fails",
      "F9E1 slow fill at cycle start",
      "Chopper grinding noise at drain",
      "Door won't latch on MDB4949SKZ",
    ],
    general_troubleshooting: [
      "Clean filter and sump under lower spray arm",
      "Dry base pan if overfill fault latched",
      "Verify drain hose high loop under sink",
      "Run hot water at sink before starting a cycle",
      "Check that the unit is level front to back",
    ],
  },
  "maytag:refrigerator": {
    intro:
      "Maytag French-door and top-freezer refrigerators use cooling and ice maker faults on MFI and MFF series.",
    common_symptoms: [
      "Refrigerator section warm, freezer OK",
      "Ice maker not harvesting cubes",
      "Frost buildup in freezer compartment",
      "Water on floor from defrost drain clog",
      "Compressor runs without shutting off",
    ],
    general_troubleshooting: [
      "Clean condenser coils on MFI2570FEZ and similar",
      "Check door gasket seal with dollar-bill test",
      "Replace filter if ice production slowed",
      "Clear freezer vents blocked by food packages",
      "Verify unit has recommended side clearance",
    ],
  },
  "maytag:oven": {
    intro:
      "Maytag oven F-codes cover temperature probes, door locks, and keypad faults on MER and MEW ranges.",
    common_symptoms: [
      "F2 oven temperature too high",
      "F5 door lock fault during self-clean",
      "F9 touch pad communication error",
      "Bake element not heating on MER8800FZ",
      "Display dim or blank after power event",
    ],
    general_troubleshooting: [
      "Cool oven completely before retrying self-clean",
      "Tighten range power connections at junction box",
      "Clean touch panel with damp cloth only",
      "Test oven probe seating if using probe mode",
      "Reset breaker for 60 seconds after F9",
    ],
  },
  "frigidaire:washing-machine": {
    intro:
      "Frigidaire and Electrolux-platform washers use E, EF, and EFO codes on FFLE and EFLS front-load models.",
    common_symptoms: [
      "EF0 or EFO drain pump faults",
      "Door lock E41 before fill begins",
      "Unbalanced load EFO before spin",
      "Slow fill E11 when screens clog",
      "Motor not running E21 on FFLE3911AW",
    ],
    general_troubleshooting: [
      "Clean pump filter at front lower access",
      "Verify door closes without clothing in gasket",
      "Level washer on FFLE3911AW and lock leg nuts",
      "Use HE detergent only",
      "Unplug 15 minutes to reset control board",
    ],
  },
  "frigidaire:dryer": {
    intro:
      "Frigidaire dryers report E codes for thermistor, airflow, and door faults on FFE and FGX series.",
    common_symptoms: [
      "Clothes damp with clean lint filter",
      "E64 or thermistor heating faults",
      "Door switch fault—dryer won't start",
      "Restricted vent AF-style warnings",
      "Drum not turning—belt or motor fault",
    ],
    general_troubleshooting: [
      "Clean lint filter and vent to exterior",
      "Inspect belt if drum turns freely by hand but not when running",
      "Verify 240V supply on electric FFEQ5111PW",
      "Run timed high heat test load",
      "Check gas supply on FGGF3054MF gas models",
    ],
  },
  "frigidaire:dishwasher": {
    intro:
      "Frigidaire dishwashers use i30 leak, i50 drain, and i60 wash motor codes on FGID and FFID models.",
    common_symptoms: [
      "i30 leak detected in base pan",
      "i50 drain fault at end of cycle",
      "Dishes cold—heating circuit failed",
      "i60 wash motor not running",
      "Door not latching on FFID2426TS",
    ],
    general_troubleshooting: [
      "Dry base and find leak source after i30",
      "Clean filter and check drain hose",
      "Verify garbage disposal knockout removed",
      "Run empty hot cycle with cleaner",
      "Check door alignment on integrated models",
    ],
  },
  "frigidaire:refrigerator": {
    intro:
      "Frigidaire Gallery and Professional refrigerators use SY EF and H codes for fan, sensor, and defrost faults.",
    common_symptoms: [
      "SY EF evaporator fan fault on FGHC",
      "Freezer cold, fridge warm",
      "Ice maker not producing on FRSS",
      "H1 high temperature alarm after door left open",
      "Water under crisper from drain clog",
    ],
    general_troubleshooting: [
      "Reset by unplugging 5 minutes on FGHC2331PF",
      "Clean condenser coils twice yearly",
      "Check door gaskets and alignment",
      "Clear defrost drain with warm water",
      "Replace water filter every six months",
    ],
  },
  "frigidaire:oven": {
    intro:
      "Frigidaire ranges use F codes for RTD, door lock, and keypad faults on FCRE and FPEF models.",
    common_symptoms: [
      "F11 shorted keypad after spill",
      "F10 runaway temperature",
      "Self-clean door lock F5 faults",
      "Broil works, bake doesn't",
      "Display error after power surge",
    ],
    general_troubleshooting: [
      "Dry control panel after liquid spill",
      "Cool oven before self-clean retry",
      "Verify 240V supply on electric ranges",
      "Clean door gasket and hinges",
      "Reset breaker after F11 or F13",
    ],
  },
  "kenmore:washing-machine": {
    intro:
      "Kenmore HE washers (often Whirlpool-built) use F21, F11 CCU-MCU comm, and F35 analog pressure sensor codes on 110.4xxx and 110.5xxx models.",
    common_symptoms: [
      "F21 drain fault on 110.47511701 front-loaders",
      "F11 communication between CCU and MCU",
      "F35 pressure sensor fault at fill",
      "Sd suds lockout",
      "Oversudsing with wrong detergent",
    ],
    general_troubleshooting: [
      "Clean drain pump filter on front-access models",
      "Reseat MS2 and M13 connectors if F11 appears",
      "Use HE detergent only",
      "Check supply hose screens for F35 fill issues",
      "Unplug two minutes to reset CCU",
    ],
  },
  "kenmore:dryer": {
    intro:
      "Kenmore dryers use F01, F22, and F23 codes on 110.6xxx and 110.7xxx series matching Whirlpool platforms.",
    common_symptoms: [
      "F22 exhaust thermistor on 110.61202011",
      "AF airflow restriction",
      "No heat on electric or gas models",
      "F01 main control failure",
      "Drum not turning",
    ],
    general_troubleshooting: [
      "Clean lint screen and full vent run",
      "Test thermistor at blower housing if F22 repeats",
      "Verify gas valve open on 110.73022311",
      "Replace crushed flexible vent",
      "Run timed dry test cycle",
    ],
  },
  "kenmore:dishwasher": {
    intro:
      "Kenmore 665-series dishwashers use F-codes for drain, fill, heat, and UI communication faults.",
    common_symptoms: [
      "F2E4 leak in base on 665.13222K900",
      "F9E1 long fill",
      "F15 heating element fault—cold dishes",
      "F11 UI communication error",
      "Grinding at drain",
    ],
    general_troubleshooting: [
      "Clean filter and sump area",
      "Dry base pan after leak codes",
      "Verify drain hose high loop",
      "Reseat ribbon cable at door if F11",
      "Run hot water at sink before start",
    ],
  },
  "kenmore:refrigerator": {
    intro:
      "Kenmore coldspot and Elite refrigerators use cooling and ice maker faults on 106.xxx (Whirlpool-built) and other platforms.",
    common_symptoms: [
      "Fridge warm, freezer cold on 106.51133210",
      "Ice maker not harvesting",
      "Defrost failure with frost buildup",
      "Water on floor from drain clog",
      "Compressor runs constantly",
    ],
    general_troubleshooting: [
      "Clean condenser coils",
      "Check gasket seal and door alignment",
      "Replace filter if ice slowed",
      "Clear freezer air vents",
      "Allow 24h after move before full load",
    ],
  },
  "kenmore:oven": {
    intro:
      "Kenmore oven F-codes match Whirlpool ERC logic on 790.xxx electric and gas ranges.",
    common_symptoms: [
      "F11 shorted keypad",
      "F3 or F4 RTD probe faults",
      "F5 door lock during clean",
      "Bake element open circuit",
      "Display frozen after surge",
    ],
    general_troubleshooting: [
      "Dry panel after spills on 790.90103013",
      "Cool before self-clean retry",
      "Verify probe fully seated",
      "Tighten power connections",
      "Reset breaker 60 seconds",
    ],
  },
  "ge:washing-machine": {
    intro:
      "GE and GE Profile washers use E, H2O, and UC codes on GFW, GTW, and PTW platforms with different logic for front vs top load.",
    common_symptoms: [
      "H2O supply when fill is slow on GFW650SSNWW",
      "E2 or E22 drain faults",
      "UC unbalanced load before spin",
      "Door lock faults on front-loaders",
      "Motor inverter E3 faults on Profile models",
    ],
    general_troubleshooting: [
      "Check both supply valves and inlet screens",
      "Clean drain pump filter on GFW front-loaders",
      "Redistribute load for UC errors",
      "Level the washer and tighten leg nuts",
      "Power off 60 seconds to reset inverter",
    ],
  },
  "ge:dryer": {
    intro:
      "GE dryers report E-code thermistor, airflow, and gas ignition faults on GTD, GFD, and PTD series.",
    common_symptoms: [
      "E003 exhaust thermistor on GFD65ESSNWW",
      "Clothes damp—vent or heat fault",
      "Door switch—won't start",
      "Gas ignitor cycles without staying lit",
      "Control board E006 comm errors",
    ],
    general_troubleshooting: [
      "Clean lint filter and inspect vent",
      "Reseat thermistor plug at blower housing",
      "Verify gas supply on GFD gas models",
      "Run timed high heat test",
      "Check 240V outlet on electric units",
    ],
  },
  "ge:dishwasher": {
    intro:
      "GE dishwashers use C3, E1, and flood float codes on GDT, GDF, and PDT series with Leak Shield on newer models.",
    common_symptoms: [
      "C3 drain fault on GDT630PGMWW",
      "Flood detected in pan",
      "E1 or fill timeout",
      "Dishes not dry—heat fault",
      "Humming but no wash action",
    ],
    general_troubleshooting: [
      "Clean filter and check drain hose",
      "Dry flood pan if Leak Shield triggered",
      "Verify supply valve fully open",
      "Run sanitize cycle empty",
      "Check door spring tension on built-in models",
    ],
  },
  "ge:refrigerator": {
    intro:
      "GE refrigerators use H, FF, and CC codes on GNE, GFE, and Profile PFE French-door models.",
    common_symptoms: [
      "H21 or fan fault on GNE27JGMWW",
      "Freezer OK, fridge warm",
      "Ice maker not producing",
      "Defrost heater H5 faults",
      "Compressor H9 start relay issues",
    ],
    general_troubleshooting: [
      "Clean condenser coils on GNE27JGMWW",
      "Check door gaskets and ice chute door",
      "Replace water filter every six months",
      "Clear defrost drain clog",
      "Verify recommended air clearance",
    ],
  },
  "ge:oven": {
    intro:
      "GE ovens use F-codes for RTD, lock, keypad, and fan faults on JBS, JBP, and Profile PTS ranges.",
    common_symptoms: [
      "F03 or F04 RTD probe faults on JB735SPSS",
      "F05 door lock during self-clean",
      "F11 shorted keypad after spill",
      "F10 runaway heat shutoff",
      "Convection fan F08 errors",
    ],
    general_troubleshooting: [
      "Reseat oven probe—~1080 ohms at room temp for F03",
      "Dry control panel after spills",
      "Cool completely before self-clean",
      "Verify 240V supply on electric ranges",
      "Reset breaker after F13 memory errors",
    ],
  },
};

export function getApplianceHubContent(
  brand: string,
  appliance: string
): ApplianceHubContent | undefined {
  return APPLIANCE_HUB_CONTENT[getApplianceHubKey(brand, appliance)];
}

/** Fallback when a combo is missing from the map */
export function buildFallbackHubContent(
  brandName: string,
  applianceName: string,
  codeCount: number
): ApplianceHubContent {
  return {
    intro: `${brandName} ${applianceName.toLowerCase()} models in our database report ${codeCount} documented error codes. Use the table below to find your code, then follow the linked guide for causes and step-by-step fixes.`,
    common_symptoms: [
      `Display shows a fault code mid-cycle on ${brandName} ${applianceName.toLowerCase()} models`,
      "Appliance stops before completing wash, dry, or heat step",
      "Unusual noise at drain, spin, or ignition followed by a code",
      "Water or heat-related performance drops before the error appears",
      "Code returns immediately after power reset on repeated cycles",
    ],
    general_troubleshooting: [
      `Unplug the ${applianceName.toLowerCase()} for 60 seconds to reset the control board`,
      "Confirm water, gas, or electrical supply matches installation requirements",
      "Inspect hoses, vents, and filters for blockages before replacing parts",
      "Run a short test cycle with a minimal load to isolate sensor vs mechanical faults",
      "Note the exact code and any blinking pattern before calling for service",
    ],
  };
}
