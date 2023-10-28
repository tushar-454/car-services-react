import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import logo from '../../assets/logo.svg';
import Button from '../UI/Button';
import Navbar from './Navbar/Navbar';
const Header = () => {
  const { user, signoutFunc } = useContext(AuthContext);
  return (
    <div className='max-w-screen-xl mx-auto px-4'>
      <div className='flex justify-between items-center py-4'>
        <Link to={'/'}>
          {' '}
          <img src={logo} className='w-20' />
        </Link>
        <Navbar />
        {user ? (
          <div className='flex gap-3'>
            <img src={user?.photoURL} className='w-12 h-12 rounded-full' />
            <Button
              displayName={'Signout'}
              onClick={() => signoutFunc()}
              type={'button'}
            />
          </div>
        ) : (
          <Link to={'/login'}>
            <Button displayName={'Login'} />
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
