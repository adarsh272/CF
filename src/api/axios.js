import axios from 'axios';
/* Since our API is hosted on port 8080, I have declared my base url here to avoid repeating this url in all our API calls*/
const instance = axios.create({
    baseURL: 'https://vue-js-assignment.onrender.com',
});

export default instance;
