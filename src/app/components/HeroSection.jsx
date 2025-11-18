
"use client";
import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative bg-[url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d')] bg-cover bg-center text-white mt-8 px-2 py-20 md:py-28">
      {/* Dark Overlay for readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative max-w-4xl mx-auto text-center space-y-6">
        {/* Heading */}
        <motion.h1
          className="text-5xl md:text-5xl font-bold leading-tight"
          animate={{ y: [0, -10, 0] }} // float animation
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          Develop High-Performing{" "}
          <span className="bg-gradient-to-r from-yellow-300 via-orange-400 to-red-500 bg-clip-text text-transparent animate-pulse">
            Products That Scale
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          className="text-gray-200  font-bold text-3xl md:text-xl max-w-2xl mx-auto"
          animate={{ opacity: [1, 0.7, 1] }} // fade in/out
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          From idea to launch, solutions that accelerate growth, increase revenue,
          and simplify your business—guiding you every step of the way.
        </motion.p>

        {/* Call-to-Action Button */}
        <motion.div
          className="pt-4"
          animate={{ scale: [1, 1.1, 1] }} // pulsing effect
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <a
            href="/contact"
            className="inline-block bg-orange-400 hover:bg-green-600 focus:ring-4 
              focus:ring-green-300 shadow-lg text-white font-medium px-6 py-3 
              rounded-lg text-lg transition transform hover:scale-105 hover:shadow-xl"
          >
            Let&apos;s Talk
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
