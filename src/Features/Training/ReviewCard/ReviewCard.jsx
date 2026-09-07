import styles from './ReviewCard.module.css';
import { useEffect, useRef, useState } from 'react';

import microphoneWhite from '@/Assets/icons/microphoneWhite.svg';
import plusWhite from '@/Assets/icons/plusWhite.svg';
import minusWhite from '@/Assets/icons/minusWhite.svg';
import interrogativeWhite from '@/Assets/icons/interrogativeWhite.svg';

import { useVerifyAudio } from '@/Features/Training/ReviewCard/useVerifyAudio';


function ReviewCard({
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

  const user_id = 1;



  // next step logic:
  const [answer, setAnswer] = useState(false);
  const [status, setStatus] = useState(0);

  useEffect(() => {
    if (status === 200 && answer) {
      nextStep();
    }
    setAnswer(false);
    setStatus(0);
  }, [status, answer]);






  // audio recording

  const verifyAudio = useVerifyAudio();

  const [recording, setRecording] = useState(false);
  const recorder = useRef(null);
  const chunks = useRef([]);

  const start = async () => {

    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

    recorder.current = new MediaRecorder(stream);
    chunks.current = [];
    recorder.current.ondataavailable = (e) => chunks.current.push(e.data);


    recorder.current.onstop = async () => {

      const blob = new Blob(chunks.current, { type: "audio/webm" });
      const formData = new FormData();
      formData.append("audio", blob, "audio.webm");

      let { data, status } = await verifyAudio(
        formData,
        user_id,
        name,
        geGrammarId,
        subsituation_translations_id,
        learning_word_1_id,
        learning_word_2_id,
        learning_word_3_id);

      if (status === 200) {
        setAnswer(data);
        setStatus(200);
      }
    };

    recorder.current.start();
    setRecording(true);
  };

  const stop = () => {
    recorder.current.stop();
    setRecording(false);
  }


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
            </div>
          )}


          <div className={styles.answer}>
            <p>{question1}</p>
            <span >
              <img src={microphoneWhite} alt="" />
              <button onClick={start} disabled={recording}>Grabar</button>
              <button onClick={stop} disabled={!recording}>Enviar</button>
            </span>
          </div>
        </section>
      </section>

    </>
  )
}

export default ReviewCard