import axios from 'axios';
import { API_CORE_URL } from "../api/apiCoreUrl";
import { useEffect, useState } from "react";


export default function useLogin() {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const url = API_CORE_URL + "/api/login";
    
    const loginUser = async (credentials) => {
        setLoading(true);
        setError(null);

        try {
            const res = await axios.post(url, credentials);
            return res.data;
        } catch (err) {
            setError(err);
            throw err;
        } finally {
            setLoading(false);
        }
    };

    return { loading, error, loginUser};

}