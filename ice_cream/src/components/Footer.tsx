import type React from "react"
import { Facebook, Twitter, Instagram } from "lucide-react"

const Footer: React.FC = () => {
  return (
    <footer className="bg-pink-300 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-2xl font-bold">IceCreamHub</h3>
            <p className="mt-2">Connecting ice cream lovers with the best vendors.</p>
          </div>
          <div className="w-full md:w-1/3 text-center mb-4 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
            <ul>
              <li>
                <a href="#" className="hover:text-pink-300 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-300 transition-colors">
                  Vendors
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-300 transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-300 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 text-center md:text-right">
            <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
            <div className="flex justify-center md:justify-end space-x-4">
              <a href="#" className="hover:text-pink-300 transition-colors">
                <Facebook />
              </a>
              <a href="#" className="hover:text-pink-300 transition-colors">
                <Twitter />
              </a>
              <a href="#" className="hover:text-pink-300 transition-colors">
                <Instagram />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2023 IceCreamHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

