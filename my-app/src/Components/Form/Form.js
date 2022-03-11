import { useState } from "react";
import TextField from "@mui/material/TextField/TextField"
import Button from "@mui/material/Button/Button"
// import FlatButton from "@mui/material/FlatButton"
export const Form = ({onSubmit}) => {
    const [value, setValue] = useState([]);
    const copy  = Object.assign({}, value);
    const handleChange = (e) =>{
        copy.name = e.target.value
        setValue(copy);
    };
    const handleChangeMessage = (e) =>{
        copy.message = e.target.value;
        copy.id = `msg-${Date.now()}`;
        setValue(copy);  
    };
    const handleSubmit = (e) =>{
         e.preventDefault();
        onSubmit({value});
        // setValue("");

    };
    return (
        <form  id="myform" onSubmit={handleSubmit} className="wrapper">
        <p>enter user name:</p>
        <TextField inputRef={(input) => {
            if(input != null) {
               input.focus(); }}} value={value.name} onChange={handleChange} />
        <p>enter message:</p>
        <TextField value={value.message} onChange={handleChangeMessage} />
        {/* <input value={value.name} onChange={handleChange} type="text"></input>
        <input value={value.message} onChange={handleChangeMessage} type="text"></input> */}
        <Button className="wrapper-submit" type="submit" value="Send Request" label="Submit"  primary={true}  type="submit" form="myform">Send Request</Button> 
        {/* <input className="wrapper-submit" type="submit" value="Send Request" /> */}
        {/* <FlatButton label="Submit"  primary={true}  type="submit" form="myform" /> */}
       </form>
    )
};
