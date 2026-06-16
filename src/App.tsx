import React from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { About } from "./components/About";
import { Testimonials } from "./components/Testimonials";
import { Pricing } from "./components/Pricing";
import { Zone } from "./components/Zone";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export const App: React.FC = () => {
  return (
    <div className="bg-yellow-50 text-stone-900 font-sans">
      <Header />
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <Pricing />
      <Zone />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
