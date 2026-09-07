import { API_CORE_URL } from '@/Api/apiCoreUrl';
import axios from 'axios';
import { useEffect, useState } from 'react';

export function useValidateRequest() {

    const url = API_CORE_URL + "/validate-contact-request";

    const [data, setData] = useState(false);

    const token = localStorage.getItem("token");

    const validateRequest = async (obj) => {

            const res = await axios.post(url, obj, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });
            setData(res.data);

        }

    return {validateRequest};

}


