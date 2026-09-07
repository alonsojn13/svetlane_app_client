import { API_CORE_URL } from '@/Api/apiCoreUrl';
import axios from 'axios';
import { useEffect, useState } from 'react';


export default function useContactMessages(chatId, idContact) {
    const url = API_CORE_URL + "/chat";
    const token = localStorage.getItem("token");

    const [data, setData] = useState([]);

    useEffect(() => {
        const getChatContact = async () => {

            const obj = {
                chatId: chatId,
                idContact: idContact
            }

            const res = await axios.post(url, obj, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            setData(res.data);
        }
        getChatContact();
    }, []);

    return data;
}

