import axios from 'axios';
import { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Button from '../UI/Button';
import Input from '../UI/Input';
const BookingServices = () => {
  const service = useLoaderData();
  const { user } = useContext(AuthContext);

  const [bookingInfo, setBookingInfo] = useState({
    name: user?.displayName,
    email: user?.email,
    date: '',
    price: service?.price,
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleBookingServices = (e) => {
    e.preventDefault();
    const { name, email, date, price } = bookingInfo;
    const bookingOrder = { name, email, date, price, img: service.img };

    axios
      .post(`http://localhost:5000/booking`, bookingOrder)
      .then((res) => console.log(res.data));
  };

  return (
    <div className='max-w-screen-xl mx-auto px-4'>
      <h1 className='text-4xl font-bold text-center'>
        Book Services : {service.title}
      </h1>
      <form className='my-10' onSubmit={handleBookingServices}>
        <div className='flex flex-col md:flex-row gap-5'>
          <Input
            displayName={'Name'}
            id={'name'}
            type='text'
            name='name'
            value={bookingInfo.name}
            onChange={handleInputChange}
          />
          <Input
            displayName={'Date'}
            id={'date'}
            type='date'
            name='date'
            value={bookingInfo.date}
            onChange={handleInputChange}
          />
        </div>
        <div className='flex flex-col md:flex-row gap-5'>
          <Input
            displayName={'Email'}
            id={'email'}
            type='email'
            name='email'
            value={bookingInfo.email}
            onChange={handleInputChange}
            readOnly
          />
          <Input
            displayName={'Price'}
            id={'price'}
            type='number'
            name='price'
            value={bookingInfo.price}
            onChange={handleInputChange}
            readOnly
          />
        </div>
        <Button
          type='submit'
          displayName={'Confirm Order'}
          style={{
            width: '100%',
            background: 'blue',
            borderColor: 'blue',
            color: 'white',
          }}
        />
      </form>
    </div>
  );
};

export default BookingServices;
