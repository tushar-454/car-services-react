import PropTypes from 'prop-types';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const PublicRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
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
