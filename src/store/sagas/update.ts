import { call, put, takeLatest, takeEvery, all } from "redux-saga/effects";
import { getBannerNotify } from "../api";
import { typeAcctionBanner } from "../types/typeAcctionBanner";


function* callBannerNotify(action:any): Generator<any, void, unknown>{
  try {
    const bannerNotify = yield getBannerNotify();
    console.log('bannerNotify: ', bannerNotify);
    yield put({type: "BANNER_SUCCESS", bannerNotify});
  } catch (e) {
    console.log('e: ', e);
    
  }
}

export function* BannerNotify() {
  yield takeLatest(typeAcctionBanner.BANNER_SUCCESS, callBannerNotify);
}