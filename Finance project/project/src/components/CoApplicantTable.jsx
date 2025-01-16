import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Typography,
  Box,
} from '@mui/material';
import { useSelector } from 'react-redux';
import { Plus } from 'lucide-react';

export default function CoApplicantTable() {
  const coApplicants = useSelector((state) => state.contact.coApplicants);

  return (
    <Paper elevation={3} style={{ marginTop: '24px', padding: '24px', border: "1px solid black", }}>
      <Box
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '16px',
        }}
      >
        <Typography variant="h6">Co Applicant/Shareholder List</Typography>
      </Box>
      <TableContainer>
        <Table sx={{
            border: '1px solid black',
            '& th, & td': {
              border: '1px solid black',
            },
          }} >
          <TableHead style={{ backgroundColor: '#f5f5f5' }}>
            <TableRow>
              <TableCell>Applicant/Shareholder Name</TableCell>
              <TableCell>Contact Details</TableCell>
              <TableCell>Profession & Income</TableCell>
              <TableCell>Asset, Liabilities & Bank Details</TableCell>
              <TableCell>Attachments</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {coApplicants.length === 0 ? (
              <TableRow>
                <TableCell colSpan={5} align="center">
                  <Typography variant="body2" color="textSecondary">
                    No co-applicants added yet
                  </Typography>
                </TableCell>
              </TableRow>
            ) : (
              coApplicants.map((applicant) => (
                <TableRow key={applicant.id}>
                  <TableCell>{applicant.name}</TableCell>
                  <TableCell>
                    <Button size="small" color="primary">
                      View
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button size="small" color="primary">
                      View
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button size="small" color="primary">
                      View
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button size="small" color="primary">
                      ADD
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
