import { createSlice } from "@reduxjs/toolkit";
import ProductObj from "../product/ProductObj";
import { addProduct } from "../../features/products/productsSlice";
let initialState = {
    display: "none",
    product: null,
    name: "",
    description: "",
    price: "",
    status: false,

}

let productFormSlice = createSlice({
    name: "productForm",
    initialState,
    reducers: {
        changeDisplay: (state) => {
            console.log("first")
            console.log(state.display);

            state.display = (state.display == "none") ? "flex" : "none";
            console.log(state.display);


        },

        setProduct: (state, action) => {
            console.log("setting product");
            console.log(state.product);
            console.log(action)
            let payload = action.payload
            try {
                state.product = payload;
                console.log(state.product);
                state.name = payload.name;
                state.description = payload.description;
                state.price = payload.price;
                state.status = payload.status;
            } catch (e) { console.log(e) }
        },
        setName: (state, action) => {
            state.name = action.payload;
        },

        setDescription: (state, action) => {
            state.description = action.payload;

        },
        setPrice: (state, action) => {
            state.price = action.payload;
        },

        setStatus: (state, action) => {
            state.status = action.payload;
        },


    }

})

export const { changeDisplay, setProduct, setName, setDescription, setPrice, setStatus } = productFormSlice.actions;
export const selectDisplay = (state) => state.productForm.display;
export const selectName = (state) => state.productForm.name;
export const selectDescription = (state) => state.productForm.description;
export const selectPrice = (state) => state.productForm.price;
export const selectStatus = (state) => state.productForm.status;

export const selectProdObj = (state) => state.productForm.product;
export default productFormSlice.reducer;