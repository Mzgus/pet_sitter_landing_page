import React from "react";

export const Hero: React.FC = () => {
  return (
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
            loading="lazy"
          />
        </div>
      </div>
    </main>
  );
};
