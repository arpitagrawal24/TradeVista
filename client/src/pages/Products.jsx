import axios from 'axios';
import { useSelector } from 'react-redux';
import {useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { selectUser } from '../slices/userSlice';
import ProductCard from '../components/ProductCard';

const Products = () => {

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filterCriteria, setFilterCriteria] = useState({
    category: '',
    subcategory: '',
    maxPrice: '',
    location: '',
  });

  const navigate = useNavigate();
  const user = useSelector(selectUser);

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }

    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_REACT_APP_API_URL}/products/view-products`);

        const data = response.data;
        console.log(data);
        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchProducts();

  }, [user]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilterCriteria({
      ...filterCriteria,
      [name]: value,
    });
  };

  const applyFilters = () => {
    let filteredList = products;

    if (filterCriteria.category) {
      filteredList = filteredList.filter(product => product.category === filterCriteria.category);
    }

    if (filterCriteria.subcategory) {
      filteredList = filteredList.filter(product => product.subcategory === filterCriteria.subcategory);
    }

    if (filterCriteria.maxPrice) {
      filteredList = filteredList.filter(product => product.price <= parseInt(filterCriteria.maxPrice));
    }

    if (filterCriteria.location) {
      filteredList = filteredList.filter(product => product.location === filterCriteria.location);
    }

    setFilteredProducts(filteredList);
  };

  return (
    <div className="container mx-auto mt-8 items-center">
      <div className="text-3xl font-bold mb-4 text-center">Product Browsing</div>

      {/* Filter Controls */}
      <div className="flex-wrap flex gap-2 justify-center mb-4 mx-2 p-2 border rounded w-fit items-center bg-slate-200">
        <div className="flex items-center">
          <label className="mr-2">Category:</label>
          <input
            type="text"
            name="category"
            value={filterCriteria.category}
            onChange={handleFilterChange}
          />
        </div>

        <div className="flex items-center">
          <label className="mr-2">Subcategory:</label>
          <input
            type="text"
            name="subcategory"
            value={filterCriteria.subcategory}
            onChange={handleFilterChange}
          />
        </div>

        <div className="flex items-center">
          <label className="mr-2">Max Price:</label>
          <input
            type="number"
            name="maxPrice"
            value={filterCriteria.maxPrice}
            onChange={handleFilterChange}
          />
        </div>

        <div className="flex items-center">
          <label className="mr-2">Location:</label>
          <input
            type="text"
            name="location"
            value={filterCriteria.location}
            onChange={handleFilterChange}
          />
        </div>

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={applyFilters}
        >
          Apply Filters
        </button>
      </div>

      {filteredProducts.map(product => (
        <div
          key={product._id}
          className=" flex flex-col justify-center items-center"
        >
          <Link to={`/product/${product._id}`}>
            <ProductCard product={product} />
          </Link>
        </div>
      ))}
      {user?.userType === 'merchant' && (
        <div className="flex justify-center items-center">
          <Link to="/add-product">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 my-2 px-4 rounded">
              Add Product
            </button>
          </Link>
        </div>
      )}

    </div>

  );
};

export default Products;