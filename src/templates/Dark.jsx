import { useState } from "react";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
} from "framer-motion";

export default function Dark() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const shouldReduceMotion = useReducedMotion();

  /* ---------------- Animation Config ---------------- */

  const spring = {
    type: "spring",
    stiffness: 120,
    damping: 18,
    mass: 0.8,
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 24,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: spring,
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      scale: shouldReduceMotion ? 1 : 0.96,
      y: shouldReduceMotion ? 0 : 40,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        ...spring,
        duration: 0.6,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      y: 20,
      transition: { duration: 0.3 },
    },
  };

  /* ---------------- UI ---------------- */

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 via-gray-900 to-black relative overflow-hidden">

      {/* GPU-accelerated animated glow */}
      <motion.div
        className="absolute w-[28rem] h-[28rem] bg-indigo-600 rounded-full blur-3xl opacity-20 -top-32 -left-32"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        style={{ willChange: "transform" }}
      />

      <AnimatePresence mode="wait">
        <motion.form
          key="login"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          layout
          className="relative backdrop-blur-2xl bg-white/5 border border-white/10 text-white p-10 rounded-3xl shadow-2xl w-96"
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h2
              variants={itemVariants}
              layout
              className="text-3xl font-semibold mb-8 text-center tracking-wide"
            >
              Welcome Back
            </motion.h2>

            <motion.div variants={itemVariants} layout className="mb-6">
              <input
                type="email"
                required
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-gray-800/60 rounded-xl outline-none border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 transition"
              />
            </motion.div>

            <motion.div variants={itemVariants} layout className="mb-8">
              <input
                type="password"
                required
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-gray-800/60 rounded-xl outline-none border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 transition"
              />
            </motion.div>

            <motion.button
              variants={itemVariants}
              whileHover={{
                scale: 1.04,
                boxShadow: "0px 0px 30px rgba(99,102,241,0.5)",
              }}
              whileTap={{ scale: 0.96 }}
              transition={spring}
              className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 py-3 rounded-xl font-medium tracking-wide"
            >
              Sign In
            </motion.button>
          </motion.div>
        </motion.form>
      </AnimatePresence>
    </div>
  );
}