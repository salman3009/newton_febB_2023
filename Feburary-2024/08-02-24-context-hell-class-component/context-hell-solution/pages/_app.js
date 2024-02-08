// App.js
import React from 'react';

import MyComponent from '../components/MyComponent';
import ConfigProvider from '../contexts/ConfigContext';
import LanguageProvider from '../contexts/LanguageContext';
import ThemeProvider from '../contexts/ThemeContext';
import UserContext from '../contexts/UserContext';

function App() {
  return (
    <ConfigProvider>
      <LanguageProvider>
        <ThemeProvider>
          <UserContext>
            <MyComponent />
          </UserContext>
        </ThemeProvider>
      </LanguageProvider>
    </ConfigProvider>

  );
}

export default App;
