import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { clearUser, selectUser } from '../slices/userSlice';

const Nabar = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const logout = () => {
    localStorage.removeItem('user');
    dispatch(clearUser());
  };

  return (
    <div className="bg-gray-800 p-7">
      <div className="container mx-auto flex justify-between items-center">
        <NavLink to="/" className="text-white text-xl font-bold">
          TradeVista
        </NavLink>
        <div className="flex space-x-4 items-center px-4">
          <NavLink to="/products" className="text-white">
            Products
          </NavLink>

          {user && Object.keys(user).length > 0 ? (
            <>
              <NavLink to="/dashboard" className="text-white">
                Dashboard
              </NavLink>

              {user?.userType === 'merchant' && (
                <NavLink to="/add-product" className="text-white">
                  Add Product
                </NavLink>
              )}

              <NavLink onClick={logout} className="text-white">
                Logout
              </NavLink>
            </>
          ) : (
            <NavLink to="/login" className="text-white">
              Login
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nabar;
