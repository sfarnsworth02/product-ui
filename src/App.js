import React from 'react';
import './App.scss';
import Page from './components/Page';
import Login from './pages/Login';
import Product from './pages/product/Product';

function App() {
  return (
    <Page>
      {/* <Login /> */}
      <Product />
    </Page>

  )}

export default App;


