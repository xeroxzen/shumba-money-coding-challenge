import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Header from "./components/Header";
import Auth from "./components/Auth";
import CreateRecipient from "./components/CreateRecipient";
import Recipients from "./components/Recipients";
import Recipient from "./components/Recipient";
import { authActions } from "./store";

function App() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  console.log(isAuthenticated);

  useEffect(() => {
    if (localStorage.getItem("userId")) {
      dispatch(authActions.login());
    }
  }, [dispatch]);

  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          {/* <Route path="/auth" element={<Auth />} /> */}
          <Route path="/" element={<Auth />} />
          <Route path="/recipients" element={<Recipients />} />
          <Route path="/recipient/:id" element={<Recipient />} />
          <Route path="/recipient/create" element={<CreateRecipient />} />
        </Routes>
        <Auth />
      </main>
    </React.Fragment>
  );
}

export default App;
