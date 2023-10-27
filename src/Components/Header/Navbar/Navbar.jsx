import { Link } from 'react-router-dom';
const navItems = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'About',
    path: '/about',
  },
  {
    name: 'Service',
    path: '/service',
  },
  {
    name: 'Blog',
    path: '/blog',
  },
  {
    name: 'Contact',
    path: '/contact',
  },
  {
    name: 'Bookings',
    path: '/bookings',
  },
];
const Navbar = () => {
  return (
    <div className='flex justify-center items-center gap-8'>
      {navItems.map((item, index) => (
        <Link
          key={index}
          to={item.path}
          className='text-gray-800 font-bold text-lg'
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
