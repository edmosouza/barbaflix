import React from 'react';
import Logo from '../../assets/img/logo.png';
import './Menu.css';
import Button from '../Button';

function Menu() {

  return (
      <nav className="Menu">
        <a href="/">
          <img src={ Logo }
               className="Logo"
               alt="Barbaflix logo"/>
        </a>

        <Button as="a" href="/" className="ButtonLink">
          Novo vídeo
        </Button>
      </nav>
  );
}

export default Menu;