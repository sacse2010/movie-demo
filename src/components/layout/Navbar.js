import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <nav className='navbar navbar-light bg-dark header1'>
        <div className='container'>
          <div className='navbar-header'>
            <Link className='navbar-brand text-white text-lg brand-text' to='/'>
              <img
                src='https://www.themoviedb.org/assets/2/v4/logos/primary-green-d70eebe18a5eb5b166d5c1ef0796715b8d1a2cbc698f96d311d62f894ae87085.svg'
                alt='The Movie Database (TMDb)'
                width='81'
                height='72'
              />
            </Link>
          </div>
          <ul className='navbar-nav ml-auto text-light d-inline-block'>
            
            <li className='nav-item d-inline-block mr-4'>
              <i className='fab fa-imdb fa-5x' id='imdb-logo' />
            </li>
            <li className='nav-item d-inline-block mr-4'>
              <i className='fab fa-react fa-5x' id='react-logo' />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
