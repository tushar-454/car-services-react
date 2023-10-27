import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { ImCross } from 'react-icons/im';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Button from '../UI/Button';
const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/booking?email=${user.email}`)
      .then((res) => setBookings(res.data));
  }, [user]);

  const handleBookingDelete = (id) => {
    axios.delete(`http://localhost:5000/booking/${id}`).then((res) => {
      console.log(res.data);
      const remaning = bookings.filter((book) => book._id !== id);
      setBookings(remaning);
    });
  };

  return (
    <div className='max-w-screen-xl mx-auto px-4'>
      <h1 className='text-4xl font-bold text-center'>My bookings</h1>
      <div className='overflow-x-auto'>
        <table className='table-auto w-full my-20 border-2'>
          {/* head */}
          <thead>
            <tr>
              <th>Delete</th>
              <th>Image</th>
              <th>Date</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((book, index) => (
              <tr
                key={index}
                className={`border ${
                  parseInt(index + 1) % 2 !== 0 && 'bg-slate-50'
                }`}
              >
                <td className=''>
                  <ImCross
                    className='text-2xl cursor-pointer'
                    onClick={() => handleBookingDelete(book._id)}
                  />
                </td>
                <td className=''>
                  <img src={book.img} className='w-32' />
                </td>
                <td className='text-center'>
                  <p>{book.date}</p>
                </td>
                <td className='text-center'>
                  <p>{book.price}</p>
                </td>
                <th className='text-center'>
                  <Button
                    displayName={'Pending'}
                    style={{ background: '#FF3811', color: '#FFF' }}
                  />
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
