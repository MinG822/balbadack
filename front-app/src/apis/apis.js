import axios from 'axios';


const apis = axios.create({
    baseURL: 'http://balbadack.com/'
    // baseURL:'http://192.168.1.242:7888/'
});

apis.defaults.headers.common['Content-Type'] = 'application/json'

export default apis;