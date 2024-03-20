import { Suspense } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Search } from '../Search/Search';
import { Container, PaginationContainer, StyledLink } from './Layout.styles';
import BasicPagination from '../Pagination/Pagination';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export const Layout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Container>
      <Search />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      {!location.pathname.startsWith('/product/') ? (
        <PaginationContainer>
          <BasicPagination />
        </PaginationContainer>
      ) : (
        <StyledLink onClick={() => navigate(-1)}>
          <ArrowBackIcon style={{ fontSize: 40 }} />
        </StyledLink>
      )}
    </Container>
  );
};
