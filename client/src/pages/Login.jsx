import axios from 'axios';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { setUser } from '../slices/userSlice';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    accountType: 'user', // default account type for registration
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggleForm = () => {
    setIsLogin((prev) => !prev);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isLogin) {
        // Login
        const response = await axios.post(`${import.meta.env.VITE_REACT_APP_API_URL}/auth/login`, {
          email: formData.email,
          password: formData.password,
        });
        console.log(response)
        console.log(response.status);

        if (response.status === 200) {

          localStorage.setItem("user", JSON.stringify(response.data));
          dispatch(setUser(response.data));
          navigate('/dashboard');
        }

        // Handle success or redirect to a new page
      } else {
        // Register
        const response = await axios.post(`${import.meta.env.VITE_REACT_APP_API_URL}/auth/register`, {
          name: formData.name,
          email: formData.email,
          password: formData.password,
          userType: formData.accountType,
        });
        console.log(response.data);

        if (response.status === 201) {

          localStorage.setItem("user", JSON.stringify(response.data));
          dispatch(setUser(response.data));
          navigate('/dashboard');
        }
        // Handle success or redirect to a new page
      }
    } catch (error) {
      console.error('Error:', error.response.data.error);
      if (error.response && error.response.status === 401) {
        alert("Invalid credentials");
      } else if (error.response && error.response.status === 409) {
        alert("Email already exists");
      } else {
        console.error('Error:', error.response?.data?.error || 'An unexpected error occurred');
      }
      // Handle error (e.g., show an error message to the user)
    }
  };

  return (
    <div className="flex justify-center items-center h-[80vh]">
      <div className="w-full max-w-md p-8 bg-slate-200 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-center">{isLogin ? 'Login' : 'Create Account'}</h1>
        <form className="mb-6" onSubmit={handleSubmit}>
          {isLogin ? null : (
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md py-2 px-4 mb-3 focus:outline-none focus:ring focus:border-blue-300"
            />
          )}
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md py-2 px-4 mb-3 focus:outline-none focus:ring focus:border-blue-300"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md py-2 px-4 mb-3 focus:outline-none focus:ring focus:border-blue-300"
          />
          {!isLogin && (
            <div className="mb-3">
              <label className="block text-gray-600">Account Type</label>
              <select
                name="accountType"
                value={formData.accountType}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring focus:border-blue-300"
              >
                <option value="user">User</option>
                <option value="merchant">Merchant</option>
              </select>
            </div>
          )}
          <button
            type="submit"
            className="w-full bg-green-500 text-white rounded-md py-2 transition duration-300 hover:bg-green-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            {isLogin ? 'Login' : 'Create Account'}
          </button>
        </form>
        <p className="text-gray-600 text-center mb-6">
          {isLogin ? 'Not Registered? ' : 'Already have an account? '}
          <button
            onClick={toggleForm}
            className="text-blue-500 hover:underline focus:outline-none"
          >
            {isLogin ? 'Create an account' : 'Login'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
