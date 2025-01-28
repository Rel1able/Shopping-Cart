import { useOutletContext, useNavigate } from "react-router-dom";
import styles from "../styles/Cart.module.css"
import PropTypes from "prop-types";
import Button from "./Button.jsx";
import { useEffect } from "react";

export default function Cart({currency = "€", emptyCartMsg ="Nothing to see here, the cart is empty" }) {
    const {cartItems, setCartItems} = useOutletContext();
    let navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    })


    function handlePurchase() {
        if (cartItems.length > 0) {
            navigate("/");
            alert("Your purchase was successful");
            setCartItems([]);
        }
        
    }

    function handleDelete(index) {
        const filtered = cartItems.filter((_, i) => index !== i);
        setCartItems(filtered);
    }

    let sum = 0;

    function generateTotal() {
        cartItems.map((item) => sum += (parseFloat(item.price) * parseFloat(item.amount)));
    }

    if (cartItems) generateTotal();
    
    return (
        <div className={styles.cartContent}>
            <h1 className={styles.title}>Your Cart</h1>
            <div className={styles.mainContainer}>
                <ul className={styles.cartContainer}>
                    {cartItems.map((item, index) => (

                        <li className={styles.productCard} key={index}>
                                <img className={styles.productImg} src={item.image} />
                                <h2 className={styles.textContainer}>{item.title}</h2>
                                <h2>{item.amount}</h2>
                                <h2>{(parseFloat(item.price) * parseFloat(item.amount)).toFixed(2)} {currency}</h2>
                                
                            <Button addClass={styles.removeBtn} onClick={() => handleDelete(index)} text="Remove"/>
                            </li>
                        
                    ))}
                </ul>
                {cartItems.length === 0 &&
                    <div className={styles.empty}>
                        <div>{emptyCartMsg}</div>
                        <Button onClick={() => navigate("/shop")} text="Shop now"/>
                    </div>
                }
                {cartItems.length > 0 &&
                    
                    <div className={styles.buttons}>
                        <div className={styles.price}>Total {sum.toFixed(2)} {currency}</div>
                        <Button onClick={handlePurchase} text={"Checkout"} />
                        <Button onClick={() => navigate("/shop")} text="Continue Shopping"/>
                    </div>}
            
            </div>
        </div>
        
        
    )
}


Cart.propTypes = {
    currency: PropTypes.string,
    emptyCartMsg: PropTypes.string,
}
