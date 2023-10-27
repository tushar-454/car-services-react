import PropTypes from 'prop-types';

const SectionHead = ({ topTitle, title, subTitle }) => {
  return (
    <div className='w-full flex flex-col items-center gap-2 my-10'>
      <p className='text-[#FF3811]'>{topTitle}</p>
      <h1 className='text-4xl font-bold'>{title}</h1>
      <p className='text-gray-500 w-full md:w-[700px] text-center'>
        {subTitle}
      </p>
    </div>
  );
};

SectionHead.propTypes = {
  topTitle: PropTypes.string,
  title: PropTypes.string,
  subTitle: PropTypes.string,
};

export default SectionHead;
