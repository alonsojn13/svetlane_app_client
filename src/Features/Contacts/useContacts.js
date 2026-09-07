import { API_CORE_URL } from '@/Api/apiCoreUrl';
import axios from 'axios';
import { useEffect, useState } from 'react';




export function useContacts() {

    const url = API_CORE_URL + "/contacts";

    const token = localStorage.getItem("token");

    const [data,setData] = useState([]);

    useEffect(() => {
        const getContacts = async () => {

            const res = await axios.get(url, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            setData(res.data);
            return data;

        }

        getContacts();

    }, [])

    return data;

}