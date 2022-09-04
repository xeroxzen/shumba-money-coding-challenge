import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
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
        {" "}
        <Header />
      </header>

      <main>
        <Routes>
          {/* {!isAuthenticated ? ( */}
          <Route path="/auth" element={<Auth />} />
          {/* // ) : ( */}
          <>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/recipients" element={<Recipients />} />
            <Route path="/recipient/" element={<Recipient />} />
            <Route path="/recipient/add" element={<CreateRecipient />} />
          </>
          {/* // )} */}
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
