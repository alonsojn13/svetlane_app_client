import axios from 'axios';
import { API_CORE_URL } from '@/Api/apiCoreUrl';
import { useEffect, useState } from 'react';

export default function useAvailableLanguages() {

    const url = API_CORE_URL + "/available-languages";
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const availableLanguages = async () => {
            try {
                const res = await axios.get(url);
                setData(res.data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        }
        
        availableLanguages();
    }, [])

    return {data, loading};

}