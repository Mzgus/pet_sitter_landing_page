import React from "react";

export const About: React.FC = () => {
  return (
    <section id="a-propos" className="py-20 md:py-28">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-5/12">
          <img
            src="/moi.jpeg"
            alt="Portrait de la pet sitter"
            className="rounded-full shadow-xl w-full max-w-sm mx-auto"
            loading="lazy"
          />
        </div>
        <div className="md:w-7/12 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 font-display">
            Passionnée par les animaux avant tout
          </h2>
          <p className="mt-6 text-lg text-stone-700">
            Bonjour, je m'appelle Ornella ! J'ai 20 ans et ma passion pour les
            animaux remonte à mon enfance.
          </p>
          <p className="mt-4 text-lg text-stone-700">
            Depuis 4 ans j'ai la chance d'avoir mon propre chien et j'adore
            m'occuper de ceux de mes proches. Je souhaite élargir mon cercle
            et offrir mes services en tant que pet sitter.
          </p>
          <p className="mt-4 text-lg text-stone-700">
            En plus de mes quelques années d'expériences, j'ai obtenu mon
            ACACED en janvier pour avoir un statut officiel, car le
            bien-être de vos animaux est ma priorité.
          </p>
        </div>
      </div>
    </section>
  );
};
