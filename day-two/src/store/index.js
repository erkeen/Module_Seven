import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "../reducers";
import thunk from "redux-thunk";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const initialState = {
  listStudents: {
    students: [],
  },
};

export default function configureStore() {
  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
  );
}
