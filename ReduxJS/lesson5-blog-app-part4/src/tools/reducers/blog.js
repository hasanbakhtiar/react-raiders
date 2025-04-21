
export const blogReducer = (state = null, action) => {
  switch (action.type) {
    case 'GET_BLOG':
      return action.blogs;
    default:
      return state;
  }
};
