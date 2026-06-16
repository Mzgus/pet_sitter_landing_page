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
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center" aria-label="Navigation principale">
        <a
          href="#"
          className="text-2xl font-bold text-amber-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700 focus-visible:ring-offset-2 rounded font-display"
        >
          🐾 Petsitter Ornella
        </a>
        <div className="hidden md:flex space-x-8 items-center">
          <a
            href="#services"
            className="text-stone-600 hover:text-amber-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700 focus-visible:ring-offset-2 rounded"
          >
            Services
          </a>
          <a
            href="#a-propos"
            className="text-stone-600 hover:text-amber-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700 focus-visible:ring-offset-2 rounded"
          >
            À Propos
          </a>
          <a
            href="#temoignages"
            className="text-stone-600 hover:text-amber-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700 focus-visible:ring-offset-2 rounded"
          >
            Témoignages
          </a>
          <a
            href="#tarifs"
            className="text-stone-600 hover:text-amber-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700 focus-visible:ring-offset-2 rounded"
          >
            Tarifs
          </a>
          <a
            href="#zone"
            className="text-stone-600 hover:text-amber-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700 focus-visible:ring-offset-2 rounded"
          >
            Zone
          </a>
          <a
            href="#contact"
            className="bg-amber-700 text-white px-5 py-2 rounded-full hover:bg-amber-800 transition-transform hover:scale-105 shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700 focus-visible:ring-offset-2"
          >
            Contactez-moi
          </a>
        </div>
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700"
          aria-label="Toggle menu"
        >
          <IconMenu />
        </button>
      </nav>
      {isMenuOpen ? (
        <nav className="md:hidden bg-white px-6 pb-4 border-t border-stone-100" aria-label="Menu mobile">
          <ul className="flex flex-col">
            <li>
              <a
                href="#services"
                onClick={toggleMenu}
                className="block py-3 text-stone-600 hover:text-amber-800 transition-colors font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700 rounded"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#a-propos"
                onClick={toggleMenu}
                className="block py-3 text-stone-600 hover:text-amber-800 transition-colors font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700 rounded"
              >
                À Propos
              </a>
            </li>
            <li>
              <a
                href="#temoignages"
                onClick={toggleMenu}
                className="block py-3 text-stone-600 hover:text-amber-800 transition-colors font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700 rounded"
              >
                Témoignages
              </a>
            </li>
            <li>
              <a
                href="#tarifs"
                onClick={toggleMenu}
                className="block py-3 text-stone-600 hover:text-amber-800 transition-colors font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700 rounded"
              >
                Tarifs
              </a>
            </li>
            <li>
              <a
                href="#zone"
                onClick={toggleMenu}
                className="block py-3 text-stone-600 hover:text-amber-800 transition-colors font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700 rounded"
              >
                Zone
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={toggleMenu}
                className="block mt-2 text-center bg-amber-700 text-white px-5 py-3 rounded-full hover:bg-amber-800 transition-colors font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700"
              >
                Contactez-moi
              </a>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
};
