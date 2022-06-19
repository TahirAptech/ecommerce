import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import { useSelector } from "react-redux";

const Products = () => {

  const [filter, setFilter] = useState([]);

  const store = useSelector(s => s.productReducer);

  useEffect(() => {
    if (store.productData.length > 0) {
      setFilter(store.productData);
      console.log("Product length:", store.productData.length);

    }
    console.log("Product useEffect Call first", store.productData.length);
  }, [store.productData]);

  const filterProduct = (cat) => {
    const updatedList = cat ? store.productData.filter(x => x.category === cat) : store.productData;
    setFilter(updatedList);
  }

  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
      </>
    );
  };

  const ShowProducts = () => {
    //let cardFun = 
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <button className="btn btn-outline-dark me-2" onClick={() => setFilter(store.productData)}>All</button>
          <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("men's clothing")}>Men's Clothing</button>
          <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("women's clothing")}>
            Women's Clothing
          </button>
          <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("jewelery")}>Jewelery</button>
          <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("electronics")}>Electronic</button>
        </div>
        {
          filter.map((product, ind) => {
            return (
              <div key={ind} className="col-xl-3 col-lg-4 col-md-6 mb-4">
                <div class="card h-100 text-center p-4" key={product._id}>
                  <img src={product.image.path} class="card-img-top" alt={product.title} height="250px" />
                  <div class="card-body">
                    <h5 class="card-title mb-0">{product.title.substring(0, 12)}...</h5>
                    <p class="card-text lead fw-bold">
                      ${product.price}
                    </p>
                    <Link to={`/products/${product._id}`} class="btn btn-outline-dark">
                      Buy Now
                    </Link>
                  </div>
                </div>
              </div>
            );
          })
        }
      </>
    );
  };

  return (
    <div className="container my-5 py-5">
      <div className="row">
        <div className="col-12 mb-5">
          <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
          <hr />
        </div>
      </div>
      <div className="row justify-content-center">
        {store.ShowLoader ? <Loading /> : <ShowProducts />}
      </div>
    </div>
  );
};

export default Products;
