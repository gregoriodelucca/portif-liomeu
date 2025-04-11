import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ScrollToTop from "./components/ScrollToTop";
import WhatsAppButton from "./components/WhatsAppButton"; // 👈 aqui tá o botão!

export default function App() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <div className="font-sans scroll-smooth bg-white dark:bg-gray-900 text-gray-800 dark:text-white transition-colors">
      <Navbar />
      <div className="pt-16">
        <button
          onClick={() => setDark(!dark)}
          className="fixed top-4 right-4 z-50 bg-secondary text-white px-3 py-1 rounded shadow-md"
        >
          {dark ? "☀️" : "🌙"}
        </button>
        <Header />
        <section id="sobre">
          <About />
        </section>
        <section id="projetos">
          <Projects />
        </section>
        <section id="contato">
          <Contact />
        </section>
      </div>

      <ScrollToTop />
      <WhatsAppButton /> 
    </div>
  );
}
