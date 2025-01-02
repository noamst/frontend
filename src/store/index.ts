import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { userReducer } from './slices/user';

const rootReducer = combineReducers({
  user: userReducer,
});

export function createStore() {
  return configureStore({
    reducer: rootReducer,
  });
}

export type State = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof createStore>;
export type AppDispatch = AppStore['dispatch'];
