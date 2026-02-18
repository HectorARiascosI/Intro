export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
      <div className="w-80 bg-white rounded-xl shadow-lg overflow-hidden">
        <img
          src="https://static.vecteezy.com/system/resources/previews/001/882/528/non_2x/beautiful-landscape-pine-forest-with-mesmerizing-mountain-views-free-vector.jpg"
          alt="Red Heaven"
          className="w-full h-48 object-cover"
        />
        <div className="p-5">
          <h2 className="text-xl font-bold mb-2">Red Heaven</h2>
          <p className="text-gray-600 text-sm mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque.
          </p>
          <div className="flex gap-2">
            <span className="bg-red-500 text-white text-xs px-3 py-1 rounded-full">#tailwind</span>
            <span className="bg-red-500 text-white text-xs px-3 py-1 rounded-full">#frontend</span>
          </div>
        </div>
      </div>
    </main>
  )
}
