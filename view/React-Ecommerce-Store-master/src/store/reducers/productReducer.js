import { productActionType } from "../constants/actionTypes";

const INITIAL_STATE = {
    productData: [],
    ShowLoader: false,
}

const productReducer = (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case "ShowLoader":
            return { ...state, ShowLoader: !(state.ShowLoader) };
        case productActionType.CREATE_LIST:
            return { ...state, productData: payload, ShowLoader: false };
        case productActionType.CREATE:
            return { ...state, productData: [payload, ...state.productData], ShowLoader: false };
        case productActionType.UPDATE:
            return { ...state, productData: state.productData.map(prevproduct => prevproduct._id === payload._id ? payload : prevproduct) }
        case productActionType.DELETE:
            return { ...state, productData: state.productData.filter(x => x._id !== payload) }
        default:
            return state;
    }
}
export default productReducer;