import React from 'react'
import { Link } from 'react-router-dom'
import s from './Header.module.scss'
import styles from './../../index.module.scss'
import profileSVG from './../../assets/01.svg'
import cardsSVG from './../../assets/02.svg'


function Header() {
    return (
        <div>
            <header className={s.header}>
                <div className={`${s.container} ${styles.container}`}>
                    <h1 className={s.logo}>It-incubator</h1>
                    <nav className={s.navStyle}>
                        <Link className={s.navTitle} to='/packsList'>
                            <img src={cardsSVG} alt="" className={s.image} />
                            Packs List
                        </Link>
                        <Link className={s.navTitle} to='/profile'>
                            <img src={profileSVG} alt="@" className={s.imageProfile} />
                            Profile
                        </Link>
                    </nav>
                </div>
            </header >
        </div >
    )
}

export default Header