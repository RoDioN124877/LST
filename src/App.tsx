import React, { useEffect } from "react";
import "./styles/variables.css";
import "./styles/variables.css";
import "./styles/layout.css";
import "./styles/header.css";
import "./styles/buttons.css";
import "./styles/hero.css";
import "./styles/cards.css";
import "./styles/carousel.css";
import "./styles/footer.css";
import "./styles/contacts.css";
import "./styles/services.css";
import "./styles/modal.css";
import "./styles/whatsapp.css";
import "./styles/responsive.css";
import "./styles/notfound.css";

import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { Models } from "./components/Models";
import { Services } from "./components/Services";
import { Gallery } from "./components/Gallery";
import { About } from "./components/About";
import { Contacts } from "./components/Contacts";
import { Footer } from "./components/Footer";
import { WhatsAppButton } from "./components/WhatsAppButton";
import AOS from "aos";

function App() {
  useEffect(() => {
    AOS.init({ once: true, duration: 700 });
    AOS.refresh();
  }, []);
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Models />
        <Services />
        <Gallery />
        <About />
        <Contacts />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default App;
