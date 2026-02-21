export default function Split() {
  return (
    <div className="min-h-screen flex">
      <div className="hidden md:flex w-1/2 bg-blue-600 text-white items-center justify-center text-3xl font-bold">
        Your Brand
      </div>

      <div className="flex w-full md:w-1/2 items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-2xl shadow-xl w-96">
          <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>

          <input
            type="email"
            placeholder="Email"
            className="w-full mb-4 px-4 py-2 border rounded-lg"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full mb-6 px-4 py-2 border rounded-lg"
          />

          <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
            Continue
          </button>
        </div>
      </div>
    </div>
  )
}