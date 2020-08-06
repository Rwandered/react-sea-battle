import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import logger from 'redux-logger'
import rootReducer from "./reducers/rootReducer";

export const store = createStore(
  rootReducer,
  applyMiddleware(
    // logger,
    thunk,
  )
)

// console.log('store: ', store.getState())