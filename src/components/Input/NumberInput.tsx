import _ from 'lodash';

import { TextInput, TextInputProps } from './TextInput';

const getIntegerOrNull = (value: number | string) => {
  if (value !== '' && _.isNumber(Number(value))) {
    return Math.round(Number(value));
  }
  return null;
};

export type NumberInputProps = Omit<TextInputProps, 'onChange'> & {
  onChange: (value: number | null) => void;
};

export function NumberInput({ value, onChange, onBlur, ...props }: NumberInputProps) {
  return (
    <TextInput
      type="number"
      value={value ?? ''}
      onChange={e => onChange(getIntegerOrNull(e.currentTarget.value))}
      onWheel={e => {
        e.currentTarget.blur();
        e.stopPropagation();
      }}
      onBlur={onBlur}
      {...props}
    />
  );
}
