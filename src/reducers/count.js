import { INCREMENT, DECREMENT } from "../actions";

const initialState = { value: 0 };

const swichCount = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { value: state.value + 1 };
    case DECREMENT:
      return { value: state.value - 1 };
    default:
      return state;
  }
};

export default swichCount;
