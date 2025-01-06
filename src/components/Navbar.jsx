import { Link } from "react-router-dom";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
    return (
        <nav>
            <ul className={styles.container}>
                <Link to="/"><li>Home</li></Link>
                <Link to="shop"><li>Shop</li></Link>
                <Link to="cart"><li>Cart</li></Link>
            </ul>
        </nav>
    )
}