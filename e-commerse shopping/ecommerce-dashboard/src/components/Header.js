import React from 'react';
import { useSelector } from 'react-redux';

const Header = () => {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode); 

  return (
    <div
      className={`p-4 shadow-md flex justify-between items-center ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}
    >
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <input
        type="text"
        placeholder="Search..."
        className={`border px-4 py-2 rounded-lg shadow-sm focus:outline-none ${
          isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-black'
        }`}
      />
    </div>
  );
};

export default Header;

// import React from 'react';
// import { useTheme } from '../features/contexts/ThemeContext';
// import { IconButton, InputBase, Paper } from '@mui/material';
// import { Brightness4, Brightness7, Search } from '@mui/icons-material';

// const Header = () => {
//   const { theme, toggleTheme } = useTheme();

//   return (
//     <div className="flex items-center justify-between px-4 py-3 bg-white dark:bg-gray-800 shadow-md">
//       {/* Logo */}
//       <h1 className="text-2xl font-bold text-black dark:text-white">E-Shop</h1>

//       {/* Theme Toggle and Search Bar */}
//       <div className="flex items-center space-x-4">
//         {/* Theme Toggle Icon */}
//         <IconButton onClick={toggleTheme} color="inherit">
//           {theme === 'dark' ? <Brightness7 /> : <Brightness4 />}
//         </IconButton>

//         {/* Search Bar */}
//         <Paper
//           component="form"
//           sx={{
//             display: 'flex',
//             alignItems: 'center',
//             width: 300,
//             borderRadius: '25px',
//             padding: '2px 8px',
//             backgroundColor: 'white',
//           }}
//           elevation={2}
//         >
//           <Search sx={{ color: 'gray' }} />
//           <InputBase
//             sx={{ ml: 1, flex: 1 }}
//             placeholder="Search Products"
//             inputProps={{ 'aria-label': 'search products' }}
//           />
//         </Paper>
//       </div>
//     </div>
//   );
// };

// export default Header;
