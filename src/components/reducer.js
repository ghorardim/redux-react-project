import { CLEAR_CART, DECREASE, INCREASE, REMOVE } from '../actions';

function reducer(state, action) {
  const { cart, total, amount } = state;
  let tempCart = [];
  switch (action.type) {
    case CLEAR_CART:
      return { ...state, cart: [] };
    case DECREASE:
      if (action.payload.amount === 1) {
        return reducer(state, {...action, type: REMOVE});
      } else {
        tempCart = cart.map((item) => {
          if (item.id === action.payload.id) {
            item.amount = item.amount - 1;
          }
          return item;
        });
        return {
          ...state,
          cart: tempCart,
        };
      }
    case INCREASE:
      tempCart = cart.map((item) => {
        if (item.id === action.payload.id) {
          item.amount = item.amount + 1;
        }
        return item;
      });
      return {
        ...state,
        cart: tempCart,
      };
    case REMOVE:
      return {
        ...state,
        cart: cart.filter((item) => item.id !== action.payload.id),
      };
    default:
      return state;
  }
}

export default reducer;
