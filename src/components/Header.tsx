import React, { useState } from "react";

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

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
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
        <button onClick={toggleMenu} className="md:hidden" aria-label="Toggle menu">
          <IconMenu />
        </button>
      </nav>
      {isMenuOpen ? (
        <div className="md:hidden bg-white px-6 pb-4">
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
      ) : null}
    </header>
  );
};
