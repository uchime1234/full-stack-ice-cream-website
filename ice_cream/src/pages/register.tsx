import React, { useState } from "react";
import axios from "axios";
import '../pages/header.css'
const API_URL = "http://localhost:8000/register/";

const Register: React.FC = () => {
  const [step, setStep] = useState<"form" | "verify">("form");
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confrimpassworld: "",
    verification_code: "",
  });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setLoading(true);
    setMessage("");
    try {

      //if (formData.password !== formData.confrimpassworld) {

        //setMessage('Passwords do not match.')
        //return
         //}

      const response = await axios.post(API_URL, {
        username: formData.username,
        email: formData.email,
        password: formData.password,
        ...(step === "verify" && { verification_code: formData.verification_code }),
      });

      if (step === "form" && response.data.next_step) {
        setMessage(response.data.message);
        setStep("verify");
      } else {
        setMessage("Registration successful!");
      }
    } catch (error: any) {
      const errMsg = error.response?.data?.error || "Something went wrong";
      setMessage(errMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen h-full">
      {/* Left Section */}

     <div className="w-[600px] bg-pink-300 relative flex items-center justify-center">

 <div

 className="absolute inset-0 bg-cover bg-center mix-blend-overlay"

 style={{
 backgroundImage: "url('./lemon-ice (2).jpg')",


 borderTopRightRadius: '50%',

 borderBottomRightRadius: '50%',
 }}

 ></div>
 {/*middle div*/}
<div className="max-w-md relative left-[80px] sm:left-[150px] md:left-[200px] lg:left-[300px] mx-auto p-6 bg-white rounded-2xl shadow-ban shadow-md h-[440px] mt-9 space-y-6">
      <h2 className="text-2xl text-pink-400 font-bold">{step === "form" ? "Register" : "Enter Verification Code"}</h2>

      {step === "form" && (
        <>
          <input
            name="username"
            placeholder="Username"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-pink-300"
            onChange={handleChange}
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-pink-300"
            onChange={handleChange}
            required
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-pink-300"
            onChange={handleChange}
            required
          />
          <input
            name="confrimpassword"
            type="password"
            placeholder="confrimPassword"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-pink-300"
            onChange={handleChange}
            required
          />
        </>
      )}

      {step === "verify" && (
        <input
          name="verification_code"
          placeholder="Verification Code"
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-pink-300"
          onChange={handleChange}
          required
        />
      )}

      <button
        onClick={handleSubmit}
        className="bg-pink-400 hover:bg-pink-500 text-white font-bold py-2 px-4 rounded w-full"
        disabled={loading}
      >
        {loading ? "Processing..." : step === "form" ? "Send Verification Code" : "Verify & Register"}
      </button>

      {message && <p className="text-sm text-center text-gray-700">{message}</p>}
    </div>

 </div>

 
{/*right section*/}
    <div className="w-1/2 bg-pink-400 relative flex items-center justify-center">

 <div

 className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-80"

 style={{

backgroundImage: "url('./lemon-ice (3).jpg')",

 }}

 ></div>

 </div>
 
    </div>
  );
};

export default Register;
