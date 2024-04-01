export default (state, action) => {
   
  switch (action.type) {

    case "ADD_TASK":
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };

    case "CHANGE_STATUS_TASK":
      return {
        ...state,
        tasks: state.tasks.map((item) => {
          if (item.id === action.payload) {
            return {
              ...item,
              status: !item.status,
            };
          }
          return item;
        }),
      };

    case "DELETE_TASK":

      return {
        ...state,
        tasks: state.tasks.filter((task) =>  task.id != action.payload),
      };

    default:
      return state;
  }
};
