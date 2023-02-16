import { typeAcctionBanner } from "../types/typeAcctionBanner";

const initialState = {};

export default (state = initialState, action:any)=>{
  switch (action.type) {
    case typeAcctionBanner.BANNER_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}