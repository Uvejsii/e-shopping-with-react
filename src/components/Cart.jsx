/* eslint-disable */
import {Cart2} from "react-bootstrap-icons";
import "../index.css"
import {useEffect, useState} from "react";
import {Sidebar} from 'primereact/sidebar';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart = ({increaseQuantity, decreaseQuantity, removeFromCart}) => {
    const [totalQuantity, setTotalQuantity] = useState(0)
    const [showCartItems, setShowCartItems] = useState(false)
    // const [totalBeforeTax, setTotalBeforeTax] = useState(0)

    const items = JSON.parse(localStorage.getItem('cartItems')) || []

    useEffect(() => {
        const totalProductsQuantity = items.reduce((acc, product) => acc + product.quantity, 0)
        setTotalQuantity(totalProductsQuantity)
    }, [items]);

    // useEffect(() => {
    //     const priceBeforeTax = items.reduce((acc, product) => acc + product.price, 0)
    //     setTotalBeforeTax(priceBeforeTax)
    // }, [totalQuantity]);

    const onIncreaseQuantity = (item) => {
        increaseQuantity(item)
    }

    const onDecreaseQuantity = (item) => {
        decreaseQuantity(item)
    }

    const onRemoveFromCart = (iId) => {
        removeFromCart(iId)
        toast.success('Removed From Cart!', {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }

    return (
        <div className="cart-container">
            <div className="cart-icon-container position-relative text-end"
                 onClick={() => setShowCartItems(!showCartItems)}>
                <Cart2 className="fs-2 text-light"/>
                <p className="text-light position-absolute top-0 start-100 translate-middle fw-bold">{totalQuantity}</p>
            </div>
            <Sidebar visible={showCartItems} position="right" onHide={() => setShowCartItems(false)}
                     className="cart-sidebar">
                {items.length < 1 ?
                    <h4 className="bg-primary-subtle h-25 fw-bold d-flex justify-content-center align-items-center">
                        Your cart is empty
                    </h4>
                    : items.map((item) => (
                        showCartItems && (
                            <div
                                className="cart-items p-2 py-4 bg-primary-subtle d-flex gap-2 border border-dark-subtle"
                                key={item.id}>
                                <div className="cart-item-img h-25">
                                    <img src={item.image} alt="product image"
                                         className="added-product-img rounded-3"/>
                                </div>
                                <div className="cart-items-detail w-100">
                                    <p className="m-0 cart-item-title fw-semibold">{item.title}</p>
                                    <p className="m-0 fw-semibold">Price: <span
                                        className="fw-bold">$ {item.price}</span>
                                    </p>
                                    <p className="m-0 fw-semibold">
                                        Quantity <span className="fw-bold">
                                <button
                                    className="btn btn-primary py-0 px-2 me-1"
                                    onClick={() => onDecreaseQuantity(item)}>-</button>
                                        {item.quantity}
                                        <button
                                            className="btn btn-primary py-0 px-2 ms-1"
                                            onClick={() => onIncreaseQuantity(item)}>+</button></span>
                                    </p>
                                    <button
                                        className="remove-btn btn btn-danger w-100 fw-bold mt-2"
                                        onClick={() => onRemoveFromCart(item.id)}
                                    >
                                        Remove from cart
                                    </button>
                                </div>
                            </div>
                        )
                    ))
                }
                {/*{items.length > 0 ?*/}
                {/*    <div className="total-container bg-info">*/}
                {/*        <p>Products ({totalQuantity}): $ {totalBeforeTax}</p>*/}
                {/*    </div>*/}
                {/*    : null}*/}
            </Sidebar>
        </div>
    )
}
export default Cart;