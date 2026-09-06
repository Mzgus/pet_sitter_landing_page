import React, { useState } from "react";

// --- Composants d'icônes SVG intégrés pour une interface soignée sans dépendances lourdes ---
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

const IconClose = () => (
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
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
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

const IconClock = () => (
  <svg
    className="w-5 h-5 inline-block mr-1.5 text-amber-700 flex-shrink-0"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="10" strokeWidth="2"></circle>
    <polyline points="12 6 12 12 16 14" strokeWidth="2" strokeLinecap="round"></polyline>
  </svg>
);

const IconLocation = () => (
  <svg
    className="w-5 h-5 inline-block mr-1 text-amber-700 flex-shrink-0"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
    ></path>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
    ></path>
  </svg>
);

const IconMessage = () => (
  <svg
    className="w-5 h-5 inline-block mr-2"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
    ></path>
  </svg>
);

const IconSparkles = () => (
  <svg
    className="w-5 h-5 inline-block mr-2 text-amber-600"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.286L13 21l-2.286-6.857L5 12l5.714-2.286L13 3z"
    ></path>
  </svg>
);

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const phoneNumberDisplay = "06 88 99 10 61";
  const phoneNumberRaw = "0688991061";
  const whatsappUrl = `https://wa.me/33688991061?text=${encodeURIComponent(
    "Bonjour Ornella, je souhaiterais des renseignements pour la garde / balade de mon animal."
  )}`;
  const smsUrl = `sms:${phoneNumberRaw}?body=${encodeURIComponent(
    "Bonjour Ornella, je souhaiterais des renseignements pour la garde / balade de mon animal."
  )}`;

  return (
    <div className="bg-amber-50/40 text-stone-900 font-sans selection:bg-amber-200">
      {/* =========== Bandeau d'Annonce Supérieur =========== */}
      <div className="bg-amber-900 text-amber-100 text-xs sm:text-sm py-2 px-4">
        <div className="container mx-auto flex flex-wrap justify-center sm:justify-between items-center gap-2 text-center">
          <div className="flex items-center space-x-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>
              <strong>Secteur :</strong> Le Vésinet, Saint-Germain-en-Laye & alentours
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <span>
              🕒 <strong>Joignable de 9h à 20h</strong> (par message)
            </span>
            <span className="hidden md:inline text-amber-300">|</span>
            <span className="hidden md:inline font-semibold text-amber-300">
              🐾 Pré-visite de 45 min offerte
            </span>
          </div>
        </div>
      </div>

      {/* =========== Header / Barre de Navigation =========== */}
      <header className="bg-white/90 backdrop-blur-md shadow-xs sticky top-0 z-50 border-b border-stone-200/70">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="flex items-center gap-2 text-2xl font-bold text-amber-900">
            <span className="text-3xl">🐾</span>
            <span>Petsitter Ornella</span>
          </a>

          <div className="hidden lg:flex space-x-7 items-center font-medium">
            <a href="#processus" className="text-stone-700 hover:text-amber-800 transition-colors">
              Comment ça se passe ?
            </a>
            <a href="#gardes" className="text-stone-700 hover:text-amber-800 transition-colors">
              Formules Garde
            </a>
            <a href="#balades" className="text-stone-700 hover:text-amber-800 transition-colors">
              Balades & Forfaits
            </a>
            <a href="#a-propos" className="text-stone-700 hover:text-amber-800 transition-colors">
              À Propos
            </a>
            <a href="#temoignages" className="text-stone-700 hover:text-amber-800 transition-colors">
              Avis
            </a>
            <a href="#zone" className="text-stone-700 hover:text-amber-800 transition-colors">
              Zone
            </a>
            <a
              href="#contact"
              className="bg-amber-800 text-white px-5 py-2.5 rounded-full hover:bg-amber-900 transition-transform hover:scale-105 shadow-md flex items-center text-sm font-semibold"
            >
              <IconMessage />
              Me contacter
            </a>
          </div>

          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg text-stone-700 hover:bg-amber-100/50"
            aria-label="Menu"
          >
            {isMenuOpen ? <IconClose /> : <IconMenu />}
          </button>
        </nav>

        {/* Menu Mobile */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-b border-stone-200 px-6 py-4 space-y-3 font-medium shadow-xl">
            <a
              href="#processus"
              onClick={toggleMenu}
              className="block py-2 text-stone-700 hover:text-amber-800"
            >
              Comment ça se passe ? (Pré-visite offerte)
            </a>
            <a
              href="#gardes"
              onClick={toggleMenu}
              className="block py-2 text-stone-700 hover:text-amber-800"
            >
              Formules Garde
            </a>
            <a
              href="#balades"
              onClick={toggleMenu}
              className="block py-2 text-stone-700 hover:text-amber-800"
            >
              Balades & Forfaits (11h - 15h)
            </a>
            <a
              href="#a-propos"
              onClick={toggleMenu}
              className="block py-2 text-stone-700 hover:text-amber-800"
            >
              À Propos
            </a>
            <a
              href="#temoignages"
              onClick={toggleMenu}
              className="block py-2 text-stone-700 hover:text-amber-800"
            >
              Avis Clients
            </a>
            <a
              href="#zone"
              onClick={toggleMenu}
              className="block py-2 text-stone-700 hover:text-amber-800"
            >
              Zone d'intervention
            </a>
            <a
              href="#contact"
              onClick={toggleMenu}
              className="block text-center bg-amber-800 text-white py-3 rounded-full hover:bg-amber-900 font-semibold shadow-md mt-2"
            >
              Me contacter (06 88 99 10 61)
            </a>
          </div>
        )}
      </header>

      {/* =========== Section Principale (Hero) =========== */}
      <main className="container mx-auto px-6 py-12 md:py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-amber-100/90 text-amber-900 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-amber-300/50 shadow-xs">
              <IconSparkles />
              <span>1ère rencontre de 45 min 100% offerte</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-stone-900">
              Le bonheur de vos compagnons,{" "}
              <span className="text-amber-800 underline decoration-amber-300 decoration-2">
                ma priorité.
              </span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-stone-700 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Pet sitter passionnée et attentionnée au <strong>Vésinet</strong> et à{" "}
              <strong>Saint-Germain-en-Laye</strong>. Gardes personnalisées et balades stimulantes en journée pour que vous partiez en toute sérénité.
            </p>

            {/* Badges clairs */}
            <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-3 text-xs sm:text-sm font-medium text-stone-700">
              <span className="bg-white px-3.5 py-1.5 rounded-full shadow-xs border border-amber-200/80 flex items-center">
                📍 Le Vésinet & St-Germain
              </span>
              <span className="bg-white px-3.5 py-1.5 rounded-full shadow-xs border border-amber-200/80 flex items-center">
                🕒 Joignable 9h - 20h
              </span>
              <span className="bg-white px-3.5 py-1.5 rounded-full shadow-xs border border-amber-200/80 flex items-center">
                🐾 Balades de 11h à 15h
              </span>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <a
                href="#gardes"
                className="bg-amber-800 text-white px-8 py-3.5 rounded-full font-bold text-lg hover:bg-amber-900 transition-all hover:scale-105 shadow-lg text-center"
              >
                Découvrir les formules
              </a>
              <a
                href="#contact"
                className="bg-white text-amber-900 border-2 border-amber-800 px-8 py-3.5 rounded-full font-bold text-lg hover:bg-amber-50 transition-all hover:scale-105 shadow-md text-center"
              >
                Me contacter par message
              </a>
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            <div className="relative mx-auto max-w-lg">
              <div className="absolute -inset-2 bg-gradient-to-tr from-amber-400 to-amber-200 rounded-3xl blur-lg opacity-40"></div>
              <img
                src="/sisi.jpeg"
                alt="Chien heureux en promenade"
                className="relative rounded-3xl shadow-2xl w-full h-auto object-cover max-h-[500px]"
              />
              <div className="absolute -bottom-5 -left-5 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-amber-100 hidden sm:flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center text-2xl">
                  🎁
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-amber-800">
                    Confiance garantie
                  </p>
                  <p className="text-sm font-semibold text-stone-800">
                    Pré-visite 45 min offerte
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* =========== Section Processus "Comment ça se passe ?" =========== */}
      <section id="processus" className="bg-white py-16 md:py-24 border-y border-stone-200">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-amber-800 font-bold uppercase tracking-wider text-xs sm:text-sm">
              Déroulement simple & transparent
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-stone-900 mt-2">
              Comment ça se passe ?
            </h2>
            <p className="mt-3 text-stone-600 text-base">
              Une organisation rigoureuse pour garantir le bien-être de votre animal et votre totale tranquillité.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="bg-amber-50/50 p-8 rounded-3xl border border-amber-200/70 shadow-sm hover:shadow-md transition-shadow relative flex flex-col">
              <div className="w-14 h-14 rounded-2xl bg-amber-800 text-white font-black text-xl flex items-center justify-center mb-6 shadow-md">
                1
              </div>
              <div className="inline-block bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full mb-3 self-start">
                OFFERT (45 min)
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-2">
                La Pré-visite à domicile
              </h3>
              <p className="text-stone-700 text-sm leading-relaxed flex-grow">
                Je viens vous rencontrer directement chez vous pour faire connaissance avec votre compagnon, découvrir son caractère, ses petites habitudes et instaurer un vrai lien de confiance.
              </p>
            </div>

            <div className="bg-amber-50/50 p-8 rounded-3xl border border-amber-200/70 shadow-sm hover:shadow-md transition-shadow relative flex flex-col">
              <div className="w-14 h-14 rounded-2xl bg-amber-800 text-white font-black text-xl flex items-center justify-center mb-6 shadow-md">
                2
              </div>
              <div className="inline-block bg-amber-200 text-amber-900 text-xs font-bold px-3 py-1 rounded-full mb-3 self-start">
                Réservation sûre
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-2">
                Choix de formule & Acompte
              </h3>
              <p className="text-stone-700 text-sm leading-relaxed flex-grow">
                Nous sélectionnons la formule la plus adaptée (Long séjour, Nuit/Balades ou Visites). Un acompte de 30% permet de verrouiller définitivement vos dates pour la semaine.
              </p>
            </div>

            <div className="bg-amber-50/50 p-8 rounded-3xl border border-amber-200/70 shadow-sm hover:shadow-md transition-shadow relative flex flex-col">
              <div className="w-14 h-14 rounded-2xl bg-amber-800 text-white font-black text-xl flex items-center justify-center mb-6 shadow-md">
                3
              </div>
              <div className="inline-block bg-amber-200 text-amber-900 text-xs font-bold px-3 py-1 rounded-full mb-3 self-start">
                Sérénité 100%
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-2">
                Suivi & Nouvelles au quotidien
              </h3>
              <p className="text-stone-700 text-sm leading-relaxed flex-grow">
                Pendant vos absences, recevez régulièrement des photos, vidéos et petits messages rassurants pour suivre les aventures et le bien-être de votre fidèle compagnon.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========== Section Formules de Garde =========== */}
      <section id="gardes" className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-amber-800 font-bold uppercase tracking-wider text-xs sm:text-sm">
              Formules Clés en Main
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-stone-900 mt-2">
              Gardes à Domicile
            </h2>
            <p className="mt-4 text-stone-700 text-base md:text-lg">
              Votre animal reste dans son environnement familier sans stress. Des formules complètes avec des réductions attractives pour les séjours de 7 et 14 jours.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {/* Formule 1 : Long Séjour */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-amber-600 relative flex flex-col transform hover:-translate-y-1 transition-all">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-700 text-white text-xs uppercase font-extrabold px-4 py-1.5 rounded-full shadow-md">
                🌟 Le Plus Complet
              </div>
              <div className="mb-4 mt-2">
                <h3 className="text-2xl font-extrabold text-stone-900">Long Séjour</h3>
                <p className="text-stone-600 text-sm mt-1">
                  Présence continue, nuits sur place, soins, repas et balades quotidiennes incluses.
                </p>
              </div>

              <div className="my-6 p-5 bg-amber-50/70 rounded-2xl border border-amber-200">
                <div className="flex justify-between items-baseline mb-2">
                  <span className="font-bold text-stone-800 text-base">Formule 7 jours</span>
                  <div className="text-right">
                    <span className="line-through text-stone-400 text-sm mr-2">455 €</span>
                    <span className="text-2xl font-black text-amber-900">390 €</span>
                  </div>
                </div>
                <div className="text-xs text-emerald-700 font-bold mb-3">Économisez 65 € sur la semaine</div>

                <div className="border-t border-amber-200/80 pt-3 flex justify-between items-baseline">
                  <span className="font-bold text-stone-800 text-base">Formule 14 jours</span>
                  <div className="text-right">
                    <span className="line-through text-stone-400 text-sm mr-2">910 €</span>
                    <span className="text-2xl font-black text-amber-900">730 €</span>
                  </div>
                </div>
                <div className="text-xs text-emerald-700 font-bold mt-1">
                  Avantage 2 semaines : 390 € × 2 - 50 €
                </div>
              </div>

              <ul className="space-y-3 text-stone-700 text-sm flex-grow mb-8">
                <li className="flex items-center">
                  <CheckIcon />
                  <span>Présence continue et nuits passées sur place</span>
                </li>
                <li className="flex items-center">
                  <CheckIcon />
                  <span>Soins, alimentation et câlins illimités</span>
                </li>
                <li className="flex items-center">
                  <CheckIcon />
                  <span>Balades quotidiennes adaptées au rythme de l'animal</span>
                </li>
                <li className="flex items-center">
                  <CheckIcon />
                  <span>Maintien de la sécurité de votre domicile</span>
                </li>
              </ul>

              <a
                href="#contact"
                className="w-full text-center bg-amber-800 text-white py-3.5 rounded-full font-bold hover:bg-amber-900 transition-colors shadow-md"
              >
                Réserver un long séjour
              </a>
            </div>

            {/* Formule 2 : Nuit / Balades */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-stone-200 relative flex flex-col transform hover:-translate-y-1 transition-all">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-stone-800 text-white text-xs uppercase font-extrabold px-4 py-1.5 rounded-full shadow-md">
                🔥 Populaire & Équilibré
              </div>
              <div className="mb-4 mt-2">
                <h3 className="text-2xl font-extrabold text-stone-900">Nuit & Balades</h3>
                <p className="text-stone-600 text-sm mt-1">
                  Présence de 18h à 9h (nuit + soins complets) + 1 passage/balade dans la journée.
                </p>
              </div>

              <div className="my-6 p-5 bg-stone-50 rounded-2xl border border-stone-200">
                <div className="flex justify-between items-baseline mb-2">
                  <span className="font-bold text-stone-800 text-base">Formule 7 jours</span>
                  <div className="text-right">
                    <span className="line-through text-stone-400 text-sm mr-2">350 €</span>
                    <span className="text-2xl font-black text-stone-900">315 €</span>
                  </div>
                </div>
                <div className="text-xs text-emerald-700 font-bold mb-3">Économisez 35 € sur la semaine</div>

                <div className="border-t border-stone-200 pt-3 flex justify-between items-baseline">
                  <span className="font-bold text-stone-800 text-base">Formule 14 jours</span>
                  <div className="text-right">
                    <span className="line-through text-stone-400 text-sm mr-2">700 €</span>
                    <span className="text-2xl font-black text-stone-900">580 €</span>
                  </div>
                </div>
                <div className="text-xs text-emerald-700 font-bold mt-1">
                  Avantage 2 semaines : 315 € × 2 - 50 €
                </div>
              </div>

              <ul className="space-y-3 text-stone-700 text-sm flex-grow mb-8">
                <li className="flex items-center">
                  <CheckIcon />
                  <span>Présence du soir au matin : de 18h à 9h</span>
                </li>
                <li className="flex items-center">
                  <CheckIcon />
                  <span>1 passage ou promenade dédié dans la journée</span>
                </li>
                <li className="flex items-center">
                  <CheckIcon />
                  <span>Repas du matin et du soir respectés à l'heure</span>
                </li>
                <li className="flex items-center">
                  <CheckIcon />
                  <span>Photos et nouvelles chaque jour</span>
                </li>
              </ul>

              <a
                href="#contact"
                className="w-full text-center bg-stone-900 text-white py-3.5 rounded-full font-bold hover:bg-stone-800 transition-colors shadow-md"
              >
                Réserver Nuit & Balades
              </a>
            </div>

            {/* Formule 3 : Passes visites quotidiennes */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-stone-200 relative flex flex-col transform hover:-translate-y-1 transition-all">
              <div className="mb-4 mt-2">
                <div className="inline-block bg-amber-100 text-amber-900 text-xs font-bold px-3 py-1 rounded-full mb-2">
                  Idéal Chats & Chiens Autonomes
                </div>
                <h3 className="text-2xl font-extrabold text-stone-900">Visites Quotidiennes</h3>
                <p className="text-stone-600 text-sm mt-1">
                  2 passages de 45 min par jour (sans nuitée) pour sorties, nourriture et compagnie.
                </p>
              </div>

              <div className="my-6 p-5 bg-stone-50 rounded-2xl border border-stone-200">
                <div className="flex justify-between items-baseline mb-2">
                  <span className="font-bold text-stone-800 text-base">Formule 7 jours</span>
                  <div className="text-right">
                    <span className="line-through text-stone-400 text-sm mr-2">255 €</span>
                    <span className="text-2xl font-black text-stone-900">215 €</span>
                  </div>
                </div>
                <div className="text-xs text-emerald-700 font-bold">Économisez 40 € sur la semaine</div>
                <div className="mt-3 text-xs text-stone-500 italic">
                  2 visites de 45 minutes chaque jour à domicile
                </div>
              </div>

              <ul className="space-y-3 text-stone-700 text-sm flex-grow mb-8">
                <li className="flex items-center">
                  <CheckIcon />
                  <span>2 visites quotidiennes complètes de 45 minutes</span>
                </li>
                <li className="flex items-center">
                  <CheckIcon />
                  <span>Sorties pipi, renouvellement d'eau et nourriture</span>
                </li>
                <li className="flex items-center">
                  <CheckIcon />
                  <span>Nettoyage des litières et espace de vie</span>
                </li>
                <li className="flex items-center">
                  <CheckIcon />
                  <span>Jeux, brossage et moments d'affection</span>
                </li>
              </ul>

              <a
                href="#contact"
                className="w-full text-center bg-stone-800 text-white py-3.5 rounded-full font-bold hover:bg-stone-900 transition-colors shadow-md"
              >
                Réserver les visites
              </a>
            </div>
          </div>

          {/* Encadré d'information et conditions de garde */}
          <div className="mt-12 bg-white rounded-3xl p-6 sm:p-8 border border-amber-300/80 shadow-md">
            <h4 className="text-lg sm:text-xl font-bold text-amber-900 mb-4 flex items-center gap-2">
              <IconSparkles />
              <span>Modalités & Conditions de réservation</span>
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-stone-700">
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-200/60">
                <p className="font-bold text-stone-900 mb-1">🐾 Plusieurs animaux ?</p>
                <p>
                  Si <strong>2 chiens</strong> : +30% du prix total.
                  <br />
                  Si <strong>3 chiens</strong> : +30% + 20%.
                </p>
              </div>
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-200/60">
                <p className="font-bold text-stone-900 mb-1">🔒 Acompte de réservation</p>
                <p>
                  Un acompte de <strong>30%</strong> est demandé pour bloquer la semaine (non remboursable en cas d’annulation de dernière minute).
                </p>
              </div>
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-200/60">
                <p className="font-bold text-stone-900 mb-1">🎁 Rencontre préalable</p>
                <p>
                  Pré-visite de <strong>45 minutes 100% offerte</strong> pour faire connaissance avant toute première réservation !
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========== Section Balades & Promenades =========== */}
      <section id="balades" className="bg-white py-20 md:py-28 border-t border-stone-200">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-amber-800 font-bold uppercase tracking-wider text-xs sm:text-sm">
              Activité Physique & Bien-Être
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-stone-900 mt-2">
              Balades & Promenades
            </h2>
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-900 font-bold px-4 py-1.5 rounded-full text-sm mt-3">
              <IconClock /> Créneau des sorties : 11h00 - 15h00
            </div>
            <p className="mt-4 text-stone-700 text-base md:text-lg">
              Des sorties enrichissantes adaptées aux besoins de dépense et de reniflage de votre chien, en solo ou en petit groupe bienveillant.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Colonne 1 : À l'Unité */}
            <div className="bg-amber-50/40 rounded-3xl p-8 border border-stone-200 shadow-sm flex flex-col">
              <div className="mb-6">
                <span className="text-xs uppercase font-extrabold tracking-wider text-amber-800 bg-amber-100 px-3 py-1 rounded-full">
                  Flexibilité totale
                </span>
                <h3 className="text-2xl font-bold text-stone-900 mt-3">Balades à l'Unité</h3>
                <p className="text-stone-600 text-sm mt-1">
                  Idéal pour des besoins ponctuels ou tester le service.
                </p>
              </div>

              <div className="space-y-4 flex-grow">
                <div className="flex justify-between items-center bg-white p-4 rounded-2xl shadow-xs border border-stone-200">
                  <div>
                    <h4 className="font-bold text-stone-900">Grande Balade (1h30)</h4>
                    <p className="text-xs text-stone-500">Pour les chiens sportifs et actifs</p>
                  </div>
                  <span className="text-2xl font-black text-amber-900">27 €</span>
                </div>

                <div className="flex justify-between items-center bg-white p-4 rounded-2xl shadow-xs border border-stone-200">
                  <div>
                    <h4 className="font-bold text-stone-900">Balade Standard (45 min / 1h)</h4>
                    <p className="text-xs text-stone-500">Le format idéal pour le quotidien</p>
                  </div>
                  <span className="text-2xl font-black text-amber-900">23 €</span>
                </div>

                <div className="flex justify-between items-center bg-white p-4 rounded-2xl shadow-xs border border-stone-200">
                  <div>
                    <h4 className="font-bold text-stone-900">Sortie Express (20 min)</h4>
                    <p className="text-xs text-stone-500">Pause hygiénique rapide</p>
                  </div>
                  <span className="text-2xl font-black text-amber-900">15 €</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-200 text-xs text-stone-600 italic">
                Sorties réalisées entre 11h et 15h sur Le Vésinet, Saint-Germain-en-Laye et proches alentours.
              </div>
            </div>

            {/* Colonne 2 : Forfaits 10 Balades */}
            <div className="bg-gradient-to-br from-amber-800 to-amber-950 text-white rounded-3xl p-8 shadow-xl flex flex-col relative overflow-hidden">
              <div className="absolute -right-8 -top-8 w-36 h-36 bg-amber-600/30 rounded-full blur-2xl"></div>

              <div className="mb-6 relative z-10">
                <span className="text-xs uppercase font-extrabold tracking-wider text-amber-950 bg-amber-200 px-3 py-1 rounded-full">
                  Avantage Économique
                </span>
                <h3 className="text-2xl font-bold text-white mt-3">Forfait 10 Balades</h3>
                <p className="text-amber-200 text-sm mt-1">
                  Utilisation à tout moment pendant <strong>2 mois</strong> !
                </p>
              </div>

              <div className="space-y-4 flex-grow relative z-10">
                <div className="flex justify-between items-center bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/15">
                  <div>
                    <h4 className="font-bold text-white">10 Balades de 1h30</h4>
                    <p className="text-xs text-amber-200">Soit 24 € / balade (au lieu de 270 €)</p>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-black text-amber-300">240 €</span>
                    <span className="block text-xs text-emerald-400 font-bold">-30 €</span>
                  </div>
                </div>

                <div className="flex justify-between items-center bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/15">
                  <div>
                    <h4 className="font-bold text-white">10 Balades de 45 min / 1h</h4>
                    <p className="text-xs text-amber-200">Soit 21,50 € / balade (au lieu de 230 €)</p>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-black text-amber-300">215 €</span>
                    <span className="block text-xs text-emerald-400 font-bold">-15 €</span>
                  </div>
                </div>

                <div className="flex justify-between items-center bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/15">
                  <div>
                    <h4 className="font-bold text-white">10 Balades de 20 min</h4>
                    <p className="text-xs text-amber-200">Soit 14 € / sortie (au lieu de 150 €)</p>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-black text-amber-300">140 €</span>
                    <span className="block text-xs text-emerald-400 font-bold">-10 €</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/15 relative z-10 flex items-center justify-between text-xs text-amber-200">
                <span>🗓️ Validité : 2 mois consécutifs</span>
                <a
                  href="#contact"
                  className="bg-white text-amber-900 font-bold px-4 py-2 rounded-full hover:bg-amber-100 transition-colors"
                >
                  Prendre un forfait →
                </a>
              </div>
            </div>
          </div>

          {/* Bandeau Devis Mensuel Personnalisé */}
          <div className="mt-10 max-w-5xl mx-auto bg-amber-100/70 border border-amber-300/80 rounded-2xl p-6 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div>
              <h4 className="text-base font-bold text-amber-950">
                Besoin d'un rythme particulier chaque mois ?
              </h4>
              <p className="text-sm text-stone-700 mt-0.5">
                Sur demande, je réalise un <strong>devis personnalisé</strong> pour un nombre de balades précises dans le mois.
              </p>
            </div>
            <a
              href="#contact"
              className="bg-amber-800 text-white font-semibold text-sm px-6 py-2.5 rounded-full hover:bg-amber-900 transition-transform hover:scale-105 whitespace-nowrap shadow-sm"
            >
              Demander un devis mensuel
            </a>
          </div>
        </div>
      </section>

      {/* =========== Section À Propos =========== */}
      <section id="a-propos" className="py-20 md:py-28">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12 max-w-5xl">
          <div className="md:w-5/12 text-center">
            <div className="relative inline-block">
              <div className="absolute -inset-2 bg-amber-300/50 rounded-full blur-md"></div>
              <img
                src="/moi.jpeg"
                alt="Portrait d'Ornella, pet sitter"
                className="relative rounded-full shadow-2xl w-64 h-64 sm:w-72 sm:h-72 object-cover mx-auto border-4 border-white"
              />
            </div>
          </div>
          <div className="md:w-7/12 text-center md:text-left">
            <span className="text-amber-800 font-bold uppercase tracking-wider text-xs sm:text-sm">
              À Propos
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-stone-900 mt-1">
              Passionnée par les animaux avant tout
            </h2>
            <p className="mt-5 text-base sm:text-lg text-stone-700 leading-relaxed">
              Bonjour, je m'appelle <strong>Ornella</strong> ! Passionnée depuis toujours par les animaux, j'ai la chance de partager mon quotidien avec mon propre chien depuis plusieurs années.
            </p>
            <p className="mt-4 text-base sm:text-lg text-stone-700 leading-relaxed">
              Dévouée, bienveillante et à l'écoute des besoins spécifiques de chaque animal, je mets toute mon énergie pour assurer leur confort, leur dépense physique et leur sécurité pendant vos absences.
            </p>
            <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-4">
              <div className="bg-white px-4 py-2 rounded-xl shadow-xs border border-amber-200 text-sm font-semibold text-stone-800">
                🎓 Formation ACACED
              </div>
              <div className="bg-white px-4 py-2 rounded-xl shadow-xs border border-amber-200 text-sm font-semibold text-stone-800">
                ❤️ Bienveillance & Patience
              </div>
              <div className="bg-white px-4 py-2 rounded-xl shadow-xs border border-amber-200 text-sm font-semibold text-stone-800">
                📸 Nouvelles en temps réel
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========== Section Témoignages =========== */}
      <section id="temoignages" className="bg-white py-20 md:py-28 border-t border-stone-200">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-amber-800 font-bold uppercase tracking-wider text-xs sm:text-sm">
              Avis & Retours d'expérience
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-stone-900 mt-2">
              Ils me font confiance
            </h2>
            <p className="mt-3 text-stone-600 max-w-xl mx-auto text-base">
              Découvrez les retours bienveillants des propriétaires qui m'ont confié leurs compagnons.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-amber-50/50 p-8 rounded-3xl shadow-sm border border-stone-200/80 flex flex-col justify-between">
              <p className="text-stone-700 italic text-sm leading-relaxed">
                "Ornella a été incroyable avec notre chien Tao. Nous avons reçu des photos tous les jours et l'avons retrouvé plus heureux que jamais. Nous la recommandons les yeux fermés !"
              </p>
              <div className="mt-6 flex items-center pt-4 border-t border-amber-200/60">
                <img
                  src="/tao.png"
                  alt="Tao"
                  className="w-12 h-12 rounded-full mr-4 object-cover border-2 border-white shadow-xs"
                />
                <div>
                  <p className="font-bold text-stone-900 text-sm">Lauriane</p>
                  <p className="text-xs text-stone-500">Propriétaire de Tao, Labrador</p>
                </div>
              </div>
            </div>

            <div className="bg-amber-50/50 p-8 rounded-3xl shadow-sm border border-stone-200/80 flex flex-col justify-between">
              <p className="text-stone-700 italic text-sm leading-relaxed">
                "Ornella est une excellente petsitter. Elle s'occupe de mon labrador Reyna et de mon chat Clochette. Balades régulières en forêt, personne de confiance avec de superbes qualités humaines. Foncez !"
              </p>
              <div className="mt-6 flex items-center pt-4 border-t border-amber-200/60">
                <img
                  src="/reyna.jpg"
                  alt="Reyna"
                  className="w-12 h-12 rounded-full mr-4 object-cover border-2 border-white shadow-xs"
                />
                <div>
                  <p className="font-bold text-stone-900 text-sm">Véro</p>
                  <p className="text-xs text-stone-500">Propriétaire de Reyna & Clochette</p>
                </div>
              </div>
            </div>

            <div className="bg-amber-50/50 p-8 rounded-3xl shadow-sm border border-stone-200/80 flex flex-col justify-between">
              <p className="text-stone-700 italic text-sm leading-relaxed">
                "J’ai confié mes deux chiennes à Ornella : aux petits soins, attentive aux besoins de chacune. J'ai eu des nouvelles régulièrement et mes chiennes sont revenues détendues. Une vraie professionnelle !"
              </p>
              <div className="mt-6 flex items-center pt-4 border-t border-amber-200/60">
                <img
                  src="/savannah.jpeg"
                  alt="Savannah et Charlie"
                  className="w-12 h-12 rounded-full mr-4 object-cover border-2 border-white shadow-xs"
                />
                <div>
                  <p className="font-bold text-stone-900 text-sm">Carine et Julien</p>
                  <p className="text-xs text-stone-500">Savannah (Berger Allemand) & Charlie</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========== Section Zone d'intervention =========== */}
      <section id="zone" className="py-20 md:py-24 bg-amber-50/70 border-t border-stone-200">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <span className="text-amber-800 font-bold uppercase tracking-wider text-xs sm:text-sm">
            Proximité & Disponibilité
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-stone-900 mt-2">
            Zone d'intervention
          </h2>
          <p className="mt-4 text-stone-700 text-base md:text-lg">
            Je me déplace directement à votre domicile sur le secteur suivant et ses alentours proches :
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <span className="bg-amber-800 text-white font-bold px-5 py-2.5 rounded-full shadow-md text-base flex items-center">
              📍 Le Vésinet
            </span>
            <span className="bg-amber-800 text-white font-bold px-5 py-2.5 rounded-full shadow-md text-base flex items-center">
              📍 Saint-Germain-en-Laye
            </span>
          </div>

          <p className="mt-6 text-stone-600 text-sm italic">
            Votre commune se situe à proximité ? N'hésitez pas à m'envoyer un message pour étudier la faisabilité selon mon planning.
          </p>
        </div>
      </section>

      {/* =========== Section Contact =========== */}
      <section id="contact" className="bg-amber-900 text-white py-20 md:py-28 relative overflow-hidden">
        <div className="container mx-auto px-6 text-center max-w-4xl relative z-10">
          <div className="inline-block bg-amber-800 text-amber-200 text-xs font-bold px-4 py-1.5 rounded-full mb-4 border border-amber-700">
            🕒 Joignable 7j/7 de 9h à 20h
          </div>

          <h2 className="text-3xl md:text-5xl font-black">
            Prêt(e) à confier votre compagnon ?
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-amber-100 text-base md:text-lg">
            Discutons des besoins de votre boule de poils ! La pré-visite de <strong>45 minutes est offerte</strong> pour faire connaissance.
          </p>

          {/* Mention importante "uniquement par message" */}
          <div className="mt-8 mx-auto max-w-xl bg-amber-950/60 border border-amber-600/60 rounded-2xl p-4 text-amber-200 text-sm flex items-center justify-center gap-3">
            <span className="text-2xl">📱</span>
            <span>
              <strong>Information contact :</strong> Merci de me contacter <u>uniquement par message</u> (SMS ou WhatsApp) pour préserver le calme auprès des animaux lors des prestations.
            </span>
          </div>

          {/* Téléphone en grand */}
          <div className="mt-8">
            <p className="text-xs uppercase font-bold tracking-widest text-amber-300">
              Numéro direct (SMS & WhatsApp)
            </p>
            <p className="text-3xl sm:text-4xl font-extrabold text-white mt-1 tracking-wider">
              {phoneNumberDisplay}
            </p>
          </div>

          {/* Boutons d'action clairs */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-7 py-3.5 rounded-full font-bold text-base transition-all hover:scale-105 shadow-lg flex items-center gap-2"
            >
              <span>💬</span>
              <span>Écrire sur WhatsApp</span>
            </a>

            <a
              href={smsUrl}
              className="bg-amber-600 hover:bg-amber-500 text-white px-7 py-3.5 rounded-full font-bold text-base transition-all hover:scale-105 shadow-lg flex items-center gap-2"
            >
              <span>✉️</span>
              <span>Envoyer un SMS</span>
            </a>

            <a
              href="mailto:o.prevostat@gmail.com"
              className="bg-white text-amber-950 hover:bg-amber-100 px-7 py-3.5 rounded-full font-bold text-base transition-all hover:scale-105 shadow-lg flex items-center gap-2"
            >
              <span>📧</span>
              <span>Envoyer un E-mail</span>
            </a>
          </div>

          {/* Réseaux Sociaux */}
          <div className="mt-14 pt-8 border-t border-amber-800">
            <p className="text-amber-300 text-sm font-semibold mb-4">
              Suivez les aventures du quotidien sur les réseaux :
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
        </div>
      </section>

      {/* =========== Footer =========== */}
      <footer className="bg-stone-900 text-white py-10 border-t border-stone-800">
        <div className="container mx-auto px-6 text-center text-sm">
          <p className="font-semibold text-stone-300">
            🐾 Petsitter Ornella — Le Vésinet & Saint-Germain-en-Laye
          </p>
          <p className="text-stone-400 mt-2">
            Gardes attentionnées, visites à domicile & balades canines (11h-15h).
          </p>
          <p className="text-xs text-stone-500 mt-4">
            &copy; {new Date().getFullYear()} Petsitter Ornella. Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
