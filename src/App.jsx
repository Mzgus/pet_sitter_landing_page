import React, { useState } from "react";
// --- Composants d'icônes (SVG en ligne pour éviter les dépendances) ---

const IconMenu = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);

const CheckIcon = () => (
  <svg
    className="w-5 h-5 mr-2 text-amber-700 flex-shrink-0"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
      clipRule="evenodd"
    ></path>
  </svg>
);

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

<<<<<<< Updated upstream
  const villes = ['Penchard', 'Crégy-Lès-Meaux', 'Meaux', 'Chambry', 'Chauconin', 'Villenoy', 'Varredes', 'Marcilly', 'Poincy', 'Nanteuil-Lès-Meaux' ,'Mareuil-lès-Meaux', 'Charny', 'Esbly', 'Jablines', 'Poincy', 'Villeroy', 'Triport'];
=======
  const villes = ['Penchard', 'Crégy-Lès-Meaux', 'Meaux', 'Chambry', 'Chauconin', 'Villenoy', 'Varredes', 'Marcilly', 'Poincy', 'Nanteuil-Lès-Meaux' ,'Mareuil-lès-Meaux', 'Charny', 'Esbly', 'Jablines', 'Villeroy', 'Trilport'];
>>>>>>> Stashed changes

  const renderVilles = () => {
    return villes.map((ville, index) => (
      <span
        key={index}
        className="bg-yellow-100 text-amber-800 font-semibold px-4 py-2 rounded-full"
      >
        {ville}
      </span>
    ));
  }

  return (
    <div className="bg-yellow-50 text-stone-900 font-sans">
      {/* =========== Header / Barre de Navigation =========== */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-amber-800">
            🐾 Petsitter Ornella
          </a>
          <div className="hidden md:flex space-x-8 items-center">
            <a
              href="#services"
              className="text-stone-600 hover:text-amber-800 transition-colors"
            >
              Services
            </a>
            <a
              href="#a-propos"
              className="text-stone-600 hover:text-amber-800 transition-colors"
            >
              À Propos
            </a>
            <a
              href="#temoignages"
              className="text-stone-600 hover:text-amber-800 transition-colors"
            >
              Témoignages
            </a>
            <a
              href="#tarifs"
              className="text-stone-600 hover:text-amber-800 transition-colors"
            >
              Tarifs
            </a>
            <a
              href="#zone"
              className="text-stone-600 hover:text-amber-800 transition-colors"
            >
              Zone
            </a>
            <a
              href="#contact"
              className="bg-amber-700 text-white px-5 py-2 rounded-full hover:bg-amber-800 transition-transform hover:scale-105 shadow-md"
            >
              Contactez-moi
            </a>
          </div>
          <button onClick={toggleMenu} className="md:hidden">
            <IconMenu />
          </button>
        </nav>
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:hidden bg-white px-6 pb-4`}
        >
          <a
            href="#services"
            onClick={toggleMenu}
            className="block py-2 text-stone-600 hover:text-amber-800"
          >
            Services
          </a>
          <a
            href="#a-propos"
            onClick={toggleMenu}
            className="block py-2 text-stone-600 hover:text-amber-800"
          >
            À Propos
          </a>
          <a
            href="#temoignages"
            onClick={toggleMenu}
            className="block py-2 text-stone-600 hover:text-amber-800"
          >
            Témoignages
          </a>
          <a
            href="#tarifs"
            onClick={toggleMenu}
            className="block py-2 text-stone-600 hover:text-amber-800"
          >
            Tarifs
          </a>
          <a
            href="#zone"
            onClick={toggleMenu}
            className="block py-2 text-stone-600 hover:text-amber-800"
          >
            Zone
          </a>
          <a
            href="#contact"
            onClick={toggleMenu}
            className="block mt-2 text-center bg-amber-700 text-white px-5 py-2 rounded-full hover:bg-amber-800"
          >
            Contactez-moi
          </a>
        </div>
      </header>

      {/* =========== Section Principale (Hero) =========== */}
      <main className="container mx-auto px-6 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-stone-900">
              Le bonheur de vos compagnons,
              <span className="text-amber-800"> ma priorité.</span>
            </h1>
            <p className="mt-6 text-lg text-stone-700">
              Je suis une pet sitter passionnée et dévouée, offrant des services
              de garde personnalisés pour vos animaux de compagnie. Partez
              l'esprit tranquille, je m'occupe de tout !
            </p>
            <div className="mt-8 flex justify-center md:justify-start gap-4">
              <a
                href="#contact"
                className="bg-amber-700 text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-amber-800 transition-transform hover:scale-105 shadow-lg"
              >
                Réserver une garde
              </a>
              <a
                href="#services"
                className="bg-white text-amber-800 border border-amber-700 px-8 py-3 rounded-full font-semibold text-lg hover:bg-yellow-50 transition"
              >
                Voir les services
              </a>
            </div>
          </div>
          <div className="md:w-1/2">
            <img
              src="/sisi.jpeg"
              alt="Un chien et un chat jouant ensemble"
              className="rounded-3xl shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </main>

      {/* =========== Section Services =========== */}
      <section id="services" className="bg-white py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900">
              Des services adaptés à chaque besoin
            </h2>
            <p className="mt-4 text-stone-700 max-w-2xl mx-auto">
              Que ce soit pour une journée, un week-end ou plus, je propose des
              solutions flexibles pour le bien-être de vos animaux.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-yellow-50 p-8 rounded-2xl shadow-sm border border-yellow-200 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-lg flex flex-col">
              <div className="flex-grow">
                <div className="bg-amber-100 text-amber-800 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <img src="/cat.svg" alt="" className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-semibold mb-3">
                  Transport toilettage
                </h3>
                <p className="text-stone-700">
                  Je m'occupe de transporter vos animaux chez le toiletteur pour
                  vous faciliter la vie.
                </p>
              </div>
              <a
                href="#tarifs"
                className="mt-6 font-semibold text-amber-800 hover:text-amber-900 transition-colors self-start"
              >
                Consulter les tarifs →
              </a>
            </div>
            <div className="bg-yellow-50 p-8 rounded-2xl shadow-sm border border-yellow-200 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-lg flex flex-col">
              <div className="flex-grow">
                <div className="bg-amber-100 text-amber-800 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <img src="/home.svg" alt="" className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-semibold mb-3">
                  Visites à domicile
                </h3>
                <p className="text-stone-700">
                  Une ou plusieurs visites par jour pour nourrir, jouer,
                  nettoyer et câliner vos animaux. <br />
                  Des visites de 20 minutes ou 40 minutes selon vos besoins.
                </p>
              </div>
              <a
                href="#tarifs"
                className="mt-6 font-semibold text-amber-800 hover:text-amber-900 transition-colors self-start"
              >
                Consulter les tarifs →
              </a>
            </div>
            <div className="bg-yellow-50 p-8 rounded-2xl shadow-sm border border-yellow-200 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-lg flex flex-col">
              <div className="flex-grow">
                <div className="bg-amber-100 text-amber-800 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <img src="/dog.svg" alt="" className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-semibold mb-3">
                  Promenades de chiens
                </h3>
                <p className="text-stone-700">
                  Des balades stimulantes et amusantes pour que votre chien
                  puisse se dépenser et socialiser en toute sécurité. <br />
                  Des promenades de 20/40/1 heure/1 heure 30 selon vos besoins.
                </p>
              </div>
              <a
                href="#tarifs"
                className="mt-6 font-semibold text-amber-800 hover:text-amber-900 transition-colors self-start"
              >
                Consulter les tarifs →
              </a>
            </div>
            <div className="bg-yellow-50 p-8 rounded-2xl shadow-sm border border-yellow-200 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-lg flex flex-col">
              <div className="flex-grow">
                <div className="bg-amber-100 text-amber-800 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <img src="/dog.svg" alt="" className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-semibold mb-3">
                  Promenades de groupes
                </h3>
                <p className="text-stone-700">
                  Des balades en petits groupes pour que votre chien puisse se
                  dépenser et socialiser en toute sécurité. <br />
                  Pour assurer une bonne entente, une première rencontre est
                  organisée.
                </p>
              </div>
              <a
                href="#tarifs"
                className="mt-6 font-semibold text-amber-800 hover:text-amber-900 transition-colors self-start"
              >
                Consulter les tarifs →
              </a>
            </div>
            <div className="bg-yellow-50 p-8 rounded-2xl shadow-sm border border-yellow-200 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-lg flex flex-col">
              <div className="flex-grow">
                <div className="bg-amber-100 text-amber-800 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <img src="/cat.svg" alt="" className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-semibold mb-3">
                  Forfaits et abonnements
                </h3>
                <p className="text-stone-700">
                  Je vous propose des forfaits adaptés à vos besoins pour des
                  promenades régulières à tarif avantageux. (ex : 10 promenades
                  de 1 heure)
                </p>
              </div>
              <a
                href="#tarifs"
                className="mt-6 font-semibold text-amber-800 hover:text-amber-900 transition-colors self-start"
              >
                Consulter les tarifs →
              </a>
            </div>
            <div className="bg-yellow-50 p-8 rounded-2xl shadow-sm border border-yellow-200 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-lg flex flex-col">
              <div className="flex-grow">
                <div className="bg-amber-100 text-amber-800 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <img src="/home.svg" alt="" className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-semibold mb-3">
                  Garde nuits à mon domicile
                </h3>
                <p className="text-stone-700">
                  Je peux accueillir votre animal chez moi pour une garde en toute sécurité et dans un environnement familial. <strong>Concerne uniquement les petits chiens (ex : Chihuahua, etc.).</strong>
                </p>
              </div>
              <a
                href="#tarifs"
                className="mt-6 font-semibold text-amber-800 hover:text-amber-900 transition-colors self-start"
              >
                Consulter les tarifs →
              </a>
            </div>
            <div className="bg-yellow-50 p-8 rounded-2xl shadow-sm border border-yellow-200 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-lg flex flex-col">
              <div className="flex-grow">
                <div className="bg-amber-100 text-amber-800 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <img src="/home.svg" alt="" className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-semibold mb-3">
                  Garde à votre domicile
                </h3>
                <p className="text-stone-700">
                  Je viens garder votre compagnon directement chez vous pour qu'il conserve ses repères et ses habitudes de vie. <strong>Concerne les chiens moyens et grands.</strong>
                </p>
              </div>
              <a
                href="#tarifs"
                className="mt-6 font-semibold text-amber-800 hover:text-amber-900 transition-colors self-start"
              >
                Consulter les tarifs →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========== Section À Propos =========== */}
      <section id="a-propos" className="py-20 md:py-28">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-5/12">
            <img
              src="/moi.jpeg"
              alt="Portrait de la pet sitter"
              className="rounded-full shadow-xl w-full max-w-sm mx-auto"
            />
          </div>
          <div className="md:w-7/12 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900">
              Passionnée par les animaux avant tout
            </h2>
            <p className="mt-6 text-lg text-stone-700">
              Bonjour, je m'appelle Ornella ! J'ai 20 ans et ma passion pour les
              animaux remonte à mon enfance.
            </p>
            <p className="mt-4 text-lg text-stone-700">
              Depuis 4 ans j'ai la chance d'avoir mon propre chien et j'adore
              m'occuper de ceux de mes proches. Je souhaite élargir mon cercle
              et offrir mes services en tant que pet sitter.
            </p>
            <p className="mt-4 text-lg text-stone-700">
              En plus de mes quelques années d'expériences, je vais passer mon
              ACACED en septembre pour avoir un statut officiel, car le
              bien-être de vos animaux est ma priorité.
            </p>
          </div>
        </div>
      </section>

      {/* =========== Section Témoignages =========== */}
      <section id="temoignages" className="bg-white py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900">
              Ils me font confiance
            </h2>
            <p className="mt-4 text-stone-700 max-w-2xl mx-auto">
              Découvrez ce que les propriétaires pensent de mes services.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-yellow-50 p-8 rounded-xl shadow-sm">
              <p className="text-stone-700 italic">
                "Ornella est une pet-sitter absolument géniale ! J’ai eu des nouvelles et des photos de Tao tous les jours, ce qui a été très rassurant. Tao a été accueilli chez elle, avec sa chienne, et ils se sont entendus à merveille. Entre les belles balades, les jeux et les câlins, il a passé un séjour parfait. On sent tout de suite qu’elle adore les animaux et qu’ils sont chouchoutés comme à la maison. Je la recommande les yeux fermés !"
              </p>
              <div className="mt-4 flex items-center">
                <img
                  src="/tao.png"
                  alt="Avatar client"
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <p className="font-semibold text-stone-900">Lauriane</p>
                  <p className="text-sm text-stone-500">
                    Propriétaire de Tao, Labrador
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-yellow-50 p-8 rounded-xl shadow-sm">
              <p className="text-stone-700 italic">
                "Ornella est une excellente petsitter. Elle s'occupe très
                régulièrement de mon labrador Reyna et de mon chat Clochette.
                Elle les a même gardés pendant 5 jours lorsque j'étais en
                vacances. Elle promène régulièrement Reyna en forêt et dans les
                champs. Elle est une personne de confiance et dispose de très
                belles qualités humaines. Elle a su créer une vraie interaction
                avec ses animaux. Je vous recommande très vivement de faire
                appel aux services d'Ornella !!!"
              </p>
              <div className="mt-4 flex items-center">
                <img
                  src="/reyna.jpg"
                  alt="Avatar client"
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <p className="font-semibold text-stone-900">Véro</p>
                  <p className="text-sm text-stone-500">
                    Propriétaire de Reyna, Labrador noir
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-yellow-50 p-8 rounded-xl shadow-sm">
              <p className="text-stone-700 italic">
                "J’ai confié mes deux chiennes, Charlie (chihuahua) et Savannah
                (berger allemand), à Ornella et je ne pouvais pas espérer
                meilleure expérience ! Elle a été aux petits soins avec elles,
                attentive aussi bien aux besoins de la petite qu’à ceux de la
                grande. On sent tout de suite qu’elle aime vraiment les animaux
                et qu’elle sait s’adapter à leur caractère. J’ai eu des
                nouvelles régulièrement, ce qui m’a permis d’être totalement
                rassuré. Mes chiennes sont revenues heureuses et détendues. Je
                recommande vivement Ornella à tous ceux qui cherchent une
                personne de confiance pour garder leurs compagnons
                à quatre pattes !"
              </p>
              <div className="mt-4 flex items-center">
                <img
                  src="/savannah.jpeg"
                  alt="Avatar client"
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <p className="font-semibold text-stone-900">
                    Carine et Julien
                  </p>
                  <p className="text-sm text-stone-500">
                    Propriétaire de Savannah, Berger Allemand et Charlie, <br />
                    Chihuahua
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========== Section Tarifs =========== */}
      <section id="tarifs" className="bg-yellow-50 py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900">
              Mes Tarifs
            </h2>
            <p className="mt-4 text-stone-700 max-w-3xl mx-auto">
              Voici une grille de mes tarifs de base. Pour toute demande
              spécifique ou un devis personnalisé, n'hésitez pas à me contacter.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 flex flex-col">
              <h3 className="text-2xl font-semibold mb-4 text-amber-900">
                Promenades
              </h3>
              <ul className="space-y-3 text-stone-700 flex-grow">
                <li className="flex justify-between border-b pb-2">
                  <span>20 minutes</span>{" "}
                  <span className="font-bold text-stone-900">10€</span>
                </li>
                <li className="flex justify-between border-b pb-2">
                  <span>40 minutes</span>{" "}
                  <span className="font-bold text-stone-900">13€</span>
                </li>
                <li className="flex justify-between border-b pb-2">
                  <span>1 heure</span>{" "}
                  <span className="font-bold text-stone-900">15€</span>
                </li>
                <li className="flex justify-between">
                  <span>1 heure 30</span>{" "}
                  <span className="font-bold text-stone-900">18€</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 flex flex-col">
              <h3 className="text-2xl font-semibold mb-4 text-amber-900">
                Visites à domicile
              </h3>
              <div className="flex-grow space-y-4">
                <div>
                  <h4 className="font-bold text-stone-800">
                    Visites de 20 minutes
                  </h4>
                  <ul className="space-y-2 text-stone-700 mt-2">
                    <li className="flex justify-between border-b pb-1">
                      <span>1 par jour</span>{" "}
                      <span className="font-bold text-stone-900">12€</span>
                    </li>
                    <li className="flex justify-between border-b pb-1">
                      <span>2 par jour</span>{" "}
                      <span className="font-bold text-stone-900">18€</span>
                    </li>
                    <li className="flex justify-between">
                      <span>3 par jour</span>{" "}
                      <span className="font-bold text-stone-900">23€</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-stone-800">
                    Visites de 40 minutes
                  </h4>
                  <ul className="space-y-2 text-stone-700 mt-2">
                    <li className="flex justify-between border-b pb-1">
                      <span>1 par jour</span>{" "}
                      <span className="font-bold text-stone-900">16€</span>
                    </li>
                    <li className="flex justify-between border-b pb-1">
                      <span>2 par jour</span>{" "}
                      <span className="font-bold text-stone-900">21€</span>
                    </li>
                    <li className="flex justify-between">
                      <span>3 par jour</span>{" "}
                      <span className="font-bold text-stone-900">26€</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 flex flex-col">
              <h3 className="text-2xl font-semibold mb-4 text-amber-900">
                Autres Prestations
              </h3>
              <div className="flex-grow space-y-4 text-stone-700">
                <div>
                  <h4 className="font-bold text-stone-800">Forfait Balades</h4>
                  <p className="flex justify-between">
                    <span>
                      Forfait personnalisé sur demande (ex : 10x 1h pour 10
                      semaines 135€)
                    </span>
                  </p>
                </div>
                <div className="border-t pt-4">
                  <h4 className="font-bold text-stone-800">Transport</h4>
                  <p>Toiletteur.</p>
                  <p className="font-semibold mt-1">Ex: 10€ pour 10km A/R</p>
                </div>
                <div className="border-t pt-4">
                  <h4 className="font-bold text-stone-800">
                    Garde nuits à mon domicile
                  </h4>
                  <p className="font-semibold mt-1">
                    30€ par nuit (petits chiens uniquement, ex : Chihuahua)
                  </p>
                </div>
                <div className="border-t pt-4">
                  <h4 className="font-bold text-stone-800">
                    Garde à votre domicile
                  </h4>
                  <p className="font-semibold mt-1">
                    30€ par nuit (moyen chien)
                  </p>
                  <p className="font-semibold mt-1">
                    35€ par nuit (grand chien)
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 flex justify-center">
            <a
              href="#contact"
              className="bg-amber-700 text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-amber-800 transition-transform hover:scale-105 shadow-lg"
            >
              Faire un devis !
            </a>
          </div>
        </div>
      </section>

      {/* =========== Section Zone d'intervention (NOUVELLE) =========== */}
      <section id="zone" className="bg-white py-20 md:py-28">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900">
            Zone d'intervention
          </h2>
          <p className="mt-4 text-stone-700 max-w-2xl mx-auto">
            Je me déplace sans frais supplémentaires dans les villes suivantes
            et leurs alentours proches :
          </p>
          <div
            id="villes-container"
            className="mt-8 flex flex-wrap justify-center gap-x-4 gap-y-2"
          >
            {renderVilles()}
          </div>
          <div className="mt-8 max-w-lg mx-auto bg-amber-50 border border-amber-200 rounded-xl p-4 shadow-sm flex items-center justify-center gap-3">
            <span className="text-2xl">📅</span>
            <p className="text-amber-900 font-semibold text-sm md:text-base">
              À partir de juillet, je serai également disponible sur <span className="underline decoration-amber-500 decoration-2 font-bold">Le Vésinet</span> et ses alentours !
            </p>
          </div>
          <p className="mt-6 text-stone-600 italic">
            Pour toute autre ville, un supplément de 5€ sera appliqué pour le
            déplacement.
          </p>
        </div>
      </section>

      {/* =========== Section Contact =========== */}
      <section id="contact" className="bg-amber-800 text-white py-20 md:py-28">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Prêt(e) à partir l'esprit serein ?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-amber-100">
            Contactez-moi pour discuter des besoins de votre compagnon et
            obtenir un devis personnalisé. Une première rencontre est toujours
            offerte !
          </p>
          <div className="mt-12 flex flex-col items-center gap-8">
            <div className="w-full">
              <p className="text-amber-200 mb-6 font-semibold">
                Retrouvez-moi sur les réseaux :
              </p>
              <ul className="social">
                <li data-tooltip="Facebook" style={{ "--bg": "#3a83f7" }}>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shadow-lg"
                    href="https://www.facebook.com/profile.php?id=61579984778894&locale=fr_FR"
                    aria-label="Facebook"
                  >
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                </li>
                <li
                  data-tooltip="Instagram"
                  style={{
                    "--bg":
                      "linear-gradient(-45deg, #feda75, #fa7e1e, #d62976, #962fbf, #4f5bd5)",
                  }}
                >
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shadow-lg"
                    href="https://www.instagram.com/petsitter_ornella?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                    aria-label="Instagram"
                  >
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex items-center w-full max-w-xs">
              <div className="flex-grow border-t border-amber-600"></div>
              <span className="flex-shrink mx-4 text-amber-200 font-bold">
                OU
              </span>
              <div className="flex-grow border-t border-amber-600"></div>
            </div>
            <div className="w-full">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="mailto:o.prevostat@gmail.com"
                className="bg-white text-amber-800 px-10 py-4 rounded-full font-bold text-lg hover:bg-yellow-50 transition-transform hover:scale-105 shadow-lg inline-block"
              >
                Envoyer un mail
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========== Footer =========== */}
      <footer className="bg-stone-800 text-white py-10">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2024 Petsitter Ornella. Tous droits réservés.</p>
          <p className="text-sm text-stone-400 mt-2">
            Site conçu avec ❤️ pour nos amis les bêtes.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
