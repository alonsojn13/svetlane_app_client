import { API_CORE_URL } from '@/services/api/apiCoreUrl';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function useGetPosts() {

    const [data, setData] = useState([]);

    const url = API_CORE_URL + "/social-posts";

    useEffect(() => {
        const getPosts = async () => {

            const res = await axios.get(url);
            setData(res.data);
        }
        getPosts();
    }, [])

    return data;

}