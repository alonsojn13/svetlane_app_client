import translation from '../../../../assets/icons/translation.svg'
import microphoneWhite from '../../../../assets/icons/microphoneWhite.svg';
import camera from '../../../../assets/icons/camera.svg';
import arrowRightSimple from '../../../../assets/icons/arrowRightSimple.svg';
import arrowLeftWhite from '../../../../assets/icons/arrowLeftWhite.svg';

import styles from './LearningCard.module.css'
import HamburgerMenu from '../../../../components/Navbar/HamburgerMenu';

function LearningCard({
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

  const typeAnswerCalculated = typeAnswer === 1 ? camera : microphoneWhite;

  return (
    <>
      <section className={styles.card}>

        <header className={styles.navbar}>
          <nav>
            <img onClick={backStep} className={styles.backStep} src={arrowLeftWhite} alt="" />

            <HamburgerMenu/>

          </nav>
        </header>

        <video autoPlay className={styles.videoBackground}>
          <source src={videoBackground} type="video/mp4" />
        </video>

        <section className={styles.texts}>

          <div className={styles.translation}>
            <h1>{paragraph}</h1>
            <p><img src={translation} alt="" />{paragraphTranslation} </p>
          </div>

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

          <div className={styles.answer}>
            <p>{question1}</p>
            <span onClick={nextStep}>
              <img src={typeAnswerCalculated} alt="" />
            </span>
          </div>
        </section>
      </section>

    </>
  )
}

export default LearningCard