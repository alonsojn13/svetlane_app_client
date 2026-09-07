import React, { useState } from 'react'
import styles from './Navbar.module.css'
import { Link } from 'react-router-dom'

import spFlag from '@/Assets/icons/spFlag.svg'
import HamburgerMenu from './HamburgerMenu'
import useUserInfo from '@/Shared/hooks/user/useUserInfo'
import imgFlag from '@/Shared/scripts/imgFlag'



function Navbar() {

    const userInfo = useUserInfo();
    let userTargetLanguageFLag = imgFlag(userInfo);

    return (
        <header className={styles.headerContainer}>

            <nav className={styles.navbarMenu}>

                <section className={styles.pictureProfile}>
                    <Link to="/user-profile">
                        <img src={userInfo.profilePictureUrl} alt="" />
                    </Link>
                </section>

                <section className={styles.userInfo}>
                    <h4>{userInfo.name} {userInfo.lastname} </h4>
                    <span>{userInfo.shortBio}</span>
                </section>

                <div>

                    <section className={styles.languageOptions}>
                        <span>{userInfo.level} </span>
                        <img src={userTargetLanguageFLag} alt="" />
                    </section>

                    <HamburgerMenu />

                </div>




            </nav>


        </header>
    )
}

export default Navbar