import { typeAcctionBanner } from "../types/typeAcctionBanner";

const initialState = {
  giaTri: 0
};

export interface Action {
  type: string;
  payload: any;
}

export default (state = initialState, action:any)=>{
  switch (action.type) {
    case typeAcctionBanner.TONG_SUCCESS:
      return {
        giaTri: action.counter,
      };
    case typeAcctionBanner.TRU_SUCCESS:
      return {
        giaTri: action.counter,
      };
    default:
      return state;
  }
}