import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-6 bg-white shadow-sm">
        <div className="text-2xl font-bold text-blue-600 tracking-tight">iborrow.nl</div>
        <div className="space-x-6 font-medium text-gray-600">
          <Link href="/items" className="hover:text-blue-600 transition">Aanbod</Link>
          <Link href="/over-ons" className="hover:text-blue-600 transition">Hoe het werkt</Link>
          <Link href="/login" className="px-5 py-2 text-white bg-blue-600 rounded-full hover:bg-blue-700 transition">Login</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center px-4 py-24 text-center bg-gradient-to-b from-blue-50 to-white">
        <h1 className="max-w-4xl text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl md:text-7xl">
          Deel spullen met je <span className="text-blue-600">buren</span>.
        </h1>
        <p className="max-w-2xl mt-6 text-xl text-gray-600">
          Waarom kopen als je het kunt lenen? Bespaar geld, ontmoet je buren en verminder afval. Van hogedrukreinigers tot partytenten.
        </p>
        <div className="flex flex-col gap-4 mt-10 sm:flex-row">
          <Link href="/items" className="px-8 py-4 text-lg font-bold text-white bg-blue-600 rounded-xl shadow-lg shadow-blue-200 hover:bg-blue-700 transition transform hover:-translate-y-1">
            Bekijk wat er te leen is
          </Link>
          <Link href="/items/new" className="px-8 py-4 text-lg font-bold text-blue-600 bg-white border-2 border-blue-600 rounded-xl hover:bg-blue-50 transition transform hover:-translate-y-1">
            Iets verhuren
          </Link>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="grid grid-cols-1 gap-12 px-8 py-20 bg-white md:grid-cols-3">
        <div className="p-8 bg-gray-50 rounded-2xl">
          <div className="w-12 h-12 mb-4 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 text-2xl">🤝</div>
          <h3 className="text-xl font-bold mb-2">Vertrouwd</h3>
          <p className="text-gray-600">Geverifieerde gebruikers en een transparant reputatiesysteem via BetterAuth.</p>
        </div>
        <div className="p-8 bg-gray-50 rounded-2xl">
          <div className="w-12 h-12 mb-4 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 text-2xl">📍</div>
          <h3 className="text-xl font-bold mb-2">Lokaal</h3>
          <p className="text-gray-600">Vind spullen bij jou om de hoek. Geen verzendkosten, gewoon even ophalen.</p>
        </div>
        <div className="p-8 bg-gray-50 rounded-2xl">
          <div className="w-12 h-12 mb-4 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 text-2xl">♻️</div>
          <h3 className="text-xl font-bold mb-2">Duurzaam</h3>
          <p className="text-gray-600">Samen consumeren we minder. Beter voor de planeet en jouw portemonnee.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center border-t border-gray-100 text-gray-400">
        © 2026 iborrow.nl - Gebouwd met 🏗️ door Mohandis
      </footer>
    </main>
  )
}
