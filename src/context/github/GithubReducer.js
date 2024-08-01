const githubreducer = (state, action) => {
  console.log("state value is" + state.users);
  console.log("action value is:" + action.payload);
  switch (action.type) {
    case "GET_USERS":
      return {
        ...state,
        users: action.payload,
        isloading: false,
      };

    case "GET_USER":
      return {
        ...state,
        user: action.payload,
        isloading: false,
      };
    case "SET_LOADING":
      return {
        ...state,
        isloading: true,
      };
    case "CLEAR_USERS":
      return {
        ...state,
        users: [],
      };
    default:
      return state;
  }
};

export default githubreducer;
