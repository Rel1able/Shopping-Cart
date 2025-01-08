import { useOutletContext, useNavigate } from "react-router-dom";
import styles from "../styles/Cart.module.css"

export default function Cart() {
    const [cartItems, setCartItems] = useOutletContext();
    let navigate = useNavigate();

    function handlePurchase() {
        navigate("/");
        alert("Your purchase was successful");
        setCartItems([]);
    }

    let sum = 0;

    function generateTotal() {
        cartItems.map((item) => sum += (parseFloat(item.price) * parseFloat(item.amount)));
    }

    if (cartItems) generateTotal();
    
    return (
        <>
            <ul className={styles.cartContainer}>
                {cartItems.map((item, id) => (

                    <li key={id}>
                        <h1>{item.title}</h1>
                        <h2>{item.amount}</h2>
                        <h2>{parseFloat(item.price) * parseFloat(item.amount)}€</h2>
                        <img src={item.image}/>
                    </li>
                ))}
            </ul>
            {cartItems.length === 0 && <div>Nothing to see here, your cart is empty</div>}
            <button onClick={handlePurchase}>Checkout {sum}€</button>
        </>
        
    )
}