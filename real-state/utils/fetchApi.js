import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com"

export const fetchApi = async(url)=>{
    const {data} = await axios.get((url), {
    headers: {
    'x-rapidapi-host': 'bayut.p.rapidapi.com',
    'x-rapidapi-key': '2e4f46d737mshd5b91685f114912p10027cjsn1c4f1aa67519'
    }
    });
    return data;
}