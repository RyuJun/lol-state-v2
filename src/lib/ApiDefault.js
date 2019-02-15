import axios from 'axios';
import apiKey from 'lib/apiKey';

const ApiDefault = {
    url : "/lol",
    key : apiKey // API KEY
}

ApiDefault.instance = axios.create({ baseURL : ApiDefault.url });
export default ApiDefault;  