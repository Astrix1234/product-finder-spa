import { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Header } from '../Header/Header';
import scss from './Layout.module.scss';

export const Layout = () => {
  return (
    <div className={scss.container}>
      <Header />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};
