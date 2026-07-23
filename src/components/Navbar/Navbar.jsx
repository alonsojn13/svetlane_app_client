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



function Navbar() {

    return (
        <header className={styles.headerContainer} >

            <nav className={styles.navbarMenu}>

                <section className={styles.pictureProfile}>
                    <Link to="/user-profile">
                        <img src={profileOne} alt="" />
                    </Link>
                </section>

                <section className={styles.userInfo}>
                    <h4>Alonso Nuñez</h4>
                    <span>Software Developer</span>
                </section>

                <div>

                    <section className={styles.languageOptions}>
                        <span>A1</span>
                        <img src={spFlag} alt="" />
                    </section>

                <HamburgerMenu/>



                </div>




            </nav>


        </header>
    )
}

export default Navbar