import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const API = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "https://newsdata.io/api/1/" }),
  endpoints: (builder) => ({
    getTasks: builder.query({
      query: ({ page, lang, country, Category, Priority }) => {
        const k1= process.env.VITE_API_URL1;
        let url = `latest?apikey=${k1}`;
        if (page) url += `&page=${page}`;
        if (country != "all") url += `&country=${country}`;
        if (lang) url += `&language=${lang}`;
        if (Category != "all") url += `&category=${Category}`;
        if (Priority != "all") url += `&prioritydomain=${Priority}`;
        return url;
      },
    }),
    getTopHeading: builder.query({
      query: ({lang,country}) => ({
        url: `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${process.env.VITE_API_URL2}&pageSize=100&language=${lang}`,
        method: "GET",
      }),
    }),
    getEveryNews:builder.query({
      query:({lang,page,search})=>({
        url:`https://newsapi.org/v2/everything?q=${search ? search :'a'}&apiKey=${process.env.VITE_API_URL2}&pageSize=50&languge=${lang}&page=${page}`,
        method:'GET'
      })
    })
  }),
});

export const { useGetTasksQuery,useGetTopHeadingQuery ,useGetEveryNewsQuery} = API;
