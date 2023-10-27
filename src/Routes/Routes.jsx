import { createBrowserRouter } from 'react-router-dom';
import BookingServices from '../Components/BookingServices/BookingServices';
import Home from '../Components/Home/Home';
import Login from '../Components/Login/Login';
import Layout from './Layout/Layout';
import PublicRoutes from './Private/PublicRoutes';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/login',
        element: (
          <PublicRoutes>
            <Login />
          </PublicRoutes>
        ),
      },
      {
        path: '/services/:id',
        element: <BookingServices />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
    ],
  },
]);

export default routes;
