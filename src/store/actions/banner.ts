import { Action } from "../reducers/tong";
import { typeAcctionBanner } from "../types/typeAcctionBanner";

export const FetchBannerNotify = () => {
  console.log(`11111111111111111`);
  return {type: typeAcctionBanner.GET_BANNER};
};
