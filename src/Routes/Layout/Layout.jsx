import { Outlet } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';

const Layout = () => {
  return (
    <>
      <div>
        <Header />
      </div>
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
