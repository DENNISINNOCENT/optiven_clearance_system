import { configureStore } from "@reduxjs/toolkit";
import employeeFormReducer from "../redux/employeeFormSlice";
import userSliceReducer from '../redux/userSlice';

const store = configureStore({
    reducer:{
      employeeForm:employeeFormReducer,
      users:userSliceReducer,
    }
})
export default store