import { createStore } from "redux";
import rootReducer from "./reducers/rootReducer";
import createSagaMiddleware from 'redux-saga'
import { applyMiddleware } from "redux";
import mySaga from "./saga/rootSaga";
const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(mySaga)
export default store;