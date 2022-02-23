import {ADD_MESSAGES, DELETE_MESSAGES} from "./actions"

const initialState = [];
export const messageReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_MESSAGES:
            {
                return [...state, {id: action.payload.id, messages: action.payload.messages}]
            }
        case DELETE_MESSAGES:
            {
                return state.filter(({id})=> id !== action.payload.id);
            }
        default :

        return state;
    }
};