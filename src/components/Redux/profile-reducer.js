const ADD_POST = "ADD-POST";

const profileReducer = (state, action) => {
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
