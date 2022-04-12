
import Avatar from '@mui/material/Avatar';
import React from 'react'
import { Navigate } from 'react-router-dom'
import { PATH } from '../../enums/routs'
import { useAppSelector } from '../../store/state'
import Header from '../header/Header'
import s from './Profile.module.scss'
import styles from './../../index.module.scss'



function Profile() {
    const state = useAppSelector(state => state.login)

    if (!state.isLoggedIn) {
        return <Navigate to={PATH.LOGIN} />
    }
    return (
        <>
            <Header />
            <div className={`${s.warper} ${styles.container}`}>
                <div className={s.profileContent}>
                    <div className={s.profileBox}>
                        <Avatar
                            alt="avatar"
                            src={state.userData.avatar}
                            sx={{ width: 96, height: 96 }}
                            className={s.picture}
                        />
                        <span className={s.title}>{state.userData.name}</span>
                        <button className={s.btn}>Edit profile</button>
                    </div>
                </div>
                <div className={s.content}>
                    content
                </div>
            </div>
        </>
    )
}

export default Profile

