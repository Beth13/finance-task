import { FINANCE_RECEIVED } from "./finance.actions";

const initialState = {
  finance: {
    finance: [],
  },
};

const financeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FINANCE_RECEIVED: {
      return {
        ...state,
        finance: action.payload,
      };
    }

    default:
      return state;
  }
};

export default financeReducer;
