import { createSlice } from "@reduxjs/toolkit";

const LanguageGroup= createSlice({
     name:'Language',
     initialState:{
          loading:false,
          list:[],
          errorMessage:"",
          languageCode:'en',
          Priority:'all'
     },
     reducers:{
          fetchLoadingLanguage(state,action){
               state.loading=true;
          },
          uplaodAllLanguageData(state,action){
               state.loading=false;
               state.list=action.payload;
          },
          FetchErrorLanguage(state){
               state.loading=false;
               state.errorMessage='Something went  wrong!'
          },
          setLanguageCode(state,action){
               state.languageCode=action.payload;
          },
          setPriority(state,action){
               state.Priority=action.payload;
          }
     }
});

export const {fetchLoadingLanguage,FetchErrorLanguage,uplaodAllLanguageData,setLanguageCode,setPriority}=LanguageGroup.actions;
export default LanguageGroup.reducer;