import React from 'react';

const UserProfile = ({ name, age, bio }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', margin: '1rem 0' }}>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Bio: {bio}</p>
    </div>
  );
};

export default UserProfile;
