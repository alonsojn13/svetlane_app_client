import React, { useEffect, useState } from 'react'
import styles from '@/Features/Chat/Chat.module.css';

import microphone from '@/Assets/icons/microphoneWhite.svg'
import chatBg from '@/Assets/img/chatBg3.png'
import HamburgerMenu from '@/Components/Navbar/HamburgerMenu';

import sendMessageWhite from '@/Assets/icons/sendMessageWhite.svg'
import usePersonalInfo from '@/Shared/hooks/user/useUserInfo';
import useContactMessages from '../Contacts/useContactMessages';
import { useParams } from 'react-router-dom';
import { useSendMessage } from '../Contacts/useSendMessage';
import useContactInfo from '@/Features/Contacts/useContactInfo';

function Chat() {

  const [msgParagraph, setMsgParagraph] = useState("");

  const { sendMessage } = useSendMessage();
  const { id, chatId } = useParams();
  const personalInfo = usePersonalInfo();

  const data = useContactMessages(chatId, id);

  const contactInfo = useContactInfo(id);
  console.log(contactInfo)

  
  const currentImgMessage = msgParagraph.length === 0 ? microphone : sendMessageWhite;



  
  function handleSendMessage(chatId) {
    const msg = {
      message: msgParagraph,
      chatId: chatId,
      msgTime: new Date().toLocaleTimeString('en-GB')
    }
    sendMessage(msg);
  }


  return (
    <>
      <img className={styles.chatBg} src={chatBg} alt="" />
      <section className={styles.pageContainer}>

        <header className={styles.headerContactInfo}>
          <div>
            {contactInfo.name} {contactInfo.lastname}
          </div>
          <HamburgerMenu />
        </header>

        <section className={styles.messagesContainer}>
          {data.length === 0 ? (
            <div>There's no messages</div>
          ) : data.map((m) => (
            <article className={styles.message}>
              {m.contactId !== personalInfo.id ? (
                <p className={styles.contactMsg}>{m.paragraph} <span>{m.msgTime.slice(0, -3)}</span></p>
              ) : (
                <p className={styles.ownMsg}>{m.paragraph} <span>{m.msgTime.slice(0, -3)}</span></p>
              )}
            </article>
          ))}
        </section>

        <section className={styles.sendMessageField}>
          <textarea name="" id="" placeholder='How are you feeling?...' onChange={(e) => setMsgParagraph(e.target.value)} value={msgParagraph}></textarea>
          <button onClick={() => {
            handleSendMessage(chatId)
            setMsgParagraph("")
          }}>
            <img src={currentImgMessage} alt="" />
          </button>
        </section>

      </section>

    </>
  )
}

export default Chat