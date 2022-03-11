import { GET_ARTICLES_FAILURE, GET_ARTICLES_REQUEST, GET_ARTICLES_SUCCESS} from "./actions"
export const Fetch_STATUS = {
    IDLE : 0,
    REQUEST: 1,
    SUCCESS: 2,
    FAILUURE: 3,
};
const initialState = {
    data: [],
    error: null,
    status: Fetch_STATUS.IDLE,
};
export const articlesReducer = (state = initialState, action) => {
    switch (action.type){
        case GET_ARTICLES_REQUEST:
            {
                return {...state, status: Fetch_STATUS.REQUEST, error: null,}
            }
        case GET_ARTICLES_SUCCESS:
            {
                return {...state, 
                    date : action.payload,
                    status: Fetch_STATUS.SUCCESS,}
            }
        case GET_ARTICLES_FAILURE:
            {
                return {...state, 
                status: Fetch_STATUS.FAILUURE, 
                error: action.payload,
                }
            }
        default :

        return state;
    }
};