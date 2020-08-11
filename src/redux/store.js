import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';
// redux persist
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['loading', 'error'],
};
const persistedReducer = persistReducer(persistConfig, reducer);

export default () => {
  const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(thunk)));
  const persistor = persistStore(store);

  return { store, persistor };
};
