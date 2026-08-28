import React, { useState } from 'react';
import home from '@/assets/icons/homeWhite.svg'
import bellWhite from '@/assets/icons/bellWhite.svg'
import peopleWhite from '@/assets/icons/peopleWhite.svg'
import spFlag from '@/assets/icons/spFlag.svg'
import frFlag from '@/assets/icons/frFlag.svg'
import greenDot from '@/assets/icons/greenDot.svg'

import styles from './SocialContacts.module.css';
import { Link } from 'react-router-dom';
import { useContacts } from '@/services/hooks/social/useContacts';
import { useChatContact } from '@/services/hooks/social/useChatContact';

function SocialContacts() {

    const [step, setStep] = useState(1);



    const contacts = useContacts();
    console.log(contacts);

    const { chatContact, data } = useChatContact();

    async function openChat(idContact) {

        const res = await chatContact(idContact);
        console.log(res);

    }


    return (
        <>

            <section className={styles.container}>


                <header className={styles.header}>
                    <Link to={"/dashboard"}>
                        <img src={home} alt="" /></Link>
                    <Link to={"/dashboard"}>
                        <img src={peopleWhite} alt="" /></Link>
                    <Link to={"/dashboard"}>
                        <img src={bellWhite} alt="" /></Link>
                    <Link to={"/chat"}>
                        <img src={bellWhite} alt="" /></Link>

                </header>

                {step === 1 && (

                    <div className={styles.contactsContainer}>

                        {contacts.map((c) => (
                            <article onClick={() => openChat(c.idContact)} className={styles.contactCard}>
                                <header className={styles.userProfileInfo}>
                                    <h3><img className={styles.userMotherTongueFlag} src={frFlag} alt="" /> {c.name} {c.lastname} <img className={styles.greenDot} src={greenDot} alt="" /> </h3>
                                    <h5>Practicing <img className={styles.userLanguageLearningFlag} src={spFlag} alt="" /></h5>
                                </header>
                                <footer>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, ad reiciendis sequi nam beatae quidem? </p>
                                    <span>...</span>
                                </footer>
                            </article>

                        ))}
                    </div>
                )}

                {step === 2 && (
                    <div>
                        <h1>Kovaliov Kuznetsova</h1>
                    </div>
                )}


            </section>
        </>
    )
}

export default SocialContacts