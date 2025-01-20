import { configureStore } from '@reduxjs/toolkit'
import dataReducer from '../features/bitcoinSlice';
import authReducer from '../components/auth/authSlice'

export const store = configureStore({
  reducer: {
    data: dataReducer,
    auth :authReducer
  },
});

  