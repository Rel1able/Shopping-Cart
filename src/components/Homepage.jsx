import styles from "../styles/Homepage.module.css";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import Button from "./Button.jsx";

export default function Homepage({title = "Welcome to the Resembio", description = "Electronics, clothes and even jewellery? Yes, you can buy it here. "}) {

    let navigate = useNavigate();

    return (
        <div className={styles.pageContainer}>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.container}>
                <h3 className={styles.desc}>
                    {description}
                    <Button addClass={styles.btn} onClick={() => {navigate("/shop")}} text="Shop now"/>
                </h3>
                <img className={styles.img} src="/homepage-pic.jpg"/>
            </div>
        </div>
    )
}

Homepage.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
}