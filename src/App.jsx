import React from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import Services from "./components/sections/Services";
import WhyChooseUs from "./components/sections/WhyChooseUs";
import Mission from "./components/sections/Mission";
import Contact from "./components/sections/Contact";

function App() {
  return (
    <div className="min-h-screen bg-accent">
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <Mission />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
