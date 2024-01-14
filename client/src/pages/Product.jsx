import axios from 'axios';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { selectUser } from '../slices/userSlice';
import IsEdit from '../components/IsEdit';

const Product = () => {

  const user = useSelector(selectUser);
  const navigate = useNavigate();

  const { id } = useParams();
  const [product, setProduct] = useState({})
  const [isEditing, setIsEditing] = useState(false);
  const [editedProduct, setEditedProduct] = useState({
    name: '',
    description: '',
    category: '',
    subcategory: '',
    location: '',
    price: '',
  });

  const isUserOwner = user?.userType === 'merchant' && user?._id === product.userid;

  const fetchProduct = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_REACT_APP_API_URL}/products/view-product/${id}`);

      const data = response.data;
      console.log(data);
      setProduct(data);
    } catch (error) {
      console.error(error);
    }
  }

  const handleEditClick = () => {

    setIsEditing(true);

    setEditedProduct(
      {
        name: product.name,
        description: product.description,
        category: product.category,
        subcategory: product.subcategory,
        location: product.location,
        price: product.price,
      }
    );
  };

  const handleSaveChanges = async () => {
    try {
      const response = await axios.put(`${import.meta.env.VITE_REACT_APP_API_URL}/products/edit-product/${id}`, editedProduct);

      if (response.status === 200) {
        console.log('Product updated successfully:', response.data.message);

        setProduct({ ...product, ...editedProduct });

        setIsEditing(false);
      } else {
        console.log('Failed to update product. Status:', response.status);
      }
    } catch (error) {
      console.error('Error updating product:', error.message);
    }
  };

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
    fetchProduct();

  }, [user, navigate]);

  return (
    <div className="max-w-4xl mx-auto bg-slate-200 rounded-xl overflow-hidden shadow-md my-8 p-4">
      <div className="flex flex-col md:flex-row">
        <div className="md:flex-shrink-0">
          <img
            className="h-64 w-full object-cover border-2 border-slate-400 rounded-md"
            src={product.Image}
            alt={product.name}
          />
        </div>
        <div className="md:ml-6 mt-4 md:mt-0">
          <div className="text-sm text-indigo-500 font-semibold">
            {product.category} - {product.subcategory}
          </div>
          <h2 className="text-2xl font-semibold text-gray-900 mt-2">
            {product.name}
          </h2>
          <p className="mt-4 text-gray-600">{product.description}</p>
          <div className="flex items-center mt-4">
            <span className="text-gray-500">Price: ${product.price}</span>
            <span className="ml-4 text-gray-500">Location: {product.location}</span>
          </div>


          <div className="mt-6 flex items-center">
            {isUserOwner && (
              <button
                onClick={handleEditClick}
                className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600"
              >
                Edit Product
              </button>
            )}
            <button className="ml-4 bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      {isEditing && (
        < IsEdit
          setIsEditing={setIsEditing}
          editedProduct={editedProduct}
          setEditedProduct={setEditedProduct}
          handleSaveChanges={handleSaveChanges}
        />
      )}
    </div>
  );
};

export default Product;