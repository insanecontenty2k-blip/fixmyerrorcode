/** Researched unique copy — LG washing machine codes. Sources: LG USA Support, FixDaddy, Mr. Appliance */
export default [
  {
    brand: "lg", appliance: "washing-machine", error_code: "oe",
    title: "LG Washing Machine OE Error Code",
    summary: "Water won't drain from the tub",
    meta_description: "LG washer OE means the drain cycle timed out. Clean the pump filter, check the drain hose, and clear suds blockages.",
    meaning: "OE is LG's Outlet Error. The drain pump ran but water remained in the tub after the allowed drain window—about 5–7 minutes on most front-loaders, or up to 13 minutes on some top-load models. The washer stops before spin to avoid leaving a full tub.",
    causes: [
      "Pump filter clogged with lint, coins, or hair ties",
      "Drain hose kinked behind the washer or pushed too far into the standpipe",
      "Excess suds from non-HE detergent creating air pockets in the pump",
      "Frozen drain hose or standpipe in cold weather installations"
    ],
    fixes: [
      "Open the bottom-front service panel, drain the emergency hose into a shallow pan, then unscrew and clean the pump filter",
      "Straighten the drain hose and keep 4–10 inches clearance from the wall so it cannot kink",
      "Disconnect the hose at the standpipe and confirm water flows freely during a Spin cycle test",
      "Run a Tub Clean cycle with reduced detergent if suds were visible before the error"
    ],
    when_to_call_technician: "Call service if the pump hums during spin but water never moves—the drain pump motor or impeller likely failed.",
    affected_models: ["LG WM3400CW", "LG WM3900HWA", "LG WT7800CW"],
    related_codes: ["le", "ue", "de"],
    difficulty: "easy", estimated_time: "10 min"
  },
  {
    brand: "lg", appliance: "washing-machine", error_code: "le",
    title: "LG Washing Machine LE Error Code",
    summary: "Direct-drive motor locked or overloaded",
    meta_description: "LG LE error means the drum motor won't turn. Reduce load, check for obstructions, reset the board—hall sensor may need replacement.",
    meaning: "LE means Locked Motor Error on LG's direct-drive washers. The inverter board detected the drum cannot rotate—often from overload, a jammed object, or a failed hall sensor on the stator. You may hear a brief hum then the cycle stops.",
    causes: [
      "Overloaded drum binding the rotor on heavy bedding or dense loads",
      "Sock or underwire caught between the inner drum and outer tub",
      "Loose rotor bolt on the back of the direct-drive motor",
      "Failed hall sensor or stator winding on the motor assembly"
    ],
    fixes: [
      "Unplug the washer for 15 minutes to reset the inverter board",
      "Remove several items from the load and redistribute remaining laundry evenly",
      "With the door open, rotate the drum by hand—it should spin freely with slight resistance",
      "If LE returns on a light load after reset, stop using the machine until the motor or hall sensor is diagnosed"
    ],
    when_to_call_technician: "Hall sensor and stator repairs require rear-panel access and live motor testing—schedule LG service if LE repeats after a light load test.",
    affected_models: ["LG WM9000HVA", "LG WM3700HWA", "LG WM3500CW"],
    related_codes: ["oe", "ue", "de"],
    difficulty: "hard", estimated_time: "Call technician"
  },
  {
    brand: "lg", appliance: "washing-machine", error_code: "ue",
    title: "LG Washing Machine UE Error Code",
    summary: "Load unbalanced before high-speed spin",
    meta_description: "LG UE error stops spin when laundry is unevenly distributed. Redistribute clothes, level the washer, avoid single heavy items alone.",
    meaning: "UE is an Unbalanced Error. Before reaching full spin speed, LG washers measure drum movement; if weight is piled on one side, the machine pauses and displays UE rather than shake violently. Single heavy items like bath mats are a frequent trigger.",
    causes: [
      "One heavy garment clumped against the drum wall",
      "Washer not level—front legs uneven or nut not locked",
      "Worn shock absorbers allowing excessive tub movement",
      "Small load with insufficient items to balance the drum"
    ],
    fixes: [
      "Pause the cycle, open the door, and spread clothes around the entire drum perimeter",
      "Add one or two towels when washing a single heavy item alone",
      "Place a level on the washer top and adjust front legs until the bubble centers, then tighten lock nuts",
      "Retry on Spin Only at 800 RPM before attempting a full wash cycle"
    ],
    when_to_call_technician: "If UE appears on balanced full loads after leveling, worn suspension rods or shock absorbers inside the tub assembly likely need replacement.",
    affected_models: ["LG WM8100HVA", "LG WM4000HWA", "LG WT7300CW"],
    related_codes: ["oe", "le", "de"],
    difficulty: "easy", estimated_time: "10 min"
  },
  {
    brand: "lg", appliance: "washing-machine", error_code: "de",
    title: "LG Washing Machine dE Error Code",
    summary: "Door not locked before cycle start",
    meta_description: "LG dE means the door lock circuit did not confirm closure. Check the gasket, strike plate, and door latch assembly.",
    meaning: "dE (also shown as dE1 or dE2 on some displays) means the washer will not fill or spin because the door lock switch never reported a locked position. LG front-loaders require a confirmed latch before the inlet valves open.",
    causes: [
      "Clothing trapped in the door gasket preventing full closure",
      "Misaligned door strike not pressing the latch switch",
      "Broken door hook on the door assembly",
      "Failed door lock motor or wiring harness at the hinge"
    ],
    fixes: [
      "Remove any fabric from the gasket fold and press the door until you hear a single lock click",
      "Inspect the strike plate on the cabinet frame for looseness and retighten mounting screws",
      "Power-cycle by unplugging for two minutes, then close the door firmly and restart",
      "Listen at the lock during start—a buzzing with no click suggests a failed latch motor"
    ],
    when_to_call_technician: "Replace the door lock assembly through a technician if the door physically closes but dE persists every cycle.",
    affected_models: ["LG WM4370HKA", "LG WM4200HBA", "LG WM3997HWA"],
    related_codes: ["oe", "le", "ue"],
    difficulty: "medium", estimated_time: "30 min"
  },
  {
    brand: "lg", appliance: "washing-machine", error_code: "fe",
    title: "LG Washing Machine FE Error Code",
    summary: "Overfill or water entering unexpectedly",
    meta_description: "LG FE error indicates too much water in the tub. Shut off supply valves immediately and inspect the inlet valve and pressure hose.",
    meaning: "FE is a Fill Error tied to overfill detection. The pressure switch or water level sensor reports more water than expected—sometimes because an inlet valve stuck open, the pressure hose disconnected, or the drain failed and water accumulated between cycles.",
    causes: [
      "Inlet valve stuck open due to mineral buildup on the solenoid",
      "Pressure switch air dome tube disconnected from the tub",
      "Drain failure leaving water from a prior cycle",
      "Control board relay welded closed on the water valve circuit"
    ],
    fixes: [
      "Turn off hot and cold supply valves behind the washer immediately",
      "Unplug the machine and inspect the clear pressure hose from the tub dome to the control panel",
      "Reconnect or replace the hose if cracked, kinked, or loose at either end",
      "With water off, plug back in and run a Drain cycle only—do not run Fill until FE clears"
    ],
    when_to_call_technician: "If the tub fills while the washer is unplugged, both inlet valves are stuck open and must be replaced before use.",
    affected_models: ["LG WM9500HKA", "LG WM8100HVA", "LG WM5000HVA"],
    related_codes: ["pe", "ie", "oe"],
    difficulty: "medium", estimated_time: "30 min"
  },
  {
    brand: "lg", appliance: "washing-machine", error_code: "pe",
    title: "LG Washing Machine PE Error Code",
    summary: "Water level sensor fault",
    meta_description: "LG PE error means the pressure sensor cannot read tub water level. Check the air dome hose and pressure switch connection.",
    meaning: "PE indicates a Pressure Error—the water level sensor is not sending a valid signal to the main board. The washer may refuse to fill, drain, or advance cycles because it cannot determine how much water is in the tub.",
    causes: [
      "Air dome hose disconnected or cracked between tub and pressure switch",
      "Pressure switch diaphragm failed or clogged with detergent residue",
      "Loose wire connector at the pressure sensor on the control board",
      "Main control board pressure input circuit damaged"
    ],
    fixes: [
      "Unplug the washer and locate the thin clear hose running from the tub to the top control housing",
      "Remove the hose at both ends and blow through it—air should pass freely with no blockage",
      "Reattach the hose firmly to the tub air dome nipple and pressure switch port",
      "Run a small load cycle and watch whether fill stops at the correct level"
    ],
    when_to_call_technician: "If the hose is intact and PE returns, the pressure switch or control board input needs bench testing with a multimeter.",
    affected_models: ["LG WM3400CW", "LG WM3700HWA", "LG WT7800CW"],
    related_codes: ["fe", "ie", "oe"],
    difficulty: "medium", estimated_time: "30 min"
  },
  {
    brand: "lg", appliance: "washing-machine", error_code: "te",
    title: "LG Washing Machine tE Error Code",
    summary: "Thermistor reading out of range",
    meta_description: "LG tE error means the water temperature sensor signal is invalid. Inspect the thermistor wiring and heater circuit.",
    meaning: "tE is a Thermistor Error. The NTC sensor that reports wash water temperature sent a resistance value outside the expected range—open circuit, short, or a reading that never changes during heated cycles.",
    causes: [
      "Thermistor connector loose at the tub or heater assembly",
      "Damaged sensor wire rubbing against the tub during spin",
      "Failed NTC thermistor element",
      "Heater circuit fault causing erratic temperature feedback"
    ],
    fixes: [
      "Unplug the washer and inspect the two-wire connector on the tub thermistor",
      "Reseat the connector and check wires for burn marks near the heater terminals",
      "Run a warm wash and carefully feel door-glass temperature mid-cycle",
      "Power-cycle and retry—occasional tE can clear after a single board reset"
    ],
    when_to_call_technician: "Technicians compare thermistor ohms against the LG service chart at room temperature; replacement is needed if readings are open.",
    affected_models: ["LG WM3900HWA", "LG WM4000HWA", "LG WM8100HVA"],
    related_codes: ["he", "ie", "fe"],
    difficulty: "medium", estimated_time: "30 min"
  },
  {
    brand: "lg", appliance: "washing-machine", error_code: "ie",
    title: "LG Washing Machine IE Error Code",
    summary: "No water detected during fill",
    meta_description: "LG IE error means the washer did not detect incoming water. Open supply valves and clean inlet hose mesh screens.",
    meaning: "IE is an Inlet Error. The inlet valves opened but the water level sensor never registered a rise within the fill timeout—so the board assumes no water entered the tub.",
    causes: [
      "Hot or cold supply valve closed or partially shut",
      "Clogged mesh screens inside the inlet hose connections at the washer",
      "Kinked inlet hoses pinned against the wall",
      "Failed inlet valve solenoid on one side of a dual valve"
    ],
    fixes: [
      "Turn both wall supply valves fully counterclockwise",
      "Unscrew inlet hoses from the back of the washer and rinse the mesh filters in a bucket",
      "Straighten hoses and pull the machine forward slightly to remove kinks",
      "Run a cold-fill cycle and watch through the door glass for incoming water"
    ],
    when_to_call_technician: "If water flows strongly at the hose ends but the tub stays empty, the inlet valve or water level sensor requires professional diagnosis.",
    affected_models: ["LG WM3400CW", "LG WM3500CW", "LG WT7300CW"],
    related_codes: ["fe", "pe", "oe"],
    difficulty: "easy", estimated_time: "10 min"
  },
  {
    brand: "lg", appliance: "washing-machine", error_code: "he",
    title: "LG Washing Machine HE Error Code",
    summary: "Heater circuit not heating water",
    meta_description: "LG HE washer error indicates the heating element did not raise water temperature. Check heater connections and incoming hot water supply.",
    meaning: "HE on select LG washers with internal heaters means the element did not bring wash water to the target temperature within the programmed time. Models without a heater may show HE for a related heating or thermistor fault—check your manual.",
    causes: [
      "Household water heater below 120°F delivering lukewarm fill water",
      "Open heating element or burned terminal at the tub heater",
      "Tripped thermal fuse on the heater assembly",
      "Thermistor giving false cold readings to the board"
    ],
    fixes: [
      "Run the kitchen tap until hot before starting a warm or sanitize cycle",
      "Verify the water heater thermostat is set to at least 120°F",
      "Unplug and inspect heater terminals under the tub for corrosion or burn marks",
      "Retry on a warm cycle after confirming hot water at the wall valves"
    ],
    when_to_call_technician: "Element and thermal fuse testing requires accessing the tub heater from the rear or bottom—schedule service if water stays cold through a warm cycle.",
    affected_models: ["LG WM9500HKA", "LG WM9000HVA", "LG WM8100HVA"],
    related_codes: ["te", "ie", "fe"],
    difficulty: "medium", estimated_time: "30 min"
  },
  {
    brand: "lg", appliance: "washing-machine", error_code: "se",
    title: "LG Washing Machine SE Error Code",
    summary: "Motor speed sensor mismatch",
    meta_description: "LG SE error indicates the hall sensor and motor RPM don't agree. Often follows LE codes—motor or sensor service likely needed.",
    meaning: "SE is a Sensor Error on the motor circuit. The hall sensor reported drum speed that did not match what the inverter board commanded—often appearing after repeated LE events or following a power surge.",
    causes: [
      "Failed hall sensor on the stator assembly",
      "Loose motor harness connector at the inverter board",
      "Damaged stator wiring from vibration",
      "Inverter board unable to drive the motor correctly"
    ],
    fixes: [
      "Unplug for 15 minutes and retry with a small test load",
      "Ensure the drum spins freely by hand with the door open",
      "Avoid back-to-back heavy cycles that overheat the motor",
      "Note whether SE appears with LE—both together strongly indicate motor circuit service"
    ],
    when_to_call_technician: "SE that persists after reset typically requires hall sensor or stator replacement on LG direct-drive platforms.",
    affected_models: ["LG WM3700HWA", "LG WM3900HWA", "LG WM4000HWA"],
    related_codes: ["le", "te", "pe"],
    difficulty: "hard", estimated_time: "Call technician"
  },
  {
    brand: "lg", appliance: "washing-machine", error_code: "ae",
    title: "LG Washing Machine AE Error Code",
    summary: "Auto shutoff from leak detection",
    meta_description: "LG AE on some washers indicates a leak sensor or auto-shutoff event. Inspect hoses, door boot, and tub seals for moisture.",
    meaning: "AE indicates an Auto Error shutoff related to leak or overflow protection on certain LG models. The machine stopped incoming water and locked out further operation until the leak path is identified and dried.",
    causes: [
      "Loose drain hose clamp leaking during spin",
      "Torn door boot allowing water to escape at the front",
      "Over-sudding pushing foam through the door seal",
      "Internal tub hose clamp slipped during transport"
    ],
    fixes: [
      "Unplug and pull the washer forward to inspect the rear drain hose connections",
      "Examine the gray door boot fold for pinholes or tears at the bottom",
      "Use HE detergent only and reduce amount if suds overflowed before AE",
      "Dry any moisture at the base and run a short rinse to confirm no new leaks"
    ],
    when_to_call_technician: "If AE returns after one cycle with a dry base, an internal hose or tub seal is leaking and needs disassembly.",
    affected_models: ["LG WM8100HVA", "LG WM9000HVA", "LG WM5000HVA"],
    related_codes: ["fe", "oe", "pe"],
    difficulty: "medium", estimated_time: "30 min"
  },
  {
    brand: "lg", appliance: "washing-machine", error_code: "ce",
    title: "LG Washing Machine CE Error Code",
    summary: "Communication error between boards",
    meta_description: "LG CE error means the main and display boards lost communication. Try a power reset; persistent CE needs board diagnosis.",
    meaning: "CE is a Communication Error between the main control board and the sub-PCB or display module. Cycles may freeze mid-program or the panel may flash CE without responding to buttons.",
    causes: [
      "Loose ribbon cable between display and main board",
      "Power surge damaging a board communication chip",
      "Moisture or condensation on board connectors",
      "Failed sub-PCB on models with separate inverter communication"
    ],
    fixes: [
      "Unplug the washer for five full minutes, then restore power",
      "Press and hold Power for three seconds to clear a stuck UI state",
      "Avoid using the machine on an unprotected outlet during storms",
      "If CE appears at startup every time, photograph the code and model plate for service"
    ],
    when_to_call_technician: "CE after power reset usually requires main board or display PCB replacement with model-matched parts.",
    affected_models: ["LG WM3900HWA", "LG WM3700HWA", "LG WM3400CW"],
    related_codes: ["ne", "pf", "se"],
    difficulty: "hard", estimated_time: "Call technician"
  },
  {
    brand: "lg", appliance: "washing-machine", error_code: "ne",
    title: "LG Washing Machine nE Error Code",
    summary: "Wi-Fi or SmartThinQ network fault",
    meta_description: "LG nE on connected washers indicates a network module error. Reset router and washer Wi-Fi; nE does not stop washing on most models.",
    meaning: "nE is a Network Error on LG smart washers with Wi-Fi. The onboard Wi-Fi module failed to connect or lost pairing with the SmartThinQ app—it typically does not prevent manual washing but blocks remote start and notifications.",
    causes: [
      "Router password changed without updating washer settings",
      "Weak Wi-Fi signal at the laundry room location",
      "SmartThinQ module firmware glitch after power outage",
      "Failed Wi-Fi PCB on the washer"
    ],
    fixes: [
      "Open SmartThinQ and remove the washer, then re-add it using the on-screen pairing steps",
      "Move the router closer or add a mesh node if signal strength is below two bars",
      "Unplug the washer for two minutes to reset the Wi-Fi module",
      "Confirm the washer still runs locally—nE alone does not indicate a wash system fault"
    ],
    when_to_call_technician: "If the washer washes normally but nE never clears after re-pairing, the Wi-Fi module may need replacement.",
    affected_models: ["LG WM9000HVA", "LG WM9500HKA", "LG WM8900HBA"],
    related_codes: ["ce", "pf", "cl"],
    difficulty: "easy", estimated_time: "10 min"
  },
  {
    brand: "lg", appliance: "washing-machine", error_code: "ff",
    title: "LG Washing Machine FF Error Code",
    summary: "Freeze detection or frozen fill lines",
    meta_description: "LG FF error means the washer detected freezing conditions. Thaw inlet lines and protect the machine from cold ambient temperatures.",
    meaning: "FF indicates Freeze Fault detection. LG washers in garages or unheated spaces can trigger FF when inlet water or internal lines approach freezing—the machine locks out fill to prevent ice damage to valves and hoses.",
    causes: [
      "Ambient temperature below 32°F in the installation area",
      "Frozen inlet hoses or wall supply lines",
      "Residual water in the inlet valve froze overnight",
      "Washer stored in an unheated space during winter move-in"
    ],
    fixes: [
      "Raise room temperature above 40°F or relocate the washer to a heated space",
      "Warm frozen inlet lines with a hair dryer on low—never use open flame",
      "Pour warm (not boiling) water over accessible hose sections until flow returns",
      "After thawing, run a warm fill cycle and confirm FF clears before regular use"
    ],
    when_to_call_technician: "If FF persists in a heated room above 50°F, the freeze sensor or inlet valve may have internal ice damage.",
    affected_models: ["LG WM3400CW", "LG WT7800CW", "LG WM3700HWA"],
    related_codes: ["ie", "pf", "fe"],
    difficulty: "medium", estimated_time: "30 min"
  },
  {
    brand: "lg", appliance: "washing-machine", error_code: "pf",
    title: "LG Washing Machine PF Error Code",
    summary: "Power interrupted mid-cycle",
    meta_description: "LG PF means power failed during a cycle. Press Start to resume or drain if water remains in the tub.",
    meaning: "PF is a Power Failure code—not a component fault. The control board lost AC power during a cycle from a tripped breaker, brief outage, or someone unplugging the unit. LG stores enough state to offer resume on some models.",
    causes: [
      "Tripped circuit breaker or blown fuse on the laundry circuit",
      "Loose power cord at the outlet or terminal block",
      "Brief neighborhood power outage during the cycle",
      "Using an extension cord that cannot sustain motor start current"
    ],
    fixes: [
      "Check the breaker panel and reset any tripped laundry-room circuit",
      "Press Start—many LG models offer Resume if power returned within a few minutes",
      "If water sits in the tub, run Drain + Spin before restarting the full cycle",
      "Plug directly into a grounded 120V outlet rated for 15A—avoid extension cords"
    ],
    when_to_call_technician: "If PF appears while other appliances on the same circuit work fine, inspect the washer power cord and terminal block for heat damage.",
    affected_models: ["LG WM3400CW", "LG WM3900HWA", "LG WT7300CW"],
    related_codes: ["ce", "ne", "ff"],
    difficulty: "easy", estimated_time: "10 min"
  },
];
