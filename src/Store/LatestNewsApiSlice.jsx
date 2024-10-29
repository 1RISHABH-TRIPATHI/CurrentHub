import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const API = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "https://newsdata.io/api/1/" }),
  endpoints: (builder) => ({
    getTasks: builder.query({
      query: ({ page, lang, country, Category, Priority }) => {
        
        let url = `latest?apikey=pub_53510d0f2b001d47290025f4967c278994445`;
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
        url: `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=7ce0179279dc4b33af4a63052049287f&pageSize=100&language=${lang}`,
        method: "GET",
      }),
    }),
    getEveryNews:builder.query({
      query:({lang,page,search})=>({
        url:`https://newsapi.org/v2/everything?q=${search ? search :'a'}&apiKey=7ce0179279dc4b33af4a63052049287f&pageSize=50&languge=${lang}&page=${page}`,
        method:'GET'
      })
    })
  }),
});

export const { useGetTasksQuery,useGetTopHeadingQuery ,useGetEveryNewsQuery} = API;
