import React from "react";

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="bg-amber-800 text-white py-20 md:py-28">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          Prêt(e) à partir l'esprit serein ?
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-amber-100">
          Contactez-moi pour discuter des besoins de votre compagnon et
          obtenir un devis personnalisé. Une première rencontre est toujours
          offerte !
        </p>
        <div className="mt-12 flex flex-col items-center gap-8">
          <div className="w-full">
            <p className="text-amber-200 mb-6 font-semibold">
              Retrouvez-moi sur les réseaux :
            </p>
            <ul className="social">
              <li data-tooltip="Facebook" style={{ "--bg": "#3a83f7" } as React.CSSProperties}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shadow-lg"
                  href="https://www.facebook.com/profile.php?id=61579984778894&locale=fr_FR"
                  aria-label="Facebook"
                >
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
              </li>
              <li
                data-tooltip="Instagram"
                style={{
                  "--bg":
                    "linear-gradient(-45deg, #feda75, #fa7e1e, #d62976, #962fbf, #4f5bd5)",
                } as React.CSSProperties}
              >
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shadow-lg"
                  href="https://www.instagram.com/petsitter_ornella?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  aria-label="Instagram"
                >
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="flex items-center w-full max-w-xs">
            <div className="flex-grow border-t border-amber-600"></div>
            <span className="flex-shrink mx-4 text-amber-200 font-bold">
              OU
            </span>
            <div className="flex-grow border-t border-amber-600"></div>
          </div>
          <div className="w-full">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:o.prevostat@gmail.com"
              className="bg-white text-amber-800 px-10 py-4 rounded-full font-bold text-lg hover:bg-yellow-50 transition-transform hover:scale-105 shadow-lg inline-block"
            >
              Envoyer un mail
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
