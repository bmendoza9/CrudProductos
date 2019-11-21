import { combineReducers } from 'redux';
import productsReducer from './productsReducer';
import { firestoreReducer } from 'redux-firestore';
import getProductReducer from './getProductReducer';

const rootReducer = combineReducers({
    product: productsReducer,
    firestore: firestoreReducer,
    getProduct: getProductReducer,
});

export default rootReducer