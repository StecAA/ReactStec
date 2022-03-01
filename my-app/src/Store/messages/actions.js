export const ADD_MESSAGES = "MESSAGES::ADD_MESSAGES";
export const DELETE_MESSAGES = "MESSAGES::DELETE_MESSAGES";

export const deleteMessages = (id) => ({
 type: DELETE_MESSAGES,
 payload: id,
})
export const newMessages = (id, messages, name) => ({
    type: ADD_MESSAGES,
    payload: {
        id,
        messages,
        name,
    }
   })
let timeout;

export const addMessageWithThunk = (chatID, newMsg, name) => (dispatch, getState) => {
dispatch(newMessages(chatID, newMsg , name));
if (name !== "AUTHORS.BOT") {
    // clearTimeout(timeout);
    timeout = setTimeout(()=>{
                const newMsgbot = {name: "AUTHORS.BOT" , message: "i am bot", id: `msg-${Date.now()}`};
                dispatch(newMessages(newMsgbot.id, newMsgbot.message, newMsgbot.name));
    }, 4000);
}
}
