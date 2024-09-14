import styled from "styled-components";
import { classes as buttonClasses } from '../../../components/Button/styles';
import type { StyledComponent } from "../../../global/types/styleTypes";
import { MOBILE_VIEW_BREAKPOINT } from "../../../global/theme";
import { zIndexes } from "../../../global/styles";

export const classes = {
  container: 'ContactForm-Container',
  root: 'ContactForm',
  inputContainer: 'ContactForm-InputContainer',
  messageInputContainer: 'ContactForm-MessageInputContainer',
  inputLabel: 'ContactForm-InputLabel',
  requiredAsterisk: 'ContactForm-RequiredAsterisk',
  imgLeftBranch: 'ContactForm-ImgLeftBranch',
};

const ContactFormContainer = styled('div')<StyledComponent>(({ theme }) => ({
  position: 'relative',

  form: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: '0 auto',
    gap: 30,
    padding: 50,
    position: 'relative',
    zIndex: zIndexes.contactForm,
    backgroundColor: theme.colors.bg.white,
    boxShadow: '0px 18px 30px -5px #0000002b',

    [`.${classes.inputContainer}`]: {
      display: 'flex',
      flexDirection: 'column',
      flexBasis: 'calc(50% - 15px)',

      [`.${classes.inputLabel}`]: {
        marginBottom: 8,
        ...theme.typography.paragraph3,
        color: theme.colors.text.heading,

        [`.${classes.requiredAsterisk}`]: {
          color: theme.colors.action.red,
          marginLeft: 2,
        },
      },

      'input, textarea': {
        width: '100%',
      },
    },

    [`.${classes.messageInputContainer}`]: {
      flexBasis: '100%',
    },

    [`.${buttonClasses.root}`]: {
      marginTop: 15,
      marginLeft: 'auto',

      [`.${buttonClasses.endIcon}`]: {
        marginLeft: 7,
        top: 1,

        svg: {
          color: theme.colors.text.white,
          width: 17,
        },
      },
    },
  },

  [`.${classes.imgLeftBranch}`]: {
    position: 'absolute',
    top: -194,
    left: -249,
    zIndex: zIndexes.contactFormLeftBranch,

    animation: 'rotateLeftBranch 6s infinite alternate',
  },

  '@media (max-width: 765px)': {
    form: {
      [`.${classes.inputContainer}`]: {
        flexBasis: '100%',
      },

      [`.${buttonClasses.root}`]: {
        width: '100%',
      },
    },
  },

  [`@media (max-width: ${MOBILE_VIEW_BREAKPOINT}px)`]: {
    form: {
      padding: 28,
      gap: 14,

      [`.${buttonClasses.root}`]: {
        [`.${buttonClasses.endIcon}`]: {
          svg: {
            width: 14,
          },
        },
      },
    },

    [`.${classes.imgLeftBranch}`]: {
      width: 175,
      top: -122,
      left: -91,
    },
  },
}));

export default {
  ContactFormContainer,
};
