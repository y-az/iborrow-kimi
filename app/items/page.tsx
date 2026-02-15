export default async function ItemsPage() {
  // Dit is een server component, in een echte app zouden we hier data fetchen van onze eigen API
  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-6">Beschikbare spullen</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Hier komen de items via API */}
        <p className="text-gray-500 italic">Laden van aanbod...</p>
      </div>
    </div>
  )
}
