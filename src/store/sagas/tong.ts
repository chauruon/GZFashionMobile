import { put, takeLatest } from "redux-saga/effects";
import { Action } from "../reducers/tong";
import { typeAcctionBanner } from "../types/typeAcctionBanner";

function* callTong(action:any){
  try {
    yield put({type: "TONG_SUCCESS", action});
  } catch (e) {
    console.log('callTong e: ', e);
  }
}

export function* tong(action: Action) {
  yield takeLatest(typeAcctionBanner.TONG_SUCCESS, callTong);
}

function* callTru(action:any){
  console.log('callTru action: ', action);
  try {
    yield put({type: typeAcctionBanner.TRU_SUCCESS, action});
  } catch (e) {
    console.log('callTru e: ', e);
  }
}

export function* tru() {
  yield takeLatest(typeAcctionBanner.TRU_SUCCESS, callTru);
}