import type React from "react"
import { IceCream } from "lucide-react"
import "../pages/header.css";

const Header: React.FC = () => {
  return (
    <header className="overflow-x-hidden overflow-y-hidden  h-14 ">
      
      <div className="container mx-auto  px-4 py-4 flex justify-between items-center">
        <div className="flex items-center  space-x-2">
          <span className="text-2xl  text-white">IceCreamHub</span>
        </div>
        <nav className=" relative  lg:right-[500px]">
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="text-white hover:text-pink-500 text-1xl transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-pink-500 transition-colors">
                Vendors
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-pink-500 transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-pink-500 transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="container hidden lg:block relative   px-4 py-8">
      <div className="max-w-2xl  mx-auto">
        <div className="relative top-[10px]">
          <input
            type="text"
            placeholder="Search"
            className="w-[300px] move   py- rounded-xl px- pr-12 text-center  text-bold  border-2 border-white focus:border-white focus:outline-none transition-colors"
          />
          <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-500 hover:text-pink-500 transition-colors">
            
          </button>
        </div>
      </div>
    </div>

    

    

    </header>
  )
}

export default Header

