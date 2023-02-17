import { all, fork } from "redux-saga/effects";
import { tong, tru } from "./tong";
import { BannerNotify } from "./BannerSaga";

export default function* rootSaga() {
  yield all([
    BannerNotify(),
    tong,
    tru,
    // getUpdateTauAction1,
    // getUpdateTauAction2,
    // getUpdateTauAction3,
    // ....
  ]);
}