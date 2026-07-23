import axios from 'axios';
import { useEffect } from 'react';
import { API_CORE_URL } from '../../api/apiCoreUrl';


export function useInsertCardByText(){

    const API_SPECIFIC_RUL = API_CORE_URL + "/api/insertCardByText";
    useEffect(() => {
        axios.get(API_SPECIFIC_RUL);
    })
}