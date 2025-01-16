import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider, createTheme, Box } from '@mui/material';
import { store } from './store/store';
import ContactForm from './components/ContactForm';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
  },
});

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Navbar />
          <Box sx={{ display: 'flex', pt: '64px' }}> {/* 64px is navbar height */}
            <Sidebar />
            <Box sx={{ flexGrow: 1, ml: '250px', p: 3 }}> {/* 250px is sidebar width */}
              <ContactForm />
            </Box>
          </Box>
        </Box>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
