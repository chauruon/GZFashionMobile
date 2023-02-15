import axios from "axios";
import * as configs from "../../../configs";
// import CryptoJS from "react-native-crypto-js";

export const getUserService = (data:any) => {
  return axios.post(`${configs.TOWN_URL}/join`, data );
};
export const getWalkInfor = (data:any) => {
  return axios.post(`${configs.GAME_URL}/city/walk-info`, data );
};
export const getL2Coin = (data:any) => {
  return axios.post(`${configs.GAME_URL}/city/user-l2-coin-amount`, data );
};
export const getRewardWalkService = (data:any) => {
  return axios.post(`${configs.GAME_URL}/city/reward-walk-dol`, data );
};

export const getUpdateTauService = (data:any) => {
  return axios.post(`${configs.TOWN_URL}/users/getTauBalance`, data );
};