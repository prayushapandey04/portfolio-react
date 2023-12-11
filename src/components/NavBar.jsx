import { Link } from 'react-router-dom';
import React from 'react';

const NavBar = () => {
    return(
    <nav className="navbar navbar-expand-lg">
      <h1 className='navbar-header'>Portfolio</h1>
      <div className="container"></div>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ml-auto">
            <Link id='navLink'
              to="/"
              className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
            >
              Home
            </Link>
            <Link id='navLink'
              to="/contact"
              className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
            >
              Contact
            </Link>
              <Link id='navLink'
                to="/projects"
                className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
              >
                Projects
              </Link>
          </div>
        </div>
    </nav>
    )
}

export default NavBar;