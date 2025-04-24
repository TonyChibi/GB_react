import { createSlice } from "@reduxjs/toolkit"
import { selectProdObj } from "../../entities/productForm/productFormSlice";

let initialState = {
    products: [],
}

export const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        addProduct: (state, product) => {
            console.log("adding product")
            console.log(product);
            console.log(product.payload)
            state.products.push(product.payload)
            console.log(state.products)
        },
        changeProduct: (state, action) => {
            console.log(state.products.length)
            console.log(action.payload)
            for (let i = 0; i < state.products.length; i++) {
                console.log(state.products[i].id)
                console.log(`payload id: ${action.payload.id}`)
                if (state.products[i].id == action.payload.id) {
                    console.log("apapap")

                    state.products[i] = action.payload.newProduct;
                }
            }
        }

    }
})


export const { addProduct, changeProduct } = productsSlice.actions;
export const selectProducts = (state) => state.products.products;
export default productsSlice.reducer; 