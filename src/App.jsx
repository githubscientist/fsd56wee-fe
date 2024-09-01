import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeNav from "./wrappers/HomeNav";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./pages/Home";
import UserDashboardNav from "./wrappers/UserDashboardNav";
import userLoader from "./loaders/userLoader";
import Logout from "./components/Logout";
import Books from "./components/Books";
import booksLoader from "./loaders/booksLoader";
import Book from "./components/Book";
import bookLoader from "./loaders/bookLoader";
import Reviews from "./components/Reviews";
import reviewsLoader from "./loaders/reviewsLoader";
import CreateReview from "./components/CreateReview";

// create a router object
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeNav />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "register",
        element: <Register />
      },
      {
        path: "login",
        element: <Login />,
        loader: userLoader
      }
    ]
  },
  {
    path: "dashboard",
    element: <UserDashboardNav />,
    loader: userLoader,
    children: [
      {
        path: "",
        element: <Books />,
        loader: booksLoader
      },
      {
        path: "books/:id",
        element: <Book />,
        loader: bookLoader,
        children: [
          {
            path: "",
            element: <Reviews />,
            loader: reviewsLoader
          },
          {
            path: "reviews/new",
            element: <CreateReview />
          }
        ]
      }
    ]
  },
  {
    path: "logout",
    element: <Logout />
  }
]);

const App = () => {
  return <RouterProvider router={router} />;
}

export default App;