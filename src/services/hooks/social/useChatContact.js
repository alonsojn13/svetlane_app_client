import { API_CORE_URL } from '@/services/api/apiCoreUrl';
import axios from 'axios';
import { useState } from 'react';


export function useChatContact() {
    const url = API_CORE_URL + "/chat";
    const token = localStorage.getItem("token");


    const [data,setData] = useState([]);

    const chatContact = async (chatId,idContact) => {

        const obj = {
            chatId: chatId,
            idContact:idContact
        }

        const res = await axios.post(url,obj, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        setData(res.data);
        return res;

    }

    return {data, chatContact}
}

