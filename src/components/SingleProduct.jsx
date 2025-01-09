import { useParams, useOutletContext } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "../styles/SingleProduct.module.css";

export default function SingleProduct() {
    const [product, setProduct] = useState(undefined);
    const [loading, setLoading] = useState(true);
    const [amount, setAmount] = useState(0);
    const { productId } = useParams();
    const {cartItems, setCartItems, products} = useOutletContext();

    function handleDecrement() {
        setAmount(a => a - 1);
    }

    function handleIncrement() {
        setAmount(a => a + 1);
    }

    let updatedProduct = { ...product, amount: amount };


    function handleAddToCart() {
        setProduct(updatedProduct)
        setCartItems([...cartItems, updatedProduct])
    }

    const targetProduct = products.find(product => parseInt(product.id) === parseInt(productId));
    

    useEffect(() => {
       /* async function fetchProduct() {
            try {
                const response = await fetch(`https://fakestoreapi.com/products/${productId}`, {mode: "cors"});
                const data = await response.json();
                setProduct(data);
                setLoading(false);
            } catch (err) {
                console.log(err);
            }
        }
        fetchProduct();*/
        setProduct(targetProduct);
        setLoading(false);
        
    }, [])

    if (loading) return <div>Loading...</div>
    return (
        <>
            <div className={styles.container}>
                <img src={product.image} />
                <h3>{product.title}</h3>
                <h2>{product.price}€</h2>
                <h2>{product.rating.rate} stars</h2>
                <div className={styles.buttons}>
                    <button onClick={handleDecrement}>-</button>
                    <div>{amount}</div>
                    <button onClick={handleIncrement}>+</button>
                </div>
                <button onClick={handleAddToCart}>Add</button>
                
            </div>
        </>
    )
}