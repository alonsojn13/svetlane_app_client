import { API_CORE_URL } from '@/Api/apiCoreUrl';
import axios from 'axios';


export function useSendContactRequest(contactUserId){
    
    const url = API_CORE_URL + "/send-contact-request";

    const token = localStorage.getItem("token");

    const obj = {
        contactUserId: contactUserId
    }

    const res = axios.post(url,obj, {
        headers: {
            Authorization: `Bearer ${token}`, 
        }
    });
    return res;
}