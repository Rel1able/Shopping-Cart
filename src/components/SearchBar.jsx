
import PropTypes from "prop-types";

export default function SearchBar({className, value, onChange}) {


    return (
        <div>

            <input placeholder="Search for a product..." className={className} value={value} onChange={onChange} type="text"/>
        </div>
        
    )
}


SearchBar.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
    className: PropTypes.any,
}