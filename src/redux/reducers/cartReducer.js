import { createReducer } from "@reduxjs/toolkit";
import { productCartDec, productCartFetching, productCartInc, productCartRemove, productToCart } from "../actions/action";

const cart = {
    cartData: [],
    allPrice: 0,
};

const cartReducer = createReducer(cart, builder => {
    builder
        .addCase(productToCart, (state, action) => {
            const newItem = action.payload;
            const cart = state.cartData.find(f => f.title === newItem.title);

            if (!cart) {
                state.cartData.push({
                    id: newItem.id,
                    img: newItem.img,
                    title: newItem.title,
                    price: newItem.price,
                    oldPrice: newItem.price,
                    quantity: 1,
                });

                state.allPrice += newItem.price;
            } else {
                cart.quantity++;
                cart.price += newItem.price;
                state.allPrice += newItem.price;
            }

            localStorage.setItem("cartItems", JSON.stringify(state.cartData));
            localStorage.setItem("allPrice", state.allPrice);
        })
        .addCase(productCartFetching, (state) => {
            const cartDataLocal = localStorage.getItem("cartItems");
            const allPrice = localStorage.getItem("allPrice");

            if (cartDataLocal) {
                state.cartData = JSON.parse(cartDataLocal);
            };

            if (allPrice) {
                state.allPrice = +allPrice;
            }
        })
        .addCase(productCartInc, (state, action) => {
            const newItem = action.payload;
            const cart = state.cartData.find(f => f.title === newItem.title);

            cart.quantity++;
            cart.price += newItem.oldPrice;
            state.allPrice += newItem.oldPrice;
            localStorage.setItem("cartItems", JSON.stringify(state.cartData));
            localStorage.setItem("allPrice", state.allPrice);
        })
        .addCase(productCartDec, (state, action) => {
            const newItem = action.payload;
            const cart = state.cartData.find(f => f.title === newItem.title);
            cart.quantity--;
            cart.price -= newItem.oldPrice;
            state.allPrice -= newItem.oldPrice;

            if (cart.quantity < 2) {
                state.cartData = state.cartData.filter(item => {
                    return item.quantity > 0
                })
            }

            localStorage.setItem("cartItems", JSON.stringify(state.cartData));
            localStorage.setItem("allPrice", state.allPrice);
        })
        .addCase(productCartRemove, (state, action) => {
            const findCartPrice = state.cartData.find(f => f.title === action.payload.title);
            state.allPrice -= findCartPrice.price;
            localStorage.setItem("allPrice", state.allPrice);
            state.cartData = state.cartData.filter(item => {
                return item.id !== action.payload.id
            });


            localStorage.setItem("cartItems", JSON.stringify(state.cartData));
        })
        .addDefaultCase(() => { })
});

export default cartReducer;
