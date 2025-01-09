//import { useState, useEffect } from "react";
import styles from "../styles/Shop.module.css";
import { Link, useOutletContext } from "react-router-dom";
import PropTypes from "prop-types";

export default function Shop({errorMsg = "A network error was encountered", sectionName = "Shop", currency = "€"}) {
    const {loading, error, products} = useOutletContext();
    if (loading) return <div>Loading...</div>
    if (error) return <h1>{errorMsg}</h1>

    return (
        <>
            <h1 className={styles.title}>{sectionName}</h1>
            <div className={styles.productsContainer}>
            {products.map(product => (
                <Link to={`${product.id}`} key={product.id}>
                    <div  className={styles.container}>
                        <img src={product.image} />
                        <h3>{product.title}</h3>
                        <h2>{product.price}{currency}</h2>
                        <h2>{product.rating.rate} stars</h2>
                     </div>
                </Link>
                    
            ))}
        </div>
        </>
        
    )
}

Shop.propTypes = {
    errorMsg: PropTypes.string,
    sectionName: PropTypes.string,
    currency: PropTypes.string,
}