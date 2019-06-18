import React, { useState, useEffect } from 'react';
import classNames from 'classnames';

import AnchorLink from './AnchorLink';

const nsBase = 'component';
const ns = `${nsBase}-nav`;

const Nav = () => {
  const rootClassnames = classNames({
    [`${nsBase} ${ns}`]: true,
  });

  const [navState, setNavState] = useState({
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
    setNavState(prevState => {
      return { ...prevState, 'scrollPosition': scroll}
    });
  }

  const handleClick = () => {
    setNavState(prevState => {
      return { ...prevState, 'menuActive': !navState.menuActive ? true : false}
    });
  }

  const scrolled = navState.scrollPosition > 50 ? 'scrolled' : '';
  const menuActive = navState.menuActive ? 'active' : '';

  return (
    <div id='site-menu' className={`${rootClassnames} ${scrolled} ${menuActive}`}>
      <div className={`${ns}__wrapper`}>
        <nav className={`${ns}__navigation`}>
          <ul>
            <li><AnchorLink to='/' className='link__underline'>Home</AnchorLink></li>
            <li><AnchorLink to='/#work' className='link__underline'>Work</AnchorLink></li>
            <li><AnchorLink to='#contact' className='link__underline'>Contact</AnchorLink></li>
          </ul>
        </nav>
      </div>
      <div className={`${ns}__control`} onClick={()=>handleClick()}>
        <div className={`${ns}__menu-button`}>
          <div className={`${ns}__menu-top`}>
            <div className={`${ns}__menu-top__left`}></div>
            <div className={`${ns}__menu-top__middle`}></div>
            <div className={`${ns}__menu-top__right`}></div>
          </div>
          <div className={`${ns}__menu-middle`}>
            <div className={`${ns}__menu-middle__left`}></div>
            <div className={`${ns}__menu-middle__right`}></div>
          </div>
          <div className={`${ns}__menu-bottom`}>
            <div className={`${ns}__menu-bottom__left`}></div>
            <div className={`${ns}__menu-bottom__right`}></div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Nav;
