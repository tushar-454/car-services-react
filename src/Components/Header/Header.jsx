import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import Button from '../UI/Button';
import Navbar from './Navbar/Navbar';
const Header = () => {
  return (
    <div className='max-w-screen-xl mx-auto'>
      <div className='flex justify-between items-center py-4'>
        <Link to={'/'}>
          {' '}
          <img src={logo} className='w-20' />
        </Link>
        <Navbar />
        <Link to={'/login'}>
          <Button displayName={'Login'} />
        </Link>
      </div>
    </div>
  );
};

export default Header;
