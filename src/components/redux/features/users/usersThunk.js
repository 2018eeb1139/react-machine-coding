// features/users/usersThunks.js
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
