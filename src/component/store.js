import { configureStore } from "@reduxjs/toolkit";
import employeeFormReducer from "../redux/employeeFormSlice";

const store = configureStore({
    reducer:{
      employeeForm:employeeFormReducer
    }
})
export default store