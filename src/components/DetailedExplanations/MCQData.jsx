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
  },
  {
    "id": 51,
    "topic": "Community Medicine",
    "question": "What is the mechanism of action of Drug A?",
    "options": [
      "Option A for 51",
      "Option B for 51",
      "Option C for 51",
      "Option D for 51"
    ],
    "answer": "Option A for 51",
    "explanation": "Drug A works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 51)."
  },
  {
    "id": 52,
    "topic": "Physiology",
    "question": "What is the mechanism of action of Drug B?",
    "options": [
      "Option A for 52",
      "Option B for 52",
      "Option C for 52",
      "Option D for 52"
    ],
    "answer": "Option B for 52",
    "explanation": "Drug B works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 52)."
  },
  {
    "id": 53,
    "topic": "Anatomy",
    "question": "What is the mechanism of action of Drug C?",
    "options": [
      "Option A for 53",
      "Option B for 53",
      "Option C for 53",
      "Option D for 53"
    ],
    "answer": "Option C for 53",
    "explanation": "Drug C works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 53)."
  },
  {
    "id": 54,
    "topic": "Microbiology",
    "question": "What is the mechanism of action of Drug D?",
    "options": [
      "Option A for 54",
      "Option B for 54",
      "Option C for 54",
      "Option D for 54"
    ],
    "answer": "Option D for 54",
    "explanation": "Drug D works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 54)."
  },
  {
    "id": 55,
    "topic": "Community Medicine",
    "question": "What is the mechanism of action of Drug E?",
    "options": [
      "Option A for 55",
      "Option B for 55",
      "Option C for 55",
      "Option D for 55"
    ],
    "answer": "Option A for 55",
    "explanation": "Drug E works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 55)."
  },
  {
    "id": 56,
    "topic": "OBG",
    "question": "What is the mechanism of action of Drug F?",
    "options": [
      "Option A for 56",
      "Option B for 56",
      "Option C for 56",
      "Option D for 56"
    ],
    "answer": "Option B for 56",
    "explanation": "Drug F works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 56)."
  },
  {
    "id": 57,
    "topic": "Physiology",
    "question": "What is the mechanism of action of Drug G?",
    "options": [
      "Option A for 57",
      "Option B for 57",
      "Option C for 57",
      "Option D for 57"
    ],
    "answer": "Option C for 57",
    "explanation": "Drug G works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 57)."
  },
  {
    "id": 58,
    "topic": "OBG",
    "question": "What is the mechanism of action of Drug H?",
    "options": [
      "Option A for 58",
      "Option B for 58",
      "Option C for 58",
      "Option D for 58"
    ],
    "answer": "Option D for 58",
    "explanation": "Drug H works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 58)."
  },
  {
    "id": 59,
    "topic": "Anatomy",
    "question": "What is the mechanism of action of Drug I?",
    "options": [
      "Option A for 59",
      "Option B for 59",
      "Option C for 59",
      "Option D for 59"
    ],
    "answer": "Option A for 59",
    "explanation": "Drug I works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 59)."
  },
  {
    "id": 60,
    "topic": "Biochemistry",
    "question": "What is the mechanism of action of Drug J?",
    "options": [
      "Option A for 60",
      "Option B for 60",
      "Option C for 60",
      "Option D for 60"
    ],
    "answer": "Option B for 60",
    "explanation": "Drug J works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 60)."
  },
  {
    "id": 61,
    "topic": "Medicine",
    "question": "What is the mechanism of action of Drug K?",
    "options": [
      "Option A for 61",
      "Option B for 61",
      "Option C for 61",
      "Option D for 61"
    ],
    "answer": "Option C for 61",
    "explanation": "Drug K works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 61)."
  },
  {
    "id": 62,
    "topic": "OBG",
    "question": "What is the mechanism of action of Drug L?",
    "options": [
      "Option A for 62",
      "Option B for 62",
      "Option C for 62",
      "Option D for 62"
    ],
    "answer": "Option D for 62",
    "explanation": "Drug L works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 62)."
  },
  {
    "id": 63,
    "topic": "Microbiology",
    "question": "What is the mechanism of action of Drug M?",
    "options": [
      "Option A for 63",
      "Option B for 63",
      "Option C for 63",
      "Option D for 63"
    ],
    "answer": "Option A for 63",
    "explanation": "Drug M works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 63)."
  },
  {
    "id": 64,
    "topic": "Microbiology",
    "question": "What is the mechanism of action of Drug N?",
    "options": [
      "Option A for 64",
      "Option B for 64",
      "Option C for 64",
      "Option D for 64"
    ],
    "answer": "Option B for 64",
    "explanation": "Drug N works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 64)."
  },
  {
    "id": 65,
    "topic": "OBG",
    "question": "What is the mechanism of action of Drug O?",
    "options": [
      "Option A for 65",
      "Option B for 65",
      "Option C for 65",
      "Option D for 65"
    ],
    "answer": "Option C for 65",
    "explanation": "Drug O works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 65)."
  },
  {
    "id": 66,
    "topic": "Surgery",
    "question": "What is the mechanism of action of Drug P?",
    "options": [
      "Option A for 66",
      "Option B for 66",
      "Option C for 66",
      "Option D for 66"
    ],
    "answer": "Option D for 66",
    "explanation": "Drug P works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 66)."
  },
  {
    "id": 67,
    "topic": "Anatomy",
    "question": "What is the mechanism of action of Drug Q?",
    "options": [
      "Option A for 67",
      "Option B for 67",
      "Option C for 67",
      "Option D for 67"
    ],
    "answer": "Option A for 67",
    "explanation": "Drug Q works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 67)."
  },
  {
    "id": 68,
    "topic": "Medicine",
    "question": "What is the mechanism of action of Drug R?",
    "options": [
      "Option A for 68",
      "Option B for 68",
      "Option C for 68",
      "Option D for 68"
    ],
    "answer": "Option B for 68",
    "explanation": "Drug R works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 68)."
  },
  {
    "id": 69,
    "topic": "Pharmacology",
    "question": "What is the mechanism of action of Drug S?",
    "options": [
      "Option A for 69",
      "Option B for 69",
      "Option C for 69",
      "Option D for 69"
    ],
    "answer": "Option C for 69",
    "explanation": "Drug S works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 69)."
  },
  {
    "id": 70,
    "topic": "OBG",
    "question": "What is the mechanism of action of Drug T?",
    "options": [
      "Option A for 70",
      "Option B for 70",
      "Option C for 70",
      "Option D for 70"
    ],
    "answer": "Option D for 70",
    "explanation": "Drug T works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 70)."
  },
  {
    "id": 71,
    "topic": "OBG",
    "question": "What is the mechanism of action of Drug U?",
    "options": [
      "Option A for 71",
      "Option B for 71",
      "Option C for 71",
      "Option D for 71"
    ],
    "answer": "Option A for 71",
    "explanation": "Drug U works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 71)."
  },
  {
    "id": 72,
    "topic": "Community Medicine",
    "question": "What is the mechanism of action of Drug V?",
    "options": [
      "Option A for 72",
      "Option B for 72",
      "Option C for 72",
      "Option D for 72"
    ],
    "answer": "Option B for 72",
    "explanation": "Drug V works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 72)."
  },
  {
    "id": 73,
    "topic": "OBG",
    "question": "What is the mechanism of action of Drug W?",
    "options": [
      "Option A for 73",
      "Option B for 73",
      "Option C for 73",
      "Option D for 73"
    ],
    "answer": "Option C for 73",
    "explanation": "Drug W works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 73)."
  },
  {
    "id": 74,
    "topic": "Pathology",
    "question": "What is the mechanism of action of Drug X?",
    "options": [
      "Option A for 74",
      "Option B for 74",
      "Option C for 74",
      "Option D for 74"
    ],
    "answer": "Option D for 74",
    "explanation": "Drug X works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 74)."
  },
  {
    "id": 75,
    "topic": "OBG",
    "question": "What is the mechanism of action of Drug Y?",
    "options": [
      "Option A for 75",
      "Option B for 75",
      "Option C for 75",
      "Option D for 75"
    ],
    "answer": "Option A for 75",
    "explanation": "Drug Y works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 75)."
  },
  {
    "id": 76,
    "topic": "Pathology",
    "question": "What is the mechanism of action of Drug Z?",
    "options": [
      "Option A for 76",
      "Option B for 76",
      "Option C for 76",
      "Option D for 76"
    ],
    "answer": "Option B for 76",
    "explanation": "Drug Z works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 76)."
  },
  {
    "id": 77,
    "topic": "Pathology",
    "question": "What is the mechanism of action of Drug A?",
    "options": [
      "Option A for 77",
      "Option B for 77",
      "Option C for 77",
      "Option D for 77"
    ],
    "answer": "Option C for 77",
    "explanation": "Drug A works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 77)."
  },
  {
    "id": 78,
    "topic": "Biochemistry",
    "question": "What is the mechanism of action of Drug B?",
    "options": [
      "Option A for 78",
      "Option B for 78",
      "Option C for 78",
      "Option D for 78"
    ],
    "answer": "Option D for 78",
    "explanation": "Drug B works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 78)."
  },
  {
    "id": 79,
    "topic": "OBG",
    "question": "What is the mechanism of action of Drug C?",
    "options": [
      "Option A for 79",
      "Option B for 79",
      "Option C for 79",
      "Option D for 79"
    ],
    "answer": "Option A for 79",
    "explanation": "Drug C works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 79)."
  },
  {
    "id": 80,
    "topic": "Community Medicine",
    "question": "What is the mechanism of action of Drug D?",
    "options": [
      "Option A for 80",
      "Option B for 80",
      "Option C for 80",
      "Option D for 80"
    ],
    "answer": "Option B for 80",
    "explanation": "Drug D works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 80)."
  },
  {
    "id": 81,
    "topic": "Biochemistry",
    "question": "What is the mechanism of action of Drug E?",
    "options": [
      "Option A for 81",
      "Option B for 81",
      "Option C for 81",
      "Option D for 81"
    ],
    "answer": "Option C for 81",
    "explanation": "Drug E works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 81)."
  },
  {
    "id": 82,
    "topic": "Microbiology",
    "question": "What is the mechanism of action of Drug F?",
    "options": [
      "Option A for 82",
      "Option B for 82",
      "Option C for 82",
      "Option D for 82"
    ],
    "answer": "Option D for 82",
    "explanation": "Drug F works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 82)."
  },
  {
    "id": 83,
    "topic": "Medicine",
    "question": "What is the mechanism of action of Drug G?",
    "options": [
      "Option A for 83",
      "Option B for 83",
      "Option C for 83",
      "Option D for 83"
    ],
    "answer": "Option A for 83",
    "explanation": "Drug G works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 83)."
  },
  {
    "id": 84,
    "topic": "OBG",
    "question": "What is the mechanism of action of Drug H?",
    "options": [
      "Option A for 84",
      "Option B for 84",
      "Option C for 84",
      "Option D for 84"
    ],
    "answer": "Option B for 84",
    "explanation": "Drug H works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 84)."
  },
  {
    "id": 85,
    "topic": "Pharmacology",
    "question": "What is the mechanism of action of Drug I?",
    "options": [
      "Option A for 85",
      "Option B for 85",
      "Option C for 85",
      "Option D for 85"
    ],
    "answer": "Option C for 85",
    "explanation": "Drug I works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 85)."
  },
  {
    "id": 86,
    "topic": "OBG",
    "question": "What is the mechanism of action of Drug J?",
    "options": [
      "Option A for 86",
      "Option B for 86",
      "Option C for 86",
      "Option D for 86"
    ],
    "answer": "Option D for 86",
    "explanation": "Drug J works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 86)."
  },
  {
    "id": 87,
    "topic": "Community Medicine",
    "question": "What is the mechanism of action of Drug K?",
    "options": [
      "Option A for 87",
      "Option B for 87",
      "Option C for 87",
      "Option D for 87"
    ],
    "answer": "Option A for 87",
    "explanation": "Drug K works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 87)."
  },
  {
    "id": 88,
    "topic": "Biochemistry",
    "question": "What is the mechanism of action of Drug L?",
    "options": [
      "Option A for 88",
      "Option B for 88",
      "Option C for 88",
      "Option D for 88"
    ],
    "answer": "Option B for 88",
    "explanation": "Drug L works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 88)."
  },
  {
    "id": 89,
    "topic": "Medicine",
    "question": "What is the mechanism of action of Drug M?",
    "options": [
      "Option A for 89",
      "Option B for 89",
      "Option C for 89",
      "Option D for 89"
    ],
    "answer": "Option C for 89",
    "explanation": "Drug M works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 89)."
  },
  {
    "id": 90,
    "topic": "Biochemistry",
    "question": "What is the mechanism of action of Drug N?",
    "options": [
      "Option A for 90",
      "Option B for 90",
      "Option C for 90",
      "Option D for 90"
    ],
    "answer": "Option D for 90",
    "explanation": "Drug N works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 90)."
  },
  {
    "id": 91,
    "topic": "Anatomy",
    "question": "What is the mechanism of action of Drug O?",
    "options": [
      "Option A for 91",
      "Option B for 91",
      "Option C for 91",
      "Option D for 91"
    ],
    "answer": "Option A for 91",
    "explanation": "Drug O works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 91)."
  },
  {
    "id": 92,
    "topic": "Microbiology",
    "question": "What is the mechanism of action of Drug P?",
    "options": [
      "Option A for 92",
      "Option B for 92",
      "Option C for 92",
      "Option D for 92"
    ],
    "answer": "Option B for 92",
    "explanation": "Drug P works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 92)."
  },
  {
    "id": 93,
    "topic": "Medicine",
    "question": "What is the mechanism of action of Drug Q?",
    "options": [
      "Option A for 93",
      "Option B for 93",
      "Option C for 93",
      "Option D for 93"
    ],
    "answer": "Option C for 93",
    "explanation": "Drug Q works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 93)."
  },
  {
    "id": 94,
    "topic": "Biochemistry",
    "question": "What is the mechanism of action of Drug R?",
    "options": [
      "Option A for 94",
      "Option B for 94",
      "Option C for 94",
      "Option D for 94"
    ],
    "answer": "Option D for 94",
    "explanation": "Drug R works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 94)."
  },
  {
    "id": 95,
    "topic": "Surgery",
    "question": "What is the mechanism of action of Drug S?",
    "options": [
      "Option A for 95",
      "Option B for 95",
      "Option C for 95",
      "Option D for 95"
    ],
    "answer": "Option A for 95",
    "explanation": "Drug S works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 95)."
  },
  {
    "id": 96,
    "topic": "Community Medicine",
    "question": "What is the mechanism of action of Drug T?",
    "options": [
      "Option A for 96",
      "Option B for 96",
      "Option C for 96",
      "Option D for 96"
    ],
    "answer": "Option B for 96",
    "explanation": "Drug T works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 96)."
  },
  {
    "id": 97,
    "topic": "Pathology",
    "question": "What is the mechanism of action of Drug U?",
    "options": [
      "Option A for 97",
      "Option B for 97",
      "Option C for 97",
      "Option D for 97"
    ],
    "answer": "Option C for 97",
    "explanation": "Drug U works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 97)."
  },
  {
    "id": 98,
    "topic": "OBG",
    "question": "What is the mechanism of action of Drug V?",
    "options": [
      "Option A for 98",
      "Option B for 98",
      "Option C for 98",
      "Option D for 98"
    ],
    "answer": "Option D for 98",
    "explanation": "Drug V works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 98)."
  },
  {
    "id": 99,
    "topic": "Pharmacology",
    "question": "What is the mechanism of action of Drug W?",
    "options": [
      "Option A for 99",
      "Option B for 99",
      "Option C for 99",
      "Option D for 99"
    ],
    "answer": "Option A for 99",
    "explanation": "Drug W works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 99)."
  },
  {
    "id": 100,
    "topic": "Surgery",
    "question": "What is the mechanism of action of Drug X?",
    "options": [
      "Option A for 100",
      "Option B for 100",
      "Option C for 100",
      "Option D for 100"
    ],
    "answer": "Option B for 100",
    "explanation": "Drug X works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 100)."
  },
  {
    "id": 101,
    "topic": "Physiology",
    "question": "What is the mechanism of action of Drug Y?",
    "options": [
      "Option A for 101",
      "Option B for 101",
      "Option C for 101",
      "Option D for 101"
    ],
    "answer": "Option C for 101",
    "explanation": "Drug Y works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 101)."
  },
  {
    "id": 102,
    "topic": "Biochemistry",
    "question": "What is the mechanism of action of Drug Z?",
    "options": [
      "Option A for 102",
      "Option B for 102",
      "Option C for 102",
      "Option D for 102"
    ],
    "answer": "Option D for 102",
    "explanation": "Drug Z works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 102)."
  },
  {
    "id": 103,
    "topic": "Surgery",
    "question": "What is the mechanism of action of Drug A?",
    "options": [
      "Option A for 103",
      "Option B for 103",
      "Option C for 103",
      "Option D for 103"
    ],
    "answer": "Option A for 103",
    "explanation": "Drug A works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 103)."
  },
  {
    "id": 104,
    "topic": "OBG",
    "question": "What is the mechanism of action of Drug B?",
    "options": [
      "Option A for 104",
      "Option B for 104",
      "Option C for 104",
      "Option D for 104"
    ],
    "answer": "Option B for 104",
    "explanation": "Drug B works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 104)."
  },
  {
    "id": 105,
    "topic": "Biochemistry",
    "question": "What is the mechanism of action of Drug C?",
    "options": [
      "Option A for 105",
      "Option B for 105",
      "Option C for 105",
      "Option D for 105"
    ],
    "answer": "Option C for 105",
    "explanation": "Drug C works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 105)."
  },
  {
    "id": 106,
    "topic": "Surgery",
    "question": "What is the mechanism of action of Drug D?",
    "options": [
      "Option A for 106",
      "Option B for 106",
      "Option C for 106",
      "Option D for 106"
    ],
    "answer": "Option D for 106",
    "explanation": "Drug D works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 106)."
  },
  {
    "id": 107,
    "topic": "Biochemistry",
    "question": "What is the mechanism of action of Drug E?",
    "options": [
      "Option A for 107",
      "Option B for 107",
      "Option C for 107",
      "Option D for 107"
    ],
    "answer": "Option A for 107",
    "explanation": "Drug E works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 107)."
  },
  {
    "id": 108,
    "topic": "Microbiology",
    "question": "What is the mechanism of action of Drug F?",
    "options": [
      "Option A for 108",
      "Option B for 108",
      "Option C for 108",
      "Option D for 108"
    ],
    "answer": "Option B for 108",
    "explanation": "Drug F works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 108)."
  },
  {
    "id": 109,
    "topic": "Pathology",
    "question": "What is the mechanism of action of Drug G?",
    "options": [
      "Option A for 109",
      "Option B for 109",
      "Option C for 109",
      "Option D for 109"
    ],
    "answer": "Option C for 109",
    "explanation": "Drug G works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 109)."
  },
  {
    "id": 110,
    "topic": "OBG",
    "question": "What is the mechanism of action of Drug H?",
    "options": [
      "Option A for 110",
      "Option B for 110",
      "Option C for 110",
      "Option D for 110"
    ],
    "answer": "Option D for 110",
    "explanation": "Drug H works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 110)."
  },
  {
    "id": 111,
    "topic": "Surgery",
    "question": "What is the mechanism of action of Drug I?",
    "options": [
      "Option A for 111",
      "Option B for 111",
      "Option C for 111",
      "Option D for 111"
    ],
    "answer": "Option A for 111",
    "explanation": "Drug I works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 111)."
  },
  {
    "id": 112,
    "topic": "Pathology",
    "question": "What is the mechanism of action of Drug J?",
    "options": [
      "Option A for 112",
      "Option B for 112",
      "Option C for 112",
      "Option D for 112"
    ],
    "answer": "Option B for 112",
    "explanation": "Drug J works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 112)."
  },
  {
    "id": 113,
    "topic": "Community Medicine",
    "question": "What is the mechanism of action of Drug K?",
    "options": [
      "Option A for 113",
      "Option B for 113",
      "Option C for 113",
      "Option D for 113"
    ],
    "answer": "Option C for 113",
    "explanation": "Drug K works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 113)."
  },
  {
    "id": 114,
    "topic": "Medicine",
    "question": "What is the mechanism of action of Drug L?",
    "options": [
      "Option A for 114",
      "Option B for 114",
      "Option C for 114",
      "Option D for 114"
    ],
    "answer": "Option D for 114",
    "explanation": "Drug L works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 114)."
  },
  {
    "id": 115,
    "topic": "Microbiology",
    "question": "What is the mechanism of action of Drug M?",
    "options": [
      "Option A for 115",
      "Option B for 115",
      "Option C for 115",
      "Option D for 115"
    ],
    "answer": "Option A for 115",
    "explanation": "Drug M works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 115)."
  },
  {
    "id": 116,
    "topic": "Surgery",
    "question": "What is the mechanism of action of Drug N?",
    "options": [
      "Option A for 116",
      "Option B for 116",
      "Option C for 116",
      "Option D for 116"
    ],
    "answer": "Option B for 116",
    "explanation": "Drug N works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 116)."
  },
  {
    "id": 117,
    "topic": "Community Medicine",
    "question": "What is the mechanism of action of Drug O?",
    "options": [
      "Option A for 117",
      "Option B for 117",
      "Option C for 117",
      "Option D for 117"
    ],
    "answer": "Option C for 117",
    "explanation": "Drug O works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 117)."
  },
  {
    "id": 118,
    "topic": "OBG",
    "question": "What is the mechanism of action of Drug P?",
    "options": [
      "Option A for 118",
      "Option B for 118",
      "Option C for 118",
      "Option D for 118"
    ],
    "answer": "Option D for 118",
    "explanation": "Drug P works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 118)."
  },
  {
    "id": 119,
    "topic": "Biochemistry",
    "question": "What is the mechanism of action of Drug Q?",
    "options": [
      "Option A for 119",
      "Option B for 119",
      "Option C for 119",
      "Option D for 119"
    ],
    "answer": "Option A for 119",
    "explanation": "Drug Q works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 119)."
  },
  {
    "id": 120,
    "topic": "Medicine",
    "question": "What is the mechanism of action of Drug R?",
    "options": [
      "Option A for 120",
      "Option B for 120",
      "Option C for 120",
      "Option D for 120"
    ],
    "answer": "Option B for 120",
    "explanation": "Drug R works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 120)."
  },
  {
    "id": 121,
    "topic": "Anatomy",
    "question": "What is the mechanism of action of Drug S?",
    "options": [
      "Option A for 121",
      "Option B for 121",
      "Option C for 121",
      "Option D for 121"
    ],
    "answer": "Option C for 121",
    "explanation": "Drug S works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 121)."
  },
  {
    "id": 122,
    "topic": "Biochemistry",
    "question": "What is the mechanism of action of Drug T?",
    "options": [
      "Option A for 122",
      "Option B for 122",
      "Option C for 122",
      "Option D for 122"
    ],
    "answer": "Option D for 122",
    "explanation": "Drug T works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 122)."
  },
  {
    "id": 123,
    "topic": "Physiology",
    "question": "What is the mechanism of action of Drug U?",
    "options": [
      "Option A for 123",
      "Option B for 123",
      "Option C for 123",
      "Option D for 123"
    ],
    "answer": "Option A for 123",
    "explanation": "Drug U works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 123)."
  },
  {
    "id": 124,
    "topic": "Biochemistry",
    "question": "What is the mechanism of action of Drug V?",
    "options": [
      "Option A for 124",
      "Option B for 124",
      "Option C for 124",
      "Option D for 124"
    ],
    "answer": "Option B for 124",
    "explanation": "Drug V works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 124)."
  },
  {
    "id": 125,
    "topic": "Anatomy",
    "question": "What is the mechanism of action of Drug W?",
    "options": [
      "Option A for 125",
      "Option B for 125",
      "Option C for 125",
      "Option D for 125"
    ],
    "answer": "Option C for 125",
    "explanation": "Drug W works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 125)."
  },
  {
    "id": 126,
    "topic": "Pharmacology",
    "question": "What is the mechanism of action of Drug X?",
    "options": [
      "Option A for 126",
      "Option B for 126",
      "Option C for 126",
      "Option D for 126"
    ],
    "answer": "Option D for 126",
    "explanation": "Drug X works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 126)."
  },
  {
    "id": 127,
    "topic": "Physiology",
    "question": "What is the mechanism of action of Drug Y?",
    "options": [
      "Option A for 127",
      "Option B for 127",
      "Option C for 127",
      "Option D for 127"
    ],
    "answer": "Option A for 127",
    "explanation": "Drug Y works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 127)."
  },
  {
    "id": 128,
    "topic": "OBG",
    "question": "What is the mechanism of action of Drug Z?",
    "options": [
      "Option A for 128",
      "Option B for 128",
      "Option C for 128",
      "Option D for 128"
    ],
    "answer": "Option B for 128",
    "explanation": "Drug Z works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 128)."
  },
  {
    "id": 129,
    "topic": "Community Medicine",
    "question": "What is the mechanism of action of Drug A?",
    "options": [
      "Option A for 129",
      "Option B for 129",
      "Option C for 129",
      "Option D for 129"
    ],
    "answer": "Option C for 129",
    "explanation": "Drug A works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 129)."
  },
  {
    "id": 130,
    "topic": "Microbiology",
    "question": "What is the mechanism of action of Drug B?",
    "options": [
      "Option A for 130",
      "Option B for 130",
      "Option C for 130",
      "Option D for 130"
    ],
    "answer": "Option D for 130",
    "explanation": "Drug B works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 130)."
  },
  {
    "id": 131,
    "topic": "Pharmacology",
    "question": "What is the mechanism of action of Drug C?",
    "options": [
      "Option A for 131",
      "Option B for 131",
      "Option C for 131",
      "Option D for 131"
    ],
    "answer": "Option A for 131",
    "explanation": "Drug C works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 131)."
  },
  {
    "id": 132,
    "topic": "Microbiology",
    "question": "What is the mechanism of action of Drug D?",
    "options": [
      "Option A for 132",
      "Option B for 132",
      "Option C for 132",
      "Option D for 132"
    ],
    "answer": "Option B for 132",
    "explanation": "Drug D works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 132)."
  },
  {
    "id": 133,
    "topic": "Pathology",
    "question": "What is the mechanism of action of Drug E?",
    "options": [
      "Option A for 133",
      "Option B for 133",
      "Option C for 133",
      "Option D for 133"
    ],
    "answer": "Option C for 133",
    "explanation": "Drug E works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 133)."
  },
  {
    "id": 134,
    "topic": "Pathology",
    "question": "What is the mechanism of action of Drug F?",
    "options": [
      "Option A for 134",
      "Option B for 134",
      "Option C for 134",
      "Option D for 134"
    ],
    "answer": "Option D for 134",
    "explanation": "Drug F works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 134)."
  },
  {
    "id": 135,
    "topic": "Pathology",
    "question": "What is the mechanism of action of Drug G?",
    "options": [
      "Option A for 135",
      "Option B for 135",
      "Option C for 135",
      "Option D for 135"
    ],
    "answer": "Option A for 135",
    "explanation": "Drug G works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 135)."
  },
  {
    "id": 136,
    "topic": "Biochemistry",
    "question": "What is the mechanism of action of Drug H?",
    "options": [
      "Option A for 136",
      "Option B for 136",
      "Option C for 136",
      "Option D for 136"
    ],
    "answer": "Option B for 136",
    "explanation": "Drug H works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 136)."
  },
  {
    "id": 137,
    "topic": "Anatomy",
    "question": "What is the mechanism of action of Drug I?",
    "options": [
      "Option A for 137",
      "Option B for 137",
      "Option C for 137",
      "Option D for 137"
    ],
    "answer": "Option C for 137",
    "explanation": "Drug I works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 137)."
  },
  {
    "id": 138,
    "topic": "OBG",
    "question": "What is the mechanism of action of Drug J?",
    "options": [
      "Option A for 138",
      "Option B for 138",
      "Option C for 138",
      "Option D for 138"
    ],
    "answer": "Option D for 138",
    "explanation": "Drug J works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 138)."
  },
  {
    "id": 139,
    "topic": "Microbiology",
    "question": "What is the mechanism of action of Drug K?",
    "options": [
      "Option A for 139",
      "Option B for 139",
      "Option C for 139",
      "Option D for 139"
    ],
    "answer": "Option A for 139",
    "explanation": "Drug K works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 139)."
  },
  {
    "id": 140,
    "topic": "OBG",
    "question": "What is the mechanism of action of Drug L?",
    "options": [
      "Option A for 140",
      "Option B for 140",
      "Option C for 140",
      "Option D for 140"
    ],
    "answer": "Option B for 140",
    "explanation": "Drug L works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 140)."
  },
  {
    "id": 141,
    "topic": "Biochemistry",
    "question": "What is the mechanism of action of Drug M?",
    "options": [
      "Option A for 141",
      "Option B for 141",
      "Option C for 141",
      "Option D for 141"
    ],
    "answer": "Option C for 141",
    "explanation": "Drug M works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 141)."
  },
  {
    "id": 142,
    "topic": "Surgery",
    "question": "What is the mechanism of action of Drug N?",
    "options": [
      "Option A for 142",
      "Option B for 142",
      "Option C for 142",
      "Option D for 142"
    ],
    "answer": "Option D for 142",
    "explanation": "Drug N works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 142)."
  },
  {
    "id": 143,
    "topic": "Biochemistry",
    "question": "What is the mechanism of action of Drug O?",
    "options": [
      "Option A for 143",
      "Option B for 143",
      "Option C for 143",
      "Option D for 143"
    ],
    "answer": "Option A for 143",
    "explanation": "Drug O works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 143)."
  },
  {
    "id": 144,
    "topic": "OBG",
    "question": "What is the mechanism of action of Drug P?",
    "options": [
      "Option A for 144",
      "Option B for 144",
      "Option C for 144",
      "Option D for 144"
    ],
    "answer": "Option B for 144",
    "explanation": "Drug P works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 144)."
  },
  {
    "id": 145,
    "topic": "OBG",
    "question": "What is the mechanism of action of Drug Q?",
    "options": [
      "Option A for 145",
      "Option B for 145",
      "Option C for 145",
      "Option D for 145"
    ],
    "answer": "Option C for 145",
    "explanation": "Drug Q works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 145)."
  },
  {
    "id": 146,
    "topic": "Microbiology",
    "question": "What is the mechanism of action of Drug R?",
    "options": [
      "Option A for 146",
      "Option B for 146",
      "Option C for 146",
      "Option D for 146"
    ],
    "answer": "Option D for 146",
    "explanation": "Drug R works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 146)."
  },
  {
    "id": 147,
    "topic": "OBG",
    "question": "What is the mechanism of action of Drug S?",
    "options": [
      "Option A for 147",
      "Option B for 147",
      "Option C for 147",
      "Option D for 147"
    ],
    "answer": "Option A for 147",
    "explanation": "Drug S works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 147)."
  },
  {
    "id": 148,
    "topic": "Pharmacology",
    "question": "What is the mechanism of action of Drug T?",
    "options": [
      "Option A for 148",
      "Option B for 148",
      "Option C for 148",
      "Option D for 148"
    ],
    "answer": "Option B for 148",
    "explanation": "Drug T works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 148)."
  },
  {
    "id": 149,
    "topic": "Pharmacology",
    "question": "What is the mechanism of action of Drug U?",
    "options": [
      "Option A for 149",
      "Option B for 149",
      "Option C for 149",
      "Option D for 149"
    ],
    "answer": "Option C for 149",
    "explanation": "Drug U works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 149)."
  },
  {
    "id": 150,
    "topic": "Pharmacology",
    "question": "What is the mechanism of action of Drug V?",
    "options": [
      "Option A for 150",
      "Option B for 150",
      "Option C for 150",
      "Option D for 150"
    ],
    "answer": "Option D for 150",
    "explanation": "Drug V works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 150)."
  },
  {
    "id": 151,
    "topic": "Microbiology",
    "question": "What is the mechanism of action of Drug W?",
    "options": [
      "Option A for 151",
      "Option B for 151",
      "Option C for 151",
      "Option D for 151"
    ],
    "answer": "Option A for 151",
    "explanation": "Drug W works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 151)."
  },
  {
    "id": 152,
    "topic": "Biochemistry",
    "question": "What is the mechanism of action of Drug X?",
    "options": [
      "Option A for 152",
      "Option B for 152",
      "Option C for 152",
      "Option D for 152"
    ],
    "answer": "Option B for 152",
    "explanation": "Drug X works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 152)."
  },
  {
    "id": 153,
    "topic": "Microbiology",
    "question": "What is the mechanism of action of Drug Y?",
    "options": [
      "Option A for 153",
      "Option B for 153",
      "Option C for 153",
      "Option D for 153"
    ],
    "answer": "Option C for 153",
    "explanation": "Drug Y works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 153)."
  },
  {
    "id": 154,
    "topic": "Pathology",
    "question": "What is the mechanism of action of Drug Z?",
    "options": [
      "Option A for 154",
      "Option B for 154",
      "Option C for 154",
      "Option D for 154"
    ],
    "answer": "Option D for 154",
    "explanation": "Drug Z works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 154)."
  },
  {
    "id": 155,
    "topic": "Pharmacology",
    "question": "What is the mechanism of action of Drug A?",
    "options": [
      "Option A for 155",
      "Option B for 155",
      "Option C for 155",
      "Option D for 155"
    ],
    "answer": "Option A for 155",
    "explanation": "Drug A works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 155)."
  },
  {
    "id": 156,
    "topic": "Community Medicine",
    "question": "What is the mechanism of action of Drug B?",
    "options": [
      "Option A for 156",
      "Option B for 156",
      "Option C for 156",
      "Option D for 156"
    ],
    "answer": "Option B for 156",
    "explanation": "Drug B works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 156)."
  },
  {
    "id": 157,
    "topic": "Surgery",
    "question": "What is the mechanism of action of Drug C?",
    "options": [
      "Option A for 157",
      "Option B for 157",
      "Option C for 157",
      "Option D for 157"
    ],
    "answer": "Option C for 157",
    "explanation": "Drug C works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 157)."
  },
  {
    "id": 158,
    "topic": "Surgery",
    "question": "What is the mechanism of action of Drug D?",
    "options": [
      "Option A for 158",
      "Option B for 158",
      "Option C for 158",
      "Option D for 158"
    ],
    "answer": "Option D for 158",
    "explanation": "Drug D works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 158)."
  },
  {
    "id": 159,
    "topic": "Community Medicine",
    "question": "What is the mechanism of action of Drug E?",
    "options": [
      "Option A for 159",
      "Option B for 159",
      "Option C for 159",
      "Option D for 159"
    ],
    "answer": "Option A for 159",
    "explanation": "Drug E works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 159)."
  },
  {
    "id": 160,
    "topic": "Physiology",
    "question": "What is the mechanism of action of Drug F?",
    "options": [
      "Option A for 160",
      "Option B for 160",
      "Option C for 160",
      "Option D for 160"
    ],
    "answer": "Option B for 160",
    "explanation": "Drug F works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 160)."
  },
  {
    "id": 161,
    "topic": "Surgery",
    "question": "What is the mechanism of action of Drug G?",
    "options": [
      "Option A for 161",
      "Option B for 161",
      "Option C for 161",
      "Option D for 161"
    ],
    "answer": "Option C for 161",
    "explanation": "Drug G works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 161)."
  },
  {
    "id": 162,
    "topic": "Anatomy",
    "question": "What is the mechanism of action of Drug H?",
    "options": [
      "Option A for 162",
      "Option B for 162",
      "Option C for 162",
      "Option D for 162"
    ],
    "answer": "Option D for 162",
    "explanation": "Drug H works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 162)."
  },
  {
    "id": 163,
    "topic": "Surgery",
    "question": "What is the mechanism of action of Drug I?",
    "options": [
      "Option A for 163",
      "Option B for 163",
      "Option C for 163",
      "Option D for 163"
    ],
    "answer": "Option A for 163",
    "explanation": "Drug I works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 163)."
  },
  {
    "id": 164,
    "topic": "Microbiology",
    "question": "What is the mechanism of action of Drug J?",
    "options": [
      "Option A for 164",
      "Option B for 164",
      "Option C for 164",
      "Option D for 164"
    ],
    "answer": "Option B for 164",
    "explanation": "Drug J works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 164)."
  },
  {
    "id": 165,
    "topic": "Biochemistry",
    "question": "What is the mechanism of action of Drug K?",
    "options": [
      "Option A for 165",
      "Option B for 165",
      "Option C for 165",
      "Option D for 165"
    ],
    "answer": "Option C for 165",
    "explanation": "Drug K works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 165)."
  },
  {
    "id": 166,
    "topic": "Pathology",
    "question": "What is the mechanism of action of Drug L?",
    "options": [
      "Option A for 166",
      "Option B for 166",
      "Option C for 166",
      "Option D for 166"
    ],
    "answer": "Option D for 166",
    "explanation": "Drug L works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 166)."
  },
  {
    "id": 167,
    "topic": "Microbiology",
    "question": "What is the mechanism of action of Drug M?",
    "options": [
      "Option A for 167",
      "Option B for 167",
      "Option C for 167",
      "Option D for 167"
    ],
    "answer": "Option A for 167",
    "explanation": "Drug M works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 167)."
  },
  {
    "id": 168,
    "topic": "Anatomy",
    "question": "What is the mechanism of action of Drug N?",
    "options": [
      "Option A for 168",
      "Option B for 168",
      "Option C for 168",
      "Option D for 168"
    ],
    "answer": "Option B for 168",
    "explanation": "Drug N works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 168)."
  },
  {
    "id": 169,
    "topic": "Physiology",
    "question": "What is the mechanism of action of Drug O?",
    "options": [
      "Option A for 169",
      "Option B for 169",
      "Option C for 169",
      "Option D for 169"
    ],
    "answer": "Option C for 169",
    "explanation": "Drug O works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 169)."
  },
  {
    "id": 170,
    "topic": "Surgery",
    "question": "What is the mechanism of action of Drug P?",
    "options": [
      "Option A for 170",
      "Option B for 170",
      "Option C for 170",
      "Option D for 170"
    ],
    "answer": "Option D for 170",
    "explanation": "Drug P works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 170)."
  },
  {
    "id": 171,
    "topic": "OBG",
    "question": "What is the mechanism of action of Drug Q?",
    "options": [
      "Option A for 171",
      "Option B for 171",
      "Option C for 171",
      "Option D for 171"
    ],
    "answer": "Option A for 171",
    "explanation": "Drug Q works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 171)."
  },
  {
    "id": 172,
    "topic": "Anatomy",
    "question": "What is the mechanism of action of Drug R?",
    "options": [
      "Option A for 172",
      "Option B for 172",
      "Option C for 172",
      "Option D for 172"
    ],
    "answer": "Option B for 172",
    "explanation": "Drug R works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 172)."
  },
  {
    "id": 173,
    "topic": "Physiology",
    "question": "What is the mechanism of action of Drug S?",
    "options": [
      "Option A for 173",
      "Option B for 173",
      "Option C for 173",
      "Option D for 173"
    ],
    "answer": "Option C for 173",
    "explanation": "Drug S works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 173)."
  },
  {
    "id": 174,
    "topic": "Physiology",
    "question": "What is the mechanism of action of Drug T?",
    "options": [
      "Option A for 174",
      "Option B for 174",
      "Option C for 174",
      "Option D for 174"
    ],
    "answer": "Option D for 174",
    "explanation": "Drug T works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 174)."
  },
  {
    "id": 175,
    "topic": "Medicine",
    "question": "What is the mechanism of action of Drug U?",
    "options": [
      "Option A for 175",
      "Option B for 175",
      "Option C for 175",
      "Option D for 175"
    ],
    "answer": "Option A for 175",
    "explanation": "Drug U works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 175)."
  },
  {
    "id": 176,
    "topic": "Physiology",
    "question": "What is the mechanism of action of Drug V?",
    "options": [
      "Option A for 176",
      "Option B for 176",
      "Option C for 176",
      "Option D for 176"
    ],
    "answer": "Option B for 176",
    "explanation": "Drug V works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 176)."
  },
  {
    "id": 177,
    "topic": "Microbiology",
    "question": "What is the mechanism of action of Drug W?",
    "options": [
      "Option A for 177",
      "Option B for 177",
      "Option C for 177",
      "Option D for 177"
    ],
    "answer": "Option C for 177",
    "explanation": "Drug W works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 177)."
  },
  {
    "id": 178,
    "topic": "Physiology",
    "question": "What is the mechanism of action of Drug X?",
    "options": [
      "Option A for 178",
      "Option B for 178",
      "Option C for 178",
      "Option D for 178"
    ],
    "answer": "Option D for 178",
    "explanation": "Drug X works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 178)."
  },
  {
    "id": 179,
    "topic": "Pharmacology",
    "question": "What is the mechanism of action of Drug Y?",
    "options": [
      "Option A for 179",
      "Option B for 179",
      "Option C for 179",
      "Option D for 179"
    ],
    "answer": "Option A for 179",
    "explanation": "Drug Y works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 179)."
  },
  {
    "id": 180,
    "topic": "Community Medicine",
    "question": "What is the mechanism of action of Drug Z?",
    "options": [
      "Option A for 180",
      "Option B for 180",
      "Option C for 180",
      "Option D for 180"
    ],
    "answer": "Option B for 180",
    "explanation": "Drug Z works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 180)."
  },
  {
    "id": 181,
    "topic": "Medicine",
    "question": "What is the mechanism of action of Drug A?",
    "options": [
      "Option A for 181",
      "Option B for 181",
      "Option C for 181",
      "Option D for 181"
    ],
    "answer": "Option C for 181",
    "explanation": "Drug A works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 181)."
  },
  {
    "id": 182,
    "topic": "OBG",
    "question": "What is the mechanism of action of Drug B?",
    "options": [
      "Option A for 182",
      "Option B for 182",
      "Option C for 182",
      "Option D for 182"
    ],
    "answer": "Option D for 182",
    "explanation": "Drug B works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 182)."
  },
  {
    "id": 183,
    "topic": "OBG",
    "question": "What is the mechanism of action of Drug C?",
    "options": [
      "Option A for 183",
      "Option B for 183",
      "Option C for 183",
      "Option D for 183"
    ],
    "answer": "Option A for 183",
    "explanation": "Drug C works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 183)."
  },
  {
    "id": 184,
    "topic": "Medicine",
    "question": "What is the mechanism of action of Drug D?",
    "options": [
      "Option A for 184",
      "Option B for 184",
      "Option C for 184",
      "Option D for 184"
    ],
    "answer": "Option B for 184",
    "explanation": "Drug D works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 184)."
  },
  {
    "id": 185,
    "topic": "Surgery",
    "question": "What is the mechanism of action of Drug E?",
    "options": [
      "Option A for 185",
      "Option B for 185",
      "Option C for 185",
      "Option D for 185"
    ],
    "answer": "Option C for 185",
    "explanation": "Drug E works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 185)."
  },
  {
    "id": 186,
    "topic": "OBG",
    "question": "What is the mechanism of action of Drug F?",
    "options": [
      "Option A for 186",
      "Option B for 186",
      "Option C for 186",
      "Option D for 186"
    ],
    "answer": "Option D for 186",
    "explanation": "Drug F works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 186)."
  },
  {
    "id": 187,
    "topic": "Surgery",
    "question": "What is the mechanism of action of Drug G?",
    "options": [
      "Option A for 187",
      "Option B for 187",
      "Option C for 187",
      "Option D for 187"
    ],
    "answer": "Option A for 187",
    "explanation": "Drug G works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 187)."
  },
  {
    "id": 188,
    "topic": "OBG",
    "question": "What is the mechanism of action of Drug H?",
    "options": [
      "Option A for 188",
      "Option B for 188",
      "Option C for 188",
      "Option D for 188"
    ],
    "answer": "Option B for 188",
    "explanation": "Drug H works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 188)."
  },
  {
    "id": 189,
    "topic": "Community Medicine",
    "question": "What is the mechanism of action of Drug I?",
    "options": [
      "Option A for 189",
      "Option B for 189",
      "Option C for 189",
      "Option D for 189"
    ],
    "answer": "Option C for 189",
    "explanation": "Drug I works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 189)."
  },
  {
    "id": 190,
    "topic": "Medicine",
    "question": "What is the mechanism of action of Drug J?",
    "options": [
      "Option A for 190",
      "Option B for 190",
      "Option C for 190",
      "Option D for 190"
    ],
    "answer": "Option D for 190",
    "explanation": "Drug J works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 190)."
  },
  {
    "id": 191,
    "topic": "OBG",
    "question": "What is the mechanism of action of Drug K?",
    "options": [
      "Option A for 191",
      "Option B for 191",
      "Option C for 191",
      "Option D for 191"
    ],
    "answer": "Option A for 191",
    "explanation": "Drug K works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 191)."
  },
  {
    "id": 192,
    "topic": "Physiology",
    "question": "What is the mechanism of action of Drug L?",
    "options": [
      "Option A for 192",
      "Option B for 192",
      "Option C for 192",
      "Option D for 192"
    ],
    "answer": "Option B for 192",
    "explanation": "Drug L works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 192)."
  },
  {
    "id": 193,
    "topic": "Surgery",
    "question": "What is the mechanism of action of Drug M?",
    "options": [
      "Option A for 193",
      "Option B for 193",
      "Option C for 193",
      "Option D for 193"
    ],
    "answer": "Option C for 193",
    "explanation": "Drug M works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 193)."
  },
  {
    "id": 194,
    "topic": "Medicine",
    "question": "What is the mechanism of action of Drug N?",
    "options": [
      "Option A for 194",
      "Option B for 194",
      "Option C for 194",
      "Option D for 194"
    ],
    "answer": "Option D for 194",
    "explanation": "Drug N works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 194)."
  },
  {
    "id": 195,
    "topic": "Anatomy",
    "question": "What is the mechanism of action of Drug O?",
    "options": [
      "Option A for 195",
      "Option B for 195",
      "Option C for 195",
      "Option D for 195"
    ],
    "answer": "Option A for 195",
    "explanation": "Drug O works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 195)."
  },
  {
    "id": 196,
    "topic": "Physiology",
    "question": "What is the mechanism of action of Drug P?",
    "options": [
      "Option A for 196",
      "Option B for 196",
      "Option C for 196",
      "Option D for 196"
    ],
    "answer": "Option B for 196",
    "explanation": "Drug P works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 196)."
  },
  {
    "id": 197,
    "topic": "Surgery",
    "question": "What is the mechanism of action of Drug Q?",
    "options": [
      "Option A for 197",
      "Option B for 197",
      "Option C for 197",
      "Option D for 197"
    ],
    "answer": "Option C for 197",
    "explanation": "Drug Q works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 197)."
  },
  {
    "id": 198,
    "topic": "Biochemistry",
    "question": "What is the mechanism of action of Drug R?",
    "options": [
      "Option A for 198",
      "Option B for 198",
      "Option C for 198",
      "Option D for 198"
    ],
    "answer": "Option D for 198",
    "explanation": "Drug R works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 198)."
  },
  {
    "id": 199,
    "topic": "Medicine",
    "question": "What is the mechanism of action of Drug S?",
    "options": [
      "Option A for 199",
      "Option B for 199",
      "Option C for 199",
      "Option D for 199"
    ],
    "answer": "Option A for 199",
    "explanation": "Drug S works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 199)."
  },
  {
    "id": 200,
    "topic": "Surgery",
    "question": "What is the mechanism of action of Drug T?",
    "options": [
      "Option A for 200",
      "Option B for 200",
      "Option C for 200",
      "Option D for 200"
    ],
    "answer": "Option B for 200",
    "explanation": "Drug T works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 200)."
  },
  {
    "id": 201,
    "topic": "Anatomy",
    "question": "What is the mechanism of action of Drug U?",
    "options": [
      "Option A for 201",
      "Option B for 201",
      "Option C for 201",
      "Option D for 201"
    ],
    "answer": "Option C for 201",
    "explanation": "Drug U works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 201)."
  },
  {
    "id": 202,
    "topic": "Pharmacology",
    "question": "What is the mechanism of action of Drug V?",
    "options": [
      "Option A for 202",
      "Option B for 202",
      "Option C for 202",
      "Option D for 202"
    ],
    "answer": "Option D for 202",
    "explanation": "Drug V works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 202)."
  },
  {
    "id": 203,
    "topic": "Biochemistry",
    "question": "What is the mechanism of action of Drug W?",
    "options": [
      "Option A for 203",
      "Option B for 203",
      "Option C for 203",
      "Option D for 203"
    ],
    "answer": "Option A for 203",
    "explanation": "Drug W works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 203)."
  },
  {
    "id": 204,
    "topic": "Pharmacology",
    "question": "What is the mechanism of action of Drug X?",
    "options": [
      "Option A for 204",
      "Option B for 204",
      "Option C for 204",
      "Option D for 204"
    ],
    "answer": "Option B for 204",
    "explanation": "Drug X works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 204)."
  },
  {
    "id": 205,
    "topic": "OBG",
    "question": "What is the mechanism of action of Drug Y?",
    "options": [
      "Option A for 205",
      "Option B for 205",
      "Option C for 205",
      "Option D for 205"
    ],
    "answer": "Option C for 205",
    "explanation": "Drug Y works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 205)."
  },
  {
    "id": 206,
    "topic": "Physiology",
    "question": "What is the mechanism of action of Drug Z?",
    "options": [
      "Option A for 206",
      "Option B for 206",
      "Option C for 206",
      "Option D for 206"
    ],
    "answer": "Option D for 206",
    "explanation": "Drug Z works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 206)."
  },
  {
    "id": 207,
    "topic": "Microbiology",
    "question": "What is the mechanism of action of Drug A?",
    "options": [
      "Option A for 207",
      "Option B for 207",
      "Option C for 207",
      "Option D for 207"
    ],
    "answer": "Option A for 207",
    "explanation": "Drug A works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 207)."
  },
  {
    "id": 208,
    "topic": "Pharmacology",
    "question": "What is the mechanism of action of Drug B?",
    "options": [
      "Option A for 208",
      "Option B for 208",
      "Option C for 208",
      "Option D for 208"
    ],
    "answer": "Option B for 208",
    "explanation": "Drug B works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 208)."
  },
  {
    "id": 209,
    "topic": "Pharmacology",
    "question": "What is the mechanism of action of Drug C?",
    "options": [
      "Option A for 209",
      "Option B for 209",
      "Option C for 209",
      "Option D for 209"
    ],
    "answer": "Option C for 209",
    "explanation": "Drug C works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 209)."
  },
  {
    "id": 210,
    "topic": "Anatomy",
    "question": "What is the mechanism of action of Drug D?",
    "options": [
      "Option A for 210",
      "Option B for 210",
      "Option C for 210",
      "Option D for 210"
    ],
    "answer": "Option D for 210",
    "explanation": "Drug D works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 210)."
  },
  {
    "id": 211,
    "topic": "Anatomy",
    "question": "What is the mechanism of action of Drug E?",
    "options": [
      "Option A for 211",
      "Option B for 211",
      "Option C for 211",
      "Option D for 211"
    ],
    "answer": "Option A for 211",
    "explanation": "Drug E works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 211)."
  },
  {
    "id": 212,
    "topic": "Physiology",
    "question": "What is the mechanism of action of Drug F?",
    "options": [
      "Option A for 212",
      "Option B for 212",
      "Option C for 212",
      "Option D for 212"
    ],
    "answer": "Option B for 212",
    "explanation": "Drug F works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 212)."
  },
  {
    "id": 213,
    "topic": "Physiology",
    "question": "What is the mechanism of action of Drug G?",
    "options": [
      "Option A for 213",
      "Option B for 213",
      "Option C for 213",
      "Option D for 213"
    ],
    "answer": "Option C for 213",
    "explanation": "Drug G works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 213)."
  },
  {
    "id": 214,
    "topic": "Microbiology",
    "question": "What is the mechanism of action of Drug H?",
    "options": [
      "Option A for 214",
      "Option B for 214",
      "Option C for 214",
      "Option D for 214"
    ],
    "answer": "Option D for 214",
    "explanation": "Drug H works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 214)."
  },
  {
    "id": 215,
    "topic": "OBG",
    "question": "What is the mechanism of action of Drug I?",
    "options": [
      "Option A for 215",
      "Option B for 215",
      "Option C for 215",
      "Option D for 215"
    ],
    "answer": "Option A for 215",
    "explanation": "Drug I works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 215)."
  },
  {
    "id": 216,
    "topic": "Biochemistry",
    "question": "What is the mechanism of action of Drug J?",
    "options": [
      "Option A for 216",
      "Option B for 216",
      "Option C for 216",
      "Option D for 216"
    ],
    "answer": "Option B for 216",
    "explanation": "Drug J works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 216)."
  },
  {
    "id": 217,
    "topic": "Pathology",
    "question": "What is the mechanism of action of Drug K?",
    "options": [
      "Option A for 217",
      "Option B for 217",
      "Option C for 217",
      "Option D for 217"
    ],
    "answer": "Option C for 217",
    "explanation": "Drug K works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 217)."
  },
  {
    "id": 218,
    "topic": "Pharmacology",
    "question": "What is the mechanism of action of Drug L?",
    "options": [
      "Option A for 218",
      "Option B for 218",
      "Option C for 218",
      "Option D for 218"
    ],
    "answer": "Option D for 218",
    "explanation": "Drug L works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 218)."
  },
  {
    "id": 219,
    "topic": "OBG",
    "question": "What is the mechanism of action of Drug M?",
    "options": [
      "Option A for 219",
      "Option B for 219",
      "Option C for 219",
      "Option D for 219"
    ],
    "answer": "Option A for 219",
    "explanation": "Drug M works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 219)."
  },
  {
    "id": 220,
    "topic": "Pathology",
    "question": "What is the mechanism of action of Drug N?",
    "options": [
      "Option A for 220",
      "Option B for 220",
      "Option C for 220",
      "Option D for 220"
    ],
    "answer": "Option B for 220",
    "explanation": "Drug N works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 220)."
  },
  {
    "id": 221,
    "topic": "Pharmacology",
    "question": "What is the mechanism of action of Drug O?",
    "options": [
      "Option A for 221",
      "Option B for 221",
      "Option C for 221",
      "Option D for 221"
    ],
    "answer": "Option C for 221",
    "explanation": "Drug O works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 221)."
  },
  {
    "id": 222,
    "topic": "Anatomy",
    "question": "What is the mechanism of action of Drug P?",
    "options": [
      "Option A for 222",
      "Option B for 222",
      "Option C for 222",
      "Option D for 222"
    ],
    "answer": "Option D for 222",
    "explanation": "Drug P works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 222)."
  },
  {
    "id": 223,
    "topic": "Anatomy",
    "question": "What is the mechanism of action of Drug Q?",
    "options": [
      "Option A for 223",
      "Option B for 223",
      "Option C for 223",
      "Option D for 223"
    ],
    "answer": "Option A for 223",
    "explanation": "Drug Q works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 223)."
  },
  {
    "id": 224,
    "topic": "Biochemistry",
    "question": "What is the mechanism of action of Drug R?",
    "options": [
      "Option A for 224",
      "Option B for 224",
      "Option C for 224",
      "Option D for 224"
    ],
    "answer": "Option B for 224",
    "explanation": "Drug R works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 224)."
  },
  {
    "id": 225,
    "topic": "Community Medicine",
    "question": "What is the mechanism of action of Drug S?",
    "options": [
      "Option A for 225",
      "Option B for 225",
      "Option C for 225",
      "Option D for 225"
    ],
    "answer": "Option C for 225",
    "explanation": "Drug S works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 225)."
  },
  {
    "id": 226,
    "topic": "Community Medicine",
    "question": "What is the mechanism of action of Drug T?",
    "options": [
      "Option A for 226",
      "Option B for 226",
      "Option C for 226",
      "Option D for 226"
    ],
    "answer": "Option D for 226",
    "explanation": "Drug T works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 226)."
  },
  {
    "id": 227,
    "topic": "Pharmacology",
    "question": "What is the mechanism of action of Drug U?",
    "options": [
      "Option A for 227",
      "Option B for 227",
      "Option C for 227",
      "Option D for 227"
    ],
    "answer": "Option A for 227",
    "explanation": "Drug U works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 227)."
  },
  {
    "id": 228,
    "topic": "Anatomy",
    "question": "What is the mechanism of action of Drug V?",
    "options": [
      "Option A for 228",
      "Option B for 228",
      "Option C for 228",
      "Option D for 228"
    ],
    "answer": "Option B for 228",
    "explanation": "Drug V works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 228)."
  },
  {
    "id": 229,
    "topic": "Biochemistry",
    "question": "What is the mechanism of action of Drug W?",
    "options": [
      "Option A for 229",
      "Option B for 229",
      "Option C for 229",
      "Option D for 229"
    ],
    "answer": "Option C for 229",
    "explanation": "Drug W works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 229)."
  },
  {
    "id": 230,
    "topic": "OBG",
    "question": "What is the mechanism of action of Drug X?",
    "options": [
      "Option A for 230",
      "Option B for 230",
      "Option C for 230",
      "Option D for 230"
    ],
    "answer": "Option D for 230",
    "explanation": "Drug X works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 230)."
  },
  {
    "id": 231,
    "topic": "Microbiology",
    "question": "What is the mechanism of action of Drug Y?",
    "options": [
      "Option A for 231",
      "Option B for 231",
      "Option C for 231",
      "Option D for 231"
    ],
    "answer": "Option A for 231",
    "explanation": "Drug Y works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 231)."
  },
  {
    "id": 232,
    "topic": "Physiology",
    "question": "What is the mechanism of action of Drug Z?",
    "options": [
      "Option A for 232",
      "Option B for 232",
      "Option C for 232",
      "Option D for 232"
    ],
    "answer": "Option B for 232",
    "explanation": "Drug Z works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 232)."
  },
  {
    "id": 233,
    "topic": "Medicine",
    "question": "What is the mechanism of action of Drug A?",
    "options": [
      "Option A for 233",
      "Option B for 233",
      "Option C for 233",
      "Option D for 233"
    ],
    "answer": "Option C for 233",
    "explanation": "Drug A works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 233)."
  },
  {
    "id": 234,
    "topic": "Physiology",
    "question": "What is the mechanism of action of Drug B?",
    "options": [
      "Option A for 234",
      "Option B for 234",
      "Option C for 234",
      "Option D for 234"
    ],
    "answer": "Option D for 234",
    "explanation": "Drug B works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 234)."
  },
  {
    "id": 235,
    "topic": "Microbiology",
    "question": "What is the mechanism of action of Drug C?",
    "options": [
      "Option A for 235",
      "Option B for 235",
      "Option C for 235",
      "Option D for 235"
    ],
    "answer": "Option A for 235",
    "explanation": "Drug C works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 235)."
  },
  {
    "id": 236,
    "topic": "Physiology",
    "question": "What is the mechanism of action of Drug D?",
    "options": [
      "Option A for 236",
      "Option B for 236",
      "Option C for 236",
      "Option D for 236"
    ],
    "answer": "Option B for 236",
    "explanation": "Drug D works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 236)."
  },
  {
    "id": 237,
    "topic": "Anatomy",
    "question": "What is the mechanism of action of Drug E?",
    "options": [
      "Option A for 237",
      "Option B for 237",
      "Option C for 237",
      "Option D for 237"
    ],
    "answer": "Option C for 237",
    "explanation": "Drug E works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 237)."
  },
  {
    "id": 238,
    "topic": "Medicine",
    "question": "What is the mechanism of action of Drug F?",
    "options": [
      "Option A for 238",
      "Option B for 238",
      "Option C for 238",
      "Option D for 238"
    ],
    "answer": "Option D for 238",
    "explanation": "Drug F works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 238)."
  },
  {
    "id": 239,
    "topic": "Pathology",
    "question": "What is the mechanism of action of Drug G?",
    "options": [
      "Option A for 239",
      "Option B for 239",
      "Option C for 239",
      "Option D for 239"
    ],
    "answer": "Option A for 239",
    "explanation": "Drug G works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 239)."
  },
  {
    "id": 240,
    "topic": "Surgery",
    "question": "What is the mechanism of action of Drug H?",
    "options": [
      "Option A for 240",
      "Option B for 240",
      "Option C for 240",
      "Option D for 240"
    ],
    "answer": "Option B for 240",
    "explanation": "Drug H works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 240)."
  },
  {
    "id": 241,
    "topic": "Medicine",
    "question": "What is the mechanism of action of Drug I?",
    "options": [
      "Option A for 241",
      "Option B for 241",
      "Option C for 241",
      "Option D for 241"
    ],
    "answer": "Option C for 241",
    "explanation": "Drug I works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 241)."
  },
  {
    "id": 242,
    "topic": "Microbiology",
    "question": "What is the mechanism of action of Drug J?",
    "options": [
      "Option A for 242",
      "Option B for 242",
      "Option C for 242",
      "Option D for 242"
    ],
    "answer": "Option D for 242",
    "explanation": "Drug J works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 242)."
  },
  {
    "id": 243,
    "topic": "Pharmacology",
    "question": "What is the mechanism of action of Drug K?",
    "options": [
      "Option A for 243",
      "Option B for 243",
      "Option C for 243",
      "Option D for 243"
    ],
    "answer": "Option A for 243",
    "explanation": "Drug K works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 243)."
  },
  {
    "id": 244,
    "topic": "Pharmacology",
    "question": "What is the mechanism of action of Drug L?",
    "options": [
      "Option A for 244",
      "Option B for 244",
      "Option C for 244",
      "Option D for 244"
    ],
    "answer": "Option B for 244",
    "explanation": "Drug L works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 244)."
  },
  {
    "id": 245,
    "topic": "Surgery",
    "question": "What is the mechanism of action of Drug M?",
    "options": [
      "Option A for 245",
      "Option B for 245",
      "Option C for 245",
      "Option D for 245"
    ],
    "answer": "Option C for 245",
    "explanation": "Drug M works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 245)."
  },
  {
    "id": 246,
    "topic": "Pharmacology",
    "question": "What is the mechanism of action of Drug N?",
    "options": [
      "Option A for 246",
      "Option B for 246",
      "Option C for 246",
      "Option D for 246"
    ],
    "answer": "Option D for 246",
    "explanation": "Drug N works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 246)."
  },
  {
    "id": 247,
    "topic": "Pathology",
    "question": "What is the mechanism of action of Drug O?",
    "options": [
      "Option A for 247",
      "Option B for 247",
      "Option C for 247",
      "Option D for 247"
    ],
    "answer": "Option A for 247",
    "explanation": "Drug O works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 247)."
  },
  {
    "id": 248,
    "topic": "Pharmacology",
    "question": "What is the mechanism of action of Drug P?",
    "options": [
      "Option A for 248",
      "Option B for 248",
      "Option C for 248",
      "Option D for 248"
    ],
    "answer": "Option B for 248",
    "explanation": "Drug P works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 248)."
  },
  {
    "id": 249,
    "topic": "Community Medicine",
    "question": "What is the mechanism of action of Drug Q?",
    "options": [
      "Option A for 249",
      "Option B for 249",
      "Option C for 249",
      "Option D for 249"
    ],
    "answer": "Option C for 249",
    "explanation": "Drug Q works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 249)."
  },
  {
    "id": 250,
    "topic": "Community Medicine",
    "question": "What is the mechanism of action of Drug R?",
    "options": [
      "Option A for 250",
      "Option B for 250",
      "Option C for 250",
      "Option D for 250"
    ],
    "answer": "Option D for 250",
    "explanation": "Drug R works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 250)."
  },
  {
    "id": 251,
    "topic": "Microbiology",
    "question": "What is the mechanism of action of Drug S?",
    "options": [
      "Option A for 251",
      "Option B for 251",
      "Option C for 251",
      "Option D for 251"
    ],
    "answer": "Option A for 251",
    "explanation": "Drug S works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 251)."
  },
  {
    "id": 252,
    "topic": "Surgery",
    "question": "What is the mechanism of action of Drug T?",
    "options": [
      "Option A for 252",
      "Option B for 252",
      "Option C for 252",
      "Option D for 252"
    ],
    "answer": "Option B for 252",
    "explanation": "Drug T works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 252)."
  },
  {
    "id": 253,
    "topic": "Community Medicine",
    "question": "What is the mechanism of action of Drug U?",
    "options": [
      "Option A for 253",
      "Option B for 253",
      "Option C for 253",
      "Option D for 253"
    ],
    "answer": "Option C for 253",
    "explanation": "Drug U works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 253)."
  },
  {
    "id": 254,
    "topic": "Physiology",
    "question": "What is the mechanism of action of Drug V?",
    "options": [
      "Option A for 254",
      "Option B for 254",
      "Option C for 254",
      "Option D for 254"
    ],
    "answer": "Option D for 254",
    "explanation": "Drug V works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 254)."
  },
  {
    "id": 255,
    "topic": "Medicine",
    "question": "What is the mechanism of action of Drug W?",
    "options": [
      "Option A for 255",
      "Option B for 255",
      "Option C for 255",
      "Option D for 255"
    ],
    "answer": "Option A for 255",
    "explanation": "Drug W works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 255)."
  },
  {
    "id": 256,
    "topic": "Pharmacology",
    "question": "What is the mechanism of action of Drug X?",
    "options": [
      "Option A for 256",
      "Option B for 256",
      "Option C for 256",
      "Option D for 256"
    ],
    "answer": "Option B for 256",
    "explanation": "Drug X works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 256)."
  },
  {
    "id": 257,
    "topic": "Medicine",
    "question": "What is the mechanism of action of Drug Y?",
    "options": [
      "Option A for 257",
      "Option B for 257",
      "Option C for 257",
      "Option D for 257"
    ],
    "answer": "Option C for 257",
    "explanation": "Drug Y works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 257)."
  },
  {
    "id": 258,
    "topic": "Pathology",
    "question": "What is the mechanism of action of Drug Z?",
    "options": [
      "Option A for 258",
      "Option B for 258",
      "Option C for 258",
      "Option D for 258"
    ],
    "answer": "Option D for 258",
    "explanation": "Drug Z works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 258)."
  },
  {
    "id": 259,
    "topic": "Biochemistry",
    "question": "What is the mechanism of action of Drug A?",
    "options": [
      "Option A for 259",
      "Option B for 259",
      "Option C for 259",
      "Option D for 259"
    ],
    "answer": "Option A for 259",
    "explanation": "Drug A works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 259)."
  },
  {
    "id": 260,
    "topic": "OBG",
    "question": "What is the mechanism of action of Drug B?",
    "options": [
      "Option A for 260",
      "Option B for 260",
      "Option C for 260",
      "Option D for 260"
    ],
    "answer": "Option B for 260",
    "explanation": "Drug B works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 260)."
  },
  {
    "id": 261,
    "topic": "Biochemistry",
    "question": "What is the mechanism of action of Drug C?",
    "options": [
      "Option A for 261",
      "Option B for 261",
      "Option C for 261",
      "Option D for 261"
    ],
    "answer": "Option C for 261",
    "explanation": "Drug C works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 261)."
  },
  {
    "id": 262,
    "topic": "Community Medicine",
    "question": "What is the mechanism of action of Drug D?",
    "options": [
      "Option A for 262",
      "Option B for 262",
      "Option C for 262",
      "Option D for 262"
    ],
    "answer": "Option D for 262",
    "explanation": "Drug D works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 262)."
  },
  {
    "id": 263,
    "topic": "Surgery",
    "question": "What is the mechanism of action of Drug E?",
    "options": [
      "Option A for 263",
      "Option B for 263",
      "Option C for 263",
      "Option D for 263"
    ],
    "answer": "Option A for 263",
    "explanation": "Drug E works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 263)."
  },
  {
    "id": 264,
    "topic": "Anatomy",
    "question": "What is the mechanism of action of Drug F?",
    "options": [
      "Option A for 264",
      "Option B for 264",
      "Option C for 264",
      "Option D for 264"
    ],
    "answer": "Option B for 264",
    "explanation": "Drug F works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 264)."
  },
  {
    "id": 265,
    "topic": "Medicine",
    "question": "What is the mechanism of action of Drug G?",
    "options": [
      "Option A for 265",
      "Option B for 265",
      "Option C for 265",
      "Option D for 265"
    ],
    "answer": "Option C for 265",
    "explanation": "Drug G works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 265)."
  },
  {
    "id": 266,
    "topic": "Surgery",
    "question": "What is the mechanism of action of Drug H?",
    "options": [
      "Option A for 266",
      "Option B for 266",
      "Option C for 266",
      "Option D for 266"
    ],
    "answer": "Option D for 266",
    "explanation": "Drug H works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 266)."
  },
  {
    "id": 267,
    "topic": "Microbiology",
    "question": "What is the mechanism of action of Drug I?",
    "options": [
      "Option A for 267",
      "Option B for 267",
      "Option C for 267",
      "Option D for 267"
    ],
    "answer": "Option A for 267",
    "explanation": "Drug I works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 267)."
  },
  {
    "id": 268,
    "topic": "Pathology",
    "question": "What is the mechanism of action of Drug J?",
    "options": [
      "Option A for 268",
      "Option B for 268",
      "Option C for 268",
      "Option D for 268"
    ],
    "answer": "Option B for 268",
    "explanation": "Drug J works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 268)."
  },
  {
    "id": 269,
    "topic": "Biochemistry",
    "question": "What is the mechanism of action of Drug K?",
    "options": [
      "Option A for 269",
      "Option B for 269",
      "Option C for 269",
      "Option D for 269"
    ],
    "answer": "Option C for 269",
    "explanation": "Drug K works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 269)."
  },
  {
    "id": 270,
    "topic": "Anatomy",
    "question": "What is the mechanism of action of Drug L?",
    "options": [
      "Option A for 270",
      "Option B for 270",
      "Option C for 270",
      "Option D for 270"
    ],
    "answer": "Option D for 270",
    "explanation": "Drug L works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 270)."
  },
  {
    "id": 271,
    "topic": "Pathology",
    "question": "What is the mechanism of action of Drug M?",
    "options": [
      "Option A for 271",
      "Option B for 271",
      "Option C for 271",
      "Option D for 271"
    ],
    "answer": "Option A for 271",
    "explanation": "Drug M works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 271)."
  },
  {
    "id": 272,
    "topic": "Pathology",
    "question": "What is the mechanism of action of Drug N?",
    "options": [
      "Option A for 272",
      "Option B for 272",
      "Option C for 272",
      "Option D for 272"
    ],
    "answer": "Option B for 272",
    "explanation": "Drug N works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 272)."
  },
  {
    "id": 273,
    "topic": "Pharmacology",
    "question": "What is the mechanism of action of Drug O?",
    "options": [
      "Option A for 273",
      "Option B for 273",
      "Option C for 273",
      "Option D for 273"
    ],
    "answer": "Option C for 273",
    "explanation": "Drug O works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 273)."
  },
  {
    "id": 274,
    "topic": "Anatomy",
    "question": "What is the mechanism of action of Drug P?",
    "options": [
      "Option A for 274",
      "Option B for 274",
      "Option C for 274",
      "Option D for 274"
    ],
    "answer": "Option D for 274",
    "explanation": "Drug P works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 274)."
  },
  {
    "id": 275,
    "topic": "Microbiology",
    "question": "What is the mechanism of action of Drug Q?",
    "options": [
      "Option A for 275",
      "Option B for 275",
      "Option C for 275",
      "Option D for 275"
    ],
    "answer": "Option A for 275",
    "explanation": "Drug Q works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 275)."
  },
  {
    "id": 276,
    "topic": "Biochemistry",
    "question": "What is the mechanism of action of Drug R?",
    "options": [
      "Option A for 276",
      "Option B for 276",
      "Option C for 276",
      "Option D for 276"
    ],
    "answer": "Option B for 276",
    "explanation": "Drug R works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 276)."
  },
  {
    "id": 277,
    "topic": "Community Medicine",
    "question": "What is the mechanism of action of Drug S?",
    "options": [
      "Option A for 277",
      "Option B for 277",
      "Option C for 277",
      "Option D for 277"
    ],
    "answer": "Option C for 277",
    "explanation": "Drug S works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 277)."
  },
  {
    "id": 278,
    "topic": "Microbiology",
    "question": "What is the mechanism of action of Drug T?",
    "options": [
      "Option A for 278",
      "Option B for 278",
      "Option C for 278",
      "Option D for 278"
    ],
    "answer": "Option D for 278",
    "explanation": "Drug T works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 278)."
  },
  {
    "id": 279,
    "topic": "Pathology",
    "question": "What is the mechanism of action of Drug U?",
    "options": [
      "Option A for 279",
      "Option B for 279",
      "Option C for 279",
      "Option D for 279"
    ],
    "answer": "Option A for 279",
    "explanation": "Drug U works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 279)."
  },
  {
    "id": 280,
    "topic": "Medicine",
    "question": "What is the mechanism of action of Drug V?",
    "options": [
      "Option A for 280",
      "Option B for 280",
      "Option C for 280",
      "Option D for 280"
    ],
    "answer": "Option B for 280",
    "explanation": "Drug V works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 280)."
  },
  {
    "id": 281,
    "topic": "Surgery",
    "question": "What is the mechanism of action of Drug W?",
    "options": [
      "Option A for 281",
      "Option B for 281",
      "Option C for 281",
      "Option D for 281"
    ],
    "answer": "Option C for 281",
    "explanation": "Drug W works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 281)."
  },
  {
    "id": 282,
    "topic": "OBG",
    "question": "What is the mechanism of action of Drug X?",
    "options": [
      "Option A for 282",
      "Option B for 282",
      "Option C for 282",
      "Option D for 282"
    ],
    "answer": "Option D for 282",
    "explanation": "Drug X works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 282)."
  },
  {
    "id": 283,
    "topic": "Anatomy",
    "question": "What is the mechanism of action of Drug Y?",
    "options": [
      "Option A for 283",
      "Option B for 283",
      "Option C for 283",
      "Option D for 283"
    ],
    "answer": "Option A for 283",
    "explanation": "Drug Y works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 283)."
  },
  {
    "id": 284,
    "topic": "Pharmacology",
    "question": "What is the mechanism of action of Drug Z?",
    "options": [
      "Option A for 284",
      "Option B for 284",
      "Option C for 284",
      "Option D for 284"
    ],
    "answer": "Option B for 284",
    "explanation": "Drug Z works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 284)."
  },
  {
    "id": 285,
    "topic": "Surgery",
    "question": "What is the mechanism of action of Drug A?",
    "options": [
      "Option A for 285",
      "Option B for 285",
      "Option C for 285",
      "Option D for 285"
    ],
    "answer": "Option C for 285",
    "explanation": "Drug A works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 285)."
  },
  {
    "id": 286,
    "topic": "Biochemistry",
    "question": "What is the mechanism of action of Drug B?",
    "options": [
      "Option A for 286",
      "Option B for 286",
      "Option C for 286",
      "Option D for 286"
    ],
    "answer": "Option D for 286",
    "explanation": "Drug B works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 286)."
  },
  {
    "id": 287,
    "topic": "Community Medicine",
    "question": "What is the mechanism of action of Drug C?",
    "options": [
      "Option A for 287",
      "Option B for 287",
      "Option C for 287",
      "Option D for 287"
    ],
    "answer": "Option A for 287",
    "explanation": "Drug C works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 287)."
  },
  {
    "id": 288,
    "topic": "Pathology",
    "question": "What is the mechanism of action of Drug D?",
    "options": [
      "Option A for 288",
      "Option B for 288",
      "Option C for 288",
      "Option D for 288"
    ],
    "answer": "Option B for 288",
    "explanation": "Drug D works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 288)."
  },
  {
    "id": 289,
    "topic": "Surgery",
    "question": "What is the mechanism of action of Drug E?",
    "options": [
      "Option A for 289",
      "Option B for 289",
      "Option C for 289",
      "Option D for 289"
    ],
    "answer": "Option C for 289",
    "explanation": "Drug E works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 289)."
  },
  {
    "id": 290,
    "topic": "Biochemistry",
    "question": "What is the mechanism of action of Drug F?",
    "options": [
      "Option A for 290",
      "Option B for 290",
      "Option C for 290",
      "Option D for 290"
    ],
    "answer": "Option D for 290",
    "explanation": "Drug F works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 290)."
  },
  {
    "id": 291,
    "topic": "Anatomy",
    "question": "What is the mechanism of action of Drug G?",
    "options": [
      "Option A for 291",
      "Option B for 291",
      "Option C for 291",
      "Option D for 291"
    ],
    "answer": "Option A for 291",
    "explanation": "Drug G works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 291)."
  },
  {
    "id": 292,
    "topic": "Anatomy",
    "question": "What is the mechanism of action of Drug H?",
    "options": [
      "Option A for 292",
      "Option B for 292",
      "Option C for 292",
      "Option D for 292"
    ],
    "answer": "Option B for 292",
    "explanation": "Drug H works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 292)."
  },
  {
    "id": 293,
    "topic": "Medicine",
    "question": "What is the mechanism of action of Drug I?",
    "options": [
      "Option A for 293",
      "Option B for 293",
      "Option C for 293",
      "Option D for 293"
    ],
    "answer": "Option C for 293",
    "explanation": "Drug I works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 293)."
  },
  {
    "id": 294,
    "topic": "Pathology",
    "question": "What is the mechanism of action of Drug J?",
    "options": [
      "Option A for 294",
      "Option B for 294",
      "Option C for 294",
      "Option D for 294"
    ],
    "answer": "Option D for 294",
    "explanation": "Drug J works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 294)."
  },
  {
    "id": 295,
    "topic": "Biochemistry",
    "question": "What is the mechanism of action of Drug K?",
    "options": [
      "Option A for 295",
      "Option B for 295",
      "Option C for 295",
      "Option D for 295"
    ],
    "answer": "Option A for 295",
    "explanation": "Drug K works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 295)."
  },
  {
    "id": 296,
    "topic": "OBG",
    "question": "What is the mechanism of action of Drug L?",
    "options": [
      "Option A for 296",
      "Option B for 296",
      "Option C for 296",
      "Option D for 296"
    ],
    "answer": "Option B for 296",
    "explanation": "Drug L works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 296)."
  },
  {
    "id": 297,
    "topic": "Medicine",
    "question": "What is the mechanism of action of Drug M?",
    "options": [
      "Option A for 297",
      "Option B for 297",
      "Option C for 297",
      "Option D for 297"
    ],
    "answer": "Option C for 297",
    "explanation": "Drug M works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 297)."
  },
  {
    "id": 298,
    "topic": "Pathology",
    "question": "What is the mechanism of action of Drug N?",
    "options": [
      "Option A for 298",
      "Option B for 298",
      "Option C for 298",
      "Option D for 298"
    ],
    "answer": "Option D for 298",
    "explanation": "Drug N works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 298)."
  },
  {
    "id": 299,
    "topic": "Anatomy",
    "question": "What is the mechanism of action of Drug O?",
    "options": [
      "Option A for 299",
      "Option B for 299",
      "Option C for 299",
      "Option D for 299"
    ],
    "answer": "Option A for 299",
    "explanation": "Drug O works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 299)."
  },
  {
    "id": 300,
    "topic": "Medicine",
    "question": "What is the mechanism of action of Drug P?",
    "options": [
      "Option A for 300",
      "Option B for 300",
      "Option C for 300",
      "Option D for 300"
    ],
    "answer": "Option B for 300",
    "explanation": "Drug P works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 300)."
  },
  {
    "id": 301,
    "topic": "Microbiology",
    "question": "What is the mechanism of action of Drug Q?",
    "options": [
      "Option A for 301",
      "Option B for 301",
      "Option C for 301",
      "Option D for 301"
    ],
    "answer": "Option C for 301",
    "explanation": "Drug Q works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 301)."
  },
  {
    "id": 302,
    "topic": "Medicine",
    "question": "What is the mechanism of action of Drug R?",
    "options": [
      "Option A for 302",
      "Option B for 302",
      "Option C for 302",
      "Option D for 302"
    ],
    "answer": "Option D for 302",
    "explanation": "Drug R works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 302)."
  },
  {
    "id": 303,
    "topic": "Physiology",
    "question": "What is the mechanism of action of Drug S?",
    "options": [
      "Option A for 303",
      "Option B for 303",
      "Option C for 303",
      "Option D for 303"
    ],
    "answer": "Option A for 303",
    "explanation": "Drug S works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 303)."
  },
  {
    "id": 304,
    "topic": "Medicine",
    "question": "What is the mechanism of action of Drug T?",
    "options": [
      "Option A for 304",
      "Option B for 304",
      "Option C for 304",
      "Option D for 304"
    ],
    "answer": "Option B for 304",
    "explanation": "Drug T works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 304)."
  },
  {
    "id": 305,
    "topic": "Medicine",
    "question": "What is the mechanism of action of Drug U?",
    "options": [
      "Option A for 305",
      "Option B for 305",
      "Option C for 305",
      "Option D for 305"
    ],
    "answer": "Option C for 305",
    "explanation": "Drug U works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 305)."
  },
  {
    "id": 306,
    "topic": "Pathology",
    "question": "What is the mechanism of action of Drug V?",
    "options": [
      "Option A for 306",
      "Option B for 306",
      "Option C for 306",
      "Option D for 306"
    ],
    "answer": "Option D for 306",
    "explanation": "Drug V works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 306)."
  },
  {
    "id": 307,
    "topic": "Community Medicine",
    "question": "What is the mechanism of action of Drug W?",
    "options": [
      "Option A for 307",
      "Option B for 307",
      "Option C for 307",
      "Option D for 307"
    ],
    "answer": "Option A for 307",
    "explanation": "Drug W works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 307)."
  },
  {
    "id": 308,
    "topic": "OBG",
    "question": "What is the mechanism of action of Drug X?",
    "options": [
      "Option A for 308",
      "Option B for 308",
      "Option C for 308",
      "Option D for 308"
    ],
    "answer": "Option B for 308",
    "explanation": "Drug X works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 308)."
  },
  {
    "id": 309,
    "topic": "Biochemistry",
    "question": "What is the mechanism of action of Drug Y?",
    "options": [
      "Option A for 309",
      "Option B for 309",
      "Option C for 309",
      "Option D for 309"
    ],
    "answer": "Option C for 309",
    "explanation": "Drug Y works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 309)."
  },
  {
    "id": 310,
    "topic": "Biochemistry",
    "question": "What is the mechanism of action of Drug Z?",
    "options": [
      "Option A for 310",
      "Option B for 310",
      "Option C for 310",
      "Option D for 310"
    ],
    "answer": "Option D for 310",
    "explanation": "Drug Z works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 310)."
  },
  {
    "id": 311,
    "topic": "OBG",
    "question": "What is the mechanism of action of Drug A?",
    "options": [
      "Option A for 311",
      "Option B for 311",
      "Option C for 311",
      "Option D for 311"
    ],
    "answer": "Option A for 311",
    "explanation": "Drug A works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 311)."
  },
  {
    "id": 312,
    "topic": "Biochemistry",
    "question": "What is the mechanism of action of Drug B?",
    "options": [
      "Option A for 312",
      "Option B for 312",
      "Option C for 312",
      "Option D for 312"
    ],
    "answer": "Option B for 312",
    "explanation": "Drug B works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 312)."
  },
  {
    "id": 313,
    "topic": "Surgery",
    "question": "What is the mechanism of action of Drug C?",
    "options": [
      "Option A for 313",
      "Option B for 313",
      "Option C for 313",
      "Option D for 313"
    ],
    "answer": "Option C for 313",
    "explanation": "Drug C works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 313)."
  },
  {
    "id": 314,
    "topic": "Medicine",
    "question": "What is the mechanism of action of Drug D?",
    "options": [
      "Option A for 314",
      "Option B for 314",
      "Option C for 314",
      "Option D for 314"
    ],
    "answer": "Option D for 314",
    "explanation": "Drug D works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 314)."
  },
  {
    "id": 315,
    "topic": "Anatomy",
    "question": "What is the mechanism of action of Drug E?",
    "options": [
      "Option A for 315",
      "Option B for 315",
      "Option C for 315",
      "Option D for 315"
    ],
    "answer": "Option A for 315",
    "explanation": "Drug E works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 315)."
  },
  {
    "id": 316,
    "topic": "Pathology",
    "question": "What is the mechanism of action of Drug F?",
    "options": [
      "Option A for 316",
      "Option B for 316",
      "Option C for 316",
      "Option D for 316"
    ],
    "answer": "Option B for 316",
    "explanation": "Drug F works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 316)."
  },
  {
    "id": 317,
    "topic": "Surgery",
    "question": "What is the mechanism of action of Drug G?",
    "options": [
      "Option A for 317",
      "Option B for 317",
      "Option C for 317",
      "Option D for 317"
    ],
    "answer": "Option C for 317",
    "explanation": "Drug G works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 317)."
  },
  {
    "id": 318,
    "topic": "Microbiology",
    "question": "What is the mechanism of action of Drug H?",
    "options": [
      "Option A for 318",
      "Option B for 318",
      "Option C for 318",
      "Option D for 318"
    ],
    "answer": "Option D for 318",
    "explanation": "Drug H works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 318)."
  },
  {
    "id": 319,
    "topic": "Physiology",
    "question": "What is the mechanism of action of Drug I?",
    "options": [
      "Option A for 319",
      "Option B for 319",
      "Option C for 319",
      "Option D for 319"
    ],
    "answer": "Option A for 319",
    "explanation": "Drug I works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 319)."
  },
  {
    "id": 320,
    "topic": "Anatomy",
    "question": "What is the mechanism of action of Drug J?",
    "options": [
      "Option A for 320",
      "Option B for 320",
      "Option C for 320",
      "Option D for 320"
    ],
    "answer": "Option B for 320",
    "explanation": "Drug J works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 320)."
  },
  {
    "id": 321,
    "topic": "OBG",
    "question": "What is the mechanism of action of Drug K?",
    "options": [
      "Option A for 321",
      "Option B for 321",
      "Option C for 321",
      "Option D for 321"
    ],
    "answer": "Option C for 321",
    "explanation": "Drug K works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 321)."
  },
  {
    "id": 322,
    "topic": "Pathology",
    "question": "What is the mechanism of action of Drug L?",
    "options": [
      "Option A for 322",
      "Option B for 322",
      "Option C for 322",
      "Option D for 322"
    ],
    "answer": "Option D for 322",
    "explanation": "Drug L works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 322)."
  },
  {
    "id": 323,
    "topic": "Biochemistry",
    "question": "What is the mechanism of action of Drug M?",
    "options": [
      "Option A for 323",
      "Option B for 323",
      "Option C for 323",
      "Option D for 323"
    ],
    "answer": "Option A for 323",
    "explanation": "Drug M works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 323)."
  },
  {
    "id": 324,
    "topic": "OBG",
    "question": "What is the mechanism of action of Drug N?",
    "options": [
      "Option A for 324",
      "Option B for 324",
      "Option C for 324",
      "Option D for 324"
    ],
    "answer": "Option B for 324",
    "explanation": "Drug N works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 324)."
  },
  {
    "id": 325,
    "topic": "Community Medicine",
    "question": "What is the mechanism of action of Drug O?",
    "options": [
      "Option A for 325",
      "Option B for 325",
      "Option C for 325",
      "Option D for 325"
    ],
    "answer": "Option C for 325",
    "explanation": "Drug O works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 325)."
  },
  {
    "id": 326,
    "topic": "Community Medicine",
    "question": "What is the mechanism of action of Drug P?",
    "options": [
      "Option A for 326",
      "Option B for 326",
      "Option C for 326",
      "Option D for 326"
    ],
    "answer": "Option D for 326",
    "explanation": "Drug P works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 326)."
  },
  {
    "id": 327,
    "topic": "Community Medicine",
    "question": "What is the mechanism of action of Drug Q?",
    "options": [
      "Option A for 327",
      "Option B for 327",
      "Option C for 327",
      "Option D for 327"
    ],
    "answer": "Option A for 327",
    "explanation": "Drug Q works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 327)."
  },
  {
    "id": 328,
    "topic": "Community Medicine",
    "question": "What is the mechanism of action of Drug R?",
    "options": [
      "Option A for 328",
      "Option B for 328",
      "Option C for 328",
      "Option D for 328"
    ],
    "answer": "Option B for 328",
    "explanation": "Drug R works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 328)."
  },
  {
    "id": 329,
    "topic": "Biochemistry",
    "question": "What is the mechanism of action of Drug S?",
    "options": [
      "Option A for 329",
      "Option B for 329",
      "Option C for 329",
      "Option D for 329"
    ],
    "answer": "Option C for 329",
    "explanation": "Drug S works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 329)."
  },
  {
    "id": 330,
    "topic": "Community Medicine",
    "question": "What is the mechanism of action of Drug T?",
    "options": [
      "Option A for 330",
      "Option B for 330",
      "Option C for 330",
      "Option D for 330"
    ],
    "answer": "Option D for 330",
    "explanation": "Drug T works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 330)."
  },
  {
    "id": 331,
    "topic": "Medicine",
    "question": "What is the mechanism of action of Drug U?",
    "options": [
      "Option A for 331",
      "Option B for 331",
      "Option C for 331",
      "Option D for 331"
    ],
    "answer": "Option A for 331",
    "explanation": "Drug U works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 331)."
  },
  {
    "id": 332,
    "topic": "Pharmacology",
    "question": "What is the mechanism of action of Drug V?",
    "options": [
      "Option A for 332",
      "Option B for 332",
      "Option C for 332",
      "Option D for 332"
    ],
    "answer": "Option B for 332",
    "explanation": "Drug V works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 332)."
  },
  {
    "id": 333,
    "topic": "Pathology",
    "question": "What is the mechanism of action of Drug W?",
    "options": [
      "Option A for 333",
      "Option B for 333",
      "Option C for 333",
      "Option D for 333"
    ],
    "answer": "Option C for 333",
    "explanation": "Drug W works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 333)."
  },
  {
    "id": 334,
    "topic": "Biochemistry",
    "question": "What is the mechanism of action of Drug X?",
    "options": [
      "Option A for 334",
      "Option B for 334",
      "Option C for 334",
      "Option D for 334"
    ],
    "answer": "Option D for 334",
    "explanation": "Drug X works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 334)."
  },
  {
    "id": 335,
    "topic": "Medicine",
    "question": "What is the mechanism of action of Drug Y?",
    "options": [
      "Option A for 335",
      "Option B for 335",
      "Option C for 335",
      "Option D for 335"
    ],
    "answer": "Option A for 335",
    "explanation": "Drug Y works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 335)."
  },
  {
    "id": 336,
    "topic": "Biochemistry",
    "question": "What is the mechanism of action of Drug Z?",
    "options": [
      "Option A for 336",
      "Option B for 336",
      "Option C for 336",
      "Option D for 336"
    ],
    "answer": "Option B for 336",
    "explanation": "Drug Z works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 336)."
  },
  {
    "id": 337,
    "topic": "Anatomy",
    "question": "What is the mechanism of action of Drug A?",
    "options": [
      "Option A for 337",
      "Option B for 337",
      "Option C for 337",
      "Option D for 337"
    ],
    "answer": "Option C for 337",
    "explanation": "Drug A works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 337)."
  },
  {
    "id": 338,
    "topic": "Pharmacology",
    "question": "What is the mechanism of action of Drug B?",
    "options": [
      "Option A for 338",
      "Option B for 338",
      "Option C for 338",
      "Option D for 338"
    ],
    "answer": "Option D for 338",
    "explanation": "Drug B works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 338)."
  },
  {
    "id": 339,
    "topic": "Physiology",
    "question": "What is the mechanism of action of Drug C?",
    "options": [
      "Option A for 339",
      "Option B for 339",
      "Option C for 339",
      "Option D for 339"
    ],
    "answer": "Option A for 339",
    "explanation": "Drug C works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 339)."
  },
  {
    "id": 340,
    "topic": "OBG",
    "question": "What is the mechanism of action of Drug D?",
    "options": [
      "Option A for 340",
      "Option B for 340",
      "Option C for 340",
      "Option D for 340"
    ],
    "answer": "Option B for 340",
    "explanation": "Drug D works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 340)."
  },
  {
    "id": 341,
    "topic": "Medicine",
    "question": "What is the mechanism of action of Drug E?",
    "options": [
      "Option A for 341",
      "Option B for 341",
      "Option C for 341",
      "Option D for 341"
    ],
    "answer": "Option C for 341",
    "explanation": "Drug E works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 341)."
  },
  {
    "id": 342,
    "topic": "Anatomy",
    "question": "What is the mechanism of action of Drug F?",
    "options": [
      "Option A for 342",
      "Option B for 342",
      "Option C for 342",
      "Option D for 342"
    ],
    "answer": "Option D for 342",
    "explanation": "Drug F works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 342)."
  },
  {
    "id": 343,
    "topic": "Physiology",
    "question": "What is the mechanism of action of Drug G?",
    "options": [
      "Option A for 343",
      "Option B for 343",
      "Option C for 343",
      "Option D for 343"
    ],
    "answer": "Option A for 343",
    "explanation": "Drug G works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 343)."
  },
  {
    "id": 344,
    "topic": "Medicine",
    "question": "What is the mechanism of action of Drug H?",
    "options": [
      "Option A for 344",
      "Option B for 344",
      "Option C for 344",
      "Option D for 344"
    ],
    "answer": "Option B for 344",
    "explanation": "Drug H works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 344)."
  },
  {
    "id": 345,
    "topic": "Medicine",
    "question": "What is the mechanism of action of Drug I?",
    "options": [
      "Option A for 345",
      "Option B for 345",
      "Option C for 345",
      "Option D for 345"
    ],
    "answer": "Option C for 345",
    "explanation": "Drug I works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 345)."
  },
  {
    "id": 346,
    "topic": "Surgery",
    "question": "What is the mechanism of action of Drug J?",
    "options": [
      "Option A for 346",
      "Option B for 346",
      "Option C for 346",
      "Option D for 346"
    ],
    "answer": "Option D for 346",
    "explanation": "Drug J works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 346)."
  },
  {
    "id": 347,
    "topic": "Anatomy",
    "question": "What is the mechanism of action of Drug K?",
    "options": [
      "Option A for 347",
      "Option B for 347",
      "Option C for 347",
      "Option D for 347"
    ],
    "answer": "Option A for 347",
    "explanation": "Drug K works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 347)."
  },
  {
    "id": 348,
    "topic": "Surgery",
    "question": "What is the mechanism of action of Drug L?",
    "options": [
      "Option A for 348",
      "Option B for 348",
      "Option C for 348",
      "Option D for 348"
    ],
    "answer": "Option B for 348",
    "explanation": "Drug L works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 348)."
  },
  {
    "id": 349,
    "topic": "Physiology",
    "question": "What is the mechanism of action of Drug M?",
    "options": [
      "Option A for 349",
      "Option B for 349",
      "Option C for 349",
      "Option D for 349"
    ],
    "answer": "Option C for 349",
    "explanation": "Drug M works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 349)."
  },
  {
    "id": 350,
    "topic": "Community Medicine",
    "question": "What is the mechanism of action of Drug N?",
    "options": [
      "Option A for 350",
      "Option B for 350",
      "Option C for 350",
      "Option D for 350"
    ],
    "answer": "Option D for 350",
    "explanation": "Drug N works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 350)."
  },
  {
    "id": 351,
    "topic": "Anatomy",
    "question": "What is the mechanism of action of Drug O?",
    "options": [
      "Option A for 351",
      "Option B for 351",
      "Option C for 351",
      "Option D for 351"
    ],
    "answer": "Option A for 351",
    "explanation": "Drug O works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 351)."
  },
  {
    "id": 352,
    "topic": "Community Medicine",
    "question": "What is the mechanism of action of Drug P?",
    "options": [
      "Option A for 352",
      "Option B for 352",
      "Option C for 352",
      "Option D for 352"
    ],
    "answer": "Option B for 352",
    "explanation": "Drug P works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 352)."
  },
  {
    "id": 353,
    "topic": "Anatomy",
    "question": "What is the mechanism of action of Drug Q?",
    "options": [
      "Option A for 353",
      "Option B for 353",
      "Option C for 353",
      "Option D for 353"
    ],
    "answer": "Option C for 353",
    "explanation": "Drug Q works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 353)."
  },
  {
    "id": 354,
    "topic": "Pathology",
    "question": "What is the mechanism of action of Drug R?",
    "options": [
      "Option A for 354",
      "Option B for 354",
      "Option C for 354",
      "Option D for 354"
    ],
    "answer": "Option D for 354",
    "explanation": "Drug R works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 354)."
  },
  {
    "id": 355,
    "topic": "Biochemistry",
    "question": "What is the mechanism of action of Drug S?",
    "options": [
      "Option A for 355",
      "Option B for 355",
      "Option C for 355",
      "Option D for 355"
    ],
    "answer": "Option A for 355",
    "explanation": "Drug S works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 355)."
  },
  {
    "id": 356,
    "topic": "Biochemistry",
    "question": "What is the mechanism of action of Drug T?",
    "options": [
      "Option A for 356",
      "Option B for 356",
      "Option C for 356",
      "Option D for 356"
    ],
    "answer": "Option B for 356",
    "explanation": "Drug T works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 356)."
  },
  {
    "id": 357,
    "topic": "Pathology",
    "question": "What is the mechanism of action of Drug U?",
    "options": [
      "Option A for 357",
      "Option B for 357",
      "Option C for 357",
      "Option D for 357"
    ],
    "answer": "Option C for 357",
    "explanation": "Drug U works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 357)."
  },
  {
    "id": 358,
    "topic": "Surgery",
    "question": "What is the mechanism of action of Drug V?",
    "options": [
      "Option A for 358",
      "Option B for 358",
      "Option C for 358",
      "Option D for 358"
    ],
    "answer": "Option D for 358",
    "explanation": "Drug V works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 358)."
  },
  {
    "id": 359,
    "topic": "Pharmacology",
    "question": "What is the mechanism of action of Drug W?",
    "options": [
      "Option A for 359",
      "Option B for 359",
      "Option C for 359",
      "Option D for 359"
    ],
    "answer": "Option A for 359",
    "explanation": "Drug W works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 359)."
  },
  {
    "id": 360,
    "topic": "Pathology",
    "question": "What is the mechanism of action of Drug X?",
    "options": [
      "Option A for 360",
      "Option B for 360",
      "Option C for 360",
      "Option D for 360"
    ],
    "answer": "Option B for 360",
    "explanation": "Drug X works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 360)."
  },
  {
    "id": 361,
    "topic": "Biochemistry",
    "question": "What is the mechanism of action of Drug Y?",
    "options": [
      "Option A for 361",
      "Option B for 361",
      "Option C for 361",
      "Option D for 361"
    ],
    "answer": "Option C for 361",
    "explanation": "Drug Y works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 361)."
  },
  {
    "id": 362,
    "topic": "Medicine",
    "question": "What is the mechanism of action of Drug Z?",
    "options": [
      "Option A for 362",
      "Option B for 362",
      "Option C for 362",
      "Option D for 362"
    ],
    "answer": "Option D for 362",
    "explanation": "Drug Z works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 362)."
  },
  {
    "id": 363,
    "topic": "Pharmacology",
    "question": "What is the mechanism of action of Drug A?",
    "options": [
      "Option A for 363",
      "Option B for 363",
      "Option C for 363",
      "Option D for 363"
    ],
    "answer": "Option A for 363",
    "explanation": "Drug A works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 363)."
  },
  {
    "id": 364,
    "topic": "Biochemistry",
    "question": "What is the mechanism of action of Drug B?",
    "options": [
      "Option A for 364",
      "Option B for 364",
      "Option C for 364",
      "Option D for 364"
    ],
    "answer": "Option B for 364",
    "explanation": "Drug B works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 364)."
  },
  {
    "id": 365,
    "topic": "Anatomy",
    "question": "What is the mechanism of action of Drug C?",
    "options": [
      "Option A for 365",
      "Option B for 365",
      "Option C for 365",
      "Option D for 365"
    ],
    "answer": "Option C for 365",
    "explanation": "Drug C works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 365)."
  },
  {
    "id": 366,
    "topic": "Microbiology",
    "question": "What is the mechanism of action of Drug D?",
    "options": [
      "Option A for 366",
      "Option B for 366",
      "Option C for 366",
      "Option D for 366"
    ],
    "answer": "Option D for 366",
    "explanation": "Drug D works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 366)."
  },
  {
    "id": 367,
    "topic": "OBG",
    "question": "What is the mechanism of action of Drug E?",
    "options": [
      "Option A for 367",
      "Option B for 367",
      "Option C for 367",
      "Option D for 367"
    ],
    "answer": "Option A for 367",
    "explanation": "Drug E works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 367)."
  },
  {
    "id": 368,
    "topic": "Biochemistry",
    "question": "What is the mechanism of action of Drug F?",
    "options": [
      "Option A for 368",
      "Option B for 368",
      "Option C for 368",
      "Option D for 368"
    ],
    "answer": "Option B for 368",
    "explanation": "Drug F works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 368)."
  },
  {
    "id": 369,
    "topic": "Community Medicine",
    "question": "What is the mechanism of action of Drug G?",
    "options": [
      "Option A for 369",
      "Option B for 369",
      "Option C for 369",
      "Option D for 369"
    ],
    "answer": "Option C for 369",
    "explanation": "Drug G works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 369)."
  },
  {
    "id": 370,
    "topic": "Surgery",
    "question": "What is the mechanism of action of Drug H?",
    "options": [
      "Option A for 370",
      "Option B for 370",
      "Option C for 370",
      "Option D for 370"
    ],
    "answer": "Option D for 370",
    "explanation": "Drug H works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 370)."
  },
  {
    "id": 371,
    "topic": "Physiology",
    "question": "What is the mechanism of action of Drug I?",
    "options": [
      "Option A for 371",
      "Option B for 371",
      "Option C for 371",
      "Option D for 371"
    ],
    "answer": "Option A for 371",
    "explanation": "Drug I works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 371)."
  },
  {
    "id": 372,
    "topic": "Surgery",
    "question": "What is the mechanism of action of Drug J?",
    "options": [
      "Option A for 372",
      "Option B for 372",
      "Option C for 372",
      "Option D for 372"
    ],
    "answer": "Option B for 372",
    "explanation": "Drug J works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 372)."
  },
  {
    "id": 373,
    "topic": "Microbiology",
    "question": "What is the mechanism of action of Drug K?",
    "options": [
      "Option A for 373",
      "Option B for 373",
      "Option C for 373",
      "Option D for 373"
    ],
    "answer": "Option C for 373",
    "explanation": "Drug K works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 373)."
  },
  {
    "id": 374,
    "topic": "Pharmacology",
    "question": "What is the mechanism of action of Drug L?",
    "options": [
      "Option A for 374",
      "Option B for 374",
      "Option C for 374",
      "Option D for 374"
    ],
    "answer": "Option D for 374",
    "explanation": "Drug L works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 374)."
  },
  {
    "id": 375,
    "topic": "Anatomy",
    "question": "What is the mechanism of action of Drug M?",
    "options": [
      "Option A for 375",
      "Option B for 375",
      "Option C for 375",
      "Option D for 375"
    ],
    "answer": "Option A for 375",
    "explanation": "Drug M works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 375)."
  },
  {
    "id": 376,
    "topic": "Pharmacology",
    "question": "What is the mechanism of action of Drug N?",
    "options": [
      "Option A for 376",
      "Option B for 376",
      "Option C for 376",
      "Option D for 376"
    ],
    "answer": "Option B for 376",
    "explanation": "Drug N works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 376)."
  },
  {
    "id": 377,
    "topic": "Microbiology",
    "question": "What is the mechanism of action of Drug O?",
    "options": [
      "Option A for 377",
      "Option B for 377",
      "Option C for 377",
      "Option D for 377"
    ],
    "answer": "Option C for 377",
    "explanation": "Drug O works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 377)."
  },
  {
    "id": 378,
    "topic": "OBG",
    "question": "What is the mechanism of action of Drug P?",
    "options": [
      "Option A for 378",
      "Option B for 378",
      "Option C for 378",
      "Option D for 378"
    ],
    "answer": "Option D for 378",
    "explanation": "Drug P works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 378)."
  },
  {
    "id": 379,
    "topic": "OBG",
    "question": "What is the mechanism of action of Drug Q?",
    "options": [
      "Option A for 379",
      "Option B for 379",
      "Option C for 379",
      "Option D for 379"
    ],
    "answer": "Option A for 379",
    "explanation": "Drug Q works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 379)."
  },
  {
    "id": 380,
    "topic": "Community Medicine",
    "question": "What is the mechanism of action of Drug R?",
    "options": [
      "Option A for 380",
      "Option B for 380",
      "Option C for 380",
      "Option D for 380"
    ],
    "answer": "Option B for 380",
    "explanation": "Drug R works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 380)."
  },
  {
    "id": 381,
    "topic": "OBG",
    "question": "What is the mechanism of action of Drug S?",
    "options": [
      "Option A for 381",
      "Option B for 381",
      "Option C for 381",
      "Option D for 381"
    ],
    "answer": "Option C for 381",
    "explanation": "Drug S works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 381)."
  },
  {
    "id": 382,
    "topic": "Physiology",
    "question": "What is the mechanism of action of Drug T?",
    "options": [
      "Option A for 382",
      "Option B for 382",
      "Option C for 382",
      "Option D for 382"
    ],
    "answer": "Option D for 382",
    "explanation": "Drug T works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 382)."
  },
  {
    "id": 383,
    "topic": "Biochemistry",
    "question": "What is the mechanism of action of Drug U?",
    "options": [
      "Option A for 383",
      "Option B for 383",
      "Option C for 383",
      "Option D for 383"
    ],
    "answer": "Option A for 383",
    "explanation": "Drug U works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 383)."
  },
  {
    "id": 384,
    "topic": "Physiology",
    "question": "What is the mechanism of action of Drug V?",
    "options": [
      "Option A for 384",
      "Option B for 384",
      "Option C for 384",
      "Option D for 384"
    ],
    "answer": "Option B for 384",
    "explanation": "Drug V works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 384)."
  },
  {
    "id": 385,
    "topic": "Surgery",
    "question": "What is the mechanism of action of Drug W?",
    "options": [
      "Option A for 385",
      "Option B for 385",
      "Option C for 385",
      "Option D for 385"
    ],
    "answer": "Option C for 385",
    "explanation": "Drug W works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 385)."
  },
  {
    "id": 386,
    "topic": "Surgery",
    "question": "What is the mechanism of action of Drug X?",
    "options": [
      "Option A for 386",
      "Option B for 386",
      "Option C for 386",
      "Option D for 386"
    ],
    "answer": "Option D for 386",
    "explanation": "Drug X works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 386)."
  },
  {
    "id": 387,
    "topic": "Community Medicine",
    "question": "What is the mechanism of action of Drug Y?",
    "options": [
      "Option A for 387",
      "Option B for 387",
      "Option C for 387",
      "Option D for 387"
    ],
    "answer": "Option A for 387",
    "explanation": "Drug Y works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 387)."
  },
  {
    "id": 388,
    "topic": "Physiology",
    "question": "What is the mechanism of action of Drug Z?",
    "options": [
      "Option A for 388",
      "Option B for 388",
      "Option C for 388",
      "Option D for 388"
    ],
    "answer": "Option B for 388",
    "explanation": "Drug Z works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 388)."
  },
  {
    "id": 389,
    "topic": "Community Medicine",
    "question": "What is the mechanism of action of Drug A?",
    "options": [
      "Option A for 389",
      "Option B for 389",
      "Option C for 389",
      "Option D for 389"
    ],
    "answer": "Option C for 389",
    "explanation": "Drug A works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 389)."
  },
  {
    "id": 390,
    "topic": "Medicine",
    "question": "What is the mechanism of action of Drug B?",
    "options": [
      "Option A for 390",
      "Option B for 390",
      "Option C for 390",
      "Option D for 390"
    ],
    "answer": "Option D for 390",
    "explanation": "Drug B works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 390)."
  },
  {
    "id": 391,
    "topic": "Pharmacology",
    "question": "What is the mechanism of action of Drug C?",
    "options": [
      "Option A for 391",
      "Option B for 391",
      "Option C for 391",
      "Option D for 391"
    ],
    "answer": "Option A for 391",
    "explanation": "Drug C works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 391)."
  },
  {
    "id": 392,
    "topic": "Community Medicine",
    "question": "What is the mechanism of action of Drug D?",
    "options": [
      "Option A for 392",
      "Option B for 392",
      "Option C for 392",
      "Option D for 392"
    ],
    "answer": "Option B for 392",
    "explanation": "Drug D works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 392)."
  },
  {
    "id": 393,
    "topic": "Community Medicine",
    "question": "What is the mechanism of action of Drug E?",
    "options": [
      "Option A for 393",
      "Option B for 393",
      "Option C for 393",
      "Option D for 393"
    ],
    "answer": "Option C for 393",
    "explanation": "Drug E works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 393)."
  },
  {
    "id": 394,
    "topic": "OBG",
    "question": "What is the mechanism of action of Drug F?",
    "options": [
      "Option A for 394",
      "Option B for 394",
      "Option C for 394",
      "Option D for 394"
    ],
    "answer": "Option D for 394",
    "explanation": "Drug F works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 394)."
  },
  {
    "id": 395,
    "topic": "Pharmacology",
    "question": "What is the mechanism of action of Drug G?",
    "options": [
      "Option A for 395",
      "Option B for 395",
      "Option C for 395",
      "Option D for 395"
    ],
    "answer": "Option A for 395",
    "explanation": "Drug G works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 395)."
  },
  {
    "id": 396,
    "topic": "Community Medicine",
    "question": "What is the mechanism of action of Drug H?",
    "options": [
      "Option A for 396",
      "Option B for 396",
      "Option C for 396",
      "Option D for 396"
    ],
    "answer": "Option B for 396",
    "explanation": "Drug H works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 396)."
  },
  {
    "id": 397,
    "topic": "Pathology",
    "question": "What is the mechanism of action of Drug I?",
    "options": [
      "Option A for 397",
      "Option B for 397",
      "Option C for 397",
      "Option D for 397"
    ],
    "answer": "Option C for 397",
    "explanation": "Drug I works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 397)."
  },
  {
    "id": 398,
    "topic": "Medicine",
    "question": "What is the mechanism of action of Drug J?",
    "options": [
      "Option A for 398",
      "Option B for 398",
      "Option C for 398",
      "Option D for 398"
    ],
    "answer": "Option D for 398",
    "explanation": "Drug J works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 398)."
  },
  {
    "id": 399,
    "topic": "Microbiology",
    "question": "What is the mechanism of action of Drug K?",
    "options": [
      "Option A for 399",
      "Option B for 399",
      "Option C for 399",
      "Option D for 399"
    ],
    "answer": "Option A for 399",
    "explanation": "Drug K works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 399)."
  },
  {
    "id": 400,
    "topic": "Biochemistry",
    "question": "What is the mechanism of action of Drug L?",
    "options": [
      "Option A for 400",
      "Option B for 400",
      "Option C for 400",
      "Option D for 400"
    ],
    "answer": "Option B for 400",
    "explanation": "Drug L works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 400)."
  },
  {
    "id": 401,
    "topic": "Pathology",
    "question": "What is the mechanism of action of Drug M?",
    "options": [
      "Option A for 401",
      "Option B for 401",
      "Option C for 401",
      "Option D for 401"
    ],
    "answer": "Option C for 401",
    "explanation": "Drug M works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 401)."
  },
  {
    "id": 402,
    "topic": "Anatomy",
    "question": "What is the mechanism of action of Drug N?",
    "options": [
      "Option A for 402",
      "Option B for 402",
      "Option C for 402",
      "Option D for 402"
    ],
    "answer": "Option D for 402",
    "explanation": "Drug N works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 402)."
  },
  {
    "id": 403,
    "topic": "Microbiology",
    "question": "What is the mechanism of action of Drug O?",
    "options": [
      "Option A for 403",
      "Option B for 403",
      "Option C for 403",
      "Option D for 403"
    ],
    "answer": "Option A for 403",
    "explanation": "Drug O works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 403)."
  },
  {
    "id": 404,
    "topic": "Microbiology",
    "question": "What is the mechanism of action of Drug P?",
    "options": [
      "Option A for 404",
      "Option B for 404",
      "Option C for 404",
      "Option D for 404"
    ],
    "answer": "Option B for 404",
    "explanation": "Drug P works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 404)."
  },
  {
    "id": 405,
    "topic": "Anatomy",
    "question": "What is the mechanism of action of Drug Q?",
    "options": [
      "Option A for 405",
      "Option B for 405",
      "Option C for 405",
      "Option D for 405"
    ],
    "answer": "Option C for 405",
    "explanation": "Drug Q works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 405)."
  },
  {
    "id": 406,
    "topic": "Medicine",
    "question": "What is the mechanism of action of Drug R?",
    "options": [
      "Option A for 406",
      "Option B for 406",
      "Option C for 406",
      "Option D for 406"
    ],
    "answer": "Option D for 406",
    "explanation": "Drug R works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 406)."
  },
  {
    "id": 407,
    "topic": "Medicine",
    "question": "What is the mechanism of action of Drug S?",
    "options": [
      "Option A for 407",
      "Option B for 407",
      "Option C for 407",
      "Option D for 407"
    ],
    "answer": "Option A for 407",
    "explanation": "Drug S works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 407)."
  },
  {
    "id": 408,
    "topic": "Pharmacology",
    "question": "What is the mechanism of action of Drug T?",
    "options": [
      "Option A for 408",
      "Option B for 408",
      "Option C for 408",
      "Option D for 408"
    ],
    "answer": "Option B for 408",
    "explanation": "Drug T works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 408)."
  },
  {
    "id": 409,
    "topic": "Anatomy",
    "question": "What is the mechanism of action of Drug U?",
    "options": [
      "Option A for 409",
      "Option B for 409",
      "Option C for 409",
      "Option D for 409"
    ],
    "answer": "Option C for 409",
    "explanation": "Drug U works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 409)."
  },
  {
    "id": 410,
    "topic": "OBG",
    "question": "What is the mechanism of action of Drug V?",
    "options": [
      "Option A for 410",
      "Option B for 410",
      "Option C for 410",
      "Option D for 410"
    ],
    "answer": "Option D for 410",
    "explanation": "Drug V works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 410)."
  },
  {
    "id": 411,
    "topic": "Surgery",
    "question": "What is the mechanism of action of Drug W?",
    "options": [
      "Option A for 411",
      "Option B for 411",
      "Option C for 411",
      "Option D for 411"
    ],
    "answer": "Option A for 411",
    "explanation": "Drug W works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 411)."
  },
  {
    "id": 412,
    "topic": "Microbiology",
    "question": "What is the mechanism of action of Drug X?",
    "options": [
      "Option A for 412",
      "Option B for 412",
      "Option C for 412",
      "Option D for 412"
    ],
    "answer": "Option B for 412",
    "explanation": "Drug X works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 412)."
  },
  {
    "id": 413,
    "topic": "Anatomy",
    "question": "What is the mechanism of action of Drug Y?",
    "options": [
      "Option A for 413",
      "Option B for 413",
      "Option C for 413",
      "Option D for 413"
    ],
    "answer": "Option C for 413",
    "explanation": "Drug Y works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 413)."
  },
  {
    "id": 414,
    "topic": "Physiology",
    "question": "What is the mechanism of action of Drug Z?",
    "options": [
      "Option A for 414",
      "Option B for 414",
      "Option C for 414",
      "Option D for 414"
    ],
    "answer": "Option D for 414",
    "explanation": "Drug Z works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 414)."
  },
  {
    "id": 415,
    "topic": "OBG",
    "question": "What is the mechanism of action of Drug A?",
    "options": [
      "Option A for 415",
      "Option B for 415",
      "Option C for 415",
      "Option D for 415"
    ],
    "answer": "Option A for 415",
    "explanation": "Drug A works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 415)."
  },
  {
    "id": 416,
    "topic": "Pathology",
    "question": "What is the mechanism of action of Drug B?",
    "options": [
      "Option A for 416",
      "Option B for 416",
      "Option C for 416",
      "Option D for 416"
    ],
    "answer": "Option B for 416",
    "explanation": "Drug B works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 416)."
  },
  {
    "id": 417,
    "topic": "Microbiology",
    "question": "What is the mechanism of action of Drug C?",
    "options": [
      "Option A for 417",
      "Option B for 417",
      "Option C for 417",
      "Option D for 417"
    ],
    "answer": "Option C for 417",
    "explanation": "Drug C works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 417)."
  },
  {
    "id": 418,
    "topic": "Physiology",
    "question": "What is the mechanism of action of Drug D?",
    "options": [
      "Option A for 418",
      "Option B for 418",
      "Option C for 418",
      "Option D for 418"
    ],
    "answer": "Option D for 418",
    "explanation": "Drug D works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 418)."
  },
  {
    "id": 419,
    "topic": "Pathology",
    "question": "What is the mechanism of action of Drug E?",
    "options": [
      "Option A for 419",
      "Option B for 419",
      "Option C for 419",
      "Option D for 419"
    ],
    "answer": "Option A for 419",
    "explanation": "Drug E works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 419)."
  },
  {
    "id": 420,
    "topic": "OBG",
    "question": "What is the mechanism of action of Drug F?",
    "options": [
      "Option A for 420",
      "Option B for 420",
      "Option C for 420",
      "Option D for 420"
    ],
    "answer": "Option B for 420",
    "explanation": "Drug F works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 420)."
  },
  {
    "id": 421,
    "topic": "Biochemistry",
    "question": "What is the mechanism of action of Drug G?",
    "options": [
      "Option A for 421",
      "Option B for 421",
      "Option C for 421",
      "Option D for 421"
    ],
    "answer": "Option C for 421",
    "explanation": "Drug G works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 421)."
  },
  {
    "id": 422,
    "topic": "OBG",
    "question": "What is the mechanism of action of Drug H?",
    "options": [
      "Option A for 422",
      "Option B for 422",
      "Option C for 422",
      "Option D for 422"
    ],
    "answer": "Option D for 422",
    "explanation": "Drug H works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 422)."
  },
  {
    "id": 423,
    "topic": "Anatomy",
    "question": "What is the mechanism of action of Drug I?",
    "options": [
      "Option A for 423",
      "Option B for 423",
      "Option C for 423",
      "Option D for 423"
    ],
    "answer": "Option A for 423",
    "explanation": "Drug I works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 423)."
  },
  {
    "id": 424,
    "topic": "Microbiology",
    "question": "What is the mechanism of action of Drug J?",
    "options": [
      "Option A for 424",
      "Option B for 424",
      "Option C for 424",
      "Option D for 424"
    ],
    "answer": "Option B for 424",
    "explanation": "Drug J works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 424)."
  },
  {
    "id": 425,
    "topic": "Physiology",
    "question": "What is the mechanism of action of Drug K?",
    "options": [
      "Option A for 425",
      "Option B for 425",
      "Option C for 425",
      "Option D for 425"
    ],
    "answer": "Option C for 425",
    "explanation": "Drug K works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 425)."
  },
  {
    "id": 426,
    "topic": "Physiology",
    "question": "What is the mechanism of action of Drug L?",
    "options": [
      "Option A for 426",
      "Option B for 426",
      "Option C for 426",
      "Option D for 426"
    ],
    "answer": "Option D for 426",
    "explanation": "Drug L works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 426)."
  },
  {
    "id": 427,
    "topic": "Surgery",
    "question": "What is the mechanism of action of Drug M?",
    "options": [
      "Option A for 427",
      "Option B for 427",
      "Option C for 427",
      "Option D for 427"
    ],
    "answer": "Option A for 427",
    "explanation": "Drug M works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 427)."
  },
  {
    "id": 428,
    "topic": "Microbiology",
    "question": "What is the mechanism of action of Drug N?",
    "options": [
      "Option A for 428",
      "Option B for 428",
      "Option C for 428",
      "Option D for 428"
    ],
    "answer": "Option B for 428",
    "explanation": "Drug N works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 428)."
  },
  {
    "id": 429,
    "topic": "Medicine",
    "question": "What is the mechanism of action of Drug O?",
    "options": [
      "Option A for 429",
      "Option B for 429",
      "Option C for 429",
      "Option D for 429"
    ],
    "answer": "Option C for 429",
    "explanation": "Drug O works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 429)."
  },
  {
    "id": 430,
    "topic": "Physiology",
    "question": "What is the mechanism of action of Drug P?",
    "options": [
      "Option A for 430",
      "Option B for 430",
      "Option C for 430",
      "Option D for 430"
    ],
    "answer": "Option D for 430",
    "explanation": "Drug P works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 430)."
  },
  {
    "id": 431,
    "topic": "Physiology",
    "question": "What is the mechanism of action of Drug Q?",
    "options": [
      "Option A for 431",
      "Option B for 431",
      "Option C for 431",
      "Option D for 431"
    ],
    "answer": "Option A for 431",
    "explanation": "Drug Q works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 431)."
  },
  {
    "id": 432,
    "topic": "Medicine",
    "question": "What is the mechanism of action of Drug R?",
    "options": [
      "Option A for 432",
      "Option B for 432",
      "Option C for 432",
      "Option D for 432"
    ],
    "answer": "Option B for 432",
    "explanation": "Drug R works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 432)."
  },
  {
    "id": 433,
    "topic": "Microbiology",
    "question": "What is the mechanism of action of Drug S?",
    "options": [
      "Option A for 433",
      "Option B for 433",
      "Option C for 433",
      "Option D for 433"
    ],
    "answer": "Option C for 433",
    "explanation": "Drug S works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 433)."
  },
  {
    "id": 434,
    "topic": "OBG",
    "question": "What is the mechanism of action of Drug T?",
    "options": [
      "Option A for 434",
      "Option B for 434",
      "Option C for 434",
      "Option D for 434"
    ],
    "answer": "Option D for 434",
    "explanation": "Drug T works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 434)."
  },
  {
    "id": 435,
    "topic": "Surgery",
    "question": "What is the mechanism of action of Drug U?",
    "options": [
      "Option A for 435",
      "Option B for 435",
      "Option C for 435",
      "Option D for 435"
    ],
    "answer": "Option A for 435",
    "explanation": "Drug U works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 435)."
  },
  {
    "id": 436,
    "topic": "Medicine",
    "question": "What is the mechanism of action of Drug V?",
    "options": [
      "Option A for 436",
      "Option B for 436",
      "Option C for 436",
      "Option D for 436"
    ],
    "answer": "Option B for 436",
    "explanation": "Drug V works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 436)."
  },
  {
    "id": 437,
    "topic": "OBG",
    "question": "What is the mechanism of action of Drug W?",
    "options": [
      "Option A for 437",
      "Option B for 437",
      "Option C for 437",
      "Option D for 437"
    ],
    "answer": "Option C for 437",
    "explanation": "Drug W works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 437)."
  },
  {
    "id": 438,
    "topic": "Anatomy",
    "question": "What is the mechanism of action of Drug X?",
    "options": [
      "Option A for 438",
      "Option B for 438",
      "Option C for 438",
      "Option D for 438"
    ],
    "answer": "Option D for 438",
    "explanation": "Drug X works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 438)."
  },
  {
    "id": 439,
    "topic": "Biochemistry",
    "question": "What is the mechanism of action of Drug Y?",
    "options": [
      "Option A for 439",
      "Option B for 439",
      "Option C for 439",
      "Option D for 439"
    ],
    "answer": "Option A for 439",
    "explanation": "Drug Y works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 439)."
  },
  {
    "id": 440,
    "topic": "Surgery",
    "question": "What is the mechanism of action of Drug Z?",
    "options": [
      "Option A for 440",
      "Option B for 440",
      "Option C for 440",
      "Option D for 440"
    ],
    "answer": "Option B for 440",
    "explanation": "Drug Z works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 440)."
  },
  {
    "id": 441,
    "topic": "OBG",
    "question": "What is the mechanism of action of Drug A?",
    "options": [
      "Option A for 441",
      "Option B for 441",
      "Option C for 441",
      "Option D for 441"
    ],
    "answer": "Option C for 441",
    "explanation": "Drug A works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 441)."
  },
  {
    "id": 442,
    "topic": "Surgery",
    "question": "What is the mechanism of action of Drug B?",
    "options": [
      "Option A for 442",
      "Option B for 442",
      "Option C for 442",
      "Option D for 442"
    ],
    "answer": "Option D for 442",
    "explanation": "Drug B works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 442)."
  },
  {
    "id": 443,
    "topic": "Pathology",
    "question": "What is the mechanism of action of Drug C?",
    "options": [
      "Option A for 443",
      "Option B for 443",
      "Option C for 443",
      "Option D for 443"
    ],
    "answer": "Option A for 443",
    "explanation": "Drug C works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 443)."
  },
  {
    "id": 444,
    "topic": "Physiology",
    "question": "What is the mechanism of action of Drug D?",
    "options": [
      "Option A for 444",
      "Option B for 444",
      "Option C for 444",
      "Option D for 444"
    ],
    "answer": "Option B for 444",
    "explanation": "Drug D works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 444)."
  },
  {
    "id": 445,
    "topic": "Medicine",
    "question": "What is the mechanism of action of Drug E?",
    "options": [
      "Option A for 445",
      "Option B for 445",
      "Option C for 445",
      "Option D for 445"
    ],
    "answer": "Option C for 445",
    "explanation": "Drug E works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 445)."
  },
  {
    "id": 446,
    "topic": "Biochemistry",
    "question": "What is the mechanism of action of Drug F?",
    "options": [
      "Option A for 446",
      "Option B for 446",
      "Option C for 446",
      "Option D for 446"
    ],
    "answer": "Option D for 446",
    "explanation": "Drug F works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 446)."
  },
  {
    "id": 447,
    "topic": "OBG",
    "question": "What is the mechanism of action of Drug G?",
    "options": [
      "Option A for 447",
      "Option B for 447",
      "Option C for 447",
      "Option D for 447"
    ],
    "answer": "Option A for 447",
    "explanation": "Drug G works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 447)."
  },
  {
    "id": 448,
    "topic": "OBG",
    "question": "What is the mechanism of action of Drug H?",
    "options": [
      "Option A for 448",
      "Option B for 448",
      "Option C for 448",
      "Option D for 448"
    ],
    "answer": "Option B for 448",
    "explanation": "Drug H works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 448)."
  },
  {
    "id": 449,
    "topic": "Medicine",
    "question": "What is the mechanism of action of Drug I?",
    "options": [
      "Option A for 449",
      "Option B for 449",
      "Option C for 449",
      "Option D for 449"
    ],
    "answer": "Option C for 449",
    "explanation": "Drug I works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 449)."
  },
  {
    "id": 450,
    "topic": "Anatomy",
    "question": "What is the mechanism of action of Drug J?",
    "options": [
      "Option A for 450",
      "Option B for 450",
      "Option C for 450",
      "Option D for 450"
    ],
    "answer": "Option D for 450",
    "explanation": "Drug J works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 450)."
  },
  {
    "id": 451,
    "topic": "Anatomy",
    "question": "What is the mechanism of action of Drug K?",
    "options": [
      "Option A for 451",
      "Option B for 451",
      "Option C for 451",
      "Option D for 451"
    ],
    "answer": "Option A for 451",
    "explanation": "Drug K works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 451)."
  },
  {
    "id": 452,
    "topic": "Microbiology",
    "question": "What is the mechanism of action of Drug L?",
    "options": [
      "Option A for 452",
      "Option B for 452",
      "Option C for 452",
      "Option D for 452"
    ],
    "answer": "Option B for 452",
    "explanation": "Drug L works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 452)."
  },
  {
    "id": 453,
    "topic": "Community Medicine",
    "question": "What is the mechanism of action of Drug M?",
    "options": [
      "Option A for 453",
      "Option B for 453",
      "Option C for 453",
      "Option D for 453"
    ],
    "answer": "Option C for 453",
    "explanation": "Drug M works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 453)."
  },
  {
    "id": 454,
    "topic": "Physiology",
    "question": "What is the mechanism of action of Drug N?",
    "options": [
      "Option A for 454",
      "Option B for 454",
      "Option C for 454",
      "Option D for 454"
    ],
    "answer": "Option D for 454",
    "explanation": "Drug N works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 454)."
  },
  {
    "id": 455,
    "topic": "Pathology",
    "question": "What is the mechanism of action of Drug O?",
    "options": [
      "Option A for 455",
      "Option B for 455",
      "Option C for 455",
      "Option D for 455"
    ],
    "answer": "Option A for 455",
    "explanation": "Drug O works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 455)."
  },
  {
    "id": 456,
    "topic": "Pharmacology",
    "question": "What is the mechanism of action of Drug P?",
    "options": [
      "Option A for 456",
      "Option B for 456",
      "Option C for 456",
      "Option D for 456"
    ],
    "answer": "Option B for 456",
    "explanation": "Drug P works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 456)."
  },
  {
    "id": 457,
    "topic": "Medicine",
    "question": "What is the mechanism of action of Drug Q?",
    "options": [
      "Option A for 457",
      "Option B for 457",
      "Option C for 457",
      "Option D for 457"
    ],
    "answer": "Option C for 457",
    "explanation": "Drug Q works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 457)."
  },
  {
    "id": 458,
    "topic": "Pathology",
    "question": "What is the mechanism of action of Drug R?",
    "options": [
      "Option A for 458",
      "Option B for 458",
      "Option C for 458",
      "Option D for 458"
    ],
    "answer": "Option D for 458",
    "explanation": "Drug R works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 458)."
  },
  {
    "id": 459,
    "topic": "Anatomy",
    "question": "What is the mechanism of action of Drug S?",
    "options": [
      "Option A for 459",
      "Option B for 459",
      "Option C for 459",
      "Option D for 459"
    ],
    "answer": "Option A for 459",
    "explanation": "Drug S works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 459)."
  },
  {
    "id": 460,
    "topic": "Medicine",
    "question": "What is the mechanism of action of Drug T?",
    "options": [
      "Option A for 460",
      "Option B for 460",
      "Option C for 460",
      "Option D for 460"
    ],
    "answer": "Option B for 460",
    "explanation": "Drug T works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 460)."
  },
  {
    "id": 461,
    "topic": "Physiology",
    "question": "What is the mechanism of action of Drug U?",
    "options": [
      "Option A for 461",
      "Option B for 461",
      "Option C for 461",
      "Option D for 461"
    ],
    "answer": "Option C for 461",
    "explanation": "Drug U works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 461)."
  },
  {
    "id": 462,
    "topic": "Microbiology",
    "question": "What is the mechanism of action of Drug V?",
    "options": [
      "Option A for 462",
      "Option B for 462",
      "Option C for 462",
      "Option D for 462"
    ],
    "answer": "Option D for 462",
    "explanation": "Drug V works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 462)."
  },
  {
    "id": 463,
    "topic": "Pharmacology",
    "question": "What is the mechanism of action of Drug W?",
    "options": [
      "Option A for 463",
      "Option B for 463",
      "Option C for 463",
      "Option D for 463"
    ],
    "answer": "Option A for 463",
    "explanation": "Drug W works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 463)."
  },
  {
    "id": 464,
    "topic": "Anatomy",
    "question": "What is the mechanism of action of Drug X?",
    "options": [
      "Option A for 464",
      "Option B for 464",
      "Option C for 464",
      "Option D for 464"
    ],
    "answer": "Option B for 464",
    "explanation": "Drug X works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 464)."
  },
  {
    "id": 465,
    "topic": "Pathology",
    "question": "What is the mechanism of action of Drug Y?",
    "options": [
      "Option A for 465",
      "Option B for 465",
      "Option C for 465",
      "Option D for 465"
    ],
    "answer": "Option C for 465",
    "explanation": "Drug Y works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 465)."
  },
  {
    "id": 466,
    "topic": "Biochemistry",
    "question": "What is the mechanism of action of Drug Z?",
    "options": [
      "Option A for 466",
      "Option B for 466",
      "Option C for 466",
      "Option D for 466"
    ],
    "answer": "Option D for 466",
    "explanation": "Drug Z works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 466)."
  },
  {
    "id": 467,
    "topic": "Community Medicine",
    "question": "What is the mechanism of action of Drug A?",
    "options": [
      "Option A for 467",
      "Option B for 467",
      "Option C for 467",
      "Option D for 467"
    ],
    "answer": "Option A for 467",
    "explanation": "Drug A works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 467)."
  },
  {
    "id": 468,
    "topic": "Microbiology",
    "question": "What is the mechanism of action of Drug B?",
    "options": [
      "Option A for 468",
      "Option B for 468",
      "Option C for 468",
      "Option D for 468"
    ],
    "answer": "Option B for 468",
    "explanation": "Drug B works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 468)."
  },
  {
    "id": 469,
    "topic": "Biochemistry",
    "question": "What is the mechanism of action of Drug C?",
    "options": [
      "Option A for 469",
      "Option B for 469",
      "Option C for 469",
      "Option D for 469"
    ],
    "answer": "Option C for 469",
    "explanation": "Drug C works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 469)."
  },
  {
    "id": 470,
    "topic": "Anatomy",
    "question": "What is the mechanism of action of Drug D?",
    "options": [
      "Option A for 470",
      "Option B for 470",
      "Option C for 470",
      "Option D for 470"
    ],
    "answer": "Option D for 470",
    "explanation": "Drug D works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 470)."
  },
  {
    "id": 471,
    "topic": "Medicine",
    "question": "What is the mechanism of action of Drug E?",
    "options": [
      "Option A for 471",
      "Option B for 471",
      "Option C for 471",
      "Option D for 471"
    ],
    "answer": "Option A for 471",
    "explanation": "Drug E works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 471)."
  },
  {
    "id": 472,
    "topic": "Anatomy",
    "question": "What is the mechanism of action of Drug F?",
    "options": [
      "Option A for 472",
      "Option B for 472",
      "Option C for 472",
      "Option D for 472"
    ],
    "answer": "Option B for 472",
    "explanation": "Drug F works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 472)."
  },
  {
    "id": 473,
    "topic": "Anatomy",
    "question": "What is the mechanism of action of Drug G?",
    "options": [
      "Option A for 473",
      "Option B for 473",
      "Option C for 473",
      "Option D for 473"
    ],
    "answer": "Option C for 473",
    "explanation": "Drug G works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 473)."
  },
  {
    "id": 474,
    "topic": "Community Medicine",
    "question": "What is the mechanism of action of Drug H?",
    "options": [
      "Option A for 474",
      "Option B for 474",
      "Option C for 474",
      "Option D for 474"
    ],
    "answer": "Option D for 474",
    "explanation": "Drug H works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 474)."
  },
  {
    "id": 475,
    "topic": "Surgery",
    "question": "What is the mechanism of action of Drug I?",
    "options": [
      "Option A for 475",
      "Option B for 475",
      "Option C for 475",
      "Option D for 475"
    ],
    "answer": "Option A for 475",
    "explanation": "Drug I works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 475)."
  },
  {
    "id": 476,
    "topic": "Medicine",
    "question": "What is the mechanism of action of Drug J?",
    "options": [
      "Option A for 476",
      "Option B for 476",
      "Option C for 476",
      "Option D for 476"
    ],
    "answer": "Option B for 476",
    "explanation": "Drug J works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 476)."
  },
  {
    "id": 477,
    "topic": "Pharmacology",
    "question": "What is the mechanism of action of Drug K?",
    "options": [
      "Option A for 477",
      "Option B for 477",
      "Option C for 477",
      "Option D for 477"
    ],
    "answer": "Option C for 477",
    "explanation": "Drug K works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 477)."
  },
  {
    "id": 478,
    "topic": "Pathology",
    "question": "What is the mechanism of action of Drug L?",
    "options": [
      "Option A for 478",
      "Option B for 478",
      "Option C for 478",
      "Option D for 478"
    ],
    "answer": "Option D for 478",
    "explanation": "Drug L works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 478)."
  },
  {
    "id": 479,
    "topic": "Pathology",
    "question": "What is the mechanism of action of Drug M?",
    "options": [
      "Option A for 479",
      "Option B for 479",
      "Option C for 479",
      "Option D for 479"
    ],
    "answer": "Option A for 479",
    "explanation": "Drug M works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 479)."
  },
  {
    "id": 480,
    "topic": "Medicine",
    "question": "What is the mechanism of action of Drug N?",
    "options": [
      "Option A for 480",
      "Option B for 480",
      "Option C for 480",
      "Option D for 480"
    ],
    "answer": "Option B for 480",
    "explanation": "Drug N works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 480)."
  },
  {
    "id": 481,
    "topic": "Community Medicine",
    "question": "What is the mechanism of action of Drug O?",
    "options": [
      "Option A for 481",
      "Option B for 481",
      "Option C for 481",
      "Option D for 481"
    ],
    "answer": "Option C for 481",
    "explanation": "Drug O works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 481)."
  },
  {
    "id": 482,
    "topic": "Microbiology",
    "question": "What is the mechanism of action of Drug P?",
    "options": [
      "Option A for 482",
      "Option B for 482",
      "Option C for 482",
      "Option D for 482"
    ],
    "answer": "Option D for 482",
    "explanation": "Drug P works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 482)."
  },
  {
    "id": 483,
    "topic": "Anatomy",
    "question": "What is the mechanism of action of Drug Q?",
    "options": [
      "Option A for 483",
      "Option B for 483",
      "Option C for 483",
      "Option D for 483"
    ],
    "answer": "Option A for 483",
    "explanation": "Drug Q works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 483)."
  },
  {
    "id": 484,
    "topic": "Community Medicine",
    "question": "What is the mechanism of action of Drug R?",
    "options": [
      "Option A for 484",
      "Option B for 484",
      "Option C for 484",
      "Option D for 484"
    ],
    "answer": "Option B for 484",
    "explanation": "Drug R works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 484)."
  },
  {
    "id": 485,
    "topic": "Pathology",
    "question": "What is the mechanism of action of Drug S?",
    "options": [
      "Option A for 485",
      "Option B for 485",
      "Option C for 485",
      "Option D for 485"
    ],
    "answer": "Option C for 485",
    "explanation": "Drug S works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 485)."
  },
  {
    "id": 486,
    "topic": "Anatomy",
    "question": "What is the mechanism of action of Drug T?",
    "options": [
      "Option A for 486",
      "Option B for 486",
      "Option C for 486",
      "Option D for 486"
    ],
    "answer": "Option D for 486",
    "explanation": "Drug T works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 486)."
  },
  {
    "id": 487,
    "topic": "Surgery",
    "question": "What is the mechanism of action of Drug U?",
    "options": [
      "Option A for 487",
      "Option B for 487",
      "Option C for 487",
      "Option D for 487"
    ],
    "answer": "Option A for 487",
    "explanation": "Drug U works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 487)."
  },
  {
    "id": 488,
    "topic": "Pathology",
    "question": "What is the mechanism of action of Drug V?",
    "options": [
      "Option A for 488",
      "Option B for 488",
      "Option C for 488",
      "Option D for 488"
    ],
    "answer": "Option B for 488",
    "explanation": "Drug V works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 488)."
  },
  {
    "id": 489,
    "topic": "Anatomy",
    "question": "What is the mechanism of action of Drug W?",
    "options": [
      "Option A for 489",
      "Option B for 489",
      "Option C for 489",
      "Option D for 489"
    ],
    "answer": "Option C for 489",
    "explanation": "Drug W works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 489)."
  },
  {
    "id": 490,
    "topic": "Biochemistry",
    "question": "What is the mechanism of action of Drug X?",
    "options": [
      "Option A for 490",
      "Option B for 490",
      "Option C for 490",
      "Option D for 490"
    ],
    "answer": "Option D for 490",
    "explanation": "Drug X works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 490)."
  },
  {
    "id": 491,
    "topic": "Microbiology",
    "question": "What is the mechanism of action of Drug Y?",
    "options": [
      "Option A for 491",
      "Option B for 491",
      "Option C for 491",
      "Option D for 491"
    ],
    "answer": "Option A for 491",
    "explanation": "Drug Y works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 491)."
  },
  {
    "id": 492,
    "topic": "Community Medicine",
    "question": "What is the mechanism of action of Drug Z?",
    "options": [
      "Option A for 492",
      "Option B for 492",
      "Option C for 492",
      "Option D for 492"
    ],
    "answer": "Option B for 492",
    "explanation": "Drug Z works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 492)."
  },
  {
    "id": 493,
    "topic": "Medicine",
    "question": "What is the mechanism of action of Drug A?",
    "options": [
      "Option A for 493",
      "Option B for 493",
      "Option C for 493",
      "Option D for 493"
    ],
    "answer": "Option C for 493",
    "explanation": "Drug A works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 493)."
  },
  {
    "id": 494,
    "topic": "Biochemistry",
    "question": "What is the mechanism of action of Drug B?",
    "options": [
      "Option A for 494",
      "Option B for 494",
      "Option C for 494",
      "Option D for 494"
    ],
    "answer": "Option D for 494",
    "explanation": "Drug B works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 494)."
  },
  {
    "id": 495,
    "topic": "Surgery",
    "question": "What is the mechanism of action of Drug C?",
    "options": [
      "Option A for 495",
      "Option B for 495",
      "Option C for 495",
      "Option D for 495"
    ],
    "answer": "Option A for 495",
    "explanation": "Drug C works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 495)."
  },
  {
    "id": 496,
    "topic": "Community Medicine",
    "question": "What is the mechanism of action of Drug D?",
    "options": [
      "Option A for 496",
      "Option B for 496",
      "Option C for 496",
      "Option D for 496"
    ],
    "answer": "Option B for 496",
    "explanation": "Drug D works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 496)."
  },
  {
    "id": 497,
    "topic": "Pathology",
    "question": "What is the mechanism of action of Drug E?",
    "options": [
      "Option A for 497",
      "Option B for 497",
      "Option C for 497",
      "Option D for 497"
    ],
    "answer": "Option C for 497",
    "explanation": "Drug E works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 497)."
  },
  {
    "id": 498,
    "topic": "Biochemistry",
    "question": "What is the mechanism of action of Drug F?",
    "options": [
      "Option A for 498",
      "Option B for 498",
      "Option C for 498",
      "Option D for 498"
    ],
    "answer": "Option D for 498",
    "explanation": "Drug F works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 498)."
  },
  {
    "id": 499,
    "topic": "Surgery",
    "question": "What is the mechanism of action of Drug G?",
    "options": [
      "Option A for 499",
      "Option B for 499",
      "Option C for 499",
      "Option D for 499"
    ],
    "answer": "Option A for 499",
    "explanation": "Drug G works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 499)."
  },
  {
    "id": 500,
    "topic": "Physiology",
    "question": "What is the mechanism of action of Drug H?",
    "options": [
      "Option A for 500",
      "Option B for 500",
      "Option C for 500",
      "Option D for 500"
    ],
    "answer": "Option B for 500",
    "explanation": "Drug H works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 500)."
  },
  {
    "id": 501,
    "topic": "Anatomy",
    "question": "What is the mechanism of action of Drug I?",
    "options": [
      "Option A for 501",
      "Option B for 501",
      "Option C for 501",
      "Option D for 501"
    ],
    "answer": "Option C for 501",
    "explanation": "Drug I works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 501)."
  },
  {
    "id": 502,
    "topic": "Pharmacology",
    "question": "What is the mechanism of action of Drug J?",
    "options": [
      "Option A for 502",
      "Option B for 502",
      "Option C for 502",
      "Option D for 502"
    ],
    "answer": "Option D for 502",
    "explanation": "Drug J works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 502)."
  },
  {
    "id": 503,
    "topic": "Biochemistry",
    "question": "What is the mechanism of action of Drug K?",
    "options": [
      "Option A for 503",
      "Option B for 503",
      "Option C for 503",
      "Option D for 503"
    ],
    "answer": "Option A for 503",
    "explanation": "Drug K works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 503)."
  },
  {
    "id": 504,
    "topic": "Surgery",
    "question": "What is the mechanism of action of Drug L?",
    "options": [
      "Option A for 504",
      "Option B for 504",
      "Option C for 504",
      "Option D for 504"
    ],
    "answer": "Option B for 504",
    "explanation": "Drug L works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 504)."
  },
  {
    "id": 505,
    "topic": "OBG",
    "question": "What is the mechanism of action of Drug M?",
    "options": [
      "Option A for 505",
      "Option B for 505",
      "Option C for 505",
      "Option D for 505"
    ],
    "answer": "Option C for 505",
    "explanation": "Drug M works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 505)."
  },
  {
    "id": 506,
    "topic": "Pathology",
    "question": "What is the mechanism of action of Drug N?",
    "options": [
      "Option A for 506",
      "Option B for 506",
      "Option C for 506",
      "Option D for 506"
    ],
    "answer": "Option D for 506",
    "explanation": "Drug N works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 506)."
  },
  {
    "id": 507,
    "topic": "Pathology",
    "question": "What is the mechanism of action of Drug O?",
    "options": [
      "Option A for 507",
      "Option B for 507",
      "Option C for 507",
      "Option D for 507"
    ],
    "answer": "Option A for 507",
    "explanation": "Drug O works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 507)."
  },
  {
    "id": 508,
    "topic": "Physiology",
    "question": "What is the mechanism of action of Drug P?",
    "options": [
      "Option A for 508",
      "Option B for 508",
      "Option C for 508",
      "Option D for 508"
    ],
    "answer": "Option B for 508",
    "explanation": "Drug P works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 508)."
  },
  {
    "id": 509,
    "topic": "Anatomy",
    "question": "What is the mechanism of action of Drug Q?",
    "options": [
      "Option A for 509",
      "Option B for 509",
      "Option C for 509",
      "Option D for 509"
    ],
    "answer": "Option C for 509",
    "explanation": "Drug Q works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 509)."
  },
  {
    "id": 510,
    "topic": "Pathology",
    "question": "What is the mechanism of action of Drug R?",
    "options": [
      "Option A for 510",
      "Option B for 510",
      "Option C for 510",
      "Option D for 510"
    ],
    "answer": "Option D for 510",
    "explanation": "Drug R works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 510)."
  },
  {
    "id": 511,
    "topic": "Anatomy",
    "question": "What is the mechanism of action of Drug S?",
    "options": [
      "Option A for 511",
      "Option B for 511",
      "Option C for 511",
      "Option D for 511"
    ],
    "answer": "Option A for 511",
    "explanation": "Drug S works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 511)."
  },
  {
    "id": 512,
    "topic": "Biochemistry",
    "question": "What is the mechanism of action of Drug T?",
    "options": [
      "Option A for 512",
      "Option B for 512",
      "Option C for 512",
      "Option D for 512"
    ],
    "answer": "Option B for 512",
    "explanation": "Drug T works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 512)."
  },
  {
    "id": 513,
    "topic": "Medicine",
    "question": "What is the mechanism of action of Drug U?",
    "options": [
      "Option A for 513",
      "Option B for 513",
      "Option C for 513",
      "Option D for 513"
    ],
    "answer": "Option C for 513",
    "explanation": "Drug U works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 513)."
  },
  {
    "id": 514,
    "topic": "OBG",
    "question": "What is the mechanism of action of Drug V?",
    "options": [
      "Option A for 514",
      "Option B for 514",
      "Option C for 514",
      "Option D for 514"
    ],
    "answer": "Option D for 514",
    "explanation": "Drug V works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 514)."
  },
  {
    "id": 515,
    "topic": "Medicine",
    "question": "What is the mechanism of action of Drug W?",
    "options": [
      "Option A for 515",
      "Option B for 515",
      "Option C for 515",
      "Option D for 515"
    ],
    "answer": "Option A for 515",
    "explanation": "Drug W works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 515)."
  },
  {
    "id": 516,
    "topic": "Pharmacology",
    "question": "What is the mechanism of action of Drug X?",
    "options": [
      "Option A for 516",
      "Option B for 516",
      "Option C for 516",
      "Option D for 516"
    ],
    "answer": "Option B for 516",
    "explanation": "Drug X works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 516)."
  },
  {
    "id": 517,
    "topic": "Pathology",
    "question": "What is the mechanism of action of Drug Y?",
    "options": [
      "Option A for 517",
      "Option B for 517",
      "Option C for 517",
      "Option D for 517"
    ],
    "answer": "Option C for 517",
    "explanation": "Drug Y works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 517)."
  },
  {
    "id": 518,
    "topic": "Anatomy",
    "question": "What is the mechanism of action of Drug Z?",
    "options": [
      "Option A for 518",
      "Option B for 518",
      "Option C for 518",
      "Option D for 518"
    ],
    "answer": "Option D for 518",
    "explanation": "Drug Z works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 518)."
  },
  {
    "id": 519,
    "topic": "Pharmacology",
    "question": "What is the mechanism of action of Drug A?",
    "options": [
      "Option A for 519",
      "Option B for 519",
      "Option C for 519",
      "Option D for 519"
    ],
    "answer": "Option A for 519",
    "explanation": "Drug A works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 519)."
  },
  {
    "id": 520,
    "topic": "Anatomy",
    "question": "What is the mechanism of action of Drug B?",
    "options": [
      "Option A for 520",
      "Option B for 520",
      "Option C for 520",
      "Option D for 520"
    ],
    "answer": "Option B for 520",
    "explanation": "Drug B works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 520)."
  },
  {
    "id": 521,
    "topic": "Anatomy",
    "question": "What is the mechanism of action of Drug C?",
    "options": [
      "Option A for 521",
      "Option B for 521",
      "Option C for 521",
      "Option D for 521"
    ],
    "answer": "Option C for 521",
    "explanation": "Drug C works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 521)."
  },
  {
    "id": 522,
    "topic": "Surgery",
    "question": "What is the mechanism of action of Drug D?",
    "options": [
      "Option A for 522",
      "Option B for 522",
      "Option C for 522",
      "Option D for 522"
    ],
    "answer": "Option D for 522",
    "explanation": "Drug D works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 522)."
  },
  {
    "id": 523,
    "topic": "Pharmacology",
    "question": "What is the mechanism of action of Drug E?",
    "options": [
      "Option A for 523",
      "Option B for 523",
      "Option C for 523",
      "Option D for 523"
    ],
    "answer": "Option A for 523",
    "explanation": "Drug E works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 523)."
  },
  {
    "id": 524,
    "topic": "Pathology",
    "question": "What is the mechanism of action of Drug F?",
    "options": [
      "Option A for 524",
      "Option B for 524",
      "Option C for 524",
      "Option D for 524"
    ],
    "answer": "Option B for 524",
    "explanation": "Drug F works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 524)."
  },
  {
    "id": 525,
    "topic": "OBG",
    "question": "What is the mechanism of action of Drug G?",
    "options": [
      "Option A for 525",
      "Option B for 525",
      "Option C for 525",
      "Option D for 525"
    ],
    "answer": "Option C for 525",
    "explanation": "Drug G works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 525)."
  },
  {
    "id": 526,
    "topic": "Microbiology",
    "question": "What is the mechanism of action of Drug H?",
    "options": [
      "Option A for 526",
      "Option B for 526",
      "Option C for 526",
      "Option D for 526"
    ],
    "answer": "Option D for 526",
    "explanation": "Drug H works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 526)."
  },
  {
    "id": 527,
    "topic": "Pharmacology",
    "question": "What is the mechanism of action of Drug I?",
    "options": [
      "Option A for 527",
      "Option B for 527",
      "Option C for 527",
      "Option D for 527"
    ],
    "answer": "Option A for 527",
    "explanation": "Drug I works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 527)."
  },
  {
    "id": 528,
    "topic": "Physiology",
    "question": "What is the mechanism of action of Drug J?",
    "options": [
      "Option A for 528",
      "Option B for 528",
      "Option C for 528",
      "Option D for 528"
    ],
    "answer": "Option B for 528",
    "explanation": "Drug J works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 528)."
  },
  {
    "id": 529,
    "topic": "Microbiology",
    "question": "What is the mechanism of action of Drug K?",
    "options": [
      "Option A for 529",
      "Option B for 529",
      "Option C for 529",
      "Option D for 529"
    ],
    "answer": "Option C for 529",
    "explanation": "Drug K works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 529)."
  },
  {
    "id": 530,
    "topic": "Pathology",
    "question": "What is the mechanism of action of Drug L?",
    "options": [
      "Option A for 530",
      "Option B for 530",
      "Option C for 530",
      "Option D for 530"
    ],
    "answer": "Option D for 530",
    "explanation": "Drug L works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 530)."
  },
  {
    "id": 531,
    "topic": "Pharmacology",
    "question": "What is the mechanism of action of Drug M?",
    "options": [
      "Option A for 531",
      "Option B for 531",
      "Option C for 531",
      "Option D for 531"
    ],
    "answer": "Option A for 531",
    "explanation": "Drug M works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 531)."
  },
  {
    "id": 532,
    "topic": "Pharmacology",
    "question": "What is the mechanism of action of Drug N?",
    "options": [
      "Option A for 532",
      "Option B for 532",
      "Option C for 532",
      "Option D for 532"
    ],
    "answer": "Option B for 532",
    "explanation": "Drug N works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 532)."
  },
  {
    "id": 533,
    "topic": "Pathology",
    "question": "What is the mechanism of action of Drug O?",
    "options": [
      "Option A for 533",
      "Option B for 533",
      "Option C for 533",
      "Option D for 533"
    ],
    "answer": "Option C for 533",
    "explanation": "Drug O works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 533)."
  },
  {
    "id": 534,
    "topic": "OBG",
    "question": "What is the mechanism of action of Drug P?",
    "options": [
      "Option A for 534",
      "Option B for 534",
      "Option C for 534",
      "Option D for 534"
    ],
    "answer": "Option D for 534",
    "explanation": "Drug P works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 534)."
  },
  {
    "id": 535,
    "topic": "Pharmacology",
    "question": "What is the mechanism of action of Drug Q?",
    "options": [
      "Option A for 535",
      "Option B for 535",
      "Option C for 535",
      "Option D for 535"
    ],
    "answer": "Option A for 535",
    "explanation": "Drug Q works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 535)."
  },
  {
    "id": 536,
    "topic": "Medicine",
    "question": "What is the mechanism of action of Drug R?",
    "options": [
      "Option A for 536",
      "Option B for 536",
      "Option C for 536",
      "Option D for 536"
    ],
    "answer": "Option B for 536",
    "explanation": "Drug R works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 536)."
  },
  {
    "id": 537,
    "topic": "Pharmacology",
    "question": "What is the mechanism of action of Drug S?",
    "options": [
      "Option A for 537",
      "Option B for 537",
      "Option C for 537",
      "Option D for 537"
    ],
    "answer": "Option C for 537",
    "explanation": "Drug S works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 537)."
  },
  {
    "id": 538,
    "topic": "Medicine",
    "question": "What is the mechanism of action of Drug T?",
    "options": [
      "Option A for 538",
      "Option B for 538",
      "Option C for 538",
      "Option D for 538"
    ],
    "answer": "Option D for 538",
    "explanation": "Drug T works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 538)."
  },
  {
    "id": 539,
    "topic": "Anatomy",
    "question": "What is the mechanism of action of Drug U?",
    "options": [
      "Option A for 539",
      "Option B for 539",
      "Option C for 539",
      "Option D for 539"
    ],
    "answer": "Option A for 539",
    "explanation": "Drug U works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 539)."
  },
  {
    "id": 540,
    "topic": "Pharmacology",
    "question": "What is the mechanism of action of Drug V?",
    "options": [
      "Option A for 540",
      "Option B for 540",
      "Option C for 540",
      "Option D for 540"
    ],
    "answer": "Option B for 540",
    "explanation": "Drug V works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 540)."
  },
  {
    "id": 541,
    "topic": "Community Medicine",
    "question": "What is the mechanism of action of Drug W?",
    "options": [
      "Option A for 541",
      "Option B for 541",
      "Option C for 541",
      "Option D for 541"
    ],
    "answer": "Option C for 541",
    "explanation": "Drug W works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 541)."
  },
  {
    "id": 542,
    "topic": "Physiology",
    "question": "What is the mechanism of action of Drug X?",
    "options": [
      "Option A for 542",
      "Option B for 542",
      "Option C for 542",
      "Option D for 542"
    ],
    "answer": "Option D for 542",
    "explanation": "Drug X works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 542)."
  },
  {
    "id": 543,
    "topic": "OBG",
    "question": "What is the mechanism of action of Drug Y?",
    "options": [
      "Option A for 543",
      "Option B for 543",
      "Option C for 543",
      "Option D for 543"
    ],
    "answer": "Option A for 543",
    "explanation": "Drug Y works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 543)."
  },
  {
    "id": 544,
    "topic": "OBG",
    "question": "What is the mechanism of action of Drug Z?",
    "options": [
      "Option A for 544",
      "Option B for 544",
      "Option C for 544",
      "Option D for 544"
    ],
    "answer": "Option B for 544",
    "explanation": "Drug Z works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 544)."
  },
  {
    "id": 545,
    "topic": "OBG",
    "question": "What is the mechanism of action of Drug A?",
    "options": [
      "Option A for 545",
      "Option B for 545",
      "Option C for 545",
      "Option D for 545"
    ],
    "answer": "Option C for 545",
    "explanation": "Drug A works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 545)."
  },
  {
    "id": 546,
    "topic": "Pathology",
    "question": "What is the mechanism of action of Drug B?",
    "options": [
      "Option A for 546",
      "Option B for 546",
      "Option C for 546",
      "Option D for 546"
    ],
    "answer": "Option D for 546",
    "explanation": "Drug B works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 546)."
  },
  {
    "id": 547,
    "topic": "Biochemistry",
    "question": "What is the mechanism of action of Drug C?",
    "options": [
      "Option A for 547",
      "Option B for 547",
      "Option C for 547",
      "Option D for 547"
    ],
    "answer": "Option A for 547",
    "explanation": "Drug C works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 547)."
  },
  {
    "id": 548,
    "topic": "Biochemistry",
    "question": "What is the mechanism of action of Drug D?",
    "options": [
      "Option A for 548",
      "Option B for 548",
      "Option C for 548",
      "Option D for 548"
    ],
    "answer": "Option B for 548",
    "explanation": "Drug D works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 548)."
  },
  {
    "id": 549,
    "topic": "OBG",
    "question": "What is the mechanism of action of Drug E?",
    "options": [
      "Option A for 549",
      "Option B for 549",
      "Option C for 549",
      "Option D for 549"
    ],
    "answer": "Option C for 549",
    "explanation": "Drug E works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 549)."
  },
  {
    "id": 550,
    "topic": "Anatomy",
    "question": "What is the mechanism of action of Drug F?",
    "options": [
      "Option A for 550",
      "Option B for 550",
      "Option C for 550",
      "Option D for 550"
    ],
    "answer": "Option D for 550",
    "explanation": "Drug F works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 550)."
  },
  {
    "id": 551,
    "topic": "Pharmacology",
    "question": "What is the mechanism of action of Drug G?",
    "options": [
      "Option A for 551",
      "Option B for 551",
      "Option C for 551",
      "Option D for 551"
    ],
    "answer": "Option A for 551",
    "explanation": "Drug G works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 551)."
  },
  {
    "id": 552,
    "topic": "Community Medicine",
    "question": "What is the mechanism of action of Drug H?",
    "options": [
      "Option A for 552",
      "Option B for 552",
      "Option C for 552",
      "Option D for 552"
    ],
    "answer": "Option B for 552",
    "explanation": "Drug H works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 552)."
  },
  {
    "id": 553,
    "topic": "Community Medicine",
    "question": "What is the mechanism of action of Drug I?",
    "options": [
      "Option A for 553",
      "Option B for 553",
      "Option C for 553",
      "Option D for 553"
    ],
    "answer": "Option C for 553",
    "explanation": "Drug I works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 553)."
  },
  {
    "id": 554,
    "topic": "Anatomy",
    "question": "What is the mechanism of action of Drug J?",
    "options": [
      "Option A for 554",
      "Option B for 554",
      "Option C for 554",
      "Option D for 554"
    ],
    "answer": "Option D for 554",
    "explanation": "Drug J works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 554)."
  },
  {
    "id": 555,
    "topic": "Community Medicine",
    "question": "What is the mechanism of action of Drug K?",
    "options": [
      "Option A for 555",
      "Option B for 555",
      "Option C for 555",
      "Option D for 555"
    ],
    "answer": "Option A for 555",
    "explanation": "Drug K works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 555)."
  },
  {
    "id": 556,
    "topic": "Medicine",
    "question": "What is the mechanism of action of Drug L?",
    "options": [
      "Option A for 556",
      "Option B for 556",
      "Option C for 556",
      "Option D for 556"
    ],
    "answer": "Option B for 556",
    "explanation": "Drug L works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 556)."
  },
  {
    "id": 557,
    "topic": "Community Medicine",
    "question": "What is the mechanism of action of Drug M?",
    "options": [
      "Option A for 557",
      "Option B for 557",
      "Option C for 557",
      "Option D for 557"
    ],
    "answer": "Option C for 557",
    "explanation": "Drug M works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 557)."
  },
  {
    "id": 558,
    "topic": "Community Medicine",
    "question": "What is the mechanism of action of Drug N?",
    "options": [
      "Option A for 558",
      "Option B for 558",
      "Option C for 558",
      "Option D for 558"
    ],
    "answer": "Option D for 558",
    "explanation": "Drug N works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 558)."
  },
  {
    "id": 559,
    "topic": "Medicine",
    "question": "What is the mechanism of action of Drug O?",
    "options": [
      "Option A for 559",
      "Option B for 559",
      "Option C for 559",
      "Option D for 559"
    ],
    "answer": "Option A for 559",
    "explanation": "Drug O works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 559)."
  },
  {
    "id": 560,
    "topic": "Pharmacology",
    "question": "What is the mechanism of action of Drug P?",
    "options": [
      "Option A for 560",
      "Option B for 560",
      "Option C for 560",
      "Option D for 560"
    ],
    "answer": "Option B for 560",
    "explanation": "Drug P works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 560)."
  },
  {
    "id": 561,
    "topic": "Biochemistry",
    "question": "What is the mechanism of action of Drug Q?",
    "options": [
      "Option A for 561",
      "Option B for 561",
      "Option C for 561",
      "Option D for 561"
    ],
    "answer": "Option C for 561",
    "explanation": "Drug Q works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 561)."
  },
  {
    "id": 562,
    "topic": "Pathology",
    "question": "What is the mechanism of action of Drug R?",
    "options": [
      "Option A for 562",
      "Option B for 562",
      "Option C for 562",
      "Option D for 562"
    ],
    "answer": "Option D for 562",
    "explanation": "Drug R works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 562)."
  },
  {
    "id": 563,
    "topic": "Biochemistry",
    "question": "What is the mechanism of action of Drug S?",
    "options": [
      "Option A for 563",
      "Option B for 563",
      "Option C for 563",
      "Option D for 563"
    ],
    "answer": "Option A for 563",
    "explanation": "Drug S works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 563)."
  },
  {
    "id": 564,
    "topic": "Medicine",
    "question": "What is the mechanism of action of Drug T?",
    "options": [
      "Option A for 564",
      "Option B for 564",
      "Option C for 564",
      "Option D for 564"
    ],
    "answer": "Option B for 564",
    "explanation": "Drug T works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 564)."
  },
  {
    "id": 565,
    "topic": "Pathology",
    "question": "What is the mechanism of action of Drug U?",
    "options": [
      "Option A for 565",
      "Option B for 565",
      "Option C for 565",
      "Option D for 565"
    ],
    "answer": "Option C for 565",
    "explanation": "Drug U works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 565)."
  },
  {
    "id": 566,
    "topic": "Physiology",
    "question": "What is the mechanism of action of Drug V?",
    "options": [
      "Option A for 566",
      "Option B for 566",
      "Option C for 566",
      "Option D for 566"
    ],
    "answer": "Option D for 566",
    "explanation": "Drug V works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 566)."
  },
  {
    "id": 567,
    "topic": "Community Medicine",
    "question": "What is the mechanism of action of Drug W?",
    "options": [
      "Option A for 567",
      "Option B for 567",
      "Option C for 567",
      "Option D for 567"
    ],
    "answer": "Option A for 567",
    "explanation": "Drug W works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 567)."
  },
  {
    "id": 568,
    "topic": "Medicine",
    "question": "What is the mechanism of action of Drug X?",
    "options": [
      "Option A for 568",
      "Option B for 568",
      "Option C for 568",
      "Option D for 568"
    ],
    "answer": "Option B for 568",
    "explanation": "Drug X works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 568)."
  },
  {
    "id": 569,
    "topic": "Microbiology",
    "question": "What is the mechanism of action of Drug Y?",
    "options": [
      "Option A for 569",
      "Option B for 569",
      "Option C for 569",
      "Option D for 569"
    ],
    "answer": "Option C for 569",
    "explanation": "Drug Y works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 569)."
  },
  {
    "id": 570,
    "topic": "OBG",
    "question": "What is the mechanism of action of Drug Z?",
    "options": [
      "Option A for 570",
      "Option B for 570",
      "Option C for 570",
      "Option D for 570"
    ],
    "answer": "Option D for 570",
    "explanation": "Drug Z works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 570)."
  },
  {
    "id": 571,
    "topic": "Medicine",
    "question": "What is the mechanism of action of Drug A?",
    "options": [
      "Option A for 571",
      "Option B for 571",
      "Option C for 571",
      "Option D for 571"
    ],
    "answer": "Option A for 571",
    "explanation": "Drug A works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 571)."
  },
  {
    "id": 572,
    "topic": "Surgery",
    "question": "What is the mechanism of action of Drug B?",
    "options": [
      "Option A for 572",
      "Option B for 572",
      "Option C for 572",
      "Option D for 572"
    ],
    "answer": "Option B for 572",
    "explanation": "Drug B works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 572)."
  },
  {
    "id": 573,
    "topic": "Surgery",
    "question": "What is the mechanism of action of Drug C?",
    "options": [
      "Option A for 573",
      "Option B for 573",
      "Option C for 573",
      "Option D for 573"
    ],
    "answer": "Option C for 573",
    "explanation": "Drug C works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 573)."
  },
  {
    "id": 574,
    "topic": "Surgery",
    "question": "What is the mechanism of action of Drug D?",
    "options": [
      "Option A for 574",
      "Option B for 574",
      "Option C for 574",
      "Option D for 574"
    ],
    "answer": "Option D for 574",
    "explanation": "Drug D works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 574)."
  },
  {
    "id": 575,
    "topic": "Surgery",
    "question": "What is the mechanism of action of Drug E?",
    "options": [
      "Option A for 575",
      "Option B for 575",
      "Option C for 575",
      "Option D for 575"
    ],
    "answer": "Option A for 575",
    "explanation": "Drug E works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 575)."
  },
  {
    "id": 576,
    "topic": "Anatomy",
    "question": "What is the mechanism of action of Drug F?",
    "options": [
      "Option A for 576",
      "Option B for 576",
      "Option C for 576",
      "Option D for 576"
    ],
    "answer": "Option B for 576",
    "explanation": "Drug F works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 576)."
  },
  {
    "id": 577,
    "topic": "Community Medicine",
    "question": "What is the mechanism of action of Drug G?",
    "options": [
      "Option A for 577",
      "Option B for 577",
      "Option C for 577",
      "Option D for 577"
    ],
    "answer": "Option C for 577",
    "explanation": "Drug G works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 577)."
  },
  {
    "id": 578,
    "topic": "Medicine",
    "question": "What is the mechanism of action of Drug H?",
    "options": [
      "Option A for 578",
      "Option B for 578",
      "Option C for 578",
      "Option D for 578"
    ],
    "answer": "Option D for 578",
    "explanation": "Drug H works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 578)."
  },
  {
    "id": 579,
    "topic": "Biochemistry",
    "question": "What is the mechanism of action of Drug I?",
    "options": [
      "Option A for 579",
      "Option B for 579",
      "Option C for 579",
      "Option D for 579"
    ],
    "answer": "Option A for 579",
    "explanation": "Drug I works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 579)."
  },
  {
    "id": 580,
    "topic": "Biochemistry",
    "question": "What is the mechanism of action of Drug J?",
    "options": [
      "Option A for 580",
      "Option B for 580",
      "Option C for 580",
      "Option D for 580"
    ],
    "answer": "Option B for 580",
    "explanation": "Drug J works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 580)."
  },
  {
    "id": 581,
    "topic": "OBG",
    "question": "What is the mechanism of action of Drug K?",
    "options": [
      "Option A for 581",
      "Option B for 581",
      "Option C for 581",
      "Option D for 581"
    ],
    "answer": "Option C for 581",
    "explanation": "Drug K works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 581)."
  },
  {
    "id": 582,
    "topic": "Biochemistry",
    "question": "What is the mechanism of action of Drug L?",
    "options": [
      "Option A for 582",
      "Option B for 582",
      "Option C for 582",
      "Option D for 582"
    ],
    "answer": "Option D for 582",
    "explanation": "Drug L works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 582)."
  },
  {
    "id": 583,
    "topic": "OBG",
    "question": "What is the mechanism of action of Drug M?",
    "options": [
      "Option A for 583",
      "Option B for 583",
      "Option C for 583",
      "Option D for 583"
    ],
    "answer": "Option A for 583",
    "explanation": "Drug M works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 583)."
  },
  {
    "id": 584,
    "topic": "Anatomy",
    "question": "What is the mechanism of action of Drug N?",
    "options": [
      "Option A for 584",
      "Option B for 584",
      "Option C for 584",
      "Option D for 584"
    ],
    "answer": "Option B for 584",
    "explanation": "Drug N works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 584)."
  },
  {
    "id": 585,
    "topic": "Pharmacology",
    "question": "What is the mechanism of action of Drug O?",
    "options": [
      "Option A for 585",
      "Option B for 585",
      "Option C for 585",
      "Option D for 585"
    ],
    "answer": "Option C for 585",
    "explanation": "Drug O works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 585)."
  },
  {
    "id": 586,
    "topic": "OBG",
    "question": "What is the mechanism of action of Drug P?",
    "options": [
      "Option A for 586",
      "Option B for 586",
      "Option C for 586",
      "Option D for 586"
    ],
    "answer": "Option D for 586",
    "explanation": "Drug P works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 586)."
  },
  {
    "id": 587,
    "topic": "Medicine",
    "question": "What is the mechanism of action of Drug Q?",
    "options": [
      "Option A for 587",
      "Option B for 587",
      "Option C for 587",
      "Option D for 587"
    ],
    "answer": "Option A for 587",
    "explanation": "Drug Q works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 587)."
  },
  {
    "id": 588,
    "topic": "Anatomy",
    "question": "What is the mechanism of action of Drug R?",
    "options": [
      "Option A for 588",
      "Option B for 588",
      "Option C for 588",
      "Option D for 588"
    ],
    "answer": "Option B for 588",
    "explanation": "Drug R works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 588)."
  },
  {
    "id": 589,
    "topic": "Biochemistry",
    "question": "What is the mechanism of action of Drug S?",
    "options": [
      "Option A for 589",
      "Option B for 589",
      "Option C for 589",
      "Option D for 589"
    ],
    "answer": "Option C for 589",
    "explanation": "Drug S works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 589)."
  },
  {
    "id": 590,
    "topic": "Anatomy",
    "question": "What is the mechanism of action of Drug T?",
    "options": [
      "Option A for 590",
      "Option B for 590",
      "Option C for 590",
      "Option D for 590"
    ],
    "answer": "Option D for 590",
    "explanation": "Drug T works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 590)."
  },
  {
    "id": 591,
    "topic": "Community Medicine",
    "question": "What is the mechanism of action of Drug U?",
    "options": [
      "Option A for 591",
      "Option B for 591",
      "Option C for 591",
      "Option D for 591"
    ],
    "answer": "Option A for 591",
    "explanation": "Drug U works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 591)."
  },
  {
    "id": 592,
    "topic": "Surgery",
    "question": "What is the mechanism of action of Drug V?",
    "options": [
      "Option A for 592",
      "Option B for 592",
      "Option C for 592",
      "Option D for 592"
    ],
    "answer": "Option B for 592",
    "explanation": "Drug V works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 592)."
  },
  {
    "id": 593,
    "topic": "Pathology",
    "question": "What is the mechanism of action of Drug W?",
    "options": [
      "Option A for 593",
      "Option B for 593",
      "Option C for 593",
      "Option D for 593"
    ],
    "answer": "Option C for 593",
    "explanation": "Drug W works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 593)."
  },
  {
    "id": 594,
    "topic": "Physiology",
    "question": "What is the mechanism of action of Drug X?",
    "options": [
      "Option A for 594",
      "Option B for 594",
      "Option C for 594",
      "Option D for 594"
    ],
    "answer": "Option D for 594",
    "explanation": "Drug X works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 594)."
  },
  {
    "id": 595,
    "topic": "Anatomy",
    "question": "What is the mechanism of action of Drug Y?",
    "options": [
      "Option A for 595",
      "Option B for 595",
      "Option C for 595",
      "Option D for 595"
    ],
    "answer": "Option A for 595",
    "explanation": "Drug Y works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 595)."
  },
  {
    "id": 596,
    "topic": "Physiology",
    "question": "What is the mechanism of action of Drug Z?",
    "options": [
      "Option A for 596",
      "Option B for 596",
      "Option C for 596",
      "Option D for 596"
    ],
    "answer": "Option B for 596",
    "explanation": "Drug Z works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 596)."
  },
  {
    "id": 597,
    "topic": "Community Medicine",
    "question": "What is the mechanism of action of Drug A?",
    "options": [
      "Option A for 597",
      "Option B for 597",
      "Option C for 597",
      "Option D for 597"
    ],
    "answer": "Option C for 597",
    "explanation": "Drug A works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 597)."
  },
  {
    "id": 598,
    "topic": "Physiology",
    "question": "What is the mechanism of action of Drug B?",
    "options": [
      "Option A for 598",
      "Option B for 598",
      "Option C for 598",
      "Option D for 598"
    ],
    "answer": "Option D for 598",
    "explanation": "Drug B works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 598)."
  },
  {
    "id": 599,
    "topic": "Pathology",
    "question": "What is the mechanism of action of Drug C?",
    "options": [
      "Option A for 599",
      "Option B for 599",
      "Option C for 599",
      "Option D for 599"
    ],
    "answer": "Option A for 599",
    "explanation": "Drug C works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 599)."
  },
  {
    "id": 600,
    "topic": "Community Medicine",
    "question": "What is the mechanism of action of Drug D?",
    "options": [
      "Option A for 600",
      "Option B for 600",
      "Option C for 600",
      "Option D for 600"
    ],
    "answer": "Option B for 600",
    "explanation": "Drug D works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 600)."
  },
  {
    "id": 601,
    "topic": "OBG",
    "question": "What is the mechanism of action of Drug E?",
    "options": [
      "Option A for 601",
      "Option B for 601",
      "Option C for 601",
      "Option D for 601"
    ],
    "answer": "Option C for 601",
    "explanation": "Drug E works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 601)."
  },
  {
    "id": 602,
    "topic": "Physiology",
    "question": "What is the mechanism of action of Drug F?",
    "options": [
      "Option A for 602",
      "Option B for 602",
      "Option C for 602",
      "Option D for 602"
    ],
    "answer": "Option D for 602",
    "explanation": "Drug F works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 602)."
  },
  {
    "id": 603,
    "topic": "Pharmacology",
    "question": "What is the mechanism of action of Drug G?",
    "options": [
      "Option A for 603",
      "Option B for 603",
      "Option C for 603",
      "Option D for 603"
    ],
    "answer": "Option A for 603",
    "explanation": "Drug G works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 603)."
  },
  {
    "id": 604,
    "topic": "Physiology",
    "question": "What is the mechanism of action of Drug H?",
    "options": [
      "Option A for 604",
      "Option B for 604",
      "Option C for 604",
      "Option D for 604"
    ],
    "answer": "Option B for 604",
    "explanation": "Drug H works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 604)."
  },
  {
    "id": 605,
    "topic": "Community Medicine",
    "question": "What is the mechanism of action of Drug I?",
    "options": [
      "Option A for 605",
      "Option B for 605",
      "Option C for 605",
      "Option D for 605"
    ],
    "answer": "Option C for 605",
    "explanation": "Drug I works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 605)."
  },
  {
    "id": 606,
    "topic": "OBG",
    "question": "What is the mechanism of action of Drug J?",
    "options": [
      "Option A for 606",
      "Option B for 606",
      "Option C for 606",
      "Option D for 606"
    ],
    "answer": "Option D for 606",
    "explanation": "Drug J works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 606)."
  },
  {
    "id": 607,
    "topic": "Community Medicine",
    "question": "What is the mechanism of action of Drug K?",
    "options": [
      "Option A for 607",
      "Option B for 607",
      "Option C for 607",
      "Option D for 607"
    ],
    "answer": "Option A for 607",
    "explanation": "Drug K works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 607)."
  },
  {
    "id": 608,
    "topic": "Surgery",
    "question": "What is the mechanism of action of Drug L?",
    "options": [
      "Option A for 608",
      "Option B for 608",
      "Option C for 608",
      "Option D for 608"
    ],
    "answer": "Option B for 608",
    "explanation": "Drug L works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 608)."
  },
  {
    "id": 609,
    "topic": "Anatomy",
    "question": "What is the mechanism of action of Drug M?",
    "options": [
      "Option A for 609",
      "Option B for 609",
      "Option C for 609",
      "Option D for 609"
    ],
    "answer": "Option C for 609",
    "explanation": "Drug M works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 609)."
  },
  {
    "id": 610,
    "topic": "Physiology",
    "question": "What is the mechanism of action of Drug N?",
    "options": [
      "Option A for 610",
      "Option B for 610",
      "Option C for 610",
      "Option D for 610"
    ],
    "answer": "Option D for 610",
    "explanation": "Drug N works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 610)."
  },
  {
    "id": 611,
    "topic": "Surgery",
    "question": "What is the mechanism of action of Drug O?",
    "options": [
      "Option A for 611",
      "Option B for 611",
      "Option C for 611",
      "Option D for 611"
    ],
    "answer": "Option A for 611",
    "explanation": "Drug O works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 611)."
  },
  {
    "id": 612,
    "topic": "Surgery",
    "question": "What is the mechanism of action of Drug P?",
    "options": [
      "Option A for 612",
      "Option B for 612",
      "Option C for 612",
      "Option D for 612"
    ],
    "answer": "Option B for 612",
    "explanation": "Drug P works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 612)."
  },
  {
    "id": 613,
    "topic": "Pharmacology",
    "question": "What is the mechanism of action of Drug Q?",
    "options": [
      "Option A for 613",
      "Option B for 613",
      "Option C for 613",
      "Option D for 613"
    ],
    "answer": "Option C for 613",
    "explanation": "Drug Q works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 613)."
  },
  {
    "id": 614,
    "topic": "Pharmacology",
    "question": "What is the mechanism of action of Drug R?",
    "options": [
      "Option A for 614",
      "Option B for 614",
      "Option C for 614",
      "Option D for 614"
    ],
    "answer": "Option D for 614",
    "explanation": "Drug R works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 614)."
  },
  {
    "id": 615,
    "topic": "Medicine",
    "question": "What is the mechanism of action of Drug S?",
    "options": [
      "Option A for 615",
      "Option B for 615",
      "Option C for 615",
      "Option D for 615"
    ],
    "answer": "Option A for 615",
    "explanation": "Drug S works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 615)."
  },
  {
    "id": 616,
    "topic": "Medicine",
    "question": "What is the mechanism of action of Drug T?",
    "options": [
      "Option A for 616",
      "Option B for 616",
      "Option C for 616",
      "Option D for 616"
    ],
    "answer": "Option B for 616",
    "explanation": "Drug T works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 616)."
  },
  {
    "id": 617,
    "topic": "Pathology",
    "question": "What is the mechanism of action of Drug U?",
    "options": [
      "Option A for 617",
      "Option B for 617",
      "Option C for 617",
      "Option D for 617"
    ],
    "answer": "Option C for 617",
    "explanation": "Drug U works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 617)."
  },
  {
    "id": 618,
    "topic": "Biochemistry",
    "question": "What is the mechanism of action of Drug V?",
    "options": [
      "Option A for 618",
      "Option B for 618",
      "Option C for 618",
      "Option D for 618"
    ],
    "answer": "Option D for 618",
    "explanation": "Drug V works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 618)."
  },
  {
    "id": 619,
    "topic": "Pharmacology",
    "question": "What is the mechanism of action of Drug W?",
    "options": [
      "Option A for 619",
      "Option B for 619",
      "Option C for 619",
      "Option D for 619"
    ],
    "answer": "Option A for 619",
    "explanation": "Drug W works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 619)."
  },
  {
    "id": 620,
    "topic": "Community Medicine",
    "question": "What is the mechanism of action of Drug X?",
    "options": [
      "Option A for 620",
      "Option B for 620",
      "Option C for 620",
      "Option D for 620"
    ],
    "answer": "Option B for 620",
    "explanation": "Drug X works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 620)."
  },
  {
    "id": 621,
    "topic": "Medicine",
    "question": "What is the mechanism of action of Drug Y?",
    "options": [
      "Option A for 621",
      "Option B for 621",
      "Option C for 621",
      "Option D for 621"
    ],
    "answer": "Option C for 621",
    "explanation": "Drug Y works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 621)."
  },
  {
    "id": 622,
    "topic": "Pathology",
    "question": "What is the mechanism of action of Drug Z?",
    "options": [
      "Option A for 622",
      "Option B for 622",
      "Option C for 622",
      "Option D for 622"
    ],
    "answer": "Option D for 622",
    "explanation": "Drug Z works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 622)."
  },
  {
    "id": 623,
    "topic": "Community Medicine",
    "question": "What is the mechanism of action of Drug A?",
    "options": [
      "Option A for 623",
      "Option B for 623",
      "Option C for 623",
      "Option D for 623"
    ],
    "answer": "Option A for 623",
    "explanation": "Drug A works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 623)."
  },
  {
    "id": 624,
    "topic": "Pathology",
    "question": "What is the mechanism of action of Drug B?",
    "options": [
      "Option A for 624",
      "Option B for 624",
      "Option C for 624",
      "Option D for 624"
    ],
    "answer": "Option B for 624",
    "explanation": "Drug B works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 624)."
  },
  {
    "id": 625,
    "topic": "Community Medicine",
    "question": "What is the mechanism of action of Drug C?",
    "options": [
      "Option A for 625",
      "Option B for 625",
      "Option C for 625",
      "Option D for 625"
    ],
    "answer": "Option C for 625",
    "explanation": "Drug C works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 625)."
  },
  {
    "id": 626,
    "topic": "Surgery",
    "question": "What is the mechanism of action of Drug D?",
    "options": [
      "Option A for 626",
      "Option B for 626",
      "Option C for 626",
      "Option D for 626"
    ],
    "answer": "Option D for 626",
    "explanation": "Drug D works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 626)."
  },
  {
    "id": 627,
    "topic": "Microbiology",
    "question": "What is the mechanism of action of Drug E?",
    "options": [
      "Option A for 627",
      "Option B for 627",
      "Option C for 627",
      "Option D for 627"
    ],
    "answer": "Option A for 627",
    "explanation": "Drug E works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 627)."
  },
  {
    "id": 628,
    "topic": "Physiology",
    "question": "What is the mechanism of action of Drug F?",
    "options": [
      "Option A for 628",
      "Option B for 628",
      "Option C for 628",
      "Option D for 628"
    ],
    "answer": "Option B for 628",
    "explanation": "Drug F works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 628)."
  },
  {
    "id": 629,
    "topic": "Pharmacology",
    "question": "What is the mechanism of action of Drug G?",
    "options": [
      "Option A for 629",
      "Option B for 629",
      "Option C for 629",
      "Option D for 629"
    ],
    "answer": "Option C for 629",
    "explanation": "Drug G works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 629)."
  },
  {
    "id": 630,
    "topic": "Pharmacology",
    "question": "What is the mechanism of action of Drug H?",
    "options": [
      "Option A for 630",
      "Option B for 630",
      "Option C for 630",
      "Option D for 630"
    ],
    "answer": "Option D for 630",
    "explanation": "Drug H works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 630)."
  },
  {
    "id": 631,
    "topic": "Physiology",
    "question": "What is the mechanism of action of Drug I?",
    "options": [
      "Option A for 631",
      "Option B for 631",
      "Option C for 631",
      "Option D for 631"
    ],
    "answer": "Option A for 631",
    "explanation": "Drug I works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 631)."
  },
  {
    "id": 632,
    "topic": "Surgery",
    "question": "What is the mechanism of action of Drug J?",
    "options": [
      "Option A for 632",
      "Option B for 632",
      "Option C for 632",
      "Option D for 632"
    ],
    "answer": "Option B for 632",
    "explanation": "Drug J works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 632)."
  },
  {
    "id": 633,
    "topic": "Pharmacology",
    "question": "What is the mechanism of action of Drug K?",
    "options": [
      "Option A for 633",
      "Option B for 633",
      "Option C for 633",
      "Option D for 633"
    ],
    "answer": "Option C for 633",
    "explanation": "Drug K works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 633)."
  },
  {
    "id": 634,
    "topic": "Pathology",
    "question": "What is the mechanism of action of Drug L?",
    "options": [
      "Option A for 634",
      "Option B for 634",
      "Option C for 634",
      "Option D for 634"
    ],
    "answer": "Option D for 634",
    "explanation": "Drug L works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 634)."
  },
  {
    "id": 635,
    "topic": "Surgery",
    "question": "What is the mechanism of action of Drug M?",
    "options": [
      "Option A for 635",
      "Option B for 635",
      "Option C for 635",
      "Option D for 635"
    ],
    "answer": "Option A for 635",
    "explanation": "Drug M works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 635)."
  },
  {
    "id": 636,
    "topic": "Anatomy",
    "question": "What is the mechanism of action of Drug N?",
    "options": [
      "Option A for 636",
      "Option B for 636",
      "Option C for 636",
      "Option D for 636"
    ],
    "answer": "Option B for 636",
    "explanation": "Drug N works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 636)."
  },
  {
    "id": 637,
    "topic": "Biochemistry",
    "question": "What is the mechanism of action of Drug O?",
    "options": [
      "Option A for 637",
      "Option B for 637",
      "Option C for 637",
      "Option D for 637"
    ],
    "answer": "Option C for 637",
    "explanation": "Drug O works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 637)."
  },
  {
    "id": 638,
    "topic": "Physiology",
    "question": "What is the mechanism of action of Drug P?",
    "options": [
      "Option A for 638",
      "Option B for 638",
      "Option C for 638",
      "Option D for 638"
    ],
    "answer": "Option D for 638",
    "explanation": "Drug P works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 638)."
  },
  {
    "id": 639,
    "topic": "Pharmacology",
    "question": "What is the mechanism of action of Drug Q?",
    "options": [
      "Option A for 639",
      "Option B for 639",
      "Option C for 639",
      "Option D for 639"
    ],
    "answer": "Option A for 639",
    "explanation": "Drug Q works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 639)."
  },
  {
    "id": 640,
    "topic": "Community Medicine",
    "question": "What is the mechanism of action of Drug R?",
    "options": [
      "Option A for 640",
      "Option B for 640",
      "Option C for 640",
      "Option D for 640"
    ],
    "answer": "Option B for 640",
    "explanation": "Drug R works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 640)."
  },
  {
    "id": 641,
    "topic": "Community Medicine",
    "question": "What is the mechanism of action of Drug S?",
    "options": [
      "Option A for 641",
      "Option B for 641",
      "Option C for 641",
      "Option D for 641"
    ],
    "answer": "Option C for 641",
    "explanation": "Drug S works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 641)."
  },
  {
    "id": 642,
    "topic": "Pathology",
    "question": "What is the mechanism of action of Drug T?",
    "options": [
      "Option A for 642",
      "Option B for 642",
      "Option C for 642",
      "Option D for 642"
    ],
    "answer": "Option D for 642",
    "explanation": "Drug T works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 642)."
  },
  {
    "id": 643,
    "topic": "Surgery",
    "question": "What is the mechanism of action of Drug U?",
    "options": [
      "Option A for 643",
      "Option B for 643",
      "Option C for 643",
      "Option D for 643"
    ],
    "answer": "Option A for 643",
    "explanation": "Drug U works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 643)."
  },
  {
    "id": 644,
    "topic": "Community Medicine",
    "question": "What is the mechanism of action of Drug V?",
    "options": [
      "Option A for 644",
      "Option B for 644",
      "Option C for 644",
      "Option D for 644"
    ],
    "answer": "Option B for 644",
    "explanation": "Drug V works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 644)."
  },
  {
    "id": 645,
    "topic": "Pharmacology",
    "question": "What is the mechanism of action of Drug W?",
    "options": [
      "Option A for 645",
      "Option B for 645",
      "Option C for 645",
      "Option D for 645"
    ],
    "answer": "Option C for 645",
    "explanation": "Drug W works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 645)."
  },
  {
    "id": 646,
    "topic": "Anatomy",
    "question": "What is the mechanism of action of Drug X?",
    "options": [
      "Option A for 646",
      "Option B for 646",
      "Option C for 646",
      "Option D for 646"
    ],
    "answer": "Option D for 646",
    "explanation": "Drug X works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 646)."
  },
  {
    "id": 647,
    "topic": "Physiology",
    "question": "What is the mechanism of action of Drug Y?",
    "options": [
      "Option A for 647",
      "Option B for 647",
      "Option C for 647",
      "Option D for 647"
    ],
    "answer": "Option A for 647",
    "explanation": "Drug Y works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 647)."
  },
  {
    "id": 648,
    "topic": "Physiology",
    "question": "What is the mechanism of action of Drug Z?",
    "options": [
      "Option A for 648",
      "Option B for 648",
      "Option C for 648",
      "Option D for 648"
    ],
    "answer": "Option B for 648",
    "explanation": "Drug Z works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 648)."
  },
  {
    "id": 649,
    "topic": "Pharmacology",
    "question": "What is the mechanism of action of Drug A?",
    "options": [
      "Option A for 649",
      "Option B for 649",
      "Option C for 649",
      "Option D for 649"
    ],
    "answer": "Option C for 649",
    "explanation": "Drug A works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 649)."
  },
  {
    "id": 650,
    "topic": "Pathology",
    "question": "What is the mechanism of action of Drug B?",
    "options": [
      "Option A for 650",
      "Option B for 650",
      "Option C for 650",
      "Option D for 650"
    ],
    "answer": "Option D for 650",
    "explanation": "Drug B works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 650)."
  },
  {
    "id": 651,
    "topic": "Anatomy",
    "question": "What is the mechanism of action of Drug C?",
    "options": [
      "Option A for 651",
      "Option B for 651",
      "Option C for 651",
      "Option D for 651"
    ],
    "answer": "Option A for 651",
    "explanation": "Drug C works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 651)."
  },
  {
    "id": 652,
    "topic": "Microbiology",
    "question": "What is the mechanism of action of Drug D?",
    "options": [
      "Option A for 652",
      "Option B for 652",
      "Option C for 652",
      "Option D for 652"
    ],
    "answer": "Option B for 652",
    "explanation": "Drug D works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 652)."
  },
  {
    "id": 653,
    "topic": "Biochemistry",
    "question": "What is the mechanism of action of Drug E?",
    "options": [
      "Option A for 653",
      "Option B for 653",
      "Option C for 653",
      "Option D for 653"
    ],
    "answer": "Option C for 653",
    "explanation": "Drug E works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 653)."
  },
  {
    "id": 654,
    "topic": "Pharmacology",
    "question": "What is the mechanism of action of Drug F?",
    "options": [
      "Option A for 654",
      "Option B for 654",
      "Option C for 654",
      "Option D for 654"
    ],
    "answer": "Option D for 654",
    "explanation": "Drug F works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 654)."
  },
  {
    "id": 655,
    "topic": "Microbiology",
    "question": "What is the mechanism of action of Drug G?",
    "options": [
      "Option A for 655",
      "Option B for 655",
      "Option C for 655",
      "Option D for 655"
    ],
    "answer": "Option A for 655",
    "explanation": "Drug G works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 655)."
  },
  {
    "id": 656,
    "topic": "Microbiology",
    "question": "What is the mechanism of action of Drug H?",
    "options": [
      "Option A for 656",
      "Option B for 656",
      "Option C for 656",
      "Option D for 656"
    ],
    "answer": "Option B for 656",
    "explanation": "Drug H works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 656)."
  },
  {
    "id": 657,
    "topic": "Microbiology",
    "question": "What is the mechanism of action of Drug I?",
    "options": [
      "Option A for 657",
      "Option B for 657",
      "Option C for 657",
      "Option D for 657"
    ],
    "answer": "Option C for 657",
    "explanation": "Drug I works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 657)."
  },
  {
    "id": 658,
    "topic": "Microbiology",
    "question": "What is the mechanism of action of Drug J?",
    "options": [
      "Option A for 658",
      "Option B for 658",
      "Option C for 658",
      "Option D for 658"
    ],
    "answer": "Option D for 658",
    "explanation": "Drug J works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 658)."
  },
  {
    "id": 659,
    "topic": "Medicine",
    "question": "What is the mechanism of action of Drug K?",
    "options": [
      "Option A for 659",
      "Option B for 659",
      "Option C for 659",
      "Option D for 659"
    ],
    "answer": "Option A for 659",
    "explanation": "Drug K works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 659)."
  },
  {
    "id": 660,
    "topic": "Physiology",
    "question": "What is the mechanism of action of Drug L?",
    "options": [
      "Option A for 660",
      "Option B for 660",
      "Option C for 660",
      "Option D for 660"
    ],
    "answer": "Option B for 660",
    "explanation": "Drug L works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 660)."
  },
  {
    "id": 661,
    "topic": "Microbiology",
    "question": "What is the mechanism of action of Drug M?",
    "options": [
      "Option A for 661",
      "Option B for 661",
      "Option C for 661",
      "Option D for 661"
    ],
    "answer": "Option C for 661",
    "explanation": "Drug M works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 661)."
  },
  {
    "id": 662,
    "topic": "Biochemistry",
    "question": "What is the mechanism of action of Drug N?",
    "options": [
      "Option A for 662",
      "Option B for 662",
      "Option C for 662",
      "Option D for 662"
    ],
    "answer": "Option D for 662",
    "explanation": "Drug N works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 662)."
  },
  {
    "id": 663,
    "topic": "OBG",
    "question": "What is the mechanism of action of Drug O?",
    "options": [
      "Option A for 663",
      "Option B for 663",
      "Option C for 663",
      "Option D for 663"
    ],
    "answer": "Option A for 663",
    "explanation": "Drug O works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 663)."
  },
  {
    "id": 664,
    "topic": "Microbiology",
    "question": "What is the mechanism of action of Drug P?",
    "options": [
      "Option A for 664",
      "Option B for 664",
      "Option C for 664",
      "Option D for 664"
    ],
    "answer": "Option B for 664",
    "explanation": "Drug P works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 664)."
  },
  {
    "id": 665,
    "topic": "Anatomy",
    "question": "What is the mechanism of action of Drug Q?",
    "options": [
      "Option A for 665",
      "Option B for 665",
      "Option C for 665",
      "Option D for 665"
    ],
    "answer": "Option C for 665",
    "explanation": "Drug Q works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 665)."
  },
  {
    "id": 666,
    "topic": "Microbiology",
    "question": "What is the mechanism of action of Drug R?",
    "options": [
      "Option A for 666",
      "Option B for 666",
      "Option C for 666",
      "Option D for 666"
    ],
    "answer": "Option D for 666",
    "explanation": "Drug R works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 666)."
  },
  {
    "id": 667,
    "topic": "Community Medicine",
    "question": "What is the mechanism of action of Drug S?",
    "options": [
      "Option A for 667",
      "Option B for 667",
      "Option C for 667",
      "Option D for 667"
    ],
    "answer": "Option A for 667",
    "explanation": "Drug S works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 667)."
  },
  {
    "id": 668,
    "topic": "Biochemistry",
    "question": "What is the mechanism of action of Drug T?",
    "options": [
      "Option A for 668",
      "Option B for 668",
      "Option C for 668",
      "Option D for 668"
    ],
    "answer": "Option B for 668",
    "explanation": "Drug T works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 668)."
  },
  {
    "id": 669,
    "topic": "Surgery",
    "question": "What is the mechanism of action of Drug U?",
    "options": [
      "Option A for 669",
      "Option B for 669",
      "Option C for 669",
      "Option D for 669"
    ],
    "answer": "Option C for 669",
    "explanation": "Drug U works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 669)."
  },
  {
    "id": 670,
    "topic": "Medicine",
    "question": "What is the mechanism of action of Drug V?",
    "options": [
      "Option A for 670",
      "Option B for 670",
      "Option C for 670",
      "Option D for 670"
    ],
    "answer": "Option D for 670",
    "explanation": "Drug V works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 670)."
  },
  {
    "id": 671,
    "topic": "Pharmacology",
    "question": "What is the mechanism of action of Drug W?",
    "options": [
      "Option A for 671",
      "Option B for 671",
      "Option C for 671",
      "Option D for 671"
    ],
    "answer": "Option A for 671",
    "explanation": "Drug W works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 671)."
  },
  {
    "id": 672,
    "topic": "Surgery",
    "question": "What is the mechanism of action of Drug X?",
    "options": [
      "Option A for 672",
      "Option B for 672",
      "Option C for 672",
      "Option D for 672"
    ],
    "answer": "Option B for 672",
    "explanation": "Drug X works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 672)."
  },
  {
    "id": 673,
    "topic": "Medicine",
    "question": "What is the mechanism of action of Drug Y?",
    "options": [
      "Option A for 673",
      "Option B for 673",
      "Option C for 673",
      "Option D for 673"
    ],
    "answer": "Option C for 673",
    "explanation": "Drug Y works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 673)."
  },
  {
    "id": 674,
    "topic": "Anatomy",
    "question": "What is the mechanism of action of Drug Z?",
    "options": [
      "Option A for 674",
      "Option B for 674",
      "Option C for 674",
      "Option D for 674"
    ],
    "answer": "Option D for 674",
    "explanation": "Drug Z works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 674)."
  },
  {
    "id": 675,
    "topic": "Pharmacology",
    "question": "What is the mechanism of action of Drug A?",
    "options": [
      "Option A for 675",
      "Option B for 675",
      "Option C for 675",
      "Option D for 675"
    ],
    "answer": "Option A for 675",
    "explanation": "Drug A works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 675)."
  },
  {
    "id": 676,
    "topic": "OBG",
    "question": "What is the mechanism of action of Drug B?",
    "options": [
      "Option A for 676",
      "Option B for 676",
      "Option C for 676",
      "Option D for 676"
    ],
    "answer": "Option B for 676",
    "explanation": "Drug B works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 676)."
  },
  {
    "id": 677,
    "topic": "Anatomy",
    "question": "What is the mechanism of action of Drug C?",
    "options": [
      "Option A for 677",
      "Option B for 677",
      "Option C for 677",
      "Option D for 677"
    ],
    "answer": "Option C for 677",
    "explanation": "Drug C works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 677)."
  },
  {
    "id": 678,
    "topic": "Pharmacology",
    "question": "What is the mechanism of action of Drug D?",
    "options": [
      "Option A for 678",
      "Option B for 678",
      "Option C for 678",
      "Option D for 678"
    ],
    "answer": "Option D for 678",
    "explanation": "Drug D works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 678)."
  },
  {
    "id": 679,
    "topic": "OBG",
    "question": "What is the mechanism of action of Drug E?",
    "options": [
      "Option A for 679",
      "Option B for 679",
      "Option C for 679",
      "Option D for 679"
    ],
    "answer": "Option A for 679",
    "explanation": "Drug E works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 679)."
  },
  {
    "id": 680,
    "topic": "Anatomy",
    "question": "What is the mechanism of action of Drug F?",
    "options": [
      "Option A for 680",
      "Option B for 680",
      "Option C for 680",
      "Option D for 680"
    ],
    "answer": "Option B for 680",
    "explanation": "Drug F works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 680)."
  },
  {
    "id": 681,
    "topic": "Biochemistry",
    "question": "What is the mechanism of action of Drug G?",
    "options": [
      "Option A for 681",
      "Option B for 681",
      "Option C for 681",
      "Option D for 681"
    ],
    "answer": "Option C for 681",
    "explanation": "Drug G works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 681)."
  },
  {
    "id": 682,
    "topic": "Biochemistry",
    "question": "What is the mechanism of action of Drug H?",
    "options": [
      "Option A for 682",
      "Option B for 682",
      "Option C for 682",
      "Option D for 682"
    ],
    "answer": "Option D for 682",
    "explanation": "Drug H works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 682)."
  },
  {
    "id": 683,
    "topic": "OBG",
    "question": "What is the mechanism of action of Drug I?",
    "options": [
      "Option A for 683",
      "Option B for 683",
      "Option C for 683",
      "Option D for 683"
    ],
    "answer": "Option A for 683",
    "explanation": "Drug I works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 683)."
  },
  {
    "id": 684,
    "topic": "OBG",
    "question": "What is the mechanism of action of Drug J?",
    "options": [
      "Option A for 684",
      "Option B for 684",
      "Option C for 684",
      "Option D for 684"
    ],
    "answer": "Option B for 684",
    "explanation": "Drug J works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 684)."
  },
  {
    "id": 685,
    "topic": "Pharmacology",
    "question": "What is the mechanism of action of Drug K?",
    "options": [
      "Option A for 685",
      "Option B for 685",
      "Option C for 685",
      "Option D for 685"
    ],
    "answer": "Option C for 685",
    "explanation": "Drug K works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 685)."
  },
  {
    "id": 686,
    "topic": "Pathology",
    "question": "What is the mechanism of action of Drug L?",
    "options": [
      "Option A for 686",
      "Option B for 686",
      "Option C for 686",
      "Option D for 686"
    ],
    "answer": "Option D for 686",
    "explanation": "Drug L works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 686)."
  },
  {
    "id": 687,
    "topic": "Microbiology",
    "question": "What is the mechanism of action of Drug M?",
    "options": [
      "Option A for 687",
      "Option B for 687",
      "Option C for 687",
      "Option D for 687"
    ],
    "answer": "Option A for 687",
    "explanation": "Drug M works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 687)."
  },
  {
    "id": 688,
    "topic": "Physiology",
    "question": "What is the mechanism of action of Drug N?",
    "options": [
      "Option A for 688",
      "Option B for 688",
      "Option C for 688",
      "Option D for 688"
    ],
    "answer": "Option B for 688",
    "explanation": "Drug N works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 688)."
  },
  {
    "id": 689,
    "topic": "Pharmacology",
    "question": "What is the mechanism of action of Drug O?",
    "options": [
      "Option A for 689",
      "Option B for 689",
      "Option C for 689",
      "Option D for 689"
    ],
    "answer": "Option C for 689",
    "explanation": "Drug O works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 689)."
  },
  {
    "id": 690,
    "topic": "Community Medicine",
    "question": "What is the mechanism of action of Drug P?",
    "options": [
      "Option A for 690",
      "Option B for 690",
      "Option C for 690",
      "Option D for 690"
    ],
    "answer": "Option D for 690",
    "explanation": "Drug P works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 690)."
  },
  {
    "id": 691,
    "topic": "Surgery",
    "question": "What is the mechanism of action of Drug Q?",
    "options": [
      "Option A for 691",
      "Option B for 691",
      "Option C for 691",
      "Option D for 691"
    ],
    "answer": "Option A for 691",
    "explanation": "Drug Q works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 691)."
  },
  {
    "id": 692,
    "topic": "Pharmacology",
    "question": "What is the mechanism of action of Drug R?",
    "options": [
      "Option A for 692",
      "Option B for 692",
      "Option C for 692",
      "Option D for 692"
    ],
    "answer": "Option B for 692",
    "explanation": "Drug R works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 692)."
  },
  {
    "id": 693,
    "topic": "Medicine",
    "question": "What is the mechanism of action of Drug S?",
    "options": [
      "Option A for 693",
      "Option B for 693",
      "Option C for 693",
      "Option D for 693"
    ],
    "answer": "Option C for 693",
    "explanation": "Drug S works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 693)."
  },
  {
    "id": 694,
    "topic": "Medicine",
    "question": "What is the mechanism of action of Drug T?",
    "options": [
      "Option A for 694",
      "Option B for 694",
      "Option C for 694",
      "Option D for 694"
    ],
    "answer": "Option D for 694",
    "explanation": "Drug T works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 694)."
  },
  {
    "id": 695,
    "topic": "OBG",
    "question": "What is the mechanism of action of Drug U?",
    "options": [
      "Option A for 695",
      "Option B for 695",
      "Option C for 695",
      "Option D for 695"
    ],
    "answer": "Option A for 695",
    "explanation": "Drug U works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 695)."
  },
  {
    "id": 696,
    "topic": "Biochemistry",
    "question": "What is the mechanism of action of Drug V?",
    "options": [
      "Option A for 696",
      "Option B for 696",
      "Option C for 696",
      "Option D for 696"
    ],
    "answer": "Option B for 696",
    "explanation": "Drug V works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 696)."
  },
  {
    "id": 697,
    "topic": "Anatomy",
    "question": "What is the mechanism of action of Drug W?",
    "options": [
      "Option A for 697",
      "Option B for 697",
      "Option C for 697",
      "Option D for 697"
    ],
    "answer": "Option C for 697",
    "explanation": "Drug W works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 697)."
  },
  {
    "id": 698,
    "topic": "OBG",
    "question": "What is the mechanism of action of Drug X?",
    "options": [
      "Option A for 698",
      "Option B for 698",
      "Option C for 698",
      "Option D for 698"
    ],
    "answer": "Option D for 698",
    "explanation": "Drug X works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 698)."
  },
  {
    "id": 699,
    "topic": "OBG",
    "question": "What is the mechanism of action of Drug Y?",
    "options": [
      "Option A for 699",
      "Option B for 699",
      "Option C for 699",
      "Option D for 699"
    ],
    "answer": "Option A for 699",
    "explanation": "Drug Y works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 699)."
  },
  {
    "id": 700,
    "topic": "OBG",
    "question": "What is the mechanism of action of Drug Z?",
    "options": [
      "Option A for 700",
      "Option B for 700",
      "Option C for 700",
      "Option D for 700"
    ],
    "answer": "Option B for 700",
    "explanation": "Drug Z works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 700)."
  },
  {
    "id": 701,
    "topic": "OBG",
    "question": "What is the mechanism of action of Drug A?",
    "options": [
      "Option A for 701",
      "Option B for 701",
      "Option C for 701",
      "Option D for 701"
    ],
    "answer": "Option C for 701",
    "explanation": "Drug A works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 701)."
  },
  {
    "id": 702,
    "topic": "Surgery",
    "question": "What is the mechanism of action of Drug B?",
    "options": [
      "Option A for 702",
      "Option B for 702",
      "Option C for 702",
      "Option D for 702"
    ],
    "answer": "Option D for 702",
    "explanation": "Drug B works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 702)."
  },
  {
    "id": 703,
    "topic": "Pharmacology",
    "question": "What is the mechanism of action of Drug C?",
    "options": [
      "Option A for 703",
      "Option B for 703",
      "Option C for 703",
      "Option D for 703"
    ],
    "answer": "Option A for 703",
    "explanation": "Drug C works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 703)."
  },
  {
    "id": 704,
    "topic": "Pathology",
    "question": "What is the mechanism of action of Drug D?",
    "options": [
      "Option A for 704",
      "Option B for 704",
      "Option C for 704",
      "Option D for 704"
    ],
    "answer": "Option B for 704",
    "explanation": "Drug D works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 704)."
  },
  {
    "id": 705,
    "topic": "Community Medicine",
    "question": "What is the mechanism of action of Drug E?",
    "options": [
      "Option A for 705",
      "Option B for 705",
      "Option C for 705",
      "Option D for 705"
    ],
    "answer": "Option C for 705",
    "explanation": "Drug E works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 705)."
  },
  {
    "id": 706,
    "topic": "Physiology",
    "question": "What is the mechanism of action of Drug F?",
    "options": [
      "Option A for 706",
      "Option B for 706",
      "Option C for 706",
      "Option D for 706"
    ],
    "answer": "Option D for 706",
    "explanation": "Drug F works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 706)."
  },
  {
    "id": 707,
    "topic": "Anatomy",
    "question": "What is the mechanism of action of Drug G?",
    "options": [
      "Option A for 707",
      "Option B for 707",
      "Option C for 707",
      "Option D for 707"
    ],
    "answer": "Option A for 707",
    "explanation": "Drug G works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 707)."
  },
  {
    "id": 708,
    "topic": "Anatomy",
    "question": "What is the mechanism of action of Drug H?",
    "options": [
      "Option A for 708",
      "Option B for 708",
      "Option C for 708",
      "Option D for 708"
    ],
    "answer": "Option B for 708",
    "explanation": "Drug H works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 708)."
  },
  {
    "id": 709,
    "topic": "OBG",
    "question": "What is the mechanism of action of Drug I?",
    "options": [
      "Option A for 709",
      "Option B for 709",
      "Option C for 709",
      "Option D for 709"
    ],
    "answer": "Option C for 709",
    "explanation": "Drug I works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 709)."
  },
  {
    "id": 710,
    "topic": "Surgery",
    "question": "What is the mechanism of action of Drug J?",
    "options": [
      "Option A for 710",
      "Option B for 710",
      "Option C for 710",
      "Option D for 710"
    ],
    "answer": "Option D for 710",
    "explanation": "Drug J works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 710)."
  },
  {
    "id": 711,
    "topic": "Physiology",
    "question": "What is the mechanism of action of Drug K?",
    "options": [
      "Option A for 711",
      "Option B for 711",
      "Option C for 711",
      "Option D for 711"
    ],
    "answer": "Option A for 711",
    "explanation": "Drug K works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 711)."
  },
  {
    "id": 712,
    "topic": "Anatomy",
    "question": "What is the mechanism of action of Drug L?",
    "options": [
      "Option A for 712",
      "Option B for 712",
      "Option C for 712",
      "Option D for 712"
    ],
    "answer": "Option B for 712",
    "explanation": "Drug L works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 712)."
  },
  {
    "id": 713,
    "topic": "Pathology",
    "question": "What is the mechanism of action of Drug M?",
    "options": [
      "Option A for 713",
      "Option B for 713",
      "Option C for 713",
      "Option D for 713"
    ],
    "answer": "Option C for 713",
    "explanation": "Drug M works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 713)."
  },
  {
    "id": 714,
    "topic": "Biochemistry",
    "question": "What is the mechanism of action of Drug N?",
    "options": [
      "Option A for 714",
      "Option B for 714",
      "Option C for 714",
      "Option D for 714"
    ],
    "answer": "Option D for 714",
    "explanation": "Drug N works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 714)."
  },
  {
    "id": 715,
    "topic": "Community Medicine",
    "question": "What is the mechanism of action of Drug O?",
    "options": [
      "Option A for 715",
      "Option B for 715",
      "Option C for 715",
      "Option D for 715"
    ],
    "answer": "Option A for 715",
    "explanation": "Drug O works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 715)."
  },
  {
    "id": 716,
    "topic": "Pathology",
    "question": "What is the mechanism of action of Drug P?",
    "options": [
      "Option A for 716",
      "Option B for 716",
      "Option C for 716",
      "Option D for 716"
    ],
    "answer": "Option B for 716",
    "explanation": "Drug P works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 716)."
  },
  {
    "id": 717,
    "topic": "OBG",
    "question": "What is the mechanism of action of Drug Q?",
    "options": [
      "Option A for 717",
      "Option B for 717",
      "Option C for 717",
      "Option D for 717"
    ],
    "answer": "Option C for 717",
    "explanation": "Drug Q works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 717)."
  },
  {
    "id": 718,
    "topic": "Surgery",
    "question": "What is the mechanism of action of Drug R?",
    "options": [
      "Option A for 718",
      "Option B for 718",
      "Option C for 718",
      "Option D for 718"
    ],
    "answer": "Option D for 718",
    "explanation": "Drug R works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 718)."
  },
  {
    "id": 719,
    "topic": "Pharmacology",
    "question": "What is the mechanism of action of Drug S?",
    "options": [
      "Option A for 719",
      "Option B for 719",
      "Option C for 719",
      "Option D for 719"
    ],
    "answer": "Option A for 719",
    "explanation": "Drug S works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 719)."
  },
  {
    "id": 720,
    "topic": "OBG",
    "question": "What is the mechanism of action of Drug T?",
    "options": [
      "Option A for 720",
      "Option B for 720",
      "Option C for 720",
      "Option D for 720"
    ],
    "answer": "Option B for 720",
    "explanation": "Drug T works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 720)."
  },
  {
    "id": 721,
    "topic": "Biochemistry",
    "question": "What is the mechanism of action of Drug U?",
    "options": [
      "Option A for 721",
      "Option B for 721",
      "Option C for 721",
      "Option D for 721"
    ],
    "answer": "Option C for 721",
    "explanation": "Drug U works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 721)."
  },
  {
    "id": 722,
    "topic": "OBG",
    "question": "What is the mechanism of action of Drug V?",
    "options": [
      "Option A for 722",
      "Option B for 722",
      "Option C for 722",
      "Option D for 722"
    ],
    "answer": "Option D for 722",
    "explanation": "Drug V works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 722)."
  },
  {
    "id": 723,
    "topic": "Surgery",
    "question": "What is the mechanism of action of Drug W?",
    "options": [
      "Option A for 723",
      "Option B for 723",
      "Option C for 723",
      "Option D for 723"
    ],
    "answer": "Option A for 723",
    "explanation": "Drug W works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 723)."
  },
  {
    "id": 724,
    "topic": "OBG",
    "question": "What is the mechanism of action of Drug X?",
    "options": [
      "Option A for 724",
      "Option B for 724",
      "Option C for 724",
      "Option D for 724"
    ],
    "answer": "Option B for 724",
    "explanation": "Drug X works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 724)."
  },
  {
    "id": 725,
    "topic": "Pathology",
    "question": "What is the mechanism of action of Drug Y?",
    "options": [
      "Option A for 725",
      "Option B for 725",
      "Option C for 725",
      "Option D for 725"
    ],
    "answer": "Option C for 725",
    "explanation": "Drug Y works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 725)."
  },
  {
    "id": 726,
    "topic": "Surgery",
    "question": "What is the mechanism of action of Drug Z?",
    "options": [
      "Option A for 726",
      "Option B for 726",
      "Option C for 726",
      "Option D for 726"
    ],
    "answer": "Option D for 726",
    "explanation": "Drug Z works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 726)."
  },
  {
    "id": 727,
    "topic": "OBG",
    "question": "What is the mechanism of action of Drug A?",
    "options": [
      "Option A for 727",
      "Option B for 727",
      "Option C for 727",
      "Option D for 727"
    ],
    "answer": "Option A for 727",
    "explanation": "Drug A works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 727)."
  },
  {
    "id": 728,
    "topic": "Pathology",
    "question": "What is the mechanism of action of Drug B?",
    "options": [
      "Option A for 728",
      "Option B for 728",
      "Option C for 728",
      "Option D for 728"
    ],
    "answer": "Option B for 728",
    "explanation": "Drug B works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 728)."
  },
  {
    "id": 729,
    "topic": "Medicine",
    "question": "What is the mechanism of action of Drug C?",
    "options": [
      "Option A for 729",
      "Option B for 729",
      "Option C for 729",
      "Option D for 729"
    ],
    "answer": "Option C for 729",
    "explanation": "Drug C works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 729)."
  },
  {
    "id": 730,
    "topic": "Pathology",
    "question": "What is the mechanism of action of Drug D?",
    "options": [
      "Option A for 730",
      "Option B for 730",
      "Option C for 730",
      "Option D for 730"
    ],
    "answer": "Option D for 730",
    "explanation": "Drug D works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 730)."
  },
  {
    "id": 731,
    "topic": "Physiology",
    "question": "What is the mechanism of action of Drug E?",
    "options": [
      "Option A for 731",
      "Option B for 731",
      "Option C for 731",
      "Option D for 731"
    ],
    "answer": "Option A for 731",
    "explanation": "Drug E works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 731)."
  },
  {
    "id": 732,
    "topic": "Anatomy",
    "question": "What is the mechanism of action of Drug F?",
    "options": [
      "Option A for 732",
      "Option B for 732",
      "Option C for 732",
      "Option D for 732"
    ],
    "answer": "Option B for 732",
    "explanation": "Drug F works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 732)."
  },
  {
    "id": 733,
    "topic": "Pathology",
    "question": "What is the mechanism of action of Drug G?",
    "options": [
      "Option A for 733",
      "Option B for 733",
      "Option C for 733",
      "Option D for 733"
    ],
    "answer": "Option C for 733",
    "explanation": "Drug G works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 733)."
  },
  {
    "id": 734,
    "topic": "Pathology",
    "question": "What is the mechanism of action of Drug H?",
    "options": [
      "Option A for 734",
      "Option B for 734",
      "Option C for 734",
      "Option D for 734"
    ],
    "answer": "Option D for 734",
    "explanation": "Drug H works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 734)."
  },
  {
    "id": 735,
    "topic": "Microbiology",
    "question": "What is the mechanism of action of Drug I?",
    "options": [
      "Option A for 735",
      "Option B for 735",
      "Option C for 735",
      "Option D for 735"
    ],
    "answer": "Option A for 735",
    "explanation": "Drug I works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 735)."
  },
  {
    "id": 736,
    "topic": "Anatomy",
    "question": "What is the mechanism of action of Drug J?",
    "options": [
      "Option A for 736",
      "Option B for 736",
      "Option C for 736",
      "Option D for 736"
    ],
    "answer": "Option B for 736",
    "explanation": "Drug J works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 736)."
  },
  {
    "id": 737,
    "topic": "OBG",
    "question": "What is the mechanism of action of Drug K?",
    "options": [
      "Option A for 737",
      "Option B for 737",
      "Option C for 737",
      "Option D for 737"
    ],
    "answer": "Option C for 737",
    "explanation": "Drug K works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 737)."
  },
  {
    "id": 738,
    "topic": "Pathology",
    "question": "What is the mechanism of action of Drug L?",
    "options": [
      "Option A for 738",
      "Option B for 738",
      "Option C for 738",
      "Option D for 738"
    ],
    "answer": "Option D for 738",
    "explanation": "Drug L works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 738)."
  },
  {
    "id": 739,
    "topic": "Pharmacology",
    "question": "What is the mechanism of action of Drug M?",
    "options": [
      "Option A for 739",
      "Option B for 739",
      "Option C for 739",
      "Option D for 739"
    ],
    "answer": "Option A for 739",
    "explanation": "Drug M works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 739)."
  },
  {
    "id": 740,
    "topic": "Community Medicine",
    "question": "What is the mechanism of action of Drug N?",
    "options": [
      "Option A for 740",
      "Option B for 740",
      "Option C for 740",
      "Option D for 740"
    ],
    "answer": "Option B for 740",
    "explanation": "Drug N works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 740)."
  },
  {
    "id": 741,
    "topic": "Microbiology",
    "question": "What is the mechanism of action of Drug O?",
    "options": [
      "Option A for 741",
      "Option B for 741",
      "Option C for 741",
      "Option D for 741"
    ],
    "answer": "Option C for 741",
    "explanation": "Drug O works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 741)."
  },
  {
    "id": 742,
    "topic": "Microbiology",
    "question": "What is the mechanism of action of Drug P?",
    "options": [
      "Option A for 742",
      "Option B for 742",
      "Option C for 742",
      "Option D for 742"
    ],
    "answer": "Option D for 742",
    "explanation": "Drug P works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 742)."
  },
  {
    "id": 743,
    "topic": "Physiology",
    "question": "What is the mechanism of action of Drug Q?",
    "options": [
      "Option A for 743",
      "Option B for 743",
      "Option C for 743",
      "Option D for 743"
    ],
    "answer": "Option A for 743",
    "explanation": "Drug Q works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 743)."
  },
  {
    "id": 744,
    "topic": "Anatomy",
    "question": "What is the mechanism of action of Drug R?",
    "options": [
      "Option A for 744",
      "Option B for 744",
      "Option C for 744",
      "Option D for 744"
    ],
    "answer": "Option B for 744",
    "explanation": "Drug R works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 744)."
  },
  {
    "id": 745,
    "topic": "OBG",
    "question": "What is the mechanism of action of Drug S?",
    "options": [
      "Option A for 745",
      "Option B for 745",
      "Option C for 745",
      "Option D for 745"
    ],
    "answer": "Option C for 745",
    "explanation": "Drug S works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 745)."
  },
  {
    "id": 746,
    "topic": "OBG",
    "question": "What is the mechanism of action of Drug T?",
    "options": [
      "Option A for 746",
      "Option B for 746",
      "Option C for 746",
      "Option D for 746"
    ],
    "answer": "Option D for 746",
    "explanation": "Drug T works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 746)."
  },
  {
    "id": 747,
    "topic": "Community Medicine",
    "question": "What is the mechanism of action of Drug U?",
    "options": [
      "Option A for 747",
      "Option B for 747",
      "Option C for 747",
      "Option D for 747"
    ],
    "answer": "Option A for 747",
    "explanation": "Drug U works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 747)."
  },
  {
    "id": 748,
    "topic": "OBG",
    "question": "What is the mechanism of action of Drug V?",
    "options": [
      "Option A for 748",
      "Option B for 748",
      "Option C for 748",
      "Option D for 748"
    ],
    "answer": "Option B for 748",
    "explanation": "Drug V works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 748)."
  },
  {
    "id": 749,
    "topic": "Surgery",
    "question": "What is the mechanism of action of Drug W?",
    "options": [
      "Option A for 749",
      "Option B for 749",
      "Option C for 749",
      "Option D for 749"
    ],
    "answer": "Option C for 749",
    "explanation": "Drug W works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 749)."
  },
  {
    "id": 750,
    "topic": "Physiology",
    "question": "What is the mechanism of action of Drug X?",
    "options": [
      "Option A for 750",
      "Option B for 750",
      "Option C for 750",
      "Option D for 750"
    ],
    "answer": "Option D for 750",
    "explanation": "Drug X works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 750)."
  },
  {
    "id": 751,
    "topic": "Medicine",
    "question": "What is the mechanism of action of Drug Y?",
    "options": [
      "Option A for 751",
      "Option B for 751",
      "Option C for 751",
      "Option D for 751"
    ],
    "answer": "Option A for 751",
    "explanation": "Drug Y works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 751)."
  },
  {
    "id": 752,
    "topic": "Medicine",
    "question": "What is the mechanism of action of Drug Z?",
    "options": [
      "Option A for 752",
      "Option B for 752",
      "Option C for 752",
      "Option D for 752"
    ],
    "answer": "Option B for 752",
    "explanation": "Drug Z works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 752)."
  },
  {
    "id": 753,
    "topic": "Community Medicine",
    "question": "What is the mechanism of action of Drug A?",
    "options": [
      "Option A for 753",
      "Option B for 753",
      "Option C for 753",
      "Option D for 753"
    ],
    "answer": "Option C for 753",
    "explanation": "Drug A works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 753)."
  },
  {
    "id": 754,
    "topic": "Pathology",
    "question": "What is the mechanism of action of Drug B?",
    "options": [
      "Option A for 754",
      "Option B for 754",
      "Option C for 754",
      "Option D for 754"
    ],
    "answer": "Option D for 754",
    "explanation": "Drug B works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 754)."
  },
  {
    "id": 755,
    "topic": "Surgery",
    "question": "What is the mechanism of action of Drug C?",
    "options": [
      "Option A for 755",
      "Option B for 755",
      "Option C for 755",
      "Option D for 755"
    ],
    "answer": "Option A for 755",
    "explanation": "Drug C works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 755)."
  },
  {
    "id": 756,
    "topic": "Community Medicine",
    "question": "What is the mechanism of action of Drug D?",
    "options": [
      "Option A for 756",
      "Option B for 756",
      "Option C for 756",
      "Option D for 756"
    ],
    "answer": "Option B for 756",
    "explanation": "Drug D works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 756)."
  },
  {
    "id": 757,
    "topic": "Pathology",
    "question": "What is the mechanism of action of Drug E?",
    "options": [
      "Option A for 757",
      "Option B for 757",
      "Option C for 757",
      "Option D for 757"
    ],
    "answer": "Option C for 757",
    "explanation": "Drug E works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 757)."
  },
  {
    "id": 758,
    "topic": "Physiology",
    "question": "What is the mechanism of action of Drug F?",
    "options": [
      "Option A for 758",
      "Option B for 758",
      "Option C for 758",
      "Option D for 758"
    ],
    "answer": "Option D for 758",
    "explanation": "Drug F works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 758)."
  },
  {
    "id": 759,
    "topic": "Community Medicine",
    "question": "What is the mechanism of action of Drug G?",
    "options": [
      "Option A for 759",
      "Option B for 759",
      "Option C for 759",
      "Option D for 759"
    ],
    "answer": "Option A for 759",
    "explanation": "Drug G works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 759)."
  },
  {
    "id": 760,
    "topic": "OBG",
    "question": "What is the mechanism of action of Drug H?",
    "options": [
      "Option A for 760",
      "Option B for 760",
      "Option C for 760",
      "Option D for 760"
    ],
    "answer": "Option B for 760",
    "explanation": "Drug H works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 760)."
  },
  {
    "id": 761,
    "topic": "OBG",
    "question": "What is the mechanism of action of Drug I?",
    "options": [
      "Option A for 761",
      "Option B for 761",
      "Option C for 761",
      "Option D for 761"
    ],
    "answer": "Option C for 761",
    "explanation": "Drug I works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 761)."
  },
  {
    "id": 762,
    "topic": "Community Medicine",
    "question": "What is the mechanism of action of Drug J?",
    "options": [
      "Option A for 762",
      "Option B for 762",
      "Option C for 762",
      "Option D for 762"
    ],
    "answer": "Option D for 762",
    "explanation": "Drug J works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 762)."
  },
  {
    "id": 763,
    "topic": "Pathology",
    "question": "What is the mechanism of action of Drug K?",
    "options": [
      "Option A for 763",
      "Option B for 763",
      "Option C for 763",
      "Option D for 763"
    ],
    "answer": "Option A for 763",
    "explanation": "Drug K works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 763)."
  },
  {
    "id": 764,
    "topic": "Pharmacology",
    "question": "What is the mechanism of action of Drug L?",
    "options": [
      "Option A for 764",
      "Option B for 764",
      "Option C for 764",
      "Option D for 764"
    ],
    "answer": "Option B for 764",
    "explanation": "Drug L works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 764)."
  },
  {
    "id": 765,
    "topic": "Biochemistry",
    "question": "What is the mechanism of action of Drug M?",
    "options": [
      "Option A for 765",
      "Option B for 765",
      "Option C for 765",
      "Option D for 765"
    ],
    "answer": "Option C for 765",
    "explanation": "Drug M works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 765)."
  },
  {
    "id": 766,
    "topic": "OBG",
    "question": "What is the mechanism of action of Drug N?",
    "options": [
      "Option A for 766",
      "Option B for 766",
      "Option C for 766",
      "Option D for 766"
    ],
    "answer": "Option D for 766",
    "explanation": "Drug N works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 766)."
  },
  {
    "id": 767,
    "topic": "Pharmacology",
    "question": "What is the mechanism of action of Drug O?",
    "options": [
      "Option A for 767",
      "Option B for 767",
      "Option C for 767",
      "Option D for 767"
    ],
    "answer": "Option A for 767",
    "explanation": "Drug O works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 767)."
  },
  {
    "id": 768,
    "topic": "Pathology",
    "question": "What is the mechanism of action of Drug P?",
    "options": [
      "Option A for 768",
      "Option B for 768",
      "Option C for 768",
      "Option D for 768"
    ],
    "answer": "Option B for 768",
    "explanation": "Drug P works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 768)."
  },
  {
    "id": 769,
    "topic": "OBG",
    "question": "What is the mechanism of action of Drug Q?",
    "options": [
      "Option A for 769",
      "Option B for 769",
      "Option C for 769",
      "Option D for 769"
    ],
    "answer": "Option C for 769",
    "explanation": "Drug Q works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 769)."
  },
  {
    "id": 770,
    "topic": "Pharmacology",
    "question": "What is the mechanism of action of Drug R?",
    "options": [
      "Option A for 770",
      "Option B for 770",
      "Option C for 770",
      "Option D for 770"
    ],
    "answer": "Option D for 770",
    "explanation": "Drug R works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 770)."
  },
  {
    "id": 771,
    "topic": "Medicine",
    "question": "What is the mechanism of action of Drug S?",
    "options": [
      "Option A for 771",
      "Option B for 771",
      "Option C for 771",
      "Option D for 771"
    ],
    "answer": "Option A for 771",
    "explanation": "Drug S works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 771)."
  },
  {
    "id": 772,
    "topic": "Pathology",
    "question": "What is the mechanism of action of Drug T?",
    "options": [
      "Option A for 772",
      "Option B for 772",
      "Option C for 772",
      "Option D for 772"
    ],
    "answer": "Option B for 772",
    "explanation": "Drug T works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 772)."
  },
  {
    "id": 773,
    "topic": "Surgery",
    "question": "What is the mechanism of action of Drug U?",
    "options": [
      "Option A for 773",
      "Option B for 773",
      "Option C for 773",
      "Option D for 773"
    ],
    "answer": "Option C for 773",
    "explanation": "Drug U works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 773)."
  },
  {
    "id": 774,
    "topic": "Medicine",
    "question": "What is the mechanism of action of Drug V?",
    "options": [
      "Option A for 774",
      "Option B for 774",
      "Option C for 774",
      "Option D for 774"
    ],
    "answer": "Option D for 774",
    "explanation": "Drug V works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 774)."
  },
  {
    "id": 775,
    "topic": "Pathology",
    "question": "What is the mechanism of action of Drug W?",
    "options": [
      "Option A for 775",
      "Option B for 775",
      "Option C for 775",
      "Option D for 775"
    ],
    "answer": "Option A for 775",
    "explanation": "Drug W works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 775)."
  },
  {
    "id": 776,
    "topic": "Microbiology",
    "question": "What is the mechanism of action of Drug X?",
    "options": [
      "Option A for 776",
      "Option B for 776",
      "Option C for 776",
      "Option D for 776"
    ],
    "answer": "Option B for 776",
    "explanation": "Drug X works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 776)."
  },
  {
    "id": 777,
    "topic": "Surgery",
    "question": "What is the mechanism of action of Drug Y?",
    "options": [
      "Option A for 777",
      "Option B for 777",
      "Option C for 777",
      "Option D for 777"
    ],
    "answer": "Option C for 777",
    "explanation": "Drug Y works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 777)."
  },
  {
    "id": 778,
    "topic": "Physiology",
    "question": "What is the mechanism of action of Drug Z?",
    "options": [
      "Option A for 778",
      "Option B for 778",
      "Option C for 778",
      "Option D for 778"
    ],
    "answer": "Option D for 778",
    "explanation": "Drug Z works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 778)."
  },
  {
    "id": 779,
    "topic": "OBG",
    "question": "What is the mechanism of action of Drug A?",
    "options": [
      "Option A for 779",
      "Option B for 779",
      "Option C for 779",
      "Option D for 779"
    ],
    "answer": "Option A for 779",
    "explanation": "Drug A works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 779)."
  },
  {
    "id": 780,
    "topic": "Surgery",
    "question": "What is the mechanism of action of Drug B?",
    "options": [
      "Option A for 780",
      "Option B for 780",
      "Option C for 780",
      "Option D for 780"
    ],
    "answer": "Option B for 780",
    "explanation": "Drug B works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 780)."
  },
  {
    "id": 781,
    "topic": "Pathology",
    "question": "What is the mechanism of action of Drug C?",
    "options": [
      "Option A for 781",
      "Option B for 781",
      "Option C for 781",
      "Option D for 781"
    ],
    "answer": "Option C for 781",
    "explanation": "Drug C works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 781)."
  },
  {
    "id": 782,
    "topic": "Anatomy",
    "question": "What is the mechanism of action of Drug D?",
    "options": [
      "Option A for 782",
      "Option B for 782",
      "Option C for 782",
      "Option D for 782"
    ],
    "answer": "Option D for 782",
    "explanation": "Drug D works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 782)."
  },
  {
    "id": 783,
    "topic": "Surgery",
    "question": "What is the mechanism of action of Drug E?",
    "options": [
      "Option A for 783",
      "Option B for 783",
      "Option C for 783",
      "Option D for 783"
    ],
    "answer": "Option A for 783",
    "explanation": "Drug E works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 783)."
  },
  {
    "id": 784,
    "topic": "Medicine",
    "question": "What is the mechanism of action of Drug F?",
    "options": [
      "Option A for 784",
      "Option B for 784",
      "Option C for 784",
      "Option D for 784"
    ],
    "answer": "Option B for 784",
    "explanation": "Drug F works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 784)."
  },
  {
    "id": 785,
    "topic": "Medicine",
    "question": "What is the mechanism of action of Drug G?",
    "options": [
      "Option A for 785",
      "Option B for 785",
      "Option C for 785",
      "Option D for 785"
    ],
    "answer": "Option C for 785",
    "explanation": "Drug G works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 785)."
  },
  {
    "id": 786,
    "topic": "Surgery",
    "question": "What is the mechanism of action of Drug H?",
    "options": [
      "Option A for 786",
      "Option B for 786",
      "Option C for 786",
      "Option D for 786"
    ],
    "answer": "Option D for 786",
    "explanation": "Drug H works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 786)."
  },
  {
    "id": 787,
    "topic": "Microbiology",
    "question": "What is the mechanism of action of Drug I?",
    "options": [
      "Option A for 787",
      "Option B for 787",
      "Option C for 787",
      "Option D for 787"
    ],
    "answer": "Option A for 787",
    "explanation": "Drug I works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 787)."
  },
  {
    "id": 788,
    "topic": "OBG",
    "question": "What is the mechanism of action of Drug J?",
    "options": [
      "Option A for 788",
      "Option B for 788",
      "Option C for 788",
      "Option D for 788"
    ],
    "answer": "Option B for 788",
    "explanation": "Drug J works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 788)."
  },
  {
    "id": 789,
    "topic": "Surgery",
    "question": "What is the mechanism of action of Drug K?",
    "options": [
      "Option A for 789",
      "Option B for 789",
      "Option C for 789",
      "Option D for 789"
    ],
    "answer": "Option C for 789",
    "explanation": "Drug K works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 789)."
  },
  {
    "id": 790,
    "topic": "Pharmacology",
    "question": "What is the mechanism of action of Drug L?",
    "options": [
      "Option A for 790",
      "Option B for 790",
      "Option C for 790",
      "Option D for 790"
    ],
    "answer": "Option D for 790",
    "explanation": "Drug L works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 790)."
  },
  {
    "id": 791,
    "topic": "Medicine",
    "question": "What is the mechanism of action of Drug M?",
    "options": [
      "Option A for 791",
      "Option B for 791",
      "Option C for 791",
      "Option D for 791"
    ],
    "answer": "Option A for 791",
    "explanation": "Drug M works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 791)."
  },
  {
    "id": 792,
    "topic": "Surgery",
    "question": "What is the mechanism of action of Drug N?",
    "options": [
      "Option A for 792",
      "Option B for 792",
      "Option C for 792",
      "Option D for 792"
    ],
    "answer": "Option B for 792",
    "explanation": "Drug N works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 792)."
  },
  {
    "id": 793,
    "topic": "Biochemistry",
    "question": "What is the mechanism of action of Drug O?",
    "options": [
      "Option A for 793",
      "Option B for 793",
      "Option C for 793",
      "Option D for 793"
    ],
    "answer": "Option C for 793",
    "explanation": "Drug O works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 793)."
  },
  {
    "id": 794,
    "topic": "Surgery",
    "question": "What is the mechanism of action of Drug P?",
    "options": [
      "Option A for 794",
      "Option B for 794",
      "Option C for 794",
      "Option D for 794"
    ],
    "answer": "Option D for 794",
    "explanation": "Drug P works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 794)."
  },
  {
    "id": 795,
    "topic": "Microbiology",
    "question": "What is the mechanism of action of Drug Q?",
    "options": [
      "Option A for 795",
      "Option B for 795",
      "Option C for 795",
      "Option D for 795"
    ],
    "answer": "Option A for 795",
    "explanation": "Drug Q works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 795)."
  },
  {
    "id": 796,
    "topic": "Anatomy",
    "question": "What is the mechanism of action of Drug R?",
    "options": [
      "Option A for 796",
      "Option B for 796",
      "Option C for 796",
      "Option D for 796"
    ],
    "answer": "Option B for 796",
    "explanation": "Drug R works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 796)."
  },
  {
    "id": 797,
    "topic": "Biochemistry",
    "question": "What is the mechanism of action of Drug S?",
    "options": [
      "Option A for 797",
      "Option B for 797",
      "Option C for 797",
      "Option D for 797"
    ],
    "answer": "Option C for 797",
    "explanation": "Drug S works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 797)."
  },
  {
    "id": 798,
    "topic": "Pharmacology",
    "question": "What is the mechanism of action of Drug T?",
    "options": [
      "Option A for 798",
      "Option B for 798",
      "Option C for 798",
      "Option D for 798"
    ],
    "answer": "Option D for 798",
    "explanation": "Drug T works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 798)."
  },
  {
    "id": 799,
    "topic": "Microbiology",
    "question": "What is the mechanism of action of Drug U?",
    "options": [
      "Option A for 799",
      "Option B for 799",
      "Option C for 799",
      "Option D for 799"
    ],
    "answer": "Option A for 799",
    "explanation": "Drug U works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 799)."
  },
  {
    "id": 800,
    "topic": "Medicine",
    "question": "What is the mechanism of action of Drug V?",
    "options": [
      "Option A for 800",
      "Option B for 800",
      "Option C for 800",
      "Option D for 800"
    ],
    "answer": "Option B for 800",
    "explanation": "Drug V works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 800)."
  },
  {
    "id": 801,
    "topic": "Microbiology",
    "question": "What is the mechanism of action of Drug W?",
    "options": [
      "Option A for 801",
      "Option B for 801",
      "Option C for 801",
      "Option D for 801"
    ],
    "answer": "Option C for 801",
    "explanation": "Drug W works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 801)."
  },
  {
    "id": 802,
    "topic": "Community Medicine",
    "question": "What is the mechanism of action of Drug X?",
    "options": [
      "Option A for 802",
      "Option B for 802",
      "Option C for 802",
      "Option D for 802"
    ],
    "answer": "Option D for 802",
    "explanation": "Drug X works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 802)."
  },
  {
    "id": 803,
    "topic": "Biochemistry",
    "question": "What is the mechanism of action of Drug Y?",
    "options": [
      "Option A for 803",
      "Option B for 803",
      "Option C for 803",
      "Option D for 803"
    ],
    "answer": "Option A for 803",
    "explanation": "Drug Y works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 803)."
  },
  {
    "id": 804,
    "topic": "Anatomy",
    "question": "What is the mechanism of action of Drug Z?",
    "options": [
      "Option A for 804",
      "Option B for 804",
      "Option C for 804",
      "Option D for 804"
    ],
    "answer": "Option B for 804",
    "explanation": "Drug Z works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 804)."
  },
  {
    "id": 805,
    "topic": "Medicine",
    "question": "What is the mechanism of action of Drug A?",
    "options": [
      "Option A for 805",
      "Option B for 805",
      "Option C for 805",
      "Option D for 805"
    ],
    "answer": "Option C for 805",
    "explanation": "Drug A works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 805)."
  },
  {
    "id": 806,
    "topic": "Anatomy",
    "question": "What is the mechanism of action of Drug B?",
    "options": [
      "Option A for 806",
      "Option B for 806",
      "Option C for 806",
      "Option D for 806"
    ],
    "answer": "Option D for 806",
    "explanation": "Drug B works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 806)."
  },
  {
    "id": 807,
    "topic": "Pathology",
    "question": "What is the mechanism of action of Drug C?",
    "options": [
      "Option A for 807",
      "Option B for 807",
      "Option C for 807",
      "Option D for 807"
    ],
    "answer": "Option A for 807",
    "explanation": "Drug C works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 807)."
  },
  {
    "id": 808,
    "topic": "Pathology",
    "question": "What is the mechanism of action of Drug D?",
    "options": [
      "Option A for 808",
      "Option B for 808",
      "Option C for 808",
      "Option D for 808"
    ],
    "answer": "Option B for 808",
    "explanation": "Drug D works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 808)."
  },
  {
    "id": 809,
    "topic": "Surgery",
    "question": "What is the mechanism of action of Drug E?",
    "options": [
      "Option A for 809",
      "Option B for 809",
      "Option C for 809",
      "Option D for 809"
    ],
    "answer": "Option C for 809",
    "explanation": "Drug E works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 809)."
  },
  {
    "id": 810,
    "topic": "Anatomy",
    "question": "What is the mechanism of action of Drug F?",
    "options": [
      "Option A for 810",
      "Option B for 810",
      "Option C for 810",
      "Option D for 810"
    ],
    "answer": "Option D for 810",
    "explanation": "Drug F works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 810)."
  },
  {
    "id": 811,
    "topic": "Biochemistry",
    "question": "What is the mechanism of action of Drug G?",
    "options": [
      "Option A for 811",
      "Option B for 811",
      "Option C for 811",
      "Option D for 811"
    ],
    "answer": "Option A for 811",
    "explanation": "Drug G works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 811)."
  },
  {
    "id": 812,
    "topic": "Community Medicine",
    "question": "What is the mechanism of action of Drug H?",
    "options": [
      "Option A for 812",
      "Option B for 812",
      "Option C for 812",
      "Option D for 812"
    ],
    "answer": "Option B for 812",
    "explanation": "Drug H works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 812)."
  },
  {
    "id": 813,
    "topic": "Biochemistry",
    "question": "What is the mechanism of action of Drug I?",
    "options": [
      "Option A for 813",
      "Option B for 813",
      "Option C for 813",
      "Option D for 813"
    ],
    "answer": "Option C for 813",
    "explanation": "Drug I works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 813)."
  },
  {
    "id": 814,
    "topic": "Surgery",
    "question": "What is the mechanism of action of Drug J?",
    "options": [
      "Option A for 814",
      "Option B for 814",
      "Option C for 814",
      "Option D for 814"
    ],
    "answer": "Option D for 814",
    "explanation": "Drug J works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 814)."
  },
  {
    "id": 815,
    "topic": "Medicine",
    "question": "What is the mechanism of action of Drug K?",
    "options": [
      "Option A for 815",
      "Option B for 815",
      "Option C for 815",
      "Option D for 815"
    ],
    "answer": "Option A for 815",
    "explanation": "Drug K works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 815)."
  },
  {
    "id": 816,
    "topic": "Microbiology",
    "question": "What is the mechanism of action of Drug L?",
    "options": [
      "Option A for 816",
      "Option B for 816",
      "Option C for 816",
      "Option D for 816"
    ],
    "answer": "Option B for 816",
    "explanation": "Drug L works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 816)."
  },
  {
    "id": 817,
    "topic": "Physiology",
    "question": "What is the mechanism of action of Drug M?",
    "options": [
      "Option A for 817",
      "Option B for 817",
      "Option C for 817",
      "Option D for 817"
    ],
    "answer": "Option C for 817",
    "explanation": "Drug M works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 817)."
  },
  {
    "id": 818,
    "topic": "OBG",
    "question": "What is the mechanism of action of Drug N?",
    "options": [
      "Option A for 818",
      "Option B for 818",
      "Option C for 818",
      "Option D for 818"
    ],
    "answer": "Option D for 818",
    "explanation": "Drug N works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 818)."
  },
  {
    "id": 819,
    "topic": "Anatomy",
    "question": "What is the mechanism of action of Drug O?",
    "options": [
      "Option A for 819",
      "Option B for 819",
      "Option C for 819",
      "Option D for 819"
    ],
    "answer": "Option A for 819",
    "explanation": "Drug O works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 819)."
  },
  {
    "id": 820,
    "topic": "Community Medicine",
    "question": "What is the mechanism of action of Drug P?",
    "options": [
      "Option A for 820",
      "Option B for 820",
      "Option C for 820",
      "Option D for 820"
    ],
    "answer": "Option B for 820",
    "explanation": "Drug P works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 820)."
  },
  {
    "id": 821,
    "topic": "Community Medicine",
    "question": "What is the mechanism of action of Drug Q?",
    "options": [
      "Option A for 821",
      "Option B for 821",
      "Option C for 821",
      "Option D for 821"
    ],
    "answer": "Option C for 821",
    "explanation": "Drug Q works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 821)."
  },
  {
    "id": 822,
    "topic": "Anatomy",
    "question": "What is the mechanism of action of Drug R?",
    "options": [
      "Option A for 822",
      "Option B for 822",
      "Option C for 822",
      "Option D for 822"
    ],
    "answer": "Option D for 822",
    "explanation": "Drug R works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 822)."
  },
  {
    "id": 823,
    "topic": "Biochemistry",
    "question": "What is the mechanism of action of Drug S?",
    "options": [
      "Option A for 823",
      "Option B for 823",
      "Option C for 823",
      "Option D for 823"
    ],
    "answer": "Option A for 823",
    "explanation": "Drug S works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 823)."
  },
  {
    "id": 824,
    "topic": "OBG",
    "question": "What is the mechanism of action of Drug T?",
    "options": [
      "Option A for 824",
      "Option B for 824",
      "Option C for 824",
      "Option D for 824"
    ],
    "answer": "Option B for 824",
    "explanation": "Drug T works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 824)."
  },
  {
    "id": 825,
    "topic": "Biochemistry",
    "question": "What is the mechanism of action of Drug U?",
    "options": [
      "Option A for 825",
      "Option B for 825",
      "Option C for 825",
      "Option D for 825"
    ],
    "answer": "Option C for 825",
    "explanation": "Drug U works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 825)."
  },
  {
    "id": 826,
    "topic": "Surgery",
    "question": "What is the mechanism of action of Drug V?",
    "options": [
      "Option A for 826",
      "Option B for 826",
      "Option C for 826",
      "Option D for 826"
    ],
    "answer": "Option D for 826",
    "explanation": "Drug V works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 826)."
  },
  {
    "id": 827,
    "topic": "Microbiology",
    "question": "What is the mechanism of action of Drug W?",
    "options": [
      "Option A for 827",
      "Option B for 827",
      "Option C for 827",
      "Option D for 827"
    ],
    "answer": "Option A for 827",
    "explanation": "Drug W works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 827)."
  },
  {
    "id": 828,
    "topic": "Anatomy",
    "question": "What is the mechanism of action of Drug X?",
    "options": [
      "Option A for 828",
      "Option B for 828",
      "Option C for 828",
      "Option D for 828"
    ],
    "answer": "Option B for 828",
    "explanation": "Drug X works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 828)."
  },
  {
    "id": 829,
    "topic": "Physiology",
    "question": "What is the mechanism of action of Drug Y?",
    "options": [
      "Option A for 829",
      "Option B for 829",
      "Option C for 829",
      "Option D for 829"
    ],
    "answer": "Option C for 829",
    "explanation": "Drug Y works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 829)."
  },
  {
    "id": 830,
    "topic": "Community Medicine",
    "question": "What is the mechanism of action of Drug Z?",
    "options": [
      "Option A for 830",
      "Option B for 830",
      "Option C for 830",
      "Option D for 830"
    ],
    "answer": "Option D for 830",
    "explanation": "Drug Z works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 830)."
  },
  {
    "id": 831,
    "topic": "Biochemistry",
    "question": "What is the mechanism of action of Drug A?",
    "options": [
      "Option A for 831",
      "Option B for 831",
      "Option C for 831",
      "Option D for 831"
    ],
    "answer": "Option A for 831",
    "explanation": "Drug A works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 831)."
  },
  {
    "id": 832,
    "topic": "Pharmacology",
    "question": "What is the mechanism of action of Drug B?",
    "options": [
      "Option A for 832",
      "Option B for 832",
      "Option C for 832",
      "Option D for 832"
    ],
    "answer": "Option B for 832",
    "explanation": "Drug B works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 832)."
  },
  {
    "id": 833,
    "topic": "Biochemistry",
    "question": "What is the mechanism of action of Drug C?",
    "options": [
      "Option A for 833",
      "Option B for 833",
      "Option C for 833",
      "Option D for 833"
    ],
    "answer": "Option C for 833",
    "explanation": "Drug C works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 833)."
  },
  {
    "id": 834,
    "topic": "Biochemistry",
    "question": "What is the mechanism of action of Drug D?",
    "options": [
      "Option A for 834",
      "Option B for 834",
      "Option C for 834",
      "Option D for 834"
    ],
    "answer": "Option D for 834",
    "explanation": "Drug D works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 834)."
  },
  {
    "id": 835,
    "topic": "Pathology",
    "question": "What is the mechanism of action of Drug E?",
    "options": [
      "Option A for 835",
      "Option B for 835",
      "Option C for 835",
      "Option D for 835"
    ],
    "answer": "Option A for 835",
    "explanation": "Drug E works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 835)."
  },
  {
    "id": 836,
    "topic": "Biochemistry",
    "question": "What is the mechanism of action of Drug F?",
    "options": [
      "Option A for 836",
      "Option B for 836",
      "Option C for 836",
      "Option D for 836"
    ],
    "answer": "Option B for 836",
    "explanation": "Drug F works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 836)."
  },
  {
    "id": 837,
    "topic": "Pathology",
    "question": "What is the mechanism of action of Drug G?",
    "options": [
      "Option A for 837",
      "Option B for 837",
      "Option C for 837",
      "Option D for 837"
    ],
    "answer": "Option C for 837",
    "explanation": "Drug G works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 837)."
  },
  {
    "id": 838,
    "topic": "Pathology",
    "question": "What is the mechanism of action of Drug H?",
    "options": [
      "Option A for 838",
      "Option B for 838",
      "Option C for 838",
      "Option D for 838"
    ],
    "answer": "Option D for 838",
    "explanation": "Drug H works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 838)."
  },
  {
    "id": 839,
    "topic": "Physiology",
    "question": "What is the mechanism of action of Drug I?",
    "options": [
      "Option A for 839",
      "Option B for 839",
      "Option C for 839",
      "Option D for 839"
    ],
    "answer": "Option A for 839",
    "explanation": "Drug I works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 839)."
  },
  {
    "id": 840,
    "topic": "Anatomy",
    "question": "What is the mechanism of action of Drug J?",
    "options": [
      "Option A for 840",
      "Option B for 840",
      "Option C for 840",
      "Option D for 840"
    ],
    "answer": "Option B for 840",
    "explanation": "Drug J works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 840)."
  },
  {
    "id": 841,
    "topic": "Medicine",
    "question": "What is the mechanism of action of Drug K?",
    "options": [
      "Option A for 841",
      "Option B for 841",
      "Option C for 841",
      "Option D for 841"
    ],
    "answer": "Option C for 841",
    "explanation": "Drug K works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 841)."
  },
  {
    "id": 842,
    "topic": "Community Medicine",
    "question": "What is the mechanism of action of Drug L?",
    "options": [
      "Option A for 842",
      "Option B for 842",
      "Option C for 842",
      "Option D for 842"
    ],
    "answer": "Option D for 842",
    "explanation": "Drug L works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 842)."
  },
  {
    "id": 843,
    "topic": "Community Medicine",
    "question": "What is the mechanism of action of Drug M?",
    "options": [
      "Option A for 843",
      "Option B for 843",
      "Option C for 843",
      "Option D for 843"
    ],
    "answer": "Option A for 843",
    "explanation": "Drug M works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 843)."
  },
  {
    "id": 844,
    "topic": "Surgery",
    "question": "What is the mechanism of action of Drug N?",
    "options": [
      "Option A for 844",
      "Option B for 844",
      "Option C for 844",
      "Option D for 844"
    ],
    "answer": "Option B for 844",
    "explanation": "Drug N works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 844)."
  },
  {
    "id": 845,
    "topic": "Pathology",
    "question": "What is the mechanism of action of Drug O?",
    "options": [
      "Option A for 845",
      "Option B for 845",
      "Option C for 845",
      "Option D for 845"
    ],
    "answer": "Option C for 845",
    "explanation": "Drug O works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 845)."
  },
  {
    "id": 846,
    "topic": "Community Medicine",
    "question": "What is the mechanism of action of Drug P?",
    "options": [
      "Option A for 846",
      "Option B for 846",
      "Option C for 846",
      "Option D for 846"
    ],
    "answer": "Option D for 846",
    "explanation": "Drug P works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 846)."
  },
  {
    "id": 847,
    "topic": "Biochemistry",
    "question": "What is the mechanism of action of Drug Q?",
    "options": [
      "Option A for 847",
      "Option B for 847",
      "Option C for 847",
      "Option D for 847"
    ],
    "answer": "Option A for 847",
    "explanation": "Drug Q works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 847)."
  },
  {
    "id": 848,
    "topic": "Microbiology",
    "question": "What is the mechanism of action of Drug R?",
    "options": [
      "Option A for 848",
      "Option B for 848",
      "Option C for 848",
      "Option D for 848"
    ],
    "answer": "Option B for 848",
    "explanation": "Drug R works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 848)."
  },
  {
    "id": 849,
    "topic": "Pathology",
    "question": "What is the mechanism of action of Drug S?",
    "options": [
      "Option A for 849",
      "Option B for 849",
      "Option C for 849",
      "Option D for 849"
    ],
    "answer": "Option C for 849",
    "explanation": "Drug S works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 849)."
  },
  {
    "id": 850,
    "topic": "Pharmacology",
    "question": "What is the mechanism of action of Drug T?",
    "options": [
      "Option A for 850",
      "Option B for 850",
      "Option C for 850",
      "Option D for 850"
    ],
    "answer": "Option D for 850",
    "explanation": "Drug T works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 850)."
  },
  {
    "id": 851,
    "topic": "Pathology",
    "question": "What is the mechanism of action of Drug U?",
    "options": [
      "Option A for 851",
      "Option B for 851",
      "Option C for 851",
      "Option D for 851"
    ],
    "answer": "Option A for 851",
    "explanation": "Drug U works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 851)."
  },
  {
    "id": 852,
    "topic": "Surgery",
    "question": "What is the mechanism of action of Drug V?",
    "options": [
      "Option A for 852",
      "Option B for 852",
      "Option C for 852",
      "Option D for 852"
    ],
    "answer": "Option B for 852",
    "explanation": "Drug V works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 852)."
  },
  {
    "id": 853,
    "topic": "Physiology",
    "question": "What is the mechanism of action of Drug W?",
    "options": [
      "Option A for 853",
      "Option B for 853",
      "Option C for 853",
      "Option D for 853"
    ],
    "answer": "Option C for 853",
    "explanation": "Drug W works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 853)."
  },
  {
    "id": 854,
    "topic": "OBG",
    "question": "What is the mechanism of action of Drug X?",
    "options": [
      "Option A for 854",
      "Option B for 854",
      "Option C for 854",
      "Option D for 854"
    ],
    "answer": "Option D for 854",
    "explanation": "Drug X works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 854)."
  },
  {
    "id": 855,
    "topic": "Physiology",
    "question": "What is the mechanism of action of Drug Y?",
    "options": [
      "Option A for 855",
      "Option B for 855",
      "Option C for 855",
      "Option D for 855"
    ],
    "answer": "Option A for 855",
    "explanation": "Drug Y works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 855)."
  },
  {
    "id": 856,
    "topic": "Biochemistry",
    "question": "What is the mechanism of action of Drug Z?",
    "options": [
      "Option A for 856",
      "Option B for 856",
      "Option C for 856",
      "Option D for 856"
    ],
    "answer": "Option B for 856",
    "explanation": "Drug Z works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 856)."
  },
  {
    "id": 857,
    "topic": "Surgery",
    "question": "What is the mechanism of action of Drug A?",
    "options": [
      "Option A for 857",
      "Option B for 857",
      "Option C for 857",
      "Option D for 857"
    ],
    "answer": "Option C for 857",
    "explanation": "Drug A works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 857)."
  },
  {
    "id": 858,
    "topic": "OBG",
    "question": "What is the mechanism of action of Drug B?",
    "options": [
      "Option A for 858",
      "Option B for 858",
      "Option C for 858",
      "Option D for 858"
    ],
    "answer": "Option D for 858",
    "explanation": "Drug B works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 858)."
  },
  {
    "id": 859,
    "topic": "Community Medicine",
    "question": "What is the mechanism of action of Drug C?",
    "options": [
      "Option A for 859",
      "Option B for 859",
      "Option C for 859",
      "Option D for 859"
    ],
    "answer": "Option A for 859",
    "explanation": "Drug C works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 859)."
  },
  {
    "id": 860,
    "topic": "Medicine",
    "question": "What is the mechanism of action of Drug D?",
    "options": [
      "Option A for 860",
      "Option B for 860",
      "Option C for 860",
      "Option D for 860"
    ],
    "answer": "Option B for 860",
    "explanation": "Drug D works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 860)."
  },
  {
    "id": 861,
    "topic": "OBG",
    "question": "What is the mechanism of action of Drug E?",
    "options": [
      "Option A for 861",
      "Option B for 861",
      "Option C for 861",
      "Option D for 861"
    ],
    "answer": "Option C for 861",
    "explanation": "Drug E works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 861)."
  },
  {
    "id": 862,
    "topic": "Physiology",
    "question": "What is the mechanism of action of Drug F?",
    "options": [
      "Option A for 862",
      "Option B for 862",
      "Option C for 862",
      "Option D for 862"
    ],
    "answer": "Option D for 862",
    "explanation": "Drug F works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 862)."
  },
  {
    "id": 863,
    "topic": "Pharmacology",
    "question": "What is the mechanism of action of Drug G?",
    "options": [
      "Option A for 863",
      "Option B for 863",
      "Option C for 863",
      "Option D for 863"
    ],
    "answer": "Option A for 863",
    "explanation": "Drug G works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 863)."
  },
  {
    "id": 864,
    "topic": "Pathology",
    "question": "What is the mechanism of action of Drug H?",
    "options": [
      "Option A for 864",
      "Option B for 864",
      "Option C for 864",
      "Option D for 864"
    ],
    "answer": "Option B for 864",
    "explanation": "Drug H works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 864)."
  },
  {
    "id": 865,
    "topic": "Physiology",
    "question": "What is the mechanism of action of Drug I?",
    "options": [
      "Option A for 865",
      "Option B for 865",
      "Option C for 865",
      "Option D for 865"
    ],
    "answer": "Option C for 865",
    "explanation": "Drug I works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 865)."
  },
  {
    "id": 866,
    "topic": "Physiology",
    "question": "What is the mechanism of action of Drug J?",
    "options": [
      "Option A for 866",
      "Option B for 866",
      "Option C for 866",
      "Option D for 866"
    ],
    "answer": "Option D for 866",
    "explanation": "Drug J works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 866)."
  },
  {
    "id": 867,
    "topic": "Community Medicine",
    "question": "What is the mechanism of action of Drug K?",
    "options": [
      "Option A for 867",
      "Option B for 867",
      "Option C for 867",
      "Option D for 867"
    ],
    "answer": "Option A for 867",
    "explanation": "Drug K works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 867)."
  },
  {
    "id": 868,
    "topic": "Medicine",
    "question": "What is the mechanism of action of Drug L?",
    "options": [
      "Option A for 868",
      "Option B for 868",
      "Option C for 868",
      "Option D for 868"
    ],
    "answer": "Option B for 868",
    "explanation": "Drug L works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 868)."
  },
  {
    "id": 869,
    "topic": "Pathology",
    "question": "What is the mechanism of action of Drug M?",
    "options": [
      "Option A for 869",
      "Option B for 869",
      "Option C for 869",
      "Option D for 869"
    ],
    "answer": "Option C for 869",
    "explanation": "Drug M works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 869)."
  },
  {
    "id": 870,
    "topic": "Physiology",
    "question": "What is the mechanism of action of Drug N?",
    "options": [
      "Option A for 870",
      "Option B for 870",
      "Option C for 870",
      "Option D for 870"
    ],
    "answer": "Option D for 870",
    "explanation": "Drug N works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 870)."
  },
  {
    "id": 871,
    "topic": "OBG",
    "question": "What is the mechanism of action of Drug O?",
    "options": [
      "Option A for 871",
      "Option B for 871",
      "Option C for 871",
      "Option D for 871"
    ],
    "answer": "Option A for 871",
    "explanation": "Drug O works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 871)."
  },
  {
    "id": 872,
    "topic": "Medicine",
    "question": "What is the mechanism of action of Drug P?",
    "options": [
      "Option A for 872",
      "Option B for 872",
      "Option C for 872",
      "Option D for 872"
    ],
    "answer": "Option B for 872",
    "explanation": "Drug P works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 872)."
  },
  {
    "id": 873,
    "topic": "Physiology",
    "question": "What is the mechanism of action of Drug Q?",
    "options": [
      "Option A for 873",
      "Option B for 873",
      "Option C for 873",
      "Option D for 873"
    ],
    "answer": "Option C for 873",
    "explanation": "Drug Q works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 873)."
  },
  {
    "id": 874,
    "topic": "Community Medicine",
    "question": "What is the mechanism of action of Drug R?",
    "options": [
      "Option A for 874",
      "Option B for 874",
      "Option C for 874",
      "Option D for 874"
    ],
    "answer": "Option D for 874",
    "explanation": "Drug R works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 874)."
  },
  {
    "id": 875,
    "topic": "Surgery",
    "question": "What is the mechanism of action of Drug S?",
    "options": [
      "Option A for 875",
      "Option B for 875",
      "Option C for 875",
      "Option D for 875"
    ],
    "answer": "Option A for 875",
    "explanation": "Drug S works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 875)."
  },
  {
    "id": 876,
    "topic": "OBG",
    "question": "What is the mechanism of action of Drug T?",
    "options": [
      "Option A for 876",
      "Option B for 876",
      "Option C for 876",
      "Option D for 876"
    ],
    "answer": "Option B for 876",
    "explanation": "Drug T works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 876)."
  },
  {
    "id": 877,
    "topic": "Biochemistry",
    "question": "What is the mechanism of action of Drug U?",
    "options": [
      "Option A for 877",
      "Option B for 877",
      "Option C for 877",
      "Option D for 877"
    ],
    "answer": "Option C for 877",
    "explanation": "Drug U works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 877)."
  },
  {
    "id": 878,
    "topic": "Physiology",
    "question": "What is the mechanism of action of Drug V?",
    "options": [
      "Option A for 878",
      "Option B for 878",
      "Option C for 878",
      "Option D for 878"
    ],
    "answer": "Option D for 878",
    "explanation": "Drug V works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 878)."
  },
  {
    "id": 879,
    "topic": "Pharmacology",
    "question": "What is the mechanism of action of Drug W?",
    "options": [
      "Option A for 879",
      "Option B for 879",
      "Option C for 879",
      "Option D for 879"
    ],
    "answer": "Option A for 879",
    "explanation": "Drug W works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 879)."
  },
  {
    "id": 880,
    "topic": "Medicine",
    "question": "What is the mechanism of action of Drug X?",
    "options": [
      "Option A for 880",
      "Option B for 880",
      "Option C for 880",
      "Option D for 880"
    ],
    "answer": "Option B for 880",
    "explanation": "Drug X works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 880)."
  },
  {
    "id": 881,
    "topic": "OBG",
    "question": "What is the mechanism of action of Drug Y?",
    "options": [
      "Option A for 881",
      "Option B for 881",
      "Option C for 881",
      "Option D for 881"
    ],
    "answer": "Option C for 881",
    "explanation": "Drug Y works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 881)."
  },
  {
    "id": 882,
    "topic": "Community Medicine",
    "question": "What is the mechanism of action of Drug Z?",
    "options": [
      "Option A for 882",
      "Option B for 882",
      "Option C for 882",
      "Option D for 882"
    ],
    "answer": "Option D for 882",
    "explanation": "Drug Z works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 882)."
  },
  {
    "id": 883,
    "topic": "Surgery",
    "question": "What is the mechanism of action of Drug A?",
    "options": [
      "Option A for 883",
      "Option B for 883",
      "Option C for 883",
      "Option D for 883"
    ],
    "answer": "Option A for 883",
    "explanation": "Drug A works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 883)."
  },
  {
    "id": 884,
    "topic": "Surgery",
    "question": "What is the mechanism of action of Drug B?",
    "options": [
      "Option A for 884",
      "Option B for 884",
      "Option C for 884",
      "Option D for 884"
    ],
    "answer": "Option B for 884",
    "explanation": "Drug B works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 884)."
  },
  {
    "id": 885,
    "topic": "Microbiology",
    "question": "What is the mechanism of action of Drug C?",
    "options": [
      "Option A for 885",
      "Option B for 885",
      "Option C for 885",
      "Option D for 885"
    ],
    "answer": "Option C for 885",
    "explanation": "Drug C works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 885)."
  },
  {
    "id": 886,
    "topic": "Pharmacology",
    "question": "What is the mechanism of action of Drug D?",
    "options": [
      "Option A for 886",
      "Option B for 886",
      "Option C for 886",
      "Option D for 886"
    ],
    "answer": "Option D for 886",
    "explanation": "Drug D works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 886)."
  },
  {
    "id": 887,
    "topic": "Medicine",
    "question": "What is the mechanism of action of Drug E?",
    "options": [
      "Option A for 887",
      "Option B for 887",
      "Option C for 887",
      "Option D for 887"
    ],
    "answer": "Option A for 887",
    "explanation": "Drug E works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 887)."
  },
  {
    "id": 888,
    "topic": "OBG",
    "question": "What is the mechanism of action of Drug F?",
    "options": [
      "Option A for 888",
      "Option B for 888",
      "Option C for 888",
      "Option D for 888"
    ],
    "answer": "Option B for 888",
    "explanation": "Drug F works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 888)."
  },
  {
    "id": 889,
    "topic": "Community Medicine",
    "question": "What is the mechanism of action of Drug G?",
    "options": [
      "Option A for 889",
      "Option B for 889",
      "Option C for 889",
      "Option D for 889"
    ],
    "answer": "Option C for 889",
    "explanation": "Drug G works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 889)."
  },
  {
    "id": 890,
    "topic": "Medicine",
    "question": "What is the mechanism of action of Drug H?",
    "options": [
      "Option A for 890",
      "Option B for 890",
      "Option C for 890",
      "Option D for 890"
    ],
    "answer": "Option D for 890",
    "explanation": "Drug H works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 890)."
  },
  {
    "id": 891,
    "topic": "Pathology",
    "question": "What is the mechanism of action of Drug I?",
    "options": [
      "Option A for 891",
      "Option B for 891",
      "Option C for 891",
      "Option D for 891"
    ],
    "answer": "Option A for 891",
    "explanation": "Drug I works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 891)."
  },
  {
    "id": 892,
    "topic": "Anatomy",
    "question": "What is the mechanism of action of Drug J?",
    "options": [
      "Option A for 892",
      "Option B for 892",
      "Option C for 892",
      "Option D for 892"
    ],
    "answer": "Option B for 892",
    "explanation": "Drug J works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 892)."
  },
  {
    "id": 893,
    "topic": "Anatomy",
    "question": "What is the mechanism of action of Drug K?",
    "options": [
      "Option A for 893",
      "Option B for 893",
      "Option C for 893",
      "Option D for 893"
    ],
    "answer": "Option C for 893",
    "explanation": "Drug K works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 893)."
  },
  {
    "id": 894,
    "topic": "OBG",
    "question": "What is the mechanism of action of Drug L?",
    "options": [
      "Option A for 894",
      "Option B for 894",
      "Option C for 894",
      "Option D for 894"
    ],
    "answer": "Option D for 894",
    "explanation": "Drug L works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 894)."
  },
  {
    "id": 895,
    "topic": "Medicine",
    "question": "What is the mechanism of action of Drug M?",
    "options": [
      "Option A for 895",
      "Option B for 895",
      "Option C for 895",
      "Option D for 895"
    ],
    "answer": "Option A for 895",
    "explanation": "Drug M works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 895)."
  },
  {
    "id": 896,
    "topic": "Biochemistry",
    "question": "What is the mechanism of action of Drug N?",
    "options": [
      "Option A for 896",
      "Option B for 896",
      "Option C for 896",
      "Option D for 896"
    ],
    "answer": "Option B for 896",
    "explanation": "Drug N works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 896)."
  },
  {
    "id": 897,
    "topic": "Community Medicine",
    "question": "What is the mechanism of action of Drug O?",
    "options": [
      "Option A for 897",
      "Option B for 897",
      "Option C for 897",
      "Option D for 897"
    ],
    "answer": "Option C for 897",
    "explanation": "Drug O works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 897)."
  },
  {
    "id": 898,
    "topic": "Biochemistry",
    "question": "What is the mechanism of action of Drug P?",
    "options": [
      "Option A for 898",
      "Option B for 898",
      "Option C for 898",
      "Option D for 898"
    ],
    "answer": "Option D for 898",
    "explanation": "Drug P works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 898)."
  },
  {
    "id": 899,
    "topic": "Pharmacology",
    "question": "What is the mechanism of action of Drug Q?",
    "options": [
      "Option A for 899",
      "Option B for 899",
      "Option C for 899",
      "Option D for 899"
    ],
    "answer": "Option A for 899",
    "explanation": "Drug Q works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 899)."
  },
  {
    "id": 900,
    "topic": "Medicine",
    "question": "What is the mechanism of action of Drug R?",
    "options": [
      "Option A for 900",
      "Option B for 900",
      "Option C for 900",
      "Option D for 900"
    ],
    "answer": "Option B for 900",
    "explanation": "Drug R works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 900)."
  },
  {
    "id": 901,
    "topic": "Anatomy",
    "question": "What is the mechanism of action of Drug S?",
    "options": [
      "Option A for 901",
      "Option B for 901",
      "Option C for 901",
      "Option D for 901"
    ],
    "answer": "Option C for 901",
    "explanation": "Drug S works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 901)."
  },
  {
    "id": 902,
    "topic": "Medicine",
    "question": "What is the mechanism of action of Drug T?",
    "options": [
      "Option A for 902",
      "Option B for 902",
      "Option C for 902",
      "Option D for 902"
    ],
    "answer": "Option D for 902",
    "explanation": "Drug T works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 902)."
  },
  {
    "id": 903,
    "topic": "Community Medicine",
    "question": "What is the mechanism of action of Drug U?",
    "options": [
      "Option A for 903",
      "Option B for 903",
      "Option C for 903",
      "Option D for 903"
    ],
    "answer": "Option A for 903",
    "explanation": "Drug U works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 903)."
  },
  {
    "id": 904,
    "topic": "Biochemistry",
    "question": "What is the mechanism of action of Drug V?",
    "options": [
      "Option A for 904",
      "Option B for 904",
      "Option C for 904",
      "Option D for 904"
    ],
    "answer": "Option B for 904",
    "explanation": "Drug V works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 904)."
  },
  {
    "id": 905,
    "topic": "Anatomy",
    "question": "What is the mechanism of action of Drug W?",
    "options": [
      "Option A for 905",
      "Option B for 905",
      "Option C for 905",
      "Option D for 905"
    ],
    "answer": "Option C for 905",
    "explanation": "Drug W works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 905)."
  },
  {
    "id": 906,
    "topic": "Medicine",
    "question": "What is the mechanism of action of Drug X?",
    "options": [
      "Option A for 906",
      "Option B for 906",
      "Option C for 906",
      "Option D for 906"
    ],
    "answer": "Option D for 906",
    "explanation": "Drug X works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 906)."
  },
  {
    "id": 907,
    "topic": "Pathology",
    "question": "What is the mechanism of action of Drug Y?",
    "options": [
      "Option A for 907",
      "Option B for 907",
      "Option C for 907",
      "Option D for 907"
    ],
    "answer": "Option A for 907",
    "explanation": "Drug Y works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 907)."
  },
  {
    "id": 908,
    "topic": "Community Medicine",
    "question": "What is the mechanism of action of Drug Z?",
    "options": [
      "Option A for 908",
      "Option B for 908",
      "Option C for 908",
      "Option D for 908"
    ],
    "answer": "Option B for 908",
    "explanation": "Drug Z works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 908)."
  },
  {
    "id": 909,
    "topic": "Community Medicine",
    "question": "What is the mechanism of action of Drug A?",
    "options": [
      "Option A for 909",
      "Option B for 909",
      "Option C for 909",
      "Option D for 909"
    ],
    "answer": "Option C for 909",
    "explanation": "Drug A works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 909)."
  },
  {
    "id": 910,
    "topic": "OBG",
    "question": "What is the mechanism of action of Drug B?",
    "options": [
      "Option A for 910",
      "Option B for 910",
      "Option C for 910",
      "Option D for 910"
    ],
    "answer": "Option D for 910",
    "explanation": "Drug B works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 910)."
  },
  {
    "id": 911,
    "topic": "Microbiology",
    "question": "What is the mechanism of action of Drug C?",
    "options": [
      "Option A for 911",
      "Option B for 911",
      "Option C for 911",
      "Option D for 911"
    ],
    "answer": "Option A for 911",
    "explanation": "Drug C works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 911)."
  },
  {
    "id": 912,
    "topic": "Surgery",
    "question": "What is the mechanism of action of Drug D?",
    "options": [
      "Option A for 912",
      "Option B for 912",
      "Option C for 912",
      "Option D for 912"
    ],
    "answer": "Option B for 912",
    "explanation": "Drug D works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 912)."
  },
  {
    "id": 913,
    "topic": "Medicine",
    "question": "What is the mechanism of action of Drug E?",
    "options": [
      "Option A for 913",
      "Option B for 913",
      "Option C for 913",
      "Option D for 913"
    ],
    "answer": "Option C for 913",
    "explanation": "Drug E works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 913)."
  },
  {
    "id": 914,
    "topic": "Pathology",
    "question": "What is the mechanism of action of Drug F?",
    "options": [
      "Option A for 914",
      "Option B for 914",
      "Option C for 914",
      "Option D for 914"
    ],
    "answer": "Option D for 914",
    "explanation": "Drug F works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 914)."
  },
  {
    "id": 915,
    "topic": "Medicine",
    "question": "What is the mechanism of action of Drug G?",
    "options": [
      "Option A for 915",
      "Option B for 915",
      "Option C for 915",
      "Option D for 915"
    ],
    "answer": "Option A for 915",
    "explanation": "Drug G works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 915)."
  },
  {
    "id": 916,
    "topic": "Microbiology",
    "question": "What is the mechanism of action of Drug H?",
    "options": [
      "Option A for 916",
      "Option B for 916",
      "Option C for 916",
      "Option D for 916"
    ],
    "answer": "Option B for 916",
    "explanation": "Drug H works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 916)."
  },
  {
    "id": 917,
    "topic": "Pharmacology",
    "question": "What is the mechanism of action of Drug I?",
    "options": [
      "Option A for 917",
      "Option B for 917",
      "Option C for 917",
      "Option D for 917"
    ],
    "answer": "Option C for 917",
    "explanation": "Drug I works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 917)."
  },
  {
    "id": 918,
    "topic": "Medicine",
    "question": "What is the mechanism of action of Drug J?",
    "options": [
      "Option A for 918",
      "Option B for 918",
      "Option C for 918",
      "Option D for 918"
    ],
    "answer": "Option D for 918",
    "explanation": "Drug J works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 918)."
  },
  {
    "id": 919,
    "topic": "Community Medicine",
    "question": "What is the mechanism of action of Drug K?",
    "options": [
      "Option A for 919",
      "Option B for 919",
      "Option C for 919",
      "Option D for 919"
    ],
    "answer": "Option A for 919",
    "explanation": "Drug K works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 919)."
  },
  {
    "id": 920,
    "topic": "Biochemistry",
    "question": "What is the mechanism of action of Drug L?",
    "options": [
      "Option A for 920",
      "Option B for 920",
      "Option C for 920",
      "Option D for 920"
    ],
    "answer": "Option B for 920",
    "explanation": "Drug L works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 920)."
  },
  {
    "id": 921,
    "topic": "Physiology",
    "question": "What is the mechanism of action of Drug M?",
    "options": [
      "Option A for 921",
      "Option B for 921",
      "Option C for 921",
      "Option D for 921"
    ],
    "answer": "Option C for 921",
    "explanation": "Drug M works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 921)."
  },
  {
    "id": 922,
    "topic": "Pharmacology",
    "question": "What is the mechanism of action of Drug N?",
    "options": [
      "Option A for 922",
      "Option B for 922",
      "Option C for 922",
      "Option D for 922"
    ],
    "answer": "Option D for 922",
    "explanation": "Drug N works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 922)."
  },
  {
    "id": 923,
    "topic": "Medicine",
    "question": "What is the mechanism of action of Drug O?",
    "options": [
      "Option A for 923",
      "Option B for 923",
      "Option C for 923",
      "Option D for 923"
    ],
    "answer": "Option A for 923",
    "explanation": "Drug O works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 923)."
  },
  {
    "id": 924,
    "topic": "Community Medicine",
    "question": "What is the mechanism of action of Drug P?",
    "options": [
      "Option A for 924",
      "Option B for 924",
      "Option C for 924",
      "Option D for 924"
    ],
    "answer": "Option B for 924",
    "explanation": "Drug P works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 924)."
  },
  {
    "id": 925,
    "topic": "Surgery",
    "question": "What is the mechanism of action of Drug Q?",
    "options": [
      "Option A for 925",
      "Option B for 925",
      "Option C for 925",
      "Option D for 925"
    ],
    "answer": "Option C for 925",
    "explanation": "Drug Q works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 925)."
  },
  {
    "id": 926,
    "topic": "Physiology",
    "question": "What is the mechanism of action of Drug R?",
    "options": [
      "Option A for 926",
      "Option B for 926",
      "Option C for 926",
      "Option D for 926"
    ],
    "answer": "Option D for 926",
    "explanation": "Drug R works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 926)."
  },
  {
    "id": 927,
    "topic": "Pathology",
    "question": "What is the mechanism of action of Drug S?",
    "options": [
      "Option A for 927",
      "Option B for 927",
      "Option C for 927",
      "Option D for 927"
    ],
    "answer": "Option A for 927",
    "explanation": "Drug S works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 927)."
  },
  {
    "id": 928,
    "topic": "Surgery",
    "question": "What is the mechanism of action of Drug T?",
    "options": [
      "Option A for 928",
      "Option B for 928",
      "Option C for 928",
      "Option D for 928"
    ],
    "answer": "Option B for 928",
    "explanation": "Drug T works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 928)."
  },
  {
    "id": 929,
    "topic": "OBG",
    "question": "What is the mechanism of action of Drug U?",
    "options": [
      "Option A for 929",
      "Option B for 929",
      "Option C for 929",
      "Option D for 929"
    ],
    "answer": "Option C for 929",
    "explanation": "Drug U works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 929)."
  },
  {
    "id": 930,
    "topic": "OBG",
    "question": "What is the mechanism of action of Drug V?",
    "options": [
      "Option A for 930",
      "Option B for 930",
      "Option C for 930",
      "Option D for 930"
    ],
    "answer": "Option D for 930",
    "explanation": "Drug V works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 930)."
  },
  {
    "id": 931,
    "topic": "Anatomy",
    "question": "What is the mechanism of action of Drug W?",
    "options": [
      "Option A for 931",
      "Option B for 931",
      "Option C for 931",
      "Option D for 931"
    ],
    "answer": "Option A for 931",
    "explanation": "Drug W works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 931)."
  },
  {
    "id": 932,
    "topic": "Pharmacology",
    "question": "What is the mechanism of action of Drug X?",
    "options": [
      "Option A for 932",
      "Option B for 932",
      "Option C for 932",
      "Option D for 932"
    ],
    "answer": "Option B for 932",
    "explanation": "Drug X works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 932)."
  },
  {
    "id": 933,
    "topic": "Microbiology",
    "question": "What is the mechanism of action of Drug Y?",
    "options": [
      "Option A for 933",
      "Option B for 933",
      "Option C for 933",
      "Option D for 933"
    ],
    "answer": "Option C for 933",
    "explanation": "Drug Y works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 933)."
  },
  {
    "id": 934,
    "topic": "Pathology",
    "question": "What is the mechanism of action of Drug Z?",
    "options": [
      "Option A for 934",
      "Option B for 934",
      "Option C for 934",
      "Option D for 934"
    ],
    "answer": "Option D for 934",
    "explanation": "Drug Z works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 934)."
  },
  {
    "id": 935,
    "topic": "Pharmacology",
    "question": "What is the mechanism of action of Drug A?",
    "options": [
      "Option A for 935",
      "Option B for 935",
      "Option C for 935",
      "Option D for 935"
    ],
    "answer": "Option A for 935",
    "explanation": "Drug A works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 935)."
  },
  {
    "id": 936,
    "topic": "Medicine",
    "question": "What is the mechanism of action of Drug B?",
    "options": [
      "Option A for 936",
      "Option B for 936",
      "Option C for 936",
      "Option D for 936"
    ],
    "answer": "Option B for 936",
    "explanation": "Drug B works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 936)."
  },
  {
    "id": 937,
    "topic": "Microbiology",
    "question": "What is the mechanism of action of Drug C?",
    "options": [
      "Option A for 937",
      "Option B for 937",
      "Option C for 937",
      "Option D for 937"
    ],
    "answer": "Option C for 937",
    "explanation": "Drug C works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 937)."
  },
  {
    "id": 938,
    "topic": "Pathology",
    "question": "What is the mechanism of action of Drug D?",
    "options": [
      "Option A for 938",
      "Option B for 938",
      "Option C for 938",
      "Option D for 938"
    ],
    "answer": "Option D for 938",
    "explanation": "Drug D works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 938)."
  },
  {
    "id": 939,
    "topic": "Community Medicine",
    "question": "What is the mechanism of action of Drug E?",
    "options": [
      "Option A for 939",
      "Option B for 939",
      "Option C for 939",
      "Option D for 939"
    ],
    "answer": "Option A for 939",
    "explanation": "Drug E works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 939)."
  },
  {
    "id": 940,
    "topic": "Surgery",
    "question": "What is the mechanism of action of Drug F?",
    "options": [
      "Option A for 940",
      "Option B for 940",
      "Option C for 940",
      "Option D for 940"
    ],
    "answer": "Option B for 940",
    "explanation": "Drug F works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 940)."
  },
  {
    "id": 941,
    "topic": "Anatomy",
    "question": "What is the mechanism of action of Drug G?",
    "options": [
      "Option A for 941",
      "Option B for 941",
      "Option C for 941",
      "Option D for 941"
    ],
    "answer": "Option C for 941",
    "explanation": "Drug G works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 941)."
  },
  {
    "id": 942,
    "topic": "Microbiology",
    "question": "What is the mechanism of action of Drug H?",
    "options": [
      "Option A for 942",
      "Option B for 942",
      "Option C for 942",
      "Option D for 942"
    ],
    "answer": "Option D for 942",
    "explanation": "Drug H works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 942)."
  },
  {
    "id": 943,
    "topic": "Medicine",
    "question": "What is the mechanism of action of Drug I?",
    "options": [
      "Option A for 943",
      "Option B for 943",
      "Option C for 943",
      "Option D for 943"
    ],
    "answer": "Option A for 943",
    "explanation": "Drug I works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 943)."
  },
  {
    "id": 944,
    "topic": "Medicine",
    "question": "What is the mechanism of action of Drug J?",
    "options": [
      "Option A for 944",
      "Option B for 944",
      "Option C for 944",
      "Option D for 944"
    ],
    "answer": "Option B for 944",
    "explanation": "Drug J works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 944)."
  },
  {
    "id": 945,
    "topic": "Physiology",
    "question": "What is the mechanism of action of Drug K?",
    "options": [
      "Option A for 945",
      "Option B for 945",
      "Option C for 945",
      "Option D for 945"
    ],
    "answer": "Option C for 945",
    "explanation": "Drug K works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 945)."
  },
  {
    "id": 946,
    "topic": "Pharmacology",
    "question": "What is the mechanism of action of Drug L?",
    "options": [
      "Option A for 946",
      "Option B for 946",
      "Option C for 946",
      "Option D for 946"
    ],
    "answer": "Option D for 946",
    "explanation": "Drug L works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 946)."
  },
  {
    "id": 947,
    "topic": "OBG",
    "question": "What is the mechanism of action of Drug M?",
    "options": [
      "Option A for 947",
      "Option B for 947",
      "Option C for 947",
      "Option D for 947"
    ],
    "answer": "Option A for 947",
    "explanation": "Drug M works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 947)."
  },
  {
    "id": 948,
    "topic": "Medicine",
    "question": "What is the mechanism of action of Drug N?",
    "options": [
      "Option A for 948",
      "Option B for 948",
      "Option C for 948",
      "Option D for 948"
    ],
    "answer": "Option B for 948",
    "explanation": "Drug N works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 948)."
  },
  {
    "id": 949,
    "topic": "Physiology",
    "question": "What is the mechanism of action of Drug O?",
    "options": [
      "Option A for 949",
      "Option B for 949",
      "Option C for 949",
      "Option D for 949"
    ],
    "answer": "Option C for 949",
    "explanation": "Drug O works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 949)."
  },
  {
    "id": 950,
    "topic": "Pathology",
    "question": "What is the mechanism of action of Drug P?",
    "options": [
      "Option A for 950",
      "Option B for 950",
      "Option C for 950",
      "Option D for 950"
    ],
    "answer": "Option D for 950",
    "explanation": "Drug P works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 950)."
  },
  {
    "id": 951,
    "topic": "OBG",
    "question": "What is the mechanism of action of Drug Q?",
    "options": [
      "Option A for 951",
      "Option B for 951",
      "Option C for 951",
      "Option D for 951"
    ],
    "answer": "Option A for 951",
    "explanation": "Drug Q works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 951)."
  },
  {
    "id": 952,
    "topic": "Physiology",
    "question": "What is the mechanism of action of Drug R?",
    "options": [
      "Option A for 952",
      "Option B for 952",
      "Option C for 952",
      "Option D for 952"
    ],
    "answer": "Option B for 952",
    "explanation": "Drug R works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 952)."
  },
  {
    "id": 953,
    "topic": "Pharmacology",
    "question": "What is the mechanism of action of Drug S?",
    "options": [
      "Option A for 953",
      "Option B for 953",
      "Option C for 953",
      "Option D for 953"
    ],
    "answer": "Option C for 953",
    "explanation": "Drug S works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 953)."
  },
  {
    "id": 954,
    "topic": "Microbiology",
    "question": "What is the mechanism of action of Drug T?",
    "options": [
      "Option A for 954",
      "Option B for 954",
      "Option C for 954",
      "Option D for 954"
    ],
    "answer": "Option D for 954",
    "explanation": "Drug T works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 954)."
  },
  {
    "id": 955,
    "topic": "Microbiology",
    "question": "What is the mechanism of action of Drug U?",
    "options": [
      "Option A for 955",
      "Option B for 955",
      "Option C for 955",
      "Option D for 955"
    ],
    "answer": "Option A for 955",
    "explanation": "Drug U works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 955)."
  },
  {
    "id": 956,
    "topic": "Pharmacology",
    "question": "What is the mechanism of action of Drug V?",
    "options": [
      "Option A for 956",
      "Option B for 956",
      "Option C for 956",
      "Option D for 956"
    ],
    "answer": "Option B for 956",
    "explanation": "Drug V works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 956)."
  },
  {
    "id": 957,
    "topic": "Medicine",
    "question": "What is the mechanism of action of Drug W?",
    "options": [
      "Option A for 957",
      "Option B for 957",
      "Option C for 957",
      "Option D for 957"
    ],
    "answer": "Option C for 957",
    "explanation": "Drug W works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 957)."
  },
  {
    "id": 958,
    "topic": "OBG",
    "question": "What is the mechanism of action of Drug X?",
    "options": [
      "Option A for 958",
      "Option B for 958",
      "Option C for 958",
      "Option D for 958"
    ],
    "answer": "Option D for 958",
    "explanation": "Drug X works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 958)."
  },
  {
    "id": 959,
    "topic": "Anatomy",
    "question": "What is the mechanism of action of Drug Y?",
    "options": [
      "Option A for 959",
      "Option B for 959",
      "Option C for 959",
      "Option D for 959"
    ],
    "answer": "Option A for 959",
    "explanation": "Drug Y works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 959)."
  },
  {
    "id": 960,
    "topic": "Microbiology",
    "question": "What is the mechanism of action of Drug Z?",
    "options": [
      "Option A for 960",
      "Option B for 960",
      "Option C for 960",
      "Option D for 960"
    ],
    "answer": "Option B for 960",
    "explanation": "Drug Z works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 960)."
  },
  {
    "id": 961,
    "topic": "Physiology",
    "question": "What is the mechanism of action of Drug A?",
    "options": [
      "Option A for 961",
      "Option B for 961",
      "Option C for 961",
      "Option D for 961"
    ],
    "answer": "Option C for 961",
    "explanation": "Drug A works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 961)."
  },
  {
    "id": 962,
    "topic": "Pharmacology",
    "question": "What is the mechanism of action of Drug B?",
    "options": [
      "Option A for 962",
      "Option B for 962",
      "Option C for 962",
      "Option D for 962"
    ],
    "answer": "Option D for 962",
    "explanation": "Drug B works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 962)."
  },
  {
    "id": 963,
    "topic": "Microbiology",
    "question": "What is the mechanism of action of Drug C?",
    "options": [
      "Option A for 963",
      "Option B for 963",
      "Option C for 963",
      "Option D for 963"
    ],
    "answer": "Option A for 963",
    "explanation": "Drug C works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 963)."
  },
  {
    "id": 964,
    "topic": "Pathology",
    "question": "What is the mechanism of action of Drug D?",
    "options": [
      "Option A for 964",
      "Option B for 964",
      "Option C for 964",
      "Option D for 964"
    ],
    "answer": "Option B for 964",
    "explanation": "Drug D works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 964)."
  },
  {
    "id": 965,
    "topic": "OBG",
    "question": "What is the mechanism of action of Drug E?",
    "options": [
      "Option A for 965",
      "Option B for 965",
      "Option C for 965",
      "Option D for 965"
    ],
    "answer": "Option C for 965",
    "explanation": "Drug E works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 965)."
  },
  {
    "id": 966,
    "topic": "Anatomy",
    "question": "What is the mechanism of action of Drug F?",
    "options": [
      "Option A for 966",
      "Option B for 966",
      "Option C for 966",
      "Option D for 966"
    ],
    "answer": "Option D for 966",
    "explanation": "Drug F works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 966)."
  },
  {
    "id": 967,
    "topic": "Surgery",
    "question": "What is the mechanism of action of Drug G?",
    "options": [
      "Option A for 967",
      "Option B for 967",
      "Option C for 967",
      "Option D for 967"
    ],
    "answer": "Option A for 967",
    "explanation": "Drug G works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 967)."
  },
  {
    "id": 968,
    "topic": "Community Medicine",
    "question": "What is the mechanism of action of Drug H?",
    "options": [
      "Option A for 968",
      "Option B for 968",
      "Option C for 968",
      "Option D for 968"
    ],
    "answer": "Option B for 968",
    "explanation": "Drug H works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 968)."
  },
  {
    "id": 969,
    "topic": "Pharmacology",
    "question": "What is the mechanism of action of Drug I?",
    "options": [
      "Option A for 969",
      "Option B for 969",
      "Option C for 969",
      "Option D for 969"
    ],
    "answer": "Option C for 969",
    "explanation": "Drug I works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 969)."
  },
  {
    "id": 970,
    "topic": "Biochemistry",
    "question": "What is the mechanism of action of Drug J?",
    "options": [
      "Option A for 970",
      "Option B for 970",
      "Option C for 970",
      "Option D for 970"
    ],
    "answer": "Option D for 970",
    "explanation": "Drug J works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 970)."
  },
  {
    "id": 971,
    "topic": "Pathology",
    "question": "What is the mechanism of action of Drug K?",
    "options": [
      "Option A for 971",
      "Option B for 971",
      "Option C for 971",
      "Option D for 971"
    ],
    "answer": "Option A for 971",
    "explanation": "Drug K works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 971)."
  },
  {
    "id": 972,
    "topic": "Microbiology",
    "question": "What is the mechanism of action of Drug L?",
    "options": [
      "Option A for 972",
      "Option B for 972",
      "Option C for 972",
      "Option D for 972"
    ],
    "answer": "Option B for 972",
    "explanation": "Drug L works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 972)."
  },
  {
    "id": 973,
    "topic": "Surgery",
    "question": "What is the mechanism of action of Drug M?",
    "options": [
      "Option A for 973",
      "Option B for 973",
      "Option C for 973",
      "Option D for 973"
    ],
    "answer": "Option C for 973",
    "explanation": "Drug M works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 973)."
  },
  {
    "id": 974,
    "topic": "Medicine",
    "question": "What is the mechanism of action of Drug N?",
    "options": [
      "Option A for 974",
      "Option B for 974",
      "Option C for 974",
      "Option D for 974"
    ],
    "answer": "Option D for 974",
    "explanation": "Drug N works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 974)."
  },
  {
    "id": 975,
    "topic": "Anatomy",
    "question": "What is the mechanism of action of Drug O?",
    "options": [
      "Option A for 975",
      "Option B for 975",
      "Option C for 975",
      "Option D for 975"
    ],
    "answer": "Option A for 975",
    "explanation": "Drug O works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 975)."
  },
  {
    "id": 976,
    "topic": "Anatomy",
    "question": "What is the mechanism of action of Drug P?",
    "options": [
      "Option A for 976",
      "Option B for 976",
      "Option C for 976",
      "Option D for 976"
    ],
    "answer": "Option B for 976",
    "explanation": "Drug P works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 976)."
  },
  {
    "id": 977,
    "topic": "Medicine",
    "question": "What is the mechanism of action of Drug Q?",
    "options": [
      "Option A for 977",
      "Option B for 977",
      "Option C for 977",
      "Option D for 977"
    ],
    "answer": "Option C for 977",
    "explanation": "Drug Q works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 977)."
  },
  {
    "id": 978,
    "topic": "Medicine",
    "question": "What is the mechanism of action of Drug R?",
    "options": [
      "Option A for 978",
      "Option B for 978",
      "Option C for 978",
      "Option D for 978"
    ],
    "answer": "Option D for 978",
    "explanation": "Drug R works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 978)."
  },
  {
    "id": 979,
    "topic": "Biochemistry",
    "question": "What is the mechanism of action of Drug S?",
    "options": [
      "Option A for 979",
      "Option B for 979",
      "Option C for 979",
      "Option D for 979"
    ],
    "answer": "Option A for 979",
    "explanation": "Drug S works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 979)."
  },
  {
    "id": 980,
    "topic": "Community Medicine",
    "question": "What is the mechanism of action of Drug T?",
    "options": [
      "Option A for 980",
      "Option B for 980",
      "Option C for 980",
      "Option D for 980"
    ],
    "answer": "Option B for 980",
    "explanation": "Drug T works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 980)."
  },
  {
    "id": 981,
    "topic": "Surgery",
    "question": "What is the mechanism of action of Drug U?",
    "options": [
      "Option A for 981",
      "Option B for 981",
      "Option C for 981",
      "Option D for 981"
    ],
    "answer": "Option C for 981",
    "explanation": "Drug U works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 981)."
  },
  {
    "id": 982,
    "topic": "Pharmacology",
    "question": "What is the mechanism of action of Drug V?",
    "options": [
      "Option A for 982",
      "Option B for 982",
      "Option C for 982",
      "Option D for 982"
    ],
    "answer": "Option D for 982",
    "explanation": "Drug V works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 982)."
  },
  {
    "id": 983,
    "topic": "Anatomy",
    "question": "What is the mechanism of action of Drug W?",
    "options": [
      "Option A for 983",
      "Option B for 983",
      "Option C for 983",
      "Option D for 983"
    ],
    "answer": "Option A for 983",
    "explanation": "Drug W works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 983)."
  },
  {
    "id": 984,
    "topic": "Surgery",
    "question": "What is the mechanism of action of Drug X?",
    "options": [
      "Option A for 984",
      "Option B for 984",
      "Option C for 984",
      "Option D for 984"
    ],
    "answer": "Option B for 984",
    "explanation": "Drug X works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 984)."
  },
  {
    "id": 985,
    "topic": "Microbiology",
    "question": "What is the mechanism of action of Drug Y?",
    "options": [
      "Option A for 985",
      "Option B for 985",
      "Option C for 985",
      "Option D for 985"
    ],
    "answer": "Option C for 985",
    "explanation": "Drug Y works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 985)."
  },
  {
    "id": 986,
    "topic": "Pharmacology",
    "question": "What is the mechanism of action of Drug Z?",
    "options": [
      "Option A for 986",
      "Option B for 986",
      "Option C for 986",
      "Option D for 986"
    ],
    "answer": "Option D for 986",
    "explanation": "Drug Z works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 986)."
  },
  {
    "id": 987,
    "topic": "Microbiology",
    "question": "What is the mechanism of action of Drug A?",
    "options": [
      "Option A for 987",
      "Option B for 987",
      "Option C for 987",
      "Option D for 987"
    ],
    "answer": "Option A for 987",
    "explanation": "Drug A works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 987)."
  },
  {
    "id": 988,
    "topic": "Community Medicine",
    "question": "What is the mechanism of action of Drug B?",
    "options": [
      "Option A for 988",
      "Option B for 988",
      "Option C for 988",
      "Option D for 988"
    ],
    "answer": "Option B for 988",
    "explanation": "Drug B works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 988)."
  },
  {
    "id": 989,
    "topic": "Physiology",
    "question": "What is the mechanism of action of Drug C?",
    "options": [
      "Option A for 989",
      "Option B for 989",
      "Option C for 989",
      "Option D for 989"
    ],
    "answer": "Option C for 989",
    "explanation": "Drug C works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 989)."
  },
  {
    "id": 990,
    "topic": "Anatomy",
    "question": "What is the mechanism of action of Drug D?",
    "options": [
      "Option A for 990",
      "Option B for 990",
      "Option C for 990",
      "Option D for 990"
    ],
    "answer": "Option D for 990",
    "explanation": "Drug D works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 990)."
  },
  {
    "id": 991,
    "topic": "Community Medicine",
    "question": "What is the mechanism of action of Drug E?",
    "options": [
      "Option A for 991",
      "Option B for 991",
      "Option C for 991",
      "Option D for 991"
    ],
    "answer": "Option A for 991",
    "explanation": "Drug E works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 991)."
  },
  {
    "id": 992,
    "topic": "Pharmacology",
    "question": "What is the mechanism of action of Drug F?",
    "options": [
      "Option A for 992",
      "Option B for 992",
      "Option C for 992",
      "Option D for 992"
    ],
    "answer": "Option B for 992",
    "explanation": "Drug F works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 992)."
  },
  {
    "id": 993,
    "topic": "Community Medicine",
    "question": "What is the mechanism of action of Drug G?",
    "options": [
      "Option A for 993",
      "Option B for 993",
      "Option C for 993",
      "Option D for 993"
    ],
    "answer": "Option C for 993",
    "explanation": "Drug G works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 993)."
  },
  {
    "id": 994,
    "topic": "Medicine",
    "question": "What is the mechanism of action of Drug H?",
    "options": [
      "Option A for 994",
      "Option B for 994",
      "Option C for 994",
      "Option D for 994"
    ],
    "answer": "Option D for 994",
    "explanation": "Drug H works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 994)."
  },
  {
    "id": 995,
    "topic": "Microbiology",
    "question": "What is the mechanism of action of Drug I?",
    "options": [
      "Option A for 995",
      "Option B for 995",
      "Option C for 995",
      "Option D for 995"
    ],
    "answer": "Option A for 995",
    "explanation": "Drug I works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 995)."
  },
  {
    "id": 996,
    "topic": "Physiology",
    "question": "What is the mechanism of action of Drug J?",
    "options": [
      "Option A for 996",
      "Option B for 996",
      "Option C for 996",
      "Option D for 996"
    ],
    "answer": "Option B for 996",
    "explanation": "Drug J works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 996)."
  },
  {
    "id": 997,
    "topic": "Pharmacology",
    "question": "What is the mechanism of action of Drug K?",
    "options": [
      "Option A for 997",
      "Option B for 997",
      "Option C for 997",
      "Option D for 997"
    ],
    "answer": "Option C for 997",
    "explanation": "Drug K works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 997)."
  },
  {
    "id": 998,
    "topic": "Medicine",
    "question": "What is the mechanism of action of Drug L?",
    "options": [
      "Option A for 998",
      "Option B for 998",
      "Option C for 998",
      "Option D for 998"
    ],
    "answer": "Option D for 998",
    "explanation": "Drug L works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 998)."
  },
  {
    "id": 999,
    "topic": "Pharmacology",
    "question": "What is the mechanism of action of Drug M?",
    "options": [
      "Option A for 999",
      "Option B for 999",
      "Option C for 999",
      "Option D for 999"
    ],
    "answer": "Option A for 999",
    "explanation": "Drug M works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 999)."
  },
  {
    "id": 1000,
    "topic": "Medicine",
    "question": "What is the mechanism of action of Drug N?",
    "options": [
      "Option A for 1000",
      "Option B for 1000",
      "Option C for 1000",
      "Option D for 1000"
    ],
    "answer": "Option B for 1000",
    "explanation": "Drug N works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 1000)."
  },
  {
    "id": 1001,
    "topic": "Community Medicine",
    "question": "What is the mechanism of action of Drug O?",
    "options": [
      "Option A for 1001",
      "Option B for 1001",
      "Option C for 1001",
      "Option D for 1001"
    ],
    "answer": "Option C for 1001",
    "explanation": "Drug O works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 1001)."
  },
  {
    "id": 1002,
    "topic": "Medicine",
    "question": "What is the mechanism of action of Drug P?",
    "options": [
      "Option A for 1002",
      "Option B for 1002",
      "Option C for 1002",
      "Option D for 1002"
    ],
    "answer": "Option D for 1002",
    "explanation": "Drug P works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 1002)."
  },
  {
    "id": 1003,
    "topic": "Pharmacology",
    "question": "What is the mechanism of action of Drug Q?",
    "options": [
      "Option A for 1003",
      "Option B for 1003",
      "Option C for 1003",
      "Option D for 1003"
    ],
    "answer": "Option A for 1003",
    "explanation": "Drug Q works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 1003)."
  },
  {
    "id": 1004,
    "topic": "Surgery",
    "question": "What is the mechanism of action of Drug R?",
    "options": [
      "Option A for 1004",
      "Option B for 1004",
      "Option C for 1004",
      "Option D for 1004"
    ],
    "answer": "Option B for 1004",
    "explanation": "Drug R works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 1004)."
  },
  {
    "id": 1005,
    "topic": "OBG",
    "question": "What is the mechanism of action of Drug S?",
    "options": [
      "Option A for 1005",
      "Option B for 1005",
      "Option C for 1005",
      "Option D for 1005"
    ],
    "answer": "Option C for 1005",
    "explanation": "Drug S works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 1005)."
  },
  {
    "id": 1006,
    "topic": "Medicine",
    "question": "What is the mechanism of action of Drug T?",
    "options": [
      "Option A for 1006",
      "Option B for 1006",
      "Option C for 1006",
      "Option D for 1006"
    ],
    "answer": "Option D for 1006",
    "explanation": "Drug T works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 1006)."
  },
  {
    "id": 1007,
    "topic": "Surgery",
    "question": "What is the mechanism of action of Drug U?",
    "options": [
      "Option A for 1007",
      "Option B for 1007",
      "Option C for 1007",
      "Option D for 1007"
    ],
    "answer": "Option A for 1007",
    "explanation": "Drug U works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 1007)."
  },
  {
    "id": 1008,
    "topic": "Biochemistry",
    "question": "What is the mechanism of action of Drug V?",
    "options": [
      "Option A for 1008",
      "Option B for 1008",
      "Option C for 1008",
      "Option D for 1008"
    ],
    "answer": "Option B for 1008",
    "explanation": "Drug V works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 1008)."
  },
  {
    "id": 1009,
    "topic": "Microbiology",
    "question": "What is the mechanism of action of Drug W?",
    "options": [
      "Option A for 1009",
      "Option B for 1009",
      "Option C for 1009",
      "Option D for 1009"
    ],
    "answer": "Option C for 1009",
    "explanation": "Drug W works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 1009)."
  },
  {
    "id": 1010,
    "topic": "Microbiology",
    "question": "What is the mechanism of action of Drug X?",
    "options": [
      "Option A for 1010",
      "Option B for 1010",
      "Option C for 1010",
      "Option D for 1010"
    ],
    "answer": "Option D for 1010",
    "explanation": "Drug X works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 1010)."
  },
  {
    "id": 1011,
    "topic": "Biochemistry",
    "question": "What is the mechanism of action of Drug Y?",
    "options": [
      "Option A for 1011",
      "Option B for 1011",
      "Option C for 1011",
      "Option D for 1011"
    ],
    "answer": "Option A for 1011",
    "explanation": "Drug Y works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 1011)."
  },
  {
    "id": 1012,
    "topic": "Pathology",
    "question": "What is the mechanism of action of Drug Z?",
    "options": [
      "Option A for 1012",
      "Option B for 1012",
      "Option C for 1012",
      "Option D for 1012"
    ],
    "answer": "Option B for 1012",
    "explanation": "Drug Z works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 1012)."
  },
  {
    "id": 1013,
    "topic": "OBG",
    "question": "What is the mechanism of action of Drug A?",
    "options": [
      "Option A for 1013",
      "Option B for 1013",
      "Option C for 1013",
      "Option D for 1013"
    ],
    "answer": "Option C for 1013",
    "explanation": "Drug A works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 1013)."
  },
  {
    "id": 1014,
    "topic": "Physiology",
    "question": "What is the mechanism of action of Drug B?",
    "options": [
      "Option A for 1014",
      "Option B for 1014",
      "Option C for 1014",
      "Option D for 1014"
    ],
    "answer": "Option D for 1014",
    "explanation": "Drug B works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 1014)."
  },
  {
    "id": 1015,
    "topic": "Biochemistry",
    "question": "What is the mechanism of action of Drug C?",
    "options": [
      "Option A for 1015",
      "Option B for 1015",
      "Option C for 1015",
      "Option D for 1015"
    ],
    "answer": "Option A for 1015",
    "explanation": "Drug C works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 1015)."
  },
  {
    "id": 1016,
    "topic": "Pathology",
    "question": "What is the mechanism of action of Drug D?",
    "options": [
      "Option A for 1016",
      "Option B for 1016",
      "Option C for 1016",
      "Option D for 1016"
    ],
    "answer": "Option B for 1016",
    "explanation": "Drug D works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 1016)."
  },
  {
    "id": 1017,
    "topic": "Pathology",
    "question": "What is the mechanism of action of Drug E?",
    "options": [
      "Option A for 1017",
      "Option B for 1017",
      "Option C for 1017",
      "Option D for 1017"
    ],
    "answer": "Option C for 1017",
    "explanation": "Drug E works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 1017)."
  },
  {
    "id": 1018,
    "topic": "Community Medicine",
    "question": "What is the mechanism of action of Drug F?",
    "options": [
      "Option A for 1018",
      "Option B for 1018",
      "Option C for 1018",
      "Option D for 1018"
    ],
    "answer": "Option D for 1018",
    "explanation": "Drug F works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 1018)."
  },
  {
    "id": 1019,
    "topic": "OBG",
    "question": "What is the mechanism of action of Drug G?",
    "options": [
      "Option A for 1019",
      "Option B for 1019",
      "Option C for 1019",
      "Option D for 1019"
    ],
    "answer": "Option A for 1019",
    "explanation": "Drug G works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 1019)."
  },
  {
    "id": 1020,
    "topic": "Microbiology",
    "question": "What is the mechanism of action of Drug H?",
    "options": [
      "Option A for 1020",
      "Option B for 1020",
      "Option C for 1020",
      "Option D for 1020"
    ],
    "answer": "Option B for 1020",
    "explanation": "Drug H works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 1020)."
  },
  {
    "id": 1021,
    "topic": "Medicine",
    "question": "What is the mechanism of action of Drug I?",
    "options": [
      "Option A for 1021",
      "Option B for 1021",
      "Option C for 1021",
      "Option D for 1021"
    ],
    "answer": "Option C for 1021",
    "explanation": "Drug I works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 1021)."
  },
  {
    "id": 1022,
    "topic": "OBG",
    "question": "What is the mechanism of action of Drug J?",
    "options": [
      "Option A for 1022",
      "Option B for 1022",
      "Option C for 1022",
      "Option D for 1022"
    ],
    "answer": "Option D for 1022",
    "explanation": "Drug J works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 1022)."
  },
  {
    "id": 1023,
    "topic": "Anatomy",
    "question": "What is the mechanism of action of Drug K?",
    "options": [
      "Option A for 1023",
      "Option B for 1023",
      "Option C for 1023",
      "Option D for 1023"
    ],
    "answer": "Option A for 1023",
    "explanation": "Drug K works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 1023)."
  },
  {
    "id": 1024,
    "topic": "Biochemistry",
    "question": "What is the mechanism of action of Drug L?",
    "options": [
      "Option A for 1024",
      "Option B for 1024",
      "Option C for 1024",
      "Option D for 1024"
    ],
    "answer": "Option B for 1024",
    "explanation": "Drug L works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 1024)."
  },
  {
    "id": 1025,
    "topic": "Surgery",
    "question": "What is the mechanism of action of Drug M?",
    "options": [
      "Option A for 1025",
      "Option B for 1025",
      "Option C for 1025",
      "Option D for 1025"
    ],
    "answer": "Option C for 1025",
    "explanation": "Drug M works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 1025)."
  },
  {
    "id": 1026,
    "topic": "Biochemistry",
    "question": "What is the mechanism of action of Drug N?",
    "options": [
      "Option A for 1026",
      "Option B for 1026",
      "Option C for 1026",
      "Option D for 1026"
    ],
    "answer": "Option D for 1026",
    "explanation": "Drug N works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 1026)."
  },
  {
    "id": 1027,
    "topic": "Biochemistry",
    "question": "What is the mechanism of action of Drug O?",
    "options": [
      "Option A for 1027",
      "Option B for 1027",
      "Option C for 1027",
      "Option D for 1027"
    ],
    "answer": "Option A for 1027",
    "explanation": "Drug O works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 1027)."
  },
  {
    "id": 1028,
    "topic": "Biochemistry",
    "question": "What is the mechanism of action of Drug P?",
    "options": [
      "Option A for 1028",
      "Option B for 1028",
      "Option C for 1028",
      "Option D for 1028"
    ],
    "answer": "Option B for 1028",
    "explanation": "Drug P works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 1028)."
  },
  {
    "id": 1029,
    "topic": "Pharmacology",
    "question": "What is the mechanism of action of Drug Q?",
    "options": [
      "Option A for 1029",
      "Option B for 1029",
      "Option C for 1029",
      "Option D for 1029"
    ],
    "answer": "Option C for 1029",
    "explanation": "Drug Q works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 1029)."
  },
  {
    "id": 1030,
    "topic": "Physiology",
    "question": "What is the mechanism of action of Drug R?",
    "options": [
      "Option A for 1030",
      "Option B for 1030",
      "Option C for 1030",
      "Option D for 1030"
    ],
    "answer": "Option D for 1030",
    "explanation": "Drug R works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 1030)."
  },
  {
    "id": 1031,
    "topic": "Surgery",
    "question": "What is the mechanism of action of Drug S?",
    "options": [
      "Option A for 1031",
      "Option B for 1031",
      "Option C for 1031",
      "Option D for 1031"
    ],
    "answer": "Option A for 1031",
    "explanation": "Drug S works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 1031)."
  },
  {
    "id": 1032,
    "topic": "Medicine",
    "question": "What is the mechanism of action of Drug T?",
    "options": [
      "Option A for 1032",
      "Option B for 1032",
      "Option C for 1032",
      "Option D for 1032"
    ],
    "answer": "Option B for 1032",
    "explanation": "Drug T works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 1032)."
  },
  {
    "id": 1033,
    "topic": "OBG",
    "question": "What is the mechanism of action of Drug U?",
    "options": [
      "Option A for 1033",
      "Option B for 1033",
      "Option C for 1033",
      "Option D for 1033"
    ],
    "answer": "Option C for 1033",
    "explanation": "Drug U works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 1033)."
  },
  {
    "id": 1034,
    "topic": "Anatomy",
    "question": "What is the mechanism of action of Drug V?",
    "options": [
      "Option A for 1034",
      "Option B for 1034",
      "Option C for 1034",
      "Option D for 1034"
    ],
    "answer": "Option D for 1034",
    "explanation": "Drug V works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 1034)."
  },
  {
    "id": 1035,
    "topic": "Anatomy",
    "question": "What is the mechanism of action of Drug W?",
    "options": [
      "Option A for 1035",
      "Option B for 1035",
      "Option C for 1035",
      "Option D for 1035"
    ],
    "answer": "Option A for 1035",
    "explanation": "Drug W works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 1035)."
  },
  {
    "id": 1036,
    "topic": "Microbiology",
    "question": "What is the mechanism of action of Drug X?",
    "options": [
      "Option A for 1036",
      "Option B for 1036",
      "Option C for 1036",
      "Option D for 1036"
    ],
    "answer": "Option B for 1036",
    "explanation": "Drug X works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 1036)."
  },
  {
    "id": 1037,
    "topic": "Surgery",
    "question": "What is the mechanism of action of Drug Y?",
    "options": [
      "Option A for 1037",
      "Option B for 1037",
      "Option C for 1037",
      "Option D for 1037"
    ],
    "answer": "Option C for 1037",
    "explanation": "Drug Y works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 1037)."
  },
  {
    "id": 1038,
    "topic": "Pharmacology",
    "question": "What is the mechanism of action of Drug Z?",
    "options": [
      "Option A for 1038",
      "Option B for 1038",
      "Option C for 1038",
      "Option D for 1038"
    ],
    "answer": "Option D for 1038",
    "explanation": "Drug Z works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 1038)."
  },
  {
    "id": 1039,
    "topic": "Biochemistry",
    "question": "What is the mechanism of action of Drug A?",
    "options": [
      "Option A for 1039",
      "Option B for 1039",
      "Option C for 1039",
      "Option D for 1039"
    ],
    "answer": "Option A for 1039",
    "explanation": "Drug A works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 1039)."
  },
  {
    "id": 1040,
    "topic": "Pathology",
    "question": "What is the mechanism of action of Drug B?",
    "options": [
      "Option A for 1040",
      "Option B for 1040",
      "Option C for 1040",
      "Option D for 1040"
    ],
    "answer": "Option B for 1040",
    "explanation": "Drug B works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 1040)."
  },
  {
    "id": 1041,
    "topic": "Biochemistry",
    "question": "What is the mechanism of action of Drug C?",
    "options": [
      "Option A for 1041",
      "Option B for 1041",
      "Option C for 1041",
      "Option D for 1041"
    ],
    "answer": "Option C for 1041",
    "explanation": "Drug C works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 1041)."
  },
  {
    "id": 1042,
    "topic": "Physiology",
    "question": "What is the mechanism of action of Drug D?",
    "options": [
      "Option A for 1042",
      "Option B for 1042",
      "Option C for 1042",
      "Option D for 1042"
    ],
    "answer": "Option D for 1042",
    "explanation": "Drug D works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 1042)."
  },
  {
    "id": 1043,
    "topic": "Physiology",
    "question": "What is the mechanism of action of Drug E?",
    "options": [
      "Option A for 1043",
      "Option B for 1043",
      "Option C for 1043",
      "Option D for 1043"
    ],
    "answer": "Option A for 1043",
    "explanation": "Drug E works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 1043)."
  },
  {
    "id": 1044,
    "topic": "Surgery",
    "question": "What is the mechanism of action of Drug F?",
    "options": [
      "Option A for 1044",
      "Option B for 1044",
      "Option C for 1044",
      "Option D for 1044"
    ],
    "answer": "Option B for 1044",
    "explanation": "Drug F works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 1044)."
  },
  {
    "id": 1045,
    "topic": "Physiology",
    "question": "What is the mechanism of action of Drug G?",
    "options": [
      "Option A for 1045",
      "Option B for 1045",
      "Option C for 1045",
      "Option D for 1045"
    ],
    "answer": "Option C for 1045",
    "explanation": "Drug G works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 1045)."
  },
  {
    "id": 1046,
    "topic": "Medicine",
    "question": "What is the mechanism of action of Drug H?",
    "options": [
      "Option A for 1046",
      "Option B for 1046",
      "Option C for 1046",
      "Option D for 1046"
    ],
    "answer": "Option D for 1046",
    "explanation": "Drug H works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 1046)."
  },
  {
    "id": 1047,
    "topic": "Microbiology",
    "question": "What is the mechanism of action of Drug I?",
    "options": [
      "Option A for 1047",
      "Option B for 1047",
      "Option C for 1047",
      "Option D for 1047"
    ],
    "answer": "Option A for 1047",
    "explanation": "Drug I works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 1047)."
  },
  {
    "id": 1048,
    "topic": "Surgery",
    "question": "What is the mechanism of action of Drug J?",
    "options": [
      "Option A for 1048",
      "Option B for 1048",
      "Option C for 1048",
      "Option D for 1048"
    ],
    "answer": "Option B for 1048",
    "explanation": "Drug J works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 1048)."
  },
  {
    "id": 1049,
    "topic": "Biochemistry",
    "question": "What is the mechanism of action of Drug K?",
    "options": [
      "Option A for 1049",
      "Option B for 1049",
      "Option C for 1049",
      "Option D for 1049"
    ],
    "answer": "Option C for 1049",
    "explanation": "Drug K works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 1049)."
  },
  {
    "id": 1050,
    "topic": "OBG",
    "question": "What is the mechanism of action of Drug L?",
    "options": [
      "Option A for 1050",
      "Option B for 1050",
      "Option C for 1050",
      "Option D for 1050"
    ],
    "answer": "Option D for 1050",
    "explanation": "Drug L works by inhibiting enzyme XYZ, leading to decreased ABC synthesis. This action is crucial in treating conditions such as ... (simulated explanation for ID 1050)."
  }
];

export default MCQData;