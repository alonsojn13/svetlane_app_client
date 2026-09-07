import React, { useRef, useState } from 'react'
import styles from './TrainingCards.module.css'

import arrowLeftWhite from '@/Assets/icons/arrowLeftWhite.svg';

import LearningCard from '@/Features/Training/LearningCard/LearningCard';
import HamburgerMenu from '@/Components/Navbar/HamburgerMenu';
import ReviewCard from '@/Features/Training/ReviewCard/ReviewCard';
import useTrainingCard from '@/Features/Training/TrainingCards/useTrainingCard';


  // flujo:
  // 1. componente se monta
  // 2. learningCards con su valor inicial []
  // 3. react renderiza el componente:     // learningCards = [] 
  // y al hacer learningcards[0].title = undefined (explota)
  // 4. se ejecuta axios
  // 5. y mas tarde (por ms) llega la respuesta, react actualiza el estado [...] y vuelve a renderizar. (pero ya exploto el error)


function TrainingCards() {

  let [view, setView] = useState(0);

  const goNextView = () => {
    setView(prev => prev + 1);
  }

  const goPreviousView = () => {
    if (view > 0) {
      setView(prev => prev - 1);
    }
  }

  const trainingCards = useTrainingCard();

  console.log(trainingCards);

  // si el array no tiene nada (0) muestra cargandolo
  if (trainingCards.length === 0) {
    <div>Wait a moment...</div>
  }

  const isReview = view >= trainingCards.length;

  // 3(step) - 3(length) = 0 (that's the position of the card where we need to start to review)
  const currentCard = isReview
  ? trainingCards[view - trainingCards.length]
  : trainingCards[view];




  const targetCard = currentCard?.targetCard;
  const targetCardTranslation = currentCard?.targetCardTranslation;
  const grammarCard = currentCard?.grammarCard;

  const {
    id: tcId,
    subsituationTranslationId: tcSubsituationTranslationId,
    videoUrl: tcVideoUrl,
    language: tcLanguage,
    learningWord1Id: tcLearningWord1Id,
    learningWord2Id: tcLearningWord2Id,
    learningWord3Id: tcLearningWord3Id,
    name: tcName,
    learningWord1String: tcLearningWord1String,
    learningWord2String: tcLearningWord2String,
    learningWord3String: tcLearningWord3String,
    grammarExplanationId: tcGrammarExplanationId
  } = targetCard ?? {};

  const {
    id: tctId,
    learningCardId: tctLearningCardId,
    language: tctLanguage,
    name: tctName,
    learningWord1Id: tctLearningWord1Id,
    learningWord2Id: tctLearningWord2Id,
    learningWord3Id: tctLearningWord3Id,
    writingQuestion: tctWritingQuestion,
    speakingQuestion: tctSpeakingQuestion,
    learningWord1Translation: tctLearningWord1Translation,
    learningWord2Translation: tctLearningWord2Translation,
    learningWord3Translation: tctLearningWord3Translation
  } = targetCardTranslation ?? {}

  const {
    gcId,
    gcGrammarId,
    gcLanguage,
    gcName,
    gcAuxiliarTitle,
    gcPositiveSentenceEx,
    gcNegativeSentenceEx,
    gcInterrogativeSentenceEx,
    gcPositiveSentenceSt,
    gcNegativeSentenceSt,
    gcInterrogativeSentenceSt,
    gcRule1,
    gcRule2,
    gcRule3,
    gcFirstExplanation
  } = grammarCard ?? {};


  return (
    <>

      <header className={styles.navbar}>
        <nav>
          <img onClick={goPreviousView} className={styles.backStep} src={arrowLeftWhite} alt="" />

          <HamburgerMenu />

        </nav>
      </header>

      {/* When doesn't be a Review Card show the Learning Card.*/}
      {!isReview ? (

        <LearningCard
          videoBackground={tcVideoUrl}
          name={tcName}
          nameTranslation={tctName}

          wordLearning1={tcLearningWord1String}
          wordLearning1Translation={tctLearningWord1Translation}
          wordLearning2={tcLearningWord2String}
          wordLearning2Translation={tctLearningWord2Translation}
          wordLearning3={tcLearningWord3String}
          wordLearning3Translation={tctLearningWord3Translation}

          question1={tctWritingQuestion}
          subsituation_translations_id={tcSubsituationTranslationId}
          learning_word_1_id={tcLearningWord1Id}
          learning_word_2_id={tcLearningWord2Id}
          learning_word_3_id={tcLearningWord3Id}

          geGrammarId={gcGrammarId}
          geName={gcName}
          geAuxiliarTitle={gcAuxiliarTitle}
          gePositiveSentenceEx={gcPositiveSentenceEx}
          geNegativeSentenceEx={gcNegativeSentenceEx}
          geInterrogativeSentenceEx={gcInterrogativeSentenceEx}
          gePositiveSentenceSt={gcPositiveSentenceSt}
          geNegativeSentenceSt={gcNegativeSentenceSt}
          geInterrogativeSentenceSt={gcInterrogativeSentenceSt}
          geRule1={gcRule1}
          geRule2={gcRule2}
          geRule3={gcRule3}
          geFirstExplanation={gcFirstExplanation}
          nextStep={goNextView}
        />

      ) : (
          <ReviewCard
            videoBackground={tcVideoUrl}
            name={tcName}

            wordLearning1={tcLearningWord1String}
            wordLearning1Translation={tctLearningWord1Id}
            wordLearning2={tcLearningWord2String}
            wordLearning2Translation={tctLearningWord2Id}
            wordLearning3={tcLearningWord3String}
            wordLearning3Translation={tctLearningWord3Id}

            question1={tctWritingQuestion}
            subsituation_translations_id={tcSubsituationTranslationId}
            learning_word_1_id={tcLearningWord1Id}
            learning_word_2_id={tcLearningWord2Id}
            learning_word_3_id={tcLearningWord3Id}

            geGrammarId={gcGrammarId}
            geName={gcName}
            geAuxiliarTitle={gcAuxiliarTitle}
            gePositiveSentenceEx={gcPositiveSentenceEx}
            geNegativeSentenceEx={gcNegativeSentenceEx}
            geInterrogativeSentenceEx={gcInterrogativeSentenceEx}
            gePositiveSentenceSt={gcPositiveSentenceSt}
            geNegativeSentenceSt={gcNegativeSentenceSt}
            geInterrogativeSentenceSt={gcInterrogativeSentenceSt}
            geRule1={gcRule1}
            geRule2={gcRule2}
            geRule3={gcRule3}
            geFirstExplanation={gcFirstExplanation}
            nextStep={goNextView}
          />
      )}


    </>
  )
}


export default TrainingCards