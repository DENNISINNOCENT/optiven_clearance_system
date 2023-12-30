// App.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import Admindashboard from "./dashboard/Admindashboard";
import EmployeeForm from "./pages/EmployeeForm";
import UsersForm from "./pages/UsersForm";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/admin/*" element={<Admindashboard />}>
          <Route path="employeeform" element={<EmployeeForm />} />
          <Route path="users" element= {<UsersForm/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
