/* eslint-disable */
import {useNavigate} from "react-router-dom";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const CardLists = ({filteredProducts, addToCart}) => {
    const navigate = useNavigate()

    const goToProduct = (productId) => {
        navigate(`/product/${productId}`)
    }

    const onAddToCart = (clickedProduct) => {
        addToCart(clickedProduct)
        toast.success('Added To Cart!', {
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
        <>
            <ToastContainer limit={1}/>
            <div className="row row-cols-1 row-cols-xl-4 row-cols-md-3 row-cols-sm-2 g-4">
                {filteredProducts.map((product) => (
                    <div className="col" key={product.id}>
                        <div className="card home-card h-100">
                            <div className="image-container position-relative">
                                <img src={product.image} onClick={() => goToProduct(product.id)}
                                     className="card-img-top img-fluid"
                                     alt="..."/>
                                <div
                                    onClick={() => goToProduct(product.id)}
                                    className="view-product position-absolute bottom-0 w-100 h-100 d-flex
                                     justify-content-center align-items-center opacity-0">
                                    <p className="m-0 fw-bold text-dark">View Product</p>
                                </div>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title" onClick={() => goToProduct(product.id)}>{product.title}</h5>
                                <p className="fw-bold text-primary-emphasis">${(product.price).toFixed(2)}</p>
                                <div className="ratings d-flex justify-content-between text-primary-emphasis fw-medium">
                                    <p>
                                        Rating Count:
                                        <span className="text-warning-emphasis"> {product.rating.count}</span>
                                    </p>
                                    <p>Rate: <span className="text-warning-emphasis">{product.rating.rate}</span></p>
                                </div>
                                <div>
                                    <button className="btn btn-primary w-100 fw-medium"
                                            onClick={() => onAddToCart(product)}>
                                        Add To Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}
export default CardLists;