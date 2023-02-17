import axios from "axios";
import * as configs from "../../configs"


export const getBannerNotify = async () => {
  return await axios.get(`${configs.URL_API}banner_notify` );
};

// export const getKycAdCount = async (userId, token) => {
//   return axios.post(`${configs.API_KYC_CROWD}/kyc/kyc-ad-count`, {userId, token});
// };

// export const getOfferwallInfo = async (userId, token) => {
//   return axios.post(`${configs.API_KYC_CROWD}/kyc/offerwall-rewards`, {userId, token});
// };