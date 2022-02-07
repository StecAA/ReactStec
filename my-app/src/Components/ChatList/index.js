import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import '../../App.css';
import Chat  from '../Chat';
import { BrowserRouter, Routes, Route, Link} from "react-router-dom"
let i=0;
const chatto= [
  {name: "Me",
  id:`chat-${++i}`},
  {name: "He",
  id:`chat-${++i}`}];

  export const ChatList = () => (
    
    <div className="shell">
    <List sx={{ width: '100%', height: '10%', bgcolor: 'background.paper' }}>
{chatto.map((value) => (
  <ListItem key={value.id}  disableGutters>
   <Link to={`/chats/${value.id}`}>{value.name}
   </Link>
  </ListItem>
))}
   </List>
    </div>
  );