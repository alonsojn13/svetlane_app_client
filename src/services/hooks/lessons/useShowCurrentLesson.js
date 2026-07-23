import axios from 'axios';
import { API_CORE_URL } from '../../api/apiCoreUrl';
import { useEffect, useState } from 'react';

const API_SPECIFIC_URL = API_CORE_URL + "/api/lessons";

const obj = {
    user_id : 1
}



export default function useShowCurrentLesson(){
    const [learningCards, setLearningCards] = useState([]);

    useEffect(() => {
        axios.post(API_SPECIFIC_URL,obj)
        .then(res => setLearningCards(res.data));
    },[]);

    return learningCards;
}