import React from "react";
import { gardesData } from "../data/landingData";

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

export const Gardes: React.FC = () => {
  return (
    <section id="gardes" className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-800 font-bold uppercase tracking-wider text-xs sm:text-sm">
            Formules Clés en Main
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-stone-900 font-display mt-2">
            Gardes à Domicile
          </h2>
          <p className="mt-4 text-stone-700 text-base md:text-lg">
            Votre compagnon reste dans son environnement familier sans stress. Des formules tout confort avec des réductions pour les séjours de 7 et 14 jours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {gardesData.map((formule) => {
            const isHighlighted = formule.isPopular;
            return (
              <div
                key={formule.id}
                className={`bg-white rounded-3xl p-8 shadow-xl relative flex flex-col transform hover:-translate-y-1 transition-all ${
                  isHighlighted ? "border-2 border-amber-600" : "border-2 border-stone-200"
                }`}
              >
                {formule.badge && (
                  <div
                    className={`absolute -top-4 left-1/2 -translate-x-1/2 text-xs uppercase font-extrabold px-4 py-1.5 rounded-full shadow-md text-white ${
                      isHighlighted ? "bg-amber-700" : "bg-stone-800"
                    }`}
                  >
                    {formule.badge}
                  </div>
                )}

                <div className="mb-4 mt-2">
                  <h3 className="text-2xl font-extrabold text-stone-900 font-display">
                    {formule.title}
                  </h3>
                  <p className="text-stone-600 text-sm mt-1">{formule.description}</p>
                </div>

                <div
                  className={`my-6 p-5 rounded-2xl border ${
                    isHighlighted
                      ? "bg-amber-50/70 border-amber-200"
                      : "bg-stone-50 border-stone-200"
                  }`}
                >
                  <div className="flex justify-between items-baseline mb-2">
                    <span className="font-bold text-stone-800 text-base">Formule 7 jours</span>
                    <div className="text-right">
                      <span className="line-through text-stone-400 text-sm mr-2">
                        {formule.originalPrice7Days} €
                      </span>
                      <span className="text-2xl font-black text-amber-900">
                        {formule.price7Days} €
                      </span>
                    </div>
                  </div>
                  <div className="text-xs text-emerald-700 font-bold mb-3">
                    Économisez {formule.originalPrice7Days - formule.price7Days} € sur la semaine
                  </div>

                  {formule.price14Days && (
                    <>
                      <div className="border-t border-stone-200 pt-3 flex justify-between items-baseline">
                        <span className="font-bold text-stone-800 text-base">Formule 14 jours</span>
                        <div className="text-right">
                          <span className="line-through text-stone-400 text-sm mr-2">
                            {formule.originalPrice14Days} €
                          </span>
                          <span className="text-2xl font-black text-amber-900">
                            {formule.price14Days} €
                          </span>
                        </div>
                      </div>
                      {formule.note && (
                        <div className="text-xs text-emerald-700 font-bold mt-1">
                          {formule.note}
                        </div>
                      )}
                    </>
                  )}

                  {!formule.price14Days && formule.note && (
                    <div className="mt-2 text-xs text-stone-500 italic">{formule.note}</div>
                  )}
                </div>

                <ul className="space-y-3 text-stone-700 text-sm flex-grow mb-8">
                  {formule.advantages.map((adv, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckIcon />
                      <span>{adv}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`w-full text-center py-3.5 rounded-full font-bold transition-colors shadow-md text-white ${
                    isHighlighted
                      ? "bg-amber-800 hover:bg-amber-900"
                      : "bg-stone-800 hover:bg-stone-900"
                  }`}
                >
                  Réserver cette formule
                </a>
              </div>
            );
          })}
        </div>

        {/* Encadré d'information et conditions de garde */}
        <div className="mt-12 bg-white rounded-3xl p-6 sm:p-8 border border-amber-300/80 shadow-md">
          <h4 className="text-lg sm:text-xl font-bold text-amber-900 mb-4 flex items-center gap-2 font-display">
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
  );
};
