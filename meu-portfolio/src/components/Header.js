import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <h1>Meu Portfolio</h1>
      <nav>
        <ul>
          <li>
            <Link to='/sobre'>Sobre</Link>
          </li>
          <li>
            <Link to='/projetos'>Porjetos</Link>
          </li>
          <li>
            <Link to='/contato'>Contato</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;