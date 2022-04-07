import Box from '@mui/material/Box/Box'
import Container from '@mui/material/Container/Container'
import Grid from '@mui/material/Grid/Grid'
import Paper from '@mui/material/Paper/Paper'
import styled from '@mui/material/styles/styled'
import React from 'react'
import { useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { useAppSelector } from '../../store/state'
import Header from '../header/Header'
import s from './Profile.module.css'


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
    textAlign: 'center',
    alignItems: "center"
}));

function Profile() {
    const state = useAppSelector(state => state.login)
    useEffect(() => {

    })
    if (!state.isLoggedIn) {
        return <Navigate to='/login' />
    }
    return (
        <>
            <Header />
<div className="div main_box">
    
</div>

        </>
    )
}

export default Profile

// {state.userData.name}
//                                 {state.userData.publicCardPacksCount}