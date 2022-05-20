import React, { useState } from 'react';
import {GiHamburgerMenu} from 'react-icons/gi'
import {RiRestaurant2Fill} from 'react-icons/ri'

import './Navbar.css';

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false)

  return(
    <nav className='app__navbar'>
        <div className='app_navbar_logo_container'>
            <h1>MyRestaurant</h1>
        </div>
        <ul className='app__navbar__links'>
          <li className='app__navbar__link'> <a href='#home'>Home</a></li>
          <li className='app__navbar__link'> <a href='#about'>About</a></li>
          <li className='app__navbar__link'> <a href='#awards'>Awards</a></li>
          <li className='app__navbar__link'> <a href='#contacts'>Contacts</a></li>
          <li className='app__navbar__link'> <a href='#menu'>Menu</a></li>
        </ul>
        <div className='app__navbar__login'>
            <a href='#login' className='p__opensans'>Login/Register</a>
            <div/>
            <a href='#book' className='p__opensans'>Book Table</a>
        </div>

        <div className='smallScreen__navbar'>
          <GiHamburgerMenu color='#fff' fontSize={27} onClick = {() => setToggleMenu(true)} />
          {toggleMenu && (
            <div className='app__navbar-smallScreen_overlay'>
            <RiRestaurant2Fill className='overlay_close' width={27} onClick = {() => setToggleMenu(false)} />
            

            <ul className='app__navbar__links_smallScreen'>
                <li> <a href='#home' onClick={()=> setToggleMenu(false) }>Home</a></li>
                <li> <a href='#about' onClick={()=> setToggleMenu(false) }>About</a></li>
                <li> <a href='#awards' onClick={()=> setToggleMenu(false) }>Awards</a></li>
                <li> <a href='#contacts'  onClick={()=> setToggleMenu(false) }>Contacts</a></li>
                <li> <a href='#menu'  onClick={()=> setToggleMenu(false) }>Menu</a></li>
            </ul>
          </div>
          )}
         
          
        </div>
    </nav>
  )
};

export default Navbar;
