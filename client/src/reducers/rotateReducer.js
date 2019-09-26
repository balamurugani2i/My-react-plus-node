export default (state, action) => {
    switch (action.type) {
      case "rotate":
      console.log('check action ---->', action.payload);
      return {
          rotating: action.payload
        };
      default:
        return state;
    }
  };