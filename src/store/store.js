import {combineReducers, createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';
import { globalReducer } from './global/globalReducer';
import { userStateReducer } from './auth/userReducer';


// config store
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  userState:['userState','cart']
};

const rootReducer = combineReducers({
  userState: persistReducer(persistConfig, userStateReducer),
  globalReducer: globalReducer 
});



// const composeEnhancher =
//   (window.__REDUX_DEVTOOLS_EXTENSION__ &&
//     window.__REDUX_DEVTOOLS_EXTENSION__()) ||
//   compose;

// const composeEnhancers = composeWithDevTools({realtime: true, port: 8000});

const middleware = [thunk];

export const store = createStore(
  rootReducer,
  // composeEnhancers(applyMiddleware(...middleware)),
  applyMiddleware(...middleware),
);

export const persistor = persistStore(store);