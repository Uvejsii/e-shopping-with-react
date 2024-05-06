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
                        <div className="card h-100">
                            <img src={product.image} onClick={() => goToProduct(product.id)}
                                 className="card-img-top img-fluid"
                                 alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title" onClick={() => goToProduct(product.id)}>{product.title}</h5>
                                <p>${product.price}</p>
                                <div className="ratings d-flex justify-content-between">
                                    <p>Rating Count: {product.rating.count}</p>
                                    <p>Rate: {product.rating.rate}</p>
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