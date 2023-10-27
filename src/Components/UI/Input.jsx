import PropTypes from 'prop-types';

const Input = ({ id, displayName, ...rest }) => {
  return (
    <div className='w-full mb-5'>
      <label htmlFor={id} className='text-xl font-medium text-[#444444]'>
        {displayName}
      </label>
      <div className='mt-2'>
        <input
          {...rest}
          id={id}
          className='w-full outline-none border rounded-md p-2'
        />
      </div>
    </div>
  );
};
Input.propTypes = {
  id: PropTypes.string,
  displayName: PropTypes.string,
};
export default Input;
