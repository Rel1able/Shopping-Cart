import { useState, useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer.jsx";
import "./index.css";

export default function App() {
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const cartCount = cartItems.length;
  useEffect(() => {
          async function fetchProducts() {
              try {
                  let response = await fetch('https://fakestoreapi.com/products', {mode: "cors"});
                  if (!response.ok) {
                      throw new Error("Http error");
                  }
                  let data =  await response.json();
                  console.log(data);
                  setProducts(data);
                  
                  console.log(products);
                  
              } catch(error) {
                  setError(error);
              } finally {
                  setLoading(false);
              }
          }
           fetchProducts(); 
      }, [])
  
  return (
    <div className="page-container">
      <Navbar cartCount={cartCount} />
      <Outlet context={{ cartItems, setCartItems, loading, error, products, setProducts }} />
      <Footer/>
    </div>
  )
}