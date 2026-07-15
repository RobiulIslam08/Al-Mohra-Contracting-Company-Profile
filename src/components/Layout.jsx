import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => (
  <div className="w-full overflow-x-hidden" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
    <Header />
    <main>{children}</main>
    <Footer />
  </div>
);

export default Layout;