import styles from "../styles/Button.module.css"
import PropTypes from "prop-types";



export default function Button({ text, onClick, addClass }) {
    let classes = `${styles.btn} ${addClass}`
    return (
        <button className={classes} onClick={onClick}>{text}</button>
    )
}


Button.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
    addClass: PropTypes.any,
}


