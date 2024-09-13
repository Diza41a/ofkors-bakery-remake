import S, { textAreaClassName } from './styles';
import type { TextAreaProps } from './props';
import { forwardRef } from 'react';

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (props: TextAreaProps, ref): JSX.Element => {
    const classNames = [textAreaClassName];
    if (props.className) classNames.push(props.className);

    return (
      <S.TextArea
        {...props}
        ref={ref}
        className={classNames.join(' ')}
      />
    );
  }
);

export default TextArea;
