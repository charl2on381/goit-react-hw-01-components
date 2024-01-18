import pcss from './Profile.module.css';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={pcss.profile}>
      <div className={pcss.description}>
        <img src={avatar} alt={username} className={pcss.avatar} />
        <p className={pcss.name}>{username}</p>
        <p className={pcss.tag}>@{tag}</p>
        <p className={pcss.location}>{location}</p>
      </div>
      <ul className={pcss.list}>
        <li className={pcss.item}>
          <span className={pcss.label}>Followers</span>
          <span className={pcss.quantity}>{stats.followers}</span>
        </li>
        <li className={pcss.item}>
          <span className={pcss.label}>Views</span>
          <span className={pcss.quantity}>{stats.views}</span>
        </li>
        <li className={pcss.item}>
          <span className={pcss.label}>Likes</span>
          <span className={pcss.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};


