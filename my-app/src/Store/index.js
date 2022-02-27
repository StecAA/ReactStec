import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { ProfileReducer } from "./profile/reducer";
import { chatsReducer } from "./chats/reducer";
import { messageReducer } from "./messages/reducer";
import thunk from "redux-thunk";
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from 'redux-persist'

const rootReducer = combineReducers({
    Profile: ProfileReducer,
    chatsR: chatsReducer,
    messageR: messageReducer,
}
);

const persistConfig = {
    key: 'root',
    storage,
  };   
  const persistedReducer = persistReducer(persistConfig, rootReducer);
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  export const store = createStore(
    persistedReducer,
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    composeEnhancers(applyMiddleware(thunk)),
    );

export const persistor = persistStore(store);



