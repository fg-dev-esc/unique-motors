import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ScrollTop from '../../components/ui/ScrollTop';
// import ThemeToggle from '../../components/ui/ThemeToggle'; // Comentado - tema fijo en 'Subasta Segura'
import { useLayout } from './useLayout';

export const Layout = ({ children }) => {
  const { data } = useLayout();

  return (
    <div className={data.app.className}>
      <Header />
      <main className={data.main.className}>
        {children}
      </main>
      <Footer />
      <ScrollTop />
      {/* <ThemeToggle /> */}
    </div>
  );
};