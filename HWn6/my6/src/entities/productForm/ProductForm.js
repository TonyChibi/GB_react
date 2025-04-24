import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { changeDisplay, selectDescription, selectDisplay, selectName, selectPrice, selectProdObj, selectStatus, setDescription, setName, setPrice, setStatus } from "./productFormSlice";
import { addProduct, changeProduct } from "../../features/products/productsSlice";
import ProductObj from "../product/ProductObj";

function ProductForm() {
    let dispatch = useDispatch();

    let product = useSelector(selectProdObj);
    let display = useSelector(selectDisplay);
    let name = useSelector(selectName);
    let description = useSelector(selectDescription);
    let price = useSelector(selectPrice);
    let status = useSelector(selectStatus);

    // const [product, setProduct] = useState(useSelector(selectProdObj))

    let style = {
        position: "absolute",
        top: 0,
        background: "rgb(222, 123,431, 0.3)",
        width: "100%",
        height: "100%",
        display: display,
        justifyContent: "center",
        alignItems: "center"


    }
    let styleForm = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        background: "rgb(222, 123,431,1)",
        height: "fit-content",
        padding: "3%",
        alignItems: "start",
        gap: "15px",
        borderRadius: "5%",

    }

    function submitHandler(event) {
        event.preventDefault();
        let newProd = new ProductObj(name, description, price, status);
        if (product) {

            dispatch(changeProduct({
                id: product.id,
                newProduct: newProd,
            }))
        } else {
            dispatch(addProduct(new ProductObj(name, description, price, status)))
        }

        dispatch(changeDisplay());
        dispatch(setName(""));
        dispatch(setDescription(""));
        dispatch(setPrice(""));
        dispatch(setStatus(false));

    }
    // const [name, setName] = useState(product ? product.name : "");
    // const [description, setDescription] = useState(product ? product.description : "");
    // const [price, setPrice] = useState(product ? product.price : "");
    // const [status, setStatus] = useState(product ? true : false);




    function inputHandler(event) {
        console.log(event.target)
        switch (event.target.id) {
            case "name":
                console.log(event.target)
                // setName(event.target.value);
                // product.name = event.target.value;
                dispatch(setName(event.target.value))
                break;
            case "description":
                // setDescription(event.target.value);
                // product.description = event.target.value;
                dispatch(setDescription(event.target.value))
                break;
            case "price":

                // setPrice(event.target.value);
                // product.price = event.target.value;
                dispatch(setPrice(event.target.value))
                break;
        }
    }


    return (<div className="product_form_container" style={style}>
        <form onSubmit={submitHandler} style={styleForm}>


            <div>
                <input className="form_input" type="text" maxLength="32" placeholder="name me" id="name" value={name} onChange={inputHandler}></input>
                <label htmlFor="name">Name</label>
            </div>

            <div>
                <input className="form_input" type="text" maxLength="32" placeholder="describe me" id="description" value={description} onChange={inputHandler}></input>
                <label htmlFor="description">Description</label>
            </div>

            <div>
                <input className="form_input" type="number" max="99999" id="price" value={price} onChange={inputHandler}></input>
                <label htmlFor="price">Price</label>
            </div>


            <div>
                <input className="form_radio" type="radio" name="status" id="inStock" defaultChecked={status ? true : false} />
                <label htmlFor="inStock">In stock</label>

                <input className="form_radio" type="radio" name="status" id="soldOut" defaultChecked={status ? false : true} />
                <label htmlFor="soldOut">Sold out</label>

            </div>
            <button >Save</button>





        </form>
    </div>);
}

export default ProductForm;