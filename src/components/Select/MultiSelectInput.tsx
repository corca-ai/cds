import { CSSProperties, InputHTMLAttributes, useMemo } from 'react';

import styled from '@emotion/styled';

import Icon from '../Icon';
import { B5 } from '../Text';
import { TooltipProps } from '../Tooltip';
import { color, typography } from '../styles';
import { BasicOptionItem } from './OptionList';
import {
  SelectInputDescription,
  SelectInputErrorSection,
  SelectInputLabel,
  SelectInputRightIconSection,
} from './SelectInput';

const getItemButtonMaxWidth = (itemLen: number) => {
  return itemLen <= 1 ? 266 : 214;
};
type SelectInputTooltipProps = Omit<TooltipProps, 'children'>;

export interface SelectInputBaseProps<T extends string | number>
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'width' | 'value'> {
  optionItems: BasicOptionItem<T>[];
  onDeleteSingle: (value: T) => void;
  onDeleteAll: () => void;
  label?: string;
  description?: string;
  error?: string;
  width?: number;
  tooltip?: SelectInputTooltipProps;
  dropdownOpened?: boolean;
  showIcon?: boolean;
}

export function MultiSelectInput<T extends string | number>({
  optionItems,
  label,
  description,
  required = false,
  error,
  width,
  tooltip,
  dropdownOpened,
  onDeleteSingle,
  onDeleteAll,
  onClick,
  showIcon = true,
  ...props
}: SelectInputBaseProps<T>) {
  const itemMaxWidth = useMemo(() => getItemButtonMaxWidth(optionItems.length), [optionItems]);

  return (
    <SelectInputWrapper width={width} onClick={onClick}>
      {label && <SelectInputLabel label={label} required={required} tooltip={tooltip} />}
      {description && <SelectInputDescription description={description} />}
      <SelectInputChildrenWrapper>
        <MainInputSection {...props} isRightSection={true}>
          {optionItems.length > 0 && (
            <MultiSelectInputChildContents<T>
              {...{ width, onDeleteSingle, optionItems, onDeleteAll, itemMaxWidth }}
            />
          )}
        </MainInputSection>
        {showIcon && (
          <SelectInputRightIconSection dropdownOpened={dropdownOpened} searchable={false} />
        )}
      </SelectInputChildrenWrapper>
      {error && <SelectInputErrorSection error={error} />}
    </SelectInputWrapper>
  );
}

export interface SearchInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'width'> {
  width?: number;
  tooltip?: SelectInputTooltipProps;
  showIcon?: boolean;
}

export function SearchInput({ width, tooltip, showIcon = true, ...props }: SearchInputProps) {
  return (
    <SearchInputChildWrapper>
      {showIcon && (
        <LeftSectionWrapper cursor={'text'} rotate={'none'} aria-hidden="true">
          <Icon.Search color={color['grey-50']} />
        </LeftSectionWrapper>
      )}
      <BaseSearchInput
        cursor={'text'}
        isRightSection={false}
        isLeftSection={true}
        {...props}
        readOnly={false}
      />
    </SearchInputChildWrapper>
  );
}

export interface SelectedItemButtonProps {
  onDelete: () => void;
  children: React.ReactNode;
  maxWidth: number;
}

function SelectedItemButton({ onDelete, children, maxWidth }: SelectedItemButtonProps) {
  return (
    <SelectedItemWrapper width={maxWidth}>
      <SelectedItemTextWrapper width={maxWidth - 5}>
        <B5 color={color['grey-80']}>{children}</B5>
      </SelectedItemTextWrapper>
      <CancelButtonWrapper onClickCapture={onDelete}>
        <Icon.CancelSmall size={13} />
      </CancelButtonWrapper>
    </SelectedItemWrapper>
  );
}

export interface PluralItemInfoSectionProps {
  itemsCount: number;
  onDeleteAll: () => void;
}

function PluralItemInfoSection({ itemsCount, onDeleteAll }: PluralItemInfoSectionProps) {
  return (
    <PluralDataWrapper>
      <CountItemWrapper>
        <B5 c="grey-10">{itemsCount}</B5>
      </CountItemWrapper>
      <CancelButtonWrapper onClickCapture={onDeleteAll}>
        <Icon.CancelSmall />
      </CancelButtonWrapper>
    </PluralDataWrapper>
  );
}

export interface MultiSelectInputChildContentsProps<T extends string | number>
  extends Pick<
    SelectInputBaseProps<T>,
    'width' | 'onDeleteSingle' | 'optionItems' | 'onDeleteAll'
  > {
  itemMaxWidth: number;
}

function MultiSelectInputChildContents<T extends string | number>({
  width = 310,
  onDeleteSingle,
  optionItems,
  onDeleteAll,
  itemMaxWidth,
}: MultiSelectInputChildContentsProps<T>) {
  return (
    <>
      <ItemsWrapper maxWidth={width - 100}>
        {optionItems.map(item => (
          <SelectedItemButton
            key={item.value + item?.label}
            maxWidth={itemMaxWidth}
            onDelete={() => onDeleteSingle(item.value)}
          >
            {item.label}
          </SelectedItemButton>
        ))}
      </ItemsWrapper>
      {optionItems.length > 1 && (
        <PluralItemInfoSection itemsCount={optionItems.length} onDeleteAll={onDeleteAll} />
      )}
    </>
  );
}

