import React from "react";
import {  createHashRouter, RouterProvider } from "react-router-dom";
import Navbar from "./Navbar_Based/Navbar";
import Category from "./Category";
import HomePage from "./Navbar_Based/HomePage";
import News_Grid from "./news_Component/News_Grid";
import topNewsGrid from "./news_Component/topNewsGrid";
import EveryNewsGrid from "./news_Component/EveryNewsGrid";
import NotFoundPage from "./Errror_Page/notFoundPage";
function ConTrol_Pathwith_Com() {
  const router = createHashRouter([
    {
      path: "/",
      Component: Navbar,
      children: [
        {
          path: "",
          Component: HomePage,
        },
        {
          path: "Category",
          Component: Category,
        },
        {
          path: "News",
          Component: News_Grid,
        },
        {
          path: "Headline",
          Component: topNewsGrid,
        },
        {
          path:'every',
          Component:EveryNewsGrid
        },
        {
          path:'*',
          Component:NotFoundPage
        }
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default ConTrol_Pathwith_Com;
