import { createBrowserRouter } from "react-router";
import MainLayout from "../Pages/MainLayout/MainLayout";
import Home from "../components/Home/Home";
import ProjectDetails from "../components/ProjectDetails/ProjectDetails";

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
