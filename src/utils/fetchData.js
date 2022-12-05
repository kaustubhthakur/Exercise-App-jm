export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'c0912a15d9msh22cda8aac17bffap17ca2fjsnf71c9aa96887',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };
  export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'c0912a15d9msh22cda8aac17bffap17ca2fjsnf71c9aa96887',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    },
  };
  
export const fetchData = async (url,options) => {
    const response = await fetch(url,options);
    const data = await response.json();
    return data;
}