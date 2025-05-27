const MCQData = [
  {
    id: 1,
    topic: "Pharmacology",
    question: "Which of the following is a selective beta-1 blocker?",
    options: ["Propranolol", "Atenolol", "Carvedilol", "Labetalol"],
    answer: "Atenolol",
    explanation: "Atenolol selectively blocks beta-1 receptors, affecting heart rate without significant bronchoconstriction. Useful in patients with asthma."
  },
  {
    id: 2,
    topic: "Microbiology",
    question: "Which bacterium is associated with rice-water stools?",
    options: ["Salmonella", "Shigella", "Vibrio cholerae", "E. coli"],
    answer: "Vibrio cholerae",
    explanation: "V. cholerae produces cholera toxin → ↑cAMP → massive watery diarrhea. Stool resembles 'rice water'."
  },
  {
    id: 3,
    topic: "Biochemistry",
    question: "Which enzyme converts glucose to glucose-6-phosphate?",
    options: ["Glucokinase", "Hexokinase", "Phosphofructokinase", "Pyruvate kinase"],
    answer: "Hexokinase",
    explanation: "Hexokinase phosphorylates glucose in most tissues. In liver and pancreas, glucokinase does this at high glucose levels."
  },
  {
    id: 4,
    topic: "Pathology",
    question: "Reed-Sternberg cells are characteristic of:",
    options: ["Non-Hodgkin lymphoma", "Multiple myeloma", "Hodgkin lymphoma", "Burkitt lymphoma"],
    answer: "Hodgkin lymphoma",
    explanation: "Reed-Sternberg cells (binucleate 'owl-eye' cells) are pathognomonic for Hodgkin lymphoma."
  },
  {
    id: 5,
    topic: "Anatomy",
    question: "The deltoid muscle is innervated by:",
    options: ["Axillary nerve", "Radial nerve", "Musculocutaneous nerve", "Median nerve"],
    answer: "Axillary nerve",
    explanation: "Axillary nerve (C5-C6) innervates deltoid and teres minor. Damage causes shoulder abduction weakness."
  },
  {
    id: 6,
    topic: "Medicine",
    question: "In diabetes insipidus, urine is:",
    options: ["Concentrated", "High specific gravity", "Dilute", "Acidic"],
    answer: "Dilute",
    explanation: "DI is characterized by ADH deficiency or resistance → inability to concentrate urine → dilute, hypotonic urine."
  },
  {
    id: 7,
    topic: "Pediatrics",
    question: "APGAR score includes all EXCEPT:",
    options: ["Appearance", "Pulse", "Grimace", "Feeding"],
    answer: "Feeding",
    explanation: "APGAR: Appearance, Pulse, Grimace, Activity, Respiration. Feeding is not included."
  },
  {
    id: 8,
    topic: "OBG",
    question: "What is the most sensitive test for ovulation?",
    options: ["LH surge", "Progesterone levels", "Basal body temperature", "Ultrasound"],
    answer: "Serum Progesterone",
    explanation: "Serum progesterone >3 ng/mL in mid-luteal phase confirms ovulation. LH surge precedes ovulation but doesn’t confirm it."
  },
  {
    id: 9,
    topic: "Physiology",
    question: "Which of the following is a surfactant component?",
    options: ["Histamine", "Phosphatidylcholine", "Albumin", "Cholesterol"],
    answer: "Phosphatidylcholine",
    explanation: "Major component of surfactant (also called lecithin), reduces alveolar surface tension."
  },
  {
    id: 10,
    topic: "Psychiatry",
    question: "Delusion of grandeur is most commonly seen in:",
    options: ["Depression", "Schizophrenia", "Bipolar disorder", "Phobia"],
    answer: "Bipolar disorder",
    explanation: "Manic episodes of bipolar disorder often involve delusions of grandeur — exaggerated sense of importance."
  },
  {
    id: 11,
    topic: "Radiology",
    question: "Double bubble sign is seen in:",
    options: ["Pyloric stenosis", "Duodenal atresia", "Hirschsprung disease", "Meconium ileus"],
    answer: "Duodenal atresia",
    explanation: "Double bubble on X-ray = dilated stomach and duodenum. Seen in Down syndrome babies."
  },
  {
    id: 12,
    topic: "Surgery",
    question: "Commonest site of peptic ulcer perforation is:",
    options: ["Antrum", "Fundus", "Duodenum", "Cardia"],
    answer: "Duodenum",
    explanation: "Most perforated ulcers occur in the anterior wall of the duodenum."
  },
  {
    id: 13,
    topic: "ENT",
    question: "Carhart’s notch is seen in:",
    options: ["Sensorineural hearing loss", "Otosclerosis", "Presbycusis", "Meniere's disease"],
    answer: "Otosclerosis",
    explanation: "Carhart’s notch is a dip at 2000 Hz in audiogram seen in stapedial fixation of otosclerosis."
  },
  {
    id: 14,
    topic: "Dermatology",
    question: "Auspitz sign is seen in:",
    options: ["Lichen planus", "Psoriasis", "Pemphigus", "Vitiligo"],
    answer: "Psoriasis",
    explanation: "Peeling psoriatic scales reveals pinpoint bleeding — called Auspitz sign."
  },
  {
    id: 15,
    topic: "Ophthalmology",
    question: "Cherry red spot on fundus is seen in:",
    options: ["Glaucoma", "Retinal artery occlusion", "Retinal detachment", "Diabetic retinopathy"],
    answer: "Retinal artery occlusion",
    explanation: "Pale retina with central red macula is seen in central retinal artery occlusion."
  },
  {
    id: 16,
    topic: "Forensic",
    question: "Pugilistic attitude is due to:",
    options: ["Drowning", "Fire burns", "Strangulation", "Gunshot wound"],
    answer: "Fire burns",
    explanation: "Due to heat coagulation of muscle proteins during burns — causes flexion of limbs (boxer's posture)."
  },
  {
    id: 17,
    topic: "Community Medicine",
    question: "Recommended daily iron dose for pregnant women is:",
    options: ["30 mg", "60 mg", "100 mg", "150 mg"],
    answer: "60 mg",
    explanation: "WHO recommends 60 mg elemental iron + 400 µg folic acid daily during pregnancy."
  },
  {
    id: 18,
    topic: "Pharmacology",
    question: "Drug of choice for absence seizure is:",
    options: ["Valproate", "Carbamazepine", "Phenytoin", "Ethosuximide"],
    answer: "Ethosuximide",
    explanation: "Ethosuximide selectively blocks T-type calcium channels in thalamic neurons → effective in absence seizures."
  },
  {
    id: 19,
    topic: "Medicine",
    question: "Pulsus paradoxus is associated with:",
    options: ["Aortic stenosis", "Cardiac tamponade", "Mitral stenosis", "Atrial fibrillation"],
    answer: "Cardiac tamponade",
    explanation: "Inspiration increases venous return → exaggerated drop in BP >10 mmHg in tamponade."
  },
  {
    id: 20,
    topic: "Gynecology",
    question: "The first investigation in infertility workup is:",
    options: ["Tubal patency test", "Semen analysis", "Laparoscopy", "Hormone assay"],
    answer: "Semen analysis",
    explanation: "Always begin infertility workup with male semen analysis — simple, non-invasive, and cost-effective."
  }
];
export default MCQData;