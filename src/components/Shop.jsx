import { useState, useEffect } from "react";
import styles from "../styles/Shop.module.css";
import { Link } from "react-router-dom";

export default function Shop() {
    const [products, setProducts] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchProducts() {
           
            try {
                let response = await fetch('https://fakestoreapi.com/products', {mode: "cors"});
                let data =  await response.json();
                console.log(data);
                setProducts(data);
                setLoading(false);
                console.log(products);
                
            } catch(err) {
                console.log(err);
            }
        }
        fetchProducts();
    }, [])


    if (loading)  return <div>Loading...</div>

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