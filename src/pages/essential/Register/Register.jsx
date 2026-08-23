import React, { Fragment, useState } from 'react'
import styles from './Register.module.css'
import Btn1 from '@/components/Buttons/Btn1/Btn1';

import world from '@/assets/icons/world.svg'
import person from '@/assets/icons/person.svg'
import key from '@/assets/icons/key.svg'
import useAvailableLanguages from '@/services/hooks/availableLanguges';
import useRegister from '@/services/hooks/useRegister';
import { useNavigate } from 'react-router-dom';
import useLogin from '@/services/hooks/useLogin';

function Register() {

    const navigate = useNavigate();

    const [step, setStep] = useState(1);

    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [motherTongue, setMotherTongue] = useState("ES");
    const [langLearning, setLangLearning] = useState("");
    const [profilePicture, setProfilePicture] = useState();


    const credentials = {
        email: email,
        password: password
    }

    function nextStepRegister() {
        setStep(prev => prev + 1)
    }



    const { data, loading } = useAvailableLanguages();
    const { error, loginUser } = useLogin();

    const asd = data.reduce((acc, item) => {

        const look = acc.find(p => p.languageSourceCode == item.languageSourceCode) ?? null;

        if (look != null) {
            // Plural because we reuse al the object availableLanguages, not just avilableLanguage
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

    const { register } = useRegister();

    async function registerUser() {

        const formData = new FormData();
        formData.append("name", name)
        formData.append("lastname", lastname)
        formData.append("email", email)
        formData.append("password", password)
        formData.append("motherTongue", motherTongue)
        formData.append("langLearning", langLearning)
        formData.append("profilePicture", profilePicture)

        console.log(langLearning)
        const ok = await register(formData);

        if (ok) {


            const tryLogin = async () => {

                try {
                    const token = await loginUser(credentials);

                    localStorage.setItem('token', token)

                    const payload = JSON.parse(atob(token.split('.')[1]));
                    const userId = payload.sub;
                    console.log(userId);


                } catch (err) {
                    console.log(err);
                }

            };

            tryLogin();


            navigate("/dashboard")
        }
    }


    const [currentLanguage, setCurrentLanguage] = useState(0);

    return (
        <>
            <div className={styles.registerSection}>


                {step === 1 && (

                    <section className={styles.firstSection}>

                        <div>

                            <p>Esta metodologia solo ha sido creada para personas que realmente se van a tomar en serio el aprendizaje.
                            </p>

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

                            {/* 

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
                                            */}


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

                        <select name="" id="">
                            {asd.map((item, index) => (
                                <option value="" onClick={() => {
                                    setCurrentLanguage(index)
                                    setMotherTongue(item.languageSourceCode)
                                }}>{item.languageSource}</option>
                            ))}
                        </select>

                        {asd.map((item, index) => (
                            <div key={index}>
                                {currentLanguage == index && (
                                    <ul key={index}>
                                        {item.availableLanguages.map((item, i) => (
                                            <span key={i} onClick={() => setLangLearning(item.languageAvailableCode)}>{item.languageAvailable} </span>
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