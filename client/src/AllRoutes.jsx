import App from "./App"
import Home from "./pages/Home"
import Error from "./pages/Error"
import Login from "./pages/Login"
import Product from "./pages/Product"
import Products from "./pages/Products"
import Dashboard from "./pages/Dashboard"
import AddProduct from "./pages/AddProduct"

export const AllRoutes = [
    {
        path: "/",
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "login",
                element: <Login />,
            },
            {
                path: "dashboard",
                element: <Dashboard />,
            },
            {
                path: "products",
                element: <Products />,
            },
            {
                path: "product/:id",
                element: <Product />,
            },
            {
                path: "add-product",
                element: <AddProduct />,
                
            }
        ],
    },
]