import { Outlet } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';

const Layout = () => {
  return (
    <>
      <div>
        <Header />
      </div>
      <div className='px-4'>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
