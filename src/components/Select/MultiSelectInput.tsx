import { CSSProperties, InputHTMLAttributes, useMemo } from 'react';

import styled from '@emotion/styled';

import Icon from '../Icon';
import { B3, B5, B7 } from '../Text';
import { Tooltip, TooltipProps } from '../Tooltip';
import { color, typography } from '../styles';
import { BasicOptionItem } from './OptionList';

type SelectInputTooltipProps = Omit<TooltipProps, 'children'>;

export interface SelectInputBaseProps<T extends string>
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'width' | 'value'> {
  optionItems: BasicOptionItem<T>[];
  label?: string;
  description?: string;
  error?: string;
  width?: number;
  tooltip?: SelectInputTooltipProps;
  dropdownOpened?: boolean;
  showIcon?: boolean;
  onDeleteSingle: (value: T) => void;
  onDeleteAll: () => void;
}

export function MultiSelectInput<T extends string>({
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
  const itemMaxWidth = useMemo(() => getItemMaxWidth(optionItems.length), [optionItems]);

  return (
    <SelectInputWrapper width={width} onClick={onClick}>
      {label && (
        <LabelContainer>
          <B7>
            {label} {required && <Star> *</Star>}
          </B7>
          {tooltip && (
            <Tooltip
              content={tooltip.content}
              direction={tooltip.direction}
              withArrow={tooltip.withArrow}
            >
              <QuestionIconWrapper>
                <Icon.QuestionCircle />
              </QuestionIconWrapper>
            </Tooltip>
          )}
        </LabelContainer>
      )}
      {description && (
        <Description>
          <B5 c="grey-60">{description}</B5>
        </Description>
      )}
      <SelectInputChildrenWrapper>
        <BaseInput {...props} cursor={'pointer'} isRightSection={true}>
          {optionItems.length > 0 && (
            <>
              {optionItems.map(item => {
                return (
                  <SelectedItemButton
                    key={item.value + item?.label}
                    maxWidth={itemMaxWidth}
                    onDelete={() => onDeleteSingle(item.value)}
                  >
                    {item.label}
                  </SelectedItemButton>
                );
              })}
              {optionItems.length > 1 && (
                <>
                  <B5 color={color['grey-10']}>{optionItems.length}</B5>
                  <button
                    onClickCapture={onDeleteAll}
                    style={{ cursor: 'pointer', backgroundColor: 'white' }}
                  >
                    <Icon.CancelSmall />
                  </button>
                </>
              )}
            </>
          )}
        </BaseInput>
        {showIcon && (
          <RightSectionWrapper
            cursor={'pointer'}
            rotate={dropdownOpened ? 'rotate(180deg)' : 'none'}
            aria-hidden="true"
          >
            <Icon.ChevronDownSmall />
          </RightSectionWrapper>
        )}
      </SelectInputChildrenWrapper>
      {error && (
        <ErrorContainer>
          <Icon.AlertCircle color={color['error-30']} />
          <B3 c="error-30">{error}</B3>
        </ErrorContainer>
      )}
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
        {...props}
        cursor={'text'}
        isRightSection={false}
        isLeftSection={true}
        readOnly={false}
      />
    </SearchInputChildWrapper>
  );
}

function SelectedItemButton({
  onDelete,
  children,
  maxWidth,
}: {
  onDelete: () => void;
  children: React.ReactNode;
  maxWidth: number;
}) {
  return (
    <SelectedItemWrapper width={maxWidth}>
      <SelectedItemTextWrapper width={maxWidth - 5}>
        <B5 color={color['grey-10']}>{children}</B5>
      </SelectedItemTextWrapper>
      <button onClickCapture={onDelete} style={{ cursor: 'pointer' }}>
        <Icon.CancelSmall size={13} />
      </button>
    </SelectedItemWrapper>
  );
}

const SelectInputWrapper = styled.div<{ width?: number; cursor?: string }>`
  width: ${({ width }) => `${width}px` ?? '100%'};
  position: relative;
  cursor: ${({ cursor }) => cursor ?? 'auto'};
`;

const Star = styled.span`
  color: #ff5362;
`;

const Description = styled.div`
  display: flex;
  margin-bottom: 8px;
`;

const LabelContainer = styled.div`
  display: flex;
  margin-bottom: 8px;
  align-items: center;
  gap: 4px;
`;

const ErrorContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 4px;
  gap: 4px;
`;

const BaseInput = styled.div<{
  error?: string;
  isRightSection?: boolean;
  isLeftSection?: boolean;
  cursor?: string;
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

  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 4px;

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

const BaseSearchInput = styled.input<{
  error?: string;
  isRightSection?: boolean;
  isLeftSection?: boolean;
  cursor?: string;
}>`
  width: 100%;
  padding: ${({ isRightSection, isLeftSection }) => {
    const paddingLeft = isLeftSection ? 30 : 12;
    return isRightSection ? `6px 36px 6px ${paddingLeft}px` : `6px ${paddingLeft}px`;
  }};
  outline: none;
  border: 1px solid ${color['grey-50']};
  font-style: normal;
  font-weight: 500;
  font-size: ${typography.size.xs}px;
  color: ${color['grey-80']};
  background: ${color['white']};
  border-radius: 8px;
  height: 34px;
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

const QuestionIconWrapper = styled.i`
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const SelectInputChildrenWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const IconSectionWrapper = styled.button<{
  cursor?: string;
  rotate: string;
}>`
  position: absolute;
  top: 0%;
  padding: 6px 8px;
  background: inherit;
  border: none;
  box-shadow: none;
  border-radius: 0;
  overflow: visible;
  height: 100%;
  cursor: ${({ cursor }) => cursor ?? 'pointer'};
  transform: ${({ rotate }) => rotate ?? 'none'};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const RightSectionWrapper = styled(IconSectionWrapper)`
  right: 0;
`;

const LeftSectionWrapper = styled(IconSectionWrapper)`
  left: 0;
`;

const SearchInputChildWrapper = styled(SelectInputChildrenWrapper)`
  margin-bottom: 5px;
`;

const SelectedItemWrapper = styled.button<{ width: number }>`
  min-width: 40px;
  height: 21px;
  width: fit-content;
  max-width: ${({ width }) => width}px;
  padding: 3px 2px 3px 4px;

  text-align: center;
  background: ${color['grey-20']};
  border-radius: 4px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2px;
`;

const SelectedItemTextWrapper = styled.button<{ width?: CSSProperties['width'] }>`
  width: ${({ width }) => width};
  height: 100%;
  min-width: 20px;

  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
  white-space: nowrap;
`;

const getItemMaxWidth = (itemLen: number) => {
  return itemLen <= 1 ? 266 : 214;
};
