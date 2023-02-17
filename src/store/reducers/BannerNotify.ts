import { typeAcctionBanner } from "../types/typeAcctionBanner";

export interface ActionBanner{
  type: string;
  payload: any;
}

const initialState = {
  banner: null,
};

export default (state = initialState, action:ActionBanner)=>{
  console.log('BANNER_SUCCESS action: ', action);
  switch (action.type) {
    case typeAcctionBanner.GET_BANNER_SUCCESS:
      return {
        banner: action.payload,
      };
    default:
      return state;
  }
}