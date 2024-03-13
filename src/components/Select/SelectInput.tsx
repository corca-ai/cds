import { type InputHTMLAttributes } from 'react';

import styled from '@emotion/styled';

import Icon from '../Icon';
import { B1, B3, B5 } from '../Text';
import { Tooltip, type TooltipProps } from '../Tooltip';
import { color, typography } from '../styles';

type SelectInputTooltipProps = Omit<TooltipProps, 'children'>;

/** RightIcon prop can only be used with searchable true.
 * Without searchable, the right icon is always ChevronDownSmall as CDS design. */
export interface SelectInputBaseProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'width'> {
  label?: string;
  description?: string;
  error?: string;
  width?: number;
  tooltip?: SelectInputTooltipProps;
  dropdownOpened?: boolean;
  searchable?: boolean;
  showIcon?: boolean;
}

export function SelectInput({
  label,
  description,
  required = false,
  error,
  width,
  tooltip,
  dropdownOpened,
  searchable,
  onClick,
  showIcon = true,
  ...props
}: SelectInputBaseProps) {
  return (
    <SelectInputWrapper width={width} onClick={onClick}>
      {label && (
        <LabelContainer>
          <B1>
            {label} {required && <Star> *</Star>}
          </B1>
          {tooltip != null && (
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
        <BaseSelectInput
          {...props}
          cursor={!searchable ? 'pointer' : 'auto'}
          isRightSection={true}
          readOnly={!searchable}
        />
        {showIcon && (
          <RightSectionWrapper
            cursor={!searchable ? 'text' : 'auto'}
            rotate={dropdownOpened && !searchable ? 'rotate(180deg)' : 'none'}
            aria-hidden="true"
          >
            {searchable ? <Icon.Search /> : <Icon.ChevronDownSmall />}
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

const BaseSelectInput = styled.input<{
  error?: string;
  isRightSection?: boolean;
  cursor?: string;
}>`
  width: 100%;
  padding: ${({ isRightSection }) => (isRightSection ? '6px 36px 6px 12px' : '6px 12px')};
  outline: none;
  border: 1px solid ${color['grey-50']};
  font-style: normal;
  font-weight: 500;
  font-size: ${typography.size.xs}px;
  color: ${color['grey-80']};
  background: ${color.white};
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
`;

const RightSectionWrapper = styled.button<{ cursor?: string; rotate: string }>`
  position: absolute;
  top: 0%;
  padding: 6px 8px;
  right: 0;
  background: inherit;
  border: none;
  box-shadow: none;
  border-radius: 0;
  overflow: visible;
  height: 100%;
  cursor: ${({ cursor }) => cursor ?? 'pointer'};
  transform: ${({ rotate }) => rotate ?? 'none'};
`;
