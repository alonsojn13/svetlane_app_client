import React, { useRef, useState } from 'react'
import styles from './TrainingCards.module.css'
import LearningCard from './LearningCard';
import useShowCurrentLesson from '@/services/hooks/lessons/useShowCurrentLesson';
import arrowLeftWhite from '@/assets/icons/arrowLeftWhite.svg';
import HamburgerMenu from '@/components/Navbar/HamburgerMenu';
import ReviewCard from './ReviewCard';


  // flujo:
  // 1. componente se monta
  // 2. learningCards con su valor inicial []
  // 3. react renderiza el componente:     // learningCards = [] 
  // y al hacer learningcards[0].title = undefined (explota)
  // 4. se ejecuta axios
  // 5. y mas tarde (por ms) llega la respuesta, react actualiza el estado [...] y vuelve a renderizar. (pero ya exploto el error)


function TrainingCards() {
  let [i, setI] = useState(0);

  // Current array/card position
  let [step, setStep] = useState(0);

  const updateStep = () => {
    setStep(prev => prev + 1);
  }

  const backStep = () => {
    if (step > 0) {
      setStep(prev => prev - 1);
    }
    setI(prev => prev - 1);
  }

  const learningCards = useShowCurrentLesson();

  console.log(learningCards);

  // si el array no tiene nada (0) muestra cargandolo
  if (learningCards.length === 0) {
    <div>Wait a moment...</div>
  }

  console.log("soy el step: " + step);

  const isReview = step >= learningCards.length;

  // 3(step) - 3(length) = 0 (that's the position of the card where we need to start to review)
  const currentCard = isReview
  ? learningCards[step - learningCards.length]
  : learningCards[step];


  const learningCardModel = currentCard?.learningCardModel;
  const learningCardTranslation = currentCard?.learningCardTranslation;
  const grammar = currentCard?.grammar;


  const {
    id: LCM_id,
    subsituation_translations_id: LCM_subsituation_translations_id,
    video_url: LCM_video_url,
    language: LCM_language,
    learning_word_1_id: LCM_learning_word_1_id,
    learning_word_2_id: LCM_learning_word_2_id,
    learning_word_3_id: LCM_learning_word_3_id,
    name: LCM_name,
    learning_word_1: LCM_learning_word_1,
    learning_word_2: LCM_learning_word_2,
    learning_word_3: LCM_learning_word_3,
    grammar_explanations_id: LCM_grammar_explanations_id
  } = learningCardModel ?? {};

  const {
    id: LCT_id,
    learning_card_id: LCT_learning_card_id,
    language: LCT_language,
    name: LCT_name,
    learning_word_1_id: LCT_learning_word_1_id,
    learning_word_2_id: LCT_learning_word_2_id,
    learning_word_3_id: LCT_learning_word_3_id,
    writing_question: LCT_writing_question,
    speaking_question: LCT_speaking_question,
    learning_word_1_translation: LCT_learning_word_1,
    learning_word_2_translation: LCT_learning_word_2,
    learning_word_3_translation: LCT_learning_word_3
  } = learningCardTranslation ?? {}

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


  return (
    <>

      <header className={styles.navbar}>
        <nav>
          <img onClick={backStep} className={styles.backStep} src={arrowLeftWhite} alt="" />

          <HamburgerMenu />

        </nav>
      </header>

      {!isReview ? (

        <LearningCard
          videoBackground={LCM_video_url}
          name={LCM_name}
          nameTranslation={LCT_name}

          wordLearning1={LCM_learning_word_1}
          wordLearning1Translation={LCT_learning_word_1}
          wordLearning2={LCM_learning_word_2}
          wordLearning2Translation={LCT_learning_word_2}
          wordLearning3={LCM_learning_word_3}
          wordLearning3Translation={LCT_learning_word_3}

          question1={LCT_writing_question}
          subsituation_translations_id={LCM_subsituation_translations_id}
          learning_word_1_id={LCM_learning_word_1_id}
          learning_word_2_id={LCM_learning_word_2_id}
          learning_word_3_id={LCM_learning_word_3_id}

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

      ) : (
          <ReviewCard
            videoBackground={LCM_video_url}
            name={LCM_name}

            wordLearning1={LCM_learning_word_1}
            wordLearning1Translation={LCT_learning_word_1_id}
            wordLearning2={LCM_learning_word_2}
            wordLearning2Translation={LCT_learning_word_2_id}
            wordLearning3={LCM_learning_word_3}
            wordLearning3Translation={LCT_learning_word_3_id}

            question1={LCT_writing_question}
            subsituation_translations_id={LCM_subsituation_translations_id}
            learning_word_1_id={LCM_learning_word_1_id}
            learning_word_2_id={LCM_learning_word_2_id}
            learning_word_3_id={LCM_learning_word_3_id}

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


    </>
  )
}


export default TrainingCards