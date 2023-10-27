import { useEffect, useState } from 'react';
import sliderOneImg from '../../../assets/images/banner/1.jpg';
import sliderTwoImg from '../../../assets/images/banner/2.jpg';
import sliderThreeImg from '../../../assets/images/banner/3.jpg';
import sliderFourImg from '../../../assets/images/banner/4.jpg';
import sliderFiveImg from '../../../assets/images/banner/5.jpg';
import sliderSixImg from '../../../assets/images/banner/6.jpg';
import Button from '../../UI/Button';
const Slider = () => {
  const [counter, setCounter] = useState(0);
  const [slideLength, setSlideLength] = useState(0);
  const nextSlide = () => {
    if (counter >= slideLength - 1) {
      setCounter(0);
    } else {
      setCounter((prevCount) => prevCount + 1);
    }
  };
  const prevSlide = () => {
    if (counter <= 0) {
      setCounter(slideLength - 1);
    } else {
      setCounter((prevCount) => prevCount - 1);
    }
  };
  useEffect(() => {
    const slides = document.querySelectorAll('.slider');
    setSlideLength(slides.length);
    slides.forEach((slide, index) => {
      slide.style.left = `${index * 100}%`;
    });
    slides.forEach((slide) => {
      slide.style.transform = `translate(-${counter * 100}%)`;
    });
  }, [counter]);
  return (
    <div className='max-w-screen-xl mx-auto'>
      <div className='sliderWrap w-full relative'>
        <div className='w-full h-[650px] relative overflow-hidden'>
          {/* slider - 1  */}
          <div className='slider w-full h-full absolute transition ease-custom duration-500 rounded-lg'>
            <img src={sliderOneImg} className='w-full h-full rounded-lg' />
            {/* slider content 1  */}
            <div className='content bg-gradient-to-r from-[#000000] to-[#00000000] w-full h-full absolute top-0 space-y-4'>
              <div className='h-full ml-10 gap-4 flex flex-col justify-center items-start'>
                <h1 className='text-5xl font-boldss text-white w-1/4'>
                  Affordable Price For Car Servicing
                </h1>
                <p className='text-lg text-white w-1/2'>
                  There are many variations of passages of available, but the
                  majority have suffered alteration in some form
                </p>
                <div className='flex gap-4'>
                  <Button
                    displayName={'Discover More'}
                    style={{ background: '#FF3811', color: '#FFF' }}
                  />
                  <Button
                    displayName={'Latest Project'}
                    style={{
                      background: '#FFFFFF30',
                      color: '#FFF',
                      borderColor: '#FFF',
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* slider - 2  */}
          <div className='slider w-full h-full absolute transition ease-custom duration-500 rounded-lg'>
            <img src={sliderTwoImg} className='w-full h-full rounded-lg' />
            <div className='content bg-gradient-to-r from-[#000000] to-[#00000000] w-full h-full absolute top-0 space-y-4'>
              <div className='h-full ml-10 gap-4 flex flex-col justify-center items-start'>
                <h1 className='text-5xl font-boldss text-white w-1/4'>
                  Affordable Price For Car Servicing
                </h1>
                <p className='text-lg text-white w-1/2'>
                  There are many variations of passages of available, but the
                  majority have suffered alteration in some form
                </p>
                <div className='flex gap-4'>
                  <Button
                    displayName={'Discover More'}
                    style={{ background: '#FF3811', color: '#FFF' }}
                  />
                  <Button
                    displayName={'Latest Project'}
                    style={{
                      background: '#FFFFFF30',
                      color: '#FFF',
                      borderColor: '#FFF',
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* slider - 3  */}
          <div className='slider w-full h-full absolute transition ease-custom duration-500 rounded-lg'>
            <img src={sliderThreeImg} className='w-full h-full rounded-lg' />
            <div className='content bg-gradient-to-r from-[#000000] to-[#00000000] w-full h-full absolute top-0 space-y-4'>
              <div className='h-full ml-10 gap-4 flex flex-col justify-center items-start'>
                <h1 className='text-5xl font-boldss text-white w-1/4'>
                  Affordable Price For Car Servicing
                </h1>
                <p className='text-lg text-white w-1/2'>
                  There are many variations of passages of available, but the
                  majority have suffered alteration in some form
                </p>
                <div className='flex gap-4'>
                  <Button
                    displayName={'Discover More'}
                    style={{ background: '#FF3811', color: '#FFF' }}
                  />
                  <Button
                    displayName={'Latest Project'}
                    style={{
                      background: '#FFFFFF30',
                      color: '#FFF',
                      borderColor: '#FFF',
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* slider - 4  */}
          <div className='slider w-full h-full absolute transition ease-custom duration-500 rounded-lg'>
            <img src={sliderFourImg} className='w-full h-full rounded-lg' />
          </div>
          {/* slider - 5  */}
          <div className='slider w-full h-full absolute transition ease-custom duration-500 rounded-lg'>
            <img src={sliderFiveImg} className='w-full h-full rounded-lg' />
          </div>
          {/* slider - 6  */}
          <div className='slider w-full h-full absolute transition ease-custom duration-500 rounded-lg'>
            <img src={sliderSixImg} className='w-full h-full rounded-lg' />
          </div>
        </div>
        <div className='absolute bottom-6 right-6'>
          <button
            onClick={prevSlide}
            className='text-white text-xl bg-gray-700/70 w-16 h-16 border-gray-800 rounded-full mr-3 transition hover:bg-[#FF3811]'
          >
            Prev
          </button>
          <button
            onClick={nextSlide}
            className='text-white text-xl bg-gray-700/70 w-16 h-16 border-gray-800 rounded-full transition hover:bg-[#FF3811]'
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
