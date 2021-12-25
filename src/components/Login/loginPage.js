import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {api} from "../../api/apiGateway";
import {setLoginAC, setLogoutAC} from "../../redux/loginReducer";
import {setUserAC} from "../../redux/userReducer";

 function LoginPage() {
    const user = useSelector(state => state.user.user)
    const token = useSelector(state => state.login.accessToken)
    const dispatch = useDispatch()

    useEffect(() => {
        refreshLogin()
    }, [])

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
            if (res.status === 201 || 200) {
                refreshLogin();
            }
        })
    }

    const refreshLogin = () => {
        api.auth.refresh().then((res) =>  {
                if (res.status === 401) {
                    dispatch(setLogoutAC())
                } else {
                    console.log(res.data)
                    dispatch(setLoginAC(res.data.accessToken))
                    dispatch(setUserAC(res.data.user))
                }
            }
        )
    }
    const handleTestLogin = () => {
        dispatch(setLoginAC())
    }
    const handleTestLogout = () => {
        dispatch(setLogoutAC())
    }

    const handleTest = () => {
        console.log(token)
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
            <div>
                <button onClick={handleTestLogin}>LOGIN</button>
                <button onClick={handleTestLogout}>LOGOUT</button>
            </div>
            <div style={{padding: '20px', background: 'gray'}}>
                {user && JSON.stringify(user)}
            </div>
            <button onClick={handleTest}>LOG</button>
            <textarea disabled={true} value={token}/>
        </div>
    );
}

export default LoginPage;