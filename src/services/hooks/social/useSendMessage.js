import { API_CORE_URL } from '@/services/api/apiCoreUrl';
import axios from 'axios';

export function useSendMessage(){


    const url = API_CORE_URL + "/send-message";

    const token = localStorage.getItem("token");

    const sendMessage = (msg) => {
        const res = axios.post(url,msg,{
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

    }

    return {sendMessage}
}