const PYQData = [
  {
    id: 101,
    topic: "OBG",
    question: "What is the most common site for ectopic pregnancy?",
    options: [
      "Isthmus of fallopian tube",
      "Ampulla of fallopian tube",
      "Fimbrial end",
      "Interstitial part of fallopian tube"
    ],
    answer: "Ampulla of fallopian tube",
    explanation: `The ampulla is the widest section of the fallopian tube and the most common site of fertilization. Ectopic pregnancy most frequently occurs here (≈70%) due to delayed ovum transport or tubal pathology (e.g., PID, endometriosis). Rupture risk increases with gestational age and can cause hemorrhagic shock. The interstitial region is more vascular and ruptures later but with catastrophic bleeding.`
  },
  {
    id: 102,
    topic: "Microbiology",
    question: "Which stain is used to identify acid-fast bacilli like Mycobacterium tuberculosis?",
    options: [
      "Gram stain",
      "Giemsa stain",
      "Ziehl-Neelsen stain",
      "PAS stain"
    ],
    answer: "Ziehl-Neelsen stain",
    explanation: `The Ziehl-Neelsen (ZN) stain uses carbol fuchsin and acid-alcohol to identify organisms with mycolic acid in their cell walls, rendering them 'acid-fast.' Mycobacterium tuberculosis retains the red stain due to this waxy layer. The ZN method is a primary diagnostic tool in sputum smear microscopy for pulmonary TB. Gram and Giemsa stains are inadequate due to poor staining of mycobacteria.`
  },
  {
    id: 103,
    topic: "Medicine",
    question: "Which of the following is NOT a classical feature of nephrotic syndrome?",
    options: [
      "Proteinuria",
      "Hypoalbuminemia",
      "Hyperlipidemia",
      "Hematuria"
    ],
    answer: "Hematuria",
    explanation: `Nephrotic syndrome is a renal disorder characterized by heavy proteinuria (>3.5g/day), hypoalbuminemia, edema, and hyperlipidemia due to hepatic lipoprotein synthesis. Hematuria, while possible, is more suggestive of nephritic syndrome, which involves glomerular inflammation. Nephrotic syndrome leads to hypercoagulability, infections, and lipiduria.`
  },
  {
    id: 104,
    topic: "Pharmacology",
    question: "What is the first-line treatment for anaphylactic shock?",
    options: [
      "IV Hydrocortisone",
      "IM Adrenaline",
      "IV Dopamine",
      "IM Chlorpheniramine"
    ],
    answer: "IM Adrenaline",
    explanation: `Intramuscular adrenaline (0.3–0.5 mg in adults) is the cornerstone of anaphylaxis management. It acts rapidly to reverse airway obstruction, vasodilation, and mucosal edema by stimulating alpha and beta-adrenergic receptors. Antihistamines and steroids may be used adjunctively but are slower in action and not life-saving.`
  },
  {
    id: 105,
    topic: "Physiology",
    question: "The half-life of a drug is 4 hours. How much of the drug remains after 12 hours?",
    options: [
      "1/2",
      "1/4",
      "1/8",
      "1/16"
    ],
    answer: "1/8",
    explanation: `The half-life (t½) is the time required for the plasma concentration of a drug to reduce by 50%. After 12 hours (3 half-lives): (1/2)^3 = 1/8 of the original dose remains. This concept is crucial in dosing frequency and steady-state achievement.`
  },
  {
    id: 106,
    topic: "Ophthalmology",
    question: "Night blindness is most commonly due to deficiency of which vitamin?",
    options: [
      "Vitamin A",
      "Vitamin D",
      "Vitamin E",
      "Vitamin K"
    ],
    answer: "Vitamin A",
    explanation: `Vitamin A (retinol) is essential for the synthesis of rhodopsin in rod cells of the retina. Rhodopsin is critical for scotopic (low-light) vision. Its deficiency impairs this pathway, leading to nyctalopia (night blindness), and can progress to xerophthalmia and Bitot's spots.`
  },
  {
    id: 107,
    topic: "Pharmacology",
    question: "Which antiepileptic drug has the highest teratogenic potential?",
    options: [
      "Carbamazepine",
      "Valproic acid",
      "Lamotrigine",
      "Levetiracetam"
    ],
    answer: "Valproic acid",
    explanation: `Valproic acid interferes with folic acid metabolism and neural tube development, significantly increasing the risk of spina bifida and other congenital defects. It is avoided during pregnancy. Lamotrigine and levetiracetam are considered safer alternatives.`
  },
  {
    id: 108,
    topic: "Pathology",
    question: "Which of the following is a tumor marker for ovarian cancer?",
    options: [
      "CA 125",
      "CEA",
      "CA 19-9",
      "PSA"
    ],
    answer: "CA 125",
    explanation: `CA 125 is elevated in epithelial ovarian cancers, particularly serous cystadenocarcinomas. While not specific, it’s used for monitoring treatment response and detecting recurrence. CEA is linked to colorectal cancer, CA 19-9 to pancreatic cancer, and PSA to prostate cancer.`
  },
  {
    id: 109,
    topic: "Biochemistry",
    question: "Which of the following enzymes is deficient in phenylketonuria (PKU)?",
    options: [
      "Phenylalanine hydroxylase",
      "Tyrosinase",
      "Homogentisate oxidase",
      "Branched-chain ketoacid dehydrogenase"
    ],
    answer: "Phenylalanine hydroxylase",
    explanation: `PKU is an autosomal recessive metabolic disorder due to a deficiency of phenylalanine hydroxylase, which converts phenylalanine to tyrosine. Its accumulation causes intellectual disability, musty odor, and light pigmentation. Early dietary restriction is essential to prevent neurologic damage.`
  },
  {
    id: 110,
    topic: "Community Medicine",
    question: "What is the basic reproductive number (R₀) in epidemiology?",
    options: [
      "Average number of deaths per case",
      "Average number of secondary cases per primary case",
      "Proportion of population immune",
      "Doubling time of an infection"
    ],
    answer: "Average number of secondary cases per primary case",
    explanation: `R₀ represents the average number of new infections generated by one infected individual in a completely susceptible population. If R₀ > 1, the disease can spread. It is critical for understanding transmission dynamics, planning vaccination strategies, and predicting outbreak potential.`
  },
  {
     id: 201,
    topic: "Pharmacology",
    question: "What is the first-line treatment for anaphylactic shock?",
    options: [
      "IV Hydrocortisone",
      "IM Adrenaline",
      "IV Dopamine",
      "IM Chlorpheniramine"
    ],
    answer: "IM Adrenaline",
    explanation: `IM Adrenaline is the drug of choice for anaphylaxis. It acts on α1, β1, and β2 receptors to cause vasoconstriction, bronchodilation, and increased cardiac output. IM route ensures rapid onset and avoids sudden spikes seen with IV bolus. Hydrocortisone and antihistamines are adjuncts, not life-saving.`,
  },
  {
    id: 202,
    topic: "OBG",
    question: "What is the most common site of ectopic pregnancy?",
    options: [
      "Isthmus",
      "Ampulla",
      "Fimbrial end",
      "Interstitial portion"
    ],
    answer: "Ampulla",
    explanation: `The ampulla of the fallopian tube is the most common site for ectopic pregnancy (~70% cases). Fertilization normally occurs here. Tubal damage or delayed ovum transport due to PID, endometriosis, or surgeries increases risk. Rupture at this site may lead to hemoperitoneum and shock.`,
  },
  {
    id: 203,
    topic: "Medicine",
    question: "Which of the following is not a feature of nephrotic syndrome?",
    options: [
      "Proteinuria",
      "Hypoalbuminemia",
      "Hyperlipidemia",
      "Hematuria"
    ],
    answer: "Hematuria",
    explanation: `Nephrotic syndrome is characterized by massive proteinuria (>3.5g/day), hypoalbuminemia, hyperlipidemia, and edema. Hematuria is a feature of nephritic syndrome, where glomerular inflammation causes red blood cell leakage. Nephrotic syndrome is more prone to infections and thrombosis due to loss of immunoglobulins and antithrombin III.`,
  },
  {
    id: 204,
    topic: "Microbiology",
    question: "Which stain is used to detect Mycobacterium tuberculosis in sputum?",
    options: [
      "Gram stain",
      "Ziehl-Neelsen stain",
      "PAS stain",
      "Giemsa stain"
    ],
    answer: "Ziehl-Neelsen stain",
    explanation: `Ziehl-Neelsen (ZN) stain is used to detect acid-fast bacilli like M. tuberculosis. It involves carbol fuchsin staining, acid-alcohol decolorization, and methylene blue counterstain. Acid-fastness is due to mycolic acid in the bacterial cell wall. Other stains like Gram and PAS do not work due to waxy wall.`,
  },
  {
    id: 205,
    topic: "Physiology",
    question: "What is the fraction of drug remaining after 3 half-lives?",
    options: [
      "1/2",
      "1/4",
      "1/8",
      "1/16"
    ],
    answer: "1/8",
    explanation: `With each half-life, 50% of drug is eliminated. After 3 half-lives: (1/2)^3 = 1/8 remains. This is crucial in determining dosing intervals and estimating drug accumulation. Drugs typically reach steady state after 4–5 half-lives.`,
  },
  {
    id: 206,
    topic: "Community Medicine",
    question: "What does a basic reproduction number (R₀) of >1 indicate?",
    options: [
      "Disease will die out",
      "No new infections",
      "Disease will spread",
      "All population immune"
    ],
    answer: "Disease will spread",
    explanation: `R₀ refers to the average number of secondary infections produced by a single infection in a fully susceptible population. If R₀ > 1, the infection spreads in the population. If R₀ < 1, it eventually dies out. Vaccination aims to reduce effective R below 1.`,
  },
  {
    id: 207,
    topic: "Ophthalmology",
    question: "Deficiency of which vitamin causes night blindness?",
    options: [
      "Vitamin A",
      "Vitamin D",
      "Vitamin E",
      "Vitamin K"
    ],
    answer: "Vitamin A",
    explanation: `Vitamin A is essential for the formation of rhodopsin in rod cells of the retina, crucial for vision in low light. Deficiency leads to night blindness (nyctalopia), xerophthalmia, Bitot’s spots, and eventually corneal ulceration or keratomalacia if untreated.`,
  },
  {
    id: 208,
    topic: "Biochemistry",
    question: "Phenylketonuria is caused by deficiency of which enzyme?",
    options: [
      "Phenylalanine hydroxylase",
      "Tyrosinase",
      "Homogentisate oxidase",
      "Branched-chain ketoacid dehydrogenase"
    ],
    answer: "Phenylalanine hydroxylase",
    explanation: `Phenylketonuria (PKU) is a congenital defect in the enzyme phenylalanine hydroxylase, which converts phenylalanine to tyrosine. Accumulated phenylalanine is neurotoxic, causing mental retardation, seizures, and hypopigmentation. Screening at birth and dietary control are essential.`,
  },
  {
    id: 209,
    topic: "Pathology",
    question: "Which marker is associated with epithelial ovarian cancer?",
    options: [
      "CA 125",
      "CEA",
      "CA 19-9",
      "PSA"
    ],
    answer: "CA 125",
    explanation: `CA 125 is a glycoprotein often elevated in epithelial ovarian cancer, particularly serous types. Though not specific, it is useful for monitoring therapy and detecting recurrence. CEA is more for colorectal, CA 19-9 for pancreatic, and PSA for prostate cancer.`,
  },
  {
    id: 210,
    topic: "Pharmacology",
    question: "Which antiepileptic drug has the highest teratogenic potential?",
    options: [
      "Valproate",
      "Lamotrigine",
      "Levetiracetam",
      "Carbamazepine"
    ],
    answer: "Valproate",
    explanation: `Valproate is known for high teratogenicity, particularly neural tube defects like spina bifida due to interference with folate metabolism. It is contraindicated in pregnancy unless absolutely necessary. Safer alternatives include levetiracetam and lamotrigine.`,
  }
];

export default PYQData;