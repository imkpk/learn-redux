// reducer always takes initial state and the action
import { ActionTypes } from "../constants/action_types";

const initialState = {
  product: [],
};
const a={}

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, product: payload };
    default:
      return state;
  }
};

export const selectedProductsReducer = (state=a, {type, payload }) => {
  console.log(type);
  console.log(payload);
  console.log(state)
  switch (type) {
    case ActionTypes.SELECTED_PRODUCTS:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_PRODUCTS:
      return {};
    default:
      return state;
  }
};
