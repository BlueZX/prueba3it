import React from 'react';
import ThemeManager from './Themes';
import AppNavigation from './Navigation';

const App = () => {
  return (
    <ThemeManager>
      <AppNavigation />
    </ThemeManager>
  );
};

export default App;
