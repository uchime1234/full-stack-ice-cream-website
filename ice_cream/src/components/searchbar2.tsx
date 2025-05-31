import type React from "react"
import { Search } from "lucide-react"
import "../pages/header.css";

const SearchBar2: React.FC = () => {
  return (
    <div className="container lg:hidden mx-auto bg-pink-200  px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <div className="relative">
          <input
            type="text"
            placeholder="Search for ice cream vendors near you..."
            className="w-full py-3 px-4 pr-12 rounded-full border-2 "
          />
          <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black moveout text-center  text-bold   border-white focus:border-white focus:outline-none transition-colors">
            <Search size={24} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default SearchBar2

