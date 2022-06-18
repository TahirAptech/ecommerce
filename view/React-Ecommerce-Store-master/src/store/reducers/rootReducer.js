import { combineReducers } from 'redux';
import productReducer from './productReducer';
import handleCart from './handleCart';

const rootReducer = combineReducers({
    productReducer: productReducer,
    handleCart: handleCart
});

export default rootReducer;