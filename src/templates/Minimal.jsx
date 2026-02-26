import { useState } from "react";

export default function PerfectLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen flex bg-neutral-50">

      {/* LEFT SIDE - Brand / Visual */}
      <div className="hidden lg:flex w-1/2 flex-col justify-between p-16 bg-neutral-900 text-white">
        <div>
          <div className="w-10 h-10 rounded-xl bg-white mb-10" />
          <h1 className="text-4xl font-semibold leading-tight tracking-tight">
            Welcome to your <br /> new workspace.
          </h1>
          <p className="mt-6 text-neutral-400 max-w-md">
            Manage projects, collaborate with your team,
            and scale your workflow with confidence.
          </p>
        </div>

        <p className="text-sm text-neutral-500">
          © 2026 YourCompany. All rights reserved.
        </p>
      </div>

      {/* RIGHT SIDE - Login */}
      <div className="flex flex-1 items-center justify-center px-6">
        <form className="w-full max-w-md">

          <h2 className="text-3xl font-semibold text-neutral-900 mb-2 tracking-tight">
            Sign in
          </h2>
          <p className="text-neutral-500 mb-10">
            Enter your details to continue
          </p>

          {/* Email */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-neutral-700 mb-2">
              Email
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-neutral-300 bg-white focus:outline-none focus:ring-2 focus:ring-neutral-900/20 focus:border-neutral-900 transition"
            />
          </div>

          {/* Password */}
          <div className="mb-8">
            <label className="block text-sm font-medium text-neutral-700 mb-2">
              Password
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-neutral-300 bg-white focus:outline-none focus:ring-2 focus:ring-neutral-900/20 focus:border-neutral-900 transition"
            />
          </div>

          {/* Primary Button */}
          <button
            type="submit"
            className="w-full bg-neutral-900 text-white py-3 rounded-xl font-medium hover:bg-neutral-800 active:scale-[0.98] transition-all duration-200"
          >
            Continue
          </button>

          {/* Divider */}
          <div className="flex items-center my-8">
            <div className="flex-1 h-px bg-neutral-200" />
            <span className="px-4 text-sm text-neutral-400">or</span>
            <div className="flex-1 h-px bg-neutral-200" />
          </div>

          {/* Social Login */}
          <button className="w-full border border-neutral-300 py-3 rounded-xl mb-4 hover:bg-neutral-100 transition">
            Continue with Google
          </button>

          <button className="w-full border border-neutral-300 py-3 rounded-xl hover:bg-neutral-100 transition">
            Continue with GitHub
          </button>

          <p className="text-sm text-neutral-500 mt-10 text-center">
            Don’t have an account?{" "}
            <span className="text-neutral-900 font-medium hover:underline cursor-pointer">
              Create one
            </span>
          </p>

        </form>
      </div>
    </div>
  );
}