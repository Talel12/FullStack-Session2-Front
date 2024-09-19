import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getCurrentUser = createAsyncThunk("user/getCurrent", async () => {
  const token = localStorage.getItem("token");
  const response = await axios.post(
    "http://localhost:5000/api/auth/current",
    {},
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  return response.data;
});

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
    user: null,
    isLoading: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCurrentUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCurrentUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = true;
        state.user = action.payload;
      })
      .addCase(getCurrentUser.rejected, (state) => {
        state.isLoading = false;
        state.isAuthenticated = false;
        state.user = null;
      });
  },
  reducers: {
    // increment: (state) => {
    //   state.value += 1
    // },
  },
});

// export const {} = authSlice.actions

export default authSlice.reducer;
