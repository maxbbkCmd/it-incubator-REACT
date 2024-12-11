const ADD_POST = "ADD-POST";

const initialState = {
  posts: [
    { id: 1, message: "Say Hello!!!", likesCount: 42 },
    { id: 2, message: "Say Hello!!!!!!!!!!!!!!", likesCount: 23 },
    { id: 3, message: "Say Hello!!!!!!!!!!!!!!!!!", likesCount: 11 },
  ],
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newOnj = {
        id: state.posts.length + 1,
        message: action.text,
        likesCount: 3,
      };
      state.posts.push(newOnj);
      return state;
    default:
      return state;
  }
};

export const addPostCreator = (text) => ({
  type: ADD_POST,
  text: text,
});

export default profileReducer;
