import React, { Fragment, useState } from 'react'
import styles from '@/Features/Auth/Auth.module.css'

// assets
import person from '@/Assets/icons/person.svg'
import key from '@/Assets/icons/key.svg'
import emailWhite from '@/Assets/icons/emailWhite.svg'

// components - hooks
import Btn1 from '@/Components/Buttons/Btn1/Btn1';
import useAvailableLanguages from '@/Shared/hooks/languages/useAvailableLanguages';
import useRegister from '@/Features/Auth/register/useRegister';
import useLogin from '@/Features/Auth/login/useLogin';

function Register() {

    const [currentView, setCurrentView] = useState(1);

    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [motherTongueCode, setMotherTongueCode] = useState("ES");
    const [targetLanguageCode, setTargetLanguageCode] = useState("");
    const [profilePicture, setProfilePicture] = useState(null);

    const [indexLanguageSelected, setIndexLanguageSelected] = useState(0);


    // List languages in order 
    const { data } = useAvailableLanguages();

    const languages = data.reduce((acc, item) => {

        const look = acc.find(p => p.languageSourceCode == item.languageSourceCode) ?? null;

        if (look != null) {
            // Plural because we reuse all the object availableLanguages, not just avilableLanguage
            look.availableLanguages = [...look.availableLanguages, { languageAvailable: item.languageAvailable, languageAvailableCode: item.languageAvailableCode }]
        } else {
            acc.push({
                languageSource: item.languageSource,
                languageSourceCode: item.languageSourceCode,
                availableLanguages: [{ languageAvailable: item.languageAvailable, languageAvailableCode: item.languageAvailableCode }]
            })
        }

        return acc;

    }, [])


    // Custom hook to register user
    const { register } = useRegister();

    async function registerUser() {

        const formData = new FormData();
        formData.append("name", name);
        formData.append("lastname", lastname);
        formData.append("email", email);
        formData.append("password", password);
        formData.append("motherTongueCode", motherTongueCode);
        formData.append("targetLanguageCode", targetLanguageCode);
        formData.append("profilePicture", profilePicture);

        const res = await register(formData);

    }

    function nextViewHandler() {
        setCurrentView(prev => prev + 1)
    }

    return (
        <>
            <div className={styles.registerSection}>

                {currentView === 1 && (

                    <section className={styles.firstSection}>

                        <div>

                            <p>Esta metodologia solo ha sido creada para personas que realmente se van a tomar en serio el aprendizaje.</p>

                            <p>Con pocas lecciones puedes aprender situaciones practicas que te empezaran a abrir puertas en ese idioma, imaginate lo que puedes lograr si eres constante.</p>

                            <p>Diseño detras de cada funcionalidad, estrategia, y sección, todo lo que ves ha tenido un analisis detrás.</p>

                        </div>

                        <div>

                            <p>Es fundamental que ahora coloques de tu parte para que esta metodología funcione.</p>

                            {/* Activar boton despues de 15s */}
                            {/* 
                           <button onClick={() => setStep(2)}>Lo tendre en cuenta</button>
                           */}

                            {/*Arrow function: without that it executes when rendering, with that executes only if the user clicks in */}

                            <Btn1 text1="Lo he razonado" nextStep={nextViewHandler} />
                        </div>

                    </section>
                )}


                {currentView === 2 && (
                    <div className={styles.secondSection}>

                        <form action="" className={styles.form}>

                        <h1> User Profile</h1>

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
                                <p>Email <img src={emailWhite} alt="" /></p>
                                <input value={email}
                                    type="text"
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder='jane@gmail.com' />
                            </label>

                            <label>
                                <p>Password <img src={key} alt="" /></p>
                                <input value={password}
                                    type="password"
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder='**************' />
                            </label>

                        </form>

                        <Btn1 text1="Continue" nextStep={nextViewHandler} />

                    </div>
                )}

                {/* Languages List */}
                {currentView === 3 && (
                    <div className={styles.thirdSec}>
                        <header className={`header-basic`}>
                            <h2>Languages Available</h2>
                            <span>for your mother tongue</span>
                        </header>

                        {/* Mother Tongue*/}
                        <select name="" id="">
                            {languages.map((item, index) => (
                                <option value="" onClick={() => {
                                    setIndexLanguageSelected(index)
                                    setMotherTongueCode(item.languageSourceCode)
                                }}>{item.languageSource}</option>
                            ))}
                        </select>

                        {/* For that currentLanguage selected, show them languages availables. */}
                        {languages.map((item, index) => (
                            <div key={index}>
                                {indexLanguageSelected == index && (
                                    <ul key={index}>
                                        {item.availableLanguages.map((item, i) => (
                                            <span key={i} onClick={() => setTargetLanguageCode(item.languageAvailableCode)}>{item.languageAvailable}</span>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}

                        <button onClick={() => registerUser()}>Registrarse</button>

                        <input type="file"
                            accept='image/'
                            onChange={(e) => setProfilePicture(e.target.files[0])} />
                    </div>
                )}
            </div >
        </>
    )
}

export default Register