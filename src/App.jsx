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
    className="w-5 h-5 mr-2 text-teal-500 flex-shrink-0"
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

  return (
    <div className="bg-amber-50  text-gray-800 font-sans">
      {/* =========== Header / Barre de Navigation =========== */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-teal-600">
            🐾 Petsitter Ornella
          </a>
          <div className="hidden md:flex space-x-8 items-center">
            <a
              href="#services"
              className="text-gray-600 hover:text-teal-600 transition-colors"
            >
              Services
            </a>
            <a
              href="#a-propos"
              className="text-gray-600 hover:text-teal-600 transition-colors"
            >
              À Propos
            </a>
            <a
              href="#temoignages"
              className="text-gray-600 hover:text-teal-600 transition-colors"
            >
              Témoignages
            </a>
            <a
              href="#tarifs"
              className="text-gray-600 hover:text-teal-600 transition-colors"
            >
              Tarifs
            </a>
            <a
              href="#contact"
              className="bg-teal-500 text-white px-5 py-2 rounded-full hover:bg-teal-600 transition-transform hover:scale-105 shadow-md"
            >
              Contactez-moi
            </a>
          </div>
          {/* Menu burger pour mobile */}
          <button onClick={toggleMenu} className="md:hidden">
            <IconMenu />
          </button>
        </nav>
        {/* Menu mobile déroulant */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:hidden bg-white px-6 pb-4`}
        >
          <a
            href="#services"
            onClick={toggleMenu}
            className="block py-2 text-gray-600 hover:text-teal-600"
          >
            Services
          </a>
          <a
            href="#a-propos"
            onClick={toggleMenu}
            className="block py-2 text-gray-600 hover:text-teal-600"
          >
            À Propos
          </a>
          <a
            href="#temoignages"
            onClick={toggleMenu}
            className="block py-2 text-gray-600 hover:text-teal-600"
          >
            Témoignages
          </a>
          <a
            href="#tarifs"
            onClick={toggleMenu}
            className="block py-2 text-gray-600 hover:text-teal-600"
          >
            Tarifs
          </a>
          <a
            href="#contact"
            onClick={toggleMenu}
            className="block mt-2 text-center bg-teal-500 text-white px-5 py-2 rounded-full hover:bg-teal-600"
          >
            Contactez-moi
          </a>
        </div>
      </header>

      {/* =========== Section Principale (Hero) =========== */}
      <main className="container mx-auto px-6 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-gray-900">
              Le bonheur de vos compagnons,
              <span className="text-teal-600"> ma priorité.</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              Je suis une pet sitter passionnée et dévouée, offrant des services
              de garde personnalisés pour vos animaux de compagnie. Partez
              l'esprit tranquille, je m'occupe de tout !
            </p>
            <div className="mt-8 flex justify-center md:justify-start gap-4">
              <a
                href="#contact"
                className="bg-teal-500 text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-teal-600 transition-transform hover:scale-105 shadow-lg"
              >
                Réserver une garde
              </a>
              <a
                href="#services"
                className="bg-white text-teal-600 border border-teal-500 px-8 py-3 rounded-full font-semibold text-lg hover:bg-teal-50 transition"
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Des services adaptés à chaque besoin
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Que ce soit pour une journée, un week-end ou plus, je propose des
              solutions flexibles pour le bien-être de vos animaux.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-amber-50 p-8 rounded-2xl shadow-sm border border-amber-200 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-lg flex flex-col">
              <div className="flex-grow">
                <div className="bg-teal-100 text-teal-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <img
                    src="/cat.svg"
                    alt=""
                    className="h-8 w-8 text-teal-600"
                  />
                </div>
                <h3 className="text-2xl font-semibold mb-3">
                  Transport toilettage
                </h3>
                <p className="text-gray-600">
                  Je m'occupe de transporter vos animaux chez le toiletteur pour
                  vous faciliter la vie.
                </p>
              </div>
              <a
                href="#tarifs"
                className="mt-6 font-semibold text-teal-600 hover:text-teal-800 transition-colors self-start"
              >
                Consulter les tarifs →
              </a>
            </div>
            <div className="bg-amber-50 p-8 rounded-2xl shadow-sm border border-amber-200 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-lg flex flex-col">
              <div className="flex-grow">
                <div className="bg-teal-100 text-teal-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <img
                    src="/home.svg"
                    alt=""
                    className="h-8 w-8 text-teal-600"
                  />
                </div>
                <h3 className="text-2xl font-semibold mb-3">
                  Visites à domicile
                </h3>
                <p className="text-gray-600">
                  Une ou plusieurs visites par jour pour nourrir, jouer, nettoyer et câliner vos animaux. <br />
                  Des visites de 20 minutes ou 40 minutes selon vos besoins.
                </p>
              </div>
              <a
                href="#tarifs"
                className="mt-6 font-semibold text-teal-600 hover:text-teal-800 transition-colors self-start"
              >
                Consulter les tarifs →
              </a>
            </div>
            <div className="bg-amber-50 p-8 rounded-2xl shadow-sm border border-amber-200 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-lg flex flex-col">
              <div className="flex-grow">
                <div className="bg-teal-100 text-teal-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <img
                    src="/dog.svg"
                    alt=""
                    className="h-8 w-8 text-teal-600"
                  />
                </div>
                <h3 className="text-2xl font-semibold mb-3">
                  Promenades de chiens
                </h3>
                <p className="text-gray-600">
                  Des balades stimulantes et amusantes pour que votre chien
                  puisse se dépenser et socialiser en toute sécurité. <br />
                  Des promenades de 20/40/1 heure/1 heure 30 selon vos
                  besoins.
                </p>
              </div>
              <a
                href="#tarifs"
                className="mt-6 font-semibold text-teal-600 hover:text-teal-800 transition-colors self-start"
              >
                Consulter les tarifs →
              </a>
            </div>
            <div className="bg-amber-50 p-8 rounded-2xl shadow-sm border border-amber-200 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-lg flex flex-col">
              <div className="flex-grow">
                <div className="bg-teal-100 text-teal-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <img
                    src="/dog.svg"
                    alt=""
                    className="h-8 w-8 text-teal-600"
                  />
                </div>
                <h3 className="text-2xl font-semibold mb-3">
                  Promenades de groupes
                </h3>
                <p className="text-gray-600">
                  Des balades en petits groupes pour que votre chien puisse se
                  dépenser et socialiser en toute sécurité. <br />
                  Pour assurer une bonne entente, une première rencontre est
                  organisée.
                </p>
              </div>
              <a
                href="#tarifs"
                className="mt-6 font-semibold text-teal-600 hover:text-teal-800 transition-colors self-start"
              >
                Consulter les tarifs →
              </a>
            </div>
            <div className="bg-amber-50 p-8 rounded-2xl shadow-sm border border-amber-200 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-lg flex flex-col">
              <div className="flex-grow">
                <div className="bg-teal-100 text-teal-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <img
                    src="/cat.svg"
                    alt=""
                    className="h-8 w-8 text-teal-600"
                  />
                </div>
                <h3 className="text-2xl font-semibold mb-3">
                  Forfaits et abonnements
                </h3>
                <p className="text-gray-600">
                  Je vous propose des forfaits adaptés à vos besoins pour des
                  promenades régulières à tarif avantageux. (ex : 10 promenades
                  de 1 heure)
                </p>
              </div>
              <a
                href="#tarifs"
                className="mt-6 font-semibold text-teal-600 hover:text-teal-800 transition-colors self-start"
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Passionnée par les animaux avant tout
            </h2>
            <p className="mt-6 text-lg text-gray-600">
              Bonjour, je m'appelle Ornella ! J'ai 20 ans et ma passion pour les
              animaux remonte à mon enfance.
            </p>
            <p className="mt-4 text-lg text-gray-600">
              Depuis 4 ans j'ai la chance d'avoir mon propre chien et j'adore
              m'occuper de ceux de mes proches. Je souhaite élargir mon cercle
              et offrir mes services en tant que pet sitter.
            </p>
            <p className="mt-4 text-lg text-gray-600">
              En plus de mes quelques années d'éxpériences, je vais passer mon
              ACACED en septembre pour avoir un statut officiel, car le bien-être de vos
              animaux est ma priorité.
            </p>
          </div>
        </div>
      </section>

      {/* =========== Section Témoignages =========== */}
      <section id="temoignages" className="bg-white py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Ils me font confiance
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Découvrez ce que les propriétaires pensent de mes services.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-amber-50 p-8 rounded-xl shadow-sm">
              <p className="text-gray-600 italic">
                "Ornella a été incroyable avec notre chien Tao. Nous avons reçu
                des photos tous les jours et l'avons retrouvé plus heureux que
                jamais. Nous la recommandons les yeux fermés !"
              </p>
              <div className="mt-4 flex items-center">
                <img
                  src="/tao.png"
                  alt="Avatar client"
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-900">Lauriane</p>
                  <p className="text-sm text-gray-500">
                    Propriétaire de Tao, Labrador
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-amber-50 p-8 rounded-xl shadow-sm">
              <p className="text-gray-600 italic">
                "Très professionnelle et douce avec notre chatte Poussy, qui est
                pourtant très craintive. Un service de grande qualité, je suis
                totalement rassurée quand je pars."
              </p>
              <div className="mt-4 flex items-center">
                <img
                  src="/poupous.jpeg"
                  alt="Avatar client"
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-900">Karine</p>
                  <p className="text-sm text-gray-500">
                    Propriétaire de Poussy, Chat de gouttière
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-amber-50 p-8 rounded-xl shadow-sm">
              <p className="text-gray-600 italic">
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
                  <p className="font-semibold text-gray-900">
                    Carine et Julien
                  </p>
                  <p className="text-sm text-gray-500">
                    Propriétaire de Savannah, Berger Allemand et Charlie, <br />
                    Chiwawa
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========== Section Tarifs (NOUVELLE) =========== */}
      <section id="tarifs" className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Mes Tarifs
            </h2>
            <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
              Voici une grille de mes tarifs de base. Pour toute demande
              spécifique ou un devis personnalisé, n'hésitez pas à me contacter.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Carte Promenades */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 flex flex-col">
              <h3 className="text-2xl font-semibold mb-4 text-teal-700">
                Promenades
              </h3>
              <ul className="space-y-3 text-gray-700 flex-grow">
                <li className="flex justify-between border-b pb-2">
                  <span>20 minutes</span> <span className="font-bold">10€</span>
                </li>
                <li className="flex justify-between border-b pb-2">
                  <span>40 minutes</span> <span className="font-bold">13€</span>
                </li>
                <li className="flex justify-between border-b pb-2">
                  <span>1 heure</span> <span className="font-bold">15€</span>
                </li>
                <li className="flex justify-between">
                  <span>1 heure 30</span> <span className="font-bold">18€</span>
                </li>
              </ul>
            </div>

            {/* Carte Visites */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 flex flex-col">
              <h3 className="text-2xl font-semibold mb-4 text-teal-700">
                Visites à domicile
              </h3>
              <div className="flex-grow space-y-4">
                <div>
                  <h4 className="font-bold text-gray-800">
                    Visites de 20 minutes
                  </h4>
                  <ul className="space-y-2 text-gray-700 mt-2">
                    <li className="flex justify-between border-b pb-1">
                      <span>1 par jour</span>{" "}
                      <span className="font-bold">12€</span>
                    </li>
                    <li className="flex justify-between border-b pb-1">
                      <span>2 par jour</span>{" "}
                      <span className="font-bold">18€</span>
                    </li>
                    <li className="flex justify-between">
                      <span>3 par jour</span>{" "}
                      <span className="font-bold">23€</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">
                    Visites de 40 minutes
                  </h4>
                  <ul className="space-y-2 text-gray-700 mt-2">
                    <li className="flex justify-between border-b pb-1">
                      <span>1 par jour</span>{" "}
                      <span className="font-bold">16€</span>
                    </li>
                    <li className="flex justify-between border-b pb-1">
                      <span>2 par jour</span>{" "}
                      <span className="font-bold">21€</span>
                    </li>
                    <li className="flex justify-between">
                      <span>3 par jour</span>{" "}
                      <span className="font-bold">26€</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Carte Autres Services */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 flex flex-col">
              <h3 className="text-2xl font-semibold mb-4 text-teal-700">
                Autres Prestations
              </h3>
              <div className="flex-grow space-y-4 text-gray-700">
                <div>
                  <h4 className="font-bold text-gray-800">Forfait Balades</h4>
                  {/* <p className="flex justify-between"><span>10x 1 heure (sur 10 sem.)</span> <span className="font-bold">135€</span></p> */}
                  <p className="flex justify-between">
                    <span>
                      Forfait personnalisé sur demande (ex : 10x 1h pour 10
                      semaines)
                    </span>
                  </p>
                </div>
                <div className="border-t pt-4">
                  <h4 className="font-bold text-gray-800">Transport</h4>
                  <p>Transport chez le vétérinaire ou le toiletteur.</p>
                  <p className="font-semibold mt-1">Ex: 10€ pour 10km A/R</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 flex justify-center md:justify-items-center gap-4">
          <a
            href="#contact"
            className="bg-teal-500 text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-teal-600 transition-transform hover:scale-105 shadow-lg"
          >
            Faire un devis !
          </a>
        </div>
      </section>

      {/* =========== Section Contact =========== */}
      <section id="contact" className="bg-teal-600 text-white py-20 md:py-28">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Prêt(e) à partir l'esprit serein ?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-teal-100">
            Contactez-moi pour discuter des besoins de votre compagnon et
            obtenir un devis personnalisé. Une première rencontre est toujours
            offerte !
          </p>
          <div className="mt-12 flex flex-col items-center gap-8">
            <div className="w-full">
              <p className="text-teal-200 mb-6 font-semibold">
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
              <div className="flex-grow border-t border-teal-500"></div>
              <span className="flex-shrink mx-4 text-teal-200 font-bold">
                OU
              </span>
              <div className="flex-grow border-t border-teal-500"></div>
            </div>
            <div className="w-full">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="mailto:o.prevostat@gmail.com"
                className="bg-white text-teal-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-amber-50 transition-transform hover:scale-105 shadow-lg inline-block"
              >
                Envoyer un mail
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========== Footer =========== */}
      <footer className="bg-gray-800 text-white py-10">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2024 Petsitter Ornella. Tous droits réservés.</p>
          <p className="text-sm text-gray-400 mt-2">
            Site conçu avec ❤️ pour nos amis les bêtes.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
