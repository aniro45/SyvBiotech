import { productImages } from "../Helpers/imageLinks";
export interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  image: string;
  summary?: string[];
}

export const products: Product[] = [
  {
    id: 1,
    name: "Evaroz-XT",
    category: "Nutraceutical",
    description:
      "Formulated to support the management of PCOS by targeting adipose tissue and ovarian health.",
    image: productImages.evaroz_xt,
    summary: [
      "Helps regulate hormonal balance for better reproductive health.",
      "Supports ovarian function and improves menstrual cycles.",
      "Reduces inflammation in adipose tissue, aiding in weight management.",
      "Contains essential nutrients to enhance metabolic function.",
      "Promotes insulin sensitivity to reduce PCOS symptoms.",
      "Enhances overall energy levels and reduces fatigue.",
      "Aids in reducing oxidative stress for cellular health.",
      "Formulated with scientifically backed ingredients for effectiveness.",
      "Supports hair and skin health affected by PCOS.",
      "Helps manage cravings and supports healthy eating habits.",
    ],
  },
  {
    id: 2,
    name: "For 7",
    category: "Nutraceutical",
    description: "Aiding in Bacterial Vaginosis (BV) management.",
    image: productImages.for_7,
    summary: [
      "Supports the natural balance of vaginal flora.",
      "Helps reduce recurrence of Bacterial Vaginosis.",
      "Aids in restoring pH levels for optimal vaginal health.",
      "Contains probiotics to promote beneficial bacteria growth.",
      "Provides relief from discomfort and irritation.",
      "Enhances immune response to prevent infections.",
      "Supports overall reproductive wellness.",
      "May improve vaginal odor and reduce discharge issues.",
      "Developed with research-backed ingredients.",
      "Safe for long-term use under medical supervision.",
    ],
  },
  {
    id: 3,
    name: "Key2Gro",
    category: "Nutraceutical",
    description:
      "Supports the management of intrauterine growth restriction, promoting optimal fetal development.",
    image: productImages.key2grow,
    summary: [
      "Provides essential nutrients for fetal growth.",
      "Supports optimal placental function for nutrient transfer.",
      "Aids in reducing oxidative stress in pregnancy.",
      "Promotes healthy fetal weight and organ development.",
      "Enhances maternal blood flow for better oxygenation.",
      "Reduces the risk of pregnancy complications.",
      "Contains vitamins and minerals for overall maternal health.",
      "Supports brain development in the growing fetus.",
      "Helps manage nutrient deficiencies during pregnancy.",
      "Designed to complement prenatal care and diet.",
    ],
  },
  {
    id: 4,
    name: "SyvTone",
    category: "Ayurvedic",
    description:
      "A non-hormonal menstrual regulator designed to manage abnormal uterine bleeding effectively.",
    image: productImages.syvtone,
    summary: [
      "Regulates menstrual cycles without hormonal interference.",
      "Reduces excessive menstrual bleeding and pain.",
      "Helps balance hormones naturally for reproductive health.",
      "Supports uterine health and reduces inflammation.",
      "Aids in managing irregular periods and spotting.",
      "Promotes overall well-being during menstruation.",
      "Contains Ayurvedic herbs with proven effectiveness.",
      "Helps alleviate symptoms of hormonal imbalances.",
      "Supports better energy levels and reduces fatigue.",
      "Safe and gentle on the body for long-term use.",
    ],
  },
  {
    id: 5,
    name: "Sitogam",
    category: "Ayurvedic",
    description:
      "A broad-spectrum, non-sedative cough remedy formulated to provide effective relief.",
    image: productImages.sitogam,
    summary: [
      "Relieves dry and productive coughs effectively.",
      "Supports lung function with Ayurvedic ingredients.",
      "Non-sedative formula suitable for daily use.",
      "Helps reduce throat irritation and inflammation.",
      "Aids in clearing mucus for better breathing.",
      "Boosts immunity against respiratory infections.",
      "Suitable for all age groups with no drowsiness.",
      "Soothes sore throat and reduces coughing frequency.",
      "Provides relief from seasonal allergies and congestion.",
      "Safe and natural with no harmful additives.",
    ],
  },
  {
    id: 6,
    name: "Syv-500",
    category: "Ayurvedic",
    description:
      "Offers anti-histaminic, antibacterial, and antiviral benefits for comprehensive immune support.",
    image: productImages.syv_500,
    summary: [
      "Boosts immune function with herbal ingredients.",
      "Helps fight bacterial and viral infections naturally.",
      "Contains anti-histaminic properties for allergy relief.",
      "Supports respiratory health and reduces inflammation.",
      "Aids in quick recovery from common illnesses.",
      "Improves gut health and digestion for immunity boost.",
      "Reduces oxidative stress for overall wellness.",
      "Promotes natural detoxification of the body.",
      "Helps prevent recurrent infections and colds.",
      "Safe for regular consumption with no side effects.",
    ],
  },
  {
    id: 7,
    name: "Nuronect",
    category: "Ayurvedic",
    description:
      "Supports Neuro-Muscular health and aids in managing related disorders.",
    image: productImages.nuronect,
    summary: [
      "Promotes better nerve and muscle function.",
      "Supports recovery from neuro-muscular disorders.",
      "Reduces muscle spasms and nerve pain naturally.",
      "Aids in maintaining healthy joint mobility.",
      "Boosts circulation for improved muscle health.",
      "Helps manage chronic pain conditions effectively.",
      "Provides essential nutrients for nerve repair.",
      "Supports cognitive function and mental clarity.",
      "Reduces stress and promotes relaxation.",
      "Safe for long-term use with Ayurvedic benefits.",
    ],
  },
  {
    id: 8,
    name: "Puric-XT",
    category: "Ayurvedic",
    description:
      "Formulated to help alleviate pain caused by uric acid accumulation.",
    image: productImages.puric_xt,
    summary: [
      "Reduces uric acid levels naturally for pain relief.",
      "Supports joint health and reduces stiffness.",
      "Aids in preventing gout flare-ups effectively.",
      "Promotes kidney function for better uric acid removal.",
      "Helps in managing chronic joint discomfort.",
      "Contains anti-inflammatory Ayurvedic ingredients.",
      "Improves mobility and flexibility over time.",
      "Reduces swelling and enhances joint comfort.",
      "Safe for long-term use with no harsh chemicals.",
      "Supports an active and pain-free lifestyle.",
    ],
  },
  {
    id: 9,
    name: "Zious",
    category: "Nutraceutical",
    description:
      "A specialized hair supplement designed to nourish and strengthen hair.",
    image: productImages.zious,
    summary: [
      "Promotes stronger and healthier hair growth.",
      "Reduces hair fall and strengthens hair roots.",
      "Nourishes the scalp for improved follicle health.",
      "Provides essential vitamins for shinier hair.",
      "Aids in reducing dandruff and scalp irritation.",
      "Boosts collagen production for thicker hair.",
      "Protects hair from environmental damage.",
      "Supports overall hair structure and density.",
      "Helps in restoring hair moisture balance.",
      "Safe for daily consumption with natural ingredients.",
    ],
  },
  {
    id: 10,
    name: "PHF7",
    category: "Ayurvedic",
    description:
      "Developed for the integrated management of hemorrhoids and piles, providing natural relief.",
    image: productImages.phf7,
    summary: [
      "Provides natural relief from hemorrhoids and piles.",
      "Reduces pain, swelling, and discomfort.",
      "Supports healthy bowel movements for easy relief.",
      "Helps in shrinking hemorrhoidal tissues effectively.",
      "Aids in reducing bleeding and irritation.",
      "Promotes faster healing of affected areas.",
      "Contains Ayurvedic herbs for gentle relief.",
      "Improves digestive health and reduces constipation.",
      "Supports long-term hemorrhoid management naturally.",
      "Safe for continuous use with no harsh chemicals.",
    ],
  },
];
