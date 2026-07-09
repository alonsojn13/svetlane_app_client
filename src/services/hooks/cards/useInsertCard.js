import axios from 'axios';
import { useEffect } from 'react';
import { API_CORE_URL } from '../../api/apiCoreUrl';

export async function useInsertCards(card) {

    const API_URL_SPECIFIC = API_CORE_URL + "/api/insertCard";

    try {

        const res = await axios.post(API_URL_SPECIFIC,
            card
        )
        return res.data;
        
    } catch (e) {
        return e;
    }
}