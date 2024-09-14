import S, { textAreaClassNames } from './styles';
import type { TextAreaProps } from './props';
import { forwardRef } from 'react';

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (props: TextAreaProps, ref): JSX.Element => {
    const { errorMessage, className, ...rest } = props;
    const classNames = [textAreaClassNames.root];
    if (className) classNames.push(className);
    if (errorMessage) classNames.push(textAreaClassNames.error);

    return (
      <S.TextAreaContainer className={textAreaClassNames.container}>
        <textarea
          {...rest}
          ref={ref}
          className={classNames.join(' ')}
        />
        {errorMessage && <p className={textAreaClassNames.errorLabel}>{errorMessage}</p>}
      </S.TextAreaContainer>
    );
  }
);

export default TextArea;
