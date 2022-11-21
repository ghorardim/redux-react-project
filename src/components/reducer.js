import { CLEAR_CART, DECREASE, GET_TOTALS, INCREASE, REMOVE } from '../actions';
import cartItems from '../cart-items';

const initialStore = {
  cart: cartItems,
  total: 0,
  amount: 0
}

function reducer(state = initialStore, action) {
  const { cart, total, amount } = state;
  let tempCart = [];
  switch (action.type) {
    case CLEAR_CART:
      return { ...state, cart: [] };
    case DECREASE:
      console.log('flag: ',action.payload.amount);
      if (action.payload.amount === 1) {
        return reducer(state, { ...action, type: REMOVE });
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
    case GET_TOTALS:
      let {total, amount} = cart.reduce((cartTotal, cartItem) => {
        cartTotal.amount += cartItem.amount;
        cartTotal.total += cartItem.price * cartItem.amount;
        return cartTotal;
      }, {
        total: 0,
        amount: 0
      })
      total = parseFloat(total.toFixed(2));
      return {
        ...state,
        total,
        amount
      }
    default:
      return state;
  }
}

export default reducer;
