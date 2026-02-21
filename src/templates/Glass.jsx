export default function Glass() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-400 to-blue-500">
      <div className="backdrop-blur-lg bg-white/20 p-8 rounded-2xl shadow-2xl w-96 text-white">
        <h2 className="text-2xl font-bold mb-6 text-center">Welcome Back</h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 px-4 py-2 bg-white/30 rounded-lg placeholder-white focus:outline-none"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-6 px-4 py-2 bg-white/30 rounded-lg placeholder-white focus:outline-none"
        />

        <button className="w-full bg-white text-purple-600 py-2 rounded-lg hover:bg-gray-200 transition">
          Login
        </button>
      </div>
    </div>
  )
}