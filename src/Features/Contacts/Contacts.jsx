import React, { useState } from 'react';
import styles from './Contacts.module.css';


import spFlag from '@/Assets/icons/spFlag.svg'
import frFlag from '@/Assets/icons/frFlag.svg'
import greenDot from '@/Assets/icons/greenDot.svg'

import { useContacts } from '@/Features/Contacts/useContacts';
import useChatContact from '@/Features/Contacts/useContactMessages';
import { useSendMessage } from '@/Features/Contacts/useSendMessage';
import Navbar from '@/Components/Navbar/Navbar';
import HamburgerMenu from '@/Components/Navbar/HamburgerMenu';
import { useNavigate } from 'react-router-dom';

export default function Contacts() {


    const navigate = useNavigate();

    // custom hooks
    const personalContacts = useContacts();

    function handleChatView(contactId, chatId) {
        navigate(`/chat/${contactId}/${chatId}`);
    }





    return (
        <>
            <section className={styles.pageContainer}>
                <Navbar />
                <p>
                    {personalContacts.length === 0 && "Without any contacts"}
                </p>

                <div className={styles.contactsContainer}>
                    {personalContacts.map((c) => (
                        <>
                            <article onClick={() => {
                                {/* 
                                            loadContactMessages(c.chatId, c.idContact)
                                            setContactInfo(c)
                                        */}
                                handleChatView(c.idContact, c.chatId)
                            }} className={styles.contactCardInfo}>
                                <header className={styles.userProfileInfo}>
                                    <h3><img className={styles.userMotherTongueFlag} src={frFlag} alt="" /> {c.name} {c.lastname} <img className={styles.greenDot} src={greenDot} alt="" /> </h3>
                                    <h5>Practicing <img className={styles.userLanguageLearningFlag} src={spFlag} alt="" /></h5>
                                </header>
                                <footer>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, ad reiciendis sequi nam beatae quidem? </p>
                                    <span>...</span>
                                </footer>
                            </article>
                        </>
                    ))}
                </div>



            </section>
        </>
    )
}
