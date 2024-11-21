import React, { useContext, useState } from 'react';

const ThemeContext = React.createContext();

function UseContext() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={theme}>
      <div style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff' }}>
        <h1>{theme} Theme</h1>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <ChildComponent />
      </div>
    </ThemeContext.Provider>
  );
}

function ChildComponent() {
  const theme = useContext(ThemeContext);
  return <p>Current theme in child: {theme}</p>;
}

export default UseContext;


