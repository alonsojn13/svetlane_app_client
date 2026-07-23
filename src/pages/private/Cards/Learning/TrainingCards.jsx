import React, { useState } from 'react'
import styles from './TrainingCards.module.css'
import greeting from '../../../../assets/video/greeting.mp4'
import LearningCard from './LearningCard';
import ReviewCard from '../Review/ReviewCard';
import useShowCurrentLesson from '../../../../services/hooks/lessons/useShowCurrentLesson';


function TrainingCards() {
  const [step, setStep] = useState(1);

  const updateStep = () => {
    setStep(prev => prev + 1);
  }

  const backStep = () => {
    setStep(prev => prev - 1);
  }

  const learningCards = useShowCurrentLesson();
  console.log(learningCards);


  
  return (
    <>

<h1>hola</h1>
<button onClick={() => learningCards}>Presioname</button>
{/* 

      {step === 1 && (

        <LearningCard
          videoBackground={greeting}
          paragraph={"My name is Alonso"}
          paragraphTranslation={"Mi nombre es alonso"}
          question1={"¿Como dices tu nombre en ingles?"}
          typeAnswer={1}
          nextStep={updateStep}

        />
      )}


      {step === 2 && (

        <LearningCard
          videoBackground={greeting}
          paragraph={"My name"}
          paragraphTranslation={"Mi nombre"}
          wordLearning1={"My"}
          wordLearning1Translation={"Mi"}
          wordLearning2={"Name"}
          wordLearning2Translation={"Nombre"}
          question1={"¿Como escribes mi y nombre en ingles?"}
          typeAnswer={1}
          backStep={backStep}
          nextStep={updateStep}


        />
      )}

      {step === 3 && (

        <ReviewCard
          videoBackground={greeting}
          paragraph={"My name"}

          typeAnswer={1}
          backStep={backStep}
          nextStep={updateStep}

        />
      )}



      {step === 4 && (

        <FluencyCard
          videoBackground={greeting}
          paragraph={"My name"}

          typeAnswer={1}
          backStep={backStep}
          nextStep={updateStep}

        />
      )}


      */}



    </>
  )
}

export default TrainingCards