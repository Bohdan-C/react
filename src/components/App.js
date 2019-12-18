import React from 'react';

import './App.css';
import Profile from './profile/Profile';
import Statistics from './statistics/Statistics';

function App({ user, statistics }) {
  return (
    <div>
      <Profile user={user} />
      <Statistics title="File upload" statistics={statistics} />
    </div>
  );
}

export default App;
