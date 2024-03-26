import _ from 'lodash';

import { TextInput, TextInputProps } from './TextInput';

export const getIntegerOrNull = (value: number | string) => {
  if (value !== '' && _.isNumber(Number(value))) {
    return Math.round(Number(value));
  }
  return null;
};

export type NumberInputProps = Omit<TextInputProps, 'onChange'> & {
  onChange: (value: number | null) => void;
};

export function NumberInput({ placeholder, value, error, onChange, onBlur }: NumberInputProps) {
  return (
    <TextInput
      placeholder={placeholder}
      type="number"
      value={value ?? ''}
      error={error}
      onChange={e => onChange(getIntegerOrNull(e.currentTarget.value))}
      min={1}
      max={20}
      onWheel={e => {
        e.currentTarget.blur();
        e.stopPropagation();
      }}
      onBlur={onBlur}
    />
  );
}
