import { createAction } from "@reduxjs/toolkit";
import actionTypes from "./action-types";

export const fetchProducts = createAction(actionTypes.FETCH_PRODUCTS);
export const productToCart = createAction(actionTypes.PRODUCT_TO_CART);
export const searchProducts = createAction(actionTypes.SEARCH_PRODUCTS);
export const productCartFetching = createAction(actionTypes.PRODUCT_CART_FETCHING);
export const productCartInc = createAction(actionTypes.PRODUCT_CART_INC);
export const productCartDec = createAction(actionTypes.PRODUCT_CART_DEC);
export const productCartRemove = createAction(actionTypes.PRODUCT_CART_REMOVE);