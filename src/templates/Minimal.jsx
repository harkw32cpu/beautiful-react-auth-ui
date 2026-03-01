import { useState } from "react";
import { motion } from "framer-motion";

export default function PerfectLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">

      {/* Animated Aurora Background */}
      <div className="absolute inset-0">
        <div className="absolute w-[800px] h-[800px] bg-purple-600/30 rounded-full blur-[160px] -top-40 -left-40 animate-pulse" />
        <div className="absolute w-[700px] h-[700px] bg-indigo-500/30 rounded-full blur-[150px] bottom-0 right-0 animate-pulse" />
      </div>

      {/* Glass Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-md p-[1px] rounded-3xl bg-gradient-to-br from-purple-500 via-indigo-500 to-pink-500"
      >
        <div className="bg-black/70 backdrop-blur-2xl rounded-3xl p-10 text-white">

          <h2 className="text-4xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
            Enter the Portal
          </h2>

          <p className="text-neutral-400 mb-10">
            Access your digital universe
          </p>

          {/* Email */}
          <div className="mb-6">
            <input
              type="email"
              required
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-purple-400 focus:ring-2 focus:ring-purple-500/30 outline-none transition-all duration-300 placeholder:text-neutral-500"
            />
          </div>

          {/* Password */}
          <div className="mb-8">
            <input
              type="password"
              required
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/30 outline-none transition-all duration-300 placeholder:text-neutral-500"
            />
          </div>

          {/* Primary Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="relative w-full py-3 rounded-xl font-semibold overflow-hidden bg-gradient-to-r from-purple-600 to-indigo-600"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[shimmer_2s_linear_infinite]" />
            <span className="relative z-10">Launch Session</span>
          </motion.button>

          {/* Divider */}
          <div className="flex items-center my-8">
            <div className="flex-1 h-px bg-white/10" />
            <span className="px-4 text-sm text-neutral-500">or connect</span>
            <div className="flex-1 h-px bg-white/10" />
          </div>

          {/* Social Buttons */}
          <button className="w-full bg-white/5 border border-white/10 py-3 rounded-xl mb-4 hover:bg-white/10 transition">
            Continue with Google
          </button>

          <button className="w-full bg-white/5 border border-white/10 py-3 rounded-xl hover:bg-white/10 transition">
            Continue with GitHub
          </button>

          <p className="text-sm text-neutral-400 mt-10 text-center">
            New here?{" "}
            <span className="text-purple-400 font-medium hover:underline cursor-pointer">
              Create account
            </span>
          </p>

        </div>
      </motion.div>

      {/* Tailwind Shimmer Keyframes */}
      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
}