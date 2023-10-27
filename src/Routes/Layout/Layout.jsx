import { Outlet } from 'react-router-dom';
import Header from '../../Components/Header/Header';

const Layout = () => {
  return (
    <>
      <div>
        <Header />
      </div>
      <Outlet />
    </>
  );
};

export default Layout;
