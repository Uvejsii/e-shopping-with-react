import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";

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
        <div className="container-fluid">
            {product ? (
                <>
                    <button className="btn btn-primary my-3" onClick={goToHomePage}>Go Back</button>
                    <div className="">
                        <img src={product.image} alt="" className="img-fluid w-25"/>
                        <h1>{product.title}</h1>
                        <p>Price: $ {product.price}</p>
                        <p>{product.description}</p>
                        <p>Category: {product.category}</p>
                    </div>
                </>
            ) : (<h1>LOADING...</h1>)}
        </div>
    )
}
export default ProductDetail;