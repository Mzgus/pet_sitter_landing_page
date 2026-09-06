import React, { useState } from "react";
import { contactInfo } from "../data/landingData";

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

const IconMessage = () => (
  <svg
    className="w-4 h-4 mr-2"
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

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="sticky top-0 z-50">
      {/* Top Banner d'annonce */}
      <div className="bg-amber-900 text-amber-100 text-xs sm:text-sm py-2 px-4 border-b border-amber-800">
        <div className="container mx-auto flex flex-wrap justify-center sm:justify-between items-center gap-2 text-center">
          <div className="flex items-center space-x-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>
              <strong>Secteur :</strong> Le Vésinet & Saint-Germain-en-Laye
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <span>
              🕒 <strong>Joignable de {contactInfo.hours}</strong> (par message)
            </span>
            <span className="hidden md:inline text-amber-300">|</span>
            <span className="hidden md:inline font-semibold text-amber-300">
              🐾 Pré-visite de 45 min offerte
            </span>
          </div>
        </div>
      </div>

      {/* Barre de navigation principale */}
      <div className="bg-white/90 backdrop-blur-md shadow-xs border-b border-stone-200/80">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center" aria-label="Navigation principale">
          <a
            href="#"
            className="flex items-center gap-2 text-2xl font-bold text-amber-900 font-display focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700 rounded"
          >
            <span className="text-3xl">🐾</span>
            <span>Petsitter Ornella</span>
          </a>

          <div className="hidden xl:flex space-x-7 items-center font-medium text-sm">
            <a
              href="#processus"
              className="text-stone-700 hover:text-amber-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700 rounded"
            >
              Comment ça se passe ?
            </a>
            <a
              href="#gardes"
              className="text-stone-700 hover:text-amber-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700 rounded"
            >
              Formules Garde
            </a>
            <a
              href="#balades"
              className="text-stone-700 hover:text-amber-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700 rounded"
            >
              Balades & Forfaits
            </a>
            <a
              href="#a-propos"
              className="text-stone-700 hover:text-amber-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700 rounded"
            >
              À Propos
            </a>
            <a
              href="#temoignages"
              className="text-stone-700 hover:text-amber-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700 rounded"
            >
              Avis
            </a>
            <a
              href="#zone"
              className="text-stone-700 hover:text-amber-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700 rounded"
            >
              Zone
            </a>
            <a
              href="#contact"
              className="bg-amber-800 text-white px-5 py-2.5 rounded-full hover:bg-amber-900 transition-transform hover:scale-105 shadow-md flex items-center font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700"
            >
              <IconMessage />
              Me contacter
            </a>
          </div>

          <button
            onClick={toggleMenu}
            className="xl:hidden p-2 rounded-lg text-stone-700 hover:bg-amber-100/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700"
            aria-label="Menu"
          >
            {isMenuOpen ? <IconClose /> : <IconMenu />}
          </button>
        </nav>

        {/* Menu mobile */}
        {isMenuOpen && (
          <div className="xl:hidden bg-white border-t border-stone-200 px-6 py-4 space-y-3 font-medium shadow-xl">
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
              Me contacter ({contactInfo.phoneDisplay})
            </a>
          </div>
        )}
      </div>
    </header>
  );
};
