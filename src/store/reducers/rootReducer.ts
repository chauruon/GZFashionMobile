import { combineReducers } from "redux";

import tong from "./tong";

const rootReducer = combineReducers({
  tong: tong,
  // FetchAction1: FetchAction1,
  // FetchAction2: FetchAction2,
  // FetchActio3: FetchAction3,
  // ...
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;