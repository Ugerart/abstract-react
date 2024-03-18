import React, { FC, useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './main-header.scss';

type Props = {}

const MainHeader : FC = (props: Props) => {

  const [isHidden, setIsHidden] = useState(false);
  let oldScroll = 0;

  useEffect(() => {
    const handleScroll = () => {
      if ( window.scrollY < window.innerHeight / 2 ) {
        setIsHidden(false);
      } else if ( oldScroll < window.scrollY ) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      oldScroll = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header id='header' className={isHidden ? 'hidden' : ''}>
      <div className="container header-content">
        <NavLink to="/" className={'header-logo'}>
          <img src="https://placehold.co/100x50/EEE/31343C" alt="" />
        </NavLink>
        <nav>
          <ul>
            <li>
              <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/sunglasses">Sunglasses</NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/eyeglasses">Eyeglasses</NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/lenses">Lenses</NavLink>
            </li>
          </ul>
        </nav>
        <div>
          <form action="" id="search-form">
            <input type="text" placeholder='search' />
            <button className="btn">RESET</button>
          </form>
        </div>
      </div>
    </header>
  )
}

export default MainHeader