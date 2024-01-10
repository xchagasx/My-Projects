import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Header from './Header';
import Sobre from './Sobre';
import Projetos from './Projetos';
import Contato from './Contato';

const Routes = () => {
  return (
        <Routes>
        <BrowserRouter>
          <Route Component= { Header } path='/' exact />

          
          <Route Component= { Sobre } path='/sobre' />
          <Route Component= { Projetos } path='/projetos' />
          <Route Component= { Contato} path='/contato' />
        </BrowserRouter>
        </Routes>
  ); 
}

export default Routes;
