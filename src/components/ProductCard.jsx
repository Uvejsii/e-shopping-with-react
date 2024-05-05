/* eslint-disable */
import {useNavigate} from "react-router-dom";

const ProductCard = ({product, addToCart}) => {
    const navigate = useNavigate()

    const goToProduct = () => {
        navigate(`/product/${product.id}`)
    }

    const onAddToCart = (clickedProduct) => {
        addToCart(clickedProduct)
    }

    return (
        <div className="col">
            <div className="card h-100">
                <img src={product.image} onClick={goToProduct} className="card-img-top img-fluid w-50 h-50 mx-auto"
                     alt="..."/>
                <div className="card-body">
                    <h5 className="card-title" onClick={goToProduct}>{product.title}</h5>
                    <p>${product.price}</p>
                    <div className="ratings d-flex justify-content-between">
                        <p>Rating Count: {product.rating.count}</p>
                        <p>Rate: {product.rating.rate}</p>
                    </div>
                    <button className="btn btn-primary w-100" onClick={() => onAddToCart(product)}>Add To Cart</button>
                </div>
            </div>
        </div>
    )
}
export default ProductCard;