import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import loginImg from '../../assets/images/login/login.svg';
import Button from '../UI/Button';
import Input from '../UI/Input';
const Login = () => {
  return (
    <div className='max-w-screen-xl mx-auto'>
      <div className='flex justify-between items-center my-10'>
        <div className='w-full md:w-1/2 hidden md:block'>
          <img src={loginImg} alt='' />
        </div>
        {/* form  */}
        <div className='w-full md:w-1/2 border rounded-lg p-10'>
          <h1 className='text-4xl font-bold text-[#444444] text-center'>
            Login
          </h1>
          <form>
            <Input
              displayName={'Email'}
              id={'email'}
              placeholder={'example@gmail.com'}
            />
            <Input
              displayName={'Password'}
              id={'password'}
              placeholder={'gljgloY(*&R('}
            />
            <Button
              displayName={'Login'}
              style={{
                display: 'block',
                width: '100%',
                fontSize: '1.3rem',
                padding: '1rem',
                background: '#FF3811',
                color: 'white',
              }}
            />
          </form>
          <p className='text-lg text-[#444444] font-semibold text-center my-5'>
            Or sign in with
          </p>
          <div className='flex justify-center'>
            <button className='flex items-center gap-3 py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-[#FF3811] focus:outline-none bg-white rounded-full border border-[#FF3811] active:scale-105 transition'>
              <FcGoogle className='text-2xl' />
              Login with google
            </button>
          </div>
          <p className='text-lg text-[#444444] font-semibold text-center my-5'>
            Don&apos;t have an account.{' '}
            <Link className='text-[#FF3811]'>Signup</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
