import { all, fork } from "redux-saga/effects";
import { BannerNotify } from "./update";

export default function* rootSaga() {
  yield all([
    BannerNotify,
    // getUpdateTauAction1,
    // getUpdateTauAction2,
    // getUpdateTauAction3,
    // ....
  ]);
}