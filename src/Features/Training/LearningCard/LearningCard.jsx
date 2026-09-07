import arrowRightSimple from '@/Assets/icons/arrowRightSimple.svg';
import camera from '@/Assets/icons/camera.svg';
import translation from '@/Assets/icons/translation.svg';
import styles from './LearningCard.module.css';
import plusWhite from '@/Assets/icons/plusWhite.svg';
import minusWhite from '@/Assets/icons/minusWhite.svg';
import interrogativeWhite from '@/Assets/icons/interrogativeWhite.svg';

function LearningCard({
  videoBackground,
  name,
  nameTranslation,
  wordLearning1,
  wordLearning2,
  wordLearning3,
  wordLearning1Translation,
  wordLearning2Translation,
  wordLearning3Translation,
  question1,
  nextStep,
  subsituation_translations_id,
  learning_word_1_id,
  learning_word_2_id,
  learning_word_3_id,
  grammar_learned_id,
  backStep,

  geGrammarId,
  geName,
  geAuxiliarTitle,
  gePositiveSentenceEx,
  geNegativeSentenceEx,
  geInterrogativeSentenceEx,
  gePositiveSentenceSt,
  geNegativeSentenceSt,
  geInterrogativeSentenceSt,
  geRule1,
  geRule2,
  geRule3,
  geFirstExplanation
}) {


  return (
    <>
      <section className={styles.card}>

        {geName && (
          <div className={styles.grammar}>
            <header>
              <h2>Verbo to be</h2>
              <p>{geName}</p>
            </header>


            <h3>{geAuxiliarTitle} </h3>

            <ul className={styles.firstList}>

              <li>
                <span><img src={plusWhite} alt="" /> {gePositiveSentenceEx}</span>
                <span>{gePositiveSentenceSt}</span>
              </li>

              <li>
                <span><img src={minusWhite} alt="" />{geNegativeSentenceEx}</span>
                <span>{geNegativeSentenceSt}</span>
              </li>

              <li>
                <span><img src={interrogativeWhite} alt="" />{geInterrogativeSentenceEx}</span>
                <span>{geInterrogativeSentenceSt}</span>
              </li>

            </ul>

            <p>
              {geFirstExplanation}
            </p>

            <ul className={styles.secondList}>
              <li>{geRule1}</li>
              <li>{geRule2}</li>
              <li>{geRule3}</li>
            </ul>
          </div>
        )}
        {videoBackground && (

          <video autoPlay className={styles.videoBackground}>
            <source src={videoBackground} type="video/mp4" />
          </video>

        )}

        <section className={styles.texts}>



          {name && (
            <div className={styles.translation}>
              <h1>{name}</h1>
              <p><img src={translation} alt="" />{nameTranslation} </p>
            </div>
          )}

          {wordLearning1 && (

            <div className={styles.explanations}>

              {wordLearning1 && (
                <p><span>{wordLearning1}</span> <img src={arrowRightSimple} alt="" /> <span>{wordLearning1Translation}</span> </p>
              )}

              {wordLearning2 && (
                <p><span>{wordLearning2}</span> <img src={arrowRightSimple} alt="" /> <span>{wordLearning2Translation}</span> </p>
              )}

              {wordLearning3 && (
                <p><span>{wordLearning3}</span> <img src={arrowRightSimple} alt="" /> <span>{wordLearning3Translation}</span> </p>
              )}

            </div>
          )}

          <div className={styles.answer}>
            <p>{question1}</p>
            <span onClick={() => {
              nextStep()
            }}>
              <img src={camera} alt="" />
            </span>
          </div>
        </section>

        {/* 
          <div>
           </div>
*/}
      </section>
    </>
  )
}

export default LearningCard