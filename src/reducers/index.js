import { combineReducers } from "redux";
import categories from "./list/";
import images from "./image/";

export default combineReducers({
  categories,
  images
});
