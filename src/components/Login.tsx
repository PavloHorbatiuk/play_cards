import React from 'react'
import SuperButton from '../Styled-input-button/styled-button/SuperButton'
import SuperCheckbox from '../Styled-input-button/styled-checkbox/SuperCheckbox'
import SuperInputPassword from '../Styled-input-button/styled-input/SuperInputPassword'
import SuperInputText from '../Styled-input-button/styled-input/SuperInputText'
import s from './Login.module.css'

function Login() {
    const onFocusLabel = () => {

    }
    const onClickHandler = () => {
        alert("test")
    }

    return (
        <div className={s.generalContainer}>
            <div className={s.container}>
                <h1>Please login</h1>
                <form>
                    <div className={s.formControl}>
                        <SuperInputText type='text' required />
                        <label onFocus={onFocusLabel}>Email</label>
                    </div>
                    <div className={s.formControl}>
                        <SuperInputPassword type='password' required />
                        <label>Password</label>
                    </div>
                    <div className={s.checkboxStyle}>
                        <SuperCheckbox children={"Keep me logged in"} />
                    </div>
                    <SuperButton children={"login"}
                        onClick={onClickHandler}
                    />
                    <p className={s.text}>Don't have an account? <a href="#">Register</a>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Login