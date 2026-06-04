export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-7xl px-8 py-8">
        <nav className="flex items-center justify-between border-b border-white/10 pb-6">
          <div className="text-xl font-bold">InformationTechnology.org</div>
          <div className="hidden gap-6 text-sm text-slate-300 md:flex">
            <a href="#">Home</a>
            <a href="#articles">Articles</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <section className="py-28">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            Technology Governance • Cybersecurity • AI
          </p>

          <h1 className="max-w-5xl text-5xl font-bold leading-tight md:text-7xl">
            Executive insight for technology leaders, boards, and digital
            organizations.
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-8 text-slate-300">
            InformationTechnology.org is an executive-grade platform focused on
            IT governance, cybersecurity resilience, AI governance, digital
            transformation, enterprise architecture, and technology leadership.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="/articles"
              className="rounded-xl bg-cyan-300 px-6 py-4 font-semibold text-slate-950"
            >
              Explore Articles
            </a>
            <a
              href="#about"
              className="rounded-xl border border-white/20 px-6 py-4 font-semibold text-white"
            >
              About the Platform
            </a>
          </div>
        </section>

        <section id="articles" className="grid gap-6 py-12 md:grid-cols-3">
          {[
            ["Cybersecurity Governance", "ISO 27001, NIS2, resilience, risk, board reporting, and security operating models."],
            ["AI Governance", "Responsible AI, EU AI Act readiness, policy, oversight, and practical enterprise adoption."],
            ["Digital Transformation", "Modernization, cloud strategy, operating models, enterprise architecture, and business value."]
          ].map(([title, text]) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-7">
              <h2 className="mb-4 text-2xl font-bold">{title}</h2>
              <p className="leading-7 text-slate-300">{text}</p>
            </div>
          ))}
        </section>

        <section id="about" className="py-20">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12">
            <h2 className="mb-4 text-3xl font-bold">Built for decision-makers.</h2>
            <p className="max-w-4xl text-lg leading-8 text-slate-300">
              The goal is to translate complex technology, cybersecurity, and AI
              governance topics into clear executive guidance for CIOs, CISOs,
              boards, and senior leadership teams.
            </p>
          </div>
        </section>

        <footer id="contact" className="border-t border-white/10 py-8 text-sm text-slate-400">
          © 2026 InformationTechnology.org. Executive technology governance insights.
        </footer>
      </section>
    </main>
  );
}