import React from 'react';

import './User.css';

const User = ({ userDetail }) => {
	console.log(userDetail);
	if(!userDetail) return <div> No information of the user. </div>;
    const { name, email, picture } = userDetail;
    
    return (
      <li className='userCard'>
        <img className='img'
          src={picture.thumbnail || picture.medium || picture.large}
          alt="profile of the user"
        />
        <div className='infoWrapper'>
          <p className='name'>{name.first} {name.last}</p>
          <p className='email'>{email}</p>
        </div>
      </li>
    );
};

export default User;

