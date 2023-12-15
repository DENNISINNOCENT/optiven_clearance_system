import { createSlice } from "@reduxjs/toolkit";

const employeeFormSlice = createSlice({
  name: "employees",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },

  reducers: {},
  extraReducers: (builder) => {
    builder.addCase();
  },
});
