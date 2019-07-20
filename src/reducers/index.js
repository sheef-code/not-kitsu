import { combineReducers } from "redux";
import trendingReducer from "./trendingReducer";
import topReducer from "./topReducer";
import upcomingReducer from "./upcomingReducer";
import popularReducer from "./popularReducer";
import highestReducer from "./highestReducer";
import filterReducer from "./filterReducer";
export default combineReducers({
  trending: trendingReducer,
  top: topReducer,
  upcoming: upcomingReducer,
  popular: popularReducer,
  highest: highestReducer,
  filter: filterReducer
});
