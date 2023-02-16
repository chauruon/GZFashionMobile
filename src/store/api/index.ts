import axios from "axios";
import * as configs from "../../configs"
// import CryptoJS from "react-native-crypto-js";
console.log('configs.URL_API: ', configs.URL_API);

export const getBannerNotify = () => {
  return axios.get(`${configs.URL_API}banner_notify` );
};