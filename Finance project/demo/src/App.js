import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchResults, setCurrentPage } from './redux/slice';
import SearchForm from './components/SearchForm';
import ResultsTable from './components/ResultsTable';
import Pagination from './components/Pagination';
import { Container, Paper } from '@mui/material';

const App = () => {
  const dispatch = useDispatch();
  const { results, currentPage, totalPages } = useSelector((state) => state.search);

  const handleSearch = (formData) => {
    // Simulate an API call with mock data
    const mockResults = {
      results: [
        {
          applicationId: 'APP01',
          applicationType: 'Type1',
          creationDate: '13-Jun-2016',
          customerSegment: 'BTL',
          customerName: 'John Doe',
          status: 'In-Progress',
          stage: '',
          aging: '2 days',
          assignedTo: 'REPPA',
          assignedOn: '15-Jun-2016',
        },
      ],
      totalPages: 2,
    };
    dispatch(setSearchResults(mockResults));
  };

  const handlePageChange = (page) => {
    dispatch(setCurrentPage(page));
    // Fetch data for the new page (can be API call)
  };

  return (
    <Container>
      <Paper style={{ padding: '20px', marginBottom: '20px' }}>
        <SearchForm onSearch={handleSearch} />
      </Paper>
      <ResultsTable results={results} />
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
    </Container>
  );
};

export default App;
