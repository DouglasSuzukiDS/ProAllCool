import axios from "axios";

export const api = axios.create({
   baseURL: "http://localhost:3002"
})

export const baseURL = axios.create({
   baseURL: 'http://localhost:3002'
})