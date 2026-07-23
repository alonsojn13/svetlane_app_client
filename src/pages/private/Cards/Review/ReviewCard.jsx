import React, { useState } from 'react'
import styles from './ReviewCard.module.css';
import HamburgerMenu from '../../../../components/Navbar/HamburgerMenu';
import translation from '../../../../assets/icons/translation.svg'
import microphoneWhite from '../../../../assets/icons/microphoneWhite.svg';
import camera from '../../../../assets/icons/camera.svg';
import arrowRightSimple from '../../../../assets/icons/arrowRightSimple.svg';
import arrowLeftWhite from '../../../../assets/icons/arrowLeftWhite.svg';


function ReviewCard({
  videoBackground,
  paragraph,
  paragraphTranslation,
  wordLearning1,
  wordLearning2,
  wordLearning3,
  wordLearning1Translation,
  wordLearning2Translation,
  wordLearning3Translation,
  question1,
  typeAnswer,
  nextStep,
  backStep
}) {

  const typeAnswerImg = typeAnswer === 1 ? camera : microphoneWhite;


  const [showItems, setShowItems] = useState(false);


  return (
    <>
      <section className={styles.card}>

        <header className={styles.navbar}>
          <nav>
            <img onClick={backStep} className={styles.backStep} src={arrowLeftWhite} alt="" />

            <HamburgerMenu />
          </nav>
        </header>

        <video autoPlay className={styles.videoBackground} onEnded={() => setShowItems(true)}>
          <source src={videoBackground} type="video/mp4" />
        </video>

        <section className={` ${styles.texts} ${showItems ? styles.visible : ""} `}>

          {paragraph && (

            <div className={styles.translation}>
              <h2>{paragraph}</h2>
               {paragraphTranslation && (
                 <p><img src={translation} alt="" />{paragraphTranslation} </p>
               )}
            </div>
          )}

          {wordLearning1 && (

            <div className={styles.explanations}>

              {wordLearning1 && (
                <p>{wordLearning1} <img src={arrowRightSimple} alt="" /> {wordLearning1Translation} </p>
              )}

              {wordLearning2 && (
                <p>{wordLearning2} <img src={arrowRightSimple} alt="" /> {wordLearning2Translation} </p>
              )}

              {wordLearning3 && (
                <p>{wordLearning3} <img src={arrowRightSimple} alt="" /> {wordLearning3Translation} </p>
              )}

            </div>
          )}

          {question1 && (
            <div className={styles.answer}>
              <p>{question1}</p>
              <span onClick={nextStep}>
                <img src={typeAnswerImg} alt="" />
              </span>
            </div>
          )}

          <div>
            <h3></h3>
          </div>


        </section>
      </section>
    </>
  )
}

export default ReviewCard