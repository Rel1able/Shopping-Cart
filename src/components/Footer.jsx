import styles from "../styles/Footer.module.css";
import PropTypes from "prop-types";
import { Github } from "lucide-react";

export default function Footer({shopName = "Resembio"}){
    return (
        <footer className={styles.footer}>
            <h1 className={styles.shopName}>{shopName}</h1>
            <h3 className={styles.container}>Made by<a className={styles.madeBy} href="https://github.com/Rel1able"><Github/>Rel1able</a></h3>
        </footer>
    )
}

Footer.propTypes = {
    shopName: PropTypes.string,

}