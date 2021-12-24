import './App.scss';
import React, {useState} from "react";
import {api} from "./api/apiGateway";

function App() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleChangeEmail = (event) => {
        event.preventDefault();
        setEmail(event.target.value)
    }
    const handlePassword = (event) => {
        event.preventDefault();
        setPassword(event.target.value)
    }

    const handleRegistr = () => {
        api.auth.registration({email: email, password: password}).then((res) => {
            console.log(res.data)
        })
    }
    const handleLogin = () => {
        api.auth.login({email: email, password: password}).then((res) => {
            console.log(res.data)
        })
    }

    return (
        <div className="App">
            <div>
                <button onClick={handleRegistr}>CREATE USER</button>
                <input onChange={handleChangeEmail} value={email} placeholder={'email'}/>
                <input onChange={handlePassword} value={password} placeholder={'password'}/>
            </div>
            <p/>
            <div>
                <button onClick={handleLogin}>LOGIN</button>
                <input onChange={handleChangeEmail} value={email} placeholder={'email'}/>
                <input onChange={handlePassword} value={password} placeholder={'password'}/>
            </div>
        </div>
    );
}

export default App;
