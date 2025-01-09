//import { useState, useEffect } from "react";
import styles from "../styles/Shop.module.css";
import { Link, useOutletContext } from "react-router-dom";

export default function Shop() {
    const {loading, error, products} = useOutletContext();

    /*const [products, setProducts] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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
    }, [])*/


    if (loading) return <div>Loading...</div>
    if (error) return <h1>A network error was encountered</h1>

    return (
        <>
            <h1 className={styles.title}>Shop</h1>
            <div className={styles.productsContainer}>
            {products.map(product => (
                <Link to={`${product.id}`} key={product.id}>
                    <div  className={styles.container}>
                        <img src={product.image} />
                        <h3>{product.title}</h3>
                        <h2>{product.price}€</h2>
                        <h2>{product.rating.rate} stars</h2>
                     </div>
                </Link>
                    
            ))}
        </div>
        </>
        
    )
}