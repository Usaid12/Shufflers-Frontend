import React from "react";
import ProductList from "./features/product-list/ProductList";
import { Provider } from "react-redux";
import { store } from "./store";
import Home from "./pages/Home";
function App() {



return(
  <>
  <Provider store={store}>

  <Home/>
  </Provider>
   
    </>
)}

export default App;
