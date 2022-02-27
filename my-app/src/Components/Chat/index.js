import logo from '../../logo.svg';
import '../../App.css';
import { Message } from '../../Components/messege/Message';
import { Form } from '../../Components/Form/Form';
import '../../css/Message.scss'
import { useEffect, useState} from 'react';
import { green, purple, red } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import { ChatList } from '../../Components/ChatList';

import {newChat, deleteChate} from "../../Store/chats/actions"
import {newMessages, deleteMessages, addMessageWithThunk} from "../../Store/messages/actions"
import { useDispatch, useSelector } from 'react-redux';
import {selectChats, selectMes} from "../../Store/chats/selector"
const theme = createTheme({
  palette: {
    primary: {
      main: red [500],
    },
    secondary: {
      main: green[500],
    },
  },
});
const myText = "Hello WORLD";
function Chat() {
  // const date = useSelector((state)=> state.chatsR);
  // const date = useSelector(selectChats);
  // const datem = useSelector((state)=> state.messageR);
  const datem = useSelector(selectMes);
  console.log (datem);
  const dispath = useDispatch();
  const AddChate = (newChatName, message) =>{
  console.log (newChatName, message);
    const newID = `chat-${Date.now()}`;
    const newChats = {
      id: newID,
      name: newChatName,
    };
    // dispath(newChat (newChats.id, newChats.name));
   
  //  dispath(newMessages(newChats.id, message));
    dispath(addMessageWithThunk(newChats.id, message, newChats.name));
  }

  //  const  [messageList, setMessageList] = useState([]);
   const AddMessage = (text)=>{
    AddChate(text.value.name, text.value.message)
    //  setMessageList((prevMessageList) => [...prevMessageList, {
    //    message: text.value.message, name : text.value.name, id: text.value.id }]);
   };

  //  let a;
// const filID = (id) => {
//  return datem.filter(el => 
//   {
//   if (el.id === id){
//     a = el.messages;
//  }
//  return;
// }
//  )
// }

// const filIDtwo = (element) => {
//   if (element !== undefined) {
//     return element;
//   }
// }




//    useEffect(() => {
//      let timeout;
//     if (date[date.length - 1]?.name === "Me") {
//   timeout = setTimeout(()=>{
//     const newMsg = {name: "Robot", message: "i am bot", id: `msg-${Date.now()}`};
//     setMessageList((prevMessageList) => [...prevMessageList, {
//       message: newMsg.message, name : newMsg.name,  id: newMsg.id}]);
//   }, 6000);
  
// };
// return () => { clearTimeout(timeout)};
// }, [messageList]);
  return (
    <div className="App">
     <Grid container spacing={0}  direction="row-reverse" >
      
       <Grid item xs={10} md={10}>
       <ThemeProvider theme={theme}>
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Message text={myText}/>
        <Form onSubmit={AddMessage} />
        {datem.map((text) => <div key={text.id}> {text.name}: {text.messages} </div>)}
        
        <br/>
      </header>
      </ThemeProvider>
      </Grid>
    <Grid item xs={2} md={2}>
      <ChatList/>
    </Grid>
    </Grid>
      
    </div>
    
  );
}

export default Chat;
