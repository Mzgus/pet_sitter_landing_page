import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-white py-10 border-t border-stone-800">
      <div className="container mx-auto px-6 text-center text-sm">
        <p className="font-semibold text-stone-300">
          🐾 Petsitter Ornella — Le Vésinet & Saint-Germain-en-Laye
        </p>
        <p className="text-stone-400 mt-2">
          Gardes attentionnées, visites à domicile & balades canines (11h-15h).
        </p>
        <p className="text-xs text-stone-500 mt-4">
          &copy; {new Date().getFullYear()} Petsitter Ornella. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
};
