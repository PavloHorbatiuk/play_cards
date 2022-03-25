import React from 'react'
import { LoginPage } from './featers/LoginPage'

import s from './Login.module.css'

function Login() {


    return (
        <div className={s.generalContainer}>
            <LoginPage />
        </div>
    )
}

export default Login