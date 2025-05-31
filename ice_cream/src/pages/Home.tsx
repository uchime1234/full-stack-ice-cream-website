import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {Menu} from "lucide-react"
import "../pages/header.css";
import Header from "../components/Header";
import Hero from "../components/Hero";
import SearchBar2 from "../components/searchbar2";
import FlavorCarousel from "../components/FlavorCarousel";
import WhyChooseUs from "../components/WhyChooseUs";
import Footer from "../components/Footer";

const IceCreamLanding: React.FC = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => setMenuVisible(!menuVisible);
  const closeMenu = () => setMenuVisible(false);




  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.menu') && !target.closest('.menu-button')) {
        closeMenu();
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9 } },
  };

  return (
    <div className='overflow-x-hidden'>
      <motion.div
        className="min-h-screen bg-pink-200"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <motion.nav
          className="flex justify-between items-center  p-4 text-white"
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
        >
          <div className="flex space-x-8 text-xs mx-auto invisible lg:visible  zindexing ">
            <a href="#" className="hover:text-pink-300">CATALOG</a>
            <a href="#" className="hover:text-pink-300">ABOUT US</a>
            <a href="#" className="hover:text-pink-300">CONTACT</a>
            <a href="#" className="hover:text-pink-300">ORDER ICECREAM</a>
          </div>
          <input
            type="text"
            placeholder="SEARCH"
            className="p-2 rounded-full text-black h-[26px] w-64 text-center invisible sm:visible   move  border-white focus:border-white focus:outline-none transition-colors"
          />
        </motion.nav>

  



        <motion.div
          className="flex w-full max-w-6xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
        >
          <div className="w-1/2 roundedmag h-[600px] bg-pink-300 relative right-[50px] bottom-[54px] overflow-hidden" onClick={closeMenu}>
            <img
              src="./lemon-ice (2).jpg"
              alt="Ice Cream Cone"
              className="absolute inset-0 w-full h-full  object-cover mix-blend-overlay"
            />
          </div>

          <div className="w-1/2 flex flex-col items-center justify-center p-10 text-center relative bottom-[40px]" >
            <img
              src="/cones.jpg"
              alt="Blurry Ice Cream"
              className="absolute inset-0 w-full h-full object-cover little-raduis  opacity-20"
            />

            <h1 className="text-5xl text-white right-[120px] sm:left-[10px]  relative  top-[24px] z-10">CRAVING <br /> ICE CREAM?</h1>
            <p  className="text-md w-[300px] text-pink-300 sm:left-[10px] right-[120px] bg-white relative top-[44px] little-raduis z-10 " >Get it from your favourite vendors</p>

            <div className="flex space-x-4 mt-10 right-[150px] sm:left-[10px] relative top-[30px] z-10">
              <img src="./lemon-ice (1).jpg" alt="Ice Cream 1" className="w-20 h-20 rounded-full" />
              <img src="./lemon-ice (2).jpg" alt="Ice Cream 2" className="w-20 h-20 rounded-full" />
              <img src="./lemon-ice (3).jpg" alt="Ice Cream 3" className="w-20 h-20 rounded-full" />
            </div>
          </div>
        </motion.div>

        <div className="absolute top-2 left-4 p-2 rounded-lg">
          <button onClick={toggleMenu} className="text-white  menu-button">
            <span className="text-base text-white "><Menu size={24} /></span>
          </button>
          <motion.div
            className={`menu absolute text-black text-xs w-[160px] bg-white border border-white rounded-xl p-2 ${menuVisible ? 'block' : 'hidden'}`}
            initial={{ opacity: 0, y: -10 }}
            animate={menuVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <a href="#" className="block p-1 hover:text-pink-300">USER DASHBOARD</a>
            <a href="#" className="block p-1 hover:text-pink-300">VENDORS PAGES</a>
            <a href="#" className="block p-1 hover:text-pink-300">CART</a>
            <a href="#" className="block p-1 hover:text-pink-300">CHECK-OUT</a>
            <a href="#" className="block p-1 hover:text-pink-300">ORDER CONFIRMATION</a>
            <a href="#" className="block p-1 hover:text-pink-300">ORDER TRACKING</a>
            <a href="#" className="block p-1 hover:text-pink-300">ADMIN DASHBOARD</a>
            <a href="#" className="hover:text-pink-300 block p-1 hover:text-pink-300">CATALOG</a>
            <a href="#" className="hover:text-pink-300 block p-1 hover:text-pink-300">ABOUT US</a>
            <a href="#" className="hover:text-pink-300 block p-1 hover:text-pink-300">CONTACT</a>
            <a href="#" className="hover:text-pink-300 block p-1 hover:text-pink-300">ORDER ICECREAM</a>
          </motion.div>
        </div>
      </motion.div>

      <motion.div initial="hidden" animate="visible" variants={sectionVariants}>
        <SearchBar2 />
      </motion.div>
      <motion.div initial="hidden" animate="visible" variants={sectionVariants}>
        <FlavorCarousel />
      </motion.div>
      <motion.div initial="hidden" animate="visible" variants={sectionVariants}>
        <WhyChooseUs />
      </motion.div>
      <motion.div initial="hidden" animate="visible" variants={sectionVariants}>
        <Footer />
      </motion.div>
    </div>
  );
};

export default IceCreamLanding;
