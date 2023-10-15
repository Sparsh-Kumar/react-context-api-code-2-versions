import { useContext } from 'react';
import UserContext from '../context/UserContext';

function Profile(): JSX.Element {
  const { user } = useContext(UserContext);
  return (
    <div>
      {
        !user ? (
          <div>
            please login
          </div>
        ) : (
          <div>
            Welcome {user?.username}
          </div>
        )
      }
    </div>
  )
};

export default Profile;
