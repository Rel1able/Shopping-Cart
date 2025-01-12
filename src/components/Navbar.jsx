import { Link } from "react-router-dom";
import styles from "../styles/Navbar.module.css";
import PropTypes from "prop-types";
import { ShoppingCart } from "lucide-react";

export default function Navbar({ shopName = "Fake Shop",homepage = "Home", shop = "Shop", cartCount}) {
    return (
        <nav>
            <ul className={styles.container}>
                <Link className={styles.linkStyle} to="/"><h2 className={styles.shopName}>{shopName}</h2></Link>
                <div className={styles.linksContainer}>
                    <div className={styles.mainLinks}>
                        <Link className={styles.linkStyle} to="/"><li>{homepage}</li></Link>
                        <Link className={styles.linkStyle} to="shop"><li>{shop}</li></Link>
                    </div>
                    
                    <div className={styles.cartContainer}>
                        <Link className={styles.linkStyle} to="cart"><li><ShoppingCart/></li></Link>
                        <div className={styles.itemsInCart}>{cartCount}</div>
                    </div>

                    
                </div>
                
            </ul>
        </nav>
    )
}

Navbar.propTypes = {
    shopName: PropTypes.string,
    homepage: PropTypes.string,
    shop: PropTypes.string,
    cart: PropTypes.string,
    cartCount: PropTypes.number,
}