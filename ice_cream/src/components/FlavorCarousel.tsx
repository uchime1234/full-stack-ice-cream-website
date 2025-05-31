"use client"

import type React from "react"
import { motion } from "framer-motion"
import "../pages/header.css";

const flavors = [
  { name: "strawberry", description: "Classic and creamy", image: "./pink.carmel.png"},
  { name: "lemon-carmel", description: "Rich and indulgent", image: "./green-carmel.png" },
  { name: "Strawberry", description: "Fresh and fruity", image: "./chocolate-carmels.png" },
  { name: "Mint Chip", description: "Cool and refreshing", image: "./cones.jpg" },
  { name: "Mint Chip", description: "Cool and refreshing", image: "./mango-carmel.png" },
  { name: "Mint Chip", description: "Cool and refreshing", image: "./vaniella.png" },
]

const FlavorCarousel: React.FC = () => {
  return (
    <section className="bg-pink-300 py-12">
      <div className="container bg-pink-300 mx-auto px-4">
        <h2 className="text-3xl font-bold text-center bg-white w-occupy round text-pink-200 mb-8">Popular Flavors</h2>
        {/* Outer div with horizontal scroll and scrollbar hidden */}
        <div className="flex space-x-6 overflow-x-auto pb- scrollbar-hide">
          {/* Wrapping motion div for automatic sliding effect */}
          <motion.div
            className="flex space-x-6"
            animate={{ x: [0, -1000, 0] }} // Moves from right to left and loops back
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }} // Smooth and infinite loop
          >
            {flavors.map((flavor, index) => (
              <motion.div
                key={flavor.name}
                initial={{ opacity: 0, y: 20 }} // Initial animation state
                animate={{ opacity: 1, y: 0 }} // Final animation state
                transition={{ duration: 0.5, delay: index * 0.1 }} // Staggered appearance
                className="flex-shrink-0 round bg-white w-64"
              >
                {/* Image of each flavor */}
                <img
                  src={flavor.image || "/placeholder.svg"}
                  alt={flavor.name}
                  className="w-full h-48 object-cover rounded-lg shadow-md mb-4"
                />
                {/* Flavor name */}
                <h3 className="text-xl text-bold text-black text-center">{flavor.name}</h3>
                {/* Flavor description */}
                <p className="text-pink-200 text-bold text-center">{flavor.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default FlavorCarousel;
