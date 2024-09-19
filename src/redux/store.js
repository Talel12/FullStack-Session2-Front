import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice/counterSlice'
import authReducer from './authSlice/authSlice'


export const store = configureStore({
  reducer: {
    counter:counterReducer,
    auth: authReducer,
},
})