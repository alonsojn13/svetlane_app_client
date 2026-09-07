import axios from 'axios';
import { API_CORE_URL } from '@/Api/apiCoreUrl';
import { useEffect, useState } from 'react';

const url = API_CORE_URL + "/training-cards";


export default function useTrainingCard() {

    const [learningCards, setLearningCards] = useState([]);

    const token = localStorage.getItem('token');
    useEffect(() => {
        const getLearningCards = async () => {
            const res = await axios.post(url, {}, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            setLearningCards(res.data)
        }
        getLearningCards()
    }, []);

    return learningCards;
}