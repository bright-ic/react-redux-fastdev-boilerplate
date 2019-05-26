import { combineReducers } from "redux";
import articlesReducer from "./Articles";

const creatRootReducer = coonectRouterHistory =>
  combineReducers({
    router: coonectRouterHistory,
    articles: articlesReducer
  });

export default creatRootReducer;
