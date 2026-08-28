import React from 'react'
import styles from './SocialChat.module.css';
import { useNavigate } from 'react-router-dom';
import arrowLeftWhite from '@/assets/icons/arrowLeftWhite.svg'

function SocialChat() {

    const navigate = useNavigate();


    return (
        <>

            <section className={styles.container}>

                <header>
                    <button onClick={() => navigate("/contacts")}>
                        <img src={arrowLeftWhite} alt="" />
                    </button>
                    <h3>Mark Kuznetsova</h3>
                </header>

                <main>
                    <p>Hola como estas</p>

                    <p>Yo muy bien y tu?</p>
                </main>

                <footer>
                    <input type="text" />
                </footer>

            </section>
        </>
    )
}

export default SocialChat