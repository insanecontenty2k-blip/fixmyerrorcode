/** Researched unique copy — Whirlpool oven/range codes F03–F17. Sources: Whirlpool Product Help, Sears PartsDirect ERC codes, EasyBear */
export default [
  {
    brand: "whirlpool", appliance: "oven", error_code: "f03",
    title: "Whirlpool Oven F03 Error Code",
    summary: "Oven temperature sensor shorted",
    meta_description: "Whirlpool oven F03 means shorted temp sensor. Test RTD for ~1080 ohms at room temp, replace WPW10181986 sensor.",
    meaning: "F03 means the oven temperature sensor (RTD) resistance is abnormally low—a short circuit in the probe or its wiring. The ERC cannot read cavity temperature and disables bake and broil elements as a safety step.",
    causes: [
      "Sensor wire insulation melted against the hot oven cavity wall",
      "Short inside the RTD probe from age and heat cycling",
      "Moisture in the sensor connector after steam from cooking",
      "Harness pinched between the oven back panel and cabinet"
    ],
    fixes: [
      "Turn off the breaker and access the sensor through the rear wall inside the oven",
      "Disconnect the sensor plug behind the range and measure resistance—expect about 1,080 ohms at 70°F",
      "Readings well below 500 ohms confirm a short—replace the oven temperature sensor",
      "Route the new sensor wire away from hot walls using high-temperature clips"
    ],
    when_to_call_technician: "If a new sensor tests correct but F03 returns, trace the harness for a short inside the cavity insulation.",
    affected_models: ["Whirlpool WFE505W0BS", "Whirlpool WFG505M0BS", "Whirlpool WGE745C0FS"],
    related_codes: ["f04", "f10", "f02"],
    difficulty: "easy", estimated_time: "30 min"
  },
  {
    brand: "whirlpool", appliance: "oven", error_code: "f04",
    title: "Whirlpool Oven F04 Error Code",
    summary: "Oven temperature sensor open circuit",
    meta_description: "Whirlpool oven F04 means open temp sensor. Reseat connector, test RTD ohms, replace sensor if infinite.",
    meaning: "F04 means the temperature sensor circuit reads infinite resistance—an open wire or fractured RTD element. Without sensor feedback the ERC will not modulate heat and displays F04 with a continuous alert beep.",
    causes: [
      "Sensor connector vibrated loose behind the range",
      "Broken conductor inside the sensor wire at the rear wall grommet",
      "Fractured RTD element inside the probe tip",
      "Corroded connector pins from heat exposure at the ERC plug"
    ],
    fixes: [
      "Pull the range forward and confirm the sensor plug is firmly seated at the ERC",
      "Measure sensor resistance at the disconnected plug—OL/infinite at room temp means open",
      "Inspect the wire where it passes through the oven rear wall for a visible break",
      "Install a new oven temperature sensor if the probe reads open"
    ],
    when_to_call_technician: "Harness repair inside the oven cavity requires pulling the unit—book service if the sensor is good but F04 persists.",
    affected_models: ["Whirlpool WFE505W0BS", "Whirlpool WFG505M0BS", "Whirlpool WGE745C0FS"],
    related_codes: ["f03", "f10", "f02"],
    difficulty: "easy", estimated_time: "30 min"
  },
  {
    brand: "whirlpool", appliance: "oven", error_code: "f05",
    title: "Whirlpool Oven F05 Error Code",
    summary: "ERC watchdog hardware conflict",
    meta_description: "Whirlpool oven F05 means watchdog fault. Power off 10 minutes, inspect ERC, replace control board if code returns.",
    meaning: "F05 means the Electronic Range Control watchdog circuit detected an internal hardware conflict. The ERC microprocessor found conflicting signals between outputs and halted oven operation until the board is reset or replaced.",
    causes: [
      "ERC microprocessor memory corruption after a power surge",
      "Failed voltage regulator on the control board",
      "Loose ground strap between ERC and the metal chassis",
      "Age-related capacitor degradation on the ERC"
    ],
    fixes: [
      "Turn off the breaker for ten minutes—longer than a standard reset",
      "Inspect the ERC for swollen capacitors or burned solder joints",
      "Reseat all wire harness plugs on the ERC after power is removed",
      "Replace the electronic oven control if F05 appears immediately at power-up"
    ],
    when_to_call_technician: "ERC replacement must match your exact model suffix—have a technician verify the part number on the old board.",
    affected_models: ["Whirlpool WFE505W0BS", "Whirlpool WFG505M0BS", "Whirlpool WGE745C0FS"],
    related_codes: ["f01", "f08", "f12"],
    difficulty: "hard", estimated_time: "Call technician"
  },
  {
    brand: "whirlpool", appliance: "oven", error_code: "f06",
    title: "Whirlpool Oven F06 Error Code",
    summary: "Electronic control or wiring fault",
    meta_description: "Whirlpool oven F06 means control wiring fault. Reset breaker 1 minute, check ERC harnesses, verify operation.",
    meaning: "F06 on Whirlpool ranges indicates a problem with the electronic oven control or its associated wiring. The ERC detected an unexpected condition on an input or output line and locked out oven functions.",
    causes: [
      "Loose ribbon cable between the touch pad and ERC",
      "Chafed wire harness touching the oven frame",
      "Failed ERC input buffer on a sensor line",
      "Recent DIY repair leaving a connector partially seated"
    ],
    fixes: [
      "Power down at the breaker for one minute, then restore and monitor one minute",
      "Remove the rear access panel and inspect ERC harnesses for loose or burned connectors",
      "Press Cancel/Off to silence the alarm and attempt a bake preheat test",
      "If F06 returns before preheat begins, plan ERC or harness replacement"
    ],
    when_to_call_technician: "Intermittent F06 often needs live voltage testing at the ERC—schedule a technician with the model tech sheet.",
    affected_models: ["Whirlpool WFE505W0BS", "Whirlpool WFG505M0BS", "Whirlpool WGE745C0FS"],
    related_codes: ["f05", "f07", "f01"],
    difficulty: "hard", estimated_time: "Call technician"
  },
  {
    brand: "whirlpool", appliance: "oven", error_code: "f07",
    title: "Whirlpool Oven F07 Error Code",
    summary: "Function selector or relay circuit fault",
    meta_description: "Whirlpool oven F07 means function selector error. Test selector switch, check ERC relay outputs, replace ERC.",
    meaning: "F07 means the ERC detected a fault on the function selector input—either a worn mechanical selector on older models or a failed output relay selection circuit on touch-control ranges.",
    causes: [
      "Worn function selector dial not clicking into detents",
      "ERC relay driver for bake/broil selection failed",
      "Ribbon cable between touch pad and ERC damaged",
      "User pressing multiple functions simultaneously confusing the ERC"
    ],
    fixes: [
      "Reset power at the breaker for five minutes",
      "On dial models, rotate the selector through every position feeling for loose detents",
      "On touch models, press only one function at a time and retry bake",
      "Replace the selector switch or ERC depending on whether the fault is mechanical or electronic"
    ],
    when_to_call_technician: "Touch-control F07 usually requires ERC replacement—verify with a technician before ordering a selector switch.",
    affected_models: ["Whirlpool WFE505W0BS", "Whirlpool WFG505M0BS", "Whirlpool WGE745C0FS"],
    related_codes: ["f06", "f08", "f05"],
    difficulty: "hard", estimated_time: "Call technician"
  },
  {
    brand: "whirlpool", appliance: "oven", error_code: "f08",
    title: "Whirlpool Oven F08 Error Code",
    summary: "Control board configuration mismatch",
    meta_description: "Whirlpool oven F08 means ERC config error. Verify board part number matches model, reprogram per install sheet.",
    meaning: "F08 means the ERC configuration memory does not match the appliance model. This commonly appears after replacing the control board with an unconfigured or incorrect-revision ERC.",
    causes: [
      "Replacement ERC part number does not match the original exactly",
      "Unprogrammed aftermarket control board installed",
      "Corrupted configuration EEPROM on the ERC",
      "Board swapped between different oven sizes without updating parameters"
    ],
    fixes: [
      "Compare the ERC part number on the board to the tech sheet for your exact model suffix",
      "Follow the programming steps included with an OEM replacement board",
      "If F08 appeared without a recent repair, replace the ERC—EEPROM is corrupted",
      "Restore factory configuration through the setup menu if your model supports it"
    ],
    when_to_call_technician: "Configured ERC programming is model-specific—have a technician install and program the correct board.",
    affected_models: ["Whirlpool WFE505W0BS", "Whirlpool WFG505M0BS", "Whirlpool WGE745C0FS"],
    related_codes: ["f05", "f12", "f01"],
    difficulty: "hard", estimated_time: "Call technician"
  },
  {
    brand: "whirlpool", appliance: "oven", error_code: "f09",
    title: "Whirlpool Oven F09 Error Code",
    summary: "Door latch will not lock or unlock",
    meta_description: "Whirlpool oven F09 is a door latch error. Wait for cooldown, test latch motor, inspect gears after self-clean.",
    meaning: "F09 means the oven door latch mechanism cannot achieve the commanded lock or unlock position. The fault is most common during or after self-clean when the bi-metal lock has not cooled enough to release.",
    causes: [
      "Stripped plastic gears inside the latch motor assembly",
      "Latch motor burned out from repeated self-clean cycles",
      "Food debris around the latch hook preventing engagement",
      "Door opened before the bi-metal lock cooled below 550°F"
    ],
    fixes: [
      "If locked after self-clean, turn off the breaker and wait 30 minutes for the bi-metal to cool",
      "Never force the door—forcing breaks the latch and can shatter the glass",
      "Clean grease around the top latch slot and inspect gears through the vent",
      "Run the door latch test in diagnostic mode—listen for the motor and watch latch travel"
    ],
    when_to_call_technician: "A door stuck locked after cooldown needs manual latch release—schedule service rather than prying the door.",
    affected_models: ["Whirlpool WFE505W0BS", "Whirlpool WFG505M0BS", "Whirlpool WGE745C0FS"],
    related_codes: ["f16", "f17", "f02"],
    difficulty: "medium", estimated_time: "45 min"
  },
  {
    brand: "whirlpool", appliance: "oven", error_code: "f10",
    title: "Whirlpool Oven F10 Error Code",
    summary: "Runaway oven temperature detected",
    meta_description: "Whirlpool oven F10 means over-temperature. Turn off breaker immediately, test sensor, check for welded bake relay.",
    meaning: "F10 is a safety-critical runaway temperature fault—the ERC detected cavity temperature exceeding safe limits during bake, often above 590–650°F when only 350°F was commanded. Heat continues until the breaker is cut.",
    causes: [
      "Welded bake relay on the ERC keeping the element powered",
      "Temperature sensor reading artificially low so the ERC adds more heat",
      "Shorted sensor wiring touching the cavity wall",
      "Failed cooling fan on convection models allowing heat buildup at the ERC"
    ],
    fixes: [
      "Turn off the circuit breaker immediately and allow one to two hours cooldown",
      "Test the temperature sensor—about 1,080 ohms at room temperature",
      "With power off, check for voltage at the bake element connector when the oven is commanded off—a welded relay passes voltage",
      "Replace the sensor first if low; replace the ERC if the sensor is good but overheating continues"
    ],
    when_to_call_technician: "Do not use the oven until F10 is resolved—a welded relay is a fire risk requiring professional ERC replacement.",
    affected_models: ["Whirlpool WFE505W0BS", "Whirlpool WFG505M0BS", "Whirlpool WGE745C0FS"],
    related_codes: ["f02", "f03", "f04"],
    difficulty: "hard", estimated_time: "Call technician"
  },
  {
    brand: "whirlpool", appliance: "oven", error_code: "f11",
    title: "Whirlpool Oven F11 Error Code",
    summary: "Touch pad short detected at ERC",
    meta_description: "Whirlpool oven F11 means shorted keypad. Clean overlay, dry panel, replace touch pad or ERC if F11 persists.",
    meaning: "F11 means the ERC detected a shorted key on the touch pad or overlay membrane. The control thinks a button is permanently pressed and refuses normal operation until the short clears.",
    causes: [
      "Grease or steam moisture bridging touch pad traces",
      "Delaminated overlay from repeated self-clean heat",
      "Cracked touch pad glass allowing liquid ingress",
      "Failed ERC key input stuck low internally"
    ],
    fixes: [
      "Turn off the breaker for three minutes and wipe all buttons with a barely damp cloth",
      "Dry the control panel area if the range sits beside a dishwasher venting steam",
      "Press each key firmly—stuck-feeling keys indicate overlay failure",
      "Replace the touch pad overlay first; replace the ERC if F11 returns with the pad disconnected"
    ],
    when_to_call_technician: "Integrated touch/ERC assemblies on premium models require replacing the combined unit—confirm part style before ordering.",
    affected_models: ["Whirlpool WFE505W0BS", "Whirlpool WFG505M0BS", "Whirlpool WGE745C0FS"],
    related_codes: ["f01", "f07", "f05"],
    difficulty: "medium", estimated_time: "45 min"
  },
  {
    brand: "whirlpool", appliance: "oven", error_code: "f12",
    title: "Whirlpool Oven F12 Error Code",
    summary: "ERC microcomputer self-test failure",
    meta_description: "Whirlpool oven F12 means bad microcomputer on ERC. Inspect board, replace electronic oven control if F12 at power-up.",
    meaning: "F12 means the ERC failed its internal microcomputer check during boot. The processor or supporting memory did not pass startup diagnostics and the oven will not energize elements.",
    causes: [
      "Failed MCU chip on the ERC after power surge",
      "Cracked solder joint on the processor package",
      "Moisture corrosion on the ERC from a steam leak above the range",
      "End-of-life board with multiple failing components"
    ],
    fixes: [
      "Disconnect power for ten minutes and restore—F12 rarely clears but costs nothing to try",
      "Remove the ERC and inspect for burned areas or swollen capacitors",
      "Verify all plugs are seated before condemning the board",
      "Replace the electronic oven control if F12 displays immediately every power-up"
    ],
    when_to_call_technician: "ERC replacement on gas ranges also involves verifying valve wiring—use a qualified appliance technician.",
    affected_models: ["Whirlpool WFE505W0BS", "Whirlpool WFG505M0BS", "Whirlpool WGE745C0FS"],
    related_codes: ["f05", "f08", "f13"],
    difficulty: "hard", estimated_time: "Call technician"
  },
  {
    brand: "whirlpool", appliance: "oven", error_code: "f13",
    title: "Whirlpool Oven F13 Error Code",
    summary: "ERC EEPROM memory fault",
    meta_description: "Whirlpool oven F13 means EEPROM error on ERC. Power-cycle, replace control board, verify correct part number.",
    meaning: "F13 means the EEPROM memory on the Electronic Range Control failed a checksum or read/write test. Stored calibration and cycle data are unreliable, so the ERC halts operation.",
    causes: [
      "Power surge corrupting EEPROM contents",
      "Failed EEPROM chip from heat aging behind the console",
      "Incorrect voltage to the ERC from a loose neutral",
      "Static discharge during a prior control board service"
    ],
    fixes: [
      "Turn off the breaker for five minutes—EEPROM faults seldom clear but attempt once",
      "Check the terminal block neutral wire is tight if F13 appeared after electrical work",
      "Inspect the ERC for moisture stains from a boiling-over pot on the cooktop",
      "Replace the ERC with the exact part number listed on the tech sheet"
    ],
    when_to_call_technician: "Board-level EEPROM failure requires ERC replacement—match the suffix on your model tag before purchase.",
    affected_models: ["Whirlpool WFE505W0BS", "Whirlpool WFG505M0BS", "Whirlpool WGE745C0FS"],
    related_codes: ["f12", "f14", "f08"],
    difficulty: "hard", estimated_time: "Call technician"
  },
  {
    brand: "whirlpool", appliance: "oven", error_code: "f14",
    title: "Whirlpool Oven F14 Error Code",
    summary: "ERC EEPROM checksum failure",
    meta_description: "Whirlpool oven F14 means checksum error. Replace ERC, check for power spikes, verify harness grounds.",
    meaning: "F14 means the ERC detected an EEPROM checksum mismatch on boot—the stored data does not match the expected validation value. The control treats all stored parameters as corrupt.",
    causes: [
      "Incomplete power loss during an ERC firmware write",
      "Lightning surge flipping EEPROM bits",
      "Failed backup capacitor on the ERC losing memory during brief outages",
      "Counterfeit or refurbished board with mismatched firmware"
    ],
    fixes: [
      "Remove power for one minute and retry once",
      "Verify the house outlet provides stable 120/240 V to the range terminal block",
      "Compare the installed ERC part number to the factory label inside the console",
      "Install a new OEM ERC if F14 returns at every power-up"
    ],
    when_to_call_technician: "Repeated F14 after ERC replacement may indicate a power quality issue—an electrician should check the circuit.",
    affected_models: ["Whirlpool WFE505W0BS", "Whirlpool WFG505M0BS", "Whirlpool WGE745C0FS"],
    related_codes: ["f13", "f12", "f05"],
    difficulty: "hard", estimated_time: "Call technician"
  },
  {
    brand: "whirlpool", appliance: "oven", error_code: "f15",
    title: "Whirlpool Oven F15 Error Code",
    summary: "ERC controller self-check failed",
    meta_description: "Whirlpool oven F15 means control self-check fault. Inspect ERC, tighten grounds, replace board if fault latches.",
    meaning: "F15 means the ERC analog-to-digital or watchdog self-check circuit failed during initialization. The board detected its own monitoring hardware is unreliable and locks out heat.",
    causes: [
      "Failed voltage reference chip on the ERC",
      "Broken ground connection at the ERC mounting screw",
      "Thermal damage to the ERC from a prior F10 over-temperature event",
      "Manufacturing defect in the controller batch"
    ],
    fixes: [
      "Power off ten minutes at the breaker and retry",
      "Remove the ERC and confirm the ground strap to the frame is secure",
      "Look for heat discoloration on the board near the relay area",
      "Replace the ERC if F15 is present immediately when power is applied"
    ],
    when_to_call_technician: "F15 after a recent F10 event often means heat-damaged ERC—replace the board before using the oven again.",
    affected_models: ["Whirlpool WFE505W0BS", "Whirlpool WFG505M0BS", "Whirlpool WGE745C0FS"],
    related_codes: ["f05", "f12", "f10"],
    difficulty: "hard", estimated_time: "Call technician"
  },
  {
    brand: "whirlpool", appliance: "oven", error_code: "f16",
    title: "Whirlpool Oven F16 Error Code",
    summary: "Door latch switch failed in lock position",
    meta_description: "Whirlpool oven F16 means latch switch lock fault. Test latch switches, inspect motor, replace latch assembly.",
    meaning: "F16 means the door latch switch reports locked when the ERC commanded unlock, or the lock switch failed to open after self-clean cooldown. The oven prevents starting a new cycle until latch position is verified.",
    causes: [
      "Latch switch stuck closed inside the motor assembly",
      "Broken latch cam not releasing the switch plunger",
      "Wiring short forcing the lock signal high",
      "Motor assembly stopped mid-travel after a power loss during lock"
    ],
    fixes: [
      "Turn off power and wait for the oven to cool if recently self-cleaned",
      "Enter latch diagnostic mode and command lock/unlock—watch for full travel",
      "Test latch switch continuity at locked and unlocked positions",
      "Replace the door latch motor assembly if switches fail to toggle with manual cam movement"
    ],
    when_to_call_technician: "A door that stays locked with F16 after cooldown needs service to manually release and replace the latch.",
    affected_models: ["Whirlpool WFE505W0BS", "Whirlpool WFG505M0BS", "Whirlpool WGE745C0FS"],
    related_codes: ["f17", "f09", "f05"],
    difficulty: "medium", estimated_time: "1 hour"
  },
  {
    brand: "whirlpool", appliance: "oven", error_code: "f17",
    title: "Whirlpool Oven F17 Error Code",
    summary: "Door latch switch failed in unlock position",
    meta_description: "Whirlpool oven F17 means latch switch unlock fault. Clean latch, test switches, replace assembly before self-clean.",
    meaning: "F17 means the latch switch indicates unlocked when the ERC commanded lock—common when starting self-clean. The oven aborts clean mode because it cannot confirm the door is secured.",
    causes: [
      "Grease buildup preventing the latch hook from fully engaging",
      "Worn latch switch not closing when the motor extends",
      "Stripped latch motor gears stopping short of lock",
      "Misaligned door hinge letting the door sit slightly ajar"
    ],
    fixes: [
      "Clean the latch receiver slot on the frame and the hook on the door",
      "Close the door firmly and listen for the latch motor whir at self-clean start",
      "Run the latch test in diagnostics—display should show LOC when locked",
      "Replace the latch assembly if the motor runs but LOC never appears"
    ],
    when_to_call_technician: "Do not force self-clean with F17 present—the oven cannot confirm a safe lock and may overheat at the door seal.",
    affected_models: ["Whirlpool WFE505W0BS", "Whirlpool WFG505M0BS", "Whirlpool WGE745C0FS"],
    related_codes: ["f16", "f09", "f10"],
    difficulty: "medium", estimated_time: "1 hour"
  }
];
