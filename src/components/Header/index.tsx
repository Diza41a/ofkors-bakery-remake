import { useLayoutEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import LanguageMenu from './LanguageMenu/index';
import S, { classes } from './styles.ts';
import { Fade as Hamburger } from 'hamburger-react'
import LogoDarkImg from '../../assets/images/logo_dark.png';
import LogoLightImg from '../../assets/images/logo_light.png';
import { useTranslation } from 'react-i18next';

const Header = (): JSX.Element => {
  const { t } = useTranslation('global');
  const navLinks = [
    { path: '/', label: t('header:home') },
    { path: '/about', label: t('header:about') },
    { path: '/gallery', label: t('header:gallery') },
    { path: '/menu', label: t('header:menu') },
    { path: '/contact', label: t('header:contact') },
  ];

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
        {navLinks.map((link) => (
          <li key={link.path}>
            <NavLink
              to={link.path}
              className={({ isActive }) => isActive? classes.navLinkActive : ''}
              onClick={() => { setIsBurgerExpanded(false) }}
            >
              <p>{link.label}</p>
            </NavLink>
          </li>
        ))}
      </ul>

      <LanguageMenu
        isHeaderOpaque={shouldHaveOpaqueBackground}
        isNavMenuExpanded={isBurgerExpanded}
      />

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
        headerRef.current.classList.add(classes.opaqueBackground);
        setLogoImgLink(LogoDarkImg);
      }
    };
    const toggleBurgerMenuOnPageResize = () => {
      if (window.innerWidth > 750) {
        setIsBurgerExpanded(false);
      }
    };
    const toggleBurgerMenuOnExternalClick = (e: MouseEvent | TouchEvent) => {
      if (!headerRef.current) return;

      const clickedEl = e.target as HTMLElement;
      if (!headerRef.current.contains(clickedEl)) setIsBurgerExpanded(false);
    };
    const switchHeaderAttachmentOnPageLoad = () => {
      if (!headerRef.current) return;

      if (pathname === '/') headerRef.current.style.position = 'fixed';
      else headerRef.current.style.position = 'sticky';
    };

    switchHeaderAttachmentOnPageLoad();
    toggleHeaderStylesOnPageScroll();
    window.addEventListener('scroll', toggleHeaderStylesOnPageScroll);
    window.addEventListener('resize', toggleBurgerMenuOnPageResize);
    window.addEventListener('click', toggleBurgerMenuOnExternalClick);

    return () => {
      window.removeEventListener('scroll', toggleHeaderStylesOnPageScroll);
      window.removeEventListener('resize', toggleBurgerMenuOnPageResize);
      window.removeEventListener('click', toggleBurgerMenuOnExternalClick);
    };
  }, [pathname, isBurgerExpanded]);

  useLayoutEffect(() => {
    if (isBurgerExpanded) {
      setLogoImgLink(LogoLightImg);
    };
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
