import { Suspense } from 'react';
import { Outlet, useLocation, Link as RouterLink } from 'react-router-dom';
import { Search } from '../Search/Search';
import { Container, PaginationContainer, StyledLink } from './Layout.styles';
import BasicPagination from '../Pagination/Pagination';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import store from '../../Zustand/store';

export const Layout = () => {
  const location = useLocation();
  const { prevPath } = store();
  const backLinkHref = prevPath === location.pathname ? '/' : prevPath ?? '/';

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
        <StyledLink as={RouterLink} to={backLinkHref}>
          <ArrowBackIcon style={{ fontSize: 40 }} />
        </StyledLink>
      )}
    </Container>
  );
};
