import React, { useState } from 'react'
import '../styles/Header.css'
import paceLogo from '../assets/images/pace.png'
import userIcon from '../assets/images/userIcon.svg'

const Header = () => {
    const [userSettings, setUserSettings] = useState(false);

    function handleUserMenu() {
        setUserSettings(prev => !prev)
    }

    return (
        <header>
            <nav className='nav'>
                <img className='paceLogo' alt='Pace Logo' src={paceLogo} />
                <div>
                    {/* conditionally render user img or login here */}
                </div>

                <div className='user--profile'>
                    <button className='userProfile' onClick={handleUserMenu} >
                        <img alt='User Profile Button' src={userIcon}></img>
                    </button>
                    <div className={`HUD-popup ${userSettings ? 'show' : 'hide'}`}>
                        <ul className='HUD--container'>
                            <li>Profile</li>
                            <li>Settings</li>
                            <li>Logout</li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header