import React from 'react'
import { useDispatch } from 'react-redux'
import { login, logout } from '../features/user'
import { useSelector } from 'react-redux'

function Login() {
    const theme = useSelector(state => state.theme.value)
    const dispatch = useDispatch()
    return (
        <div>
            <button
                onClick={ () => {
                    dispatch(login({name: "Anubhav", age: 20, email: "anubhav100rao@gmail.com"}))
                } }
                style={{
                    backgroundColor: theme
                }}
            >
                Login
            </button>
            <br/>
            <button
                onClick={ () => {
                    dispatch(logout())
                } }
                style={{
                    backgroundColor: theme
                }}
            >
                Logout
            </button>
        </div>
    )
}

export default Login
