// src/components/DetailedExplanations/MCQData.jsx

const MCQs = [
  {
    question: "What is the antidote for paracetamol poisoning?",
    options: ["N-acetylcysteine", "Vitamin K", "Naloxone", "Atropine"],
    answer: "N-acetylcysteine",
    explanation: `
Full Explanation:
• Paracetamol overdose leads to accumulation of the toxic metabolite NAPQI.
• N-acetylcysteine replenishes glutathione and detoxifies NAPQI.
• It is most effective when administered within 8-10 hours of overdose.
• Common causes include intentional overdose and unintentional chronic overdose.
Mnemonic: "NAC cures NAC (NAPQI)."
Key Table:
| Agent              | Mechanism                                  |
|--------------------|--------------------------------------------|
| N-acetylcysteine   | Replenishes glutathione, detoxifies NAPQI    |
MCQ Tip:
- Timing is critical—early treatment is essential for preventing liver failure.
`
  },
  {
    question: "Which hormone is secreted by the corpus luteum?",
    options: ["Estrogen", "Progesterone", "FSH", "LH"],
    answer: "Progesterone",
    explanation: `
Full Explanation:
• The corpus luteum is formed in the ovary after ovulation.
• Its primary function is the secretion of progesterone to maintain the endometrial lining.
• It also secretes small amounts of estrogen.
• This hormone is crucial for preparing the uterus for possible pregnancy.
Mnemonic: "Luteal phase = Luteal, Lifts Progesterone."
Key Table:
| Phase         | Hormone Secretion             |
|---------------|-------------------------------|
| Luteal Phase  | Mainly Progesterone; minor Estrogen |
MCQ Tip:
- Remember, the corpus luteum’s key role is in pregnancy maintenance via progesterone secretion.
`
  },
  {
    question: "Which branch of the coronary artery supplies the SA node?",
    options: ["Right coronary artery", "Left coronary artery", "Circumflex artery", "Posterior descending artery"],
    answer: "Right coronary artery",
    explanation: `
Full Explanation:
• In approximately 60-70% of individuals, the SA node is supplied by a branch of the right coronary artery (RCA).
• This branch is often known as the SA nodal artery.
• Adequate perfusion of the SA node is essential for proper heart rhythm and pacemaker activity.
Mnemonic: "Right is bright for the pacemaker."
Key Table:
| Structure        | Arterial Supply           |
|------------------|---------------------------|
| SA Node          | Right coronary artery      |
MCQ Tip:
- In clinical scenarios of arrhythmia, consider the RCA as a potential culprit.
`
  },
  {
    question: "Which is the most common type of breast cancer?",
    options: ["Lobular carcinoma", "Ductal carcinoma", "Medullary carcinoma", "Inflammatory carcinoma"],
    answer: "Ductal carcinoma",
    explanation: `
Full Explanation:
• Invasive ductal carcinoma is the most common type of breast cancer (approximately 70-80% of cases).
• It originates in the milk ducts and invades surrounding breast tissue.
• Early detection through screening (mammography) can improve prognosis.
Mnemonic: "Ductal dominates breast cancer."
Key Table:
| Breast Cancer Type       | Frequency         |
|--------------------------|-------------------|
| Invasive ductal carcinoma| ~70-80%           |
MCQ Tip:
- Remember that ductal carcinoma is the most frequently encountered breast cancer subtype.
`
  },
  {
    question: "Which imaging finding is characterized by a 'sunburst appearance'?",
    options: ["Osteosarcoma", "Chondrosarcoma", "Multiple myeloma", "Giant cell tumor"],
    answer: "Osteosarcoma",
    explanation: `
Full Explanation:
• Osteosarcoma typically shows a 'sunburst appearance' on radiography due to aggressive periosteal reaction.
• It is a malignant bone tumor commonly seen in adolescents.
• Early diagnosis is key to treatment and improving survival.
Mnemonic: "Osteo = Sunburst like a star."
Key Table:
| Tumor Type    | Radiographic Feature           |
|---------------|--------------------------------|
| Osteosarcoma  | Sunburst periosteal reaction   |
MCQ Tip:
- The combination of bone destruction and reactive bone formation is a hint toward osteosarcoma.
`
  }
];

export default MCQs;