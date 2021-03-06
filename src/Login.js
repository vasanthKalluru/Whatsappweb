import React from 'react'
import {Button} from '@material-ui/core'
import "./Login.css"
import { auth, provider } from './firebase'
import {useContext} from "react";
import { LoginContext } from './LoginContext';
function Login() {
    const {setUser} = useContext(LoginContext);
    const signIn=()=>{
        auth.signInWithPopup(provider).then(result=>{console.log(result);setUser(result.user)}).catch(error=>alert(error));
    }
    return (
        <div className="login">
            <div className="login-container">
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt=""/> 
                <div className="login_text">
                    <h1>Sign in to Whatsapp</h1>
                </div>
                <Button onClick={signIn}>Sign In With Google</Button>
            </div>
        </div>
    )
}

export default Login
