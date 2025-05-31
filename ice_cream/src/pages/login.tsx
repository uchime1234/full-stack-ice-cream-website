import React, { useState } from 'react';
import axios from 'axios'
import { useNavigate } from "react-router-dom";


const Login: React.FC = () => {
 


  const [username, setusername] = useState(""); //intializing the input data, that will hold the data
  const [password, setpassword] = useState(""); 
  const [error, seterror] = useState("")
  //const navigate = useNavigate()


  const [errors, setErrors] = useState({
    name: '',
    password: '',
    confirmPassword: '',
  });

  const [message, setmessage] = useState("");
  const [token, setToken] = useState<string | null>(null);
  

  

  const handleSubmit = async (e: React.FormEvent)=> {

    e.preventDefault();


    try {
        const response = await axios.post("http://127.0.0.1:8000/login/", {
            username,
            password,
        });
        setToken(response.data.token) //show the token
        setmessage("login successful")
     //  setTimeout(() => {navigate("/")}, 2000)
    } catch(err: any) {
        
        console.log(err)
        if(err.response && err.response.data.error) {
         setmessage(err.response.data.error)
        } else {
           setmessage('an unexpected error occured')
        }
     }

}


  return (
    <div className="flex min-h-screen h-full ">
      {/* Left Section */}
      <div className="w-1/2 bg-pink-200 relative flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center mix-blend-overlay"
          style={{
            backgroundImage: "url('./lemon-ice (2).jpg')",
            borderTopRightRadius: '50%',
            borderBottomRightRadius: '50%',
          }}
        ></div>
      </div>
      {error &&  <div className='text-red-700 relative top-16'>{error}</div>}
      {/* Middle Glass Section */}
      <div className="w-[640px] bg-white bg-opacity-30 backdrop-blur-md rounded-lg shadow-lg p-8 mx-auto my-auto h-auto">
        <h2 className="text-3xl font-bold text-center mb-6 text-pink-500">
          Sign Up
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={username} 
              onChange={ (e) => setusername(e.target.value)}
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
              placeholder="Enter your name"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>
         
          {message && <div className="text-red-400">{message}</div>}
          {token && <div className="text-red-400">{token}</div>}

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
               value={password}
                onChange={ (e) => setpassword(e.target.value)}
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
              placeholder="Enter your password"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>
          <div>
           
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">
                {errors.confirmPassword}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600 transition duration-300"
          >
            Sign Up
          </button>
        </form>
      </div>

      {/* Right Section */}
      <div className="w-1/2 bg-pink-300 relative flex items-center justify-center">
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

export default Login;