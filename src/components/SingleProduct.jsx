import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "../styles/SingleProduct.module.css";

export default function SingleProduct() {
    const [product, setProduct] = useState("");
    const [loading, setLoading] = useState(true);
    const [amount, setAmount] = useState(0);
    const { productId } = useParams();

    function handleMinus() {
        setAmount(a => a - 1);
    }

    function handlePlus() {
        setAmount(a => a + 1);
    }

    useEffect(() => {
        async function fetchProduct() {
            try {
                const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
                const data = await response.json();
                setProduct(data);
                setLoading(false);
            } catch (err) {
                console.log(err);
            }
        }
        fetchProduct();
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
                    <button onClick={handleMinus}>-</button>
                    <div>{amount}</div>
                    <button onClick={handlePlus}>+</button>
                </div>
                <button>Add</button>
                
            </div>
        </>
    )
}