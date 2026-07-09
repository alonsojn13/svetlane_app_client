import axios from 'axios'
import { API_CORE_URL } from '../../api/apiCoreUrl'


export function useReadCard(){
    
    const API_SPECIFIC_URL = API_CORE_URL + "/api/readCard";
    
    try{
        
    }
    axios.get(API_SPECIFIC_URL);

}