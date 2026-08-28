import axios from 'axios';
import { API_CORE_URL } from '@/services/api/apiCoreUrl';
import { useEffect, useState } from 'react';

export default function useUserInfo(){

    const [data,setData] = useState([]);

    const token = localStorage.getItem("token");

    const url = API_CORE_URL + "/profile-info";

    useEffect(() => {
        const getInfo = async () =>{
            const res = await axios.get(url, {
               headers: {
                Authorization: `Bearer ${token}`
               }
            });
            setData(res.data);
        };
        getInfo();
    },[])

    return data;
}