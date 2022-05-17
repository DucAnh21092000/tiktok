const axios = require('axios').default;

axios.defaults.baseURL = 'https://ducanh-store.herokuapp.com/api';


axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export const loadVideos = () => {
    return axios.get('/videos').then(data => data.data)
}
