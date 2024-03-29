import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const updateEmployeeStatus = createAsyncThunk(
  "updateEmployeeStatus",
  async ({ employee_id, newStatus }, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        `http://localhost:5000/employees/${employee_id}`,
        { status: newStatus }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const postEmployee = createAsyncThunk(
  "postEmployee",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/employees",
        data
      );
      console.log(data);
      console.log(response);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getEmployee = createAsyncThunk(
  "getEmployee",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("http://localhost:5000/employees");
      if (!response) {
        throw new Error("Server cannot be reached");
      }
      // console.log(response.data);
      return response.data;
    } catch (error) {
      console.error('Error:', error);
      return rejectWithValue(error.message);
    }
  }
);

const employeeFormSlice = createSlice({
  name: "employees",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },

  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postEmployee.pending, (state) => {
        state.loading = true;
      })
      .addCase(postEmployee.fulfilled, (state, action) => {
        state.loading = false;
        state.data.push(action.payload);
      })
      .addCase(postEmployee.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(getEmployee.pending, (state) => {
        state.loading = true;
      })
      .addCase(getEmployee.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getEmployee.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateEmployeeStatus.pending,state =>{
        state.loading = true
      })
      .addCase(updateEmployeeStatus.fulfilled, (state, action) => {
        state.loading = false;
        const updatedEmployee = action.payload;
        const updatedData = [...state.data]; // Create a new array
        const index = updatedData.findIndex((employee) => employee.employee_id === updatedEmployee.employee_id);
        if (index !== -1) {
          updatedData[index] = updatedEmployee;
        }
        state.data = updatedData;
      })
      
      .addCase(updateEmployeeStatus.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
export default employeeFormSlice.reducer;
