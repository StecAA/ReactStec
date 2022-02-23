import { createStore, combineReducers } from "redux";
import { ProfileReducer } from "./profile/reducer";
import { chatsReducer } from "./chats/reducer";
import { messageReducer } from "./messages/reducer";
const rootReducer = combineReducers({
    Profile: ProfileReducer,
    chatsR: chatsReducer,
    messageR: messageReducer,
});
export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );