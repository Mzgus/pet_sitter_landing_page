import React, { useState } from 'react';

// --- Composants d'icônes (SVG en ligne pour éviter les dépendances) ---



const IconMenu = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="3" y1="12" x2="21" y2="12"></line>
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <line x1="3" y1="18" x2="21" y2="18"></line>
    </svg>
);


function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-amber-50 text-gray-800 font-sans">
      
      {/* =========== Header / Barre de Navigation =========== */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-teal-600">
            🐾 Petsitter Ornella
          </a>
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#services" className="text-gray-600 hover:text-teal-600 transition-colors">Services</a>
            <a href="#a-propos" className="text-gray-600 hover:text-teal-600 transition-colors">À Propos</a>
            <a href="#temoignages" className="text-gray-600 hover:text-teal-600 transition-colors">Témoignages</a>
            <a href="#contact" className="bg-teal-500 text-white px-5 py-2 rounded-full hover:bg-teal-600 transition-transform hover:scale-105 shadow-md">Contactez-moi</a>
          </div>
          {/* Menu burger pour mobile */}
          <button onClick={toggleMenu} className="md:hidden">
            <IconMenu />
          </button>
        </nav>
        {/* Menu mobile déroulant */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden bg-white px-6 pb-4`}>
          <a href="#services" onClick={toggleMenu} className="block py-2 text-gray-600 hover:text-teal-600">Services</a>
          <a href="#a-propos" onClick={toggleMenu} className="block py-2 text-gray-600 hover:text-teal-600">À Propos</a>
          <a href="#temoignages" onClick={toggleMenu} className="block py-2 text-gray-600 hover:text-teal-600">Témoignages</a>
          <a href="#contact" onClick={toggleMenu} className="block mt-2 text-center bg-teal-500 text-white px-5 py-2 rounded-full hover:bg-teal-600">Contactez-moi</a>
        </div>
      </header>
      
      {/* =========== Section Principale (Hero) =========== */}
      <main className="container mx-auto px-6 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-gray-900">
              Le bonheur de vos compagnons,
              <span className="text-teal-600"> ma priorité.</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              Je suis une pet sitter passionnée et dévouée, offrant des services de garde personnalisés pour vos animaux de compagnie. Partez l'esprit tranquille, je m'occupe de tout !
            </p>
            <div className="mt-8 flex justify-center md:justify-start gap-4">
              <a href="#contact" className="bg-teal-500 text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-teal-600 transition-transform hover:scale-105 shadow-lg">Réserver une garde</a>
              <a href="#services" className="bg-white text-teal-600 border border-teal-500 px-8 py-3 rounded-full font-semibold text-lg hover:bg-teal-50 transition">Voir les services</a>
            </div>
          </div>
          <div className="md:w-1/2">
            <img src="https://placehold.co/600x500/a7f3d0/333333?text=Heureux+Compagnon" alt="Un chien et un chat jouant ensemble" className="rounded-3xl shadow-2xl w-full h-auto" />
          </div>
        </div>
      </main>

      {/* =========== Section Services =========== */}
      <section id="services" className="bg-white py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Des services adaptés à chaque besoin</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">Que ce soit pour une journée, un week-end ou plus, je propose des solutions flexibles pour le bien-être de vos animaux.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-amber-50 p-8 rounded-2xl shadow-sm border border-amber-200 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-lg">
              <div className="bg-teal-100 text-teal-600 w-16 h-16 rounded-full flex items-center justify-center mb-6"><img src="../home.svg" alt="" className="h-8 w-8 text-teal-600" /></div>
              <h3 className="text-2xl font-semibold mb-3">Garde à domicile</h3>
              <p className="text-gray-600">Je m'installe chez vous pour maintenir les habitudes de votre animal dans son environnement familier. Idéal pour les animaux anxieux.</p>
            </div>
            <div className="bg-amber-50 p-8 rounded-2xl shadow-sm border border-amber-200 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-lg">
              <div className="bg-teal-100 text-teal-600 w-16 h-16 rounded-full flex items-center justify-center mb-6"><img src="../cat.svg" alt="" className="h-8 w-8 text-teal-600"/></div>
              <h3 className="text-2xl font-semibold mb-3">Visites journalières</h3>
              <p className="text-gray-600">Une ou plusieurs visites par jour pour nourrir, jouer, câliner et nettoyer la litière de votre chat ou autre petit compagnon.</p>
            </div>
            <div className="bg-amber-50 p-8 rounded-2xl shadow-sm border border-amber-200 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-lg">
              <div className="bg-teal-100 text-teal-600 w-16 h-16 rounded-full flex items-center justify-center mb-6"><img src="../dog.svg" alt="" className="h-8 w-8 text-teal-600" /></div>
              <h3 className="text-2xl font-semibold mb-3">Promenades de chiens</h3>
              <p className="text-gray-600">Des balades stimulantes et amusantes pour que votre chien puisse se dépenser et socialiser en toute sécurité.</p>
            </div>
          </div>
        </div>
      </section>

      {/* =========== Section À Propos =========== */}
      <section id="a-propos" className="py-20 md:py-28">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-5/12">
            <img src="https://placehold.co/500x500/fed7aa/444444?text=Votre+Pet+Sitter" alt="Portrait de la pet sitter" className="rounded-full shadow-xl w-full max-w-sm mx-auto" />
          </div>
          <div className="md:w-7/12 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Passionnée par les animaux avant tout</h2>
            <p className="mt-6 text-lg text-gray-600">
              Bonjour, je m'appelle Ornella ! Depuis mon plus jeune âge, j'ai toujours été entourée d'animaux. Cette passion m'a naturellement conduite à vouloir en faire mon métier. 
            </p>
            <p className="mt-4 text-gray-600">
              Formée aux premiers secours canins et félins, je mets un point d'honneur à garantir la sécurité et le bien-être de chaque animal qui m'est confié. Mon objectif est simple : offrir à vos compagnons autant d'amour et d'attention que vous le feriez vous-même.
            </p>
          </div>
        </div>
      </section>

      {/* =========== Section Témoignages =========== */}
      <section id="temoignages" className="bg-white py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Ils me font confiance</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">Découvrez ce que les propriétaires pensent de mes services.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-amber-50 p-8 rounded-xl shadow-sm">
              <p className="text-gray-600 italic">"Ornella a été incroyable avec notre chien Max. Nous avons reçu des photos tous les jours et l'avons retrouvé plus heureux que jamais. Nous la recommandons les yeux fermés !"</p>
              <div className="mt-4 flex items-center">
                <img src="https://placehold.co/48x48/fde68a/333" alt="Avatar client" className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <p className="font-semibold text-gray-900">Sophie D.</p>
                  <p className="text-sm text-gray-500">Propriétaire de Max, Golden Retriever</p>
                </div>
              </div>
            </div>
            <div className="bg-amber-50 p-8 rounded-xl shadow-sm">
              <p className="text-gray-600 italic">"Très professionnelle et douce avec notre chatte Minette, qui est pourtant très craintive. Un service de grande qualité, je suis totalement rassurée quand je pars."</p>
              <div className="mt-4 flex items-center">
                <img src="https://placehold.co/48x48/fde68a/333" alt="Avatar client" className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <p className="font-semibold text-gray-900">Julien M.</p>
                  <p className="text-sm text-gray-500">Propriétaire de Minette, Chat de gouttière</p>
                </div>
              </div>
            </div>
            <div className="bg-amber-50 p-8 rounded-xl shadow-sm">
              <p className="text-gray-600 italic">"Les promenades sont le meilleur moment de la journée de mon chie Ornella est fiable, ponctuelle et a une super connexion avec les animaux. C'est un vrai soulagement."</p>
              <div className="mt-4 flex items-center"> 
                <img src="https://placehold.co/48x48/fde68a/333" alt="Avatar client" className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <p className="font-semibold text-gray-900">Clara L.</p>
                  <p className="text-sm text-gray-500">Propriétaire de Rocky, Beagle</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* =========== Section Contact =========== */}
      <section id="contact" className="bg-teal-600 text-white py-20 md:py-28">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Prêt(e) à partir l'esprit serein ?</h2>
          <p className="mt-4 max-w-2xl mx-auto text-teal-100">Contactez-moi pour discuter des besoins de votre compagnon et obtenir un devis personnalisé. Une première rencontre est toujours offerte !</p>
          <div className="mt-8">
            <a href="mailto:votre.email@example.com" className="bg-white text-teal-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-amber-100 transition-transform hover:scale-105 shadow-lg inline-block">
              Envoyer un message
            </a>
            <p className="mt-6 text-teal-200">Ou appelez-moi au : <a href="tel:+33600000000" className="font-bold underline hover:text-white">06 00 00 00 00</a></p>
          </div>
        </div>
      </section>

      {/* =========== Footer =========== */}
      <footer className="bg-gray-800 text-white py-10">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2024 Petsitter Ornella. Tous droits réservés.</p>
          <p className="text-sm text-gray-400 mt-2">Site conçu avec ❤️ pour nos amis les bêtes.</p>
        </div>
      </footer>

    </div>
  );
}

export default App;
