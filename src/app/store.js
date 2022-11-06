import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice'
import newsReducer from '../features/news/newsSlice'


const store = configureStore({
  reducer: {
    auth: authReducer,
    news: newsReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;