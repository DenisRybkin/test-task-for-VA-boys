import axios from "axios";

export const API_URL = 'https://619c0b4768ebaa001753c757.mockapi.io';

export const $api = axios.create({
    baseURL : API_URL,
})
