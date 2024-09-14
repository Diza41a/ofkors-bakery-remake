import styled from "styled-components";
import { classes as buttonClasses } from '../../../components/Button/styles';
import type { StyledComponent } from "../../../global/props/styleTypes";
import { MOBILE_VIEW_BREAKPOINT } from "../../../global/theme";

export const classes = {
  root: 'ContactForm',
  inputContainer: 'ContactForm-InputContainer',
  commentInputContainer: 'ContactForm-CommentInputContainer',
  inputLabel: 'ContactForm-InputLabel',
  requiredAsterisk: 'ContactForm-RequiredAsterisk',
};

const ContactForm = styled('form')<StyledComponent>(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: 30,
  padding: 50,
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

  [`.${classes.commentInputContainer}`]: {
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

  '@media (max-width: 765px)': {
    [`.${classes.inputContainer}`]: {
      flexBasis: '100%',
    },

    [`.${buttonClasses.root}`]: {
      width: '100%',
    },
  },

  [`@media (max-width: ${MOBILE_VIEW_BREAKPOINT}px)`]: {
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
}));

export default {
  ContactForm,
};
