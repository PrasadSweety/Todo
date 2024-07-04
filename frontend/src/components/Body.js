import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import AllTasks from "./AllTasks";
import Form from "./Form";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Form />,
  },
  {
    path: "/tasks",
    element: <AllTasks />,
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);

const Body = () => {
  return <RouterProvider router={router} />;
};

export default Body;
