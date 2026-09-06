import React from "react";
import { baladesData } from "../data/landingData";

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

export const Balades: React.FC = () => {
  return (
    <section id="balades" className="bg-white py-20 md:py-28 border-t border-stone-200">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-amber-800 font-bold uppercase tracking-wider text-xs sm:text-sm">
            Activité Physique & Bien-Être
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-stone-900 font-display mt-2">
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
              <h3 className="text-2xl font-bold text-stone-900 font-display mt-3">
                Balades à l'Unité
              </h3>
              <p className="text-stone-600 text-sm mt-1">
                Idéal pour des besoins ponctuels ou pour tester le service.
              </p>
            </div>

            <div className="space-y-4 flex-grow">
              {baladesData.map((item, idx) => (
                <div
                  key={idx}
                  className="flex justify-between items-center bg-white p-4 rounded-2xl shadow-xs border border-stone-200"
                >
                  <div>
                    <h4 className="font-bold text-stone-900">
                      {item.label} ({item.duration})
                    </h4>
                    <p className="text-xs text-stone-500">{item.description}</p>
                  </div>
                  <span className="text-2xl font-black text-amber-900">
                    {item.singlePrice} €
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-stone-200 text-xs text-stone-600 italic">
              Sorties réalisées entre 11h et 15h au Vésinet et à Saint-Germain-en-Laye.
            </div>
          </div>

          {/* Colonne 2 : Forfaits 10 Balades */}
          <div className="bg-gradient-to-br from-amber-800 to-amber-950 text-white rounded-3xl p-8 shadow-xl flex flex-col relative overflow-hidden">
            <div className="absolute -right-8 -top-8 w-36 h-36 bg-amber-600/30 rounded-full blur-2xl"></div>

            <div className="mb-6 relative z-10">
              <span className="text-xs uppercase font-extrabold tracking-wider text-amber-950 bg-amber-200 px-3 py-1 rounded-full">
                Avantage Économique
              </span>
              <h3 className="text-2xl font-bold text-white font-display mt-3">
                Forfait 10 Balades
              </h3>
              <p className="text-amber-200 text-sm mt-1">
                Utilisation flexible à tout moment pendant <strong>2 mois</strong> !
              </p>
            </div>

            <div className="space-y-4 flex-grow relative z-10">
              {baladesData.map((item, idx) => (
                <div
                  key={idx}
                  className="flex justify-between items-center bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/15"
                >
                  <div>
                    <h4 className="font-bold text-white">
                      10 Balades de {item.duration}
                    </h4>
                    <p className="text-xs text-amber-200">
                      Soit {item.unitPriceInForfait % 1 === 0 ? item.unitPriceInForfait : item.unitPriceInForfait.toFixed(2).replace(".", ",")} € / sortie
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-black text-amber-300">
                      {item.forfaitPrice} €
                    </span>
                    <span className="block text-xs text-emerald-400 font-bold">
                      -{item.forfaitSavings} €
                    </span>
                  </div>
                </div>
              ))}
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
            <h4 className="text-base font-bold text-amber-950 font-display">
              Besoin d'un rythme régulier chaque mois ?
            </h4>
            <p className="text-sm text-stone-700 mt-0.5">
              Sur simple demande, je réalise un <strong>devis personnalisé</strong> pour un nombre de balades précises dans le mois.
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
  );
};
