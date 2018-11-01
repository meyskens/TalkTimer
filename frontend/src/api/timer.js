import axios from "axios"
import { URL } from "./const"

export const setTimer = (key, seconds) => {
    return axios.post(`${URL}/session/${key}/time`, { seconds })
}
