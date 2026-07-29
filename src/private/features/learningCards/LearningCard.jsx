import arrowRightSimple from '../../../assets/icons/arrowRightSimple.svg';
import camera from '../../../assets/icons/camera.svg';
import microphoneWhite from '../../../assets/icons/microphoneWhite.svg';
import translation from '../../../assets/icons/translation.svg';
import styles from './LearningCard.module.css';
import plusWhite from '../../../assets/icons/plusWhite.svg';
import minusWhite from '../../../assets/icons/minusWhite.svg';
import interrogativeWhite from '../../../assets/icons/interrogativeWhite.svg';

import useAnswerVerification from '../../../services/hooks/lessons/useAnswerVerification';

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
  typeAnswer,
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

  const typeAnswerCalculated = typeAnswer === 1 ? camera : microphoneWhite;

  const user_id = 1;

  console.log("desde learningcard: " + geGrammarId);

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
            <span onClick={() => {
              nextStep()
              useAnswerVerification(
                typeAnswer,
                camera,
                user_id,
                geGrammarId,
                subsituation_translations_id,
                learning_word_1_id,
                learning_word_2_id,
                learning_word_3_id,
              );
            }}>
              <img src={typeAnswerCalculated} alt="" />

            </span>
          </div>
        </section>
      </section>

    </>
  )
}

export default LearningCard