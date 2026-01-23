import React from 'react';
import './global.css';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';

export function App() {
  return (
    <>
      <Header />
      <div className='app'></div>
      <Footer />
    </>
  );
}
