import Notification from './Notification';
import Input from './Input';
import { useRef, useState } from 'react';



function ToDoList({ items }) {

    let noteCount = useRef(0);

    const [notes, setNotes] = useState([]);



    async function handleInputClick(event) {
        if (event.target.localName == "button") {
            let value = event.target.parentElement.querySelector("input").value;
            if (value) {
                setNotes([...notes, { id: noteCount.current, text: value }])
                noteCount.current++;
            }

        }

    }

    function handleDeleteClick(event) {
        if (event.target.classList.contains("notification__delete_btn")) {
            let id = event.target.parentElement.id;
            setNotes(notes.toSpliced(notes.findIndex(element => element.id == id), 1));
        }


    }

    return (
        <>
            <div className='note_creator' onClick={handleInputClick}>
                <Input />
            </div>
            <ul className='notes_list' onClick={handleDeleteClick}>
                {notes.map(note => {

                    return (<Notification key={note.id} text={note.text} id={note.id} />
                    )
                })}

            </ul>
        </>



    );
}

export default ToDoList;