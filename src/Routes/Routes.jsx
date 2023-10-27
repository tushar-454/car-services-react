import { createBrowserRouter } from 'react-router-dom';
import Home from '../Components/Home/Home';
import Login from '../Components/Login/Login';
import Layout from './Layout/Layout';

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
        element: <Login />,
      },
    ],
  },
]);

export default routes;
