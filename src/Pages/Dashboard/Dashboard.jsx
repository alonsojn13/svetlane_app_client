import React from 'react'
import { Link } from 'react-router-dom';
import styles from './Dashboard.module.css';

import snowy from '@/Assets/icons/snowy.svg';
import greeting from '@/Assets/video/greeting.mp4';

import Btn1 from '@/Components/Buttons/Btn1/Btn1';
import useUserInfo from '@/Shared/hooks/user/useUserInfo';
import imgFlag from '@/Shared/scripts/imgFlag';
import languageCategory from '@/Shared/scripts/languageCategory';
import Btn2 from '@/Components/Buttons/Btn2/Btn2';



function Dashboard() {

  const hour = new Date().getHours();
  const minutes = new Date().getMinutes();

  const hourFormatted = hour < 10 ? 0 + "" + hour : hour;
  const minutesFormatted = minutes < 10 ? 0 + "" + minutes : minutes;

  let dayMessage = "";
  if (hour >= 6 && hour <= 11) {
    dayMessage = "Good Morning";
  } else if (hour >= 12 && hour < 17) {
    dayMessage = "Good Afternoon";
  } else if (hour >= 17 && hour <= 23) {
    dayMessage = "Good Evening";
  } else {
    dayMessage = "Good Night";
  }


  const userInfo = useUserInfo();

  const userLanguageLearningFlag = imgFlag(userInfo);

  const userLanguageCategory = languageCategory(userInfo);


  return (
    <>


      <section className={styles.heroContainer}>
        <header className={styles.greeting}>
          {dayMessage}, <br />
          <div>
            <span>{userInfo.name}</span>.
            <p className={styles.date}>
              <span>{hourFormatted}:{minutesFormatted}</span>
              <span><img src={snowy} alt="" /></span> </p>
          </div>
        </header>
      </section>

      <section className={styles.trainingContainer}>
        <div className={styles.training}>
          <p className={styles.descriptitveMsg}>If you think it better, every day you have at least 10m free</p>


          <div className={styles.enterTraining}>
            <video autoPlay muted className={styles.videoSituationLearning} src={greeting}></video>

            <p className={styles.videoBtn}>
            <Link to="/training"><Btn2 text1="Continue" /></Link>
            </p>
          </div>

        </div>
      </section>

      <section className={styles.stadisticsContainer}>
        <div className={styles.stadistics}>

          <header>
            <img src={userLanguageLearningFlag} alt="" />
            <div>
              <h3>{userInfo.targetLanguageString} </h3>
              <p>{userLanguageCategory}</p>
            </div>
          </header>

          <article>
            <div>
              <p>4</p>
            </div>
            <div>
              <h3 className='degraded-text-white'>Real-Life Situations </h3>
              <p>You can handle.</p>
            </div>
          </article>



        </div>
      </section>



      <section className={styles.infoContainer}>
        <div className={styles.info}>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet. <span>Magnam laborum sequi perspiciatis nemo obcaecati minima</span> .
          </p>
        </div>
      </section>

      <footer className={styles.footer}>
        <img className={styles.footerImg} src={userLanguageLearningFlag} alt="" />

        <p>Svetlane</p>
        <p>© 2026 Brilliant Technologies </p>

      </footer>

    </>
  )
}

export default Dashboard