import type React from "react"
//import { Search } from "lucide-react"

const SearchBar: React.FC = () => {
  return (
    <div className="container absolute right-[400px]  px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <div className="relative">
          <input
            type="text"
            placeholder="Search for ice cream vendors near you..."
            className="w-[300px] py-3 px-4 pr-12  border-2 border-blue-300 focus:border-pink-500 focus:outline-none transition-colors"
          />
          <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-500 hover:text-pink-500 transition-colors">
            
          </button>
        </div>
      </div>
    </div>
  )
}

export default SearchBar

