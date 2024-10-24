import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const APII= createApi({
     baseQuery:fetchBaseQuery({baseUrl:'https://restcountries.com/v3.1/all'}),
     endpoints:(builder)=>({
          getTasksAAData:builder.query({
               query:() => ""
          }),

     }),
});

export const {mm}=APII;
