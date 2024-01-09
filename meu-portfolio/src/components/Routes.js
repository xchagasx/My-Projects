import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
// import Menu from './components/Menu';

import Header from './components/Header';
import Sobre from './components/Sobre';
import Projetos from './components/Projetos';
import Contato from './components/Contato';

const Routes = () => {
  return (
        <BrowserRouter>
          <Route Component={ Header } path='/' exact /> 
          <Route Component={ Sobre } path='/sobre' />
          <Route Component={ Projetos } path='/projetos' />
          <Route Component={ Contato} path='/contato' />
        </BrowserRouter>
  ); 
}

export default Routes;
