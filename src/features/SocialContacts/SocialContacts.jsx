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
import { useSendMessage } from '@/services/hooks/social/useSendMessage';

function SocialContacts() {

    const [step, setStep] = useState(1);
    const [messages, setMessages] = useState([]);

    const contacts = useContacts();
    console.log(contacts);

    const { chatContact, data } = useChatContact();

    // Load a chat with all the messages from the two users.
    async function openChat(chatId, idContact) {
        const res = await chatContact(chatId, idContact);
        setStep(2);
        setMessages(res.data);
    }

    const [message, setMessage] = useState("");


    const { sendMessage } = useSendMessage();


    function sendMessageBtn(chatId) {

        const msg = {
            message: message,
            chatId: chatId
        }

        sendMessage(msg);
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



                {contacts.map((c) => (
                    <>
                        {step === 1 && (

                            <div className={styles.contactsContainer}>


                                <article onClick={() => openChat(c.chatId, c.idContact)} className={styles.contactCard}>
                                    <header className={styles.userProfileInfo}>
                                        <h3><img className={styles.userMotherTongueFlag} src={frFlag} alt="" /> {c.name} {c.lastname} <img className={styles.greenDot} src={greenDot} alt="" /> </h3>
                                        <h5>Practicing <img className={styles.userLanguageLearningFlag} src={spFlag} alt="" /></h5>
                                    </header>
                                    <footer>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, ad reiciendis sequi nam beatae quidem? </p>
                                        <span>...</span>
                                    </footer>
                                </article>


                            </div>
                        )}

                        {step === 2 && (
                            <div>
                                {messages.map((m) => (
                                    <div>
                                        <p>{m.paragraph} </p>
                                    </div>
                                ))}
                                <hr />
                                <textarea name="" id="" onChange={(e) => setMessage(e.target.value)} value={message}></textarea>
                                <button onClick={() => sendMessageBtn(c.chatId)}>Enviar mensaje</button>
                            </div>
                        )}
                    </>
                ))}


            </section>
        </>
    )
}

export default SocialContacts