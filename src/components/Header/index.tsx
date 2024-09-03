import { useLayoutEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Fade as Hamburger } from 'hamburger-react'
import S, { classes } from './styles.ts';
import LogoDarkImg from '../../assets/images/Logo_dark.png';
import LogoLightImg from '../../assets/images/Logo_light.png';

const NAV_LINKS = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/services', label: 'Services' },
  { path: '/menu', label: 'Menu' },
  { path: '/contact', label: 'Contact' },
];

const Header = (): JSX.Element => {
  const { pathname } = useLocation();
  const isOnLandingPage = pathname === '/';

  const [isBurgerExpanded, setIsBurgerExpanded] = useState(false);
  const navMenuClassNames = [];
  if (isBurgerExpanded) navMenuClassNames.push(classes.navMenuExpanded);

  const headerRef = useRef<HTMLHeadElement>(null);
  const initialLogoImg = isOnLandingPage && !isBurgerExpanded ? LogoDarkImg : LogoLightImg;
  const [logoImgLink, setLogoImgLink] = useState(initialLogoImg);

  const isOnTopOfPage = window.scrollY === 0;
  const shouldHaveOpaqueBackground = isOnLandingPage && isOnTopOfPage && !isBurgerExpanded;
  const classNames = [];
  if (shouldHaveOpaqueBackground) classNames.push(classes.opaqueBackground);

  const NavMenu = (
    <nav className={navMenuClassNames.join(' ')}>
      <ul>
        {NAV_LINKS.map((link) => (
          <li key={link.path}>
            <NavLink
              to={link.path}
              className={({ isActive }) => isActive? classes.navLinkActive : ''}
            >
              <p>{link.label}</p>
            </NavLink>
          </li>
        ))}
      </ul>

      <Hamburger
        direction='left'
        size={24}
        toggled={isBurgerExpanded}
        toggle={setIsBurgerExpanded}
      />
    </nav>
  );

  useLayoutEffect(() => {
    const toggleHeaderStylesOnPageScroll = () => {
      if (!headerRef.current) return;

      if (window.scrollY > 0 || pathname !== '/') {
        headerRef.current.classList.remove(classes.opaqueBackground);
        setLogoImgLink(LogoLightImg);
      } else if (!isBurgerExpanded) {
        console.log('here', { isBurgerExpanded });
        headerRef.current.classList.add(classes.opaqueBackground);
        setLogoImgLink(LogoDarkImg);
      }
    };
    const toggleBurgerMenuOnPageResize = () => {
      if (window.innerWidth > 750) {
        setIsBurgerExpanded(false);
      }
    };

    toggleHeaderStylesOnPageScroll();
    window.addEventListener('scroll', toggleHeaderStylesOnPageScroll);
    window.addEventListener('resize', toggleBurgerMenuOnPageResize);

    return () => {
      window.removeEventListener('scroll', toggleHeaderStylesOnPageScroll);
      window.removeEventListener('resize', toggleBurgerMenuOnPageResize);
    };
  }, [pathname]);

  useLayoutEffect(() => {
    if (isBurgerExpanded) setLogoImgLink(LogoLightImg);
    else setLogoImgLink(LogoDarkImg);
  }, [isBurgerExpanded]);

  return (
    <S.Header ref={headerRef} className={classNames.join(' ')}>
      <NavLink to='/' className={classes.logoLink}>
        <img src={logoImgLink} />
      </NavLink>
      {NavMenu}
    </S.Header>
  );
};

export default Header;
