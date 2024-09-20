import Button from '../Button/index.tsx';
import { NavLink } from 'react-router-dom';
import { getCurrentYear } from '../../utils/dateUtils.ts';
import S, { classes } from './styles.ts';
import FacebookIcon from '../../assets/icons/facebook.svg';
import InstagramIcon from '../../assets/icons/instagram.svg';
import { useTranslation } from 'react-i18next';

const Footer = ():JSX.Element => {
  const { t } = useTranslation('global');

  const learnMoreLinks = [
    { path: '/about', label: t('nav:about') },
    { path: '/gallery', label: t('nav:gallery') },
    { path: '/menu', label: t('nav:menu') },
  ];
  const currentYear = getCurrentYear();

  return (
    <S.Footer>
      <div className={classes.contentSectionsContainer}>
        {/* TODO: Update the media links to be actual links */}
        <section className={classes.mediaSection}>
          <h3>{t('footer:media_links')}</h3>
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
          <h3>{t('footer:hours_of_operation')}</h3>
          <ul>
            <li>
              <p>
                {t('footer:hours_of_operation_monday-saturday')}
              </p>
            </li>
            <li>
              <p>
                {t('footer:hours_of_operation_sunday')}
              </p>
            </li>
          </ul>
        </section>
        <section className={classes.learnMoreSection}>
          <h3>{t('footer:learn_more')}</h3>
          <ul>
            {learnMoreLinks.map((link) => (
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
          <h3>{t('footer:reach_us')}</h3>
          <ul>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) => isActive ? classes.activeLink : ''}
              >
                {t('nav:contact')}
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
                {t('footer:phone_number')}
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
        &copy; {currentYear} {t('footer:copyright')}
      </p>
    </S.Footer>
  );
};

export default Footer;
