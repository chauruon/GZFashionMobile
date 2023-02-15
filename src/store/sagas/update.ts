import { call, put, takeLatest, takeEvery, all } from "redux-saga/effects";
import { getUpdateTauService } from "../api";
import { typeActionTown } from "../types/typeActionTown";

function* callUpdateTau(action): Generator<any, void, unknown> {
  try {
    const getApiUpdateTau = yield getUpdateTauService(action.data);
    yield put({
      type: typeActionTown.SUCCESS_UPDATE_TAU,
      getApiUpdateTau: getApiUpdateTau?.data,
    });
  } catch (e) {
    let err = e?.response;
    const result = checkToken(err)
    if (result) {
      yield put({ type: typeActionTown.SET_EXPIRED_TOKEN, data: true });
    } else {
      yield put({ type: typeActionTown.ERROR_UPDATE_TAU,getApiUpdateTau: err?.data });
    }
  }
}

export function* getUpdateTauAction() {
  yield takeLatest(typeActionTown.UPDATE_TAU, callUpdateTau);
}