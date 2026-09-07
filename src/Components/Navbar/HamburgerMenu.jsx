import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './Navbar.module.css'

import arrowDown from '@/Assets/icons/arrowDown.svg'
import config from '@/Assets/icons/config.svg'
import logout from '@/Assets/icons/logout.svg'
import starWhite from '@/Assets/icons/starWhite.svg'
import hamburgerMenu from '@/Assets/icons/hamburgerMenu.svg'
import frFlag from '@/Assets/icons/frFlag.svg'
import spFlag from '@/Assets/icons/spFlag.svg'
import ukFlag from '@/Assets/icons/ukFlag.svg'
import home from '@/Assets/icons/homeWhite.svg'

function HamburgerMenu() {

  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem('token');

    console.log(localStorage.getItem("token")); // debería ser null

    navigate("/login");

  }

  return (
    <>
      <details>
        <summary className={styles.navigationMenu}>
          <img src={hamburgerMenu} alt="" />
        </summary>

        <ul className={styles.list}>
          <li> <Link to="/training">Continue</Link></li>

          <li> <Link to="/contacts">Contacts</Link></li>
          <li> <Link to="/posts">Posts</Link></li>
          <li> <Link to="/mailbox">Mailbox</Link></li>

          <br />

          <details>
            <summary><img src={arrowDown} alt="" /> Progress</summary>
            <div>
              <li> <Link to="/real-life-situations">Real-Life Situations</Link></li>
              <li> <Link to="/active-words">Active Words</Link></li>
              <li> <Link to="/grammar-learned">Grammar</Link></li>

            </div>
          </details>
          <li> <Link to="/free-review">Review</Link></li>

          <li> <Link to="/training">Plans</Link></li>

          <section className={styles.dropdownIconsBelow}>
            <img className={styles.icon} onClick={() => handleLogout()} src={logout} alt="" />
            <div>
              <Link to="/available-languages"> <img src={spFlag} alt="" /></Link>
              <Link to="/configuration"> <img src={config} alt="" /></Link>
              <Link to="/dashboard"> <img src={home} alt="" /></Link>
            </div>
          </section>

        </ul>

      </details>
    </>
  )
}

export default HamburgerMenu