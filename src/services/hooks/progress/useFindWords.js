import axios from 'axios';
import { useEffect, useState } from 'react';
import { API_CORE_URL } from '../../api/apiCoreUrl';


export default function useFindWords(obj) {

    const [words, setWords] = useState([]);

    const url = API_CORE_URL + "/api/words-learned";

    useEffect(() => {
        axios.get(url, {
            params: obj
        })
            .then(res => setWords(res.data));
    }, []);

    return words;
}