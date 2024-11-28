import React,{useContext} from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { ThemeContext } from './components/ThemeContext';


function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Router>
      <div className={theme === 'light' ? 'light-theme' : 'dark-theme'}>
      <button onClick={toggleTheme} style={{ margin: '20px' }}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
      </button>
      <div className="app-container">
        <nav>
          <ul>
            <li>
              <Link to="/">Login</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
      </div>

    </Router>
  );
}

export default App;
