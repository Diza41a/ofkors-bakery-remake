import styled from "styled-components";
import type { Theme } from "../../global/theme";

export const classes = {
  contentSectionsContainer: 'Footer-ContentSections-Container',
  mediaSection: 'Footer-Section-Media',
  learnMoreSection: 'Footer-Section-LearnMore',
  contactSection: 'Footer-Section-Contact',
  contactLink: 'Footer-Section-Contact-Lnk',
  activeLink: 'Footer-Section-Lnk--active',
  copyrightText: 'Footer-Txt-Copyright',
};

const Footer = styled('footer')<{ theme: Theme }>(({ theme }) => ({
  paddingTop: 120,
  backgroundColor: theme.colors.brown,

  [`.${classes.contentSectionsContainer}`]: {
    display: 'flex',
    padding: '0 10%',
    justifyContent: 'space-between',
    paddingBottom: '100px',

    section: {
      display: 'flex',
      flexDirection: 'column',

      h3: {
        ...theme.typography.headline3,
        marginBottom: 40,
        color: theme.colors.text.white,
      },

      [`&.${classes.mediaSection}`]: {
        ul: {
          display: 'flex',
          columnGap: 16,
          listStyle: 'none',
        },
      },

      [`&:not(.${classes.mediaSection})`]: {
        ul: {
          display: 'flex',
          flexDirection: 'column',
          rowGap: 30,
          listStyle: 'none',

          li: {
            'a, p': {
              ...theme.typography.link,
              color: theme.colors.action.gold,
              textTransform: 'uppercase',
            },

            a: {
              [`&:hover, &.${classes.activeLink}`]: {
                transition: 'color 0.3s ease',
                color: theme.colors.text.white,

                p: {
                  transition: 'color 0.3s ease',
                  color: theme.colors.text.white,
                },
              },
            },
          },
        },

        [`&.${classes.contactSection}`]: {
          ul: {
            li: {
              [`a.${classes.contactLink}`]: {
                ...theme.typography.paragraph1,
                textTransform: 'none',
                fontWeight: 300,
              },
            },
          },
        },
      },
    },
  },

  hr: {
    margin: '0 10%',
    border: `1px solid ${theme.colors.lines.hr}`,
  },

  [`.${classes.copyrightText}`]: {
    ...theme.typography.paragraph2,
    textAlign: 'center',
    color: theme.colors.text.gray,
    padding: '40px 0',
  },
}));

export default {
  Footer,
};
