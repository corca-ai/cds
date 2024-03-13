import { type ReactNode } from 'react';

import styled from '@emotion/styled';

import { Button } from '../Button';
import Icon from '../Icon';
import { color, fontStyle } from '../styles';

export interface FilterOptionType<T> {
  label: string;
  value: T;
  disabled?: boolean;
}

export interface FilterCategoryType<T> {
  label: string;
  options: Array<FilterOptionType<T>>;
}

interface FilterCategoryProps<T> extends FilterCategoryType<T> {
  selected: T | T[];
  changeValue: (value: T) => void;
}

const FilterContainer = styled.div<{ width: number }>`
  width: ${({ width }) => `${width}px;`};
  background-color: ${color.white};
  border-radius: 12px;

  box-shadow:
    0px 0px 1px 0px rgba(132, 132, 132, 0.31),
    0px 2px 5px 0px rgba(70, 70, 70, 0.2);
`;

const CategoryContainer = styled.div`
  width: 100%;
  padding: 26px 28px;
`;

const BottomContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  aligh-items: center;
  width: 100%;
  padding: 10px 10px 10px 30px;
  border-top: 1px solid ${color['grey-30']};
`;

const CloseButtonWrapper = styled.div`
  width: 100%;
  text-align: right;
  height: 25px;
`;

const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 26px;
`;

export const CategoryLabel = styled.div`
  margin-bottom: 10px;
  height: 17px;
  ${fontStyle.b7}
`;

export const CategoryItemWrapper = styled.div<{ wrap?: 'wrap' | 'no-wrap' }>`
  display: flex;
  gap: 8px 6px;
  align-self: stretch;
  flex-wrap: ${({ wrap }) => wrap ?? 'wrap'};
`;

const OptionItem = styled.button<{ selected: boolean }>`
  height: 32px;
  border-radius: 30px;
  border: 1px solid ${color['grey-50']};
  background: ${color.white};
  padding: 7px 15px;
  cursor: pointer;
  ${fontStyle.b3}
  ${({ selected }) =>
    selected &&
    `
background: ${color['grey-80']};
color: ${color.white};
border: 1px solid ${color['grey-80']};
`}
&:disabled {
    border: 1px solid ${color['grey-50']};
    background: ${color['grey-30']};
    cursor: default;
    color: ${color['grey-50']};
  }
`;
const IconBtn = styled.button`
  background: inherit;
  cursor: pointer;
`;

export function FilterFrame({
  closeFilter,
  reset,
  resetLabel,
  children,
  width = 310,
}: {
  closeFilter: () => void;
  reset: () => void;
  resetLabel: string;
  children: ReactNode;
  width?: number;
}) {
  return (
    <FilterContainer width={width}>
      <CategoryContainer>
        <CloseButtonWrapper>
          <IconBtn onClick={closeFilter}>
            <Icon.CancelSmall size={25} />
          </IconBtn>
        </CloseButtonWrapper>
        <CategoryWrapper>{children}</CategoryWrapper>
      </CategoryContainer>
      <BottomContainer>
        <Button onClick={reset} variant="text" size="small">
          {resetLabel}
        </Button>
      </BottomContainer>
    </FilterContainer>
  );
}

export function FilterCategory<T>({
  label,
  selected,
  options,
  changeValue,
}: FilterCategoryProps<T>) {
  const isMultipleSelect = (selected: T | T[]): selected is T[] => {
    return Array.isArray(selected);
  };

  return (
    <div>
      {label && <CategoryLabel>{label}</CategoryLabel>}
      <CategoryItemWrapper>
        {options.map(option => {
          const isSelected = isMultipleSelect(selected)
            ? selected.includes(option.value)
            : selected === option.value;
          return (
            <OptionItem
              key={option.label}
              disabled={option.disabled}
              selected={isSelected}
              onClick={() => {
                changeValue(option.value);
              }}
            >
              {option.label}
            </OptionItem>
          );
        })}
      </CategoryItemWrapper>
    </div>
  );
}
