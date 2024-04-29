/* eslint-disable */
import {useState} from "react";

const Filter = ({categoryFilter}) => {
    const [category, setCategory] = useState("Filter All")

    const onCategoryChange = (e) => {
        const categoryToFilter = e.target.value

        setCategory(categoryToFilter)
        categoryFilter(categoryToFilter)
    }

    return (
        <select value={category} onChange={onCategoryChange}>
            <option value="">Filter All</option>
            <option value="men's clothing">Mens Clothing</option>
            <option value="women's clothing">Womens Clothing</option>
            <option value="electronics">Electronics</option>
            <option value="jewelery">Jewelery</option>
        </select>
    )
}
export default Filter;