const CancelButtonWrapper = styled.button`
  height: 100%;

  cursor: pointer;
  background-color: transparent;
  border: none;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const SelectInputWrapper = styled.div<{ width?: number; cursor?: string }>`
  width: ${({ width }) => `${width}px` ?? '100%'};
  position: relative;
  cursor: ${({ cursor }) => cursor ?? 'auto'};
`;

const MainInputSection = styled.div<{
  error?: string;
  isRightSection?: boolean;
  isLeftSection?: boolean;
}>`
  width: 100%;
  height: 34px;
  padding: ${({ isRightSection, isLeftSection }) => {
    const paddingLeft = isLeftSection ? 30 : 12;
    return isRightSection ? `5px 36px 5px ${paddingLeft}px` : `6px ${paddingLeft}px`;
  }};

  font-style: normal;
  font-weight: 500;
  font-size: ${typography.size.xs}px;
  text-align: center;

  color: ${color['grey-80']};
  background: ${color['white']};
  border-radius: 8px;
  outline: none;
  border: 1px solid ${color['grey-50']};
  cursor: pointer;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 4px;

  &:disabled {
    border: none;
    background: ${color['grey-10']};
    color: ${color['grey-50']};
    cursor: not-allowed;
  }

  &::placeholder {
    color: ${color['grey-50']};
    font-size: ${typography.size.xs}px;
  }

  ${({ error }) =>
    error
      ? `
    border: 1px solid ${color['error-30']};
    background: ${color['error-10']};
  `
      : `
    &:focus-visible,
    &:focus {
      border: 1px solid ${color['grey-80']};
    }
  `}
`;

const BaseSearchInput = styled.input<{
  error?: string;
  isRightSection?: boolean;
  isLeftSection?: boolean;
  cursor?: string;
}>`
  width: 100%;
  height: 34px;
  padding: ${({ isRightSection, isLeftSection }) => {
    const paddingLeft = isLeftSection ? 30 : 12;
    return isRightSection ? `6px 36px 6px ${paddingLeft}px` : `6px ${paddingLeft}px`;
  }};

  outline: none;
  border: 1px solid ${color['grey-50']};
  background: ${color['white']};
  border-radius: 8px;

  font-style: normal;
  font-weight: 500;
  font-size: ${typography.size.xs}px;
  color: ${color['grey-80']};
  cursor: ${({ cursor }) => cursor ?? 'auto'};

  &:disabled {
    border: none;
    background: ${color['grey-10']};
    color: ${color['grey-50']};
    cursor: not-allowed;
  }
  &::placeholder {
    color: ${color['grey-50']};
    font-size: ${typography.size.xs}px;
  }
  ${({ error }) =>
    error
      ? `
    border: 1px solid ${color['error-30']};
    background: ${color['error-10']};
  `
      : `
    &:focus-visible,
    &:focus {
      border: 1px solid ${color['grey-80']};
    }
  `}
`;

const SelectInputChildrenWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const IconSectionWrapper = styled.button<{
  cursor?: string;
  rotate: string;
}>`
  height: 100%;
  padding: 6px 8px;
  overflow: visible;

  position: absolute;
  top: 0%;

  background: transparent;
  border: none;
  box-shadow: none;
  border-radius: 0;

  cursor: ${({ cursor }) => cursor ?? 'pointer'};
  transform: ${({ rotate }) => rotate ?? 'none'};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LeftSectionWrapper = styled(IconSectionWrapper)`
  left: 0;
`;

const SearchInputChildWrapper = styled(SelectInputChildrenWrapper)`
  margin-bottom: 5px;
`;

const SelectedItemWrapper = styled.button<{ width: number }>`
  width: fit-content;
  min-width: 40px;
  max-width: ${({ width }) => width}px;
  height: 21px;
  padding: 3px 2px 3px 4px;

  text-align: center;
  background-color: ${color['grey-20']};
  border-radius: 4px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2px;
`;

const SelectedItemTextWrapper = styled.div<{ width?: CSSProperties['width'] }>`
  width: ${({ width }) => width};
  height: 100%;
  min-width: 20px;

  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
  white-space: nowrap;
`;

const ItemsWrapper = styled.div<{ maxWidth: number }>`
  width: ${({ maxWidth }) => {
    return maxWidth < 214 ? 214 : maxWidth;
  }}px;

  overflow: hidden;
  word-break: break-all;
  white-space: nowrap;

  display: flex;
  gap: 3px;
  flex-wrap: nowrap;
`;

const CountItemWrapper = styled.div`
  width: 20px;
  height: 20px;
  padding: 2px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 4px;
  background-color: ${color['grey-60']};
  color: ${color['grey-10']};
`;

const PluralDataWrapper = styled.div`
  width: fit-content;
  height: 20px;

  position: absolute;
  right: 30px;

  display: flex;
`;
