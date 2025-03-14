import logo from '../assets/logo.jpeg'
import {NavLink} from 'react-router-dom'

export const NavBar = () => {

    return (
        <div id='navbar' class="sticky top-0 bg-white p-7 shadow-xl flex justify-around items-center">
            <div>
                <img id='logo' class="h-20 sm:h-20 md:h-24 lg:h-28 w-auto max-w-[250px]" src={logo} alt="logo" />
            </div>

            <div id='menu_bar' class='block md:hidden'>
                <div class='bg-orange-600 mb-1 h-1 w-6 rounded-sm '></div>
                <div class='bg-orange-600 mb-1 h-1 w-6 rounded-sm '></div>
                <div class='bg-orange-600 mb-1 h-1 w-6 rounded-sm '></div>
            </div>

            <div class='hidden md:block text-[1.1rem] font-bold tracking-wide'>
                <NavLink class="mr-3 w-50" to='/'>HOME</NavLink>
                <NavLink class="mr-3 w-50" to="/about">ABOUT</NavLink>
                <NavLink class="mr-3 w-50" to="/events">EVENTS</NavLink>
                <NavLink class="mr-3 w-50" to="/ministries">MINISTRIES</NavLink>
                <NavLink class="mr-3 w-50" to="/contact">CONTACT</NavLink>
                <NavLink class="mr-3 w-50" to="/give">GIVE</NavLink>
            </div>
        </div>
    ) 
}

