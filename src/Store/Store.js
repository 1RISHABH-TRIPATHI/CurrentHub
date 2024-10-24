import { configureStore } from "@reduxjs/toolkit";
import NewsDataGroup from "./NewsDataGroup";
import LanguageGroup from "./LanguageSlice";
import  CountryGroup  from "./CountrySlice"
import { API } from "./LatestNewsApiSlice";

const Store=configureStore({
     reducer:{
          Group:NewsDataGroup,
          Language:LanguageGroup,
          Country:CountryGroup,
          [API.reducerPath]:API.reducer,
     },
     middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(API.middleware)
});



export default Store;