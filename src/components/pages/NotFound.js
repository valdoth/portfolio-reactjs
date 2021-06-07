import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <div className="notFound">
        <div className="notFoundContent">
          <h3>Désolé cette page n'existe pas !</h3>
          <NavLink exact to="/">
            <i className="fas fa-home" />
            <span> Accueil</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NotFound;