// MyComponent.js
import React, { useContext } from 'react';
import ThemeContext from '../contexts/ThemeContext';
import LanguageContext from '../contexts/LanguageContext';
import UserContext from '../contexts/UserContext';
import ConfigContext from '../contexts/ConfigContext';

const MyComponent = () => {


  return (
    <div>
      <h1>My Component</h1>
      <p>Current Theme: {theme}</p>
      <p>Current Language: {language}</p>
      <p>User: {user ? user.name : 'Not logged in'}</p>
      <p>Debug Mode: {config.debugMode ? 'Enabled' : 'Disabled'}</p>
    </div>
  );
};

export default MyComponent;
