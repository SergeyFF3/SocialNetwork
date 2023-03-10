import axios from "axios";
import {USER_LOCALSTORAGE_KEY} from "../const/localstorage";

export const $api = axios.create({
    baseURL: 'http://localhost:8000',
    headers: {
        autorization: localStorage.getItem(USER_LOCALSTORAGE_KEY)
    }
})