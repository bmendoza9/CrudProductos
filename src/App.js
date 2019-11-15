import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/AppComponents/Header';
import Footer from './components/AppComponents/Footer';
import Product from './components/AppComponents/Product';
import Products from './components/AppComponents/Products';
import AddProduct from './components/AppComponents/AddProduct';
import EditProduct from './components/AppComponents/EditProduct';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <div className='container mt-5'>
        <Switch>
          <Route exact path='/productos' render={ () => (
            <Products/>
          )}/>
          <Route exact path='/productos-nuevo' component={AddProduct} />
          <Route exact path='/productos/:id' component={Product} />
          <Route exact path='/productos/editar/:id' component={EditProduct} />
        </Switch>
      </div>
      <Footer />
    </Router >

  );
}

export default App;
