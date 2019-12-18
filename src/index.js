import React from 'react';
import ReactDOM from 'react-dom';
import user from './user.json';
import Statistical from './statistical.json';

import App from './components/App';
ReactDOM.render(
  <App user={user} statistics={Statistical} />,
  document.getElementById('root'),
);
