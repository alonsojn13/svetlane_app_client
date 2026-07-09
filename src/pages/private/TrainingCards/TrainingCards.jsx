import React, { useState } from 'react'
import styles from './TrainingCards.module.css'

import Btn1 from '../../../components/Buttons/Btn1/Btn1';
import Card1 from './Card1';
import microphoneWhite from '../../../assets/icons/microphoneWhite.svg';

import what from '../../../assets/cards_audio/what.ogg';
import is from '../../../assets/cards_audio/is.ogg';
import your from '../../../assets/cards_audio/your.ogg';
import name from '../../../assets/cards_audio/name.ogg';
import whatIsYourName from '../../../assets/cards_audio/whatIsYourName.ogg';



function TrainingCards() {
  const [step, setStep] = useState(1);

  const updateStep = () => {
    setStep(prev => prev + 1);
  }

  const backStep = () => {
    setStep(prev => prev - 1);
  }

  return (
    <>



      {step === 1 && (
        <Card1
          paragraph={
            <>
              What
            </>
          }
          audio={what}
          word1ExplLearning="What"
          word1ExplKnown="que"
          firstQuest="que"
          nextStep={updateStep}
        />
      )}


      {step === 2 && (
        <Card1
          paragraph={
            <>
              Is
            </>
          }
          audio={is}
          word1ExplLearning="Is"
          word1ExplKnown="es"
          firstQuest="es"
          nextStep={updateStep}
          backStep={backStep}
        />
      )}

      {step === 3 && (
        <Card1
          paragraph={
            <>
              Your
            </>
          }
          audio={your}
          word1ExplLearning="Your"
          word1ExplKnown="tuyo"
          firstQuest="tuyo"
          nextStep={updateStep}
          backStep={backStep}
        />
      )}

      {step === 4 && (
        <Card1
          paragraph={
            <>
              Name
            </>
          }
          audio={name}
          word1ExplLearning="Name"
          word1ExplKnown="nombre"
          firstQuest="nombre"
          nextStep={updateStep}
          backStep={backStep}
        />
      )}


      {step === 5 && (
        <Card1
          paragraph={
            <>
              What is your name
            </>
          }
          audio={whatIsYourName}
          word1ExplLearning="Is"
          word1ExplKnown="Cual es tu nombre?"
          firstQuest="cual es tu nombre?"
          nextStep={updateStep}
          backStep={backStep}
        />
      )}


      {step === 6 && (
        <Card1
          paragraph={
            <>
              What
            </>
          }
          nextStep={updateStep}
          backStep={backStep}
          audio={what}
          firstQuest="what"
          answerImage={2}
          typeAnswerDesc={2}
          questionsDesc={2}
        />
      )}


      {step === 7 && (
        <Card1
          paragraph={
            <>
              Is
            </>
          }
          nextStep={updateStep}
          backStep={backStep}
          audio={is}
          firstQuest="is"
          answerImage={2}
          typeAnswerDesc={2}
          questionsDesc={2}
        />
      )}


      {step === 8 && (
        <Card1
          paragraph={
            <>
              Your
            </>
          }
          nextStep={updateStep}
          backStep={backStep}
          audio={your}
          firstQuest="your"
          answerImage={2}
          typeAnswerDesc={2}
          questionsDesc={2}
        />
      )}


      {step === 9 && (
        <Card1
          paragraph={
            <>
              Name
            </>
          }
          nextStep={updateStep}
          backStep={backStep}
          audio={name}
          firstQuest="name"
          answerImage={2}
          typeAnswerDesc={2}
          questionsDesc={2}
        />
      )}


        {step === 10 && (
        <Card1
          paragraph={
            <>
              What is your name?
            </>
          }
          nextStep={updateStep}
          backStep={backStep}
          audio={whatIsYourName}
          firstQuest="what is your name?"
          answerImage={2}
          typeAnswerDesc={2}
          questionsDesc={2}
        />
      )}




    </>
  )
}

export default TrainingCards