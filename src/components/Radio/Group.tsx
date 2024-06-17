import styled from '@emotion/styled';

import { RadioItem, type RadioItemProps } from './RadioItem';

export type RadioGroupOption<T> = Omit<RadioItemProps<T>, 'onSelect' | 'selected'>;

export type RadioDirection = 'row' | 'column';

const Container = styled.fieldset<{ direction: RadioDirection; gap: number }>`
  // reset fieldset css
  border: none;
  margin: 0;
  padding: 0;
  width: 100%;
  display: flex;
  flex-direction: ${({ direction }) => direction};
  gap: ${({ gap }) => gap}px;
`;

export interface RadioGroupProps<T>
  extends Omit<RadioItemProps<T>, 'value' | 'disabled' | 'selected'> {
  selectedValue?: T;
  options: Array<RadioGroupOption<T>>;
  direction?: RadioDirection;
  gap?: number;
}

export function RadioGroup<T extends string | number>({
  options,
  selectedValue,
  onSelect,
  direction = 'row',
  gap = 12,
}: RadioGroupProps<T>) {
  return (
    <Container direction={direction} gap={gap}>
      {options.map((option, i) => (
        <RadioItem
          key={i}
          label={option.label}
          value={option.value}
          disabled={option.disabled}
          selected={option.value === selectedValue}
          onSelect={() => {
            onSelect(option.value);
          }}
          tooltip={option.tooltip}
        />
      ))}
    </Container>
  );
}
