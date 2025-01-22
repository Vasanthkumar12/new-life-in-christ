import logo from '../assets/logo.jpeg'
import {useState} from 'react'
export const NavBar = () => {

    const [display, setDisplay] = useState('false')
    const showMenu = () => {
        setDisplay(!display)
        let res = document.getElementsByClassName('links')
        for(let i=0; i<res.length; i++) {
            res[i].style.display = display? 'flex' : 'none'
        }
    }

    return (
        <>
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
                <a href="Home">HOME</a>
                <a href="About">ABOUT</a>
                <a href="Ministries">MINISTRIES</a>
                <a href="Contact">CONTACT</a>
                <a href="Give">GIVE</a>
            </div>
        </>
    ) 
}

