/* eslint-disable */
import {useNavigate} from "react-router-dom";

const CardLists = ({filteredProducts, addToCart}) => {
    const navigate = useNavigate()

    const goToProduct = (productId) => {
        navigate(`/product/${productId}`)
    }

    const onAddToCart = (clickedProduct) => {
        addToCart(clickedProduct)
    }

    return (
        <>
            <div className="row row-cols-1 row-cols-md-3 row-cols-sm-2 g-4">
                {filteredProducts.map((product) => (
                    <div className="col" key={product.id}>
                        <div className="card h-100">
                            <img src={product.image} onClick={() => goToProduct(product.id)}
                                 className="card-img-top img-fluid w-50 h-50 mx-auto"
                                 alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title" onClick={() => goToProduct(product.id)}>{product.title}</h5>
                                <p>${product.price}</p>
                                <div className="ratings d-flex justify-content-between">
                                    <p>Rating Count: {product.rating.count}</p>
                                    <p>Rate: {product.rating.rate}</p>
                                </div>
                                <button className="btn btn-primary w-100" onClick={() => onAddToCart(product)}>Add To
                                    Cart
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}
export default CardLists;