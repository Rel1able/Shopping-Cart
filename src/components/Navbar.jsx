import { Link } from "react-router-dom";
import styles from "../styles/Navbar.module.css";
import PropTypes from "prop-types";

export default function Navbar({homepage = "Home", shop = "Shop", cart = "Cart"}) {
    return (
        <nav>
            <ul className={styles.container}>
                <Link to="/"><li>{homepage}</li></Link>
                <Link to="shop"><li>{shop}</li></Link>
                <Link to="cart"><li>{cart}</li></Link>
            </ul>
        </nav>
    )
}

Navbar.propTypes = {
    homepage: PropTypes.string,
    shop: PropTypes.string,
    cart: PropTypes.string,
}