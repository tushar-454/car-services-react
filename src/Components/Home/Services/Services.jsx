import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../UI/Button';
import SectionHead from '../../UI/SectionHead';

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:5000/services')
      .then((res) => setServices(res.data));
  }, []);
  return (
    <div>
      <SectionHead
        topTitle={'Services'}
        title={'Our Service Area'}
        subTitle={
          'the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. '
        }
      />
      <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {services?.map((service, index) => (
          <div
            key={index}
            className='flex flex-col gap-3 border rounded-lg p-5 '
          >
            <div className='w-full h-64'>
              <img
                src={service.img}
                className='w-full h-full object-cover rounded-lg'
              />
            </div>
            <h1 className='text-2xl font-bold text-[#444444]'>
              {service.title}
            </h1>
            <div className='flex justify-between items-center'>
              <p className='text-lg font-medium text-[#FF3811]'>
                Price: ${service.price}
              </p>
              <span className='text-[#FF3811] text-2xl cursor-pointer'>
                <Link to={`services/${service._id}`}>
                  <Button displayName={'Booking'} />
                </Link>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
