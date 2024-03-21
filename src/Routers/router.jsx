import { createBrowserRouter } from "react-router-dom";
import About from "../Components/About/About";
import Contact from "../Components/Contact/Contact";
import Home from "../Components/Home/Home";
import Users from "../Components/Users/Users";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
      children: [
        {
          path: "/about",
          element: <About></About>,
        },
        {
          path: "/contact",
          element: <Contact></Contact>,
        },
        {
          path: "Users",
          element: <Users />,
          loader: ()=>fetch('https://jsonplaceholder.typicode.com/users')
        }
      ],
    },
  ]);