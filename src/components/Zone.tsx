import React from "react";
import { villes } from "../data/landingData";

export const Zone: React.FC = () => {
  return (
    <section id="zone" className="py-20 md:py-24 bg-amber-50/70 border-t border-stone-200">
      <div className="container mx-auto px-6 text-center max-w-4xl">
        <span className="text-amber-800 font-bold uppercase tracking-wider text-xs sm:text-sm">
          Proximité & Disponibilité
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-stone-900 font-display mt-2">
          Zone d'intervention
        </h2>
        <p className="mt-4 text-stone-700 text-base md:text-lg">
          Je me déplace directement à votre domicile sur le secteur suivant :
        </p>

        <div
          id="villes-container"
          className="mt-8 flex flex-wrap justify-center gap-3"
        >
          {villes.map((ville, index) => (
            <span
              key={index}
              className="bg-amber-800 text-white font-bold px-6 py-3 rounded-full shadow-md text-base flex items-center"
            >
              📍 {ville}
            </span>
          ))}
        </div>

        <p className="mt-6 text-stone-600 text-sm italic">
          Votre adresse se situe sur ce secteur ? N'hésitez pas à m'envoyer un message pour étudier la faisabilité selon mon planning.
        </p>
      </div>
    </section>
  );
};
