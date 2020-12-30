import axios from 'axios';

// baseURL changes every time we start a new ngrok session so we need to update then
export default axios.create({
    baseURL: 'http://c09cd4fd2b6f.ngrok.io'
});