export default function Projects() {
  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8 transition-colors">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xl sm:text-2xl font-bold text-primary dark:text-white mb-4">
          Projetos
        </h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {/* Projeto PetAmor com link */}
          <a
            href="https://petamor.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white dark:bg-gray-800 shadow rounded-lg border-l-4 border-secondary hover:shadow-lg transition overflow-hidden"
          >
            <img
              src="/images/petamor-preview.png" // <- caminho da imagem que você colocar no projeto
              alt="Preview do site PetAmor"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white hover:underline">
                PetAmor
              </h3>
              <p className="text-sm mt-1 text-gray-700 dark:text-gray-300">
                Site de petshop feito em React e Tailwind.
              </p>
            </div>
          </a>

          {/* Outro projeto */}
          <div className="p-4 bg-white dark:bg-gray-800 shadow rounded-lg border-l-4 border-secondary">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
              Projeto X
            </h3>
            <p className="text-sm mt-1 text-gray-700 dark:text-gray-300">
              Outro projeto maneiro que criei.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
