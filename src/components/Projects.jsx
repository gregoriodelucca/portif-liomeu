export default function Projects() {
    return (
      <section className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold text-primary mb-4">Projetos</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="p-4 bg-white shadow rounded-lg border-l-4 border-secondary">
              <h3 className="text-lg sm:text-xl font-semibold">Portfólio</h3>
              <p className="text-sm mt-1">Site pessoal feito em React e Tailwind.</p>
            </div>
            <div className="p-4 bg-white shadow rounded-lg border-l-4 border-secondary">
              <h3 className="text-lg sm:text-xl font-semibold">Projeto X</h3>
              <p className="text-sm mt-1">Outro projeto maneiro que criei.</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  