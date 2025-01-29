import { useState } from "react";
// import ToDoList from "./ToDoList.js";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Input() {
    const [text, setText] = useState("");
    const [deals, setDeals] = useState([]);

    function createHandler(event) {
        setDeals([...deals, text]);
    }

    function inputChange() {
        setText(document.querySelector(".toDoForm").firstElementChild.value)
    }
    const styleFlex = {
        display: "flex",

    }

    return (
        <div >
            <form className="toDoForm" onChange={inputChange} onClick={createHandler} style={styleFlex}>
                <TextField id="standard-basic" label="New Note" variant="standard" />
                <Button variant="outlined">Create</Button>
                {/* <input >
                </input>
                <button type="button" id="create">create</button> */}
            </form>

        </div>


    );
}

export default Input;