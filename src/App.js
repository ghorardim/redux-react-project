import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";
// redux stuff
import { createStore } from "redux";

const initialStore = {
  count: 0,
}
// reducer
function reducer(state, action) {
  console.log({state, action});
  return state;
}
// store
const store = createStore(reducer, initialStore);
store.dispatch({type: 'DECREASE'});
function App() {
  // cart setup

  return (
    <main>
      <Navbar cart={store.getState()}/>
      <CartContainer cart={cartItems} />
    </main>
  );
}

export default App;
