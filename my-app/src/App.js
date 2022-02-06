import logo from './logo.svg';
import './App.css';
import { Message } from './Components/messege/Message';
import { Form } from './Components/Form/Form';
import './css/Message.scss';
import { useEffect, useState} from 'react';

import { green, purple, red } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Grid from '@mui/material/Grid';
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
function App() {
 
  const chat= [
    {name: "Me",
    id:`msg-${Date.now()}`},
    {name: "He",
      id:`msg-${Date.now()}`}];

   const  [messageList, setMessageList] = useState([]);
   const AddMessage = (text)=>{
     setMessageList((prevMessageList) => [...prevMessageList, {
       message: text.value.message, name : text.value.name, id: text.value.id }]);
   };
   useEffect(() => {
     let timeout;
    if (messageList[messageList.length - 1]?.name === "Me") {
  timeout = setTimeout(()=>{
    const newMsg = {name: "Robot", message: "i am bot", id: `msg-${Date.now()}`};
    setMessageList((prevMessageList) => [...prevMessageList, {
      message: newMsg.message, name : newMsg.name,  id: newMsg.id}]);
  }, 6000);
  
};
return () => { clearTimeout(timeout)};
}, [messageList]);
  return (
    <div className="App">
      <Grid container spacing={0}>
    <Grid item xs={10} md={10}>
       <ThemeProvider theme={theme}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Message text={myText}/>
        <Form onSubmit={AddMessage} />
        {messageList.map((text) =>  <div key={text.id}> {text.name}: {text.message}</div>)}
        <br/>
      </header>
      </ThemeProvider>
      </Grid>
    <Grid item xs={2} md={2}>
      <div className="shell">
      <List sx={{ width: '100%', height: '10%', bgcolor: 'background.paper' }}>
  {chat.map((value) => (
    <ListItem key={value.id}  disableGutters>
      {value.name}
    </ListItem>
  ))}
     </List>
      </div>
      </Grid>
      </Grid>
    </div>
    
  );
}

export default App;
