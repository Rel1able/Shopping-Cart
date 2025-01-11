import styles from "../styles/Footer.module.css";

export default function Footer({shopName = "Shop", msg = "thank you for coming"}){
    return (
        <footer className={styles.footer}>
            <h1>{shopName}</h1>
            <h3>{msg}</h3>
        </footer>
    )
}