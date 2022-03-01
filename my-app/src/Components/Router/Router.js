import { BrowserRouter, Routes, Route, Link} from "react-router-dom"
import Chat from "../../Components/Chat"
import { Profile } from "../../Components/Profile"
import { ChatList } from '../../Components/ChatList';
import { Articles } from '../../Components/Articles/Articles';
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { deleteChate, AddChat } from "../../Store/chats/actions";
const Home = () => <h1>Home page</h1>

export const Router = () => {

  

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
<div>
<Link to= "Articles"> Articles </Link>
</div>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="Chats">
    <Route index element={<ChatList />}/> 
    <Route path=":id" element={<Chat />}/> 
  </Route>
  <Route path="Profile" element={<Profile />}/>
  <Route path="Articles" element={<Articles/>}/>
</Routes>
</BrowserRouter>

    )
}