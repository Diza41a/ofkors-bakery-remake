import { forwardRef } from 'react';
import S, { inputClassNames } from './styles';
import type { InputProps } from './props';

const Input = forwardRef<HTMLInputElement, InputProps>((props: InputProps, ref): JSX.Element => {
  const { errorMessage, className, ...rest } = props;
  const classNames = [inputClassNames.root];
  if (className) classNames.push(className);
  if (errorMessage) classNames.push(inputClassNames.error);

  return (
    <S.InputContainer className={inputClassNames.container}>
      <input
        {...rest}
        ref={ref}
        className={classNames.join(' ')}
      />
      {errorMessage && <p className={inputClassNames.errorLabel}>{errorMessage}</p>}
    </S.InputContainer>
  );
});

export default Input;
