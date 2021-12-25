import contactsReducer from "./contacts/contacts-reducer";
import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth/auth-slice";

// const store = configureStore({
//   reducer: {
//     auth: authSlice,
//     contacts: contactsReducer,
//   },
// });

// export { store };

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import logger from 'redux-logger'
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "auth",
  storage,
  whitelist: ['token'],
  // blacklist: ['filter'],
};

const store = configureStore({
  reducer: {
    auth: persistReducer(persistConfig, authSlice),
  contacts: persistReducer(persistConfig, contactsReducer)
},
  devTools: process.env.NODE_ENV === "development",
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }).concat(logger)
});

const persistor = persistStore(store);


export { store, persistor };
