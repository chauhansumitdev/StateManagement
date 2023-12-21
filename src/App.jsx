// App.js
import React from 'react';
import ThemeContext, { ThemeProvider } from './ThemeContext';
import ThemedComponent from './ThemedComponent';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <h1>Theme Demo</h1>
        <ThemedComponent />
      </div>
    </ThemeProvider>
  );
}

export default App;
