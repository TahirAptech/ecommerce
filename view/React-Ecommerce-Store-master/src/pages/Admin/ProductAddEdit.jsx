import React, { useEffect, useState } from 'react'
import { Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { createProduct, updateProduct } from '../../store/actions/productAction';
import Loader from '../../component/Loader';
import { toast } from 'react-toastify';

const MyModal = ({ show, onHide }) => {
    let emptyData = { title: "", price: "", category: "", description: "", rating: "", file: "" };
    const [product, setProduct] = useState(emptyData);
    const dispatch = useDispatch();
    const { ShowLoader } = useSelector(store => store.productReducer);

    const addProduct = (e) => {
        e.preventDefault();
        debugger
        console.log(product);
        let formData = new FormData();
        formData.append('picture', product.file);
        // formData.append('data', product);
        formData.append('data', JSON.stringify(product));
        let msg = "";
        if (show.isUpdate) {
            msg = "Product updated successfully";
            dispatch(updateProduct(show.objForUpdate._id, formData));
        }
        else {
            msg = "Product added successfully";
            dispatch(createProduct(formData));
        }
        toast.success(msg);
        document.getElementById("fileType").value = "";
        setProduct(emptyData);
        onHide();
    }

    useEffect(() => {
        if (show.isUpdate) {
            setProduct(show.objForUpdate);
        }
    }, [show.isUpdate]);

    function close() {
        setProduct(emptyData);
        onHide();
    }

    return (
        <div>
            <Modal
                // {...props}
                show={show.isShow}
                onHide={onHide}
                size="lg"
                backdrop="static"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Add Product
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <section>
                        <form>
                            <div className="form-group">
                                <input type="text" value={product.title} className="form-control my-3" placeholder="Enter title" onChange={e => setProduct({ ...product, title: e.target.value })} />
                            </div>
                            <div className="form-group">
                                <input type="text" value={product.price} className="form-control my-3" placeholder="Enter price" onChange={e => setProduct({ ...product, price: e.target.value })} />
                            </div>
                            <div className="form-group">
                                <input type="text" value={product.category} className="form-control my-3" placeholder="Enter category" onChange={e => setProduct({ ...product, category: e.target.value })} />
                            </div>
                            <div className="form-group">
                                <textarea value={product.description} className="form-control my-3" rows="3" placeholder="Enter description" onChange={e => setProduct({ ...product, description: e.target.value })} />
                            </div>
                            <div className="form-group">
                                <input type="text" value={product.rating} className="form-control my-3" placeholder="Enter rating" onChange={e => setProduct({ ...product, rating: e.target.value })} />
                            </div>
                            <div className="form-group">
                                <input type="file" id="fileType" className="form-control-file my-3" onChange={e => setProduct({ ...product, file: e.target.files[0] })} />
                            </div>
                        </form>
                    </section>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={close} variant="outline-dark">Close</Button>
                    {
                        ShowLoader ? <Loader /> : <button onClick={addProduct} className="btn btn-primary">Save & Close</button>
                    }
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default MyModal;
