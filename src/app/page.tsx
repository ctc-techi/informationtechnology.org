export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="max-w-6xl mx-auto px-8 py-24">
        <h1 className="text-6xl font-bold mb-6">
          InformationTechnology.org
        </h1>

        <p className="text-2xl text-gray-600 mb-10 max-w-3xl">
          Executive-grade insights on technology governance,
          cybersecurity, AI governance, digital transformation,
          enterprise architecture, and leadership.
        </p>

        <div className="flex gap-4">
          <a
            href="#articles"
            className="px-6 py-3 bg-black text-white rounded-lg"
          >
            Explore Articles
          </a>

          <a
            href="#about"
            className="px-6 py-3 border border-gray-300 rounded-lg"
          >
            About
          </a>
        </div>
      </section>

      <section id="articles" className="max-w-6xl mx-auto px-8 py-12">
        <h2 className="text-3xl font-bold mb-6">
          Featured Topics
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="border rounded-xl p-6">
            <h3 className="font-semibold text-xl mb-3">
              Cybersecurity
            </h3>
            <p>
              Governance, resilience, risk management,
              ISO 27001, NIS2 and executive security strategy.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="font-semibold text-xl mb-3">
              AI Governance
            </h3>
            <p>
              Responsible AI, EU AI Act, governance frameworks,
              risk management and board oversight.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="font-semibold text-xl mb-3">
              Digital Transformation
            </h3>
            <p>
              Enterprise modernization, cloud strategy,
              leadership and business value realization.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}