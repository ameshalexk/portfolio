import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section class='social-media'>
          <div class='social-icons'>
            <a
              class='social-icon-link '
              href='https://github.com/ameshalexk'
              target='_blank'
              aria-label='github'
            >
              <i class='fab fa-github' />
            </a>
            <a
              class='social-icon-link '
              href='https://twitter.com/AmeshKuruvilla'
              target='_blank'
              aria-label='twitter'
            >
              <i class='fab fa-twitter' />
            </a>
            <a
              class='social-icon-link '
              href='https://www.linkedin.com/in/amesh-alex-kuruvilla/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </a>
          </div>
        
      </section>
    </div>
  );
}

export default Footer;
