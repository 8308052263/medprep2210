// src/components/DetailedExplanations/PYQData.jsx

const PYQs = [
  {
    question: "Which nerve is most commonly injured in humeral shaft fractures leading to wrist drop?",
    options: ["Ulnar nerve", "Median nerve", "Radial nerve", "Axillary nerve"],
    answer: "Radial nerve",
    explanation: `
Full Explanation:
• Wrist drop is a common clinical sign resulting from injury to the radial nerve, often seen in fractures of the humeral shaft.
• The radial nerve supplies the wrist and finger extensors, so its damage leads to an inability to extend the wrist.
• Common causes include fracture displacement (especially in the spiral groove) and compression injuries.
Mnemonic: "Radial nerve - Raises the wrist; drop when damaged."
Key Table:
| Nerve         | Function                           | Deficit if Injured     |
|---------------|------------------------------------|------------------------|
| Radial nerve  | Extension of wrist, fingers, thumb  | Wrist drop             |
MCQ Tip:
- When clinical findings show inability to extend the wrist along with sensory loss on the dorsal hand, consider radial nerve injury.
`
  },
  {
    question: "Which electrolyte abnormality is most characteristic of Addison's disease?",
    options: ["Hyperkalemia", "Hypokalemia", "Hypernatremia", "Hyponatremia"],
    answer: "Hyponatremia",
    explanation: `
Full Explanation:
• Addison's disease (primary adrenal insufficiency) is marked by a deficiency of cortisol and aldosterone.
• Aldosterone deficiency leads to loss of sodium and retention of potassium.
• The resulting electrolyte disturbances include hyponatremia (low sodium) and hyperkalemia (high potassium), with hyponatremia being more characteristic.
Mnemonic: "Addison's = A for Aldosterone deficiency, low sodium."
Key Table:
| Hormone        | Deficiency Effect                |
|----------------|----------------------------------|
| Aldosterone    | Hyponatremia, Hyperkalemia       |
MCQ Tip:
- In suspected adrenal insufficiency, the presence of hyponatremia is a key diagnostic clue.
`
  },
  {
    question: "Which clinical sign is a hallmark of Kawasaki disease?",
    options: ["Malar rash", "Strawberry tongue", "Bull's eye rash", "Shingles"],
    answer: "Strawberry tongue",
    explanation: `
Full Explanation:
• Kawasaki disease is an acute vasculitis of childhood.
• A hallmark clinical feature is a "strawberry tongue", which is a red, bumpy tongue due to inflammation.
• Other features include fever, rash, conjunctival injection, and cervical lymphadenopathy.
Mnemonic: "Kawasaki: tongue turns strawberry!"
Key Table:
| Feature              | Description                                 |
|----------------------|---------------------------------------------|
| Strawberry tongue    | Red, bumpy appearance in Kawasaki disease    |
MCQ Tip:
- The presence of a strawberry tongue in a febrile child is strongly suggestive of Kawasaki disease.
`
  },
  {
    question: "Which test is the most sensitive for diagnosing pulmonary embolism in a low-risk patient?",
    options: ["CT pulmonary angiography", "Ventilation-perfusion scan", "D-dimer test", "Chest X-ray"],
    answer: "D-dimer test",
    explanation: `
Full Explanation:
• In low-risk patients, the D-dimer test is used as a screening tool for pulmonary embolism.
• A negative D-dimer test effectively rules out pulmonary embolism due to its high sensitivity, though it has low specificity.
• This test is quick, cost-effective, and non-invasive.
Mnemonic: "D for D-dimer, detects dissolving clots."
Key Table:
| Test               | Sensitivity vs Specificity          |
|--------------------|-------------------------------------|
| D-dimer            | High sensitivity, low specificity    |
MCQ Tip:
- Use the D-dimer test to rule out PE in low-probability cases, preventing unnecessary imaging.
`
  },
  {
    question: "Which radiological sign is indicative of osteomyelitis in children?",
    options: ["Codman's triangle", "Sunburst appearance", "Lytic lesion with sequestrum", "Bone sclerosis"],
    answer: "Lytic lesion with sequestrum",
    explanation: `
Full Explanation:
• Osteomyelitis in children often presents with a lytic lesion accompanied by a sequestrum, which is a piece of dead bone separated from living bone.
• This finding is due to the infection causing bone destruction and necrosis.
• Early identification and treatment are crucial to prevent long-term complications.
Mnemonic: "Osteo = infection eats bone – look for lytic and sequestrum."
Key Table:
| Radiologic Finding | Description                         |
|--------------------|-------------------------------------|
| Sequestrum         | Dead bone seen on x-ray in osteomyelitis |
MCQ Tip:
- A lytic lesion combined with a sequestrum on imaging is strongly suggestive of osteomyelitis in pediatric patients.
`
  }
];

export default PYQs;