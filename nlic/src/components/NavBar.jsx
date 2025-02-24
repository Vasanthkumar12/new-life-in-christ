import logo from '../assets/logo.jpeg'
import {useState} from 'react'
import {NavLink} from 'react-router-dom'

export const NavBar = () => {
    const [display, setDisplay] = useState('false')
    const showMenu = () => {
        setDisplay(!display)
        let nav = document.getElementById('navbar').style.paddingBottom = display? '0px' : '10px'
        let res = document.getElementsByClassName('links')
        for(let i=0; i<res.length; i++) {
            res[i].style.display = display? 'flex' : 'none'
        }
    }

    return (
        <div id='navbar'>
            <nav>
                <div>
                    <img id='logo' src={logo} alt="logo" />
                </div>
                <div onClick={showMenu} id='menu_bar'>
                    <div>
                        <div className='menu'></div>
                        <div className='menu'></div>
                        <div className='menu'></div>
                    </div>
                    <div>
                        <span>MENU</span>
                    </div>
                </div>
            </nav>
            <div className='links'>
                <NavLink to='/'>HOME</NavLink>
                <NavLink to="/about">ABOUT</NavLink>
                <NavLink to="/events">EVENTS</NavLink>
                <NavLink to="/ministries">MINISTRIES</NavLink>
                <NavLink to="/contact">CONTACT</NavLink>
                <NavLink to="/give">GIVE</NavLink>
            </div>
        </div>
    ) 
}

