const ADD_POST = "ADD-POST";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

const store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Say Hello!!!", likesCount: 42 },
        { id: 2, message: "Say Hello!!!!!!!!!!!!!!", likesCount: 23 },
        { id: 3, message: "Say Hello!!!!!!!!!!!!!!!!!", likesCount: 11 },
      ],
    },
    messagePage: {
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
    },
  },
  _callSubscriber() {
    console.log("State changed");
  },

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    if (action.type === ADD_POST) {
      let newOnj = {
        id: this._state.profilePage.posts.length + 1,
        message: action.text,
        likesCount: 3,
      };
      this._state.profilePage.posts.push(newOnj);
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
      this._state.messagePage.newMessageBody = action.body;
      this._callSubscriber(this._state);
    } else if (action.type === SEND_MESSAGE) {
      let body = this._state.messagePage.newMessageBody;
      this._state.messagePage.newMessageBody = "";
      this._state.messagePage.messages.push({ id: 6, message: body });
      this._callSubscriber(this._state);
    }
  },
};

export const addPostCreator = (text) => ({
  type: ADD_POST,
  text: text,
});

export const updateNewMessageBodyCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body,
});

export const sendMessageCreator = (text) => ({
  type: SEND_MESSAGE,
  text: text,
});

export default store;
window.store = store;
