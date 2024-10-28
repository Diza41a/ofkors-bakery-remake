import styled from "styled-components";
import { zIndexes } from "../../global/styles";

export const classes = {
  root: 'Modal',
};

const Modal = styled('div')(() => ({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: zIndexes.modal,
}));

export default {
  Modal,
};
