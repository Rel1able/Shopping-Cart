import { Link } from "react-router-dom";

export default function ErrorElement() {
    return (
        <div>
            <h1>This page doesn't exist</h1>
            <Link to="/">Go to the Homepage</Link>
        </div>
    )
}