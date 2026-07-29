import axios from 'axios';
import { API_CORE_URL } from '../../api/apiCoreUrl';
import useImageToTextVerification from './useImageToTextVerification';
import useRecordVoiceVerification from './useRecordVoiceVerification.JS';

export default function useAnswerVerification(
    typeAnswer,
    camera,
    user_id,
    geGrammarId,
    subsituation_translations_id,
    learning_word_1_id,
    learning_word_2_id,
    learning_word_3_id,

) {

    const obj = {
        user_id: user_id,
        subsituation_translations_id: subsituation_translations_id,
        geGrammarId: geGrammarId,
        learningWord1Id: learning_word_1_id,
        learningWord2Id: learning_word_2_id,
        learningWord3Id: learning_word_3_id
    };



    console.log(obj)



    // AI verifications

    const imageToTextVerificationAPI = API_CORE_URL + "/api/imageToTextVerification";
    const recordVoiceVerificationAPI = API_CORE_URL + "/api/recordVoiceVerification";

    const addProgressInfo = API_CORE_URL + "/api/addProgressInfo";




    // wait for verification answer of AI...


    let imageToTextVerification;
    let recordVoiceVerification;

    if (typeAnswer === 1) {
        // ...
        imageToTextVerification = useImageToTextVerification();

        if (imageToTextVerification === true) {
            // nextStepº
        }

    } else if (typeAnswer === 2) {
        // ...

        recordVoiceVerification = useRecordVoiceVerification();

        if (recordVoiceVerification === true) {
            axios.post(addProgressInfo, obj);
        }

    }

    console.log("test3");


}