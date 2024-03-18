import React from 'react';
import './main-footer.scss';
import NewsletterForm from '../NewsletterForm/NewsletterForm';

type Props = {}

const MainFooter = (props: Props) => {
  return (
    <footer id='footer'>
      <div className="footer--content container">
        <NewsletterForm />
        <div className="social-wrapper">
          <a href="https://twitter.com/"
            rel="noreferrer" target="_blank"
            aria-label='Twitter' >
            twitter
          </a>
          <a href="https://www.facebook.com/"
            rel="noreferrer" target="_blank"
            aria-label='Facebook' >
            facebook
          </a>
        </div>
      </div>
    </footer>
  )
}

export default MainFooter