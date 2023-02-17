import { call, put, takeLatest, takeEvery, all } from "redux-saga/effects";
import { getBannerNotify } from "../api";
import { ActionBanner } from "../reducers/BannerNotify";
import { typeAcctionBanner } from "../types/typeAcctionBanner";

//DEMO CÁCH LÀM
// export function* watchGetFollower() {
//   yield takeLatest(GET_FOLLOWER_REQUEST, handleGetFollower);
// }

// function* handleGetFollower(action: Action) {
//   const response = yield call(getFollower, action.payload);
//   if (response.ok) {
//     const arrFollower: Array<GithubFollowerResponse> = [];
//     for (let item in response.data) {
//       arrFollower.push(GithubFollowerResponse.fromJSON(response.data[item]));
//     }
//     yield put(getFollowerSuccess(arrFollower));
//   } else {
//     if (
//       response.problem !== 'NETWORK_ERROR' &&
//       response.problem !== 'TIMEOUT_ERROR' &&
//       response.problem !== 'CONNECTION_ERROR'
//     ) {
//       yield put(getFollowerFail(response.problem));
//     } else {
//       yield put(sendNetworkFail(response.problem));
//       yield put(getFollowerFail(response.problem));
//     }
//   }
// }


export function* BannerNotify() {
  yield takeLatest(typeAcctionBanner.GET_BANNER, callBannerNotify);
}
interface IO {
  data: Object,
}

function* callBannerNotify():any {
  try {
    const bannerNotify:IO = yield getBannerNotify();
    if (bannerNotify.data) {
      console.log('bannerNotify.data: ', bannerNotify.data);
      yield put({ type: typeAcctionBanner.GET_BANNER_SUCCESS, payload: bannerNotify.data });
    }

  } catch (err) {
    yield put({ type: typeAcctionBanner.GET_BANNER_ERROR, err});
  }
}
