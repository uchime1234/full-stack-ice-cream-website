import { createContext, useState, useEffect, ReactNode, useContext } from "react";

// Ice cream product type
interface IceCream {
  id: number;
  name: string;
  description: string;
  location: string;
  price: number;
  vendor: string;
  image_url: string | undefined ;
  created_at: string
}

// Context type
interface IceCreamContextType {
  iceCreams: IceCream[];
  cart: IceCream[];
  addIceCream: (newProduct: Omit<IceCream, "id">) => void;
  filtericecream: (name:string, flavour:string,  vendor:string ) => IceCream[];
  addToCart: (item: IceCream) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  getTotalCost: () => number;
}

// Create Context
const IceCreamContext = createContext<IceCreamContextType | undefined>(undefined);

// Backend API URL
const API_URL = "http://127.0.0.1:8000/icecreams/";

export function IceCreamProvider({ children }: { children: ReactNode }) {
  const [iceCreams, setIceCreams] = useState<IceCream[]>([
   
  ]);

//const [cart, setCart] = useState<IceCream[]>([]);

const [cart, setCart] = useState<IceCream[]>(() => {
  const storedCart = localStorage.getItem("cart");
  return storedCart ? JSON.parse(storedCart) : [];
});

useEffect(() => {
  localStorage.setItem("cart", JSON.stringify(cart));
}, [cart]);




  const addToCart = (item: IceCream) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const removeFromCart = (id: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

   // ✅ Get total cost of items in the cart
   const getTotalCost = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };







  // Fetch all ice cream products from backend
  useEffect(() => {
    async function fetchIceCreams() {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error("Failed to fetch ice creams");
        const data: IceCream[] = await response.json();
        setIceCreams(data);
      } catch (error) {
        console.error("Error fetching ice creams:", error);
      }
    }
    fetchIceCreams();
  }, []);

  // Add new ice cream and send it to the backend
  async function addIceCream(newProduct: Omit<IceCream, "id">) {
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newProduct),
      });

      if (!response.ok) throw new Error("Failed to add ice cream");

      const addedIceCream: IceCream = await response.json();
      setIceCreams([...iceCreams, addedIceCream]); // Update state
    } catch (error) {
      console.error("Error adding ice cream:", error);
    }
  }

  function filtericecream(name:string, location:string, vendor:string) {
    const filtercards = iceCreams.filter((icecream) =>( // used to filter for the search bar 
      icecream.name.toLowerCase().includes(name.toLowerCase()) &&
      icecream.location.toLowerCase().includes(location.toLowerCase()) &&
      icecream.vendor.toLowerCase().includes(vendor.toLowerCase())
      
  ))
  return filtercards
  }
  

  return (
    <IceCreamContext.Provider value={{ iceCreams, cart, addIceCream, filtericecream, addToCart, removeFromCart, clearCart, getTotalCost  }}>
      {children}
    </IceCreamContext.Provider>
  );
}

// Hook to use Ice Cream Context
export function useIceCream() {
  const context = useContext(IceCreamContext);
  if (!context) {
    throw new Error("useIceCream must be used within an IceCreamProvider");
  }
  return context;
}
