import { createBrowserRouter } from "react-router";
import MainLayout from "../Pages/MainLayout/MainLayout";
import Home from "../Components/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index:true,
        element: <Home></Home>
      }
    ]
  },
]);
