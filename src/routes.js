// routes.js
import Home from "./pages/Home";
import Directors from "./pages/Directors";
import Actors from "./pages/Actors";
import Movie from "./pages/Movie";
import ErrorPage from "./pages/ErrorPage"; // Import ErrorPage for handling errors

const routes = [
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />, // Error handling for invalid routes
  },
  {
    path: "/directors",
    element: <Directors />,
  },
  {
    path: "/actors",
    element: <Actors />,
  },
  {
    path: "/movie/:id", // Dynamic route for movie details
    element: <Movie />,
  },
];

export default routes;
