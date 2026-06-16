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

export const villes: string[] = [
  "Le Vésinet",
  "Saint-Germain-en-Laye",
  "Croissy-sur-Seine",
  "Chatou"
];

export const servicesData: ServiceItem[] = [
  {
    id: "transport",
    title: "Transport toilettage",
    description: "Je m'occupe de transporter vos animaux chez le toiletteur pour vous faciliter la vie.",
    iconPath: "/cat.svg"
  },
  {
    id: "visites",
    title: "Visites à domicile",
    description: "Une ou plusieurs visites par jour pour nourrir, jouer, nettoyer et câliner vos animaux. Des visites de 20 minutes ou 40 minutes selon vos besoins.",
    iconPath: "/home.svg"
  },
  {
    id: "promenades",
    title: "Promenades de chiens",
    description: "Des balades stimulantes et amusantes pour que votre chien puisse se dépenser et socialiser en toute sécurité. Des promenades de 20/40/1 heure/1 heure 30 selon vos besoins.",
    iconPath: "/dog.svg"
  },
  {
    id: "groupes",
    title: "Promenades de groupes",
    description: "Des balades en petits groupes pour que votre chien puisse se dépenser et socialiser en toute sécurité. Pour assurer une bonne entente, une première rencontre est organisée.",
    iconPath: "/dog.svg"
  },
  {
    id: "forfaits",
    title: "Forfaits et abonnements",
    description: "Je vous propose des forfaits adaptés à vos besoins pour des promenades régulières à tarif avantageux. (ex : 10 promenades de 1 heure)",
    iconPath: "/cat.svg"
  },
  {
    id: "garde-mon-domicile",
    title: "Garde nuits à mon domicile",
    description: "Je peux accueillir votre animal chez moi pour une garde en toute sécurité et dans un environnement familial. Concerne uniquement les petits chiens (ex : Chihuahua, etc.).",
    iconPath: "/home.svg"
  },
  {
    id: "garde-votre-domicile",
    title: "Garde à votre domicile",
    description: "Je viens garder votre compagnon directement chez vous pour qu'il conserve ses repères et ses habitudes de vie. Concerne les chiens moyens et grands.",
    iconPath: "/home.svg"
  }
];

export const testimonialsData: TestimonialItem[] = [
  {
    id: "1",
    quote: "Ornella est une pet-sitter absolument géniale ! J’ai eu des nouvelles et des photos de Tao tous les jours, ce qui a été très rassurant. Tao a été accueilli chez elle, avec sa chienne, et ils se sont entendus à merveille. Entre les belles balades, les jeux et les câlins, il a passé un séjour parfait. On sent tout de suite qu’elle adore les animaux et qu’ils sont chouchoutés comme à la maison. Je la recommande les yeux fermés !",
    author: "Lauriane",
    petDetails: "Propriétaire de Tao, Labrador",
    avatarPath: "/tao.png"
  },
  {
    id: "2",
    quote: "Ornella est une excellente petsitter. Elle s'occupe très régulièrement de mon labrador Reyna et de mon chat Clochette. Elle les a même gardés pendant 5 jours lorsque j'étais en vacances. Elle promène régulièrement Reyna en forêt et dans les champs. Elle est une personne de confiance et dispose de très belles qualités humaines. Elle a su créer une vraie interaction avec mes animaux. Je vous recommande très vivement de faire appel aux services d'Ornella !!!",
    author: "Véro",
    petDetails: "Propriétaire de Reyna, Labrador noir",
    avatarPath: "/reyna.jpg"
  },
  {
    id: "3",
    quote: "J’ai confié mes deux chiennes, Charlie (chihuahua) et Savannah (berger allemand), à Ornella et je ne pouvais pas espérer meilleure expérience ! Elle a été aux petits soins avec elles, attentive aussi bien aux besoins de la petite qu’à ceux de la grande. On sent tout de suite qu’elle aime vraiment les animaux et qu’elle sait s’adapter à leur caractère. J’ai eu des nouvelles régulièrement, ce qui m’a permis d’être totalement rassuré. Mes chiennes sont revenues heureuses et détendues. Je recommande vivement Ornella à tous ceux qui cherchent une personne de confiance pour garder leurs compagnons à quatre pattes !",
    author: "Carine et Julien",
    petDetails: "Propriétaire de Savannah, Berger Allemand et Charlie, Chihuahua",
    avatarPath: "/savannah.jpeg"
  }
];
