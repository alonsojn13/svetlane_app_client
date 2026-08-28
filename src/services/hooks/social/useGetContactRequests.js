import { API_CORE_URL } from '@/services/api/apiCoreUrl';
import axios from 'axios';
import { useEffect, useState } from 'react';

export function useGetContactRequest() {

    const url = API_CORE_URL + "/contact-requests";

    const token = localStorage.getItem("token");

    const [data, setData] = useState([]);

    useEffect(() => {

        const getContactRequests = async () => {

            const res = await axios.get(url, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setData(res.data);
        }
        getContactRequests();
    }, [])

    return data;
}