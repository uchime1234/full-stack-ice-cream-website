import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import  { useIceCream } from "../components/ice-cart";

const ConfirmCartPayment: React.FC = () => {
  const { cart, removeFromCart, clearCart, getTotalCost } = useIceCream();

  const [showBankDetails, setShowBankDetails] = useState(false);
  const [timer, setTimer] = useState(60);

  useEffect(() => {
    let countdown: ReturnType< typeof setTimeout>;
    if (showBankDetails && timer > 0) {
      countdown = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(countdown);
  }, [showBankDetails, timer]);

  const handlePayment = () => {
    setShowBankDetails(true);
  };

  return (
    <div className="min-h-screen bg-pink-200 p-6 flex flex-col items-center">
      <h1 className="text-3xl text-white mb-4">Confirm Your Order</h1>

      {cart.length === 0 ? (
        <p className="text-lg text-white">Your cart is empty.</p>
      ) : (
        <div className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-lg">
          {cart.map((item,) => (
            <div
              key={item.id}
              className="flex justify-between items-center border-b pb-3 mb-3"
            >
              <div>
                <h2 className="text-xl font-bold">{item.name}</h2>
                <p className="text-gray-500">{item.description}</p>
                <p className="text-pink-500 font-semibold">${item.price}</p>
                <button className="bg-pink-300 w-[200px] " onClick={() => removeFromCart(item.id)}>Delete</button>
              </div>
         
              <img
                src={item.image_url}
                alt={item.name}
                className="w-20 h-20 rounded-lg object-cover"
              />
            </div>
          ))}
        </div>
      )}

      {cart.length > 0 && (
        <motion.button
          onClick={handlePayment}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 bg-pink-500 text-white py-3 px-6 rounded-lg shadow-lg text-lg"
        >
          Make Payment
        </motion.button>
      )}

      {showBankDetails && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="mt-6 p-6 bg-white rounded-lg shadow-lg w-full max-w-lg"
        >
          <h2 className="text-xl font-bold text-center">Bank Details</h2>
          <p className="text-center text-gray-500">Account Name: IceCreamHub</p>
          <p className="text-center text-gray-500">Account Number: 1234567890</p>
          <p className="text-center text-gray-500">Bank Name: Opay Bank</p>
          <h2>Total: ₦{getTotalCost()}</h2>
          <p className="text-center text-red-500 font-bold mt-4">
            Payment window closes in: {timer} seconds
          </p>
          {timer === 0 && <p className="text-center text-red-600">Time expired!</p>}
        </motion.div>
      )}
      
    </div>
  );
};

export default ConfirmCartPayment;
