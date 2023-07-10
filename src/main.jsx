import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./layout/Main";
import Login from "./Components/Login/Login";
import Registration from "./Components/Registration/Registration";
import AuthProvider from "./Provider/AuthProvider";
import Home from "./Components/Home/Home";
import CreateCommunity from "./Components/CreateCommunity/CreateCommunity";
import PrivateRoute from "./Route/PrivateRoute";
import Dashboard from "./layout/Dashboard";
import DashMain from "./Components/Dashboard/DashMain";
import JoinCommunities from "./Components/Dashboard/JoinCommunities";
import ManageMembers from "./Components/Dashboard/ManageMembers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Registration></Registration>,
      },
      {
        path: "/posts",
        element: (
          <PrivateRoute>
            <Home></Home>
          </PrivateRoute>
        ),
      },
      {
        path: "/createCommunity",
        element: (
          <PrivateRoute>
            <CreateCommunity></CreateCommunity>
          </PrivateRoute>
        ),
        loader: () => fetch('https://ovigo-job-task-server.vercel.app/users')
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <DashMain></DashMain>,
      },
      {
        path: "/dashboard/joinCommunities",
        element: <JoinCommunities></JoinCommunities>,
      },
      {
        path: "/dashboard/manageMembers",
        element: <ManageMembers></ManageMembers>,
        loader: () => fetch('https://ovigo-job-task-server.vercel.app/users')
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
