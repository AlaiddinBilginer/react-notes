import React from 'react';

function User({ user }) {
  return (
    <div>
      <h1>{user.name}</h1>
      <h3>Email: {user.email}</h3>
    </div>
  );
}

export default User;
