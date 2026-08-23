import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'

import arrowDown from '../../assets/icons/arrowDown.svg'
import config from '../../assets/icons/config.svg'
import logout from '../../assets/icons/logout.svg'
import starWhite from '../../assets/icons/starWhite.svg'
import hamburgerMenu from '../../assets/icons/hamburgerMenu.svg'
import frFlag from '../../assets/icons/frFlag.svg'
import spFlag from '../../assets/icons/spFlag.svg'
import ukFlag from '../../assets/icons/ukFlag.svg'
import home from '../../assets/icons/homeWhite.svg'

function HamburgerMenu() {
  return (
    <>
      <details>
        <summary className={styles.navigationMenu}>
          <img src={hamburgerMenu} alt="" />
        </summary>

        <ul className={styles.list}>
          <li> <Link to="/training">Continue</Link></li>
          <li> <Link to="/free-review">Review</Link></li>
          <li> <Link to="/social-chat">Social</Link></li>
          <br />
          <details>
            <summary><img src={arrowDown} alt="" /> Progress</summary>
            <div>
              <li> <Link to="/real-life-situations">Real-Life Situations</Link></li>
              <li> <Link to="/active-words">Active Words</Link></li>
              <li> <Link to="/grammar-learned">Grammar</Link></li>

            </div>
          </details>
          <li> <Link to="/training">Plans</Link></li>

          <section className={styles.dropdownIconsBelow}>
            <Link to="/configuration"> <img src={logout} alt="" /></Link>
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