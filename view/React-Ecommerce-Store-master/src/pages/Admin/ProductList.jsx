import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import MyModal from "./ProductAddEdit";
import { deleteProduct } from "../../store/actions/productAction";
import Loader from "../../component/Loader";
import { toast } from "react-toastify";

const ProductAddEdit = () => {
    const [modalShow, setModalShow] = useState({ isShow: false, objForUpdate: {}, isUpdate: false });
    const [showLoader, setShowLoader] = useState(false);
    const { productData } = useSelector(store => store.productReducer);
    const dispatch = useDispatch();

    const deleteThisProduct = (id) => {
        if (window.confirm("Confirm to delete?")) {
            setShowLoader(true);
            dispatch(deleteProduct(id));
            setShowLoader(false);
            toast("Record deleted successfully!");
        }
    }

    return (
        <>
            <div style={{ width: "95%", margin: "0 auto" }}>
                <br />
                <Button variant="primary" className="my-3" onClick={() => setModalShow({ isShow: true, objForUpdate: {}, isUpdate: false })}> Add New </Button>
                <table className={`table table-striped table-bordered border`} style={{ backgroundColor: "#FFF" }}>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Image</th>
                            <th>Price</th>
                            <th>Category</th>
                            <th>Description</th>
                            <th>Rating</th>
                            <th align="center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            productData.map((p, i) => {
                                return (
                                    <tr key={i}>
                                        <td>{p.title}</td>
                                        <td><img src={p?.image?.path} width="100" /></td>
                                        <td>{p.price}</td>
                                        <td>{p.category}</td>
                                        <td>{p.description}</td>
                                        <td>{p.rating}</td>
                                        <td>
                                            <div style={{ display: "flex" }}>
                                                <Button variant="primary" className="m-1" onClick={() => setModalShow({ isShow: true, objForUpdate: p, isUpdate: true })}> Edit </Button>
                                                {
                                                    showLoader ? <Loader /> : <Button variant="danger" className="m-1" onClick={() => deleteThisProduct(p._id)}> Delete </Button>
                                                }
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
            <MyModal show={modalShow} onHide={() => setModalShow(false)} />
        </>
    )
}

export default ProductAddEdit;
