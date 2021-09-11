import { useContext } from 'react';
import UserContext from '../context/UserContext';

function authConfig() {
  const { user } = useContext(UserContext);
  return {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  };
}
export default authConfig;
