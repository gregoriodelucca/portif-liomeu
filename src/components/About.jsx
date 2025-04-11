import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function About() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
      <h2 className="text-xl sm:text-2xl font-bold text-primary mb-4">Sobre mim</h2>
      <p className="text-sm sm:text-base leading-relaxed text-gray-800 dark:text-gray-300">
        Sou um desenvolvedor apaixonado por tecnologia, criando interfaces modernas com React, Tailwind e criatividade! Trabalho com foco em performance, design e acessibilidade.
      </p>

      {/* Ícones sociais */}
      <div className="mt-6 flex justify-center gap-6">
        <a
          href="https://github.com/gregoriodelucca"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 dark:text-gray-300 hover:text-secondary text-2xl transition-colors"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/gregoriodelucca"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 dark:text-gray-300 hover:text-secondary text-2xl transition-colors"
        >
          <FaLinkedin />
        </a>
      </div>
    </section>
  );
}
