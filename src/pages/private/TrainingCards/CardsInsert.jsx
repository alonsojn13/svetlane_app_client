import React, { useState } from 'react'
import { useInsertCards } from '../../../services/hooks/cards/useInsertCard';

function CardsInsert() {

    const [urlPhoto, setUrlPhoto] = useState();


    const [subsituation, setSubsituation] = useState("");
    const [text, setText] = useState("");
    const [expl1, setExpl1] = useState("");
    const [expl2, setExpl2] = useState("");
    const [expl3, setExpl3] = useState("");
    const [imgUrl, setImgUrl] = useState("");
    const [audioUrl, setAudioUrl] = useState("");


    function insertCard() {

        const card = {
            subsituation: subsituation,
            text: text,
            expl1: expl1,
            expl2: expl2,
            expl3: expl3,
            imgUrl: imgUrl,
            audioUrl: audioUrl
        }

        try{

            useInsertCards(card);

        } catch(e){
            console.log(e);
        }

    }

    return (
        <>
            {/* https://res.cloudinary.com/wymted81/image/upload/v1783518659/photo1_npkogv.jpg
 */}
            <h1>Insertar cards</h1>

            <label>
                Subsituation <br />
                <input type="text" value={subsituation}
                    onChange={(e) => setSubsituation(e.target.value)}
                />
            </label>
            <br />

            <label>
                Texto <br />
                <input type="text" value={text}
                    onChange={(e) => setText(e.target.value)}
                />
            </label>
            <br />

            <label>
                Explanation1 <br />
                <input type="text" value={expl1}
                    onChange={(e) => setExpl1(e.target.value)}
                />
            </label>
            <br />

            <label>
                Explanation2 <br />
                <input type="text" value={expl2}
                    onChange={(e) => setExpl2(e.target.value)}
                />
            </label>
            <br />

            <label>
                Explanation3 <br />
                <input type="text" value={expl3}
                    onChange={(e) => setExpl3(e.target.value)}
                />
            </label>
            <br />


            <label>
                Audio url: <br />
                <input type="text" value={audioUrl}
                    onChange={(e) => setAudioUrl(e.target.value)}
                />
            </label>
            <br />

            <label>
                Img url: <br />
                <input type="text" value={imgUrl}
                    onChange={(e) => setImgUrl(e.target.value)} />
            </label>
            <br />


            <button onClick={insertCard}>Insertar card</button>


        </>
    )
}

export default CardsInsert