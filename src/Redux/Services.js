import axios from "axios"

const Login = async (formData) => {
    let response = axios.post('http://localhost:500/signin',formData);
    return response.data
}
const Signin = async (formData) => {
    let response = axios.post('http://localhost:500/signin',formData);
    return response.data
}
const Services =  {Login,Signin}
export default Services