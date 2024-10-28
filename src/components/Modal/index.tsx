import { HTMLAttributes } from 'react';
import S, { classes } from './styles';

interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  open: boolean;
  onClose: () => void;
};

const Modal = (props: ModalProps): JSX.Element => {
  const {
    open,
    onClose,
    children,
  } = props;

  return (
    open ? (
      <S.Modal
        className={classes.root}
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
      >
        {children}
      </S.Modal>
    ) : <></>
  );
};

export default Modal;
