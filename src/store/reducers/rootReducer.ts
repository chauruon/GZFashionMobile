import { combineReducers } from "redux";

import FetchAction from "./FetchAction";

const rootReducer = combineReducers({
  FetchAction: FetchAction,
  // FetchAction1: FetchAction1,
  // FetchAction2: FetchAction2,
  // FetchActio3: FetchAction3,
  // ...
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;