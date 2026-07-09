import axios from 'axios';

const API_URL = "http://192.168.1.66:8082/api/profile";

// se envia un encabezado llamado token.
export default async function getProfile(){

    const token = localStorage.getItem("token");

    const response = await axios.get(API_URL,
        {
            headers:{token:token}
        }
    );

    
    return response.data;
}
