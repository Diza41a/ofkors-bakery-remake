import Button from '../Button/index.tsx';
import { NavLink } from 'react-router-dom';
import { getCurrentYear } from '../../utils/dateUtils.ts';
import S, { classes } from './styles.ts';
import FacebookIcon from '../../assets/icons/facebook.svg';
import InstagramIcon from '../../assets/icons/instagram.svg';

const LEARN_MORE_LINKS = [
  { path: '/about', label: 'About' },
  { path: '/gallery', label: 'gallery' },
  { path: '/menu', label: 'Menu' },
];

const Footer = ():JSX.Element => {
  const currentYear = getCurrentYear();

  return (
    <S.Footer>
      <div className={classes.contentSectionsContainer}>
        {/* TODO: Update the media links to be actual links */}
        <section className={classes.mediaSection}>
          <h3>Media Links</h3>
          <ul>
            <li>
              <Button
                isIconButton
                borderRadius={'50%'}
              >
                <img src={FacebookIcon} />
              </Button>
            </li>
            <li>
              <Button
                isIconButton
                borderRadius={'50%'}
              >
                <img src={InstagramIcon} />
              </Button>
            </li>
          </ul>
        </section>
        <section>
          <h3>Hours of Operation</h3>
          <ul>
            <li>
              <p>
                Monday - Saturday: 8 AM - 5 PM
              </p>
            </li>
            <li>
              <p>
                Sunday: Closed
              </p>
            </li>
          </ul>
        </section>
        <section className={classes.learnMoreSection}>
          <h3>Learn More</h3>
          <ul>
            {LEARN_MORE_LINKS.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) => isActive ? classes.activeLink : ''}
                >
                  <p>{link.label}</p>
                </NavLink>
              </li>
            ))}
          </ul>
        </section>
        <section className={classes.contactSection}>
          <h3>Reach Us</h3>
          <ul>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) => isActive ? classes.activeLink : ''}
              >
                Contact
              </NavLink>
            </li>
            <li>
              <a
                href='https://maps.app.goo.gl/V4TDFKFfWy6vBnqY6'
                target='_blank'
                className={classes.contactLink}
              >
                3945 Cattlemen Rd, Sarasota, FL 34233
              </a>
            </li>
            <li>
              <a
                href='tel:+19415529717'
                className={classes.contactLink}
              >
                Phone (941) 552-9717
              </a>
            </li>
            <li>
              <a
                href="mailto:blacksea41a@gmail.com"
                className={classes.contactLink}
              >
                BlackSea41a@gmail.com
              </a>
            </li>
          </ul>
        </section>
      </div>
      <hr />
      <p className={classes.copyrightText}>
        &copy; {currentYear} OfKors European Bakery. All rights reserved.
      </p>
    </S.Footer>
  );
};

export default Footer;
