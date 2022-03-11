import { BrowserRouter, Routes, Route, Link} from "react-router-dom"
import Chat from "../../Components/Chat"
import { ConnectedProfile } from "../../Components/Profile/ProfileToConnect"
import { ChatList } from '../../Components/ChatList';
import { Articles } from '../../Components/Articles/Articles';
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../../sevices/firebase";
import { Home } from "../Home/Home";
import { PablicRoute } from '../../Components/PablicRoute/PablicRoute';
import { PrivateRoute } from '../../Components/PrivateRoute/PrivateRoute';


export const Router = () => {
  const [authed, setAuthed] = useState(false);
  const [show, setShow] = useState(false);
  // const authorize = () => {
  //   setAuthed (true);
  // }
  const noShow =  () => {
    setShow (false);
  }

  useEffect(()=> {
  const unsubscribe  =  onAuthStateChanged(auth, (user)=>{
      if (user) {
        setAuthed(true);
      }
      else {
        setAuthed(false);
      }
    });
    return unsubscribe;
  },[]);

    return (
<BrowserRouter>
<div>
<Link to="/"> Home </Link>
</div>
<div>
<Link to= "Chats"> Chats List </Link>
</div>

<div>
<Link to= "profile"> Profile </Link>
</div>
<div>
<Link to= "Articles"> Articles </Link>
</div>
<Routes>
  <Route path="/" element={<PablicRoute authed={authed}/>}>
    {console.log(authed)}
   <Route path="" element={<Home show={show}/>}/>
   <Route path="/singup" element={<Home show={noShow}/>}/>  
   </Route>

  <Route path="/profile" element={<PrivateRoute authed={authed}/>}>
   <Route path="" element={<ConnectedProfile />}/>
  


   </Route>
   
   <Route path="Chats" element={<PrivateRoute authed={authed}/>}>
    <Route index element={<ChatList />}/> 
    <Route path=":id" element={<Chat />}/> 
  </Route>
 
  <Route path="Articles" element={<Articles/>}/>
</Routes>
</BrowserRouter>

    )
}