import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  newsArr: [],
  loading: true,
};

const API_KEY = "02d142c50d8b4247b974b25323435174";

export const getNews = createAsyncThunk("news/getNews", async () => {
  const url = `https://newsapi.org/v2/top-headlines?country=tr&apiKey=${API_KEY}`;
  try {
    const { data } = await axios(url);
    return data.articles;
  } catch (error) {
    alert(error);
  }
});

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    temizleNewsArrFunc: (state) => {
      state.newsArr = [];
    },
  },
  extraReducer: {
    [getNews.pending]: (state, action) => {
      state.loading = true;
    },
    [getNews.fulfilled]: (state, action) => {
      state.loading = false;
      state.newsArr = action.payload;
    },
    [getNews.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export const { temizleNewsArrFunc } = newsSlice.actions;

export default newsSlice.reducer; //store.js de kullanılacak



 