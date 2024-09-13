import { forwardRef } from 'react';
import S, { inputClassName } from './styles';
import type { InputProps } from './props';

const Input = forwardRef<HTMLInputElement, InputProps>((props: InputProps, ref): JSX.Element => {
  const classNames = [inputClassName];
  if (props.className) classNames.push(props.className);

  return (
    <S.Input
      {...props}
      ref={ref}
      className={classNames.join(' ')}
    />
  );
});

export default Input;
