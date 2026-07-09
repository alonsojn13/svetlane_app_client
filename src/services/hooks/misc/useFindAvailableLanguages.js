import axios from "axios";
import { API_CORE_URL } from "../../api/apiCoreUrl";
import { useEffect, useState } from "react";

export function useFindAvailableLanguages(){
    
    const API_SPECIFIC_URL = API_CORE_URL + "/api/findAll/availableLanguages";

    const [availableLanguages, setAvailableLanguages] = useState([]);

    useEffect(() => {
        axios.get(API_SPECIFIC_URL)
        .then(res => setAvailableLanguages(res.data));
    }, [])

    return availableLanguages;

}