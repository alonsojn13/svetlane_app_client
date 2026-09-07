import { useGetContactRequest } from '@/Features/Mailbox/useGetContactRequests';
import { useValidateRequest } from '@/Features/Mailbox/useValidateRequest';
import React, { useState } from 'react'
import frFlag from '@/Assets/icons/frFlag.svg'
import spFlag from '@/Assets/icons/spFlag.svg'
import acceptWhite from '@/Assets/icons/acceptWhite.svg'
import declineWhite from '@/Assets/icons/declineWhite.svg'

import styles from './Mailbox.module.css';
import { Link } from 'react-router-dom';
import Navbar from '@/Components/Navbar/Navbar';

export default function Mailbox() {

  const requests = useGetContactRequest();

  const { validateRequest } = useValidateRequest();

  // loading, without requests, show requests = with ? : ? :

  function validateRequestBtn(booleanValue, contactId) {

    const obj = {
      boolean: booleanValue,
      contactUserId: contactId
    }

    validateRequest(obj);

  }


  return (
    <>

      <Navbar />


      <section className={styles.container}>


        <div>
          {requests.length === 0 && "Without any contact request"}
        </div>

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
                <button onClick={() => validateRequestBtn(false, r.contactId)}><img src={declineWhite} alt="" />Decline</button>
                <button onClick={() => validateRequestBtn(true, r.contactId)}><img src={acceptWhite} alt="" />Accept</button>
              </div>

            </article>
          )))}
        </div>

      </section>

    </>

  )
}
