import PropTypes from 'prop-types';
const Button = ({ displayName, style, ...rest }) => {
  return (
    <button
      {...rest}
      style={style}
      className='py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-[#FF3811] focus:outline-none bg-white rounded-lg border border-[#FF3811] active:scale-105 transition'
    >
      {displayName}
    </button>
  );
};
Button.propTypes = {
  displayName: PropTypes.string,
  rest: PropTypes.any,
  style: PropTypes.object,
};
export default Button;
