import {Change_NAME} from "./actions"

const initialState = {
    name: "True",
    showName: false,
}
export const ProfileReducer = (state = initialState, action) => {
    switch (action.type){
        case  Change_NAME: {
return {
    ...state,
    showName: !state.showName,
}

        }
        default :
        return state;
    }
};