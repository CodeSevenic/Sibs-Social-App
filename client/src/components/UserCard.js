import React from 'react';
import Avatar from './Avatar';

const UserCard = ({ user, border }) => {
  return (
    <div className={`d-flex p-2 align-item-center ${border}`}>
      <Avatar src={user.avatar} alt={user.name} size={'big-avatar'} />
      <div className="ml-1">
        <span className="d-block">{user.username}</span>
        <small style={{ opacity: 0.7 }}>{user.fullname}</small>
      </div>
    </div>
  );
};

export default UserCard;
