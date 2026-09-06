import React from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Process } from "./components/Process";
import { Gardes } from "./components/Gardes";
import { Balades } from "./components/Balades";
import { About } from "./components/About";
import { Testimonials } from "./components/Testimonials";
import { Zone } from "./components/Zone";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export const App: React.FC = () => {
  return (
    <div className="bg-amber-50/40 text-stone-900 font-sans selection:bg-amber-200">
      <Header />
      <Hero />
      <Process />
      <Gardes />
      <Balades />
      <About />
      <Testimonials />
      <Zone />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
