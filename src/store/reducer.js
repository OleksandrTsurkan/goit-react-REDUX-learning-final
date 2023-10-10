import { todoReducer } from './todo/slice';

import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { combineReducers } from 'redux';
import { productsReducer } from './products/slice';

const persistConfig = {
  key: 'root',
  storage,
  blackList: ['password'],
};

const persistConfig2 = {
  key: 'other',
  storage,
};

const persistedReducer = persistReducer(persistConfig, todoReducer);

const otherReducers = combineReducers({
  users: todoReducer,
  items: todoReducer,
  password: todoReducer,
});

const persistedReducer2 = persistReducer(persistConfig2, otherReducers);

export const reducer = {
  todo: persistedReducer,
  other: persistedReducer2,
  products: productsReducer,
};
