import axios from 'axios'
import { API_CORE_URL } from '../../api/apiCoreUrl'
import { useEffect, useState } from 'react';

export function useFindAllGrammar(){

    const API_SPECIFIC_URL = API_CORE_URL + "/api/findAll/grammar";

    const [arrWords, setArrWords] = useState([]);

    useEffect(() => {
        axios.get(API_SPECIFIC_URL)
        .then(res => setArrWords(res.data))
    }, []);

    return arrWords;

}
