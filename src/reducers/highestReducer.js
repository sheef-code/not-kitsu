import { FETCH_HIGHEST } from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_HIGHEST:
      return action.payload;
    default:
      return state;
  }
};
