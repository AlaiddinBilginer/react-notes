// createAsyncThunk: Asenkron işlemleri yönetmek için kullanılır. API çağrıları gibi işlemleri kolayca entegre eder.
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  users: [],
  loading: false,
};

export const getAllUsers = createAsyncThunk('users', async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/users');
  console.log(response);
  return response.data;
});

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // Http isteği olmaz.
  },
  extraReducers: (builder) => {
    // Http isteği olur.
    builder.addCase(getAllUsers.fulfilled, (state, action) => {
      state.users = action.payload;
    });
  },
});

export const {} = userSlice.actions;

export default userSlice.reducer;
