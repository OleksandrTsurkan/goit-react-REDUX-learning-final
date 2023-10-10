import { reducer } from './reducer';
import { configureStore } from '@reduxjs/toolkit';

import { persistStore } from 'redux-persist';

// const customMiddleware = state => {
//   return next => {
//     return action => {
//       console.log('action', typeof action);
//       if (typeof action === 'function') {
//         action(state.dispatch);
//         return;
//       }
//       return next(action);
//     };
//   };
// };

export const store = configureStore({
  reducer,
//   middleware: [customMiddleware],
});

export const persistor = persistStore(store);
