import React, { useContext, useRef, useState, useEffect } from 'react';
import Header from './Header';
import Menu from './Menu';
import Footer from './Footer';
import { ThemeContext } from '../contexts/ThemeContext';

const Layout = ({ children }) => {
  const { fontSize, contrast } = useContext(ThemeContext);
  const headerRef = useRef(null);
  const searchInputRef = useRef(null);
  const [headerHeight, setHeaderHeight] = useState(60);

  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight);
    }
  }, [fontSize, contrast]);

  useEffect(() => {
    const handleResize = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const focusSearchInput = () => {
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  };

  const containerStyle = {
    fontSize: `${fontSize}px`,
    backgroundColor: contrast === 'normal' ? '#fff' : '#222',
    color: contrast === 'normal' ? '#000' : '#fff',
    minHeight: '100vh',
    paddingTop: `${headerHeight}px`,
  };

  return (
    <div style={containerStyle}>
      <Header ref={headerRef} onBusca={focusSearchInput} />
      <Menu searchInputRef={searchInputRef} />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
