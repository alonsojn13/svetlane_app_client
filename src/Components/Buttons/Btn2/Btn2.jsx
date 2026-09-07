import React from 'react'
import styles from './Btn2.module.css'

function Btn2({ text1,text2,img, nextStep }) {
  return (
    <>
      <span className={styles.btn} onClick={nextStep}>
        <p><span>{text1} {img && (<img src={img} alt="" />)} </span>
          {text2 && (<span>{text2}</span>)}
        </p>
      </span>
    </>
  )
}

export default Btn2