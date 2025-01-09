import { useOutletContext, useNavigate } from "react-router-dom";
import styles from "../styles/Cart.module.css"

export default function Cart() {
    const {cartItems, setCartItems} = useOutletContext();
    let navigate = useNavigate();

    function handlePurchase() {
        navigate("/");
        alert("Your purchase was successful");
        setCartItems([]);
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

                    <li key={index}>
                        <h1>{item.title}</h1>
                        <h2>{item.amount}</h2>
                        <h2>{(parseFloat(item.price) * parseFloat(item.amount)).toFixed(2)}€</h2>
                        <img src={item.image} />
                        <button onClick={() => handleDelete(index)}>Delete</button>
                    </li>
                ))}
            </ul>
            {cartItems.length === 0 && <div>Nothing to see here, your cart is empty</div>}
            <button onClick={handlePurchase}>Checkout {sum.toFixed(2)}€</button>
        </>
        
    )
}