import React, { FC } from 'react';
import './newsletter-form.scss';

type Props = {}

const NewsletterForm : FC = (props: Props) => {
  return (
    <div className='newsletter-form--wrapper'>
      <form action="">
        <p>Subscribe to our newsletter</p>
        <div className="form-content">
          <input type="email" placeholder='email' />
          <button className='btn btn-white' type="submit">
            SIGN UP
          </button>
        </div>
      </form>
    </div>
  )
}

export default NewsletterForm