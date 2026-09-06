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

        {/* Réseaux Sociaux - Option 3 : Boutons-bannières chic */}
        <div className="mt-14 pt-8 border-t border-amber-800/80">
          <p className="text-amber-300 text-xs sm:text-sm font-bold uppercase tracking-wider mb-2">
            Rejoignez la communauté
          </p>
          <p className="text-amber-100 text-sm mb-6">
            Suivez en direct les aventures, balades et photos de nos pensionnaires :
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto text-left">
            {/* Bannière Instagram */}
            <a
              href="https://www.instagram.com/petsitter_ornella?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-4 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/15 hover:border-amber-400/50 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 flex items-center justify-center text-white text-xl shadow-md group-hover:scale-105 transition-transform">
                  <i className="fa-brands fa-instagram"></i>
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-extrabold text-white text-sm">Instagram</span>
                    <span className="text-[11px] text-amber-300 font-semibold">@petsitter_ornella</span>
                  </div>
                  <p className="text-xs text-amber-100/80 mt-0.5">
                    Photos, vidéos & stories du jour
                  </p>
                </div>
              </div>
              <span className="text-amber-300 group-hover:text-white text-base font-bold ml-2 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                ↗
              </span>
            </a>

            {/* Bannière Facebook */}
            <a
              href="https://www.facebook.com/profile.php?id=61579984778894&locale=fr_FR"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-4 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/15 hover:border-blue-400/50 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-blue-600 flex items-center justify-center text-white text-xl shadow-md group-hover:scale-105 transition-transform">
                  <i className="fa-brands fa-facebook-f"></i>
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-extrabold text-white text-sm">Facebook</span>
                    <span className="text-[11px] text-amber-300 font-semibold">Petsitter Ornella</span>
                  </div>
                  <p className="text-xs text-amber-100/80 mt-0.5">
                    Actualités & avis de la communauté
                  </p>
                </div>
              </div>
              <span className="text-amber-300 group-hover:text-white text-base font-bold ml-2 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                ↗
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
