// App.js
import React from 'react';

import MyComponent from '../components/MyComponent';
import ConfigProvider from '../contexts/ConfigContext';
import LanguageProvider from '../contexts/LanguageContext';
import ThemeProvider from '../contexts/ThemeContext';
import UserProvider from '../contexts/UserContext';

function App() {
  return (
    <ConfigProvider>
      <LanguageProvider>
        <ThemeProvider>
          <UserProvider>
            <MyComponent />
          </UserProvider>
        </ThemeProvider>
      </LanguageProvider>
    </ConfigProvider>

  );
}

export default App;
