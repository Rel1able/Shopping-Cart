import { useParams, useOutletContext } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "../styles/SingleProduct.module.css";
import PropTypes from "prop-types";

export default function SingleProduct({currency = "€"}) {
    const [product, setProduct] = useState(undefined);
    const [loading, setLoading] = useState(true);
    const [amount, setAmount] = useState(0);
    const { productId } = useParams();
    const { cartItems, setCartItems, products } = useOutletContext();

    const targetProduct = products.find(product => parseInt(product.id) === parseInt(productId));
    
    useEffect(() => {
        setProduct(targetProduct);
        setLoading(false);
    }, [])

    function handleDecrement() {
        if (amount > 0) {
            setAmount(a => a - 1);
        }
        
    }

    function handleIncrement() {
        setAmount(a => a + 1);
    }

    let modifiedProduct = { ...product, amount: amount };


    function handleAddToCart() {
        if (amount > 0) {
            checkDuplicates();
        } else {
            alert("You should add more than 0 products");
        }
       
    }
    function checkDuplicates() {
        let exist = cartItems.find(item => item.id === targetProduct.id);

        if (exist) {
            let updatedCartItems = cartItems.map(item => {
                if (item.id === targetProduct.id) {
                    return ({ ...item, amount: item.amount + amount });
                }
                return item;
            })
            setCartItems(updatedCartItems);
        } else {
            setCartItems([...cartItems, modifiedProduct]) 
        }
    }   

    

    if (loading) return <div>Loading...</div>
    return (
        <>
            <div className={styles.container}>
                <img src={product.image} />
                <h3>{product.title}</h3>
                <h4>{product.description}</h4>
                <h2>{product.price}{currency}</h2>
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

SingleProduct.propTypes = {
    currency: PropTypes.string,
}