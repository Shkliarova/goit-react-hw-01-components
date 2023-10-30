import user from '../user.json' 
import { Profile } from './Profile';

export const App = () => {
  return (
    <Profile user={user} />
  );
};
