import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';

import '../../App.css';
import Chat  from '../Chat';
import { BrowserRouter, Routes, Route, Link} from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import {newChat, deleteChate} from "../../Store/chats/actions"
import {newMessages, deleteMessages} from "../../Store/messages/actions"


import Button from '@mui/material/Button';



  export const ChatList = (OnAddChat) => {
    const dispath = useDispatch();
    const del = (id) =>{ 
      console.log("I was clicked!")
      console.log(id);
      dispath(deleteChate(id));
      dispath(deleteMessages(id));
      console.log(date);
    };
    
    const chatto= [
    {name: "Me",
    id:`chat-${Math.random().toString(16).slice(2)}`},
    {name: "He",
    id:`chat-${Math.random().toString(16).slice(2)}`}];
    let date = useSelector((state)=> state.chatsR);
     if  (date.length < 1) {
     chatto.forEach ( (element) => {dispath(newChat(element.id, element.name))});
    };
    date = useSelector((state)=> state.chatsR);
    console.log(date);
    return (<>
    <div className="shell">
    <List sx={{ width: '100%', height: '10%', bgcolor: 'background.paper' }}>
{date.map((value) => (
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