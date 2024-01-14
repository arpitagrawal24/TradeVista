import { useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { selectUser } from '../slices/userSlice';

const AddProduct = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: '',
    subcategory: '',
    location: '',
    price: '',
  });

  // Use useSelector to get user information from Redux state
  const user = useSelector(selectUser);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Perform logic to send formData to the server or update your Redux state
    console.log('Form data submitted:', formData);

    try {
      // Include the user information in the formData
      const productData = {
        ...formData,
        userid: user, // Assuming user.id is the property you want to include
      };

      // Send a POST request to the backend endpoint /upload-product
      const response = await axios.post(`${import.meta.env.VITE_REACT_APP_API_URL}/products/upload-product`, productData);

      // Check the response status
      if (response.status === 201) {
        console.log('Product added successfully:', response.data.message);
        // Optionally, you can redirect the user or perform other actions
      } else {
        console.log('Failed to add product. Status:', response.status);
      }
    } catch (error) {
      console.error('Error adding product:', error.message);
    }

    setFormData({
      name: '',
      description: '',
      category: '',
      subcategory: '',
      location: '',
      price: '',
    });
  };

  return (
    <div className=" w-3/4 mx-auto bg-slate-200 rounded-xl overflow-hidden shadow-md my-8 p-8">
      <h1 className="text-2xl font-bold mb-6 text-center">Add Product</h1>
      <div>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
            Product Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700 font-semibold mb-2">
            Description:
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="category" className="block text-gray-700 font-semibold mb-2">
            Category:
          </label>
          <input
            type="text"
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="subcategory" className="block text-gray-700 font-semibold mb-2">
            Sub Category:
          </label>
          <input
            type="text"
            id="subcategory"
            name="subcategory"
            value={formData.subcategory}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="location" className="block text-gray-700 font-semibold mb-2">
            Location:
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block text-gray-700 font-semibold mb-2">
            Price:
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>
        {/* Add other fields as needed */}
        <button
          type="submit"
          onClick={handleSubmit}
          className="w-full bg-green-500 text-white rounded-md py-2 transition duration-300 hover:bg-green-600 focus:outline-none focus:ring focus:border-blue-300"
        >
          Add Product
        </button>
      </div>
    </div>
  );
};

export default AddProduct;
