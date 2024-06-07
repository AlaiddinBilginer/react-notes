import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './About.css';

function About() {
  return (
    <div className="about">
      <h1>Hakkımızda</h1>
      <nav>
        <Link to="employees">Çalışanlarımız</Link>
        <Link to="company">Şirketimiz</Link>
      </nav>

      <Outlet />
    </div>
  );
}

export default About;
