import React, { useState } from 'react';
import axios from 'axios';
import '../pages/header.css'
const IceCreamForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    location: '',
    vendor: '',
    title: '',
    image: null
  });
  const [preview, setPreview] = useState<string>('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e:any) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleImageChange = (e:any) => {
    const file = e.target.files[0];
    setFormData({...formData, image: file});
    
    const reader = new FileReader();
    reader.onloadend = () => {
        if (reader.result) {
      setPreview(reader.result as string);
        }
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    
    try {
      const data = new FormData();
      data.append('name', formData.name);
      data.append('description', formData.description);
      data.append('price', formData.price);
      data.append('location', formData.location);
      data.append('vendor', formData.vendor);
      data.append('title', formData.title);
      if (formData.image) {
        data.append('image', formData.image);
      }

      const response = await axios.post('http://localhost:8000/icecreams/', data, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      setSuccess('Ice cream added successfully!');
      setFormData({
        name: '',
        description: '',
        price: '',
        location: '',
        vendor: '',
        title: '',
        image: null
      });
      setPreview('');
    } catch (err:any) {
      setError(err.response?.data?.error || 'Failed to add ice cream');
      console.error('Error:', err);
    }
  };

  return (
    <div className="h-screen flex flex-col md:overflow-hidden">
      {/* Pink Top Section (50%) */}
      <div className="flex-1 bg-white flex items-center justify-center p-16">
        <div className="max-w-md w-full">
          <h2 className="text-3xl relative bottom-[50px] right-[50px] white-div  font-bold mb-6 text-pink-300">Add New Ice Cream</h2>
         
          
        </div>
      </div>

      {/* White Bottom Section (50%) */}
      <div className="flex-1 bg-white sm:bg-pink-300 flex items-center justify-center p-1">
        <div className="max-w-md w-full">
         
         <div className='h-[50px]' >

          
         {error && (
            <div className="mb-4 p-4 bg-red-100  border h-[50px] md:w-[260px] bottom-[120px] relative md:bottom-[180px] md:left-[300px] border-red-400 text-red-700 rounded">
              {error}
            </div>
          )}
          
          {success && (
            <div className="mb-4 p-4 bg-green-100 h-[50px] md:w-[230px] bottom-[120px] relative md:bottom-[170px]  md:left-[340px] border border-green-400 text-green-700 rounded">
              {success}
            </div>
          )}

         </div>

<form onSubmit={handleSubmit} className="bg-pink-400 p-6  rounded-lg shadow-lg md:w-[620px] relative md:right-[50px] md:bottom-[174px] bottom-[100px] w-full max-w-6xl mx-auto">
  <p className="text-white text-xl md:text-2xl font-semibold mb-6">
    Ice Cream Form
  </p>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
    <div className="w-full">
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
        required
      />
    </div>

    <div className="w-full">
      <input
        type="text"
        id="description"
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
        className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
        required
      />
    </div>

    <div className="w-full">
      <input
        type="number"
        step="0.01"
        id="price"
        name="price"
        placeholder="Price"
        value={formData.price}
        onChange={handleChange}
        className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
        required
      />
    </div>

    <div className="w-full">
      <input
        type="text"
        id="location"
        name="location"
        placeholder="Location"
        value={formData.location}
        onChange={handleChange}
        className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
        required
      />
    </div>

    <div className="w-full">
      <input
        type="text"
        id="vendor"
        name="vendor"
        placeholder="Vendor"
        value={formData.vendor}
        onChange={handleChange}
        className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
        required
      />
    </div>

    <div className="w-full">
      <input
        type="text"
        id="title"
        name="title"
        placeholder="Title"
        value={formData.title}
        onChange={handleChange}
        className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
        required
      />
    </div>

    <div className="w-full md:col-span-2">
      <input
        type="file"
        id="image"
        name="image"
        onChange={handleImageChange}
        accept="image/*"
        className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
        required
      />
    </div>

    <div className="w-full md:col-span-2">
      <button
        type="submit"
        className="w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-6 rounded-lg transition duration-200 shadow-md"
      >
        Submit Ice Cream
      </button>
    </div>
  </div>
</form>

          
     </div>
      </div>
    </div>
  );
};

export default IceCreamForm;