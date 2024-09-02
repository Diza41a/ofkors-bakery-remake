import { useLayoutEffect, useRef, useState } from 'react';
import S, { classes } from './styles.ts';
import LogoDarkImg from '../../assets/images/Logo_dark.png';
import LogoLightImg from '../../assets/images/Logo_light.png';

const Header = (): JSX.Element => {
  const headerRef = useRef<HTMLHeadElement>(null);
  const [logoImgLink, setLogoImgLink] = useState(LogoLightImg);

  useLayoutEffect(() => {
    const customizeHeaderViewOnPageScroll = () => {
      if (!headerRef.current) return;

      if (window.scrollY > 0) {
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
  }, []);

  return (
    <S.Header ref={headerRef}>
      <a href='#' className={classes.logoLink}>
        <img src={logoImgLink} />
      </a>
    </S.Header>
  );
};

export default Header;
