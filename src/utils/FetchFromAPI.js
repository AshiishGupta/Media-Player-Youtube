import axios from 'axios';

const BASE_URL='https://youtube-v31.p.rapidapi.com'

const options = {
    method: 'GET',
    params: {
      // q: 'music',
      // part: 'snippet,id',
      // regionCode: 'US',
      maxResults: '50',
      // order: 'date'
    },
    
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };


export const FetchFromAPI= async(url) => {

    const {data} =await axios.get(`${BASE_URL}/${url}`,options);

    // const {data} =await axios.get('https://youtube-v31.p.rapidapi.com/search?part=snippet&q=New',options);
    return data;
}




