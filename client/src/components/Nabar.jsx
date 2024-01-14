// Nabar.js

import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
// import axios from "axios";

const Nabar = () => {

    const [user, setUser] = useState({});

    const getUser = async () => {

        //
    };

    useEffect(() => {
        getUser();
    }, []);


    const logout = () => {
        localStorage.removeItem("user");
        setUser({});
    }

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

                    {Object?.keys(user)?.length > 0 ? (
                        <>
                            <NavLink to="/dashboard" className="text-white">
                                Dashboard
                            </NavLink>

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
