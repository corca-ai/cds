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

const TOOLTIP_ARROW_WIDTH = 10;
const TOP_BOTTOM_ARROW_DISTANCE = 15;
const ARROW_OFFSET = TOOLTIP_ARROW_WIDTH + TOP_BOTTOM_ARROW_DISTANCE;
const DISTANCE_FROM_CONTENT_TO_ARROW = 2;

const TooltipArrow = styled.div<{ placement: Placement }>`
  position: absolute;
  background: ${color['main-black']};
  width: ${TOOLTIP_ARROW_WIDTH}px;
  height: ${TOOLTIP_ARROW_WIDTH}px;
  transform: rotate(45deg);

  ${props => {
    const BORDER_ARROW_RADIUS = 2;
    const HALF_ARROW_WIDTH = TOOLTIP_ARROW_WIDTH / 2;

    switch (props.placement) {
      case 'bottom':
        return css`
          border-bottom-right-radius: ${BORDER_ARROW_RADIUS}px;
          bottom: calc(100% + ${HALF_ARROW_WIDTH}px);
          left: calc(50% - ${HALF_ARROW_WIDTH}px);
        `;
      case 'top':
        return css`
          border-top-left-radius: ${BORDER_ARROW_RADIUS}px;
          left: calc(50% - ${HALF_ARROW_WIDTH}px);
          top: calc(100% + ${HALF_ARROW_WIDTH}px);
        `;
      case 'left':
        return css`
          border-top-right-radius: ${BORDER_ARROW_RADIUS}px;
          right: calc(100% + ${HALF_ARROW_WIDTH}px);
          top: 50%;
          transform: translateY(-50%) rotate(45deg);
        `;
      case 'right':
        return css`
          border-bottom-left-radius: ${BORDER_ARROW_RADIUS}px;
          left: calc(100% + ${HALF_ARROW_WIDTH}px);
          top: 50%;
          transform: translateY(-50%) rotate(45deg);
        `;
      default:
        return null;
    }
  }}
`;

const TooltipBubble = styled.div<{
  placement: Placement;
  position?: Position;
  withArrow?: boolean;
}>`
  position: absolute;
  width: max-content;
  height: max-content;
  max-width: 200px;
  cursor: help;
  background: ${color['main-black']};
  color: ${color.white};
  font-size: ${typography.size.xxs}px;
  font-weight: ${typography.weight.regular};
  padding: 7px 10px;
  border-radius: 8px;
  white-space: pre-wrap;
  word-break: break-all;

  ${props => {
    const DISTANCE_FROM_CONTENT = TOOLTIP_ARROW_WIDTH - DISTANCE_FROM_CONTENT_TO_ARROW;
    const offsetX = props.withArrow ? 0 : DISTANCE_FROM_CONTENT;
    const offsetY = props.withArrow ? 0 : DISTANCE_FROM_CONTENT;

    switch (props.placement) {
      case 'top':
        return css`
          top: calc(100% + ${TOOLTIP_ARROW_WIDTH}px);
          left: 50%;
          transform: translate(-50%, ${-offsetY}px);
          ${props.position === 'start' &&
          css`
            transform: translate(-${ARROW_OFFSET}px, ${-offsetY}px);
          `}
          ${props.position === 'end' &&
          css`
            transform: translate(calc(${ARROW_OFFSET}px - 100%), ${-offsetY}px);
          `}
        `;
      case 'bottom':
        return css`
          bottom: calc(100% + ${TOOLTIP_ARROW_WIDTH}px);
          left: 50%;
          transform: translate(-50%, ${offsetY}px);
          ${props.position === 'start' &&
          css`
            transform: translate(-${ARROW_OFFSET}px, ${offsetY}px);
          `}
          ${props.position === 'end' &&
          css`
            transform: translate(calc(${ARROW_OFFSET}px - 100%), ${offsetY}px);
          `}
        `;
      case 'left':
        return css`
          top: 50%;
          right: 100%;
          transform: translate(calc(-${TOOLTIP_ARROW_WIDTH}px + ${offsetX}px), -50%);
          ${props.position === 'start' &&
          css`
            transform: translate(
              calc(-${TOOLTIP_ARROW_WIDTH}px + ${offsetX}px),
              -${TOOLTIP_ARROW_WIDTH + TOP_BOTTOM_ARROW_DISTANCE}px
            );
          `}
          ${props.position === 'end' &&
          css`
            transform: translate(
              calc(-${TOOLTIP_ARROW_WIDTH}px + ${offsetX}px),
              calc(-100% + ${TOOLTIP_ARROW_WIDTH}px)
            );

            /* transform: translate(-${TOOLTIP_ARROW_WIDTH}px, calc(-100% + ${TOOLTIP_ARROW_WIDTH}px)); */
          `}
        `;
      case 'right':
        return css`
          top: 50%;
          left: 100%;
          transform: translate(
            calc(${TOOLTIP_ARROW_WIDTH}px + ${offsetX}px),
            calc(-50% + ${offsetY}px)
          );
          ${props.position === 'start' &&
          css`
            transform: translate(${TOOLTIP_ARROW_WIDTH}px, calc(-100% + ${TOOLTIP_ARROW_WIDTH}px));
          `}
        `;
      default:
        return null;
    }
  }}
`;
