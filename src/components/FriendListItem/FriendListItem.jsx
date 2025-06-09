import css from '../FriendList/FriendList.module.css'

const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <li className={css.friendItem} key={id}>
      <img src={avatar} alt="Avatar" width="84" />
      <p className={css.friendName}>{name}</p>
      <p className={`${isOnline ? css.online : css.offline}`}>
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </li>
  );
};

export default FriendListItem;