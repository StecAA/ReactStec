import { BrowserRouter, Routes, Route, Link} from "react-router-dom"
import Chat from "../../Components/Chat"
import Profile from "../../Components/Profile"
import { ChatList } from '../../Components/ChatList';
const Home = () => <h1>Home page</h1>
export const Router = () => {
    return (
<BrowserRouter>
<div>
<Link to="/"> Home </Link>
</div>
<div>
<Link to= "Chats"> Chats </Link>
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