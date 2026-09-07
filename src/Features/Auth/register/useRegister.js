import axios from "axios";
import { API_CORE_URL } from "@/Api/apiCoreUrl";


const url = API_CORE_URL + "/register";

export default function useRegister() {

    const register = async (user) => {
        const res = await axios.post(url, user);
        return res.data;
    }
    return {register};
}