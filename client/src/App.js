import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import RecipientContainer from "./containers/RecipientContainer";
import DashboardContainer from "./containers/DashboardContainer";
import AuthContainer from "./containers/AuthContainer";

import { authActions } from "./store";
import RecipientForm from "./components/recipients/RecipientForm";

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
      <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg">
        <Routes>
          <Route path="/auth" element={<AuthContainer />} />
          <Route path="/recipients" element={<RecipientContainer />} />
          <Route path="/" element={<DashboardContainer />} />
          <Route path="/dashboard" element={<DashboardContainer />} />
          <Route path="/recipient/add" element={<RecipientForm />} />
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
