import React from "react";

export const Pricing: React.FC = () => {
  return (
    <section id="tarifs" className="bg-yellow-50 py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 font-display">
            Mes Tarifs
          </h2>
          <p className="mt-4 text-stone-700 max-w-3xl mx-auto">
            Voici une grille de mes tarifs de base. Pour toute demande
            spécifique ou un devis personnalisé, n'hésitez pas à me contacter.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Promenades Card */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 flex flex-col">
            <h3 className="text-2xl font-semibold mb-4 text-amber-900 font-display">
              Promenades
            </h3>
            <ul className="space-y-3 text-stone-700 flex-grow">
              <li className="flex justify-between border-b pb-2">
                <span>20 minutes</span>{" "}
                <span className="font-bold text-stone-900">10€</span>
              </li>
              <li className="flex justify-between border-b pb-2">
                <span>40 minutes</span>{" "}
                <span className="font-bold text-stone-900">13€</span>
              </li>
              <li className="flex justify-between border-b pb-2">
                <span>1 heure</span>{" "}
                <span className="font-bold text-stone-900">15€</span>
              </li>
              <li className="flex justify-between">
                <span>1 heure 30</span>{" "}
                <span className="font-bold text-stone-900">18€</span>
              </li>
            </ul>
          </div>

          {/* Visites à Domicile Card */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 flex flex-col">
            <h3 className="text-2xl font-semibold mb-4 text-amber-900 font-display">
              Visites à domicile
            </h3>
            <div className="flex-grow space-y-4">
              <div>
                <h4 className="font-bold text-stone-800">
                  Visites de 20 minutes
                </h4>
                <ul className="space-y-2 text-stone-700 mt-2">
                  <li className="flex justify-between border-b pb-1">
                    <span>1 par jour</span>{" "}
                    <span className="font-bold text-stone-900">12€</span>
                  </li>
                  <li className="flex justify-between border-b pb-1">
                    <span>2 par jour</span>{" "}
                    <span className="font-bold text-stone-900">18€</span>
                  </li>
                  <li className="flex justify-between">
                    <span>3 par jour</span>{" "}
                    <span className="font-bold text-stone-900">23€</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-stone-800">
                  Visites de 40 minutes
                </h4>
                <ul className="space-y-2 text-stone-700 mt-2">
                  <li className="flex justify-between border-b pb-1">
                    <span>1 par jour</span>{" "}
                    <span className="font-bold text-stone-900">16€</span>
                  </li>
                  <li className="flex justify-between border-b pb-1">
                    <span>2 par jour</span>{" "}
                    <span className="font-bold text-stone-900">21€</span>
                  </li>
                  <li className="flex justify-between">
                    <span>3 par jour</span>{" "}
                    <span className="font-bold text-stone-900">26€</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Autres Prestations Card */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 flex flex-col">
            <h3 className="text-2xl font-semibold mb-4 text-amber-900 font-display">
              Autres Prestations
            </h3>
            <div className="flex-grow space-y-4 text-stone-700">
              <div>
                <h4 className="font-bold text-stone-800">Forfait Balades</h4>
                <p className="flex justify-between">
                  <span>
                    Forfait personnalisé sur demande (ex : 10x 1h pour 10
                    semaines 135€)
                  </span>
                </p>
              </div>
              <div className="border-t pt-4">
                <h4 className="font-bold text-stone-800">Transport</h4>
                <p>Toiletteur.</p>
                <p className="font-semibold mt-1">Ex: 10€ pour 10km A/R</p>
              </div>
              <div className="border-t pt-4">
                <h4 className="font-bold text-stone-800">
                  Garde nuits à mon domicile
                </h4>
                <p className="font-semibold mt-1">
                  30€ par nuit (petits chiens uniquement, ex : Chihuahua)
                </p>
              </div>
              <div className="border-t pt-4">
                <h4 className="font-bold text-stone-800">
                  Garde à votre domicile
                </h4>
                <p className="font-semibold mt-1">
                  30€ par nuit (moyen chien)
                </p>
                <p className="font-semibold mt-1">
                  35€ par nuit (grand chien)
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 flex justify-center">
          <a
            href="#contact"
            className="bg-amber-700 text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-amber-800 transition-transform hover:scale-105 shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700 focus-visible:ring-offset-2"
          >
            Faire un devis !
          </a>
        </div>
      </div>
    </section>
  );
};
