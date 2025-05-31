import React, { useState, useEffect, useContext } from "react";
import { motion } from "framer-motion";
import { FaShoppingCart, FaBars } from "react-icons/fa";
import { useIceCream } from "../components/ice-cart";

import { IceCream } from "lucide-react";

interface FeatureType {
  
  name: string;
  description: string;
  location: string;
  price: number;
  vendor: string;
  image: string;
}



interface iceCream {
  id: number;
  name: string;
  vendor: string;
  location: string;
  description: string;
  price: number;
  image: string;
  
}

//const [iceCreams, setIceCreams] = useState<cartdata[]>([]);



//const [query, setQuery] = useState('')
  //const handleSearch = (e: React.FormEvent) => {
    //e.preventDefault()
    // Implement your search logic here
   // console.log('Searching for:', filteredcards)
  //}
 

  
//const filteredcards = iceCreams.filter((card) =>( // used to filter for the search bar 
  //card.name.toLowerCase().includes(query.toLowerCase())
//))




//useEffect(() => {
  //const storedIceCreams = localStorage.getItem("iceCreams");
  //if (storedIceCreams) {
    //setIceCreams(JSON.parse(storedIceCreams));
  //}
//}, []);


const features:FeatureType[]  = [
  {
    
    name: "Truck",
    vendor: "emma ice cream limited",
    location: "Fast Delivery",
    description: "Delicious vanilla",
    price: 5.99,
    image: "/icecream-placeholder.jpg"
  },
  {
    
    name: "Truck",
    vendor: "emma ice cream limited",
    location: "Fast Delivery",
    description: "Delicious vanilla",
    price: 5.99,
    image: "/icecream-placeholder.jpg"
  },
  {
    
    name: "Truck",
    vendor: "emma ice cream limited",
    location: "Fast Delivery",
    description: "Delicious vanilla",
    price: 5.99,
    image: "/icecream-placeholder.jpg"
  },
  {
    
    name: "Truck",
    vendor: "emma ice cream limited",
    location: "Fast Delivery",
    description: "Delicious vanilla",
    price: 5.99,
    image: "/icecream-placeholder.jpg"
  },
  {
    
    name: "Truck",
    vendor: "emma ice cream limited",
    location: "Fast Delivery",
    description: "Delicious vanilla",
    price: 5.99,
    image: "/icecream-placeholder.jpg"
  },
  {
    
    name: "Truck",
    vendor: "emma ice cream limited",
    location: "Fast Delivery",
    description: "Delicious vanilla",
    price: 5.99,
    image: "/icecream-placeholder.jpg"
  },
  {
    
    name: "Truck",
    vendor: "emma ice cream limited",
    location: "Fast Delivery",
    description: "Delicious vanilla",
    price: 5.99,
    image: "/icecream-placeholder.jpg"
  },

  {
    
    name: "Truck",
    vendor: "emma ice cream limited",
    location: "Fast Delivery",
    description: "Delicious vanilla",
    price: 5.99,
    image: "/icecream-placeholder.jpg"
  },
  {
    
    name: "Truck",
    vendor: "emma ice cream limited",
    location: "Fast Delivery",
    description: "Delicious vanilla",
    price: 5.99,
    image: "/icecream-placeholder.jpg"
  },
  {
    
    name: "Truck",
    vendor: "emma ice cream limited",
    location: "Fast Delivery",
    description: "Delicious vanilla",
    price: 5.99,
    image: "/icecream-placeholder.jpg"
  },
  {
    
    name: "Truck",
    vendor: "emma ice cream limited",
    location: "Fast Delivery",
    description: "Delicious vanilla",
    price: 5.99,
    image: "/icecream-placeholder.jpg"
  },
  {
    
    name: "Truck",
    vendor: "emma ice cream limited",
    location: "Fast Delivery",
    description: "Chocolate delight",
    price: 6.49,
    image: "/icecream-placeholder.jpg"
  }

]


const OrderIceCream: React.FC = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [filters, setFilters] = useState({ price: "", location: "", flavour: "", vendor: "" });
  const [cartItems, setCartItems] = useState<any[]>([]);

  const [name, setName] = useState('');
const [location, setLocation] = useState('');
const [vendor, setVendor] = useState('');


