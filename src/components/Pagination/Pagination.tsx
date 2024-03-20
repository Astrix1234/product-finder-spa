import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function BasicPagination() {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const match = location.pathname.match(/\/page\/(\d+)/);
    if (match) {
      const pageNumber = parseInt(match[1], 10);
      setCurrentPage(pageNumber);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  const handlePageChange = (_: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
    navigate(`/page/${page}`);
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
