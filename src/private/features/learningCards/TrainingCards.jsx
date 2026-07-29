import React, { useState } from 'react'
import styles from './TrainingCards.module.css'
import LearningCard from './LearningCard';
import useShowCurrentLesson from '../../../services/hooks/lessons/useShowCurrentLesson';
import arrowLeftWhite from '../../../assets/icons/arrowLeftWhite.svg';
import HamburgerMenu from '../../../components/Navbar/HamburgerMenu';


function TrainingCards() {
  const [step, setStep] = useState(2);

  const updateStep = () => {
    setStep(prev => prev + 1);
  }

  const backStep = () => {
    if (step > 0) {
      setStep(prev => prev - 1);
    }
  }

  const learningCards = useShowCurrentLesson();


  // flujo:
  // 1. componente se monta
  // 2. learningCards con su valor inicial []
  // 3. react renderiza el componente:     // learningCards = [] 
  // y al hacer learningcards[0].title = undefined (explota)
  // 4. se ejecuta axios
  // 5. y mas tarde (por ms) llega la respuesta, react actualiza el estado [...] y vuelve a renderizar. (pero ya exploto el error)


  // si el array no tiene nada (0) muestra cargandolo
  if (learningCards.length === 0) {
    return <div>Wait a moment...</div>
  }


  console.log(learningCards);

  const currentCard = learningCards[step];

  const learningCardModel = currentCard?.learningCardModel;
  const learningCardTranslation = currentCard?.learningCardTranslation;
  const grammar = currentCard?.grammar;



  const id_LCB = learningCards[step]?.learningCardModel?.id;
  const subsituation_translations_id_LCB = learningCards[step]?.learningCardModel.subsituation_translations_id;
  const language_LCB = learningCards[step]?.learningCardModel.language;
  const video_url_LCB = learningCards[step]?.learningCardModel.video_url;
  const learning_word_1_LCB = learningCards[step]?.learningCardModel.learning_word_1;
  const learning_word_2_LCB = learningCards[step]?.learningCardModel.learning_word_2;
  const learning_word_3_LCB = learningCards[step]?.learningCardModel.learning_word_3;
  const grammar_id_LCB = learningCards[step]?.learningCardModel.grammar_id;
  const name_LCB = learningCards[step]?.learningCardModel.name;

  const {
    id,
    subsituation_translations_id,
    video_url,
    language,
    learning_word_1_id,
    learning_word_2_id,
    learning_word_3_id,
    name,
    learning_word_1,
    learning_word_2,
    learning_word_3,
    grammar_explanations_id
  } = learningCardModel ?? {};

  const id_LCT = learningCards[step]?.learningCardTranslation.grammar_id;
  const learning_card_id_LCT = learningCards[step]?.learningCardTranslation.learning_card_id;
  const language_LCT = learningCards[step]?.learningCardTranslation.language;
  const name_LCT = learningCards[step]?.learningCardTranslation.name;
  const learning_word_1_id_LCT = learningCards[step]?.learningCardTranslation.learning_word_1_LCT;
  const learning_word_2_id_LCT = learningCards[step]?.learningCardTranslation.learning_word_2_LCT;
  const learning_word_3_id_LCT = learningCards[step]?.learningCardTranslation.learning_word_3_LCT;
  const writing_question_LCT = learningCards[step]?.learningCardTranslation.writing_question;
  const speaking_question_LCT = learningCards[step]?.learningCardTranslation.spekaing_question;
  const grammar_explanation_id_LCT = learningCards[step]?.learningCardTranslation.grammar_explanation_id;


  const {
    geId,
    geGrammarId,
    geLanguage,
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
  } = grammar ?? {};

  console.log(geGrammarId)


  return (
    <>


      <header className={styles.navbar}>
        <nav>
          <img onClick={backStep} className={styles.backStep} src={arrowLeftWhite} alt="" />

          <HamburgerMenu />

        </nav>
      </header>



      {step < learningCards.length && (

        <LearningCard

          videoBackground={video_url_LCB}
          name={name_LCB}
          nameTranslation={name_LCT}

          wordLearning1={learning_word_1_LCB}
          wordLearning1Translation={learning_word_1_id_LCT}
          wordLearning2={learning_word_2_LCB}
          wordLearning2Translation={learning_word_2_id_LCT}
          wordLearning3={learning_word_3_LCB}
          wordLearning3Translation={learning_word_3_id_LCT}

          question1={writing_question_LCT}
          typeAnswer={2}
          subsituation_translations_id={subsituation_translations_id_LCB}
          learning_word_1_id={learning_word_1_id}
          learning_word_2_id={learning_word_2_id}
          learning_word_3_id={learning_word_3_id}


          // Grammar
          geGrammarId={geGrammarId}
          geName={geName}
          geAuxiliarTitle={geAuxiliarTitle}
          gePositiveSentenceEx={gePositiveSentenceEx}
          geNegativeSentenceEx={geNegativeSentenceEx}
          geInterrogativeSentenceEx={geInterrogativeSentenceEx}
          gePositiveSentenceSt={gePositiveSentenceSt}
          geNegativeSentenceSt={geNegativeSentenceSt}
          geInterrogativeSentenceSt={geInterrogativeSentenceSt}
          geRule1={geRule1}
          geRule2={geRule2}
          geRule3={geRule3}
          geFirstExplanation={geFirstExplanation}

          nextStep={updateStep}

        />


      )}

      {step >= learningCards.length && (
        <div>Repaso</div>

      )}

    </>
  )
}

export default TrainingCards