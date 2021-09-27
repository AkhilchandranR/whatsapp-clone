import { Button } from '@material-ui/core';
import React from 'react';
import { auth, provider } from './firebase';
import './Login.css';
import { actionTypes } from './reducer';
import { useStateValue } from './StateProvider';

function Login() {
    const[{},dispatch] = useStateValue();
    const signIn = () => {
        auth.signInWithPopup(provider)
        .then(result=>{
            dispatch({
                type:actionTypes.SET_USER,
                user: result.user,
            });
        })
        .catch(error=>alert(error.message))
    }
    return (
        <div className="login">
            <div className="login__container">
                <img src="https://1000logos.net/wp-content/uploads/2021/04/WhatsApp-logo.png"
                alt="whatsapp-logo"/>
                <div className="login__text">
                    <h1>Sign In to Whatsapp</h1>
                </div>
                <Button onClick={signIn}>
                    Sign In with google
                </Button>
            </div>
        </div>
    )
}

export default Login
