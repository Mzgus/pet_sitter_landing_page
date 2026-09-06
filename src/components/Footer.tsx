import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-800 text-white py-10">
      <div className="container mx-auto px-6 text-center">
        <p>&copy; 2024 Petsitter Ornella. Tous droits réservés.</p>
        <p className="text-sm text-stone-400 mt-2">
          Site conçu avec{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-4 h-4 text-red-500 inline mx-1 align-text-top"
            aria-hidden="true"
          >
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
          </svg>{" "}
          pour nos amis les bêtes.
        </p>
      </div>
    </footer>
  );
};
