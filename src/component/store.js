import { configureStore } from "@reduxjs/toolkit";
import employeeFormReducer from "../redux/employeeFormSlice";
import userSliceReducer from '../redux/userSlice';

const store = configureStore({
    reducer:{
      employees:employeeFormReducer,
      users:userSliceReducer,
    }
})
export default store