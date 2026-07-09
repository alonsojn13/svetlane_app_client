import axios from 'axios'
import { API_CORE_URL } from '../../api/apiCoreUrl'
import { useEffect, useState } from 'react';

export function useFindAllWords(){

    const API_URL_SPECIFIC = API_CORE_URL + "/api/findAll/words";

    const [arrWords, setArrWords] = useState([]);

    useEffect(() => {
        axios.get(API_URL_SPECIFIC)
        .then(res => setArrWords(res.data))
    }, []);

    return arrWords;

}
