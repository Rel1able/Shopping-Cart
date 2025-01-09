import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx'
import Shop from "./components/Shop.jsx";
import Cart from "./components/Cart.jsx";
import Homepage from "./components/Homepage.jsx";
import SingleProduct from "./components/SingleProduct.jsx";
import ErrorElement from "./components/ErrorElement.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorElement errorMsg={"This page doesn't exist"}/>,
    children: ([
      {
        index: true,
        element: <Homepage/>
      },
      {
        path: "shop",
        element: <Shop/>
      },
      {
        path: "cart",
        element: <Cart/>
      },
      {
        path: "shop/:productId",
        element: <SingleProduct/>
      }
    ])
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
