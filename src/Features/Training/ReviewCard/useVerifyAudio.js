import axios from 'axios';
import { API_CORE_URL } from '@/Api/apiCoreUrl';

const url = API_CORE_URL + "/api/verifyAudio";

export function useVerifyAudio(
) {

    // Async because we're doing a http request.

    

    // if we put formData inside of {} as a flat object, it will converts into JSON
    // so FormData will be broken, we take advantage of formData and add inside the other variables. 
    // and Java still receiving the formData properly and with the other parameters.
    const verifyAudio = async (
        formData,
        user_id,
        name,
        geGrammarId,
        subsituation_translations_id,
        learning_word_1_id,
        learning_word_2_id,
        learning_word_3_id
        ) => {
        formData.append("user_id",user_id);
        formData.append("name",name);
        formData.append("geGrammarId",geGrammarId);
        formData.append("subsituation_translations_id",subsituation_translations_id);
        formData.append("learning_word_1_id",learning_word_1_id);
        formData.append("learning_word_2_id",learning_word_2_id);
        formData.append("learning_word_3_id",learning_word_3_id);


        const response = await axios.post(url, formData);
        return {data: response.data, status:response.status};
    }

    return verifyAudio;


}