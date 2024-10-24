import { createSlice } from "@reduxjs/toolkit";
import Category from "../Component/Category";
import { act } from "react";
const NewsDataGroup = createSlice({
  name: "Group",
  initialState: {
    loading: false,
    list: [],
    errorMessage: "",
    Category:'all'
  },
  reducers: {
    fetchLoading(state) {
      state.loading = true;
    },
    AddAllGroup(state,action) {
      state.loading = false;
      state.list =action.payload ;
    },
    FetchError(state) {
      state.loading = false;
      state.errorMessage = "Something went wrong !";
    },
    setCategory(state,action){
        state.Category=action.payload;
    }
  },
});

export const {  AddAllGroup ,fetchLoading ,FetchError ,setCategory} =NewsDataGroup.actions;
export default NewsDataGroup.reducer;
