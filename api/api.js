const API = "https://nikka-api.us.kg";
const KEY = "nikka"

const endpoints = {
    yts: (query) => `${API}/search/yts?apiKey=${APIKEY}&q=${encodeURIComponent(query)}`,
    ytmp3: (url) => `${API}/dl/ytmp3?apiKey=${APIKEY}&url=${encodeURIComponent(url)}`,
    
};

module.exports = api;
