export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconPath: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  petDetails: string;
  avatarPath: string;
}

export interface GardeFormula {
  id: string;
  title: string;
  badge?: string;
  isPopular?: boolean;
  description: string;
  price7Days: number;
  originalPrice7Days: number;
  price14Days?: number;
  originalPrice14Days?: number;
  advantages: string[];
  note?: string;
}

export interface BaladeOption {
  duration: string;
  label: string;
  description: string;
  singlePrice: number;
  forfaitPrice: number;
  forfaitSavings: number;
  unitPriceInForfait: number;
}

export interface ProcessStep {
  step: number;
  badge: string;
  title: string;
  description: string;
}

export const contactInfo = {
  phoneDisplay: "06 88 99 10 61",
  phoneRaw: "0688991961",
  email: "o.prevostat@gmail.com",
  hours: "9h - 20h (joignable 7j/7)",
  notice: "Uniquement par message (SMS ou WhatsApp) pour préserver le calme auprès des animaux lors des prestations.",
  whatsappUrl: `https://wa.me/33688991061?text=${encodeURIComponent(
    "Bonjour Ornella, je souhaiterais des renseignements pour la garde / balade de mon animal."
  )}`,
  smsUrl: `sms:0688991961?body=${encodeURIComponent(
    "Bonjour Ornella, je souhaiterais des renseignements pour la garde / balade de mon animal."
  )}`
};

export const villes: string[] = [
  "Le Vésinet",
  "Saint-Germain-en-Laye"
];

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    badge: "OFFERT (45 min)",
    title: "La Pré-visite à domicile",
    description:
      "Je viens vous rencontrer directement chez vous pour faire connaissance avec votre compagnon, comprendre ses habitudes et instaurer un vrai lien de confiance."
  },
  {
    step: 2,
    badge: "Réservation sûre",
    title: "Choix de formule & Acompte",
    description:
      "Nous choisissons la formule la plus adaptée (Long séjour, Nuit/Balades ou Visites). Un acompte de 30% bloque définitivement vos dates pour la semaine."
  },
  {
    step: 3,
    badge: "Sérénité 100%",
    title: "Suivi & Nouvelles au quotidien",
    description:
      "Pendant vos absences, recevez régulièrement des photos, vidéos et petits messages rassurants pour suivre les aventures et le bien-être de votre compagnon."
  }
];

export const gardesData: GardeFormula[] = [
  {
    id: "long-sejour",
    title: "Long Séjour",
    badge: "🌟 Le Plus Complet",
    isPopular: true,
    description: "Présence continue, nuits sur place, soins, repas et balades quotidiennes incluses.",
    price7Days: 390,
    originalPrice7Days: 455,
    price14Days: 730,
    originalPrice14Days: 910,
    advantages: [
      "Présence continue et nuits passées sur place",
      "Soins, alimentation et câlins illimités",
      "Balades quotidiennes adaptées au rythme de l'animal",
      "Maintien de la sécurité de votre domicile"
    ],
    note: "Économisez 180 € sur 2 semaines !"
  },
  {
    id: "nuit-balades",
    title: "Nuit & Balades",
    badge: "🔥 Populaire & Équilibré",
    description: "Présence de 18h à 9h (nuit + soins complets) + 1 passage/balade dans la journée.",
    price7Days: 315,
    originalPrice7Days: 350,
    price14Days: 580,
    originalPrice14Days: 700,
    advantages: [
      "Présence du soir au matin : de 18h à 9h",
      "1 passage ou promenade dédié dans la journée",
      "Repas du matin et du soir respectés à l'heure",
      "Photos et nouvelles chaque jour"
    ],
    note: "Économisez 120 € sur 2 semaines !"
  },
  {
    id: "visites-quotidiennes",
    title: "Visites Quotidiennes",
    badge: "🐱 Idéal Chats & Autonomes",
    description: "2 passages de 45 min par jour (sans nuitée) pour sorties, nourriture et compagnie.",
    price7Days: 215,
    originalPrice7Days: 255,
    advantages: [
      "2 visites quotidiennes complètes de 45 minutes",
      "Sorties pipi, renouvellement d'eau et nourriture",
      "Nettoyage des litières et espace de vie",
      "Jeux, brossage et moments d'affection"
    ],
    note: "2 visites de 45 min chaque jour à domicile"
  }
];

export const baladesData: BaladeOption[] = [
  {
    duration: "1h30",
    label: "Grande Balade",
    description: "Pour les chiens sportifs et pleins d'énergie",
    singlePrice: 27,
    forfaitPrice: 240,
    forfaitSavings: 30,
    unitPriceInForfait: 24
  },
  {
    duration: "45 min / 1h",
    label: "Balade Standard",
    description: "Le format idéal et équilibré pour le quotidien",
    singlePrice: 23,
    forfaitPrice: 215,
    forfaitSavings: 15,
    unitPriceInForfait: 21.5
  },
  {
    duration: "20 min",
    label: "Sortie Express",
    description: "Sortie hygiénique rapide et pause pipi",
    singlePrice: 15,
    forfaitPrice: 140,
    forfaitSavings: 10,
    unitPriceInForfait: 14
  }
];

export const testimonialsData: TestimonialItem[] = [
  {
    id: "1",
    quote: "Ornella est une pet-sitter absolument géniale ! J’ai eu des nouvelles et des photos de Tao tous les jours, ce qui a été très rassurant. Tao a passé un séjour parfait entre les belles balades, les jeux et les câlins. On sent tout de suite qu’elle adore les animaux. Je la recommande les yeux fermés !",
    author: "Lauriane",
    petDetails: "Propriétaire de Tao, Labrador",
    avatarPath: "/tao.png"
  },
  {
    id: "2",
    quote: "Ornella est une excellente petsitter. Elle s'occupe très régulièrement de mon labrador Reyna et de mon chat Clochette. Elle promène régulièrement Reyna en forêt. Elle est une personne de confiance et dispose de très belles qualités humaines. Je vous recommande très vivement ses services !!!",
    author: "Véro",
    petDetails: "Propriétaire de Reyna, Labrador noir",
    avatarPath: "/reyna.jpg"
  },
  {
    id: "3",
    quote: "J’ai confié mes deux chiennes, Charlie (chihuahua) et Savannah (berger allemand), à Ornella et je ne pouvais pas espérer meilleure expérience ! Attentive aussi bien aux besoins de la petite qu’à ceux de la grande. Mes chiennes sont revenues heureuses et détendues. Une vraie personne de confiance !",
    author: "Carine et Julien",
    petDetails: "Propriétaire de Savannah, Berger Allemand et Charlie, Chihuahua",
    avatarPath: "/savannah.jpeg"
  }
];
