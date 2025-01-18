import { useParams, useOutletContext, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "../styles/SingleProduct.module.css";
import PropTypes from "prop-types";
import { Star } from "lucide-react";
import Button from "./Button.jsx";

export default function SingleProduct({currency = "€"}) {
    const [product, setProduct] = useState(undefined);
    const [loading, setLoading] = useState(true);
    const [amount, setAmount] = useState(1);
    const { productId } = useParams();
    const { cartItems, setCartItems, products } = useOutletContext();
    const navigate = useNavigate();

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
            navigate("/cart");
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
        <div className={styles.mainContainer}>
            <div className={styles.container}>
                <div className={styles.headerContainer}>
                    <img className={styles.productImage} src={product.image} />
                    <div className={styles.titleContainer}>
                        <h1>{product.title}</h1>
                        <h2>{amount > 0 ? product.price * amount : product.price} {currency}</h2>
                        <h3 className={styles.description}>{product.description}</h3>
                         <h2 className={styles.rating}>{product.rating.rate} <Star fill="gold" color="gold" /></h2>
                        <h2  className={styles.quantityContainer}><Button addClass={styles.quantityBtn} onClick={handleDecrement} text="-"/> <div  className={styles.quantity}>{amount} </div> <Button addClass={styles.quantityBtn} onClick={handleIncrement} text="+" /></h2>
                    </div>
                </div>
                <div className={styles.buttons}>
                    <Button onClick={handleAddToCart} text="Add to the cart"/>
                </div>
            </div>
        </div>
    )
}

SingleProduct.propTypes = {
    currency: PropTypes.string,
}