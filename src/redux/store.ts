import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { rootReducer } from "./User/root-reducer";
import logger from "redux-logger";

//export const store = createStore(rootReducer,  applyMiddleware(logger));
export const store = createStore(rootReducer);
