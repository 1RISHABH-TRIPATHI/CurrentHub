import { createSlice } from "@reduxjs/toolkit";

const CountryGroup=createSlice({
     name:'Country',
     initialState:{
          loading:false,
          list:[],
          errorMessage:'',
          countryCode:'all',
          countryId:0
     },
     reducers:{
          fetchLoadingCountry(state){
               state.loading=true;
          },
          uploadAllCountryData(state,action){
               state.loading=false;
               state.list=action.payload;
          },
          fetchErrorCountry(state){
               state.loading=false; 
               state.errorMessage='Something went wrong'
          },
          setCountry(state,action){
               state.countryCode=action.payload;
          },
          setCountryId(state,action){
               state.countryId=action.payload;
          }
     }
});
export const {fetchErrorCountry,fetchLoadingCountry,setCountry,uploadAllCountryData,setCountryId}=CountryGroup.actions;
export default CountryGroup.reducer;