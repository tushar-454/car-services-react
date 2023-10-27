import logo from '../../assets/logo.svg';
import Button from '../UI/Button';
import Navbar from './Navbar/Navbar';
const Header = () => {
  return (
    <div className='max-w-screen-xl mx-auto'>
      <div className='flex justify-between items-center py-4'>
        <img src={logo} className='w-20' />
        <Navbar />
        <Button displayName={'Login'} />
      </div>
    </div>
  );
};

export default Header;
