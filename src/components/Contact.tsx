import React from "react";
import { contactInfo } from "../data/landingData";

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="bg-amber-900 text-white py-20 md:py-28 relative overflow-hidden">
      <div className="container mx-auto px-6 text-center max-w-4xl relative z-10">
        <div className="inline-block bg-amber-800 text-amber-200 text-xs font-bold px-4 py-1.5 rounded-full mb-4 border border-amber-700">
          🕒 {contactInfo.hours}
        </div>

        <h2 className="text-3xl md:text-5xl font-black font-display">
          Prêt(e) à confier votre compagnon ?
        </h2>

        <p className="mt-4 max-w-2xl mx-auto text-amber-100 text-base md:text-lg">
          Discutons des besoins de votre boule de poils ! La pré-visite de <strong>45 minutes est offerte</strong> pour faire connaissance.
        </p>

        {/* Mention importante "uniquement par message" */}
        <div className="mt-8 mx-auto max-w-xl bg-amber-950/70 border border-amber-600/70 rounded-2xl p-4 text-amber-200 text-sm flex items-center justify-center gap-3">
          <span className="text-2xl">📱</span>
          <span>
            <strong>Information contact :</strong> Merci de me contacter <u>uniquement par message</u> (SMS ou WhatsApp) pour préserver le calme auprès des animaux lors des prestations.
          </span>
        </div>

        {/* Téléphone en grand */}
        <div className="mt-8">
          <p className="text-xs uppercase font-bold tracking-widest text-amber-300">
            Numéro direct (SMS & WhatsApp)
          </p>
          <p className="text-3xl sm:text-4xl font-extrabold text-white mt-1 tracking-wider">
            {contactInfo.phoneDisplay}
          </p>
        </div>

        {/* Boutons d'action clairs */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href={contactInfo.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-7 py-3.5 rounded-full font-bold text-base transition-all hover:scale-105 shadow-lg flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <span>💬</span>
            <span>Écrire sur WhatsApp</span>
          </a>

          <a
            href={contactInfo.smsUrl}
            className="bg-amber-600 hover:bg-amber-500 text-white px-7 py-3.5 rounded-full font-bold text-base transition-all hover:scale-105 shadow-lg flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <span>✉️</span>
            <span>Envoyer un SMS</span>
          </a>

          <a
            href={`mailto:${contactInfo.email}`}
            className="bg-white text-amber-950 hover:bg-amber-100 px-7 py-3.5 rounded-full font-bold text-base transition-all hover:scale-105 shadow-lg flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <span>📧</span>
            <span>Envoyer un E-mail</span>
          </a>
        </div>

        {/* Réseaux Sociaux */}
        <div className="mt-14 pt-8 border-t border-amber-800">
          <p className="text-amber-300 text-sm font-semibold mb-4">
            Suivez les aventures du quotidien sur les réseaux :
          </p>
          <ul className="social">
            <li data-tooltip="Facebook" style={{ "--bg": "#3a83f7" } as React.CSSProperties}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-amber-800"
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
                className="shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-amber-800"
                href="https://www.instagram.com/petsitter_ornella?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                aria-label="Instagram"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
