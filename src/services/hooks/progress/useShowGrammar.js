import axios from "axios";
import { API_CORE_URL } from "../../api/apiCoreUrl";
import { useEffect, useState } from "react";

export default function useShowGrammar(obj){
    const [arr, setArr] = useState([]);
    const url = API_CORE_URL + "/api/grammar";

    useEffect(() => {
        axios.get(url,{
            params: obj
        })
        .then(res => setArr(res.data));
    }, [])
    
    return arr;
}