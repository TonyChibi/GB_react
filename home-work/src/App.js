import './App.css';
// import Message from './Message';
import Input from './Input';
import { useEffect, useRef, useState } from 'react';
import Notification from './Notification';
import TemperatureConverter from './TemperatureConverter';
import ToDoList from './ToDoList';
import { BrowserRouter, Routes, Route } from "react-router";
import Main from './Main';
import About from './About';

function App() {
  // let noteCount = useRef(0);

  // const [notes, setNotes] = useState([]);



  // async function handleInputClick(event) {
  //   if (event.target.localName == "button") {
  //     let value = event.target.parentElement.querySelector("input").value;
  //     if (value) {
  //       setNotes([...notes, { id: noteCount.current, text: value }])
  //       noteCount.current++;
  //     }

  //   }

  // }

  // function handleDeleteClick(event) {
  //   if (event.target.classList.contains("notification__delete_btn")) {
  //     let id = event.target.parentElement.id;
  //     setNotes(notes.toSpliced(notes.findIndex(element => element.id == id), 1));
  //   }


  // }


  return (
    <div className="App">
      <header className="App-header" >
        {/* <div className='note_creator' onClick={handleInputClick}>
          <Input />
        </div>
        <ul className='notes_list' onClick={handleDeleteClick}>
          {notes.map(note => {

            return (<Notification key={note.id} text={note.text} id={note.id} />
            )
          })}
          
        </ul> */}
        <BrowserRouter>


          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<About />} />
          </Routes>

          <ToDoList />
          <TemperatureConverter />
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
