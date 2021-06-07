import React from 'react';
import Navigation from '../Navigation';

const Contact = () => {
  return (
    <div className="contact">
      <Navigation />
      <div className="contactContent">
        <div className="header"></div>
        <div className="contactBox">
          <h1>Contactez-moi</h1>
          <ul>
            <li>
              <i className="fas fa-map-marker-alt" />
              <span>Antananarivo</span>
            </li>
            <li>
              <i className="fas fa-mobile-alt" />
              <span className="clickInput">+261343700134</span>
            </li>
            <li>
              <i className="far fa-envelope" />
              <span className="clikInput">valdotsiarohasina@gmail.com</span>
            </li>
          </ul>
        </div>

        <div className="socialNetwork">
          <ul>
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4>LinkedIn</h4>
              <i className="fab fa-linkedin" />
            </a>
            <a
              href="https://www.github.com/valdoth.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4>Github</h4>
              <i className="fab fa-github" />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4>facebook</h4>
              <i className="fab fa-facebook" />
            </a>
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4>twitter</h4>
              <i className="fab fa-twitter" />
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;