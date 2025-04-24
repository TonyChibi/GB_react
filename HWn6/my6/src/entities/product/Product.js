import { useState } from "react";
import ProductForm from "../productForm/ProductForm"
import { useDispatch } from "react-redux";
import { changeDisplay, setAction, setProduct } from "../productForm/productFormSlice";
import { changeProduct, } from "../../features/products/productsSlice";

function Product({ prodObj }) {

    let product = prodObj;

    let dispatch = useDispatch();

    function handleModify() {
        dispatch(changeDisplay());
        dispatch(setProduct(product));
    }

    return (
        <div className="product" >
            <h2 className="product__name">{prodObj.name}</h2>
            <p className="product__description">{prodObj.description}</p>
            <h3 className="product__price">{prodObj.price}</h3>
            <button className="product_button" id="purchase" onClick={console.log} disabled={prodObj.status ? false : true} >purchase</button>
            <button className="product__button" id="modify" onClick={handleModify} >modify</button>
        </div>
    );
}

export default Product;