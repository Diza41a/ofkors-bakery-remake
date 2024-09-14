import styled from "styled-components";
import { MOBILE_VIEW_BREAKPOINT } from "../../global/theme";
import type { StyledComponent } from "../../global/types/styleTypes";

export const classes = {
  contentSectionsContainer: 'Footer-ContentSections-Container',
  mediaSection: 'Footer-Section-Media',
  learnMoreSection: 'Footer-Section-LearnMore',
  contactSection: 'Footer-Section-Contact',
  contactLink: 'Footer-Section-Contact-Lnk',
  activeLink: 'Footer-Section-Lnk--active',
  copyrightText: 'Footer-Txt-Copyright',
};

const Footer = styled('footer')<StyledComponent>(({ theme }) => ({
  paddingTop: 120,
  backgroundColor: theme.colors.brown,

  [`.${classes.contentSectionsContainer}`]: {
    display: 'flex',
    flexWrap: 'wrap',
    rowGap: 25,
    columnGap: 20,
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

      ul: {
        rowGap: 30,
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
    padding: '40px 10%',
  },

  '@media (max-width: 760px)': {
    [`.${classes.contentSectionsContainer}`]: {
      flexDirection: 'column',
    },
  },

  [`@media (max-width: ${MOBILE_VIEW_BREAKPOINT}px)`]: {
    paddingTop: 56,

    [`.${classes.contentSectionsContainer}`]: {
      padding: '0 5%',
      paddingBottom: 30,

      section: {
        h3: {
          marginBottom: 32,
        },

        ul: {
          rowGap: 22,
        },

        [`&.${classes.mediaSection}`]: {
          ul: {
            li: {
              '&:first-of-type': {
                button: {
                  img: {
                    width: 10,
                  },
                },
              },

              '&:nth-of-type(2)': {
                button: {
                  img: {
                    width: 17,
                  },
                },
              },
            },
          },
        },
      },
    },

    hr: {
      margin: '0 5%',
    },

    [`.${classes.copyrightText}`]: {
      padding: '22px 5%',
    },
  },
}));

export default {
  Footer,
};
