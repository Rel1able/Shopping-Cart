import { useOutletContext } from "react-router-dom";

export default function Cart() {
    const [cartItems] = useOutletContext();
    return (
        <ul>
            {cartItems.map((item, id) => (
                <li key={id}>
                    <h1>{item.title}</h1>
                    <h2>{item.price}</h2>
                    <img src={item.image}/>
                </li>
            ))}
        </ul>
    )
}