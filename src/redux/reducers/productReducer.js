import { createReducer } from "@reduxjs/toolkit";
import { fetchProducts, searchProducts } from "../actions/action";

const product = {
    data: [],
    filteredData: [],
};

const productReducer = createReducer(product, builder => {
    builder
        .addCase(fetchProducts, (state, action) => {
            state.data = action.payload;
            state.filteredData = action.payload;
        })
        .addCase(searchProducts, (state, action) => {
            state.data = state.filteredData.filter(s => {
                return s.title.toLowerCase().includes(action.payload.toLowerCase())
            });
        })
        .addDefaultCase(() => { })
});

export default productReducer;