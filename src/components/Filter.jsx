/* eslint-disable */
import {useState} from "react";

const Filter = ({categoryFilter}) => {
    const [category, setCategory] = useState("")

    const onCategoryChange = (e) => {
        e.preventDefault()
        const categoryToFilter = e.target.value

        setCategory(categoryToFilter)
        categoryFilter(categoryToFilter)
    }

    return (
        <select value={category} onChange={onCategoryChange} className="border-0 rounded fw-medium select-container">
            <option value="filter all">Filter All</option>
            <option value="men's clothing">Mens Clothing</option>
            <option value="women's clothing">Womens Clothing</option>
            <option value="electronics">Electronics</option>
            <option value="jewelery">Jewelery</option>
        </select>
    )
}
export default Filter;