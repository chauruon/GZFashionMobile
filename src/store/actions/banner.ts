import { Action } from "../reducers/tong";
import { typeAcctionBanner } from "../types/typeAcctionBanner";

export const FetchBannerNotify = () => {
  return {type: typeAcctionBanner.GET_BANNER};
};
