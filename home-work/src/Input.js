import { useState } from "react";
// import ToDoList from "./ToDoList.js";

function Input() {
    const [text, setText] = useState("");
    const [deals, setDeals] = useState([]);

    function createHandler(event) {
        setDeals([...deals, text]);
    }

    function inputChange() {
        setText(document.querySelector(".toDoForm").firstElementChild.value)
    }

    return (
        <>
            <form className="toDoForm">
                <input onChange={inputChange}>
                </input>
                <button type="button" onClick={createHandler} id="create">create</button>
            </form>

        </>


    );
}

export default Input;