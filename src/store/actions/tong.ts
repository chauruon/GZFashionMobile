import { Action } from "../reducers/tong";
import { typeAcctionBanner } from "../types/typeAcctionBanner";

export const tong = (counter: any) => {
  return {type: typeAcctionBanner.TONG_SUCCESS,counter};
};

export const tru = (counter: any) => {
  return {type: typeAcctionBanner.TRU_SUCCESS,counter};
};