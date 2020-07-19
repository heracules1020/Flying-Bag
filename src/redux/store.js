import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import StateManager from "../helper/StateManager";
import mainReducer from "./reducer";
import mainSaga from "./saga";

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
const stateManager = new StateManager();

export function configureStore() {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    mainReducer,
    stateManager.loadState(),
    composeEnhancers(applyMiddleware(...middlewares))
  );
  store.subscribe(() => {
    stateManager.saveState(store.getState());
  });
  sagaMiddleware.run(mainSaga);
  return store;
}
