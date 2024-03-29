import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// post Users
export const postUsers = createAsyncThunk(
  "postUsers",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post("http://localhost:5000/users", data);
 
      console.log(data);
      console.log(response);
      return response.data;
    } catch (error) {
      console.log("Error", error);
      return rejectWithValue(error.message);
    }
  }
);
export const updateUsers = createAsyncThunk(
  "updateUsers",
  async (users, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        `http://localhost:5000/users/${users.user_id}`,
        users  // Include the user details in the request body
      );
      console.log(response.data)
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);


export const deleteUsers = createAsyncThunk(
  "deleteUsers",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`http://localhost:5000/users/${id}`);
      return response.users;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// get users.
export const getUsers = createAsyncThunk(
  "getUsers",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("http://localhost:5000/users");
      if (!response) {
        throw new Error("server cannot be reached");
      }
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(postUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users.push(action.payload.data);
      })
      .addCase(postUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(getUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteUsers.fulfilled, (state, action) => {
        state.loading = false;
        const id = action.payload;
        if (id) {
          state.users = state.users.filter((users) => users.id !== id);
        }
      })
      .addCase(deleteUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateUsers.fulfilled, (state, action) => {
        state.loading = false;
        const updatedUser = action.payload;
        state.users = state.users.map((user) =>
          user.user_id === updatedUser.user_id ? updatedUser : user
        );
      })

      .addCase(updateUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
export default userSlice.reducer;
