import { createStore, applyMiddleware, compose } from "redux";
import creatRootReducer from "./reducers/rootReducer";
import thunk from "redux-thunk";
import { createBrowserHistory } from "history";
import { connectRouter, routerMiddleware } from "connected-react-router";

export const history = createBrowserHistory();
const connectRouterHistory = connectRouter(history);
const reactRouterMiddleware = routerMiddleware(history);

const middlewares = [thunk, reactRouterMiddleware];

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  creatRootReducer(connectRouterHistory),
  storeEnhancers(applyMiddleware(...middlewares))
);
export default store;
