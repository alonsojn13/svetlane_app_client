import { API_CORE_URL } from '@/Api/apiCoreUrl';
import axios from 'axios';
import { useEffect, useState } from 'react';


export default function useContactInfo(id) {
    const url = API_CORE_URL + "/contact-info";

    const [data, setData] = useState([]);

    const obj = {
        id:id
    }
    useEffect(() => {
        const getContactInfo = async () => {

            const res = await axios.post(url, obj);
            setData(res.data);
        }

        getContactInfo();
    }, [])

    return data;

}