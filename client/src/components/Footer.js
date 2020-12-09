import React from 'react';
import gitHub from '../assets/icons/github.png';
import linkedin from '../assets/icons/linkedin.png';
import telegram from '../assets/icons/telegram.png';
import skype from '../assets/icons/skype.png';
import phone from '../assets/icons/phone.png';
import email from '../assets/icons/email.png';

export const Footer = () => {
  return (
    <footer className="page-footer blue darken-1">
      <div className="container">
        <ul className="contacts-list">
          <li>
            <a
              className="grey-text text-lighten-3"
              href="https://github.com/Ghileors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="icon" src={gitHub} alt="gitHub icon" />
            </a>
          </li>
          <li>
            <a
              className="grey-text text-lighten-3"
              href="https://www.linkedin.com/in/polina-slyusareva-7238a11ba/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="icon" src={linkedin} alt="linkedin icon" />
            </a>
          </li>
          <li>
            <a
              className="grey-text text-lighten-3"
              title="Telegram"
              href="tg://resolve?domain=ghileor"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="icon" src={telegram} alt="telegram icon" />
            </a>
          </li>
          <li>
            <a
              className="grey-text text-lighten-3"
              href="skype:live:.cid.ff78d3044fee8ed1?chat"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="icon" src={skype} alt="telegram icon" />
            </a>
          </li>
          <li>
            <a
              className="grey-text text-lighten-3"
              href="tel:+3800637916529"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="icon" src={phone} alt="phone icon" />
            </a>
          </li>
          <li>
            <a
              className="grey-text text-lighten-3"
              href="mailto:slsrv.p.a@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="icon" src={email} alt="email icon" />
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-copyright blue darken-2">
        <div className="container copyright">
          <p className="grey-text text-lighten-1 right">
            &#169; 2020 by Polina Slyusareva
          </p>
          <p className="grey-text text-lighten-1 right">Made with &#10084;</p>
        </div>
      </div>
    </footer>
  );
};
