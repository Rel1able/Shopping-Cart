import styles from "../styles/Homepage.module.css";
import PropTypes from "prop-types";

export default function Homepage({title = "Welcome to my Shop", description = "Buy some really nice clothes"}) {
    return (
        <div className={styles.pageContainer}>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.container}>
                <h3>{description}</h3>
                <img className={styles.img} src="/homepage-pic.jpg"/>
            </div>
        </div>
    )
}

Homepage.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
}