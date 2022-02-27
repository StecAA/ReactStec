export const ADD_CHAT = "CHATS::ADD_CHAT";
export const DELETE_CHAT = "CHATS::DELETE_CHAT";

export const deleteChate = (id) => ({
 type: DELETE_CHAT,
 payload: id,
})
export const newChat = (id, name) => ({
    type: ADD_CHAT,
    payload: {
        id: id,
        name: name,
    }
   })
