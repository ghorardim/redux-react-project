import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";
// redux stuff
import { createStore } from "redux";
import { DECREASE, INCREASE } from "./actions";
import reducer from "./components/reducer";
import { Provider } from "react-redux";

const initialStore = {
  cart: cartItems,
  total: 110,
  amount: 5
}

// store
const store = createStore(reducer, initialStore);
function App() {
  // cart setup

  return (
    <Provider store={store}>
      <Navbar/>
      <CartContainer/>
    </Provider>
  );
}

export default App;
