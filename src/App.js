// App.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import Admindashboard from "./dashboard/Admindashboard";
import EmployeeForm from "./pages/EmployeeForm";
import UserForm from "./pages/UserForm";
import AllEmployeeView from "./pages/AllEmployeeView";
import Userview from "./pages/Userview";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/admin/*" element={<Admindashboard />}>
          <Route path="employeeform" element={<EmployeeForm />} />
          <Route path="users" element= {<UserForm/>}/>
          <Route path="employees" element={<AllEmployeeView/>}/>
          <Route path="view-users" element={<Userview/>}/>
          
        </Route>
      </Routes>
    </div>
  );
}

export default App;
