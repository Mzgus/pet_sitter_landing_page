import React from "react";
import { processSteps } from "../data/landingData";

export const Process: React.FC = () => {
  return (
    <section id="processus" className="bg-white py-16 md:py-24 border-y border-stone-200">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-amber-800 font-bold uppercase tracking-wider text-xs sm:text-sm">
            Déroulement simple & transparent
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-stone-900 font-display mt-2">
            Comment ça se passe ?
          </h2>
          <p className="mt-3 text-stone-600 text-base">
            Une organisation rigoureuse pour garantir le bien-être de votre animal et votre totale tranquillité.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {processSteps.map((step) => (
            <div
              key={step.step}
              className="bg-amber-50/50 p-8 rounded-3xl border border-amber-200/70 shadow-xs hover:shadow-md transition-shadow relative flex flex-col"
            >
              <div className="w-14 h-14 rounded-2xl bg-amber-800 text-white font-black text-xl flex items-center justify-center mb-6 shadow-md">
                {step.step}
              </div>
              <div className="inline-block bg-amber-200 text-amber-900 text-xs font-bold px-3 py-1 rounded-full mb-3 self-start">
                {step.badge}
              </div>
              <h3 className="text-xl font-bold text-stone-900 font-display mb-2">
                {step.title}
              </h3>
              <p className="text-stone-700 text-sm leading-relaxed flex-grow">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
