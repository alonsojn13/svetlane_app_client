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

function HamburgerMenu() {
  return (
    <>
      <details>
        <summary className={styles.navigationMenu}>
          <img src={hamburgerMenu} alt="" />
        </summary>

        <ul className={styles.list}>
          <li> <Link to="/dashboard">Home</Link></li>
          <li> <Link to="/training">Training</Link></li>
          <details>
            <summary><img src={arrowDown} alt="" /> Progress</summary>
            <div>
              <li> <Link to="/real-life-situations">Real-Life Situations</Link></li>
              <li> <Link to="/words-learned">Vocabulary</Link></li>
              <li> <Link to="/grammar-learned">Grammar</Link></li>

            </div>
          </details>
          <li> <Link to="/social-chat">Social</Link></li>
          <br />

          <details>
            <summary><img src={arrowDown} alt="" />Interesting</summary>
            <div>
              <li> <Link to="/methodology">Methodology</Link></li>
              <li> <Link to="/cefr-aligned">CEFR-Aligned</Link></li>
              <li> <Link to="/science-based">Science-based</Link></li>
            </div>
          </details>

          <details className={styles.appLanguageSelect}>
            <summary> <img src={arrowDown} alt="" />App Language</summary>
            <div >
              <li> <Link to="/real-life-situations"> <img src={spFlag} alt="" /> Spanish</Link></li>
              <li> <Link to="/real-life-situations"> <img src={ukFlag} alt="" /> English</Link></li>
              <li> <Link to="/real-life-situations"> <img src={frFlag} alt="" /> Francais</Link></li>

            </div>
          </details>
          <li> <Link to="/training">Plans</Link></li>
          <li> <Link to="/fluency">Fluency</Link></li>
          <li> <Link to="/monthlyreview">MonthlyReview</Link></li>
          <li> <Link to="/review">Review</Link></li>


          <section className={styles.dropdownIconsBelow}>
            <Link to="/configuration"> <img src={logout} alt="" /></Link>
            <Link to="/configuration"> <img src={config} alt="" /></Link>
          </section>
        </ul>

      </details>
    </>
  )
}

export default HamburgerMenu