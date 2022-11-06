import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  newsArr: [],
};

const newsSlide = createSlice({
  name: "news",
  initialState,
    reducers:{

    }
});

export default newsSlide.reducer  //store.js de kullanılacak