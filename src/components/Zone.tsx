import React from "react";
import { villes } from "../data/landingData";

export const Zone: React.FC = () => {
  return (
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
          {villes.map((ville, index) => (
            <span
              key={index}
              className="bg-yellow-100 text-amber-800 font-semibold px-4 py-2 rounded-full"
            >
              {ville}
            </span>
          ))}
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
  );
};
