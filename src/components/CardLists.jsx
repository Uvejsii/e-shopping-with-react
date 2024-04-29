/* eslint-disable */
import {Suspense, useEffect, useState} from "react";
import ProductCard from "./ProductCard.jsx";

const CardLists = ({filteredProducts}) => {
    return (
        <>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product}/>
                ))}
            </div>
        </>
    )
}
export default CardLists;