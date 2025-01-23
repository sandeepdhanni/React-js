// import React from 'react';
// import { AppBar, Toolbar, Button, Box } from '@mui/material';

// export default function Navbar() {
//   return (
//     <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
//       <Toolbar sx={{ bgcolor: 'black', borderBottom: '1px solid #e0e0e0' }}>
//         <Box sx={{ display: 'flex', gap: 1 }}>
//         <img src="https://www.amlakfinance.com/wp-content/uploads/2018/10/amlak-logo.svg" style="width: px; height: px;" alt="Amlak Finance" />
//           <Button
//             variant="contained"
//             sx={{
//               bgcolor: '#90caf9',
//               color: '#000',
//               '&:hover': { bgcolor: '#d5d5d5' }
//             }}
//           >
//             Create Application
//           </Button>
//           <Button
//             variant="contained"
//             sx={{
//               bgcolor: 'green',
//               color: '#000',
//               '&:hover': { bgcolor: '#64b5f6' }
//             }}
//           >
//             Search Application
//           </Button>
//           <Button
//             variant="contained"
//             sx={{
//               bgcolor: 'green',
//               color: '#000',
//               '&:hover': { bgcolor: '#64b5f6' }
//             }}
//           >
//             Notification Centre
//           </Button>
//           <Button>Logout</Button>
//         </Box>
//       </Toolbar>
//     </AppBar>
//   );
// }








import React from 'react';
import { AppBar, Toolbar, Button, Box } from '@mui/material';

export default function Navbar() {
  return (
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar sx={{ bgcolor: 'black', borderBottom: '1px solid #e0e0e0' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flexGrow: 1 }}>
          {/* Logo */}
          <img
            src="https://www.amlakfinance.com/wp-content/uploads/2018/10/amlak-logo.svg"
            alt="Amlak Finance"
            style={{ width: '100px', height: '60px' }} // Adjust width and height as needed
          />
          
          {/* Buttons */}
          <Button
            variant="contained"
            sx={{
              bgcolor: '#90caf9',
              color: '#000',
              '&:hover': { bgcolor: '#d5d5d5' },
            }}
          >
            Create Application
          </Button>
          <Button
            variant="contained"
            sx={{
              bgcolor: 'green',
              color: '#000',
              '&:hover': { bgcolor: '#64b5f6' },
            }}
          >
            Search Application
          </Button>
          <Button
            variant="contained"
            sx={{
              bgcolor: 'green',
              color: '#000',
              '&:hover': { bgcolor: '#64b5f6' },
            }}
          >
            Notification Centre
          </Button>
          <Button
            variant="text"
            sx={{
              color: '#fff',
              marginLeft: 'auto', // Push to the right
              '&:hover': { color: '#90caf9' },
            }}
          >
            Logout
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
