import { API_CORE_URL } from '@/Api/apiCoreUrl';
import axios from 'axios';

const url = API_CORE_URL + "/create-post";

export default async function useCreatePost(obj){

    const token = localStorage.getItem("token");

    const res = await axios.post(url,obj,{
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return res;

}