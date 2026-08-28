import React, { useState } from 'react'
import styles from './Navbar.module.css'
import { Link } from 'react-router-dom'

import profileOne from '../../assets/imgs/profileOne.jpg'


import arrowDown from '../../assets/icons/arrowDown.svg'
import config from '../../assets/icons/config.svg'
import logout from '../../assets/icons/logout.svg'
import starWhite from '../../assets/icons/starWhite.svg'
import hamburgerMenu from '../../assets/icons/hamburgerMenu.svg'
import frFlag from '../../assets/icons/frFlag.svg'
import spFlag from '../../assets/icons/spFlag.svg'
import ukFlag from '../../assets/icons/ukFlag.svg'
import HamburgerMenu from './HamburgerMenu'
import useUserInfo from '@/services/hooks/user/useUserInfo'



function Navbar() {

  const res = useUserInfo();
  
    return (
        <header className={styles.headerContainer} >

            <nav className={styles.navbarMenu}>

                <section className={styles.pictureProfile}>
                    <Link to="/user-profile">
                        <img src={res.profile_picture} alt="" />
                    </Link>
                </section>

                <section className={styles.userInfo}>
                    <h4>{res.name} {res.lastname} </h4>
                    <span>Software Developer</span>
                </section>

                <div>

                    <section className={styles.languageOptions}>
                        <span>{res.level} </span>
                        <img src={spFlag} alt="" />
                    </section>

                <HamburgerMenu/>



                </div>




            </nav>


        </header>
    )
}

export default Navbar