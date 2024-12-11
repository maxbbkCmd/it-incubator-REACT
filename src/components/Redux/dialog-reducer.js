const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

const initialState = {
  dialogs: [
    { id: 1, name: "Max" },
    { id: 2, name: "Sveta" },
    { id: 3, name: "Arina" },
    { id: 4, name: "Raf" },
    { id: 5, name: "Cheri" },
    { id: 6, name: "Papa" },
    { id: 7, name: "Mama" },
  ],
  messages: [
    { id: 1, message: "qqq" },
    { id: 2, message: "aaa" },
    { id: 3, message: "ssss" },
    { id: 4, message: "dddd" },
  ],
  newMessageBody: "",
};

const dialogReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.body;
      return state;
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      state.newMessageBody = "";
      state.messages.push({ id: 6, message: body });
    default:
      return state;
  }
};

export const updateNewMessageBodyCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body,
});

export const sendMessageCreator = (text) => ({
  type: SEND_MESSAGE,
  text: text,
});

export default dialogReducer;
