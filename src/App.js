// App.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import Admindashboard from "./dashboard/Admindashboard";
import EmployeeForm from "./pages/EmployeeForm";
import UserForm from "./pages/UserForm";
import UserView from "./pages/UserView";
import AllEmployeeView from "./pages/AllEmployeeView";

import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* public Routes */}
        <Route path="/" element={<Login />} />
        <Route path="/forgot_password" element={<ForgotPassword />} />
        {/* login */}

        <Route path="/admin/*" element={<Admindashboard />}>
          <Route path="employeeform" element={<EmployeeForm />} />
          <Route path="users" element={<UserForm />} />
          <Route path="employees" element={<AllEmployeeView />} />
          <Route path="view-users" element={<UserView />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
