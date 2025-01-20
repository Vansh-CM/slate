// features/dataSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// Define the async thunk for fetching data
export const fetchData = createAsyncThunk('data/fetchData', async () => {
  const response = await fetch('https://fakestoreapi.com/products');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return await response.json();
});

export const updateProduct = createAsyncThunk(
  'product/updateProduct',
  async ({ id, title, price, description }, { rejectWithValue }) => {
    try {
      const response = await axios.put(`https://localhost:4000/product/${id}`, {
        title,
        price,
        description,
      });
      return response.data; // return the updated product data
    } catch (error) {
      return rejectWithValue(error.response.data); // handle error
    }
  }
);



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
      }) 
      .addCase(updateProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.product = action.payload; // Update the product data with response
      })
      .addCase(updateProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // Handle error
      });;
  },
});

// Export the async thunk
// export { fetchData };

// Export the reducer
export default dataSlice.reducer;
