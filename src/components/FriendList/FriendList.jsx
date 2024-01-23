import s from './FriendList.module.css';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <div className={s.container}>
      <ul className={s.list}>
        {friends.map(elem => (
          <FriendListItem {...elem} key={elem.id} />
        ))}
      </ul>
    </div>
  );
};
