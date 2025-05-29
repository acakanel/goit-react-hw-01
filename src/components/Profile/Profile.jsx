import s from './Profile.module.css';

const Profile = ({ name, tag, location, image, stats }) => (
    <div className={s.container}>
        <div className={s.description}>
            <img className={s.avatar}
                src={image}
                alt="User avatar" />
            <p className={s.name}>{name}</p>
            <p className={s.tag}>@{tag}</p>
            <p className={s.location}>{location}</p>
        </div>

        <ul className={s.stats}>
            <li className={s.item}>
                <span className={s.label}>Followers</span>
                <span className={s.quantity}>{stats.followers}</span>
            </li>
            <li className={s.item}>
                <span className={s.label}>Views</span>
                <span className={s.quantity}>{stats.views}</span>
            </li>
            <li className={s.item}>
                <span className={s.label}>Likes</span>
                <span className={s.quantity}>{stats.likes}</span>
            </li>
        </ul>
    </div>
)

export default Profile;