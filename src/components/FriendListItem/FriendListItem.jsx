import clsx from 'clsx';
import s from './FriendListItem.module.css';

const FriendListItem = ({ friend }) => {
    return (
        <li className={s.item}>
            <img
                className={s.avatar}
                src={friend.avatar}
                alt="Avatar"
                width="48"
            />
            <p className={s.name}>{friend.name}</p>
            <p className={clsx(s.status, {
                [s.online]: friend.isOnline,
                [s.offline]: !friend.isOnline,
            })}>
                {friend.isOnline ? 'Online' : 'Offline'}
            </p>
        </li>
    );
};

export default FriendListItem;