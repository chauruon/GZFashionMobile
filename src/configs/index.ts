import {IPV4_ADDRESS, API_URL, HTTP, PORT} from "@env"
console.log('IPV4_ADDRESS: ', IPV4_ADDRESS);

export const URL_API = `${HTTP}${IPV4_ADDRESS}:${PORT}${API_URL}`;