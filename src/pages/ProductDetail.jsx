import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import "../index.css"

const ProductDetail = () => {
    const {id} = useParams()
    const [product, setProduct] = useState({})
    const navigate = useNavigate()

    useEffect(() => {
        const getData = async () => {
            const res = await fetch(`https://fakestoreapi.com/products/${id}`)
            const data = await res.json()
            setProduct(data)
        }

        getData()
    }, [id]);

    const goToHomePage = () => {
        navigate("/")
    }

    return (
        <>
            <div className="container mb-5 mt-4">
                <button className="btn btn-primary fw-bold mb-4" onClick={goToHomePage}>Go Back</button>
                <div className="row">
                    <div className="col-12">
                        <div className="card border-primary border-2">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={product.image} className="product-detail-card-img img-fluid rounded-start"
                                         alt=""/>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body p-xl-5 p-sm-4">
                                        <h1 className="card-title text-primary-emphasis">{product.title}</h1>
                                        <h5 className="card-text my-4">{product.description}</h5>
                                        <h3 className="card-text">Price:
                                            <span
                                                className="fw-bold text-warning-emphasis"> {product.price} &euro;</span>
                                        </h3>
                                        <div className="mt-5">
                                            <button className="btn btn-primary fw-bold w-100 mt-5">Add To Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ProductDetail;