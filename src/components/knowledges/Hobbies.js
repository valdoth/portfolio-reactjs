import React from 'react';

const Hobbies = () => {
  return (
    <div className="hobbies">
      <h3>Intérêts</h3>
      <ul>
        <li className="hobbie">
          <i className="fas fa-football-ball"> </i>
          <span>Foot</span>
        </li>
        <li className="hobbie">
          <i className="fas fa-gamepad"> </i>
          <span>Jeux</span>
        </li>
        <li className="hobbie">
          <i className="fas fa-book"> </i>
          <span>Livre</span>
        </li>
        <li className="hobbie">
          <i className="fas fa-chess"> </i>
          <span>Échecs</span>
        </li>
      </ul>
    </div>
  );
};

export default Hobbies;