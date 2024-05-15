/* eslint-disable */
import {Cart2} from "react-bootstrap-icons";
import "../index.css"
import {useEffect, useState} from "react";
import {Sidebar} from 'primereact/sidebar';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import button from "bootstrap/js/src/button.js";

const Cart = ({increaseQuantity, decreaseQuantity, removeFromCart, removeAllProducts}) => {
    const [totalQuantity, setTotalQuantity] = useState(0)
    const [showCartItems, setShowCartItems] = useState(false)
    const [tax, setTax] = useState(0)
    const [totalBeforeTax, setTotalBeforeTax] = useState(0)
    const [totalAfterTax, setTotalAfterTax] = useState(0)

    const items = JSON.parse(localStorage.getItem('cartItems')) || []

    useEffect(() => {
        const totalProductsQuantity = items.reduce((acc, product) => acc + product.quantity, 0)
        setTotalQuantity(totalProductsQuantity)
    }, [items]);

    useEffect(() => {
        const priceBeforeTax = items.reduce((acc, product) => acc + (product.price * product.quantity), 0)
        setTotalBeforeTax(priceBeforeTax.toFixed(2))

        const taxResult = (priceBeforeTax * 0.05).toFixed(2)
        setTax(taxResult)

        const priceAfterTax = (parseFloat(priceBeforeTax) + parseFloat(taxResult)).toFixed(2)
        setTotalAfterTax(priceAfterTax)
    }, [totalQuantity]);

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

    const onRemoveAllProducts = () => {
        removeAllProducts()
        toast.info('All Products Removed From Cart!', {
            position: "top-right",
            autoClose: 1500,
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
                                        className="fw-bold">$ {(item.price).toFixed(2)}</span>
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
                {items.length > 0 ?
                    <>
                        <button className="btn btn-danger w-100 rounded-0 fw-medium shadow"
                                onClick={onRemoveAllProducts}
                        >
                            Remove All Products
                        </button>
                        <div
                            className="total-container bg-primary border border-secondary rounded-bottom-3 fw-medium text-light p-2 shadow">
                            <div className="d-flex align-items-center justify-content-between">
                                <p className="m-0">Products
                                    (<span className="text-decoration-underline">{totalQuantity}</span>):
                                </p>
                                <p className="m-0">$ {totalBeforeTax}</p>
                            </div>
                            <div className="d-flex align-items-center justify-content-between my-2">
                                <p className="m-0">TAX (5%):</p>
                                <p className="m-0">$ {tax}</p>
                            </div>
                            <hr/>
                            <div className="d-flex align-items-center justify-content-between">
                                <h5 className="m-0">Order total:</h5>
                                <h5 className="m-0">$ {totalAfterTax}</h5>
                            </div>
                        </div>
                    </>
                    : null}
            </Sidebar>
        </div>
    )
}
export default Cart;