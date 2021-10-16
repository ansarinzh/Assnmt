import {createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { deleteItemReducer, itemListReducer, productAddReducer, singleItemReducer } from './Reducer/Reducer';

const initialState= {};
const reducer = combineReducers ({
    productList: itemListReducer,
    itemSave: productAddReducer,
    singleItem: singleItemReducer,
    deleteItem: deleteItemReducer,
    
})


const store = createStore(reducer, initialState, compose(applyMiddleware(thunk)));
export default store;