import { all, fork } from "redux-saga/effects";
import { getUpdateTauAction } from "./update";

export default function* rootSaga() {
  yield all([
    getUpdateTauAction,
    // getUpdateTauAction1,
    // getUpdateTauAction2,
    // getUpdateTauAction3,
    // ....
  ]);
}