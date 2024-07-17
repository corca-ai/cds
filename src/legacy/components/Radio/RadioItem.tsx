import { useMemo } from 'react';

import styled from '@emotion/styled';

import { B3 } from '../Text';
import { Tooltip } from '../Tooltip';
import { color } from '../styles';

const Circle = styled.input`
  width: 16px;
  height: 16px;
  border-radius: 100px;
  appearance: none;
  margin: 0;

  background-color: ${color.white};
  border: 1px solid ${color['grey-50']};

  &:disabled {
    background-color: ${color['grey-20']};
    border: 1px solid ${color['grey-40']};
  }
  &:checked {
    border: 4px solid ${color['main-black']};
  }
  &:checked:disabled {
    border: 4px solid ${color['grey-40']};
  }
`;

const Container = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
`;

const Label = styled.label`
  display: contents;
`;

export interface RadioItemProps<T> {
  label?: string;
  id?: string;
  value: T;
  disabled?: boolean;
  selected: boolean;
  onSelect: (value: T) => void;
  tooltip?: string;
}

export function RadioItem<T extends string | number>({
  label,
  id,
  value,
  disabled,
  selected,
  onSelect,
  tooltip,
}: RadioItemProps<T>) {
  const htmlId = useMemo(() => id ?? `${label}:${value}`, [label, value]);
  const RadioCircle = (
    <Circle
      type="radio"
      value={value}
      checked={selected}
      disabled={disabled}
      id={htmlId}
      onChange={() => {
        onSelect(value);
      }}
    />
  );
  return (
    <Container>
      {tooltip ? (
        <Tooltip withArrow direction="top-start" content={tooltip}>
          {RadioCircle}
        </Tooltip>
      ) : (
        RadioCircle
      )}
      {label && (
        <Label htmlFor={htmlId}>
          <B3 c={disabled ? 'grey-50' : 'grey-80'}>{label}</B3>
        </Label>
      )}
    </Container>
  );
}
