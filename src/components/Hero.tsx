import React from "react";

const IconSparkles = () => (
  <svg
    className="w-4 h-4 text-amber-600 flex-shrink-0"
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

export const Hero: React.FC = () => {
  return (
    <main className="container mx-auto px-6 py-12 md:py-20">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="lg:w-1/2 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-amber-100/90 text-amber-900 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-6 border border-amber-300/60 shadow-xs">
            <IconSparkles />
            <span>1ère rencontre de 45 min 100% offerte</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-stone-900 font-display">
            Le bonheur de vos compagnons,{" "}
            <span className="text-amber-800 underline decoration-amber-300 decoration-2">
              ma priorité.
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-stone-700 leading-relaxed max-w-xl mx-auto lg:mx-0">
            Pet sitter passionnée et attentionnée au <strong>Vésinet</strong> et à{" "}
            <strong>Saint-Germain-en-Laye</strong>. Gardes personnalisées et balades stimulantes en journée pour que vous partiez en toute sérénité.
          </p>

          <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-3 text-xs sm:text-sm font-medium text-stone-700">
            <span className="bg-white px-3.5 py-1.5 rounded-full shadow-xs border border-amber-200/80">
              📍 Le Vésinet & St-Germain
            </span>
            <span className="bg-white px-3.5 py-1.5 rounded-full shadow-xs border border-amber-200/80">
              🕒 Joignable 9h - 20h
            </span>
            <span className="bg-white px-3.5 py-1.5 rounded-full shadow-xs border border-amber-200/80">
              🐾 Balades de 11h à 15h
            </span>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <a
              href="#gardes"
              className="bg-amber-800 text-white px-8 py-3.5 rounded-full font-bold text-lg hover:bg-amber-900 transition-all hover:scale-105 shadow-lg text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700 focus-visible:ring-offset-2"
            >
              Découvrir les formules
            </a>
            <a
              href="#contact"
              className="bg-white text-amber-900 border-2 border-amber-800 px-8 py-3.5 rounded-full font-bold text-lg hover:bg-amber-50 transition-all hover:scale-105 shadow-md text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700 focus-visible:ring-offset-2"
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
              loading="lazy"
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
  );
};
