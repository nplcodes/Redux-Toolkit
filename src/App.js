import React, { useEffect } from "react";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import { useSelector } from "react-redux";

function App() {
  const cart = useSelector((state)=> state.cart)
  const isLoggedin = useSelector((state)=>state.auth.isLoggedin)
  useEffect(() => {
       fetch(
        "https://redux-http-8fded-default-rtdb.firebaseio.com/cartItems.json",
        {
          method: "PUT",
          body: JSON.stringify(cart)
        }

       )
  }, [cart])
  
  return (
    <div className="App">
      {!isLoggedin && <Auth /> }
      {isLoggedin && <Layout /> }
    </div>
  );
}

export default App;
