import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./Navbar_Based/Navbar";
import Category from "./Category";
import HomePage from "./Navbar_Based/HomePage";
import News_Grid from "./news_Component/News_Grid";
import topNewsGrid from "./news_Component/topNewsGrid";
import EveryNewsGrid from "./news_Component/EveryNewsGrid";

function ConTrol_Pathwith_Com() {
  const router = createBrowserRouter([
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
