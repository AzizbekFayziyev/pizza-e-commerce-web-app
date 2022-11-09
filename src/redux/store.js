import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reducers/cartReducer";
import productReducer from "./reducers/productReducer";

const store = configureStore({
    reducer: combineReducers({
        product: productReducer,
        cart: cartReducer,
    })
});

export default store;