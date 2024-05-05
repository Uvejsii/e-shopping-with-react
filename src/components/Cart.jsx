/* eslint-disable */
import {Cart2} from "react-bootstrap-icons";
import reactSvg from "../assets/react.svg";
import "../index.css"
import {useEffect, useState} from "react";

const Cart = ({cartItems}) => {
    const [totalQuantity, setTotalQuantity] = useState(0)
    const [showCartItems, setShowCartItems] = useState(false)

    useEffect(() => {
        const total = cartItems.reduce((acc, product) => acc + product.quantity, 0)
        setTotalQuantity(total)
    }, [cartItems]);

    return (
        <div className="cart-container">
            <div className="cart-icon-container position-relative text-end mb-3" onClick={() => setShowCartItems(!showCartItems)}>
                <Cart2 className="fs-2 text-light"/>
                <p className="text-light position-absolute top-0 start-100 translate-middle fw-bold">{totalQuantity}</p>
            </div>
            {cartItems.map((item) => (
                showCartItems && (
                    <div className="cart-items bg-primary-subtle d-flex border border-black" key={item.id}>
                        <div className="cart-item-img border border-danger my-auto">
                            <img src={item.image} alt="product image" className="border added-product-img"/>
                        </div>
                        <div className="cart-items-detail">
                            <p className="m-0">{item.title}</p>
                            <p className="m-0">Price: {item.price} $</p>
                            <p>Quantity - {item.quantity} +</p>
                        </div>
                    </div>
                )
            ))}

        </div>
    )
}
export default Cart;