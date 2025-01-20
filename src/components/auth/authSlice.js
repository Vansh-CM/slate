// features/dataSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';



// Define the async thunk for fetching data
export const login = createAsyncThunk(
    'auth/login',
    async (credentials, { rejectWithValue }) => {
     
        fetch(`http://localhost:4000/api/user/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
        
          },
          body: JSON.stringify(credentials),
        })
          .then(response => response.json()) 
          .then(data => {
            console.log('Success:', data); 
            return data
          })
          .catch(error => {
            if (error.response && error.response.data && error.response.data.errors && error?.response?.data?.data?.message) {
              return rejectWithValue(error?.response?.data?.data?.message);
            } else {
              return rejectWithValue(error?.response?.data?.data?.message);
            }
          });
      
        
      
    }
  );
  export const signup = createAsyncThunk(
    'auth/signup',
    async (credentials, { rejectWithValue }) => {
     
        fetch(`http://localhost:4000/api/user/signup`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
        
          },
          body: JSON.stringify(credentials),
        })
          .then(response => response.json()) 
          .then(data => {
            console.log('Success:', data); 
            return data
          })
          .catch(error => {
            if (error.response && error.response.data && error.response.data.errors && error?.response?.data?.data?.message) {
              return rejectWithValue(error?.response?.data?.data?.message);
            } else {
              return rejectWithValue(error?.response?.data?.data?.message);
            }
          });
      
        
      
    }
  );

  export const fetchUserList = createAsyncThunk(
    'user/fetchUserList',
    async (_, { rejectWithValue }) => {
      try {
        const response = await fetch('http://localhost:4000/api/user/userlist');
        const data = await response.json();
        
        if (!response.ok) {
          return rejectWithValue(data?.message || 'Failed to fetch user list');
        }
  
        // Return only the data part of the response (the array of users)
        return data.data;  // Here we return the 'data' array from the response
      } catch (error) {
        return rejectWithValue(error?.message || 'An error occurred while fetching user list');
      }
    }
  );
  // export const fetchUserList = createAsyncThunk(
  //   'user/fetchUserList',
  //   async (_, { rejectWithValue }) => {
  //     try {
  //       const response = await fetch('http://localhost:4000/api/user/userlist');
  //       const data = await response.json();
  //       console.log(data , "sdgfsdgf")
  
  //       if (!response.ok) {
  //         return rejectWithValue(data?.message || 'Failed to fetch user list');
  //       }
  
  //       return data; // Return the list of users
  //     } catch (error) {
  //       return rejectWithValue(error?.message || 'An error occurred while fetching user list');
  //     }
  //   }
  // );
// Define the async thunk for fetching data



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

    
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })



      .addCase(signup.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(signup.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      

      .addCase(fetchUserList.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserList.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload; 
        console.log("return action.payload" ,action.payload ) // Store the list of users in 'users'
      })
      .addCase(fetchUserList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;  // Handle errors
      });

  },
});


export default dataSlice.reducer;
