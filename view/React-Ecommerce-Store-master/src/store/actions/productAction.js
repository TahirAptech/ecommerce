// import * as api from '../apiConsumer';
import api from '../apiConsumer';
import { productActionType } from '../constants/actionTypes';
const { CREATE, UPDATE, DELETE, CREATE_LIST } = productActionType;

export const getProducts = (id) => async (dispatch) => {
    try {
        dispatch({ type: "ShowLoader" });
        const { data } = await api.Get(id ? `product/${id}` : "product");
        dispatch({ type: CREATE_LIST, payload: data });
    } catch (error) {
        console.log(error.message);
        dispatch({ type: "ShowLoader" });
    }
}

export const createProduct = (product) => async (dispatch) => {
    try {
        dispatch({ type: "ShowLoader" });
        const { data } = await api.Post("product/", product);
        console.log(data);
        dispatch({ type: CREATE, payload: data });
    } catch (error) {
        console.log(error);
        dispatch({ type: "ShowLoader" });
    }
}

export const updateProduct = (id, product) => async (dispatch) => {
    try {
        const { data } = await api.Put("product/" + id, product);
        console.log(data);
        dispatch({ type: UPDATE, payload: data });
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteProduct = (id) => async (dispatch) => {
    try {
        await api.Delete("product/" + id);
        dispatch({ type: DELETE, payload: id });
    } catch (error) {
        console.log(error.message);
    }
}