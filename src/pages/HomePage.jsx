/* eslint-disable */
import "../index.css"
import SearchBar from "../components/SearchBar.jsx";
import Filter from "../components/Filter.jsx";
import CardLists from "../components/CardLists.jsx";
import {useEffect, useState} from "react";
import Cart from "../components/Cart.jsx";

const HomePage = () => {
    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])
    const [cartItems, setCartItems] = useState([])
    // const [quantity, setQuantity] = useState(0)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('https://fakestoreapi.com/products')
                const data = await res.json()
                setProducts(data)
                setFilteredProducts(data)
            } catch (error) {
                console.log('Error fetching products', error)
            }
        }

        fetchData()
    }, [])

    const searchProduct = (searchQuery) => {
        if (!searchQuery || !products || !products.length) {
            setFilteredProducts(products)
            return;
        }

        const filtered = products.filter((product) => {
            return product.title.toLowerCase().includes(searchQuery.toLowerCase());
        });

        setFilteredProducts(filtered);
    }

    const categoryFilter = (category) => {
        const categoryFilter = products.filter((product) => {
            return product.category.includes(category)
        })

        setFilteredProducts(categoryFilter)
    }

    const addToCart = (product) => {
        const addedItems = [...cartItems]
        const itemIndex = addedItems.findIndex(i => i.id === product.id)

        if (itemIndex !== -1) {
            addedItems[itemIndex].quantity++
        } else {
            product.quantity = 1
            addedItems.push(product)
        }

        setCartItems(addedItems)
        console.log('Cart', addedItems)
    }

    const increaseQuantity = (product) => {
        const addedItems = [...cartItems]
        const clickedItem = addedItems.findIndex(i => i.id === product.id)

        if (clickedItem !== -1) {
            addedItems[clickedItem].quantity++
            setCartItems(addedItems)
        }
    }

    const decreaseQuantity = (product) => {
        const addedItems = [...cartItems]
        const clickedItem = addedItems.findIndex(i => i.id === product.id)

        if (clickedItem !== -1) {
            if (addedItems[clickedItem].quantity === 1) return

            addedItems[clickedItem].quantity--
            setCartItems(addedItems)
        }
    }

    const removeFromCart = (pId) => {
        const addedItems = [...cartItems]
        const updatedCart = addedItems.filter(item => item.id !== pId)
        setCartItems(updatedCart)
    }

    return (
        <>
            <nav className="navbar bg-primary fixed-top">
                <div className="container my-2 position-relative">
                    <div className="search-and-filter-container d-flex justify-content-between w-75">
                        <Filter categoryFilter={categoryFilter}/>
                        <SearchBar searchProduct={searchProduct}/>
                    </div>
                    <div className="position-absolute end-0 top-0 z-1 w-25">
                        <Cart cartItems={cartItems} increaseQuantity={increaseQuantity}
                              decreaseQuantity={decreaseQuantity} removeFromCart={removeFromCart}/>
                    </div>
                </div>
            </nav>
            <div className="container-fluid products-container">
                {filteredProducts.length > 0 ? <CardLists filteredProducts={filteredProducts} addToCart={addToCart}/>
                    : <h1 className="text-center">LOADING...</h1>}
            </div>
        </>
    )
}
export default HomePage;