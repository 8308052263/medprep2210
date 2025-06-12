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
  },
  {
    id: 300,
    topic: "Pharmacology",
    question: "Which of the following drugs is a non-selective beta-blocker?",
    options: [
      "Atenolol",
      "Propranolol",
      "Metoprolol",
      "Nebivolol"
    ],
    answer: "Propranolol",
    explanation: `Propranolol is a non-selective beta-blocker that blocks both β1 and β2 adrenergic receptors. It is used in conditions like hypertension, angina, and migraine prophylaxis. Atenolol and metoprolol are β1-selective blockers, while nebivolol is a β1-blocker with vasodilatory properties due to nitric oxide release.`
  },
  {
    id: 301,
    topic: "Pathology",
    question: "Reed-Sternberg cells are characteristic of which of the following conditions?",
    options: [
      "Non-Hodgkin lymphoma",
      "Hodgkin lymphoma",
      "Multiple myeloma",
      "Chronic lymphocytic leukemia"
    ],
    answer: "Hodgkin lymphoma",
    explanation: `Reed-Sternberg cells are large, abnormal lymphocytes that are pathognomonic for Hodgkin lymphoma. These binucleated or multinucleated cells have a characteristic "owl-eye" appearance. Their presence differentiates Hodgkin lymphoma from other lymphoproliferative disorders.`
  },
  {
    id: 302,
    topic: "Physiology",
    question: "Which of the following conditions causes a rightward shift of the oxygen-hemoglobin dissociation curve?",
    options: [
      "Decreased temperature",
      "Alkalosis",
      "Decreased 2,3-BPG",
      "Increased CO2"
    ],
    answer: "Increased CO2",
    explanation: `A rightward shift in the oxygen-hemoglobin dissociation curve (Bohr effect) indicates decreased affinity of hemoglobin for oxygen, facilitating oxygen unloading to tissues. This occurs due to increased CO₂, acidosis, increased temperature, and elevated 2,3-BPG levels.`
  },
  {
    id: 303,
    topic: "Biochemistry",
    question: "Which enzyme is deficient in Gaucher’s disease?",
    options: [
      "Sphingomyelinase",
      "Glucocerebrosidase",
      "Hexosaminidase A",
      "α-Galactosidase A"
    ],
    answer: "Glucocerebrosidase",
    explanation: `Gaucher’s disease is a lysosomal storage disorder caused by a deficiency of glucocerebrosidase. This leads to the accumulation of glucocerebroside in macrophages, forming Gaucher cells. It presents with hepatosplenomegaly, anemia, and bone involvement.`
  },
  {
    id: 304,
    topic: "Microbiology",
    question: "Which of the following viruses is a DNA virus?",
    options: [
      "Hepatitis A",
      "Hepatitis C",
      "Hepatitis B",
      "Hepatitis E"
    ],
    answer: "Hepatitis B",
    explanation: `Hepatitis B virus (HBV) is the only DNA virus among the hepatitis viruses. It belongs to the Hepadnaviridae family. It has a partially double-stranded circular DNA genome, unlike HAV, HCV, and HEV, which are RNA viruses.`
  },
  {
    id: 305,
    topic: "Medicine",
    question: "Which of the following is NOT a feature of nephrotic syndrome?",
    options: [
      "Proteinuria > 3.5 g/day",
      "Hypoalbuminemia",
      "Hematuria",
      "Hyperlipidemia"
    ],
    answer: "Hematuria",
    explanation: `Nephrotic syndrome is defined by heavy proteinuria (>3.5 g/day), hypoalbuminemia, edema, and hyperlipidemia. Hematuria is more characteristic of nephritic syndrome, which involves inflammation and damage to the glomeruli.`
  },
  {
    id: 306,
    topic: "Anatomy",
    question: "Which cranial nerve is responsible for taste sensation from the anterior two-thirds of the tongue?",
    options: [
      "Glossopharyngeal nerve",
      "Hypoglossal nerve",
      "Facial nerve",
      "Trigeminal nerve"
    ],
    answer: "Facial nerve",
    explanation: `Taste from the anterior two-thirds of the tongue is carried by the chorda tympani branch of the facial nerve (cranial nerve VII). The glossopharyngeal nerve supplies taste to the posterior one-third. The hypoglossal nerve controls tongue movements, and the trigeminal nerve provides general sensation to the anterior tongue.`
  },
  {
    id: 307,
    topic: "OBG",
    question: "Which of the following is the most common site of fertilization?",
    options: [
      "Isthmus of fallopian tube",
      "Ampulla of fallopian tube",
      "Fimbrial end",
      "Uterus"
    ],
    answer: "Ampulla of fallopian tube",
    explanation: `The ampulla is the most common site of fertilization in the female reproductive tract. It provides the optimal environment for sperm and ovum interaction. Ectopic pregnancies also most commonly occur here.`
  },
  {
    id: 308,
    topic: "Community Medicine",
    question: "Which of the following vaccines is a live attenuated vaccine?",
    options: [
      "Hepatitis B",
      "DPT",
      "Oral polio vaccine (OPV)",
      "Tetanus toxoid"
    ],
    answer: "Oral polio vaccine (OPV)",
    explanation: `The oral polio vaccine (OPV) is a live attenuated vaccine that induces both mucosal and systemic immunity. Hepatitis B and tetanus vaccines are inactivated, while DPT is a combination of inactivated toxins and killed organisms.`
  },
  {
    id: 309,
    topic: "Surgery",
    question: "The most common cause of acute abdomen in children is:",
    options: [
      "Appendicitis",
      "Intussusception",
      "Mesenteric lymphadenitis",
      "Hernia"
    ],
    answer: "Appendicitis",
    explanation: `Acute appendicitis is the most common surgical cause of acute abdomen in children. It presents with periumbilical pain that localizes to the right lower quadrant, fever, vomiting, and tenderness at McBurney’s point.`
  },  
  {
    id: 310,
  topic: "Pharmacology",
  question: "Which drug is used as the antidote in organophosphate poisoning?",
  options: ["Atropine", "Naloxone", "Flumazenil", "Vitamin K"],
  answer: "Atropine",
  explanation: `Organophosphate compounds inhibit acetylcholinesterase, leading to accumulation of acetylcholine and cholinergic symptoms. Atropine, a muscarinic antagonist, competitively blocks acetylcholine receptors and is the first-line treatment. Pralidoxime can also be used to reactivate acetylcholinesterase if given early. Naloxone is an opioid antagonist; Flumazenil is for benzodiazepine overdose; Vitamin K is for warfarin toxicity.`
},
{
  id: 311,
  topic: "Anatomy",
  question: "Which nerve supplies the diaphragm?",
  options: ["Phrenic nerve", "Vagus nerve", "Intercostal nerve", "Recurrent laryngeal nerve"],
  answer: "Phrenic nerve",
  explanation: `The phrenic nerve (C3–C5) is the sole motor supply to the diaphragm and provides sensory innervation to its central portion. 'C3, 4, 5 keeps the diaphragm alive' is a common mnemonic. The vagus and recurrent laryngeal nerves do not innervate the diaphragm. Intercostal nerves supply thoracic wall structures.`
},
{
  id: 312,
  topic: "Physiology",
  question: "What is the main site of sodium reabsorption in the nephron?",
  options: ["Proximal convoluted tubule", "Loop of Henle", "Distal convoluted tubule", "Collecting duct"],
  answer: "Proximal convoluted tubule",
  explanation: `About 65–70% of filtered sodium is reabsorbed in the proximal convoluted tubule via active transport mechanisms. This segment also reabsorbs water, glucose, amino acids, and bicarbonate. The loop of Henle and distal parts handle fine-tuning of reabsorption depending on hormonal control.`
},
{
  id: 313,
  topic: "Microbiology",
  question: "Which virus is most commonly associated with congenital infections?",
  options: ["CMV", "HIV", "Rubella", "HSV"],
  answer: "CMV",
  explanation: `Cytomegalovirus (CMV) is the most common congenital viral infection. It can cause sensorineural hearing loss, microcephaly, periventricular calcifications, and developmental delay. Rubella also causes congenital defects but is now rare due to vaccination. HIV and HSV may be transmitted perinatally but are less frequent congenital causes.`
},
{
  id: 314,
  topic: "Biochemistry",
  question: "Which vitamin is required for carboxylation reactions?",
  options: ["Vitamin K", "Vitamin C", "Vitamin B12", "Vitamin B1"],
  answer: "Vitamin K",
  explanation: `Vitamin K is essential for γ-carboxylation of glutamate residues in clotting factors II, VII, IX, and X, as well as proteins C and S. This modification is necessary for calcium binding. Vitamin C is involved in collagen synthesis; B12 is for methylmalonyl-CoA to succinyl-CoA conversion and DNA synthesis; B1 (thiamine) is a coenzyme in oxidative decarboxylation.`
},
{
  id: 315,
  topic: "Community Medicine",
  question: "Which index is used to measure the severity of dental caries?",
  options: ["DMFT index", "BMI", "ICMR index", "DALY"],
  answer: "DMFT index",
  explanation: `The DMFT index (Decayed, Missing, Filled Teeth) is used to assess the prevalence and severity of dental caries in an individual. It is a summative score of the total decayed, extracted due to caries, and restored teeth. BMI is used for nutritional assessment; DALY is for disease burden.`
},
{
  id: 316,
  topic: "Pathology",
  question: "What is the hallmark cell of Hodgkin lymphoma?",
  options: ["Reed-Sternberg cell", "Plasma cell", "Langhans giant cell", "Langerhans cell"],
  answer: "Reed-Sternberg cell",
  explanation: `Reed-Sternberg cells are large binucleated or multinucleated cells with prominent nucleoli ('owl-eye appearance'), seen in Hodgkin lymphoma. They are derived from B lymphocytes and express CD15 and CD30. Plasma cells are in multiple myeloma; Langhans giant cells in granulomas; Langerhans cells in histiocytosis.`
},
{
  id: 317,
  topic: "OBG",
  question: "Which hormone is detected in urine pregnancy test kits?",
  options: ["hCG", "LH", "FSH", "Estrogen"],
  answer: "hCG",
  explanation: `Human chorionic gonadotropin (hCG), produced by syncytiotrophoblasts, is the first detectable marker of pregnancy. It supports the corpus luteum and is measured by urine pregnancy test kits using immunoassay techniques. LH and FSH are pituitary hormones; estrogen rises later in pregnancy.`
},
{
  id: 318,
  topic: "Medicine",
  question: "What is the most common cause of myocardial infarction?",
  options: ["Atherosclerotic plaque rupture", "Coronary vasospasm", "Embolism", "Dissection"],
  answer: "Atherosclerotic plaque rupture",
  explanation: `The majority of myocardial infarctions are due to rupture of an atherosclerotic plaque with subsequent thrombus formation leading to occlusion. Other causes like vasospasm (e.g., Prinzmetal angina), embolism, or dissection are less common. Thrombus occlusion results in ischemia and necrosis of myocardium.`
},
{
  id: 319,
  topic: "Psychiatry",
  question: "What is the first-line treatment for panic disorder?",
  options: ["SSRIs", "Antipsychotics", "MAO inhibitors", "Benzodiazepines"],
  answer: "SSRIs",
  explanation: `Selective serotonin reuptake inhibitors (SSRIs) like fluoxetine and sertraline are first-line treatments for panic disorder due to their efficacy and favorable side-effect profile. Benzodiazepines may be used short-term during acute attacks but are not suitable for long-term use due to dependence risk.`
},
{
  id: 320,
  topic: "Medicine",
  question: "Which heart sound is associated with rapid ventricular filling?",
  options: [
    "S1",
    "S2",
    "S3",
    "S4"
  ],
  answer: "S3",
  explanation: `The third heart sound (S3) occurs just after S2 and is associated with rapid passive ventricular filling. It is best heard with the bell of the stethoscope at the apex in the left lateral position. Although normal in children and young adults, it can be a sign of volume overload (e.g., in heart failure) in older adults.`,
},
{
  id: 321,
  topic: "Anatomy",
  question: "The nerve supplying the diaphragm is derived from which cervical roots?",
  options: [
    "C2–C3",
    "C3–C5",
    "C5–C6",
    "C6–C7"
  ],
  answer: "C3–C5",
  explanation: `The phrenic nerve, which innervates the diaphragm, arises from the cervical spinal roots C3, C4, and C5 (commonly remembered with the mnemonic "C3, 4, 5 keeps the diaphragm alive"). It provides motor supply to the diaphragm and sensory fibers to the central tendon, pericardium, and diaphragmatic pleura.`,
},
{
  id: 322,
  topic: "Pharmacology",
  question: "Which class of antihypertensive drugs is contraindicated in pregnancy?",
  options: [
    "Calcium channel blockers",
    "Beta blockers",
    "ACE inhibitors",
    "Alpha blockers"
  ],
  answer: "ACE inhibitors",
  explanation: `ACE inhibitors (e.g., enalapril, lisinopril) are contraindicated in pregnancy due to their teratogenic effects, particularly in the second and third trimesters. They can cause fetal renal dysgenesis, oligohydramnios, skull hypoplasia, and even death. Safer alternatives include methyldopa, labetalol, and nifedipine.`,
},
{
  id: 323,
  topic: "Obstetrics",
  question: "What is the most reliable clinical sign of pregnancy?",
  options: [
    "Amenorrhea",
    "Breast tenderness",
    "Chadwick’s sign",
    "Fetal heart sounds"
  ],
  answer: "Fetal heart sounds",
  explanation: `Fetal heart sounds heard by Doppler or fetoscope confirm the presence of a live fetus, making it the most reliable clinical sign of pregnancy. While amenorrhea is often the first symptom, it is nonspecific. Chadwick's sign (bluish discoloration of the cervix) and breast tenderness are suggestive but not definitive.`,
},
{
  id: 324,
  topic: "Biochemistry",
  question: "Which vitamin is a cofactor for transamination reactions?",
  options: [
    "Vitamin C",
    "Vitamin B1",
    "Vitamin B6",
    "Vitamin B12"
  ],
  answer: "Vitamin B6",
  explanation: `Vitamin B6 (pyridoxal phosphate) is essential for amino acid metabolism, particularly in transamination, decarboxylation, and deamination reactions. It acts as a coenzyme in transferring amino groups and is critical in the synthesis of neurotransmitters like GABA and serotonin.`,
},
{
  id: 325,
  topic: "Pathology",
  question: "Which type of necrosis is typically seen in the brain following ischemia?",
  options: [
    "Coagulative necrosis",
    "Liquefactive necrosis",
    "Caseous necrosis",
    "Fat necrosis"
  ],
  answer: "Liquefactive necrosis",
  explanation: `Liquefactive necrosis is characteristic of ischemic injury in the central nervous system. It results in enzymatic digestion of dead cells into a viscous liquid. Unlike coagulative necrosis (seen in other organs), brain tissue lacks supportive stroma, favoring liquefaction.`,
},
{
  id: 326,
  topic: "Microbiology",
  question: "Which organism is most commonly responsible for dental caries?",
  options: [
    "Streptococcus pyogenes",
    "Staphylococcus aureus",
    "Streptococcus mutans",
    "Lactobacillus acidophilus"
  ],
  answer: "Streptococcus mutans",
  explanation: `Streptococcus mutans plays a key role in dental caries by metabolizing sugars to lactic acid, leading to enamel demineralization. It also synthesizes extracellular polysaccharides that facilitate plaque formation. Lactobacillus contributes to caries progression but not initiation.`,
},
{
  id: 327,
  topic: "Medicine",
  question: "Which electrolyte abnormality is seen in Addison’s disease?",
  options: [
    "Hypernatremia and hyperkalemia",
    "Hyponatremia and hyperkalemia",
    "Hypernatremia and hypokalemia",
    "Hyponatremia and hypokalemia"
  ],
  answer: "Hyponatremia and hyperkalemia",
  explanation: `In Addison's disease (primary adrenal insufficiency), aldosterone deficiency leads to sodium loss (hyponatremia) and potassium retention (hyperkalemia). Hypotension and metabolic acidosis are also common due to fluid and electrolyte imbalance.`,
},
{
  id: 328,
  topic: "Ophthalmology",
  question: "What is the first-line treatment for acute angle-closure glaucoma?",
  options: [
    "Topical steroids",
    "Oral acetazolamide",
    "Mannitol IV",
    "Topical beta blockers"
  ],
  answer: "Mannitol IV",
  explanation: `Mannitol is an osmotic agent that rapidly reduces intraocular pressure by drawing fluid from the vitreous. It is used in emergency treatment of acute angle-closure glaucoma. Acetazolamide (carbonic anhydrase inhibitor) and beta-blockers are also used but are slower.`,
},
{
  id: 329,
  topic: "Pharmacology",
  question: "Which antipsychotic has the highest risk of agranulocytosis?",
  options: [
    "Haloperidol",
    "Olanzapine",
    "Risperidone",
    "Clozapine"
  ],
  answer: "Clozapine",
  explanation: `Clozapine is highly effective in treatment-resistant schizophrenia but is associated with potentially fatal agranulocytosis. Regular monitoring of white blood cell count is mandatory. Other risks include myocarditis and metabolic syndrome.`,
},
{
  id: 330,
  topic: "Anatomy",
  question: "Erb’s palsy results from injury to which roots of the brachial plexus?",
  options: [
    "C5 and C6",
    "C6 and C7",
    "C7 and C8",
    "C8 and T1"
  ],
  answer: "C5 and C6",
  explanation: `Erb’s palsy is caused by traction injury to the upper trunk of the brachial plexus (C5–C6), typically during difficult delivery or trauma. It leads to “waiter’s tip” posture due to paralysis of the deltoid, biceps, and brachialis.`,
},
{
  id: 331,
  topic: "Obstetrics",
  question: "Which hormone maintains the corpus luteum in early pregnancy?",
  options: [
    "FSH",
    "LH",
    "hCG",
    "Progesterone"
  ],
  answer: "hCG",
  explanation: `Human chorionic gonadotropin (hCG), secreted by the syncytiotrophoblast, maintains the corpus luteum in early pregnancy until the placenta takes over progesterone production. hCG peaks at 8–10 weeks and is the basis for pregnancy tests.`,
},
{
  id: 332,
  topic: "Physiology",
  question: "What is the normal value of the resting membrane potential in neurons?",
  options: [
    "+30 mV",
    "0 mV",
    "−40 mV",
    "−70 mV"
  ],
  answer: "−70 mV",
  explanation: `The resting membrane potential of most neurons is approximately −70 mV, primarily maintained by the Na⁺/K⁺-ATPase pump and selective permeability to K⁺. This gradient is essential for the generation of action potentials.`,
},
{
  id: 333,
  topic: "Community Medicine",
  question: "Incidence refers to:",
  options: [
    "Total number of cases in a population",
    "New cases occurring in a specified period",
    "Proportion of people dying of a disease",
    "Number of hospital admissions"
  ],
  answer: "New cases occurring in a specified period",
  explanation: `Incidence measures the occurrence of **new cases** of a disease in a population over a defined time period. It is useful for studying disease risk and evaluating the impact of preventive strategies. Prevalence, on the other hand, includes both old and new cases.`,
},
{
  id: 335,
  topic: "Pharmacology",
  question: "Which antihypertensive is contraindicated in pregnancy due to teratogenic effects?",
  options: [
    "Methyldopa",
    "Labetalol",
    "ACE inhibitors",
    "Hydralazine"
  ],
  answer: "ACE inhibitors",
  explanation: `ACE inhibitors (e.g., enalapril, lisinopril) are teratogenic and contraindicated in pregnancy as they can lead to fetal renal dysgenesis, oligohydramnios, pulmonary hypoplasia, and skull hypoplasia. Methyldopa and labetalol are preferred antihypertensives during pregnancy, while hydralazine may also be used for severe hypertension.`
},
{
  id: 336,
  topic: "Medicine",
  question: "What is the hallmark finding in nephrotic syndrome?",
  options: [
    "Hematuria",
    "Proteinuria > 3.5 g/day",
    "Hypertension",
    "Azotemia"
  ],
  answer: "Proteinuria > 3.5 g/day",
  explanation: `Nephrotic syndrome is defined by heavy proteinuria exceeding 3.5 g/day, hypoalbuminemia, hyperlipidemia, and generalized edema. Hematuria and hypertension are more characteristic of nephritic syndrome.`
},
{
  id: 337,
  topic: "Pathology",
  question: "Which cell is most commonly seen in caseating granulomas of tuberculosis?",
  options: [
    "Plasma cells",
    "Langhans giant cells",
    "Neutrophils",
    "Reed-Sternberg cells"
  ],
  answer: "Langhans giant cells",
  explanation: `Langhans giant cells are characteristic multinucleated cells formed by the fusion of epithelioid macrophages in granulomatous inflammation, such as tuberculosis. They contain peripheral nuclei arranged in a horseshoe pattern. Reed-Sternberg cells are seen in Hodgkin lymphoma.`
},
{
  id: 338,
  topic: "OBG",
  question: "Which hormone is primarily responsible for maintaining pregnancy in the first trimester?",
  options: [
    "Estrogen",
    "hCG",
    "Progesterone",
    "LH"
  ],
  answer: "Progesterone",
  explanation: `Progesterone, produced initially by the corpus luteum and later by the placenta, is critical for maintaining endometrial lining and uterine quiescence in early pregnancy. hCG supports the corpus luteum to continue progesterone secretion in the early weeks.`
},
{
  id: 339,
  topic: "Biochemistry",
  question: "What is the cofactor required for the conversion of homocysteine to methionine?",
  options: [
    "Vitamin B1",
    "Vitamin B2",
    "Vitamin B6",
    "Vitamin B12"
  ],
  answer: "Vitamin B12",
  explanation: `Vitamin B12 (cobalamin) is essential for the remethylation of homocysteine to methionine via the enzyme methionine synthase. Deficiency leads to elevated homocysteine levels, which are associated with cardiovascular risk.`
},
{
  id: 340,
  topic: "Anatomy",
  question: "Which artery is a branch of the external carotid artery?",
  options: [
    "Ophthalmic artery",
    "Middle cerebral artery",
    "Superior thyroid artery",
    "Anterior cerebral artery"
  ],
  answer: "Superior thyroid artery",
  explanation: `The superior thyroid artery arises from the external carotid artery and supplies the thyroid gland. The ophthalmic artery arises from the internal carotid. Middle and anterior cerebral arteries are branches of the internal carotid system as well.`
},
{
  id: 341,
  topic: "Physiology",
  question: "The 'chloride shift' in red blood cells is primarily associated with:",
  options: [
    "Oxygen release",
    "Carbon dioxide transport",
    "Glucose uptake",
    "Potassium buffering"
  ],
  answer: "Carbon dioxide transport",
  explanation: `The chloride shift (Hamburger phenomenon) involves the exchange of bicarbonate (HCO₃⁻) out of red blood cells for chloride ions (Cl⁻) from plasma to maintain electrochemical neutrality during CO₂ transport. It facilitates CO₂ carriage in blood as bicarbonate.`
},
{
  id: 342,
  topic: "Microbiology",
  question: "Which of the following is the most heat-resistant form of bacteria?",
  options: [
    "Vegetative cells",
    "Spores",
    "Capsulated bacteria",
    "Flagellated bacteria"
  ],
  answer: "Spores",
  explanation: `Bacterial spores, especially from Bacillus and Clostridium species, are extremely heat-resistant due to their dehydrated core, thick cortex, and dipicolinic acid. They can survive boiling and require autoclaving for sterilization.`
},
{
  id: 343,
  topic: "Community Medicine",
  question: "What does the term 'incubation period' refer to?",
  options: [
    "Time between exposure and infectivity",
    "Time between exposure and symptom onset",
    "Time from symptom onset to recovery",
    "Period when the disease is most contagious"
  ],
  answer: "Time between exposure and symptom onset",
  explanation: `The incubation period is the interval between exposure to an infectious agent and the appearance of the first symptoms. It varies by disease and is important in quarantine decisions and contact tracing.`
},
{
  id: 344,
  topic: "Pharmacology",
  question: "Which antibiotic class is associated with tendon rupture as a side effect?",
  options: [
    "Penicillins",
    "Macrolides",
    "Fluoroquinolones",
    "Cephalosporins"
  ],
  answer: "Fluoroquinolones",
  explanation: `Fluoroquinolones (e.g., ciprofloxacin) are known to increase the risk of tendonitis and tendon rupture, particularly in elderly patients and those on corticosteroids. They interfere with collagen synthesis and repair.`
},
{
    id: 345,
    topic: "Pharmacology",
    question: "Which drug is contraindicated in pregnancy due to its teratogenic effect causing neural tube defects?",
    options: [
      "Phenytoin",
      "Valproic acid",
      "Carbamazepine",
      "Phenobarbital"
    ],
    answer: "Valproic acid",
    explanation: `Valproic acid is a well-known teratogen associated with a significantly increased risk of neural tube defects (like spina bifida) when taken during the first trimester of pregnancy. It interferes with folate metabolism. Alternatives like lamotrigine are preferred for women of childbearing age with epilepsy.`
  },
  {
    id: 350,
    topic: "Physiology",
    question: "Which part of the nephron is impermeable to water?",
    options: [
      "Proximal convoluted tubule",
      "Descending limb of loop of Henle",
      "Thick ascending limb of loop of Henle",
      "Collecting duct"
    ],
    answer: "Thick ascending limb of loop of Henle",
    explanation: `The thick ascending limb of the loop of Henle is impermeable to water but actively reabsorbs sodium, potassium, and chloride. This creates a dilute filtrate and contributes to the corticomedullary osmotic gradient, which is essential for urine concentration.`
  },
  {
    id: 351,
    topic: "Microbiology",
    question: "What is the most common cause of bacterial meningitis in adults?",
    options: [
      "Haemophilus influenzae",
      "Streptococcus pneumoniae",
      "Listeria monocytogenes",
      "Neisseria meningitidis"
    ],
    answer: "Streptococcus pneumoniae",
    explanation: `Streptococcus pneumoniae is the leading cause of community-acquired bacterial meningitis in adults. It presents with fever, headache, neck stiffness, and altered sensorium. Diagnosis involves lumbar puncture and treatment includes IV antibiotics such as ceftriaxone with vancomycin.`
  },
  {
    id: 352,
    topic: "Anatomy",
    question: "Which artery is the primary blood supply to the femoral head in adults?",
    options: [
      "Obturator artery",
      "Lateral circumflex femoral artery",
      "Medial circumflex femoral artery",
      "Inferior gluteal artery"
    ],
    answer: "Medial circumflex femoral artery",
    explanation: `In adults, the medial circumflex femoral artery supplies the majority of blood to the femoral head via retinacular branches. Damage to this artery, such as in a femoral neck fracture, increases the risk of avascular necrosis.`
  },
  {
    id: 353,
    topic: "Biochemistry",
    question: "Which enzyme is deficient in Lesch-Nyhan syndrome?",
    options: [
      "HGPRT",
      "ADA",
      "Glucose-6-phosphatase",
      "Ornithine transcarbamylase"
    ],
    answer: "HGPRT",
    explanation: `Lesch-Nyhan syndrome is caused by a deficiency of hypoxanthine-guanine phosphoribosyltransferase (HGPRT), resulting in excessive uric acid production. Clinical features include gout, self-mutilation, mental retardation, and choreoathetosis.`
  },
  {
    id: 354,
    topic: "Medicine",
    question: "Which is the most specific test for diagnosing systemic lupus erythematosus (SLE)?",
    options: [
      "ANA",
      "Anti-dsDNA",
      "Anti-Smith",
      "Anti-Ro"
    ],
    answer: "Anti-Smith",
    explanation: `Anti-Smith antibodies are highly specific for SLE but not sensitive. Anti-dsDNA is more sensitive and correlates with disease activity, especially lupus nephritis. ANA is highly sensitive but not specific, while anti-Ro is seen in neonatal lupus and Sjögren syndrome.`
  },
  {
    id: 355,
    topic: "OBG",
    question: "Which hormone is responsible for milk ejection reflex?",
    options: [
      "Prolactin",
      "Estrogen",
      "Oxytocin",
      "Progesterone"
    ],
    answer: "Oxytocin",
    explanation: `Oxytocin is released from the posterior pituitary in response to suckling and stimulates contraction of myoepithelial cells in the mammary glands, leading to milk ejection. Prolactin promotes milk synthesis but not ejection.`
  },
  {
    id: 356,
    topic: "Community Medicine",
    question: "What is the minimum number of antenatal visits recommended by WHO?",
    options: [
      "3",
      "4",
      "6",
      "8"
    ],
    answer: "8",
    explanation: `As per the latest WHO guidelines, a minimum of 8 antenatal care visits are recommended to improve pregnancy outcomes. These include early initiation and timely assessments to monitor maternal and fetal health.`
  },
  {
    id: 357,
    topic: "Surgery",
    question: "Which condition is characterized by pain relieved on leaning forward and worsened on lying down?",
    options: [
      "Acute pancreatitis",
      "Peptic ulcer disease",
      "Pericarditis",
      "Acute cholecystitis"
    ],
    answer: "Acute pancreatitis",
    explanation: `Acute pancreatitis typically presents with epigastric pain radiating to the back, which is relieved by leaning forward due to decreased retroperitoneal pressure. Serum amylase/lipase levels are elevated. Common causes include alcohol and gallstones.`
  },
  {
    id: 358,
    topic: "Psychiatry",
    question: "What is the first-line treatment for obsessive-compulsive disorder (OCD)?",
    options: [
      "Benzodiazepines",
      "SSRIs",
      "Tricyclic antidepressants",
      "Antipsychotics"
    ],
    answer: "SSRIs",
    explanation: `Selective serotonin reuptake inhibitors (SSRIs), especially fluoxetine and fluvoxamine, are the first-line pharmacological treatment for OCD. Cognitive behavioral therapy (CBT) is equally effective and is often combined with medication.`
  },
  {
    id: 359,
    topic: "Pathology",
    question: "What is the hallmark microscopic finding in rheumatic heart disease?",
    options: [
      "Aschoff bodies",
      "Anitschkow cells",
      "Libman-Sacks vegetations",
      "Granulomas"
    ],
    answer: "Aschoff bodies",
    explanation: `Aschoff bodies are pathognomonic for rheumatic heart disease. These are areas of fibrinoid necrosis surrounded by lymphocytes, plasma cells, and Anitschkow cells (caterpillar cells). They are typically found in all three layers of the heart, reflecting pancarditis.`
  },
  {
    id: 360,
    topic: "Biochemistry",
    question: "Which vitamin acts as a cofactor for transamination reactions?",
    options: [
      "Vitamin B1",
      "Vitamin B2",
      "Vitamin B6",
      "Vitamin B12"
    ],
    answer: "Vitamin B6",
    explanation: `Vitamin B6 (pyridoxal phosphate) is a vital coenzyme for transamination reactions, where amino groups are transferred between amino acids and keto acids. It is also essential in glycogenolysis, neurotransmitter synthesis, and heme production.`
  },
  {
    id: 361,
    topic: "Pharmacology",
    question: "Which of the following is a selective β1-blocker?",
    options: [
      "Propranolol",
      "Atenolol",
      "Carvedilol",
      "Labetalol"
    ],
    answer: "Atenolol",
    explanation: `Atenolol selectively blocks β1-adrenergic receptors, primarily affecting the heart and reducing heart rate and contractility. It is cardioselective and preferred in patients with respiratory conditions. Propranolol is non-selective, while carvedilol and labetalol have both α and β-blocking effects.`
  },
  {
    id: 362,
    topic: "Medicine",
    question: "What is the most common cause of Cushing's syndrome?",
    options: [
      "Ectopic ACTH production",
      "Adrenal adenoma",
      "Iatrogenic corticosteroid use",
      "Pituitary adenoma"
    ],
    answer: "Iatrogenic corticosteroid use",
    explanation: `Exogenous steroid use (iatrogenic) is the most common cause of Cushing’s syndrome. Endogenous causes include pituitary adenoma (Cushing's disease), ectopic ACTH production, and adrenal tumors. Symptoms include central obesity, moon face, and purple striae.`
  },
  {
    id: 363,
    topic: "Microbiology",
    question: "Which organism is most commonly associated with peptic ulcer disease?",
    options: [
      "Escherichia coli",
      "Helicobacter pylori",
      "Streptococcus pyogenes",
      "Salmonella typhi"
    ],
    answer: "Helicobacter pylori",
    explanation: `Helicobacter pylori is a gram-negative, spiral-shaped bacterium that colonizes the gastric mucosa and is strongly associated with duodenal ulcers, gastric ulcers, and gastric carcinoma. It produces urease to neutralize stomach acid.`
  },
  {
    id: 364,
    topic: "OBG",
    question: "What is the first investigation in suspected ectopic pregnancy?",
    options: [
      "Transvaginal ultrasound",
      "Serum progesterone",
      "Urine pregnancy test",
      "Laparoscopy"
    ],
    answer: "Transvaginal ultrasound",
    explanation: `Transvaginal ultrasound is the investigation of choice to localize pregnancy in cases of suspected ectopic pregnancy. It can detect intrauterine gestation or adnexal mass. β-hCG levels are also measured concurrently.`
  },
  {
    id: 365,
    topic: "Anatomy",
    question: "Which cranial nerve is responsible for taste from the anterior two-thirds of the tongue?",
    options: [
      "Glossopharyngeal nerve",
      "Facial nerve",
      "Hypoglossal nerve",
      "Vagus nerve"
    ],
    answer: "Facial nerve",
    explanation: `The facial nerve (via the chorda tympani branch) carries taste sensations from the anterior two-thirds of the tongue. General sensation is from the mandibular division of CN V. Glossopharyngeal nerve supplies taste to the posterior third.`
  },
  {
    id: 366,
    topic: "Surgery",
    question: "Which of the following hernias is most likely to strangulate?",
    options: [
      "Indirect inguinal",
      "Direct inguinal",
      "Femoral",
      "Umbilical"
    ],
    answer: "Femoral",
    explanation: `Femoral hernias are more prone to strangulation due to the narrow femoral ring. They are more common in females and appear below the inguinal ligament. Surgical repair is usually indicated due to the high risk.`
  },
  {
    id: 367,
    topic: "Pathology",
    question: "Which cell marker is positive in Hodgkin lymphoma (Reed-Sternberg cells)?",
    options: [
      "CD3 and CD8",
      "CD20 and CD10",
      "CD15 and CD30",
      "CD19 and CD45"
    ],
    answer: "CD15 and CD30",
    explanation: `Reed-Sternberg cells in classical Hodgkin lymphoma are positive for CD15 and CD30 markers. They are large, bilobed cells with prominent nucleoli and are derived from B cells.`
  },
  {
    id: 368,
    topic: "Physiology",
    question: "Which hormone increases calcium reabsorption in kidneys?",
    options: [
      "Calcitonin",
      "Parathyroid hormone",
      "Vitamin D",
      "Aldosterone"
    ],
    answer: "Parathyroid hormone",
    explanation: `Parathyroid hormone (PTH) increases serum calcium by stimulating calcium reabsorption in the distal convoluted tubule, activating vitamin D, and increasing bone resorption. Calcitonin decreases calcium levels.`
  },
  {
    id: 369,
    topic: "Medicine",
    question: "Which electrolyte abnormality is commonly seen in Addison’s disease?",
    options: [
      "Hypernatremia",
      "Hypokalemia",
      "Hyponatremia",
      "Hypercalcemia"
    ],
    answer: "Hyponatremia",
    explanation: `Addison’s disease (primary adrenal insufficiency) results in decreased aldosterone and cortisol, leading to sodium loss and water retention via ADH, resulting in hyponatremia. Hyperkalemia is also typical.`
  },
  {
    id: 370,
    topic: "Pediatrics",
    question: "What is the most common cause of neonatal sepsis in developing countries?",
    options: [
      "Staphylococcus aureus",
      "Klebsiella pneumoniae",
      "Escherichia coli",
      "Group B Streptococcus"
    ],
    answer: "Klebsiella pneumoniae",
    explanation: `In developing countries, Klebsiella pneumoniae is one of the leading causes of neonatal sepsis, particularly in hospital settings. Poor hygiene and limited access to sterile equipment contribute to its high prevalence. In contrast, Group B Streptococcus is more common in developed countries.`
  },
  {
    id: 371,
    topic: "Forensic Medicine",
    question: "What is the Widmark formula used for?",
    options: [
      "Estimating time since death",
      "Determining blood alcohol concentration",
      "Identifying cause of death",
      "Determining burn area"
    ],
    answer: "Determining blood alcohol concentration",
    explanation: `Widmark formula is a method to estimate the blood alcohol concentration (BAC) based on the amount of alcohol consumed, body weight, and a distribution factor. It is commonly used in forensic investigations related to alcohol intoxication.`
  },
  {
    id: 372,
    topic: "Microbiology",
    question: "Which viral family does the Dengue virus belong to?",
    options: [
      "Flaviviridae",
      "Togaviridae",
      "Retroviridae",
      "Reoviridae"
    ],
    answer: "Flaviviridae",
    explanation: `Dengue virus is an RNA virus that belongs to the Flaviviridae family. It is transmitted by Aedes mosquitoes and causes dengue fever characterized by high fever, rash, and myalgia. Severe forms include dengue hemorrhagic fever and dengue shock syndrome.`
  },
  {
    id: 373,
    topic: "OBG",
    question: "Which of the following is the most common site of endometriosis?",
    options: [
      "Ovary",
      "Rectovaginal septum",
      "Pelvic peritoneum",
      "Fallopian tube"
    ],
    answer: "Ovary",
    explanation: `The ovary is the most common site of endometriosis, often forming endometriomas or 'chocolate cysts'. Other common locations include the pelvic peritoneum, uterosacral ligaments, and rectovaginal septum.`
  },
  {
    id: 374,
    topic: "Medicine",
    question: "Which of the following is a diagnostic marker for systemic lupus erythematosus (SLE)?",
    options: [
      "Anti-dsDNA",
      "Rheumatoid factor",
      "Anti-CCP",
      "Anti-centromere antibody"
    ],
    answer: "Anti-dsDNA",
    explanation: `Anti-double stranded DNA (anti-dsDNA) antibodies are highly specific for SLE and are associated with renal involvement. Rheumatoid factor and anti-CCP are seen in rheumatoid arthritis, while anti-centromere antibodies are found in limited scleroderma.`
  },
  {
    id: 375,
    topic: "Pharmacology",
    question: "Which of the following drugs is a reversible cholinesterase inhibitor?",
    options: [
      "Atropine",
      "Neostigmine",
      "Physostigmine",
      "Organophosphates"
    ],
    answer: "Neostigmine",
    explanation: `Neostigmine is a reversible cholinesterase inhibitor used to treat myasthenia gravis and reverse neuromuscular blockade. Organophosphates are irreversible inhibitors. Physostigmine is similar to neostigmine but crosses the blood-brain barrier.`
  },
  {
    id: 376,
    topic: "ENT",
    question: "What is the most common cause of conductive hearing loss in children?",
    options: [
      "Otosclerosis",
      "Chronic suppurative otitis media",
      "Glue ear (otitis media with effusion)",
      "Foreign body"
    ],
    answer: "Glue ear (otitis media with effusion)",
    explanation: `Glue ear is the most frequent cause of hearing impairment in children due to fluid accumulation in the middle ear. It often follows upper respiratory tract infections and may resolve spontaneously or require tympanostomy.`
  },
  {
    id: 377,
    topic: "Psychiatry",
    question: "What is the drug of choice for bipolar disorder prophylaxis?",
    options: [
      "Valproate",
      "Carbamazepine",
      "Haloperidol",
      "Lithium"
    ],
    answer: "Lithium",
    explanation: `Lithium is considered the first-line drug for prophylaxis in bipolar disorder. It helps in preventing both manic and depressive episodes. Regular monitoring of serum levels is necessary due to its narrow therapeutic window and potential nephrotoxicity.`
  },
  {
    id: 378,
    topic: "Physiology",
    question: "Where is the vasomotor center located?",
    options: [
      "Medulla oblongata",
      "Cerebellum",
      "Midbrain",
      "Hypothalamus"
    ],
    answer: "Medulla oblongata",
    explanation: `The vasomotor center, located in the medulla oblongata, regulates blood pressure by controlling sympathetic and parasympathetic outflow to the heart and blood vessels.`
  },
  {
    id: 379,
    topic: "Pathology",
    question: "Which immunoglobulin is associated with mucosal immunity?",
    options: [
      "IgA",
      "IgG",
      "IgM",
      "IgE"
    ],
    answer: "IgA",
    explanation: `IgA is the predominant immunoglobulin in mucosal secretions such as saliva, tears, and intestinal fluids. It protects mucosal surfaces by neutralizing pathogens and preventing their attachment to epithelial cells.`
  },
  {
    id: 380,
    topic: "Community Medicine",
    question: "What is the incubation period of measles?",
    options: [
      "1–3 days",
      "4–6 days",
      "7–14 days",
      "10–14 days"
    ],
    answer: "10–14 days",
    explanation: `The incubation period of measles (from exposure to onset of rash) typically ranges between 10 to 14 days. Patients are infectious from 4 days before to 4 days after the rash onset.`
  },
  {
    id: 381,
    topic: "Anatomy",
    question: "Which structure passes through the foramen ovale?",
    options: [
      "Facial nerve",
      "Mandibular nerve",
      "Maxillary nerve",
      "Ophthalmic nerve"
    ],
    answer: "Mandibular nerve",
    explanation: `The mandibular division (V3) of the trigeminal nerve passes through the foramen ovale in the sphenoid bone. Maxillary nerve passes through foramen rotundum.`
  },
  {
    id: 382,
    topic: "Medicine",
    question: "Which electrolyte imbalance is common in Addison’s disease?",
    options: [
      "Hypernatremia and hypokalemia",
      "Hyponatremia and hyperkalemia",
      "Hypercalcemia and hypokalemia",
      "Hyponatremia and hypocalcemia"
    ],
    answer: "Hyponatremia and hyperkalemia",
    explanation: `Addison’s disease (adrenal insufficiency) leads to low aldosterone, resulting in sodium loss (hyponatremia) and potassium retention (hyperkalemia).`
  },
  {
    id: 383,
    topic: "Surgery",
    question: "Which type of hernia has the highest risk of strangulation?",
    options: [
      "Inguinal",
      "Femoral",
      "Umbilical",
      "Incisional"
    ],
    answer: "Femoral",
    explanation: `Femoral hernias are narrow and more prone to incarceration and strangulation, especially in females due to wider pelvis and femoral canal.`
  },
  {
    id: 384,
    topic: "OBG",
    question: "Which hormone maintains pregnancy in the first trimester?",
    options: [
      "Progesterone",
      "Estrogen",
      "hCG",
      "LH"
    ],
    answer: "hCG",
    explanation: `Human chorionic gonadotropin (hCG), secreted by trophoblasts, maintains the corpus luteum which in turn produces progesterone to sustain early pregnancy.`
  },
  {
    id: 385,
    topic: "Biochemistry",
    question: "Which enzyme is deficient in Tay-Sachs disease?",
    options: [
      "Beta-glucosidase",
      "Hexosaminidase A",
      "Sphingomyelinase",
      "Galactosidase A"
    ],
    answer: "Hexosaminidase A",
    explanation: `Tay-Sachs disease is a lysosomal storage disorder caused by deficiency of hexosaminidase A. It leads to GM2 ganglioside accumulation in neurons, causing neurodegeneration.`
  },
  {
    id: 386,
    topic: "Microbiology",
    question: "What is the diagnostic test for Cryptococcus neoformans?",
    options: [
      "India ink stain",
      "Gram stain",
      "Acid-fast stain",
      "Giemsa stain"
    ],
    answer: "India ink stain",
    explanation: `India ink stain helps visualize the capsule of Cryptococcus neoformans in cerebrospinal fluid. It appears as a clear halo around the yeast cells.`
  },
  {
    id: 387,
    topic: "Pharmacology",
    question: "Which drug is used for opioid overdose?",
    options: [
      "Naloxone",
      "Naltrexone",
      "Methadone",
      "Buprenorphine"
    ],
    answer: "Naloxone",
    explanation: `Naloxone is a pure opioid antagonist used to reverse the effects of opioid overdose, especially respiratory depression. It acts rapidly when given IV or IM.`
  },
  {
    id: 388,
    topic: "Ophthalmology",
    question: "What is the earliest visual field defect in glaucoma?",
    options: [
      "Central scotoma",
      "Peripheral loss",
      "Paracentral scotoma",
      "Tunnel vision"
    ],
    answer: "Paracentral scotoma",
    explanation: `In primary open-angle glaucoma, the earliest field loss is usually a paracentral scotoma, followed by arcuate scotomas and peripheral constriction.`
  },
  {
    id: 389,
    topic: "Pediatrics",
    question: "Which vaccine is contraindicated in immunocompromised children?",
    options: [
      "DPT",
      "MMR",
      "Hepatitis B",
      "IPV"
    ],
    answer: "MMR",
    explanation: `MMR is a live attenuated vaccine and contraindicated in severely immunocompromised individuals due to the risk of vaccine-induced infection.`
  },
  {
    id: 390,
    topic: "Pathology",
    question: "Reed-Sternberg cells are characteristic of which disease?",
    options: [
      "Non-Hodgkin lymphoma",
      "Burkitt lymphoma",
      "Hodgkin lymphoma",
      "Multiple myeloma"
    ],
    answer: "Hodgkin lymphoma",
    explanation: `Reed-Sternberg cells are large, binucleated cells seen on histopathology of Hodgkin lymphoma and are pathognomonic of the disease.`
  },
  {
    id: 391,
    topic: "Medicine",
    question: "Which of the following is NOT a feature of nephrotic syndrome?",
    options: [
      "Proteinuria >3.5g/day",
      "Hyperlipidemia",
      "Hypoalbuminemia",
      "Hematuria"
    ],
    answer: "Hematuria",
    explanation: `Nephrotic syndrome is characterized by proteinuria, hypoalbuminemia, edema, and hyperlipidemia. Hematuria is more typical of nephritic syndrome.`
  },
  {
    id: 392,
    topic: "Pharmacology",
    question: "Which of the following is a selective beta-1 blocker?",
    options: [
      "Propranolol",
      "Carvedilol",
      "Metoprolol",
      "Labetalol"
    ],
    answer: "Metoprolol",
    explanation: `Metoprolol is a cardioselective beta-1 blocker used in hypertension and angina. Propranolol is non-selective.`
  },
  {
    id: 393,
    topic: "Anatomy",
    question: "Which muscle abducts the vocal cords?",
    options: [
      "Cricothyroid",
      "Posterior cricoarytenoid",
      "Lateral cricoarytenoid",
      "Thyroarytenoid"
    ],
    answer: "Posterior cricoarytenoid",
    explanation: `The posterior cricoarytenoid is the only muscle that abducts the vocal cords, opening the glottis. Paralysis can lead to airway obstruction.`
  },
  {
    id: 394,
    topic: "Community Medicine",
    question: "Which of the following is the vector for Kala-azar?",
    options: [
      "Anopheles mosquito",
      "Culex mosquito",
      "Phlebotomus sandfly",
      "Tsetse fly"
    ],
    answer: "Phlebotomus sandfly",
    explanation: `Kala-azar (visceral leishmaniasis) is transmitted by the bite of female Phlebotomus sandfly. It causes fever, weight loss, hepatosplenomegaly.`
  },
  {
    id: 395,
    topic: "Surgery",
    question: "What is the most common site of peptic ulcer?",
    options: [
      "Stomach (body)",
      "Stomach (fundus)",
      "First part of duodenum",
      "Second part of duodenum"
    ],
    answer: "First part of duodenum",
    explanation: `The duodenal bulb (first part) is the most common site of peptic ulcers. Pain typically improves with food intake.`
  },
  {
    id: 396,
    topic: "OBG",
    question: "Which of the following is the best method to confirm ovulation?",
    options: [
      "Basal body temperature charting",
      "Ultrasound",
      "Serum LH level",
      "Endometrial biopsy"
    ],
    answer: "Ultrasound",
    explanation: `Transvaginal ultrasound is the most reliable non-invasive method to confirm ovulation by showing follicular rupture.`
  },
  {
    id: 397,
    topic: "Pharmacology",
    question: "Which antibiotic inhibits bacterial protein synthesis at 50S subunit?",
    options: [
      "Tetracycline",
      "Streptomycin",
      "Chloramphenicol",
      "Amikacin"
    ],
    answer: "Chloramphenicol",
    explanation: `Chloramphenicol binds to the 50S ribosomal subunit, inhibiting peptidyl transferase activity. It can cause aplastic anemia as a side effect.`
  },
  {
    id: 398,
    topic: "Pathology",
    question: "Which of the following is a tumor suppressor gene?",
    options: [
      "RAS",
      "MYC",
      "TP53",
      "BCR-ABL"
    ],
    answer: "TP53",
    explanation: `TP53 gene encodes the p53 protein, a key tumor suppressor regulating cell cycle arrest and apoptosis. Mutation leads to many cancers.`
  },
  {
    id: 399,
    topic: "ENT",
    question: "Most common organism in acute otitis media?",
    options: [
      "Staphylococcus aureus",
      "Haemophilus influenzae",
      "Pseudomonas aeruginosa",
      "Streptococcus pneumoniae"
    ],
    answer: "Streptococcus pneumoniae",
    explanation: `S. pneumoniae is the leading cause of acute otitis media, especially in children. It’s followed by H. influenzae and M. catarrhalis.`
  },
  {
    id: 420,
    topic: "Pediatrics",
    question: "Which condition is associated with a 'boot-shaped heart' on X-ray?",
    options: [
      "Tetralogy of Fallot",
      "VSD",
      "ASD",
      "Transposition of great arteries"
    ],
    answer: "Tetralogy of Fallot",
    explanation: `Tetralogy of Fallot shows a characteristic 'boot-shaped' heart on chest X-ray due to right ventricular hypertrophy and upturned apex.`
  },
  {
    id: 421,
    topic: "Physiology",
    question: "Which ion has the highest intracellular concentration?",
    options: [
      "Sodium",
      "Chloride",
      "Calcium",
      "Potassium"
    ],
    answer: "Potassium",
    explanation: `Potassium is the most abundant intracellular cation. It maintains the resting membrane potential and is vital for nerve/muscle function.`
  },
  {
    id: 422,
    topic: "Biochemistry",
    question: "Which vitamin is involved in transamination reactions?",
    options: [
      "Vitamin B1",
      "Vitamin B2",
      "Vitamin B6",
      "Vitamin B12"
    ],
    answer: "Vitamin B6",
    explanation: `Vitamin B6 (pyridoxal phosphate) is a coenzyme for transaminases, which are essential in amino acid metabolism.`
  },
  {
    id: 423,
    topic: "Dermatology",
    question: "Koplik spots are seen in which disease?",
    options: [
      "Chickenpox",
      "Measles",
      "Rubella",
      "Scarlet fever"
    ],
    answer: "Measles",
    explanation: `Koplik spots are small bluish-white spots on the buccal mucosa, pathognomonic of measles, appearing before the skin rash.`
  },
  {
    id: 424,
    topic: "Medicine",
    question: "Which ECG finding is seen in hyperkalemia?",
    options: [
      "U waves",
      "T wave inversion",
      "Tall peaked T waves",
      "ST depression"
    ],
    answer: "Tall peaked T waves",
    explanation: `Hyperkalemia causes tall, peaked T waves on ECG, followed by PR prolongation, widened QRS, and risk of cardiac arrest.`
  },
  {
    id: 425,
    topic: "Pharmacology",
    question: "Which is a loop diuretic?",
    options: [
      "Hydrochlorothiazide",
      "Furosemide",
      "Spironolactone",
      "Amiloride"
    ],
    answer: "Furosemide",
    explanation: `Furosemide is a potent loop diuretic that acts on the thick ascending limb of Henle’s loop to inhibit Na-K-2Cl symporter.`
  },
  {
    id: 426,
    topic: "OBG",
    question: "Which of the following is a marker of ovarian reserve?",
    options: [
      "LH",
      "FSH",
      "Estradiol",
      "AMH"
    ],
    answer: "AMH",
    explanation: `Anti-Müllerian hormone (AMH) is secreted by granulosa cells of ovarian follicles and reflects the ovarian reserve.`
  },
  {
    id: 427,
    topic: "Psychiatry",
    question: "Delusion of persecution is seen in:",
    options: [
      "Depression",
      "Schizophrenia",
      "Bipolar disorder",
      "Anxiety disorder"
    ],
    answer: "Schizophrenia",
    explanation: `Delusions of persecution (believing others are out to harm) are common in paranoid schizophrenia.`
  },
  {
    id: 428,
    topic: "Microbiology",
    question: "Which is the most heat-resistant bacteria?",
    options: [
      "E. coli",
      "Staphylococcus aureus",
      "Clostridium botulinum",
      "Salmonella typhi"
    ],
    answer: "Clostridium botulinum",
    explanation: `C. botulinum spores are highly heat resistant, requiring autoclaving for destruction. This is critical in food canning.`
  },
  {
    id: 429,
    topic: "Anatomy",
    question: "Which nerve innervates the diaphragm?",
    options: [
      "Vagus nerve",
      "Phrenic nerve",
      "Intercostal nerve",
      "Accessory nerve"
    ],
    answer: "Phrenic nerve",
    explanation: `The phrenic nerve (C3–C5) supplies motor innervation to the diaphragm. “C3, 4, 5 keeps the diaphragm alive.”`
  },
  {
    id: 430,
    topic: "ENT",
    question: "Most common cause of epistaxis in children?",
    options: [
      "Hypertension",
      "Nasal trauma",
      "Infection",
      "Tumor"
    ],
    answer: "Nasal trauma",
    explanation: `Digital trauma (nose picking) is the most common cause of anterior epistaxis in children, usually from Little’s area.`
  },
  {
    id: 431,
    topic: "Community Medicine",
    question: "Which vaccine is given at birth as per UIP?",
    options: [
      "DPT",
      "Hepatitis B",
      "Polio",
      "All of the above"
    ],
    answer: "All of the above",
    explanation: `At birth, BCG, OPV-0, and Hepatitis B-0 are given as per India’s Universal Immunization Program (UIP).`
  },
  {
    id: 432,
    topic: "Pathology",
    question: "Which type of hypersensitivity is seen in SLE?",
    options: [
      "Type I",
      "Type II",
      "Type III",
      "Type IV"
    ],
    answer: "Type III",
    explanation: `Systemic lupus erythematosus (SLE) is a classic example of type III hypersensitivity — immune complex mediated.`
  },
  {
    id: 433,
    topic: "Physiology",
    question: "Which hormone stimulates milk ejection?",
    options: [
      "Estrogen",
      "Progesterone",
      "Oxytocin",
      "Prolactin"
    ],
    answer: "Oxytocin",
    explanation: `Oxytocin from posterior pituitary causes contraction of myoepithelial cells in breast → milk ejection reflex.`
  },
  {
    id: 434,
    topic: "OBG",
    question: "What is the most common cause of postpartum hemorrhage?",
    options: [
      "Retained placenta",
      "Uterine atony",
      "Genital tract trauma",
      "Coagulopathy"
    ],
    answer: "Uterine atony",
    explanation: `Failure of the uterus to contract (atony) is the leading cause of PPH. Uterotonics are first-line treatment.`
  },
  {
    id: 435,
    topic: "Medicine",
    question: "Which test is used to monitor long-term glucose control?",
    options: [
      "Fasting glucose",
      "Random glucose",
      "HbA1c",
      "C-peptide"
    ],
    answer: "HbA1c",
    explanation: `HbA1c reflects average blood glucose over 2–3 months and is used to monitor diabetes control.`
  },
  {
    id: 436,
    topic: "Orthopedics",
    question: "What is the most common site of osteosarcoma?",
    options: [
      "Distal femur",
      "Proximal humerus",
      "Pelvis",
      "Spine"
    ],
    answer: "Distal femur",
    explanation: `Osteosarcoma commonly arises in the metaphysis of long bones, especially the distal femur and proximal tibia.`
  },
  {
    id: 437,
    topic: "Pediatrics",
    question: "What is the earliest sign of puberty in girls?",
    options: [
      "Menarche",
      "Thelarche",
      "Pubarche",
      "Growth spurt"
    ],
    answer: "Thelarche",
    explanation: `Thelarche (breast bud development) is the first sign of puberty in girls, followed by pubic hair and menarche.`
  },
  {
    id: 438,
    topic: "Microbiology",
    question: "Which is the causative agent of whooping cough?",
    options: [
      "Haemophilus influenzae",
      "Bordetella pertussis",
      "Mycoplasma pneumoniae",
      "Streptococcus pyogenes"
    ],
    answer: "Bordetella pertussis",
    explanation: `B. pertussis causes whooping cough, with paroxysmal cough and inspiratory whoop. Vaccination prevents it.`
  },
  {
    id: 439,
    topic: "Radiology",
    question: "Best imaging for subarachnoid hemorrhage?",
    options: [
      "MRI",
      "CT without contrast",
      "CT with contrast",
      "Angiography"
    ],
    answer: "CT without contrast",
    explanation: `Non-contrast CT is the investigation of choice for detecting acute subarachnoid hemorrhage due to high sensitivity.`
  },
  {
    id: 440,
    topic: "Surgery",
    question: "What is the first step in ATLS protocol?",
    options: [
      "Breathing",
      "Airway",
      "Circulation",
      "Disability"
    ],
    answer: "Airway",
    explanation: `The ABCDE approach begins with securing the Airway, especially with cervical spine protection in trauma.`
  },
  {
    id: 441,
    topic: "Biochemistry",
    question: "Which enzyme is deficient in Phenylketonuria (PKU)?",
    options: [
      "Phenylalanine hydroxylase",
      "Tyrosinase",
      "Homogentisate oxidase",
      "Dihydropteridine reductase"
    ],
    answer: "Phenylalanine hydroxylase",
    explanation: `PKU is caused by a deficiency of phenylalanine hydroxylase, leading to accumulation of phenylalanine and its toxic metabolites.`
  },
  {
    id: 442,
    topic: "Pharmacology",
    question: "Which drug is used to prevent neonatal conjunctivitis?",
    options: [
      "Tetracycline eye ointment",
      "Ciprofloxacin drops",
      "Acyclovir ointment",
      "Hydrocortisone cream"
    ],
    answer: "Tetracycline eye ointment",
    explanation: `Tetracycline or erythromycin ointment is used for prophylaxis against ophthalmia neonatorum, especially due to gonococci.`
  },
  {
    id: 443,
    topic: "Pediatrics",
    question: "What is the most common cyanotic heart disease in newborns?",
    options: [
      "VSD",
      "ASD",
      "TOF",
      "Transposition of great arteries"
    ],
    answer: "Transposition of great arteries",
    explanation: `TGA is the most common cyanotic congenital heart disease presenting in the neonatal period with severe cyanosis.`
  },
  {
    id: 444,
    topic: "Anatomy",
    question: "Which muscle is supplied by the trochlear nerve?",
    options: [
      "Lateral rectus",
      "Medial rectus",
      "Superior oblique",
      "Inferior oblique"
    ],
    answer: "Superior oblique",
    explanation: `The trochlear nerve (CN IV) innervates the superior oblique muscle, responsible for depression and intorsion of the eyeball.`
  },
  {
    id: 445,
    topic: "ENT",
    question: "Carhart’s notch is seen in:",
    options: [
      "Otosclerosis",
      "Meniere’s disease",
      "Cholesteatoma",
      "Presbycusis"
    ],
    answer: "Otosclerosis",
    explanation: `Carhart’s notch is a dip in bone conduction at 2000 Hz, classically seen in otosclerosis.`
  },
  {
    id: 446,
    topic: "Medicine",
    question: "Which of the following is a macrocytic anemia?",
    options: [
      "Iron deficiency anemia",
      "Thalassemia",
      "Sideroblastic anemia",
      "Vitamin B12 deficiency"
    ],
    answer: "Vitamin B12 deficiency",
    explanation: `B12 and folate deficiencies cause macrocytic, megaloblastic anemia with hypersegmented neutrophils.`
  },
  {
    id: 447,
    topic: "OBG",
    question: "Most common site of ectopic pregnancy is:",
    options: [
      "Isthmus",
      "Fimbrial end",
      "Ampulla",
      "Interstitial"
    ],
    answer: "Ampulla",
    explanation: `Ampulla is the most common site for ectopic pregnancy, accounting for about 70% of cases.`
  },
  {
    id: 448,
    topic: "Pathology",
    question: "Which type of necrosis is seen in tuberculosis?",
    options: [
      "Coagulative",
      "Liquefactive",
      "Caseous",
      "Fat necrosis"
    ],
    answer: "Caseous",
    explanation: `Caseous necrosis with cheesy appearance is characteristic of granulomatous inflammation in tuberculosis.`
  },
  {
    id: 449,
    topic: "Microbiology",
    question: "Ziehl-Neelsen stain is used to identify:",
    options: [
      "Staphylococcus",
      "E. coli",
      "Mycobacterium tuberculosis",
      "Treponema pallidum"
    ],
    answer: "Mycobacterium tuberculosis",
    explanation: `ZN stain detects acid-fast bacilli such as Mycobacterium tuberculosis due to their mycolic acid-rich cell wall.`
  },
  {
    id: 450,
    topic: "Physiology",
    question: "Which phase of the cardiac cycle has the lowest ventricular volume?",
    options: [
      "Isovolumetric contraction",
      "Ejection phase",
      "Isovolumetric relaxation",
      "Atrial systole"
    ],
    answer: "Isovolumetric relaxation",
    explanation: `Ventricular volume is lowest just after ejection ends and before atrial filling begins – during isovolumetric relaxation.`
  },
  {
    id: 451,
    topic: "Pharmacology",
    question: "What is the antidote for organophosphorus poisoning?",
    options: [
      "Naloxone",
      "Atropine and pralidoxime",
      "Flumazenil",
      "N-acetylcysteine"
    ],
    answer: "Atropine and pralidoxime",
    explanation: `Organophosphates inhibit acetylcholinesterase. Atropine counters muscarinic effects, pralidoxime reactivates the enzyme.`
  },
  {
    id: 452,
    topic: "Dermatology",
    question: "Auspitz sign is seen in:",
    options: [
      "Psoriasis",
      "Lichen planus",
      "Pemphigus vulgaris",
      "Tinea corporis"
    ],
    answer: "Psoriasis",
    explanation: `Auspitz sign (pinpoint bleeding on removing scales) is characteristic of psoriasis due to dermal capillary exposure.`
  },
  {
    id: 453,
    topic: "Anesthesia",
    question: "Which gas causes diffusion hypoxia?",
    options: [
      "Nitrous oxide",
      "Oxygen",
      "Halothane",
      "Sevoflurane"
    ],
    answer: "Nitrous oxide",
    explanation: `Rapid exit of nitrous oxide displaces alveolar oxygen, causing diffusion hypoxia. Supplemental oxygen prevents it.`
  },
  {
    id: 454,
    topic: "Psychiatry",
    question: "Which drug is used in bipolar disorder maintenance?",
    options: [
      "Haloperidol",
      "Risperidone",
      "Lithium",
      "Diazepam"
    ],
    answer: "Lithium",
    explanation: `Lithium is the gold standard mood stabilizer for maintenance therapy in bipolar disorder.`
  },
  {
    id: 455,
    topic: "Surgery",
    question: "Most common type of thyroid cancer is:",
    options: [
      "Medullary",
      "Papillary",
      "Follicular",
      "Anaplastic"
    ],
    answer: "Papillary",
    explanation: `Papillary carcinoma is the most common thyroid malignancy, often showing Orphan Annie nuclei.`
  },
  {
    id: 456,
    topic: "Forensic Medicine",
    question: "Pugilistic attitude is seen in:",
    options: [
      "Drowning",
      "Strangulation",
      "Burns",
      "Hanging"
    ],
    answer: "Burns",
    explanation: `Due to heat coagulation of muscle proteins in burns, the body assumes a boxer-like (pugilistic) posture.`
  },
  {
    id: 457,
    topic: "Orthopedics",
    question: "Most common site of fracture in children?",
    options: [
      "Clavicle",
      "Radius",
      "Tibia",
      "Femur"
    ],
    answer: "Clavicle",
    explanation: `Clavicle is the most frequently fractured bone in children, commonly from falls or birth trauma.`
  },
  {
    id: 458,
    topic: "OBG",
    question: "Hegar’s sign is:",
    options: [
      "Bluish discoloration of vagina",
      "Softening of cervix",
      "Softening of uterine isthmus",
      "Ballottement"
    ],
    answer: "Softening of uterine isthmus",
    explanation: `Hegar’s sign is early softening of the uterine isthmus, a presumptive sign of pregnancy on bimanual exam.`
  },
  {
    id: 459,
    topic: "Medicine",
    question: "Which electrolyte disturbance is seen in Addison’s disease?",
    options: [
      "Hypernatremia and hypokalemia",
      "Hyponatremia and hyperkalemia",
      "Hypernatremia and hyperkalemia",
      "Hyponatremia and hypokalemia"
    ],
    answer: "Hyponatremia and hyperkalemia",
    explanation: `Addison’s disease (adrenal insufficiency) causes low aldosterone → Na⁺ loss and K⁺ retention.`
  },
  {
    id: 460,
    topic: "Physiology",
    question: "Which hormone increases during stress?",
    options: [
      "Insulin",
      "Cortisol",
      "Glucagon",
      "GH"
    ],
    answer: "Cortisol",
    explanation: `Cortisol, the primary stress hormone, increases blood sugar, suppresses immunity, and aids metabolism during stress.`
  },
  {
    id: 461,
    topic: "Anatomy",
    question: "Which nerve innervates the diaphragm?",
    options: [
      "Vagus nerve",
      "Phrenic nerve",
      "Intercostal nerve",
      "Thoracic nerve"
    ],
    answer: "Phrenic nerve",
    explanation: `The phrenic nerve (C3-C5) innervates the diaphragm and is essential for respiration.`
  },
  {
    id: 462,
    topic: "Microbiology",
    question: "India ink preparation is used to detect:",
    options: [
      "Candida albicans",
      "Cryptococcus neoformans",
      "Aspergillus fumigatus",
      "Histoplasma capsulatum"
    ],
    answer: "Cryptococcus neoformans",
    explanation: `India ink highlights the polysaccharide capsule of Cryptococcus neoformans in CSF.`
  },
  {
    id: 463,
    topic: "Pharmacology",
    question: "Which of the following is a loop diuretic?",
    options: [
      "Spironolactone",
      "Hydrochlorothiazide",
      "Furosemide",
      "Amiloride"
    ],
    answer: "Furosemide",
    explanation: `Furosemide inhibits Na-K-2Cl in the thick ascending loop of Henle.`
  },
  {
    id: 464,
    topic: "Medicine",
    question: "Which of the following is a feature of Cushing’s syndrome?",
    options: [
      "Hypoglycemia",
      "Hypotension",
      "Osteoporosis",
      "Weight loss"
    ],
    answer: "Osteoporosis",
    explanation: `Cushing’s causes bone resorption, leading to osteoporosis along with hyperglycemia, weight gain, and hypertension.`
  },
  {
    id: 465,
    topic: "OBG",
    question: "What is the earliest sign of pregnancy on ultrasound?",
    options: [
      "Yolk sac",
      "Gestational sac",
      "Fetal pole",
      "Cardiac activity"
    ],
    answer: "Gestational sac",
    explanation: `Gestational sac is the earliest visible structure, typically seen by 4.5–5 weeks transvaginally.`
  },
  {
    id: 466,
    topic: "Pediatrics",
    question: "APGAR score is assessed at:",
    options: [
      "Immediately after birth",
      "1 and 5 minutes",
      "Only at 5 minutes",
      "10 and 20 minutes"
    ],
    answer: "1 and 5 minutes",
    explanation: `APGAR is scored at 1 and 5 minutes post-delivery to assess newborn’s transition.`
  },
  {
    id: 467,
    topic: "Biochemistry",
    question: "Gout is caused by increased levels of:",
    options: [
      "Urea",
      "Uric acid",
      "Creatinine",
      "Ammonia"
    ],
    answer: "Uric acid",
    explanation: `Gout is a crystal arthropathy due to uric acid accumulation and deposition in joints.`
  },
  {
    id: 468,
    topic: "Pharmacology",
    question: "Which drug is a proton pump inhibitor?",
    options: [
      "Ranitidine",
      "Pantoprazole",
      "Sucralfate",
      "Metoclopramide"
    ],
    answer: "Pantoprazole",
    explanation: `Pantoprazole irreversibly inhibits H+/K+ ATPase in parietal cells, reducing acid secretion.`
  },
  {
    id: 469,
    topic: "ENT",
    question: "Most common site for epistaxis in children?",
    options: [
      "Woodruff’s plexus",
      "Kiesselbach’s plexus",
      "Posterior ethmoid artery",
      "Sphenopalatine artery"
    ],
    answer: "Kiesselbach’s plexus",
    explanation: `Kiesselbach’s plexus (Little’s area) is the most common source of anterior nosebleeds.`
  },
  {
    id: 470,
    topic: "Physiology",
    question: "Which cell secretes intrinsic factor?",
    options: [
      "Chief cells",
      "G cells",
      "Parietal cells",
      "D cells"
    ],
    answer: "Parietal cells",
    explanation: `Parietal cells in the stomach secrete both HCl and intrinsic factor, essential for B12 absorption.`
  },
  {
    id: 471,
    topic: "Dermatology",
    question: "Which of the following is an autoimmune blistering disease?",
    options: [
      "Psoriasis",
      "Pemphigus vulgaris",
      "Eczema",
      "Scabies"
    ],
    answer: "Pemphigus vulgaris",
    explanation: `Pemphigus vulgaris is due to autoantibodies against desmoglein in desmosomes.`
  },
  {
    id: 472,
    topic: "Pathology",
    question: "Which marker is used for epithelial tumors?",
    options: [
      "CD20",
      "Vimentin",
      "Cytokeratin",
      "S-100"
    ],
    answer: "Cytokeratin",
    explanation: `Cytokeratin is an intermediate filament present in epithelial cells.`
  },
  {
    id: 473,
    topic: "Anesthesia",
    question: "The triad of general anesthesia includes all except:",
    options: [
      "Analgesia",
      "Amnesia",
      "Paralysis",
      "Fever"
    ],
    answer: "Fever",
    explanation: `General anesthesia involves analgesia, amnesia, and muscle relaxation—not fever.`
  },
  {
    id: 474,
    topic: "Surgery",
    question: "What is Courvoisier’s sign?",
    options: [
      "Painful gallbladder with jaundice",
      "Palpable gallbladder with painless jaundice",
      "Murphy’s sign",
      "Rebound tenderness"
    ],
    answer: "Palpable gallbladder with painless jaundice",
    explanation: `Courvoisier’s sign suggests malignancy like pancreatic cancer, not gallstones.`
  },
  {
    id: 475,
    topic: "Psychiatry",
    question: "Delusion of grandeur is characteristic of:",
    options: [
      "Depression",
      "Anxiety",
      "Mania",
      "OCD"
    ],
    answer: "Mania",
    explanation: `Manic patients may have grandiose delusions about power, wealth, or ability.`
  },
  {
    id: 476,
    topic: "Forensic Medicine",
    question: "Gutter fracture of skull is caused by:",
    options: [
      "Bullet grazing the skull",
      "Fall from height",
      "Blunt object",
      "Road traffic accident"
    ],
    answer: "Bullet grazing the skull",
    explanation: `A grazing bullet produces a gutter fracture, scraping away a portion of the skull bone.`
  },
  {
    id: 477,
    topic: "OBG",
    question: "Which hormone is detected in pregnancy tests?",
    options: [
      "Estrogen",
      "LH",
      "Progesterone",
      "hCG"
    ],
    answer: "hCG",
    explanation: `Urinary pregnancy tests detect beta-hCG, produced by trophoblasts after implantation.`
  },
  {
    id: 478,
    topic: "Microbiology",
    question: "‘Safety pin’ appearance is seen in:",
    options: [
      "Yersinia pestis",
      "E. coli",
      "Salmonella",
      "Pseudomonas"
    ],
    answer: "Yersinia pestis",
    explanation: `Yersinia pestis shows bipolar staining (safety pin appearance) on Wayson stain.`
  },
  {
    id: 479,
    topic: "Medicine",
    question: "Asterixis is seen in:",
    options: [
      "Hypoglycemia",
      "Hepatic encephalopathy",
      "Myasthenia gravis",
      "Hyperkalemia"
    ],
    answer: "Hepatic encephalopathy",
    explanation: `Asterixis is a flapping tremor, classically seen in hepatic and uremic encephalopathy.`
  },
  {
    id: 480,
    topic: "Biochemistry",
    question: "Which is the storage form of iron?",
    options: [
      "Transferrin",
      "Ferritin",
      "Hemosiderin",
      "Myoglobin"
    ],
    answer: "Ferritin",
    explanation: `Ferritin stores iron inside cells in a soluble, bioavailable form. Hemosiderin is more insoluble.`
  },
  {
    id: 481,
    topic: "Physiology",
    question: "Maximum oxygen is transported in blood via:",
    options: [
      "Dissolved in plasma",
      "Bound to hemoglobin",
      "Bound to albumin",
      "Converted to bicarbonate"
    ],
    answer: "Bound to hemoglobin",
    explanation: `About 98.5% of oxygen in blood is transported bound to hemoglobin.`
  },
  {
    id: 482,
    topic: "Pathology",
    question: "Reed-Sternberg cells are characteristic of:",
    options: [
      "Non-Hodgkin’s lymphoma",
      "Hodgkin’s lymphoma",
      "Multiple myeloma",
      "Chronic lymphocytic leukemia"
    ],
    answer: "Hodgkin’s lymphoma",
    explanation: `Reed-Sternberg cells are giant, bilobed nuclei cells found in Hodgkin’s lymphoma.`
  },
  {
    id: 483,
    topic: "Microbiology",
    question: "Which of the following is a DNA virus?",
    options: [
      "HIV",
      "Influenza",
      "Hepatitis B",
      "Hepatitis C"
    ],
    answer: "Hepatitis B",
    explanation: `Hepatitis B is a DNA virus from the Hepadnavirus family; the others are RNA viruses.`
  },
  {
    id: 484,
    topic: "Medicine",
    question: "Which of the following is NOT seen in nephrotic syndrome?",
    options: [
      "Proteinuria",
      "Hyperlipidemia",
      "Hypoalbuminemia",
      "Hematuria"
    ],
    answer: "Hematuria",
    explanation: `Hematuria is not a primary feature of nephrotic syndrome; it is more common in nephritic syndrome.`
  },
  {
    id: 485,
    topic: "OBG",
    question: "Which maneuver is used in shoulder dystocia?",
    options: [
      "McRoberts maneuver",
      "Leopold’s maneuver",
      "Hegar’s sign",
      "Pinard maneuver"
    ],
    answer: "McRoberts maneuver",
    explanation: `McRoberts involves hyperflexing the mother's thighs to open pelvic outlet during shoulder dystocia.`
  },
  {
    id: 486,
    topic: "Anatomy",
    question: "Which cranial nerve passes through the cribriform plate?",
    options: [
      "Optic nerve",
      "Olfactory nerve",
      "Abducens nerve",
      "Trigeminal nerve"
    ],
    answer: "Olfactory nerve",
    explanation: `Olfactory nerve fibers pass through the cribriform plate to innervate the olfactory bulb.`
  },
  {
    id: 487,
    topic: "Pharmacology",
    question: "Which drug causes gingival hyperplasia?",
    options: [
      "Phenytoin",
      "Valproate",
      "Carbamazepine",
      "Phenobarbital"
    ],
    answer: "Phenytoin",
    explanation: `Phenytoin is classically associated with gingival overgrowth in long-term use.`
  },
  {
    id: 488,
    topic: "Radiology",
    question: "‘Thumb sign’ on lateral neck X-ray suggests:",
    options: [
      "Croup",
      "Epiglottitis",
      "Foreign body",
      "Retropharyngeal abscess"
    ],
    answer: "Epiglottitis",
    explanation: `The ‘thumb sign’ is swollen epiglottis seen in lateral neck film indicating epiglottitis.`
  },
  {
    id: 489,
    topic: "Biochemistry",
    question: "All are ketone bodies except:",
    options: [
      "Acetoacetate",
      "Beta-hydroxybutyrate",
      "Acetone",
      "Acetyl-CoA"
    ],
    answer: "Acetyl-CoA",
    explanation: `Acetyl-CoA is a precursor; the main ketone bodies are acetoacetate, beta-hydroxybutyrate, and acetone.`
  },
  {
    id: 490,
    topic: "Surgery",
    question: "Most common cause of small intestinal obstruction is:",
    options: [
      "Volvulus",
      "Hernia",
      "Adhesions",
      "Intussusception"
    ],
    answer: "Adhesions",
    explanation: `Post-surgical adhesions are the most frequent cause of small bowel obstruction in adults.`
  },
  {
    id: 491,
    topic: "Dermatology",
    question: "Köbner phenomenon is seen in:",
    options: [
      "Lichen planus",
      "Psoriasis",
      "Warts",
      "All of the above"
    ],
    answer: "All of the above",
    explanation: `Köbnerization is development of lesions at trauma sites; seen in psoriasis, lichen planus, and warts.`
  },
  {
    id: 492,
    topic: "ENT",
    question: "Most common cause of conductive hearing loss in adults:",
    options: [
      "Otitis externa",
      "Cholesteatoma",
      "Otosclerosis",
      "Ototoxicity"
    ],
    answer: "Otosclerosis",
    explanation: `Otosclerosis leads to stapes fixation at oval window, causing progressive conductive hearing loss.`
  },
  {
    id: 493,
    topic: "OBG",
    question: "Which hormone is responsible for milk ejection?",
    options: [
      "Estrogen",
      "Prolactin",
      "Oxytocin",
      "Progesterone"
    ],
    answer: "Oxytocin",
    explanation: `Oxytocin from the posterior pituitary causes contraction of myoepithelial cells and milk ejection.`
  },
  {
    id: 494,
    topic: "Pathology",
    question: "Which of the following is an oncogene?",
    options: [
      "BRCA1",
      "RB",
      "p53",
      "RAS"
    ],
    answer: "RAS",
    explanation: `RAS is a proto-oncogene; mutation leads to continuous cell proliferation signaling.`
  },
  {
    id: 495,
    topic: "Anesthesia",
    question: "Which inhalational agent has the fastest induction?",
    options: [
      "Halothane",
      "Isoflurane",
      "Desflurane",
      "Sevoflurane"
    ],
    answer: "Desflurane",
    explanation: `Desflurane has a low blood-gas solubility, resulting in rapid onset and recovery.`
  },
  {
    id: 496,
    topic: "Pediatrics",
    question: "First vaccine given at birth in national immunization schedule:",
    options: [
      "BCG",
      "OPV",
      "Hepatitis B",
      "All of the above"
    ],
    answer: "All of the above",
    explanation: `BCG, OPV (zero dose), and Hepatitis B are administered at birth in India’s national schedule.`
  },
  {
    id: 497,
    topic: "Microbiology",
    question: "Ziehl-Neelsen stain is used for:",
    options: [
      "Fungi",
      "Parasites",
      "Mycobacteria",
      "Viruses"
    ],
    answer: "Mycobacteria",
    explanation: `ZN stain detects acid-fast bacilli such as Mycobacterium tuberculosis.`
  },
  {
    id: 498,
    topic: "Medicine",
    question: "Most common cause of secondary hypertension:",
    options: [
      "Hyperaldosteronism",
      "Cushing’s syndrome",
      "Renal artery stenosis",
      "Coarctation of aorta"
    ],
    answer: "Renal artery stenosis",
    explanation: `Renovascular hypertension is the leading cause of secondary hypertension, especially in younger patients.`
  },
  {
    id: 499,
    topic: "Pharmacology",
    question: "Antidote for paracetamol poisoning:",
    options: [
      "Naloxone",
      "N-acetylcysteine",
      "Atropine",
      "Flumazenil"
    ],
    answer: "N-acetylcysteine",
    explanation: `NAC replenishes glutathione, helping neutralize toxic NAPQI metabolite in paracetamol toxicity.`
  },
  {
    id: 500,
    topic: "Surgery",
    question: "Which of the following is a feature of acute pancreatitis?",
    options: [
      "Cullen’s sign",
      "Rebound tenderness",
      "Hepatomegaly",
      "Hematuria"
    ],
    answer: "Cullen’s sign",
    explanation: `Cullen’s sign is periumbilical discoloration due to retroperitoneal hemorrhage in pancreatitis.`
  },
  {
  id: 501,
  topic: "Pharmacology",
  question: "Which class of drugs is first-line for treating absence seizures?",
  options: ["Carbamazepine", "Valproic acid", "Phenytoin", "Ethosuximide"],
  answer: "Ethosuximide",
  explanation: `Ethosuximide is the drug of choice for absence seizures. It acts by inhibiting T-type calcium channels in thalamic neurons, which are believed to be involved in the generation of the 3 Hz spike-and-wave discharges seen in absence seizures. Valproic acid may be used if tonic-clonic seizures co-exist. Carbamazepine and phenytoin are ineffective or may worsen absence seizures.`
},
{
  id: 502,
  topic: "Pathology",
  question: "Which of the following is most commonly associated with granulomatous inflammation?",
  options: ["Staphylococcus aureus", "Mycobacterium tuberculosis", "Streptococcus pneumoniae", "Escherichia coli"],
  answer: "Mycobacterium tuberculosis",
  explanation: `Granulomatous inflammation is a form of chronic inflammation characterized by the formation of granulomas. Mycobacterium tuberculosis is the most classic cause. Granulomas are formed as an attempt to contain persistent pathogens or foreign substances and are composed of activated macrophages, giant cells, and lymphocytes.`
},
{
  id: 503,
  topic: "Biochemistry",
  question: "Which vitamin is essential for carboxylation reactions?",
  options: ["Vitamin A", "Vitamin K", "Vitamin C", "Vitamin B12"],
  answer: "Vitamin K",
  explanation: `Vitamin K is essential for the γ-carboxylation of glutamic acid residues on clotting factors II, VII, IX, and X as well as proteins C and S. This carboxylation allows these proteins to bind calcium and perform their function in coagulation. Deficiency can lead to bleeding diathesis.`
},
{
  id: 504,
  topic: "Anatomy",
  question: "Which nerve is affected in Erb-Duchenne palsy?",
  options: ["Radial nerve", "Median nerve", "Upper trunk of brachial plexus", "Lower trunk of brachial plexus"],
  answer: "Upper trunk of brachial plexus",
  explanation: `Erb-Duchenne palsy involves injury to the upper trunk (C5-C6) of the brachial plexus. It is often caused by excessive stretching during childbirth or trauma. The patient presents with 'waiter's tip' posture: arm hangs by the side, internally rotated, extended at the elbow, and pronated.`
},
{
  id: 505,
  topic: "Medicine",
  question: "What is the most common cause of nephrotic syndrome in adults?",
  options: ["Minimal change disease", "Focal segmental glomerulosclerosis", "Membranous nephropathy", "IgA nephropathy"],
  answer: "Membranous nephropathy",
  explanation: `Membranous nephropathy is the most common cause of nephrotic syndrome in adults. It is characterized by immune complex deposition on the subepithelial side of the glomerular basement membrane, leading to thickening. It may be idiopathic or associated with infections, drugs, malignancies, or autoimmune diseases.`
},
{
  id: 506,
  topic: "OBG",
  question: "What is the best method to confirm ovulation?",
  options: ["LH surge detection", "Basal body temperature rise", "Mid-cycle pain", "Serum progesterone"],
  answer: "Serum progesterone",
  explanation: `Serum progesterone measured in the mid-luteal phase (usually around day 21 in a 28-day cycle) is the most reliable method to confirm ovulation. A value >3 ng/mL indicates ovulation. LH surge and basal body temperature can indicate impending or recent ovulation but are indirect and less reliable.`
},
{
  id: 507,
  topic: "Pharmacology",
  question: "Which anti-TB drug causes optic neuritis?",
  options: ["Rifampicin", "Ethambutol", "Isoniazid", "Pyrazinamide"],
  answer: "Ethambutol",
  explanation: `Ethambutol can cause dose-dependent retrobulbar optic neuritis, presenting as decreased visual acuity and red-green color blindness. Patients should be monitored regularly for visual disturbances. It is the only first-line anti-TB drug with this specific ocular toxicity.`
},
{
  id: 508,
  topic: "Physiology",
  question: "Which of the following hormones is secreted in response to hypoglycemia?",
  options: ["Insulin", "Glucagon", "Leptin", "Somatostatin"],
  answer: "Glucagon",
  explanation: `Glucagon is secreted by pancreatic alpha cells in response to hypoglycemia. It raises blood glucose levels by promoting glycogenolysis and gluconeogenesis in the liver. Insulin is secreted in hyperglycemia. Leptin and somatostatin are not primarily involved in acute glucose regulation.`
},
{
  id: 509,
  topic: "Microbiology",
  question: "Which test is most specific for diagnosing typhoid fever in the first week?",
  options: ["Widal test", "Stool culture", "Blood culture", "Urine culture"],
  answer: "Blood culture",
  explanation: `Blood culture is the gold standard for early diagnosis of typhoid fever, especially in the first week of illness. Salmonella typhi is present in the bloodstream before it seeds the intestines and other organs. Widal test is unreliable and becomes positive only in the second week.`
},
{
  id: 510,
  topic: "Community Medicine",
  question: "What is the incubation period of measles?",
  options: ["2–4 days", "5–7 days", "7–10 days", "10–14 days"],
  answer: "10–14 days",
  explanation: `The incubation period of measles is 10–14 days from exposure to the onset of fever. Rash usually appears a few days later. Understanding the incubation period is critical for contact tracing and outbreak control.`
},
{
    id: 511,
    topic: "General Medicine",
    question: "Sample question 511?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 511. Replace with actual content."
  },
  {
    id: 512,
    topic: "General Medicine",
    question: "Sample question 512?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 512. Replace with actual content."
  },
  {
    id: 513,
    topic: "General Medicine",
    question: "Sample question 513?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 513. Replace with actual content."
  },
  {
    id: 514,
    topic: "General Medicine",
    question: "Sample question 514?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 514. Replace with actual content."
  },
  {
    id: 515,
    topic: "General Medicine",
    question: "Sample question 515?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 515. Replace with actual content."
  },
  {
    id: 516,
    topic: "General Medicine",
    question: "Sample question 516?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 516. Replace with actual content."
  },
  {
    id: 517,
    topic: "General Medicine",
    question: "Sample question 517?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 517. Replace with actual content."
  },
  {
    id: 518,
    topic: "General Medicine",
    question: "Sample question 518?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 518. Replace with actual content."
  },
  {
    id: 519,
    topic: "General Medicine",
    question: "Sample question 519?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 519. Replace with actual content."
  },
  {
    id: 520,
    topic: "General Medicine",
    question: "Sample question 520?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 520. Replace with actual content."
  },
  {
    id: 521,
    topic: "General Medicine",
    question: "Sample question 521?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 521. Replace with actual content."
  },
  {
    id: 522,
    topic: "General Medicine",
    question: "Sample question 522?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 522. Replace with actual content."
  },
  {
    id: 523,
    topic: "General Medicine",
    question: "Sample question 523?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 523. Replace with actual content."
  },
  {
    id: 524,
    topic: "General Medicine",
    question: "Sample question 524?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 524. Replace with actual content."
  },
  {
    id: 525,
    topic: "General Medicine",
    question: "Sample question 525?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 525. Replace with actual content."
  },
  {
    id: 526,
    topic: "General Medicine",
    question: "Sample question 526?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 526. Replace with actual content."
  },
  {
    id: 527,
    topic: "General Medicine",
    question: "Sample question 527?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 527. Replace with actual content."
  },
  {
    id: 528,
    topic: "General Medicine",
    question: "Sample question 528?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 528. Replace with actual content."
  },
  {
    id: 529,
    topic: "General Medicine",
    question: "Sample question 529?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 529. Replace with actual content."
  },
  {
    id: 530,
    topic: "General Medicine",
    question: "Sample question 530?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 530. Replace with actual content."
  },
  {
    id: 531,
    topic: "General Medicine",
    question: "Sample question 531?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 531. Replace with actual content."
  },
  {
    id: 532,
    topic: "General Medicine",
    question: "Sample question 532?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 532. Replace with actual content."
  },
  {
    id: 533,
    topic: "General Medicine",
    question: "Sample question 533?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 533. Replace with actual content."
  },
  {
    id: 534,
    topic: "General Medicine",
    question: "Sample question 534?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 534. Replace with actual content."
  },
  {
    id: 535,
    topic: "General Medicine",
    question: "Sample question 535?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 535. Replace with actual content."
  },
  {
    id: 536,
    topic: "General Medicine",
    question: "Sample question 536?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 536. Replace with actual content."
  },
  {
    id: 537,
    topic: "General Medicine",
    question: "Sample question 537?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 537. Replace with actual content."
  },
  {
    id: 538,
    topic: "General Medicine",
    question: "Sample question 538?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 538. Replace with actual content."
  },
  {
    id: 539,
    topic: "General Medicine",
    question: "Sample question 539?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 539. Replace with actual content."
  },
  {
    id: 540,
    topic: "General Medicine",
    question: "Sample question 540?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 540. Replace with actual content."
  },
  {
    id: 541,
    topic: "General Medicine",
    question: "Sample question 541?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 541. Replace with actual content."
  },
  {
    id: 542,
    topic: "General Medicine",
    question: "Sample question 542?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 542. Replace with actual content."
  },
  {
    id: 543,
    topic: "General Medicine",
    question: "Sample question 543?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 543. Replace with actual content."
  },
  {
    id: 544,
    topic: "General Medicine",
    question: "Sample question 544?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 544. Replace with actual content."
  },
  {
    id: 545,
    topic: "General Medicine",
    question: "Sample question 545?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 545. Replace with actual content."
  },
  {
    id: 546,
    topic: "General Medicine",
    question: "Sample question 546?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 546. Replace with actual content."
  },
  {
    id: 547,
    topic: "General Medicine",
    question: "Sample question 547?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 547. Replace with actual content."
  },
  {
    id: 548,
    topic: "General Medicine",
    question: "Sample question 548?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 548. Replace with actual content."
  },
  {
    id: 549,
    topic: "General Medicine",
    question: "Sample question 549?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 549. Replace with actual content."
  },
  {
    id: 550,
    topic: "General Medicine",
    question: "Sample question 550?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 550. Replace with actual content."
  },
  {
    id: 551,
    topic: "General Medicine",
    question: "Sample question 551?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 551. Replace with actual content."
  },
  {
    id: 552,
    topic: "General Medicine",
    question: "Sample question 552?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 552. Replace with actual content."
  },
  {
    id: 553,
    topic: "General Medicine",
    question: "Sample question 553?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 553. Replace with actual content."
  },
  {
    id: 554,
    topic: "General Medicine",
    question: "Sample question 554?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 554. Replace with actual content."
  },
  {
    id: 555,
    topic: "General Medicine",
    question: "Sample question 555?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 555. Replace with actual content."
  },
  {
    id: 556,
    topic: "General Medicine",
    question: "Sample question 556?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 556. Replace with actual content."
  },
  {
    id: 557,
    topic: "General Medicine",
    question: "Sample question 557?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 557. Replace with actual content."
  },
  {
    id: 558,
    topic: "General Medicine",
    question: "Sample question 558?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 558. Replace with actual content."
  },
  {
    id: 559,
    topic: "General Medicine",
    question: "Sample question 559?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 559. Replace with actual content."
  },
  {
    id: 560,
    topic: "General Medicine",
    question: "Sample question 560?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 560. Replace with actual content."
  },
  {
    id: 561,
    topic: "General Medicine",
    question: "Sample question 561?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 561. Replace with actual content."
  },
  {
    id: 562,
    topic: "General Medicine",
    question: "Sample question 562?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 562. Replace with actual content."
  },
  {
    id: 563,
    topic: "General Medicine",
    question: "Sample question 563?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 563. Replace with actual content."
  },
  {
    id: 564,
    topic: "General Medicine",
    question: "Sample question 564?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 564. Replace with actual content."
  },
  {
    id: 565,
    topic: "General Medicine",
    question: "Sample question 565?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 565. Replace with actual content."
  },
  {
    id: 566,
    topic: "General Medicine",
    question: "Sample question 566?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 566. Replace with actual content."
  },
  {
    id: 567,
    topic: "General Medicine",
    question: "Sample question 567?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 567. Replace with actual content."
  },
  {
    id: 568,
    topic: "General Medicine",
    question: "Sample question 568?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 568. Replace with actual content."
  },
  {
    id: 569,
    topic: "General Medicine",
    question: "Sample question 569?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 569. Replace with actual content."
  },
  {
    id: 570,
    topic: "General Medicine",
    question: "Sample question 570?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 570. Replace with actual content."
  },
  {
    id: 571,
    topic: "General Medicine",
    question: "Sample question 571?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 571. Replace with actual content."
  },
  {
    id: 572,
    topic: "General Medicine",
    question: "Sample question 572?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 572. Replace with actual content."
  },
  {
    id: 573,
    topic: "General Medicine",
    question: "Sample question 573?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 573. Replace with actual content."
  },
  {
    id: 574,
    topic: "General Medicine",
    question: "Sample question 574?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 574. Replace with actual content."
  },
  {
    id: 575,
    topic: "General Medicine",
    question: "Sample question 575?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 575. Replace with actual content."
  },
  {
    id: 576,
    topic: "General Medicine",
    question: "Sample question 576?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 576. Replace with actual content."
  },
  {
    id: 577,
    topic: "General Medicine",
    question: "Sample question 577?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 577. Replace with actual content."
  },
  {
    id: 578,
    topic: "General Medicine",
    question: "Sample question 578?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 578. Replace with actual content."
  },
  {
    id: 579,
    topic: "General Medicine",
    question: "Sample question 579?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 579. Replace with actual content."
  },
  {
    id: 580,
    topic: "General Medicine",
    question: "Sample question 580?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 580. Replace with actual content."
  },
  {
    id: 581,
    topic: "General Medicine",
    question: "Sample question 581?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 581. Replace with actual content."
  },
  {
    id: 582,
    topic: "General Medicine",
    question: "Sample question 582?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 582. Replace with actual content."
  },
  {
    id: 583,
    topic: "General Medicine",
    question: "Sample question 583?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 583. Replace with actual content."
  },
  {
    id: 584,
    topic: "General Medicine",
    question: "Sample question 584?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 584. Replace with actual content."
  },
  {
    id: 585,
    topic: "General Medicine",
    question: "Sample question 585?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 585. Replace with actual content."
  },
  {
    id: 586,
    topic: "General Medicine",
    question: "Sample question 586?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 586. Replace with actual content."
  },
  {
    id: 587,
    topic: "General Medicine",
    question: "Sample question 587?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 587. Replace with actual content."
  },
  {
    id: 588,
    topic: "General Medicine",
    question: "Sample question 588?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 588. Replace with actual content."
  },
  {
    id: 589,
    topic: "General Medicine",
    question: "Sample question 589?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 589. Replace with actual content."
  },
  {
    id: 590,
    topic: "General Medicine",
    question: "Sample question 590?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 590. Replace with actual content."
  },
  {
    id: 591,
    topic: "General Medicine",
    question: "Sample question 591?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 591. Replace with actual content."
  },
  {
    id: 592,
    topic: "General Medicine",
    question: "Sample question 592?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 592. Replace with actual content."
  },
  {
    id: 593,
    topic: "General Medicine",
    question: "Sample question 593?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 593. Replace with actual content."
  },
  {
    id: 594,
    topic: "General Medicine",
    question: "Sample question 594?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 594. Replace with actual content."
  },
  {
    id: 595,
    topic: "General Medicine",
    question: "Sample question 595?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 595. Replace with actual content."
  },
  {
    id: 596,
    topic: "General Medicine",
    question: "Sample question 596?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 596. Replace with actual content."
  },
  {
    id: 597,
    topic: "General Medicine",
    question: "Sample question 597?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 597. Replace with actual content."
  },
  {
    id: 598,
    topic: "General Medicine",
    question: "Sample question 598?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 598. Replace with actual content."
  },
  {
    id: 599,
    topic: "General Medicine",
    question: "Sample question 599?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 599. Replace with actual content."
  },
  {
    id: 600,
    topic: "General Medicine",
    question: "Sample question 600?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 600. Replace with actual content."
  },
  {
    id: 601,
    topic: "General Medicine",
    question: "Sample question 601?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 601. Replace with actual content."
  },
  {
    id: 602,
    topic: "General Medicine",
    question: "Sample question 602?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 602. Replace with actual content."
  },
  {
    id: 603,
    topic: "General Medicine",
    question: "Sample question 603?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 603. Replace with actual content."
  },
  {
    id: 604,
    topic: "General Medicine",
    question: "Sample question 604?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 604. Replace with actual content."
  },
  {
    id: 605,
    topic: "General Medicine",
    question: "Sample question 605?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 605. Replace with actual content."
  },
  {
    id: 606,
    topic: "General Medicine",
    question: "Sample question 606?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 606. Replace with actual content."
  },
  {
    id: 607,
    topic: "General Medicine",
    question: "Sample question 607?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 607. Replace with actual content."
  },
  {
    id: 608,
    topic: "General Medicine",
    question: "Sample question 608?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 608. Replace with actual content."
  },
  {
    id: 609,
    topic: "General Medicine",
    question: "Sample question 609?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 609. Replace with actual content."
  },
  {
    id: 610,
    topic: "General Medicine",
    question: "Sample question 610?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 610. Replace with actual content."
  },
  {
    id: 611,
    topic: "General Medicine",
    question: "Sample question 611?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 611. Replace with actual content."
  },
  {
    id: 612,
    topic: "General Medicine",
    question: "Sample question 612?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 612. Replace with actual content."
  },
  {
    id: 613,
    topic: "General Medicine",
    question: "Sample question 613?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 613. Replace with actual content."
  },
  {
    id: 614,
    topic: "General Medicine",
    question: "Sample question 614?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 614. Replace with actual content."
  },
  {
    id: 615,
    topic: "General Medicine",
    question: "Sample question 615?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 615. Replace with actual content."
  },
  {
    id: 616,
    topic: "General Medicine",
    question: "Sample question 616?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 616. Replace with actual content."
  },
  {
    id: 617,
    topic: "General Medicine",
    question: "Sample question 617?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 617. Replace with actual content."
  },
  {
    id: 618,
    topic: "General Medicine",
    question: "Sample question 618?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 618. Replace with actual content."
  },
  {
    id: 619,
    topic: "General Medicine",
    question: "Sample question 619?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 619. Replace with actual content."
  },
  {
    id: 620,
    topic: "General Medicine",
    question: "Sample question 620?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 620. Replace with actual content."
  },
  {
    id: 621,
    topic: "General Medicine",
    question: "Sample question 621?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 621. Replace with actual content."
  },
  {
    id: 622,
    topic: "General Medicine",
    question: "Sample question 622?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 622. Replace with actual content."
  },
  {
    id: 623,
    topic: "General Medicine",
    question: "Sample question 623?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 623. Replace with actual content."
  },
  {
    id: 624,
    topic: "General Medicine",
    question: "Sample question 624?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 624. Replace with actual content."
  },
  {
    id: 625,
    topic: "General Medicine",
    question: "Sample question 625?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 625. Replace with actual content."
  },
  {
    id: 626,
    topic: "General Medicine",
    question: "Sample question 626?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 626. Replace with actual content."
  },
  {
    id: 627,
    topic: "General Medicine",
    question: "Sample question 627?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 627. Replace with actual content."
  },
  {
    id: 628,
    topic: "General Medicine",
    question: "Sample question 628?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 628. Replace with actual content."
  },
  {
    id: 629,
    topic: "General Medicine",
    question: "Sample question 629?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 629. Replace with actual content."
  },
  {
    id: 630,
    topic: "General Medicine",
    question: "Sample question 630?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 630. Replace with actual content."
  },
  {
    id: 631,
    topic: "General Medicine",
    question: "Sample question 631?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 631. Replace with actual content."
  },
  {
    id: 632,
    topic: "General Medicine",
    question: "Sample question 632?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 632. Replace with actual content."
  },
  {
    id: 633,
    topic: "General Medicine",
    question: "Sample question 633?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 633. Replace with actual content."
  },
  {
    id: 634,
    topic: "General Medicine",
    question: "Sample question 634?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 634. Replace with actual content."
  },
  {
    id: 635,
    topic: "General Medicine",
    question: "Sample question 635?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 635. Replace with actual content."
  },
  {
    id: 636,
    topic: "General Medicine",
    question: "Sample question 636?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 636. Replace with actual content."
  },
  {
    id: 637,
    topic: "General Medicine",
    question: "Sample question 637?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 637. Replace with actual content."
  },
  {
    id: 638,
    topic: "General Medicine",
    question: "Sample question 638?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 638. Replace with actual content."
  },
  {
    id: 639,
    topic: "General Medicine",
    question: "Sample question 639?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 639. Replace with actual content."
  },
  {
    id: 640,
    topic: "General Medicine",
    question: "Sample question 640?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 640. Replace with actual content."
  },
  {
    id: 641,
    topic: "General Medicine",
    question: "Sample question 641?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 641. Replace with actual content."
  },
  {
    id: 642,
    topic: "General Medicine",
    question: "Sample question 642?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 642. Replace with actual content."
  },
  {
    id: 643,
    topic: "General Medicine",
    question: "Sample question 643?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 643. Replace with actual content."
  },
  {
    id: 644,
    topic: "General Medicine",
    question: "Sample question 644?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 644. Replace with actual content."
  },
  {
    id: 645,
    topic: "General Medicine",
    question: "Sample question 645?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 645. Replace with actual content."
  },
  {
    id: 646,
    topic: "General Medicine",
    question: "Sample question 646?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 646. Replace with actual content."
  },
  {
    id: 647,
    topic: "General Medicine",
    question: "Sample question 647?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 647. Replace with actual content."
  },
  {
    id: 648,
    topic: "General Medicine",
    question: "Sample question 648?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 648. Replace with actual content."
  },
  {
    id: 649,
    topic: "General Medicine",
    question: "Sample question 649?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 649. Replace with actual content."
  },
  {
    id: 650,
    topic: "General Medicine",
    question: "Sample question 650?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 650. Replace with actual content."
  },
  {
    id: 651,
    topic: "General Medicine",
    question: "Sample question 651?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 651. Replace with actual content."
  },
  {
    id: 652,
    topic: "General Medicine",
    question: "Sample question 652?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 652. Replace with actual content."
  },
  {
    id: 653,
    topic: "General Medicine",
    question: "Sample question 653?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 653. Replace with actual content."
  },
  {
    id: 654,
    topic: "General Medicine",
    question: "Sample question 654?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 654. Replace with actual content."
  },
  {
    id: 655,
    topic: "General Medicine",
    question: "Sample question 655?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 655. Replace with actual content."
  },
  {
    id: 656,
    topic: "General Medicine",
    question: "Sample question 656?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 656. Replace with actual content."
  },
  {
    id: 657,
    topic: "General Medicine",
    question: "Sample question 657?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 657. Replace with actual content."
  },
  {
    id: 658,
    topic: "General Medicine",
    question: "Sample question 658?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 658. Replace with actual content."
  },
  {
    id: 659,
    topic: "General Medicine",
    question: "Sample question 659?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 659. Replace with actual content."
  },
  {
    id: 660,
    topic: "General Medicine",
    question: "Sample question 660?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 660. Replace with actual content."
  },
  {
    id: 661,
    topic: "General Medicine",
    question: "Sample question 661?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 661. Replace with actual content."
  },
  {
    id: 662,
    topic: "General Medicine",
    question: "Sample question 662?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 662. Replace with actual content."
  },
  {
    id: 663,
    topic: "General Medicine",
    question: "Sample question 663?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 663. Replace with actual content."
  },
  {
    id: 664,
    topic: "General Medicine",
    question: "Sample question 664?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 664. Replace with actual content."
  },
  {
    id: 665,
    topic: "General Medicine",
    question: "Sample question 665?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 665. Replace with actual content."
  },
  {
    id: 666,
    topic: "General Medicine",
    question: "Sample question 666?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 666. Replace with actual content."
  },
  {
    id: 667,
    topic: "General Medicine",
    question: "Sample question 667?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 667. Replace with actual content."
  },
  {
    id: 668,
    topic: "General Medicine",
    question: "Sample question 668?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 668. Replace with actual content."
  },
  {
    id: 669,
    topic: "General Medicine",
    question: "Sample question 669?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 669. Replace with actual content."
  },
  {
    id: 670,
    topic: "General Medicine",
    question: "Sample question 670?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 670. Replace with actual content."
  },
  {
    id: 671,
    topic: "General Medicine",
    question: "Sample question 671?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 671. Replace with actual content."
  },
  {
    id: 672,
    topic: "General Medicine",
    question: "Sample question 672?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 672. Replace with actual content."
  },
  {
    id: 673,
    topic: "General Medicine",
    question: "Sample question 673?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 673. Replace with actual content."
  },
  {
    id: 674,
    topic: "General Medicine",
    question: "Sample question 674?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 674. Replace with actual content."
  },
  {
    id: 675,
    topic: "General Medicine",
    question: "Sample question 675?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 675. Replace with actual content."
  },
  {
    id: 676,
    topic: "General Medicine",
    question: "Sample question 676?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 676. Replace with actual content."
  },
  {
    id: 677,
    topic: "General Medicine",
    question: "Sample question 677?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 677. Replace with actual content."
  },
  {
    id: 678,
    topic: "General Medicine",
    question: "Sample question 678?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 678. Replace with actual content."
  },
  {
    id: 679,
    topic: "General Medicine",
    question: "Sample question 679?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 679. Replace with actual content."
  },
  {
    id: 680,
    topic: "General Medicine",
    question: "Sample question 680?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 680. Replace with actual content."
  },
  {
    id: 681,
    topic: "General Medicine",
    question: "Sample question 681?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 681. Replace with actual content."
  },
  {
    id: 682,
    topic: "General Medicine",
    question: "Sample question 682?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 682. Replace with actual content."
  },
  {
    id: 683,
    topic: "General Medicine",
    question: "Sample question 683?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 683. Replace with actual content."
  },
  {
    id: 684,
    topic: "General Medicine",
    question: "Sample question 684?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 684. Replace with actual content."
  },
  {
    id: 685,
    topic: "General Medicine",
    question: "Sample question 685?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 685. Replace with actual content."
  },
  {
    id: 686,
    topic: "General Medicine",
    question: "Sample question 686?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 686. Replace with actual content."
  },
  {
    id: 687,
    topic: "General Medicine",
    question: "Sample question 687?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 687. Replace with actual content."
  },
  {
    id: 688,
    topic: "General Medicine",
    question: "Sample question 688?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 688. Replace with actual content."
  },
  {
    id: 689,
    topic: "General Medicine",
    question: "Sample question 689?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 689. Replace with actual content."
  },
  {
    id: 690,
    topic: "General Medicine",
    question: "Sample question 690?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 690. Replace with actual content."
  },
  {
    id: 691,
    topic: "General Medicine",
    question: "Sample question 691?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 691. Replace with actual content."
  },
  {
    id: 692,
    topic: "General Medicine",
    question: "Sample question 692?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 692. Replace with actual content."
  },
  {
    id: 693,
    topic: "General Medicine",
    question: "Sample question 693?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 693. Replace with actual content."
  },
  {
    id: 694,
    topic: "General Medicine",
    question: "Sample question 694?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 694. Replace with actual content."
  },
  {
    id: 695,
    topic: "General Medicine",
    question: "Sample question 695?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 695. Replace with actual content."
  },
  {
    id: 696,
    topic: "General Medicine",
    question: "Sample question 696?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 696. Replace with actual content."
  },
  {
    id: 697,
    topic: "General Medicine",
    question: "Sample question 697?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 697. Replace with actual content."
  },
  {
    id: 698,
    topic: "General Medicine",
    question: "Sample question 698?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 698. Replace with actual content."
  },
  {
    id: 699,
    topic: "General Medicine",
    question: "Sample question 699?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 699. Replace with actual content."
  },
  {
    id: 700,
    topic: "General Medicine",
    question: "Sample question 700?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 700. Replace with actual content."
  },
  {
    id: 701,
    topic: "General Medicine",
    question: "Sample question 701?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 701. Replace with actual content."
  },
  {
    id: 702,
    topic: "General Medicine",
    question: "Sample question 702?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 702. Replace with actual content."
  },
  {
    id: 703,
    topic: "General Medicine",
    question: "Sample question 703?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 703. Replace with actual content."
  },
  {
    id: 704,
    topic: "General Medicine",
    question: "Sample question 704?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 704. Replace with actual content."
  },
  {
    id: 705,
    topic: "General Medicine",
    question: "Sample question 705?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 705. Replace with actual content."
  },
  {
    id: 706,
    topic: "General Medicine",
    question: "Sample question 706?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 706. Replace with actual content."
  },
  {
    id: 707,
    topic: "General Medicine",
    question: "Sample question 707?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 707. Replace with actual content."
  },
  {
    id: 708,
    topic: "General Medicine",
    question: "Sample question 708?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 708. Replace with actual content."
  },
  {
    id: 709,
    topic: "General Medicine",
    question: "Sample question 709?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 709. Replace with actual content."
  },
  {
    id: 710,
    topic: "General Medicine",
    question: "Sample question 710?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 710. Replace with actual content."
  },
  {
    id: 711,
    topic: "General Medicine",
    question: "Sample question 711?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 711. Replace with actual content."
  },
  {
    id: 712,
    topic: "General Medicine",
    question: "Sample question 712?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 712. Replace with actual content."
  },
  {
    id: 713,
    topic: "General Medicine",
    question: "Sample question 713?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 713. Replace with actual content."
  },
  {
    id: 714,
    topic: "General Medicine",
    question: "Sample question 714?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 714. Replace with actual content."
  },
  {
    id: 715,
    topic: "General Medicine",
    question: "Sample question 715?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 715. Replace with actual content."
  },
  {
    id: 716,
    topic: "General Medicine",
    question: "Sample question 716?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 716. Replace with actual content."
  },
  {
    id: 717,
    topic: "General Medicine",
    question: "Sample question 717?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 717. Replace with actual content."
  },
  {
    id: 718,
    topic: "General Medicine",
    question: "Sample question 718?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 718. Replace with actual content."
  },
  {
    id: 719,
    topic: "General Medicine",
    question: "Sample question 719?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 719. Replace with actual content."
  },
  {
    id: 720,
    topic: "General Medicine",
    question: "Sample question 720?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 720. Replace with actual content."
  },
  {
    id: 721,
    topic: "General Medicine",
    question: "Sample question 721?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 721. Replace with actual content."
  },
  {
    id: 722,
    topic: "General Medicine",
    question: "Sample question 722?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 722. Replace with actual content."
  },
  {
    id: 723,
    topic: "General Medicine",
    question: "Sample question 723?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 723. Replace with actual content."
  },
  {
    id: 724,
    topic: "General Medicine",
    question: "Sample question 724?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 724. Replace with actual content."
  },
  {
    id: 725,
    topic: "General Medicine",
    question: "Sample question 725?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 725. Replace with actual content."
  },
  {
    id: 726,
    topic: "General Medicine",
    question: "Sample question 726?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 726. Replace with actual content."
  },
  {
    id: 727,
    topic: "General Medicine",
    question: "Sample question 727?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 727. Replace with actual content."
  },
  {
    id: 728,
    topic: "General Medicine",
    question: "Sample question 728?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 728. Replace with actual content."
  },
  {
    id: 729,
    topic: "General Medicine",
    question: "Sample question 729?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 729. Replace with actual content."
  },
  {
    id: 730,
    topic: "General Medicine",
    question: "Sample question 730?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 730. Replace with actual content."
  },
  {
    id: 731,
    topic: "General Medicine",
    question: "Sample question 731?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 731. Replace with actual content."
  },
  {
    id: 732,
    topic: "General Medicine",
    question: "Sample question 732?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 732. Replace with actual content."
  },
  {
    id: 733,
    topic: "General Medicine",
    question: "Sample question 733?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 733. Replace with actual content."
  },
  {
    id: 734,
    topic: "General Medicine",
    question: "Sample question 734?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 734. Replace with actual content."
  },
  {
    id: 735,
    topic: "General Medicine",
    question: "Sample question 735?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 735. Replace with actual content."
  },
  {
    id: 736,
    topic: "General Medicine",
    question: "Sample question 736?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 736. Replace with actual content."
  },
  {
    id: 737,
    topic: "General Medicine",
    question: "Sample question 737?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 737. Replace with actual content."
  },
  {
    id: 738,
    topic: "General Medicine",
    question: "Sample question 738?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 738. Replace with actual content."
  },
  {
    id: 739,
    topic: "General Medicine",
    question: "Sample question 739?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 739. Replace with actual content."
  },
  {
    id: 740,
    topic: "General Medicine",
    question: "Sample question 740?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 740. Replace with actual content."
  },
  {
    id: 741,
    topic: "General Medicine",
    question: "Sample question 741?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 741. Replace with actual content."
  },
  {
    id: 742,
    topic: "General Medicine",
    question: "Sample question 742?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 742. Replace with actual content."
  },
  {
    id: 743,
    topic: "General Medicine",
    question: "Sample question 743?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 743. Replace with actual content."
  },
  {
    id: 744,
    topic: "General Medicine",
    question: "Sample question 744?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 744. Replace with actual content."
  },
  {
    id: 745,
    topic: "General Medicine",
    question: "Sample question 745?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 745. Replace with actual content."
  },
  {
    id: 746,
    topic: "General Medicine",
    question: "Sample question 746?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 746. Replace with actual content."
  },
  {
    id: 747,
    topic: "General Medicine",
    question: "Sample question 747?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 747. Replace with actual content."
  },
  {
    id: 748,
    topic: "General Medicine",
    question: "Sample question 748?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 748. Replace with actual content."
  },
  {
    id: 749,
    topic: "General Medicine",
    question: "Sample question 749?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 749. Replace with actual content."
  },
  {
    id: 750,
    topic: "General Medicine",
    question: "Sample question 750?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 750. Replace with actual content."
  },
  {
    id: 751,
    topic: "General Medicine",
    question: "Sample question 751?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 751. Replace with actual content."
  },
  {
    id: 752,
    topic: "General Medicine",
    question: "Sample question 752?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 752. Replace with actual content."
  },
  {
    id: 753,
    topic: "General Medicine",
    question: "Sample question 753?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 753. Replace with actual content."
  },
  {
    id: 754,
    topic: "General Medicine",
    question: "Sample question 754?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 754. Replace with actual content."
  },
  {
    id: 755,
    topic: "General Medicine",
    question: "Sample question 755?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 755. Replace with actual content."
  },
  {
    id: 756,
    topic: "General Medicine",
    question: "Sample question 756?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 756. Replace with actual content."
  },
  {
    id: 757,
    topic: "General Medicine",
    question: "Sample question 757?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 757. Replace with actual content."
  },
  {
    id: 758,
    topic: "General Medicine",
    question: "Sample question 758?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 758. Replace with actual content."
  },
  {
    id: 759,
    topic: "General Medicine",
    question: "Sample question 759?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 759. Replace with actual content."
  },
  {
    id: 760,
    topic: "General Medicine",
    question: "Sample question 760?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 760. Replace with actual content."
  },
  {
    id: 761,
    topic: "General Medicine",
    question: "Sample question 761?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 761. Replace with actual content."
  },
  {
    id: 762,
    topic: "General Medicine",
    question: "Sample question 762?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 762. Replace with actual content."
  },
  {
    id: 763,
    topic: "General Medicine",
    question: "Sample question 763?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 763. Replace with actual content."
  },
  {
    id: 764,
    topic: "General Medicine",
    question: "Sample question 764?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 764. Replace with actual content."
  },
  {
    id: 765,
    topic: "General Medicine",
    question: "Sample question 765?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 765. Replace with actual content."
  },
  {
    id: 766,
    topic: "General Medicine",
    question: "Sample question 766?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 766. Replace with actual content."
  },
  {
    id: 767,
    topic: "General Medicine",
    question: "Sample question 767?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 767. Replace with actual content."
  },
  {
    id: 768,
    topic: "General Medicine",
    question: "Sample question 768?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 768. Replace with actual content."
  },
  {
    id: 769,
    topic: "General Medicine",
    question: "Sample question 769?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 769. Replace with actual content."
  },
  {
    id: 770,
    topic: "General Medicine",
    question: "Sample question 770?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 770. Replace with actual content."
  },
  {
    id: 771,
    topic: "General Medicine",
    question: "Sample question 771?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 771. Replace with actual content."
  },
  {
    id: 772,
    topic: "General Medicine",
    question: "Sample question 772?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 772. Replace with actual content."
  },
  {
    id: 773,
    topic: "General Medicine",
    question: "Sample question 773?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 773. Replace with actual content."
  },
  {
    id: 774,
    topic: "General Medicine",
    question: "Sample question 774?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 774. Replace with actual content."
  },
  {
    id: 775,
    topic: "General Medicine",
    question: "Sample question 775?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 775. Replace with actual content."
  },
  {
    id: 776,
    topic: "General Medicine",
    question: "Sample question 776?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 776. Replace with actual content."
  },
  {
    id: 777,
    topic: "General Medicine",
    question: "Sample question 777?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 777. Replace with actual content."
  },
  {
    id: 778,
    topic: "General Medicine",
    question: "Sample question 778?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 778. Replace with actual content."
  },
  {
    id: 779,
    topic: "General Medicine",
    question: "Sample question 779?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 779. Replace with actual content."
  },
  {
    id: 780,
    topic: "General Medicine",
    question: "Sample question 780?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 780. Replace with actual content."
  },
  {
    id: 781,
    topic: "General Medicine",
    question: "Sample question 781?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 781. Replace with actual content."
  },
  {
    id: 782,
    topic: "General Medicine",
    question: "Sample question 782?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 782. Replace with actual content."
  },
  {
    id: 783,
    topic: "General Medicine",
    question: "Sample question 783?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 783. Replace with actual content."
  },
  {
    id: 784,
    topic: "General Medicine",
    question: "Sample question 784?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 784. Replace with actual content."
  },
  {
    id: 785,
    topic: "General Medicine",
    question: "Sample question 785?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 785. Replace with actual content."
  },
  {
    id: 786,
    topic: "General Medicine",
    question: "Sample question 786?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 786. Replace with actual content."
  },
  {
    id: 787,
    topic: "General Medicine",
    question: "Sample question 787?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 787. Replace with actual content."
  },
  {
    id: 788,
    topic: "General Medicine",
    question: "Sample question 788?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 788. Replace with actual content."
  },
  {
    id: 789,
    topic: "General Medicine",
    question: "Sample question 789?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 789. Replace with actual content."
  },
  {
    id: 790,
    topic: "General Medicine",
    question: "Sample question 790?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 790. Replace with actual content."
  },
  {
    id: 791,
    topic: "General Medicine",
    question: "Sample question 791?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 791. Replace with actual content."
  },
  {
    id: 792,
    topic: "General Medicine",
    question: "Sample question 792?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 792. Replace with actual content."
  },
  {
    id: 793,
    topic: "General Medicine",
    question: "Sample question 793?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 793. Replace with actual content."
  },
  {
    id: 794,
    topic: "General Medicine",
    question: "Sample question 794?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 794. Replace with actual content."
  },
  {
    id: 795,
    topic: "General Medicine",
    question: "Sample question 795?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 795. Replace with actual content."
  },
  {
    id: 796,
    topic: "General Medicine",
    question: "Sample question 796?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 796. Replace with actual content."
  },
  {
    id: 797,
    topic: "General Medicine",
    question: "Sample question 797?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 797. Replace with actual content."
  },
  {
    id: 798,
    topic: "General Medicine",
    question: "Sample question 798?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 798. Replace with actual content."
  },
  {
    id: 799,
    topic: "General Medicine",
    question: "Sample question 799?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 799. Replace with actual content."
  },
  {
    id: 800,
    topic: "General Medicine",
    question: "Sample question 800?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: "Option A",
    explanation: "This is a placeholder explanation for sample question 800. Replace with actual content."
  },
];

export default PYQData;