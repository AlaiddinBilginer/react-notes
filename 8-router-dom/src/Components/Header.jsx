import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header>
      <Link to="/">Anasayfa</Link>
      <Link to="/products">Ürünler</Link>
      <Link to="/about">Hakkımızda</Link>
      <Link to="/contact">İletişim</Link>
    </header>
  );
}

export default Header;
