import {combineReducers, configureStore} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import {spoonacularApi} from './spoonacular';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: [spoonacularApi.reducerPath],
};

const rootReducer = combineReducers({
  [spoonacularApi.reducerPath]: spoonacularApi.reducer,
});

const reduxDebugger = require('redux-flipper').default();
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat([spoonacularApi.middleware, reduxDebugger]),
});

const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export {persistor, store};
