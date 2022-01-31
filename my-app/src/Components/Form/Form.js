import { useState } from "react";

export const Form = ({onSubmit}) => {
    const [value, setValue] = useState([]);
    const copy  = Object.assign({}, value);
    const handleChange = (e) =>{
        copy.name = e.target.value
        setValue(copy);
    };
    const handleChangeMessage = (e) =>{
        copy.message = e.target.value
        setValue(copy);  
    };
    const handleSubmit = (e) =>{
         e.preventDefault();
        onSubmit({value});
    };
    return (
        <form onSubmit={handleSubmit} className="wrapper">
        <p>enter user name:</p>
        <input value={value.name} onChange={handleChange} type="text"></input>
        <p>enter message:</p>
        <input value={value.message} onChange={handleChangeMessage} type="text"></input>
        <input className="wrapper-submit" type="submit" value="Send Request" />
       </form>
    )
};
