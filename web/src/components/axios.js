import axios from "axios";
const baseURL =  "http://localhost:5000"

// axios.defaults.xsrfCookieName = 'csrftoken'
// axios.defaults.xsrfHeaderName = "X-CSRFToken"
// axios.defaults.withCredentials = true;

 const axiosInstance = axios.create({
    baseURL,
    withCredentials: false,
    
    headers: {
         'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
         'Access-Control-Allow-Origin': '*',
         'Access-Control-Allow-Headers': '*',
         'Access-Control-Allow-Headers':'content-type',
         "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        }
    
})

export default axiosInstance;