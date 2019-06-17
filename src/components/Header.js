import React, { useState, useEffect } from 'react';
import classNames from 'classnames';

import Container from './Container';
import AnchorLink from './AnchorLink';

import logo from '../../static/assets/jb-logo.svg';

const nsBase = 'component';
const ns = `${nsBase}-header`;

const Header = () => {
  const rootClassnames = classNames({
    [`${nsBase} ${ns}`]: true,
  });

  const [headerState, setHeaderState] = useState({
    scrollPosition: false,
    menuActive: null
  });

  useEffect(() => {
    window.addEventListener('scroll', ()=>listenScrollEvent());

    return () => {
      window.removeEventListener('scroll', ()=>listenScrollEvent());
    };
  }, []);

  const listenScrollEvent = (event) => {
    let scroll = window.pageYOffset;
    setHeaderState(prevState => {
      return { ...prevState, 'scrollPosition': scroll}
    });
  }

  const handleClick = () => {
    setHeaderState(prevState => {
      return { ...prevState, 'menuActive': !headerState.menuActive ? true : false}
    });
  }

  const scrolled = headerState.scrollPosition > 50 ? 'scrolled' : '';
  const menuActive = headerState.menuActive ? 'active' : '';

  return (
    <header className={rootClassnames}>
      <Container>
        <AnchorLink
          to='/'
          direction='left'
        >
          <img src={logo} className={`${ns}__logo`} alt='logo' />
        </AnchorLink>
      </Container>
      <div id='site-menu' className={`site-menu ${scrolled} ${menuActive}`}>
        <div className='site-menu__wrapper'>
          <nav className='site-menu__navigation'>
            <ul>
              <li><AnchorLink to='/' className='link__underline'>Home</AnchorLink></li>
              <li><AnchorLink to='/#work' className='link__underline'>Work</AnchorLink></li>
              <li><AnchorLink to='#contact' className='link__underline'>Contact</AnchorLink></li>
            </ul>
          </nav>
        </div>
        <div className='site-menu__control' onClick={()=>handleClick()}>
          <div className='site-menu__menu-button'>
            <div className='nav-top'>
              <div className='nav-top__left'></div>
              <div className='nav-top__middle'></div>
              <div className='nav-top__right'></div>
            </div>
            <div className='nav-middle'>
              <div className='nav-middle__left'></div>
              <div className='nav-middle__right'></div>
            </div>
            <div className='nav-bottom'>
              <div className='nav-bottom__left'></div>
              <div className='nav-bottom__right'></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
};

export default Header;