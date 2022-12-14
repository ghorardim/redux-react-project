import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";

// redux stuff
import { createStore } from "redux";
import { DECREASE, INCREASE } from "./actions";
import reducer from "./components/reducer";
import { Provider } from "react-redux";

// store
const store = createStore(reducer);
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
