export const ADD_MESSAGES = "MESSAGES::ADD_MESSAGES";
export const DELETE_MESSAGES = "MESSAGES::DELETE_MESSAGES";

export const deleteMessages = (id) => ({
 type: DELETE_MESSAGES,
 payload: id,
})
export const newMessages = (id, messages) => ({
    type: ADD_MESSAGES,
    payload: {
        id,
        messages,
    }
   })
