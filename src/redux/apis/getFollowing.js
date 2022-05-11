const axios = require('axios').default;

axios.defaults.baseURL = 'https://ducanh-store.herokuapp.com/api';


axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export const getFollowings = () => {
    return axios.get('/followings').then( data => data.data)
}
