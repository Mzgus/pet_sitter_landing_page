import React from "react";
import { testimonialsData } from "../data/landingData";

export const Testimonials: React.FC = () => {
  return (
    <section id="temoignages" className="bg-white py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 font-display">
            Ils me font confiance
          </h2>
          <p className="mt-4 text-stone-700 max-w-2xl mx-auto">
            Découvrez ce que les propriétaires pensent de mes services.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-yellow-50 p-8 rounded-xl shadow-sm flex flex-col justify-between"
            >
              <p className="text-stone-700 italic">"{testimonial.quote}"</p>
              <div className="mt-4 flex items-center">
                <img
                  src={testimonial.avatarPath}
                  alt={`Avatar ${testimonial.author}`}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                  loading="lazy"
                />
                <div>
                  <p className="font-semibold text-stone-900">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-stone-500">
                    {testimonial.petDetails}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
