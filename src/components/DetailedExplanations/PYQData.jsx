const PYQData = [
  {
    id: 1,
    question: "Which vitamin deficiency causes night blindness?",
    options: ["Vitamin A", "Vitamin D", "Vitamin E", "Vitamin K"],
    answer: "Vitamin A",
    explanation: "Vitamin A is required for the formation of rhodopsin in retinal rods. Its deficiency leads to impaired vision in dim light — night blindness (nyctalopia)."
  },
  {
    id: 2,
    question: "Which of the following is the first-line treatment for anaphylaxis?",
    options: ["IV Hydrocortisone", "IM Adrenaline", "IV Dopamine", "IM Chlorpheniramine"],
    answer: "IM Adrenaline",
    explanation: "Intramuscular adrenaline is the first-line drug in anaphylaxis. It quickly reverses bronchospasm, hypotension, and angioedema."
  },
  {
    id: 3,
    question: "Which bacteria is associated with colon cancer?",
    options: ["Clostridium difficile", "Escherichia coli", "Helicobacter pylori", "Streptococcus bovis"],
    answer: "Streptococcus bovis",
    explanation: "Streptococcus bovis bacteremia or endocarditis is associated with colonic malignancy — always screen with colonoscopy."
  },
  {
    id: 4,
    question: "The most common site for ectopic pregnancy is:",
    options: ["Isthmus", "Fimbrial end", "Ampulla", "Interstitial"],
    answer: "Ampulla",
    explanation: "Ampulla of the fallopian tube is the site of fertilization and the most common site of ectopic pregnancy (~70%)."
  },
  {
    id: 5,
    question: "Which stain is used for Mycobacterium tuberculosis?",
    options: ["Gram stain", "PAS stain", "Ziehl-Neelsen stain", "Giemsa stain"],
    answer: "Ziehl-Neelsen stain",
    explanation: "Mycobacteria are acid-fast due to mycolic acid. Ziehl-Neelsen staining highlights acid-fast bacilli using carbol fuchsin."
  },
  {
    id: 6,
    question: "What is the antidote for paracetamol poisoning?",
    options: ["Atropine", "N-acetylcysteine", "Sodium bicarbonate", "Naloxone"],
    answer: "N-acetylcysteine",
    explanation: "NAC replenishes glutathione and detoxifies NAPQI, the toxic metabolite of paracetamol overdose."
  },
  {
    id: 7,
    question: "Which hormone is elevated in PCOS?",
    options: ["FSH", "LH", "TSH", "Prolactin"],
    answer: "LH",
    explanation: "In PCOS, LH:FSH ratio is increased, typically >2:1, contributing to anovulation and hyperandrogenism."
  },
  {
    id: 8,
    question: "Which nerve innervates the diaphragm?",
    options: ["Vagus", "Phrenic", "Intercostal", "Recurrent laryngeal"],
    answer: "Phrenic",
    explanation: "The phrenic nerve (C3, C4, C5) provides motor and sensory supply to the diaphragm."
  },
  {
    id: 9,
    question: "Which of the following causes microcytic hypochromic anemia?",
    options: ["Iron deficiency", "Vitamin B12 deficiency", "Folate deficiency", "Aplastic anemia"],
    answer: "Iron deficiency",
    explanation: "Iron deficiency impairs hemoglobin synthesis, leading to smaller (microcytic) and paler (hypochromic) red blood cells."
  },
  {
    id: 10,
    question: "Investigation of choice for pulmonary embolism?",
    options: ["V/Q scan", "Chest X-ray", "CT pulmonary angiography", "ECG"],
    answer: "CT pulmonary angiography",
    explanation: "CTPA is the gold standard for diagnosing PE, directly visualizing emboli in the pulmonary arteries."
  },
  {
    id: 11,
    question: "Which of the following drugs causes gingival hyperplasia?",
    options: ["Phenytoin", "Valproate", "Carbamazepine", "Phenobarbital"],
    answer: "Phenytoin",
    explanation: "Phenytoin, a sodium channel blocker, causes gingival hyperplasia in ~20% of users by stimulating fibroblasts."
  },
  {
    id: 12,
    question: "Which vitamin is synthesized by gut flora?",
    options: ["Vitamin B12", "Vitamin K", "Vitamin C", "Vitamin A"],
    answer: "Vitamin K",
    explanation: "Gut bacteria synthesize vitamin K, which is essential for activation of clotting factors II, VII, IX, X."
  },
  {
    id: 13,
    question: "In a case of hypovolemic shock, what happens to pulse pressure?",
    options: ["Increases", "Decreases", "Remains normal", "Becomes wide"],
    answer: "Decreases",
    explanation: "Pulse pressure narrows in hypovolemia due to decreased stroke volume (low systolic pressure)."
  },
  {
    id: 14,
    question: "The half-life of a drug is 6 hours. How much remains after 18 hours?",
    options: ["1/2", "1/4", "1/8", "1/16"],
    answer: "1/8",
    explanation: "After 3 half-lives (18 hours): (1/2)^3 = 1/8 remains."
  },
  {
    id: 15,
    question: "Which of the following is teratogenic?",
    options: ["Insulin", "Valproate", "Metformin", "Labetalol"],
    answer: "Valproate",
    explanation: "Valproate interferes with folate metabolism, increasing risk of neural tube defects (e.g., spina bifida)."
  },
  {
    id: 16,
    question: "Which electrolyte abnormality is seen in Addison’s disease?",
    options: ["Hypernatremia", "Hyponatremia", "Hypercalcemia", "Hyperglycemia"],
    answer: "Hyponatremia",
    explanation: "Due to aldosterone deficiency, sodium is lost in urine and potassium is retained → hyponatremia and hyperkalemia."
  },
  {
    id: 17,
    question: "What is the drug of choice for status epilepticus?",
    options: ["Phenobarbital", "Phenytoin", "Lorazepam", "Levetiracetam"],
    answer: "Lorazepam",
    explanation: "IV lorazepam is first-line due to rapid onset and long CNS action. Phenytoin follows for long-term control."
  },
  {
    id: 18,
    question: "Which of the following is NOT seen in nephrotic syndrome?",
    options: ["Proteinuria", "Hyperlipidemia", "Hematuria", "Hypoalbuminemia"],
    answer: "Hematuria",
    explanation: "Nephrotic syndrome = proteinuria >3.5 g/day, hypoalbuminemia, hyperlipidemia, edema. Hematuria suggests nephritic pattern."
  },
  {
    id: 19,
    question: "Which hepatitis virus is DNA virus?",
    options: ["HAV", "HBV", "HCV", "HEV"],
    answer: "HBV",
    explanation: "HBV is a partially double-stranded DNA virus. All others are RNA viruses."
  },
  {
    id: 20,
    question: "What is the most common cause of pneumonia in adults?",
    options: ["Klebsiella", "Mycoplasma", "Streptococcus pneumoniae", "Legionella"],
    answer: "Streptococcus pneumoniae",
    explanation: "S. pneumoniae is the most frequent cause of community-acquired pneumonia, presenting with fever, cough, and rust-colored sputum."
  }
];
export default PYQData;