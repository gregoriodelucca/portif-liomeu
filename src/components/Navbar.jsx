import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        <h1 className="text-primary text-xl font-bold">Gregorio Dev</h1>
        <div className="hidden md:flex gap-6">
          {["sobre", "projetos", "contato"].map((section) => (
            <button
              key={section}
              onClick={() => scrollTo(section)}
              className="text-gray-700 hover:text-secondary transition"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </div>
        <button
          className="md:hidden text-2xl text-gray-700"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white px-4 pb-4">
          {["sobre", "projetos", "contato"].map((section) => (
            <button
              key={section}
              onClick={() => scrollTo(section)}
              className="block w-full text-left py-2 text-gray-700 hover:text-secondary transition"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
