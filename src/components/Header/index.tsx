import S, { classes } from './styles.ts';
// import LogoDarkImg from '../../assets/images/Logo_dark.png';
import LogoLightImg from '../../assets/images/Logo_light.png';

const Header = (): JSX.Element => {
  // const NavMenu: JSX.Element = (
  //   <nav>
  //     <ul>
  //       <li>Home</li>
  //       <li>About</li>
  //       <li>Contact</li>
  //     </ul>
  //   </nav>
  // );

  return (
    <S.Header>
      {/* {NavMenu} */}
      <a href='#' className={classes.logoLink}>
        <img src={LogoLightImg} />
      </a>
    </S.Header>
  );
};

export default Header;
