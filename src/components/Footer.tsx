import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-800 text-white py-10">
      <div className="container mx-auto px-6 text-center">
        <p>&copy; 2024 Petsitter Ornella. Tous droits réservés.</p>
        <p className="text-sm text-stone-400 mt-2">
          Site conçu avec ❤️ pour nos amis les bêtes.
        </p>
      </div>
    </footer>
  );
};
