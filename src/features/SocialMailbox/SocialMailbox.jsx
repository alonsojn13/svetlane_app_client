import { useGetContactRequest } from '@/services/hooks/social/useGetContactRequests';
import { useValidateRequest } from '@/services/hooks/social/useValidateRequest';
import React from 'react'
import frFlag from '@/assets/icons/frFlag.svg'
import spFlag from '@/assets/icons/spFlag.svg'
import acceptWhite from '@/assets/icons/acceptWhite.svg'
import declineWhite from '@/assets/icons/declineWhite.svg'

import home from '@/assets/icons/homeWhite.svg'
import bellWhite from '@/assets/icons/bellWhite.svg'

import styles from './SocialMailbox.module.css';
import { Link } from 'react-router-dom';

function SocialMailbox() {

  const requests = useGetContactRequest();

  const { validateRequest } = useValidateRequest();

  function validateRequestBtn(booleanValue,contactId) {

    const obj = {
      boolean: booleanValue,
      contactUserId: contactId
    }

    validateRequest(obj);

  }

  return (
    <>

      {(requests.map((r) => (
        <div>
          <h2></h2>
          {r.contactId}
          {r.languageAvailable}
          {r.languageSource}
          {r.shortBio}

        </div>
      )))}

      <section className={styles.container}>

        <header className={styles.header}>
          <Link to={"/mailbox"}><img src={bellWhite} alt="" /></Link>
          <Link to={"/posts"}><img src={bellWhite} alt="" /></Link>
          <Link to={"/dashboard"}><img src={home} alt="" /></Link>
        </header>

        <div className={styles.contactRequestsContainer}>

      {(requests.map((r) => (

        <article className={styles.contactRequest}>

          <div className={styles.userProfileInfo}>
            <h3><img className={styles.userMotherTongueFlag} src={frFlag} alt="" /> {r.name} {r.lastname} </h3>
            <span>I love workout by night with my friends</span>
          </div>

          <div className={styles.hobbies}>
            <span>Gym</span>
            <span>Lecture</span>
            <span>Design</span>
          </div>

          <h5>Practicing <img className={styles.userLanguageLearningFlag} src={spFlag} alt="" /> </h5>

          <div className={styles.btnsContainer}>
            <button onClick={() => validateRequestBtn(false,r.contactId)}><img src={declineWhite} alt="" />Decline</button>
            <button onClick={() => validateRequestBtn(true,r.contactId)}><img src={acceptWhite} alt="" />Accept</button>
          </div>

        </article>
      )))}

      


        </div>
      </section>

    </>

  )
}

export default SocialMailbox