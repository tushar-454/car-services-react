import { createBrowserRouter } from 'react-router-dom';
import Home from '../Components/Home/Home';
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
    ],
  },
]);

export default routes;
