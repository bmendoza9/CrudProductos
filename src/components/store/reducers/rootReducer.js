import { combineReducers } from 'redux';
import productsReducer from './productsReducer';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
    product: productsReducer,
    firestore: firestoreReducer,
});

export default rootReducer