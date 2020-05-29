import React from 'react';
import './App.scss';
import Logo from './components/Logo';
import Account from './components/Account';
import Products from './pages/Product';
import Footer from './components/Footer';

function App(props) {
  return (
    <section className="page-wrapper">
      <header className="header-container">
        <Logo />
        <Account />
      </header>
      <main>
        <Products />
      </main>
      <footer className="main-footer">
        <Footer />
      </footer>
    </section>
  )}

export default App;


