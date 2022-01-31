import logo from './logo.svg';
import './App.css';
import { Message } from './Components/messege/Message';
import { Form } from './Components/Form/Form';
import './css/Message.scss';
import { useEffect, useState } from 'react';


const myText = "Hello WORLD";
function App() {
  
   const  [NameList, setNameList] = useState([]);
   const  [messageList, setMessageList] = useState([]);
   const AddMessage = (text)=>{
     setNameList ((prevNameList) => [...prevNameList, text.value.name]);
     setMessageList((prevMessageList) => [...prevMessageList, text.value.message]);
   };
   useEffect(() => {
    console.log('Hello!!! i am bot', messageList[messageList.length-1]);
}, [messageList]);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Message text={myText}/>
        <Form onSubmit={AddMessage} />
        {NameList.map((text) => <div>{text}</div>)}
        {messageList.map((text) => <div>{text}</div>)}
        <br/>
      </header>
    </div>
    
  );
}

export default App;
