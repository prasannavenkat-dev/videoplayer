import axios from "axios";


const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  params: {
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': 'af1a09343dmsh39e876d102f542ap170d17jsn68ced1091979',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};


export const fetchFromApi = async(url) => {

    const data = await axios.get(`${BASE_URL}/${url}`,options);

return data;
}