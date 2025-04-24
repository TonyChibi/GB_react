import { useDispatch, useSelector } from "react-redux";
import ProductForm from "../../entities/productForm/ProductForm";
import { changeDisplay, selectDisplay, setAction, setProduct } from "../../entities/productForm/productFormSlice";
import { addProduct, selectProducts } from "./productsSlice";
import ProductObj from "../../entities/product/ProductObj";
import Product from "../../entities/product/Product";


function Products() {
    const dispatch = useDispatch();

    let products = useSelector(selectProducts).map(prod => <li><Product prodObj={prod} /></li>);

    function newProductHandler() {
        console.log("hendler")
        console.log(products)
        dispatch(setProduct(null))

        dispatch(changeDisplay());
    }

    return (<div>
        <ProductForm />
        <button className="new_product_button" onClick={newProductHandler}>New product</button>
        <div className="Products">
            <ul >{products.length ? products : <h2>have not a product</h2>}</ul>
        </div>

    </div>);
}

export default Products;