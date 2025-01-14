import styles from "../styles/Shop.module.css";
import { Link, useOutletContext } from "react-router-dom";
import PropTypes from "prop-types";
import { Star, Search } from "lucide-react";
import SearchBar from "./SearchBar.jsx";
import { useState } from "react";

export default function Shop({errorMsg = "A network error was encountered", sectionName = "Shop", currency = "€"}) {
    const [inputValue, setInputValue] = useState("");
    const { loading, error, products } = useOutletContext();
    if (loading) return <div className={styles.loading}>Loading...</div>
    if (error) return <h1>{errorMsg}</h1>
    
    function handleInputChange(e) {
        setInputValue(e.target.value);
    }

    const productsToFilter = !inputValue
        ? products
        : products.filter((product) => 
            product.title.toLowerCase().includes(inputValue.toLowerCase()))


    return (
        <>
            <h1 className={styles.title}>{sectionName}</h1>
            <div className={styles.searchBar}>
                <Search color="white"/>
                <SearchBar className={styles.searchInput}  value={inputValue} onChange={handleInputChange} />
            </div>
            
            <div className={styles.productsContainer}>
                {productsToFilter.map(product => (
                    
                            <Link className={styles.linkStyle} to={`${product.id}`} key={product.id} >
                                <div  className={styles.cardContainer}>
                                    <img src={product.image} />
                                    <h3 className={styles.productName}>{product.title}</h3>
                                    <h2 className={styles.productPrice}>{product.price} {currency}</h2>
                            <h2 className={styles.rating}>{product.rating.rate}<Star fill="rgb(252, 235, 0)" color="rgb(223, 223, 13)" /></h2>
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