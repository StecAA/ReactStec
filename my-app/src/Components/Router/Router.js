import { BrowserRouter, Routes, Route, Link} from "react-router-dom"
import Chat from "../../Components/Chat"
import { Profile } from "../../Components/Profile"
import { ChatList } from '../../Components/ChatList';
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { deleteChate, AddChat } from "../../Store/chats/actions";
const Home = () => <h1>Home page</h1>

export const Router = () => {
//  const chatList = useSelector(state => state.chats);
// // const [chatList, setChatList] = useState();
// const dispath = useDispatch()

// const AddChate = (newChatName) =>{
//   let i = 0;
//   const newID = `chat-${++i}`;
//   const newChat = {
//     id: newID,
//     name: newChatName,
//   };
//   dispath(AddChat(newID, newChatName));

// }
// const deleteChat = (idToDelete) =>{
// dispath (deleteChate(idToDelete));


// }

  

    return (
<BrowserRouter>
<div>
<Link to="/"> Home </Link>
</div>
<div>
<Link to= "Chats"> Chats List </Link>
</div>
<div>
<Link to= "Profile"> Profile </Link>
</div>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="Chats">
    <Route index element={<ChatList />}/> 
    <Route path=":id" element={<Chat />}/> 
  </Route>
  <Route path="Profile" element={<Profile />}/>
</Routes>
</BrowserRouter>

    )
}