/** Display aliases — same fault, alternate panel spelling searched on Google */
export default [
  {
    brand: "whirlpool", appliance: "washing-machine", error_code: "5d",
    title: "Whirlpool Washer 5d Error Code",
    summary: "Display shows 5d instead of Sd—suds lockout",
    meta_description: "Whirlpool 5d is the same as Sd suds detected. Use HE detergent only, run Rinse & Spin, clean pump filter if needed.",
    meaning: "5d appears on some Whirlpool LED panels where the letter S looks like the numeral 5—it is the same Suds Detected lockout as Sd, not a separate hardware fault. The machine extended drain trying to break foam before spin.",
    causes: [
      "Regular detergent oversudsing in an HE washer",
      "Softener or detergent in the wrong dispenser compartment",
      "Heavy soil cycle with double detergent dose",
      "Drain path slow enough that suds linger in the tub"
    ],
    fixes: [
      "Run Rinse & Spin with an empty drum and no soap",
      "Use HE detergent to the lowest line for soft water",
      "Add one cup white vinegar on a hot rinse if foam remains visible",
      "Clean the pump filter if 5d appeared at the end of drain with water left"
    ],
    when_to_call_technician: "5d every wash with correct HE dose and clean filter suggests pressure sensor or drain pump service—not suds.",
    affected_models: ["Whirlpool WFW75HEFW0", "Whirlpool WFW5620HW", "Whirlpool WTW7120HW"],
    related_codes: ["sd", "f9e1", "f21"],
    difficulty: "easy", estimated_time: "15 min"
  },
];
