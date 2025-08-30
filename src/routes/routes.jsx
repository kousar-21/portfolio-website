import { createBrowserRouter } from "react-router";
import MainLayout from "../Pages/MainLayout/MainLayout";
import Home from "../Components/Home/Home";
import ProjectDetails from "../Components/ProjectDetails/ProjectDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index:true,
        element: <Home></Home>
      },
      {
        path:"/projects/:id",
        element: <ProjectDetails></ProjectDetails>
      }
    ]
  },
]);
