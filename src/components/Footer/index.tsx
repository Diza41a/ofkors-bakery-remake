import { useTranslation } from 'react-i18next';
import { useQuery } from '@tanstack/react-query';
import { NavLink } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';
import Button from '../Button/index.tsx';
import { getCurrentYear } from '../../utils/dateUtils';
import S, { classes } from './styles.ts';
import FacebookIcon from '../../assets/icons/facebook.svg';
import InstagramIcon from '../../assets/icons/instagram.svg';
import { getHoursOfOperation } from '../../api/hoursAPI';
import { generateHoursOfOperationStrings } from './utils';
import type { TLanguage } from '../../translations/index';

const Footer = ():JSX.Element => {
  const { t } = useTranslation('global');
  const { t: tApis, i18n: { language } } = useTranslation('apis');
  const {
    data: hoursOfOperationResponse,
    isFetched: isHoursOfOperationFetched,
  } = useQuery({
    queryKey: ['hours_of_operation'],
    queryFn: () => getHoursOfOperation(),
  });

  let hoursOfOperationStrings: Array<string> = [];
  if (isHoursOfOperationFetched) {
    hoursOfOperationStrings = generateHoursOfOperationStrings(
      tApis,
      language as TLanguage,
      hoursOfOperationResponse!.data,
    )
  }
  const hoursOfOperationListEls = hoursOfOperationStrings.map((hoursOfOperationString, index) => (
    <li key={index}>
      <p>{hoursOfOperationString}</p>
    </li>
  ));

  const learnMoreLinks = [
    { path: '/about', label: t('nav:about') },
    { path: '/gallery', label: t('nav:gallery') },
    { path: '/menu', label: t('nav:menu') },
  ];
  const currentYear = getCurrentYear();

  return (
    <S.Footer>
      <div className={classes.contentSectionsContainer}>
        <section className={classes.mediaSection}>
          <h3>{t('footer:media_links')}</h3>
          <ul>
            <li>
              <Button
                isIconButton
                borderRadius={'50%'}
                href="https://www.facebook.com/profile.php?id=100053554227093"
              >
                <img src={FacebookIcon} />
              </Button>
            </li>
            <li>
              <Button
                isIconButton
                borderRadius={'50%'}
                href="https://www.instagram.com/ofkors_bakery"
              >
                <img src={InstagramIcon} />
              </Button>
            </li>
          </ul>
        </section>
        <section>
          <h3>{t('footer:hours_of_operation')}</h3>
          <ul>
            {isHoursOfOperationFetched ? (
              hoursOfOperationListEls
            ): <ThreeDots wrapperClass={classes.threeDots} />}
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
