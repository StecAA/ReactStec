import { useState } from "react";
import { Link } from "react-router-dom";
import { login, signUP } from "../../sevices/firebase";


export const Home = ({show}) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [error, setError] = useState('');
    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleChangePass = (e) => {
        setPass(e.target.value);
    }

    const handleSignUP=  async ()=> {
        try {
            await  signUP(email, pass);
        } catch (e) {
            setError(e.message);
        }
     
    }

    const handleSignIn=  async ()=> {
        try {
          await login (email, pass);
        } 
        catch (e) {
            setError(e.message);
        }
     
    }

    const handleSabmit = (e) =>{
        e.preventDefault()

       if (show) {
        handleSignUP();
       }
       else {
        handleSignIn();
       }


        setEmail('');
        setPass('');
    }
    return(
        <>
        <h2>{show ? 'SignUP' : "Login"}</h2>
         <Link to ={`${show ? '/' : "/singup"}`}>
        {!show ? 'SignUP' : "Login"}
        </Link> 
        <form onSubmit={handleSabmit}>
         <input type= "text" value={email} onChange={handleChangeEmail} />
         <input type= "text" value={pass} onChange={handleChangePass} />
         <button>LOGIN</button>
         {error &&<span>{error}</span>}
        </form>
        </>
    )
};