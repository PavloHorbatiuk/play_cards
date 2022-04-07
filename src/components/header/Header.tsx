import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'
import profileSVG from './../../assets/01.svg'
import cardsSVG from './../../assets/02.svg'


function Header() {
    return (
        <div>
            <header className='header'>
                <div className="container _container">
                    <h1 className="logo">It-incubator</h1>
                    <nav className="navStyle">
                        <Link className="nav_title" to='/packsList'>
                            <img src={cardsSVG} alt="" className="image" />
                            Packs List
                        </Link>
                        <Link className="nav_title" to='/profile'>
                            <img src={profileSVG} alt="@" className='image_profile' />
                            Profile
                        </Link>
                    </nav>
                </div>
            </header >
        </div >
    )
}

export default Header