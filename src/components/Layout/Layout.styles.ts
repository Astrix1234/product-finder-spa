import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding-top: 50px;
  position: relative;
`;

export const PaginationContainer = styled.div`
  position: absolute;
  top: 600px;
`;

export const StyledLink = styled.a`
  color: grey;
  transition: color 0.3s ease-in-out;
  &:hover {
    color: blue;
  }
`;
