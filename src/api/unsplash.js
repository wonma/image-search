import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 5bV1JEDY3Jf3k53oClnZGO-X4q0Gw7SAlJ-TdBPXEac'
    }
});