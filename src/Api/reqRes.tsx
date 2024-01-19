import axios from "axios";

export const reqResapi = axios.create({
baseURL:'https://reqres.in/api'
});
