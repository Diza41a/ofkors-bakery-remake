import { useLayoutEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import S, { classes } from './styles.ts';
import LogoDarkImg from '../../assets/images/Logo_dark.png';
import LogoLightImg from '../../assets/images/Logo_light.png';

const Header = (): JSX.Element => {
  const { pathname } = useLocation();

  const headerRef = useRef<HTMLHeadElement>(null);
  const initialLogoImg = pathname === '/' ? LogoDarkImg : LogoLightImg;
  const [logoImgLink, setLogoImgLink] = useState(initialLogoImg);

  const isOnLandingPage = pathname === '/';
  const isOnTopOfPage = window.scrollY === 0;
  const shouldHaveOpaqueBackground = isOnLandingPage && isOnTopOfPage;
  const classNames = [];
  if (shouldHaveOpaqueBackground) classNames.push(classes.opaqueBackground);

  useLayoutEffect(() => {
    const customizeHeaderViewOnPageScroll = () => {
      if (!headerRef.current) return;

      if (window.scrollY > 0 || pathname !== '/') {
        headerRef.current.classList.remove(classes.opaqueBackground);
        setLogoImgLink(LogoLightImg);
      } else {
        headerRef.current.classList.add(classes.opaqueBackground);
        setLogoImgLink(LogoDarkImg);
      }
    };

    customizeHeaderViewOnPageScroll();
    window.addEventListener('scroll', customizeHeaderViewOnPageScroll);

    return () => {
      window.removeEventListener('scroll', customizeHeaderViewOnPageScroll);
    };
  }, [pathname]);

  return (
    <S.Header ref={headerRef} className={classNames.join(' ')}>
      <Link to='/' className={classes.logoLink}>
        <img src={logoImgLink} />
      </Link>
    </S.Header>
  );
};

export default Header;
