// src/components/ContactForm.tsx
import { useState } from "react"
import { FiX } from "react-icons/fi"
import axios from 'axios';

export function ContactForm() {
  const [activeTab, setActiveTab] = useState("email")
  const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
  

  const api_url = "http://127.0.0.1:8000/vendor/"

  const [preview, setPreview] = useState<string>('');
  const [vendordata, setvendordata] = useState({
    vendorname: "",
    location: "",
    email: "",
    nin: "",
    password: "",
    image: null

  })


const handlechange = (e: any) => {
setvendordata({...vendordata, [e.target.name]: [e. target.value]}) 
}

const handlefiles = (e:any) => {
  const file = e.target.files[0]
  setvendordata({...vendordata, image: file})

  
const reader = new FileReader();
reader.onloadend = () => {
    if (reader.result) {
  setPreview(reader.result as string);
    }
};
reader.readAsDataURL(file);
};



  const handlesubmit = async (e: any) => {

    e.preventDefault();
    setError('');
    setSuccess('');
try {
    const data = new FormData();
    data.append('vendorname', vendordata.vendorname);
    data.append('location', vendordata.location);
    data.append('email',     vendordata.email);
    data.append('nin', vendordata.nin);
    data.append('password', vendordata.password);
    if (vendordata.image) {
      data.append('image', vendordata.image);
    }

    const response = await axios.post(api_url, data, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }

    })



    setSuccess('Ice cream added successfully!');
      setvendordata({
        vendorname: "",
        location: "",
        email: "",
        nin: "",
        password: "",
        image: null
      });
      setPreview('');



      localStorage.setitem("vendor", JSON.stringify({
        vendorname:  vendordata.vendorname,
        location: "",
        email: "",
        nin: "",
        password: "",
        image: null
    
      }))
      window.location.href = "../pages/vendors-page"
    } catch (err:any) {
      setError(err.response?.data?.error || 'Failed to add ice cream');
      console.error('Error:', err);
    }
  
  }

  return (
    <div className="bg-white p-6 md:p-10 relative">
      {/* Close button */}
      <button className="absolute right-4 top-4 text-gray-400 hover:text-gray-600">
        <FiX size={20} />
      </button>

      {/* Tabs */}
      <div className="w-full">
        <div className="grid w-full text-center  mb-6 bg-pink-400 rounded-md p-2 text-white">
          
          <p className=" text-2xl md:text-2xl font-semibold w-full mx-auto">Your information</p> 
          
        </div>

        {activeTab === "email" && (
          <div className="space-y-6">
            <div className="space-y-4">
              <form onSubmit={handlesubmit} className="space-y-4">
              <div>
                <label htmlFor="firstName" className="block text-sm text-gray-600 mb-1">
                  Vendor name or company name
                </label>
                <input 
                  name="firstName" 
                  placeholder="Enter your first name" 
                  onClick={handlechange}
                  value={vendordata.vendorname}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
              </div>

              <div>
                <label htmlFor="lastName" className="block text-sm text-gray-600 mb-1">
                  Your location
                </label>
                <input 
                  name="your location"
                  onClick={handlechange}
                  value={vendordata.location} 
                  required
                  placeholder="Enter your last name" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm text-gray-600 mb-1">
                  Email
                </label>
                <input 
                 name="email" 
                  type="email"
                  required
                  onClick={handlechange}
                  value={vendordata.email} 
                  placeholder="Enter your email" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
              </div>


              <div>
                <label htmlFor="email" className="block text-sm text-gray-600 mb-1">
                  Your nin
                </label>
                <input 
                  name="nin" 
                  type="number"
                  required 
                  onClick={handlechange}
                  value={vendordata.nin}
                  placeholder="Enter your email" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm text-gray-600 mb-1">
                  Your password
                </label>
                <input 
                  name="password"
                  required
                  onClick={handlechange} 
                  value={vendordata.password}
                  type="password" 
                  placeholder="Enter your email" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm text-gray-600 mb-1">
                  Upload your image
                </label>
                <input 
                  id="image"
                  name="image" 
                  type="file"
                  required 
                  accept="image/*"
                  onClick={handlefiles}
                  placeholder="send your image" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
              </div>

           </form>
               
              <div>
               
                <p
                  id="message" 
                  className="w-full text-white font-semibold  min-h-[100px] bg-pink-400 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
               >Note:  The email you put here must be the same with the one use registerd with in the register section </p>
              </div>
            </div>

            <button type="submit" className="w-full bg-pink-400 hover:bg-pink-500 text-white py-2 px-4 rounded-md">
              Submit
            </button>

            <p className="text-xs text-gray-500 text-center">
              By clicking the "Send message" button, you agree to our{" "}
              <a href="#" className="underline">
                Privacy Policy
              </a>
            </p>
          </div>
        )}

      </div>
    </div>
  )
}