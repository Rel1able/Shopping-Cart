import { useOutletContext, useNavigate } from "react-router-dom";
import styles from "../styles/Cart.module.css"
import PropTypes from "prop-types";

export default function Cart({currency = "€", emptyCartMsg ="Nothing to see here, your cart is empty" }) {
    const {cartItems, setCartItems} = useOutletContext();
    let navigate = useNavigate();

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
        <>
            <ul className={styles.cartContainer}>
                {cartItems.map((item, index) => (

                    <li className={styles.productCard} key={index}>
                            <img src={item.image} />
                            <h1>{item.title}</h1>
                            <h2>{item.amount}</h2>
                            <h2>{(parseFloat(item.price) * parseFloat(item.amount)).toFixed(2)} {currency}</h2>
                            
                            <button onClick={() => handleDelete(index)}>Delete</button>
                        </li>
                    
                ))}
            </ul>
            {cartItems.length === 0 &&
                <div>
                    <div>{emptyCartMsg}</div>
                    <button onClick={() => navigate("/shop")}>Shop now</button>
                </div>
            }
            {cartItems.length > 0 &&
                <div className={styles.buttons}>
                    <button onClick={handlePurchase}>Checkout {sum.toFixed(2)}{currency}</button>
                    <button onClick={() => navigate("/shop")}>Continue Shopping</button>
                </div>}
            
            
        </>
        
    )
}


Cart.propTypes = {
    currency: PropTypes.string,
    emptyCartMsg: PropTypes.string,
}
