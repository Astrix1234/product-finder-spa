import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import store from '../../Zustand/store';

export default function BasicPagination() {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const { setPrevPath, prevPath } = store();

  useEffect(() => {
    const match = prevPath.match(/\/page-(\d+)/);
    if (match) {
      const pageNumber = parseInt(match[1]);
      setCurrentPage(pageNumber);
    }
  }, [prevPath]);

  const handlePageChange = (_: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
    navigate(`/page-${page}`);
    setPrevPath(`/page-${page}`);
  };

  return (
    <Stack spacing={2}>
      <Pagination
        count={3}
        color="secondary"
        size="large"
        page={currentPage}
        onChange={handlePageChange}
      />
    </Stack>
  );
}
