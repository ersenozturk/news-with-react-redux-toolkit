import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: "",
};

const authSlide = createSlice({
  name: "auth",
  initialState,
    reducers:{
        userLogInFunc:(state,action)=>{
            state.user = action.payload 
        },
        userLogOutFunc:(state,action)=>{
            state.user = ''
        }   
    }
});

export const {userLogInFunc,userLogOutFunc} = authSlide.actions

export default authSlide.reducer //store.js de kullanılacak