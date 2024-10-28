import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import S, { classes } from './styles';
import { locales, type TLanguage } from '../../../../translations';
import type { Menu, MenuItem } from '../../../../types/Menu';

interface MenuProps {
  data: Menu,
  backgroundImageUrl: string;
};

const Menu = ({ data, backgroundImageUrl }: MenuProps): JSX.Element => {
  const { i18n: { language }, t } = useTranslation('global');

  const [isImgLoaded, setIsImgLoaded] = useState(false);
  const overlayClassNames = [classes.loadingOverlay];
  if (isImgLoaded) overlayClassNames.push(classes.loadingOverlayTransparent);

  const renderMenuItemCard = (menuItem: MenuItem) => {
    const lang = locales.includes(language as TLanguage) ? language : 'en';

    return (
      <div className={classes.menuCard} key={menuItem.id}>
        <div className={classes.menuCardTitleRow}>
          <h3 className={classes.menuCardTitle}>{menuItem.name[lang as TLanguage]}</h3>
          <span className={classes.menuCardPrice}>${menuItem.price.toFixed(2)}</span>
        </div>
        <div className={classes.menuCardBody}>
          <p className={classes.menuCardBody}>
            {menuItem.description[lang as TLanguage]}
          </p>
        </div>
      </div>
    );
  };

  useEffect(() => {
    const img = new Image();
    img.src = backgroundImageUrl;
    img.onload = () => setIsImgLoaded(true);

    return () => { img.src = ''; }
  }, [backgroundImageUrl]);

  return (
    <S.MenuWrapper
      className={classes.root}
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      <h2 className={classes.title}>
        {t(`apis:menu:categories:${data.category}`)}
      </h2>
      <div className={classes.body}>
        {data.items.map((menuItem) => renderMenuItemCard(menuItem))}
      </div>

      <div className={overlayClassNames.join(' ')} />
    </S.MenuWrapper>
  );
};

export default Menu;
