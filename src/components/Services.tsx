import React from "react";
import { servicesData } from "../data/landingData";

export const Services: React.FC = () => {
  return (
    <section id="services" className="bg-white py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 font-display">
            Des services adaptés à chaque besoin
          </h2>
          <p className="mt-4 text-stone-700 max-w-2xl mx-auto">
            Que ce soit pour une journée, un week-end ou plus, je propose des
            solutions flexibles pour le bien-être de vos animaux.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="bg-yellow-50 p-8 rounded-2xl shadow-sm border border-yellow-200 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-lg flex flex-col"
            >
              <div className="flex-grow">
                <div className="bg-amber-100 text-amber-800 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <img src={service.iconPath} alt="" className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-semibold mb-3 font-display">{service.title}</h3>
                <p
                  className="text-stone-700"
                  dangerouslySetInnerHTML={{ __html: service.description }}
                ></p>
              </div>
              <a
                href="#tarifs"
                className="mt-6 font-semibold text-amber-800 hover:text-amber-900 transition-colors self-start focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700 focus-visible:ring-offset-2 rounded"
              >
                Consulter les tarifs →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
