import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "./api";

export const fetchUserData = createAsyncThunk("users", async () => {
  const response = await instance.get("/users");
  const result = await response.data;
  return result;
});

export const fetchUserById = createAsyncThunk("user/id", async (data) => {
  const response = await instance.get(`/user/${data}`);
  const result = await response.data;
  console.log(result);
  return result;
});

export const addUserData = createAsyncThunk("user/add", async (data) => {
  const response = await instance.post("/user/create", data);
  const result = await response.data;
  console.log(result, "User has been created");
  return result;
});

export const updateUserData = createAsyncThunk("user/update", async (data) => {
  const response = await instance.patch(`/user/${data.id}`, data);
  const result = await response.data;
  console.log(result, "User has been updated");
  return result;
});

export const deleteData = createAsyncThunk("user/delete", async (id) => {
  await instance.delete(`/user/${id}`);
  console.log(`User with id ${id} has been deleted`);
});

const initialState = {
  user: [],
  loading: false,
  error: null,
  success: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Display User Data
    builder.addCase(fetchUserData.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchUserData.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.user = payload;
      state.error = null;
    });
    builder.addCase(fetchUserData.rejected, (state, action) => {
      state.pending = null;
      state.user = [];
      state.error = action.error.message;
    });

    // Creating New User Data
    builder.addCase(addUserData.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(addUserData.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.user += payload;
      state.error = null;
    });
    builder.addCase(addUserData.rejected, (state, action) => {
      state.pending = null;
      state.user = null;
      state.error = action.error.message;
    });

    // Updating User Data
    builder.addCase(updateUserData.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(updateUserData.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.user = payload;
      state.success = true;
      state.error = null;
    });
    builder.addCase(updateUserData.rejected, (state, action) => {
      state.pending = null;
      state.user = null;
      state.error = action.error.message;
    });
  },
});

export default userSlice.reducer;
