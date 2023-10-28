import PropTypes from 'prop-types';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const PublicRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  console.log(useLocation());
  if (loading) <p>Loading...</p>;
  if (user) {
    return <Navigate to={'/'} />;
  }
  return children;
};

PublicRoutes.propTypes = {
  children: PropTypes.node,
};

export default PublicRoutes;
