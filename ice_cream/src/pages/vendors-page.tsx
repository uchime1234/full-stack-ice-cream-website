// src/App.tsx
import { ServiceCard } from '../components/service_card'
import { useState } from 'react';
import "../App.css";
import { motion } from "framer-motion";
import { 
  FiCircle, 
  FiSquare, 
  FiGrid, 
  FiPenTool, 
  FiCamera, 
  FiCode,
  FiMenu,
  FiInstagram,
  FiTwitter,
  FiLinkedin
} from 'react-icons/fi'

function Vendorpage() {

  const vendor = JSON.parse(localStorage.getItem("vendor") || "{}")
   const [menuVisible, setMenuVisible] = useState(false);
  
    const toggleMenu = () => setMenuVisible(!menuVisible);
    const closeMenu = () => setMenuVisible(false);
  
 
  return (
    <div className="min-h-screen bg-pink-300 text-white">
      {/* Navigation */}
      <nav className="container mx-auto p-4 flex justify-between items-center">
        <div className="w-8 h-8">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor" />
            <path
              d="M2 17L12 22L22 17"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2 12L12 17L22 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className=" text-white  space-x-6 text-sm">
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
        <div className="">
          <button onClick={toggleMenu} aria-label="Menu">
            <FiMenu size={24} />
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-8 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white leading-none">
              {vendor.vendorname}
              <br />
              {vendor.location}
            </h1>
            <p className="text-sm md:text-base text-white max-w-md">
              You are using our new and imporved Ui designs, it inspires Innovative visual designer specializing in fresh-from-design. this is your 
              profile page, which shows your personal information, such as your name, email, products and some of your data 
            </p>
            <button className="bg-pink-400 hover:bg-pink-500 text-white rounded-md px-6 py-2">
              Add a new icecream
            </button>
          </div>
          <div className="relative aspect-square max-w-md mx-auto md:ml-auto">
            <div className="absolute inset-0 bg-white rounded-3xl transform rotate-2"></div>
            <img
              src={vendor.image}
              alt="Chloe Dale Portrait"
              className="relative rounded-3xl object-cover z-10 w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-4 py-8 md:py-16">
        <h2 className="text-2xl md:text-3xl font-medium mb-8">SERVICES:</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard
            icon={<FiCircle className="h-6 w-6 text-pink-400 " />}
            title="BRANDING:"
            description="Creating distinctive identities for businesses across the globe."
          />

          <ServiceCard
            icon={<FiSquare className="h-6 w-6 " />}
            title="GRAPHIC DESIGN:"
            description="Transforming your brand into captivating visual experiences."
          />

          <ServiceCard
            icon={<FiGrid className="h-6 w-6" />}
            title="WEB DESIGN:"
            description="From design to code, we build responsive websites that convert."
          />

          <ServiceCard
            icon={<FiPenTool className="h-6 w-6" />}
            title="ILLUSTRATION:"
            description="Custom illustrations to help your brand stand out from the crowd."
          />

          <ServiceCard
            icon={<FiCamera className="h-6 w-6" />}
            title="PHOTOGRAPHY:"
            description="Professional photography services for products and brands."
          />

          <ServiceCard
            icon={<FiCode className="h-6 w-6" />}
            title="SOFTWARE:"
            description="Development of custom software solutions and integrations."
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 border-t border-red-200 mt-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-white">© 2024 Chloe Dale. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" aria-label="Instagram" className="text-white hover:text-pink-400">
              <FiInstagram size={20} />
            </a>
            <a href="#" aria-label="Twitter" className="text-white hover:text-pink-400">
              <FiTwitter size={20} />
            </a>
            <a href="#" aria-label="LinkedIn" className="text-white hover:text-pink-400">
              <FiLinkedin size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Vendorpage