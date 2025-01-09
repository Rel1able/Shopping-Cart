import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function ErrorElement({errorMsg = "This page doesn't exist", redirectMsg = "Go to the Homepage"}) {
    return (
        <div>
            <h1>{errorMsg}</h1>
            <Link to="/">{redirectMsg}</Link>
        </div>
    )
}


ErrorElement.propTypes = {
    errorMsg: PropTypes.string,
    redirectMsg: PropTypes.string,
}

