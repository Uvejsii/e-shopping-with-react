/* eslint-disable */
import "../index.css"
import SearchBar from "../components/SearchBar.jsx";
import Filter from "../components/Filter.jsx";
import CardLists from "../components/CardLists.jsx";
import {useEffect, useState} from "react";

const HomePage = () => {
    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])

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

    return (
        <div className="container-fluid">
            <SearchBar searchProduct={searchProduct}/>
            <Filter/>
            <CardLists filteredProducts={filteredProducts}/>
        </div>
    )
}
export default HomePage;