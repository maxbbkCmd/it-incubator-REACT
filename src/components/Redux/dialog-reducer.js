const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

const initialState = {
  posts: [
    { id: 1, message: "Say Hello!!!", likesCount: 42 },
    { id: 2, message: "Say Hello!!!!!!!!!!!!!!", likesCount: 23 },
    { id: 3, message: "Say Hello!!!!!!!!!!!!!!!!!", likesCount: 11 },
  ],
}

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
