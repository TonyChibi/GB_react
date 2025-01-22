import logo from './logo.svg';
import './App.css';
import Message from './Message';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Message text={'text'} otherText={"some other text"} />
      </header>
    </div>
  );
}

export default App;
