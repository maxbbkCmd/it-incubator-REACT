const ADD_POST = 'ADD-POST';

const store = {

  _state: {
    profilePage: {
      posts: [
        { id: 1, message: 'Say Hello!!!', likesCount: 42 },
        { id: 2, message: 'Say Hello!!!!!!!!!!!!!!', likesCount: 23 },
        { id: 3, message: 'Say Hello!!!!!!!!!!!!!!!!!', likesCount: 11 },
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
    }
  },
  _callSubscriber() {
    console.log('State changed');
  },

  getState() {
    return this._state
  },

  subscribe (observer) {
    this._callSubscriber = observer;
  }, 
  

  dispatch(action) {
    if (action.type === ADD_POST) {
        let newOnj = {
          id: this._state.profilePage.posts.length + 1,
          message: action.text,
          likesCount: 3
        }
        this._state.profilePage.posts.push(newOnj)
        this._callSubscriber(this._state)
    }
  }
};

export const addPostActionCreate = (text) => ({
  type: 'ADD-POST',
  text: text
});

export default store;
window.store = store;








