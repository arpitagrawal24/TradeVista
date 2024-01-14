import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container mx-auto mt-8">
      {/* Hero Section */}
      <section className="bg-indigo-800 text-white p-8 mb-8 rounded-md mx-2">
        <h1 className="text-4xl font-bold mb-4">Welcome to TradeVista App</h1>
        <p className="text-lg">Discover amazing products, connect with sellers, and more!</p>
      </section>

      {/* Featured Products Section */}
      <section className="mb-8 mx-2">
        <h2 className="text-2xl font-bold mb-4">Featured Products</h2>

        {/* Display a list of featured products or use a carousel component */}
        <div className="flex space-x-4">
          <div className="bg-gray-200 p-4 rounded-md">
            <Link to='/products' className="text-xl font-semibold mb-2">Product 1</Link>
          </div>
          <div className="bg-gray-200 p-4 rounded-md">
            <Link to='/products' className="text-xl font-semibold mb-2">Product 2</Link>
          </div>
        </div>
      </section>

      {/* Explore Categories Section */}
      <section className="mb-8 mx-2">
        <h2 className="text-2xl font-bold mb-4">Explore Categories</h2>

        <div className="flex space-x-4">
          <Link to="/products?category=electronics" className="text-blue-500 hover:underline">
            Electronics
          </Link>
          <Link to="/products?category=clothing" className="text-blue-500 hover:underline">
            Clothing
          </Link>
        </div>
      </section>

      {/* Call To Action Section */}
      <section className="bg-gray-300 p-8 rounded-md mx-2">
        <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-lg mb-4">Sign up now to explore and buy amazing products!</p>
        <Link to="/login" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700">
          Sign Up
        </Link>
      </section>
    </div>
  );
};

export default Home;
