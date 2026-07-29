import React, { useState } from 'react'
import styles from './Register.module.css'
import registerUser from '../../../services/hooks/registerUser';
import ukFlag from '../../../assets/icons/ukFlag.svg';
import Btn1 from '../../../components/Buttons/Btn1/Btn1';
import { useFindAvailableLanguages } from '../../../services/hooks/misc/useFindAvailableLanguages';

import world from '../../../assets/icons/world.svg'
import person from '../../../assets/icons/person.svg'
import key from '../../../assets/icons/key.svg'

function Register() {

    const [step, setStep] = useState(1);

    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [motherTongue, setMotherTongue] = useState("");
    const [langLearning, setLangLearning] = useState("");

    const [motherTongueInput, setMotherTongueInput] = useState("Empty");

    function nextStepRegister() {
        setStep(prev => prev + 1)
    }

    function register() {

        const user = {
            name: name,
            lastname: lastname,
            email: email,
            password: password,
            motherTongue: motherTongue,
            langLearning: langLearning
        }

        registerUser(user);

    }


    let availableLanguagesFound = useFindAvailableLanguages();

    return (
        <>
            <div className={styles.registerSection}>


                {step === 1 && (

                    <section className={styles.firstSection}>

                        <div>

                            <p>Esta metodologia solo ha sido creada para personas que realmente se van a tomar en serio el aprendizaje.
                            </p>

                            <p>Se han pasado años refinando cada funcionalidad, estrategia, y sección, porque todo lo que ves ha tenido un analisis detrás.</p>

                            <p>Con pocas lecciones puedes aprender situaciones practicas que te empezaran a abrir puertas en ese idioma, imaginate lo que puedes lograr si eres constante.</p>

                        </div>

                        <div>

                            <p>Es fundamental que ahora coloques de tu parte para que esta metodología funcione.</p>

                            {/* Activar boton despues de 15s */}
                            {/* 
                           <button onClick={() => setStep(2)}>Lo tendre en cuenta</button>
                           */}

                            {/*Arrow function: without that it executes when rendering, with that executes only if the user clicks in */}

                            <Btn1 text1="Lo he razonado" nextStep={nextStepRegister} />
                        </div>

                    </section>
                )}

                {step === 2 && (
                    <div className={styles.secondSection}>

                        <form action="" className={styles.form}>


                            <div>
                                <label>
                                    <p>Name <img src={person} alt="" /></p>
                                    <input value={name}
                                        type="text"
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder='Kate' />
                                </label>

                                <label>
                                    <p>Lastname</p>
                                    <input value={lastname}
                                        type="text"
                                        onChange={(e) => setLastname(e.target.value)}
                                        placeholder='Kuznetsova' />
                                </label>
                            </div>

                            <label>
                                <p>Email</p>
                                <input value={email}
                                    type="text"
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder='kate@gmail.com' />
                            </label>

                            <label>
                                <p>Password <img src={key} alt="" /></p>
                                <input value={password}
                                    type="password"
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder='**************' />
                            </label>

                            <label>
                                <p>Mother Tongue</p>
                                <details className={styles.motherTongue}>
                                    <summary>{motherTongueInput} <img src={world} alt="" /></summary>
                                    {availableLanguagesFound.map((langs) => (
                                        <p key={langs.id} onClick={() => {
                                            setMotherTongue(langs.id)
                                            setMotherTongueInput(langs.name)
                                        }
                                        } >{langs.name} </p>
                                    ))}
                                </details>
                            </label>


                        </form>

                        <Btn1 text1="Avanzar" nextStep={nextStepRegister} />

                    </div>
                )}



                {step === 3 && (

                    <div className={styles.thirdSec}>
                        <header className={`header-basic`}>
                            <h2>Languages Available</h2>
                            <span>for your mother tongue</span>
                        </header>

                        <section className={styles.availableLanguages}>

                            {availableLanguagesFound.map((langs) => (
                                <article key={langs.id} onClick={() => setLangLearning(langs.id)}>
                                    <div>
                                        <h2>{langs.name}</h2>
                                        <span>+34 countries</span>
                                        <img src={ukFlag} alt="" />
                                        <p>+1 Billion of speakers</p>
                                    </div>
                                </article>
                            ))}


                            {/* 
                            <article>
                                <div>
                                    <h2>Spanish</h2>
                                    <span>+34 countries</span>
                                    <img src={spFlag} alt="" />
                                    <p>+600 millions of speakers</p>
                                </div>
                            </article>
                            */}

                        </section>
                        <button onClick={function () {
                            register();
                        }}>Registrarse</button>
                    </div>
                )}

                {/* 
                    <div>
                        <label htmlFor="">
                            <h1>Could you tell us your interets?</h1>
                            <input type="text" />
                        </label>
                <Link to="/dashboard">Enviar Datos</Link> 

                // usar USE NAVIGATE Y COLOCARLO PARA RELLENAR DESPUES, CUANDO SE PIDA.
           </div>

           
            */}


            </div >
        </>
    )
}

export default Register

{/* 
                            <label htmlFor="">AGE 18
                                <input value={dateBirth}
                                    type="date"
                                    onChange={(e) => setDateBirth(e.target.value)}
                                    placeholder='Katerin Rosetti' />
                            </label> <br />
                            */}

{/* 
                            <label htmlFor="">Profile Picture
                                <input type="text" placeholder='Katerin Rosetti' />
                            </label> <br />
                                */}