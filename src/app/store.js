import { configureStore } from '@reduxjs/toolkit';


const store = configureStore({
  reducer: {
    // auth: authReducer,
    // news: newsReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});
export default store;