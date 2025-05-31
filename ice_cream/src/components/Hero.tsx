"use client"

import type React from "react"
import { motion } from "framer-motion"
import "../pages/header.css";

const Hero: React.FC = () => {
  return (
    <section className="relative h-[500px] flex items-center justify-center overflow-hidden ">
      <div className=" h-[800px] w-[700px] lg:block hidden  jungle    ">
        ddddd
      </div>
      <div className="absolute inset-0 z-0">
        
      </div>
      <div className="relative z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-white shadow-text mb-4"
        >
          Craving Ice Cream?
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-white shadow-text mb-8"
        >
          Get It from Your Favorite Vendors!
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-pink-500 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-pink-600 transition-colors"
        >
          Browse Vendors
        </motion.button>
      </div>
    </section>
  )
}

export default Hero