const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  e.preventDefault();
};

  const { iceCreams, filtericecream, addToCart  } = useIceCream();

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };


  const filteredResults  = filtericecream(
    name,
    location,
    vendor
  );


  function addIceCream() { 
    setCartCount(cartCount + 1)
  }
  




 // function addIceCream() {
   // setCartCount(cartCount + 1);
    //if (!features || features.length === 0) return; // Don't add if no data

    // Add unique IDs
    //const newIceCreams = features.map((item, index) => ({
      //id: iceCreams.length + index + 1, // Generate unique ID
      //...item,
    
    //}));


  return (
    <div className="min-h-screen bg-pink-300 text-white overflow-hidden" >

      {/* Header */}
      <div className="mx-auto flex justify-between items-center p-4 max-w-6xl">
        <button onClick={toggleMenu} className="text-white">
          <FaBars size={24} />
        </button>
        <a href="#" className="text-white text-lg font-bold">
          Vendor Sign Up
        </a>
        <div className="text-white">Location: Enugu, Nigeria</div>
      </div>

      {/* Dropdown Menu */}
      <motion.div
        className="absolute top-14 left-4 menu absolute text-black text-xs w-[160px] bg-white border border-white rounded-xl p-2"
        initial={{ opacity: 0, visibility: "hidden" }}
        animate={{ opacity: menuVisible ? 1 : 0, visibility: menuVisible ? "visible" : "hidden" }}
        transition={{ duration: 0.5 }}
      >
        <a href="#" className="block p-1 hover:text-pink-300">USER DASHBOARD</a>
        <a href="#" className="block p-1 hover:text-pink-300">VENDORS PAGES</a>
        <a href="#" className="block p-1 hover:text-pink-300">CART</a>
        <a href="#" className="block p-1 hover:text-pink-300">CHECK-OUT</a>
        <a href="#" className="block p-1 hover:text-pink-300">ORDER CONFIRMATION</a>
        <a href="#" className="block p-1 hover:text-pink-300">ORDER TRACKING</a>
        <a href="#" className="block p-1 hover:text-pink-300">ADMIN DASHBOARD</a>
        <a href="#" className="block p-1 hover:text-pink-300">ORDER ICE CREAM</a>
      </motion.div>

      {/* Filters */}
      <div className="max-w-6xl mx-auto p-4">
        <h2 className="text-xl mb-4">Sort By</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <input type="text" placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)} className="p-2 rounded-lg text-black outline-none focus:ring-0" />
          <input type="text" placeholder="vendor"  value={vendor} onChange={(e) => setVendor(e.target.value)} className="p-2 rounded-lg text-black outline-none focus:ring-0" />
          <input type="text" placeholder="name"  value={name}  onChange={(e) => setName(e.target.value)} className="p-2 rounded-lg text-black outline-none focus:ring-0" />
        </div>
      </div>

      {/* Ice Cream Listings */}
      <div className="overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
   { /*  {features.map((feature: FeatureType, index:number) => (
            <motion.div
              key={index}
              className="bg-white p-4 rounded-lg text-black shadow-lg"
              initial={{ opacity: 0, y: 20 }} // Initial animation state
              animate={{ opacity: 1, y: 0 }} // Final animation state
              transition={{ duration: 0.5, delay: index * 0.1 }} // Staggered appearance
            >
              <img src="/icecream-placeholder.jpg" alt="Ice Cream" className="w-full h-40 object-cover rounded-lg" />
              <h3 className="text-lg font-bold mt-2">{feature.name}</h3>
              <p className="text-sm">{feature.description}</p>
              <p className="text-sm">{feature.location}</p>
              <p className="text-sm font-bold">${feature.price}</p>
              <button  onClick={addIceCream} className="mt-2 bg-pink-300 text-white p-2 rounded-lg w-full">
                Order Now
              </button>
            </motion.div>
          ))}
       */ }

        {/*{iceCreams.map((ice, index: number) => ( 
           <motion.div
           key={index}
           className="bg-white p-4 rounded-lg text-black shadow-lg"
           initial={{ opacity: 0, y: 20 }} // Initial animation state
           animate={{ opacity: 1, y: 0 }} // Final animation state
           transition={{ duration: 0.5, delay: index * 0.1 }} // Staggered appearance
         >
           <img src="/icecream-placeholder.jpg" alt="Ice Cream" className="w-full h-40 object-cover rounded-lg" />
           <h3 className="text-lg font-bold mt-2">{ice.name}</h3>
           <p className="text-sm">{ice.description}</p>
           <p className="text-sm">{ice.location}</p>
           <p className="text-sm font-bold">${ice.price}</p>
           <button onClick={addIceCream}  className="mt-2 bg-pink-300 text-white p-2 rounded-lg w-full">
             Order Now
           </button>
         </motion.div>
        ))}
        */}

{filteredResults.map((icecream, index: number) => ( 
           <motion.div
           key={index}
           className="bg-white p-4 rounded-lg text-black shadow-lg"
           initial={{ opacity: 0, y: 20 }} // Initial animation state
           animate={{ opacity: 1, y: 0 }} // Final animation state
           transition={{ duration: 0.5, delay: index * 0.1 }} // Staggered appearance
         >
          
           <img src={icecream.image_url} alt="Ice Cream" loading="lazy" className="w-full h-40 object-cover rounded-lg" />
           <h3 className="text-lg font-bold mt-2">{icecream.name}</h3>
           <p className="text-sm">{icecream.description}</p>
           <p className="text-sm">{icecream.location}</p>
           <p className="text-sm">{icecream.vendor}</p>
           <p className="text-sm font-bold">${icecream.price}</p>
           <button className="mt-2 bg-pink-300 text-white p-2 rounded-lg w-full"  onClick={() => addToCart(icecream)}> 
             Order Now
           </button>
         </motion.div>
        ))}
        
     
        </div>
      </div>

      {/* Cart Indicator */}
      <div className="fixed top-4 right-4 bg-white text-black p-2 rounded-full flex items-center">
        <FaShoppingCart size={24} />
        <span className="ml-2">{cartCount}</span>
      </div>
    </div>
  );
}
;

export default OrderIceCream;
