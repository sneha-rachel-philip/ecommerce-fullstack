import React, { useEffect, useState } from 'react';
import { getUserProfile } from '../services/api';

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUserProfile().then(setUser).catch(console.error);
  }, []);

  return user ? <h2>Welcome, {user.name}</h2> : <p>Loading...</p>;
};

export default Profile;
