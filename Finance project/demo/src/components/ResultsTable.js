import React from 'react';
import { Table, TableHead, TableRow, TableCell, TableBody, TableContainer, Paper } from '@mui/material';

const ResultsTable = ({ results }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Application ID</TableCell>
            <TableCell>Application Type</TableCell>
            <TableCell>Creation Date</TableCell>
            <TableCell>Customer Segment</TableCell>
            <TableCell>Customer Name</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Stage</TableCell>
            <TableCell>Aging</TableCell>
            <TableCell>Currently Assigned To</TableCell>
            <TableCell>Assigned On</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {results.map((result, index) => (
            <TableRow key={index}>
              <TableCell>{result.applicationId}</TableCell>
              <TableCell>{result.applicationType}</TableCell>
              <TableCell>{result.creationDate}</TableCell>
              <TableCell>{result.customerSegment}</TableCell>
              <TableCell>{result.customerName}</TableCell>
              <TableCell>{result.status}</TableCell>
              <TableCell>{result.stage}</TableCell>
              <TableCell>{result.aging}</TableCell>
              <TableCell>{result.assignedTo}</TableCell>
              <TableCell>{result.assignedOn}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ResultsTable;
