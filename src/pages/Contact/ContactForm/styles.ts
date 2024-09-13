import styled from "styled-components";
import type { StyledComponent } from "../../../global/props/styleTypes";

const ContactForm = styled('form')<StyledComponent>(({ theme }) => ({
  padding: 50,
  backgroundColor: theme.colors.bg.white,
  boxShadow: '0px 18px 30px -5px #0000002b',
}));

export default {
  ContactForm,
};
