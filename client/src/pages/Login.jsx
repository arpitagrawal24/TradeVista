import { useState } from 'react';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin((prev) => !prev);
  };

  return (
    <div className="flex justify-center items-center h-[80vh]">
      <div className="w-full max-w-md p-8 bg-slate-200 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-center">{isLogin ? 'Login' : 'Create Account'}</h1>
        <form className="mb-6">
          {isLogin ? null : (
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="w-full border border-gray-300 rounded-md py-2 px-4 mb-3 focus:outline-none focus:ring focus:border-blue-300"
            />
          )}
          <input
            type="text"
            name="username"
            placeholder="Username"
            className="w-full border border-gray-300 rounded-md py-2 px-4 mb-3 focus:outline-none focus:ring focus:border-blue-300"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full border border-gray-300 rounded-md py-2 px-4 mb-3 focus:outline-none focus:ring focus:border-blue-300"
          />
          {!isLogin && (
            <div className="mb-3">
              <label className="block text-gray-600">Account Type</label>
              <select
                name="accountType"
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
          {isLogin ? "Not Registered? " : "Already have an account? "}
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
