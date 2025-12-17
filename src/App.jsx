import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'remixicon/fonts/remixicon.css'
import Home from "./Home";
import NewCustomer from "./NewCustomer";
import store from "./redux/store";
import { Provider } from "react-redux";

const App = () => {



  return(

    <BrowserRouter>
    <Provider store={store}>
    <Routes>
      <Route path="/home" element={<Home />}/>
      <Route path="/new-customer" element={ <NewCustomer /> } />
    </Routes>
    </Provider>
    </BrowserRouter>
  )


}

export default App