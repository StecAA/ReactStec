import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';

import '../../App.css';
import { BrowserRouter, Routes, Route, Link} from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import {newMessages, deleteMessages, addMessageWithThunk} from "../../Store/messages/actions"
import { selectMes} from "../../Store/chats/selector"
import { onChildAdded, onChildRemoved, set } from 'firebase/database';
import Button from '@mui/material/Button';
import { chatDB, getChatRefID } from '../../sevices/firebase';
import { useEffect, useState } from 'react';


  export const ChatList = (OnAddChat) => {
    const dispath = useDispatch();
    const del = (id) =>{ 
      console.log("I was clicked!")
      // dispath(deleteChate(id));
      dispath(deleteMessages(id));
      set(getChatRefID(id.id), null);
  
    };
    


    const chatto= [
    {name: "Me",
    id:`chat-${Math.random().toString(16).slice(2)}`,
    msg: "not",},
    {name: "He",
    id:`chat-${Math.random().toString(16).slice(2)}`,
    msg: "not",}];
    // let date = useSelector((state)=> state.chatsR);
     let datem = useSelector(selectMes);
    const [messages,setMessages] = useState([]);

    console.log(datem);
  
    datem = useSelector(selectMes);
    console.log(datem);
    if  (messages.length < 1) {
      chatto.forEach ( (element) => {dispath(newMessages(element.id,  element.msg, element.name))
       set(getChatRefID(element.id), {id: element.id, name:element.name, msg:element.msg});
       
     });
     };
useEffect(()=>{
  const unsubscribe = onChildAdded(chatDB , (snapshot)=>{
   console.log(snapshot.val());
  setMessages((prevMessages) => [...prevMessages, snapshot.val()]);
  console.log(messages);
  })
  return unsubscribe;
},[])

useEffect(()=>{
  const unsubscribe = onChildRemoved(chatDB , (snapshot)=>{
   console.log(snapshot.val());
  setMessages((prevMessages) => 
     prevMessages.filter( ({id}) => 
        id !== snapshot.val()?.id)
      )
  console.log(messages);
 

  })
  return unsubscribe;
},[])

    return (<>
    <div className="shell">
    <List sx={{ width: '100%', height: '10%', bgcolor: 'background.paper' }}>
{messages.map((value) => (
  <ListItem key={value.id}  disableGutters>
   <Link to={`/chats/${value.id}`}>{value.name}<span>  </span>
   </Link>
   <Button onClick={() => del(value) } sx={{  bgcolor: 'background.paper' }} variant="outlined" color="error">   X</Button>
  </ListItem>
))}
   </List>
   {/* onClick={del(value.id)}  */}
    </div>
    </>)
 };