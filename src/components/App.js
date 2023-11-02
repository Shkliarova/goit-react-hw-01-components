import user from '../user.json' 
import data from '../data.json'
import friends from '../friends.json'
import transactions from '../transactions.json'
import { Profile } from './Profile';
import { Statistics } from './Statistics';
import { FriendList } from './FriendList';
import { TransactionHistory } from './TransactionHistory';


export const App = () => {
  return (
    <div>
      <Profile user={user} />
      <Statistics title="Upload stats" stats = {data}/>
      <FriendList friends={friends}/>
      <TransactionHistory items={transactions}/>
    </div>
  );
};
