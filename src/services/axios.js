import axios from "axios";

axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

export const api = axios.create({
  baseURL: "https://infojr-final-api.herokuapp.com/",
    //baseURL: "http://localhost:5501/", 

});

