import { ReactNode, ReactElement } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { color, typography } from '../styles';

type Placement = 'top' | 'bottom' | 'left' | 'right';
type Position = 'start' | 'end' | 'center';

type Direction = `${Placement}-${Position}`;

export interface TooltipProps {
  direction?: Direction;
  withArrow?: boolean;
  children: ReactNode;
  content: string | ReactElement;
}

const TOOLTIP_ARROW_WIDTH = 10;
const TOP_BOTTOM_ARROW_DISTANCE = 15;
const ARROW_OFFSET = TOOLTIP_ARROW_WIDTH + TOP_BOTTOM_ARROW_DISTANCE;

export function Tooltip({
  direction = 'top-center',
  withArrow = true,
  children,
  content,
}: TooltipProps) {
  const [placement, position] = direction.split('-') as [Placement, Position];

  return (
    <TooltipContainer>
      <ContentsWrapper>{children}</ContentsWrapper>
      <TooltipWrapper className="tooltip-box">
        {withArrow && <TooltipArrow placement={placement} />}
        <TooltipBubble withArrow={withArrow} placement={placement} position={position}>
          {content}
        </TooltipBubble>
      </TooltipWrapper>
    </TooltipContainer>
  );
}

const TooltipContainer = styled.div`
  position: relative;
  &:hover {
    .tooltip-box {
      visibility: visible;
      opacity: 1;
      transition: opacity 0.3s ease-in-out;
    }
  }
`;

const TooltipWrapper = styled.div`
  z-index: 10;
`;

const ContentsWrapper = styled.div`
  display: flex;
`;

const TooltipArrow = styled.div<{ placement: Placement }>`
  position: absolute;
  background: ${color['main-black']};
  width: ${TOOLTIP_ARROW_WIDTH}px;
  height: ${TOOLTIP_ARROW_WIDTH}px;
  transform: rotate(45deg);

  ${props => {
    const HALF_ARROW_WIDTH = TOOLTIP_ARROW_WIDTH / 2;
    switch (props.placement) {
      case 'bottom':
        return css`
          border-bottom-right-radius: 2px;
          bottom: calc(100% + ${HALF_ARROW_WIDTH}px);
          left: calc(50% - ${HALF_ARROW_WIDTH}px);
        `;
      case 'top':
        return css`
          border-top-left-radius: 2px;
          left: calc(50% - ${HALF_ARROW_WIDTH}px);
          top: calc(100% + ${HALF_ARROW_WIDTH}px);
        `;
      case 'left':
        return css`
          border-top-right-radius: 2px;
          right: calc(100% + ${HALF_ARROW_WIDTH}px);
          top: 50%;
          transform: translateY(-50%) rotate(45deg);
        `;
      case 'right':
        return css`
          border-bottom-left-radius: 2px;
          left: calc(100% + ${HALF_ARROW_WIDTH}px);
          top: 50%;
          transform: translateY(-50%) rotate(45deg);
        `;
      default:
        return null;
    }
  }}
`;

const TooltipBubble = styled.div<{ withArrow: boolean; placement: Placement; position?: Position }>`
  cursor: help;
  position: absolute;
  width: max-content;
  height: max-content;
  max-width: 200px;
  background: ${color['main-black']};
  color: ${color.white};
  font-size: ${typography.size.xxs}px;
  font-weight: ${typography.weight.regular};
  padding: 7px 10px;
  border-radius: 8px;
  white-space: pre-wrap;
  word-break: break-all;

  ${props => {
    switch (props.placement) {
      case 'top':
        return css`
          top: calc(100% + ${TOOLTIP_ARROW_WIDTH}px);
          left: 50%;
          transform: translate(-50%);
          ${props.position === 'start' &&
          css`
            transform: translate(-${ARROW_OFFSET}px);
          `}
          ${props.position === 'end' &&
          css`
            transform: translate(calc(${ARROW_OFFSET}px - 100%));
          `}
        `;
      case 'bottom':
        return css`
          bottom: calc(100% + ${TOOLTIP_ARROW_WIDTH}px);
          left: 50%;
          transform: translate(-50%);
          ${props.position === 'start' &&
          css`
            transform: translate(-${ARROW_OFFSET}px);
          `}
          ${props.position === 'end' &&
          css`
            transform: translate(calc(${ARROW_OFFSET}px - 100%));
          `}
        `;
      case 'left':
        return css`
          right: 100%;
          transform: translate(-${TOOLTIP_ARROW_WIDTH}px, -50%);
          ${props.position === 'start' &&
          css`
            transform: translate(-${TOOLTIP_ARROW_WIDTH}px, -${ARROW_OFFSET}px);
          `}
          ${props.position === 'end' &&
          css`
            transform: translate(-${TOOLTIP_ARROW_WIDTH}px, calc(-100% + ${TOOLTIP_ARROW_WIDTH}px));
          `}
        `;
      case 'right':
        return css`
          left: 100%;
          transform: translate(${TOOLTIP_ARROW_WIDTH}px, -50%);
          ${props.position === 'start' &&
          css`
            transform: translate(${TOOLTIP_ARROW_WIDTH}px, calc(-100% + ${TOOLTIP_ARROW_WIDTH}px));
          `}
          ${props.position === 'end' &&
          css`
            transform: translate(${TOOLTIP_ARROW_WIDTH}px, -${ARROW_OFFSET}px);
          `}
        `;
      default:
        return null;
    }
  }}
`;
