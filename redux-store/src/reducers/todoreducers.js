const intialData = {
  list: [],
};

const todoReducers = (state = intialData, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const { id, data } = action.payload;

      return {
        ...state,
        list: [
          ...state.list,
          {
            id: id,
            data: data,
          },
        ],
      };
    case "DELETE_TODO":
      const neewList = state.list.filter((elem) => elem.id !== action.id);

      return {
        ...state,
        list: neewList,
      };
    default:
      return state;
  }
};

export default todoReducers;
