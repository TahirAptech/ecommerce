import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCart } from '../store/actions/cartAction';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';

const Product = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const { productData, ShowLoader } = useSelector(s => s.productReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        if (productData && productData.length > 0) {
            console.log("Calling:", product);

            setTimeout(() => dispatch({ type: "ShowLoader" }), 150)

            const data = productData.filter(x => x._id == id);
            console.log("Calling data:", data);
            setProduct(data[0]);
            dispatch({ type: "ShowLoader" });
        }
        else { console.log("else", productData); }
    }, [productData]);


    const addProduct = (product) => {
        dispatch(addCart(product));
    }

    const Loading = () => {
        return (
            <>
                <div className="col-md-6">
                    <Skeleton height={400} />
                </div>
                <div className="col-md-6" style={{ lineHeight: 2 }}>
                    <Skeleton height={50} width={300} />
                    <Skeleton height={75} />
                    <Skeleton height={25} width={150} />
                    <Skeleton height={50} />
                    <Skeleton height={150} />
                    <Skeleton height={50} width={100} />
                    <Skeleton height={50} width={100} style={{ marginLeft: 6 }} />
                </div>
            </>
        )
    }

    const ShowProduct = () => {

        return (
            <>
                <div className="col-md-6">
                    <img src={product?.image?.path} alt={product.title} height="400px" width="400px" />
                </div>
                <div className="col-md-6">
                    <h4 className="text-uppercase text-black-50">
                        {product.category}
                    </h4>
                    <h1 className="display-5">{product.title}</h1>
                    <p className="lead fw-bolder">
                        Rating {product.rating && product.rating}
                        <i className="fa fa-star"></i>
                    </p>
                    <h3 className="display-6 fw-bold my-4">
                        $ {product.price}
                    </h3>
                    <p className="lead">{product.description}</p>
                    <button className="btn btn-outline-dark" onClick={() => addProduct(product)}> {/* px-4 py-2 */}
                        Add to Cart
                    </button>
                    <Link to="/cart" className="btn btn-dark ms-2">
                        Go to Cart
                    </Link>
                </div>
            </>
        )
    }

    return (
        <div>
            <div className="container py-5">
                <div className="row py-4">
                    {ShowLoader ? <Loading /> : <ShowProduct />}
                </div>
            </div>
        </div>
    );
}

export default Product;
