import { useContext } from 'react';
import UserContext from '../context/UserContext';

function useAuthConfig() {
  const { user } = useContext(UserContext);
  return {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  };
}
export default useAuthConfig;
