import React from 'react';
import { Box, List, ListItem, ListItemText, Paper } from '@mui/material';

const menuItems = [
  'Customer Info',
  'Contact Details',
  'Profession & Income',
  'Asset, Liabilities & Bank Accounts',
  'Finance Details',
  'Referral & References',
  'KYC',
  'Fee',
  'Deviations',
  'Comments',
  'Audit Trail'
];

export default function Sidebar() {
  return (
    <Paper 
      elevation={3} 
      sx={{ 
        width: 250,
        height: '100vh',
        position: 'fixed',
        left: 0,
        top: 64, // Height of navbar
        bgcolor: '#f5f5f5',
        overflowY: 'auto'
      }}
    >
      <List>
        {menuItems.map((text, index) => (
          <ListItem
            key={text}
            sx={{
              borderBottom: '1px solid #e0e0e0',
              '&:hover': {
                bgcolor: '#e3f2fd',
                cursor: 'pointer'
              },
              ...(text === 'Contact Details' && {
                bgcolor: '#bbdefb',
                fontWeight: 'bold'
              })
            }}
          >
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}
