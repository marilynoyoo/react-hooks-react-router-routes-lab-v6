import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Movie from './pages/Movie';
import Directors from './pages/Directors';
import Actors from './pages/Actors';
import ErrorPage from './pages/ErrorPage';
import NavBar from './components/NavBar';

// Define a Layout component to wrap content with the NavBar
const Layout = ({ children }) => (
  <>
    <NavBar />
    {children}
  </>
);

const routes = [
  {
    path: '/',
    element: <Layout><Home /></Layout>,
    errorElement: <ErrorPage />,
  },
  {
    path: '/directors',
    element: <Layout><Directors /></Layout>,
    errorElement: <ErrorPage />,
  },
  {
    path: '/actors',
    element: <Layout><Actors /></Layout>,
    errorElement: <ErrorPage />,
  },
  {
    path: '/movie/:id',
    element: <Layout><Movie /></Layout>,
    errorElement: <ErrorPage />,
  },
];

export default routes;
