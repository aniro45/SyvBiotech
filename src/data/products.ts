export interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  image: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "CardioGuard Plus",
    category: "Cardiovascular",
    description: "Advanced medication for cardiovascular health management",
    image: "/products/cardio.jpg"
  },
  {
    id: 2,
    name: "NeuroBalance",
    category: "Neurology",
    description: "Innovative treatment for neurological conditions",
    image: "/products/neuro.jpg"
  },
  {
    id: 3,
    name: "ImmunoBoost Pro",
    category: "Immunology",
    description: "Enhanced immune system support medication",
    image: "/products/immune.jpg"
  },
  {
    id: 4,
    name: "DiabeCare",
    category: "Diabetes",
    description: "Comprehensive diabetes management solution",
    image: "/products/diabetes.jpg"
  },
  {
    id: 5,
    name: "ArthroRelief",
    category: "Rheumatology",
    description: "Advanced arthritis and joint pain relief",
    image: "/products/arthritis.jpg"
  },
  {
    id: 6,
    name: "RespiClear",
    category: "Respiratory",
    description: "Respiratory health management medication",
    image: "/products/respiratory.jpg"
  }
];