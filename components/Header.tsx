import NextLink from 'next/link';
import { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';

import Link from './Link';
import SVG from './SVG';

const Header: React.FC = () => {
  const [expand, setExpand] = useState(false);

  const toggleMenu = (): void => {
    setExpand(s => !s);
  };

  const closeMenu = (): void => {
    setExpand(false);
  };

  useEffect(() => {
    setTimeout(() => {
      if (expand) {
        window.addEventListener('click', closeMenu);
      } else {
        window.removeEventListener('click', closeMenu);
      }
    }, 0);

    return (): void => {
      window.removeEventListener('click', closeMenu);
    };
  }, [expand]);

  return (
    <header className="header">
      <nav className="navbar">
        <NextLink href="/">
          <a className="nav-brand">Starter</a>
        </NextLink>

        <button type="button" className="btn" onClick={toggleMenu}>
          <SVG data="/icon/menu.svg" />
        </button>

        <CSSTransition in={expand} timeout={200} classNames="nav-menu">
          <ul className="nav-menu">
            <li>
              <Link href="/about">about</Link>
            </li>
          </ul>
        </CSSTransition>
      </nav>
    </header>
  );
};

export default Header;
