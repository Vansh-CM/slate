// features/dataSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Define the async thunk for fetching data
export const fetchData = createAsyncThunk('data/fetchData', async () => {
  const response = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return await response.json();
});

// Create a slice
const dataSlice = createSlice({
  name: 'data',
  initialState: {
    loading: false,
    data: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

// Export the async thunk
// export { fetchData };

// Export the reducer
export default dataSlice.reducer;
