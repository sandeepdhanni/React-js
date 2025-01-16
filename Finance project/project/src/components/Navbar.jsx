import React from 'react';
import { AppBar, Toolbar, Button, Box } from '@mui/material';

export default function Navbar() {
  return (
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar sx={{ bgcolor: 'black', borderBottom: '1px solid #e0e0e0' }}>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Button
            variant="contained"
            sx={{
              bgcolor: '#90caf9',
              color: '#000',
              '&:hover': { bgcolor: '#d5d5d5' }
            }}
          >
            Create Application
          </Button>
          <Button
            variant="contained"
            sx={{
              bgcolor: 'green',
              color: '#000',
              '&:hover': { bgcolor: '#64b5f6' }
            }}
          >
            Search Application
          </Button>
          <Button
            variant="contained"
            sx={{
              bgcolor: 'green',
              color: '#000',
              '&:hover': { bgcolor: '#64b5f6' }
            }}
          >
            Notification Centre
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
