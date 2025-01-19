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
        width: 200,  // Reduced width to match image
        height: '100vh',
        position: 'fixed',
        left: 0,
        top: 64,
        bgcolor: '#ffffff',
        overflowY: 'auto'
      }}
    >
      <List sx={{ padding: 0 }}>  {/* Remove default padding */}
        {menuItems.map((text, index) => (
          <ListItem
            key={text}
            sx={{
              padding: '8px 16px',  // Reduced padding
              borderBottom: '1px solid #e0e0e0',
              color: '#0000EE',  // Traditional link color
              textDecoration: 'underline',
              '&:hover': {
                bgcolor: '#f5f5f5',
                cursor: 'pointer'
              },
              ...(text === 'Contact Details' && {
                bgcolor: '#e8e8e8',
                color: '#000000',
                textDecoration: 'none',
                fontWeight: 'bold'
              })
            }}
          >
            <ListItemText 
              primary={text} 
              sx={{ 
                margin: 0,
                '& .MuiTypography-root': {
                  fontSize: '12px',  // Smaller font size
                  lineHeight: 1.1    // Tighter line height
                }
              }}
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}