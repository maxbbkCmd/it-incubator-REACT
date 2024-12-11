import dialogReducer from "./dialog-reducer";
import profileReducer from "./profile-reducer";

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
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.messagePage = dialogReducer(this._state.messagePage, action);

    this._callSubscriber(this._state);
  },
};

export default store;
window.store = store;
