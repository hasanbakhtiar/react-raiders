const intitalState = [];

export const blogReducer = (state=intitalState,action)=>{
    switch (action.type) {
      case "Create_Blog":
        return [...state,action.blog]
      

      default:
        return state;
    }
}
