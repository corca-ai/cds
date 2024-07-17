import { type InputHTMLAttributes, type ReactElement, cloneElement, ReactNode } from 'react';

import styled from '@emotion/styled';

import Icon from '../Icon';
import { B3, B5, B7 } from '../Text';
import { Tooltip, type TooltipProps } from '../Tooltip';
import { color, typography } from '../styles';
import { css } from '@emotion/react';

export type InputTooltipProps = Omit<TooltipProps, 'children'>;

export interface InputBaseProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'width'> {
  label?: string;
  description?: string;
  error?: string;
  children: ReactElement;
  width?: number;
  tooltip?: InputTooltipProps;
  rightSection?: ReactNode;
  leftSection?: ReactNode;
  cursorPointer?: boolean;
}

export function InputContainer({
  label,
  description,
  required = false,
  error,
  children,
  width,
  tooltip,
  rightSection,
  leftSection,
  onClick,
  cursorPointer,
  ...props
}: InputBaseProps) {
  return (
    <InputWrapper
      width={width}
      onClick={onClick}
      {...(cursorPointer && { cursorPointer })}
      {...props}
    >
      {label && (
        <LabelContainer>
          <B7>
            {label} {required && <Star> *</Star>}
          </B7>
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
      {rightSection || leftSection ? (
        <InputChildrenWrapper>
          {leftSection && <LeftSectionWrapper aria-hidden="true">{leftSection}</LeftSectionWrapper>}
          {cloneElement(children, {
            isRightSection: !!rightSection,
            isLeftSection: !!leftSection,
          })}
          {rightSection && (
            <RightSectionWrapper aria-hidden="true">{rightSection}</RightSectionWrapper>
          )}
        </InputChildrenWrapper>
      ) : (
        children
      )}
      {error && (
        <ErrorContainer>
          <ErrorMessageIcon>
            <Icon.AlertCircle color={color['error-30']} />
          </ErrorMessageIcon>
          <ErrorMessage>
            <B3 c="error-30">{error}</B3>
          </ErrorMessage>
        </ErrorContainer>
      )}
    </InputWrapper>
  );
}

const ErrorMessageIcon = styled.div`
  display: flex;
`;
const ErrorMessage = styled.div`
  min-height: 20px;
`;

const InputWrapper = styled.div<{ width?: number; cursorPointer?: boolean }>`
  width: ${({ width }) => (width ? `${width}px` : '100%')};
  position: relative;
  cursor: ${({ cursorPointer }) => (cursorPointer ? 'pointer' : 'default')};
`;

const Star = styled.span`
  color: #ff5362;
`;

const Description = styled.div`
  display: flex;
  margin-bottom: 8px;
  line-height: 17px;
`;

const LabelContainer = styled.div`
  display: flex;
  margin-bottom: 8px;
  align-items: center;
  gap: 4px;
  height: 20px;
  align-items: center;
`;

export const ErrorContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 4px;
  gap: 4px;
`;

export type BaseInputType = {
  error?: string;
  isRightSection?: boolean;
  isLeftSection?: boolean;
  height?: string | number;
  cursorPointer?: boolean;
};

export const baseInputStyles = ({
  error,
  isRightSection,
  isLeftSection,
  height,
  cursorPointer,
}: BaseInputType) => css`
  width: 100%;
  padding: ${isLeftSection
    ? '6px 12px 6px 34px'
    : isRightSection
      ? '6px 36px 6px 12px'
      : '6px 12px'};
  outline: none;
  border: 1px solid ${color['grey-50']};
  font-style: normal;
  font-weight: 500;
  font-size: ${typography.size.xs}px;
  color: ${color['grey-80']};
  background: ${color.white};
  border-radius: 8px;
  height: ${typeof height === 'number' ? `${height}px` : height || '34px'};

  &:disabled {
    border: none;
    background: ${color['grey-20']};
    color: ${color['grey-50']};
    cursor: not-allowed;
  }

  &::placeholder {
    color: ${color['grey-50']};
    font-size: ${typography.size.xs}px;
  }

  ${error
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
  cursor: ${cursorPointer ? 'pointer' : 'default'};
`;

export const BaseInput = styled.input<BaseInputType>`
  ${props => baseInputStyles(props)}
`;

const QuestionIconWrapper = styled.i`
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const InputChildrenWrapper = styled.div`
  position: relative;
`;

const SectionWrapper = styled.div`
  position: absolute;
  height: fit-content;
  top: 0;
  bottom: 0;
  margin: auto;
  display: flex;
`;

const RightSectionWrapper = styled(SectionWrapper)`
  right: 8px;
`;

const LeftSectionWrapper = styled(SectionWrapper)`
  padding-left: 10px;
`;
