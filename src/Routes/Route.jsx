import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Layout/Mainlayout/Mainlayout";
import CheckOut from "../Pages/CheckOut/CheckOut";
import Home from "../Pages/Home/Home";
import ServiceDetails from "../Pages/Home/Services/ServiceDetails";
import Login from "../Pages/Login/Login";
import Orders from "../Pages/Orders/Orders";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/details/:id",
        element: <ServiceDetails></ServiceDetails>,
      },
      {
        path: "/checkOut/:id",
        element: <CheckOut></CheckOut>,
      },
      {
        path: "/orders",
        element: (
          <PrivateRoute>
            <Orders></Orders>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default Route;
