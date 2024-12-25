//
const axios = require("axios");
const {API, APIKEY} = config;
const yts = `${API}/search/yts?apiKey=${APIKEY}&q=`
const ytmp3 = `${API}/dl/ytmp3?apiKey=${APIKEY}&url=`
// and so on
