import { InputHTMLAttributes } from 'react';

import styled from '@emotion/styled';

import Icon from '../Icon';
import { B3, B5, B7 } from '../Text';
import { Tooltip, TooltipProps } from '../Tooltip';
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
  leftIcon?: React.ReactNode;
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
  leftIcon,
  ...props
}: SelectInputBaseProps) {
  return (
    <SelectInputWrapper width={width} onClick={onClick}>
      {label && <SelectInputLabel label={label} required={required} tooltip={tooltip} />}
      {description && <SelectInputDescription description={description} />}
      <SelectInputChildrenWrapper>
        {!!leftIcon && (
          <LeftSectionWrapper cursor={!searchable ? 'text' : 'auto'}>{leftIcon}</LeftSectionWrapper>
        )}
        <BaseSelectInput
          {...props}
          leftIconExist={!!leftIcon}
          cursor={!searchable ? 'pointer' : 'auto'}
          isRightSection={true}
          readOnly={!searchable}
        />
        {showIcon && (
          <SelectInputRightIconSection dropdownOpened={dropdownOpened} searchable={searchable} />
        )}
      </SelectInputChildrenWrapper>
      {error && <SelectInputErrorSection error={error} />}
    </SelectInputWrapper>
  );
}

type SelectInputLabelProps = Pick<SelectInputBaseProps, 'label' | 'required' | 'tooltip'>;

export function SelectInputLabel({ label, required, tooltip }: SelectInputLabelProps) {
  return (
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
  );
}

export type SelectInputRightIconSectionProps = Pick<
  SelectInputBaseProps,
  'dropdownOpened' | 'searchable'
>;

export function SelectInputRightIconSection({
  dropdownOpened,
  searchable,
}: SelectInputRightIconSectionProps) {
  return (
    <RightSectionWrapper
      cursor={!searchable ? 'text' : 'auto'}
      rotate={dropdownOpened && !searchable ? 'rotate(180deg)' : 'none'}
      aria-hidden="true"
    >
      {searchable ? <Icon.Search /> : <Icon.ChevronDownSmall />}
    </RightSectionWrapper>
  );
}

type SelectInputDescriptionProps = Pick<SelectInputBaseProps, 'description'>;

export function SelectInputDescription({ description }: SelectInputDescriptionProps) {
  return (
    <Description>
      <B5 c="grey-60">{description}</B5>
    </Description>
  );
}

type SelectInputErrorProps = Pick<SelectInputBaseProps, 'error'>;

export function SelectInputErrorSection({ error }: SelectInputErrorProps) {
  return (
    <ErrorContainer>
      <Icon.AlertCircle color={color['error-30']} />
      <B3 c="error-30">{error}</B3>
    </ErrorContainer>
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
  leftIconExist?: boolean;
}>`
  width: 100%;
  padding: ${({ isRightSection, leftIconExist }) => {
    const leftPadding = leftIconExist ? 34 : 12;
    return isRightSection ? `6px 36px 6px ${leftPadding}px` : `6px ${leftPadding}px`;
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

const LeftSectionWrapper = styled.div<{ cursor?: string }>`
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: absolute;
  left: 0;
  padding: 0px 8px 0px 12px;

  background: inherit;
  overflow: visible;
  cursor: ${({ cursor }) => cursor ?? 'pointer'};
`;
