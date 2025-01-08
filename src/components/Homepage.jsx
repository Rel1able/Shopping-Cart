import styles from "../styles/Homepage.module.css";

export default function Homepage() {
    return (
        <>
            <h2 className={styles.title}>Welcome to my Shop</h2>
            <div className={styles.container}>
                <h3>Buy some really nice clothes</h3>
                <img className={styles.img} src="/homepage-pic.jpg"/>
            </div>
        </>
    )
}