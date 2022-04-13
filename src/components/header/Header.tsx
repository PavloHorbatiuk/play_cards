import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import s from './Header.module.scss'
import styles from './../../index.module.scss'
import profileSVG from './../../assets/01.svg'
import cardsSVG from './../../assets/02.svg'
import { PATH } from '../../enums/routs'
import { useDispatch } from 'react-redux'
import { logOutTC } from '../../store/auth/auth-reducers'
import { useAppSelector } from '../../store/state'


function Header() {
    const dispatch = useDispatch()
    const isAuth = useAppSelector(state => state.login)
    let navigate = useNavigate()


    const onClickLogOut = () => {
        dispatch(logOutTC());
        navigate(PATH.LOGIN);
    }

    return (
        <div>
            <header className={s.header}>
                <div className={`${s.container} ${styles.container}`}>
                    <h1 className={s.logo}>It-incubator</h1>
                    <nav className={s.navStyle}>
                        <Link className={s.navTitle} to={PATH.CARDS}>
                            <img src={cardsSVG} alt="" className={s.image} />
                            Packs List
                        </Link>
                        <Link className={s.navTitle} to={PATH.PROFILE}>
                            <img src={profileSVG} alt="@" className={s.imageProfile} />
                            Profile
                        </Link>
                    </nav>
                    {isAuth && <button className={s.logOut} onClick={onClickLogOut}>Logout</button>}

                </div>
            </header >
        </div >
    )
}

export default Header