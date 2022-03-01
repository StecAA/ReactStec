import logo from '../../logo.svg';
import '../../App.css';
import { Message } from '../../Components/messege/Message';
import { Form } from '../../Components/Form/Form';
import '../../css/Message.scss'
import { green, red } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import { ChatList } from '../../Components/ChatList';
import { addMessageWithThunk} from "../../Store/messages/actions"
import { useDispatch, useSelector } from 'react-redux';
import { selectMes } from "../../Store/chats/selector"
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

    dispath(addMessageWithThunk(newChats.id, message, newChats.name));
  }

 
   const AddMessage = (text)=>{
    AddChate(text.value.name, text.value.message)
  
   };
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
