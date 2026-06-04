export default function ArticlesPage() {
  return (
    <main className="min-h-screen bg-[#020617] text-white px-8 py-24">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold mb-12">
          Articles
        </h1>

        <div className="space-y-8">

          <div className="border border-slate-700 rounded-xl p-8">
            <h2 className="text-2xl font-semibold mb-3">
              The CIO's Guide to AI Governance
            </h2>

            <p className="text-slate-300">
              Executive guidance on AI governance frameworks,
              risk management, compliance, and board oversight.
            </p>
          </div>

          <div className="border border-slate-700 rounded-xl p-8">
            <h2 className="text-2xl font-semibold mb-3">
              ISO 27001:2022 Explained for Executives
            </h2>

            <p className="text-slate-300">
              Understanding governance responsibilities,
              risk management, and leadership obligations.
            </p>
          </div>

          <div className="border border-slate-700 rounded-xl p-8">
            <h2 className="text-2xl font-semibold mb-3">
              NIS2 and Board Accountability
            </h2>

            <p className="text-slate-300">
              What directors and executive teams need
              to know about cybersecurity obligations.
            </p>
          </div>

        </div>
      </div>
    </main>
  );
}