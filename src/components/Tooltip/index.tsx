import { css } from '@emotion/react';
import { ReactElement, ReactNode } from 'react';

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
  /* visibility: hidden;
  opacity: 0; */
`;

const ContentsWrapper = styled.div`
  display: flex;
`;

const TOOLTIP_ARROW_WIDTH = 10;
const ARROW_DIAGONAL = Math.sqrt(TOOLTIP_ARROW_WIDTH ** 2 + TOOLTIP_ARROW_WIDTH ** 2);
const ARROW_CORNER_LENGTH = (ARROW_DIAGONAL * Math.sqrt(2)) / 2;

const TooltipArrow = styled.div<{ placement: Placement }>`
  position: absolute;
  background: ${color['main-black']};
  width: ${TOOLTIP_ARROW_WIDTH}px;
  height: ${TOOLTIP_ARROW_WIDTH}px;
  transform: rotate(45deg);

  ${props => {
    const BORDER_ARROW_RADIUS = 2;
    const DISTANCE_ARROW_TO_ELEMENT = ARROW_DIAGONAL - ARROW_CORNER_LENGTH;

    switch (props.placement) {
      case 'bottom':
        return css`
          border-bottom-right-radius: ${BORDER_ARROW_RADIUS}px;
          bottom: calc(100% + ${DISTANCE_ARROW_TO_ELEMENT}px);
          left: calc(50% - ${DISTANCE_ARROW_TO_ELEMENT}px);
        `;
      case 'top':
        return css`
          border-top-left-radius: ${BORDER_ARROW_RADIUS}px;
          left: calc(50% - ${DISTANCE_ARROW_TO_ELEMENT}px);
          top: calc(100% + ${DISTANCE_ARROW_TO_ELEMENT}px);
        `;
      case 'left':
        return css`
          border-top-right-radius: ${BORDER_ARROW_RADIUS}px;
          right: calc(100% + ${DISTANCE_ARROW_TO_ELEMENT}px);
          top: 50%;
          transform: translateY(-50%) rotate(45deg);
        `;
      case 'right':
        return css`
          border-bottom-left-radius: ${BORDER_ARROW_RADIUS}px;
          left: calc(100% + ${DISTANCE_ARROW_TO_ELEMENT}px);
          top: 50%;
          transform: translateY(-50%) rotate(45deg);
        `;
      default:
        return null;
    }
  }}
`;

const TOP_BOTTOM_ARROW_DISTANCE = 15;
const LEFT_RIGHT_ARROW_DISTANCE = 9;
const DISTANCE_FROM_CONTENT_TO_ARROW = 2;

const VERT_ARROW_OFFSET = ARROW_DIAGONAL + TOP_BOTTOM_ARROW_DISTANCE;
const HORI_ARROW_OFFSET = ARROW_DIAGONAL + LEFT_RIGHT_ARROW_DISTANCE;

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
    const offset = props.withArrow ? 0 : DISTANCE_FROM_CONTENT;

    switch (props.placement) {
      case 'top':
        return css`
          top: calc(100% + ${ARROW_DIAGONAL / 2 + DISTANCE_FROM_CONTENT_TO_ARROW}px);
          left: 50%;
          transform: translate(-50%, ${-offset}px);
          ${props.position === 'start' &&
          css`
            transform: translate(-${VERT_ARROW_OFFSET}px, ${-offset}px);
          `}
          ${props.position === 'end' &&
          css`
            transform: translate(calc(${VERT_ARROW_OFFSET}px - 100%), ${-offset}px);
          `}
        `;
      case 'bottom':
        return css`
          bottom: calc(100% + ${ARROW_DIAGONAL / 2 + DISTANCE_FROM_CONTENT_TO_ARROW}px);
          left: 50%;
          transform: translate(-50%, ${offset}px);
          ${props.position === 'start' &&
          css`
            transform: translate(-${VERT_ARROW_OFFSET}px, ${offset}px);
          `}
          ${props.position === 'end' &&
          css`
            transform: translate(calc(${VERT_ARROW_OFFSET}px - 100%), ${offset}px);
          `}
        `;
      case 'left':
        return css`
          top: 50%;
          right: 100%;
          transform: translate(
            calc(-${ARROW_DIAGONAL / 2 + DISTANCE_FROM_CONTENT_TO_ARROW}px + ${offset}px),
            -50%
          );
          ${props.position === 'start' &&
          css`
            transform: translate(
              calc(-${ARROW_DIAGONAL / 2 + DISTANCE_FROM_CONTENT_TO_ARROW}px + ${offset}px),
              -${HORI_ARROW_OFFSET}px
            );
          `}
          ${props.position === 'end' &&
          css`
            transform: translate(
              calc(-${ARROW_DIAGONAL / 2 + DISTANCE_FROM_CONTENT_TO_ARROW}px + ${offset}px),
              calc(-100% + ${HORI_ARROW_OFFSET}px)
            );
          `}
        `;
      case 'right':
        return css`
          top: 50%;
          left: 100%;
          transform: translate(
            calc(${ARROW_DIAGONAL / 2 + DISTANCE_FROM_CONTENT_TO_ARROW}px - ${offset}px),
            -50%
          );
          ${props.position === 'start' &&
          css`
            transform: translate(
              calc(${ARROW_DIAGONAL / 2 + DISTANCE_FROM_CONTENT_TO_ARROW}px - ${offset}px),
              calc(-${HORI_ARROW_OFFSET}px)
            );
          `}
          ${props.position === 'end' &&
          css`
            transform: translate(
              calc(${ARROW_DIAGONAL / 2 + DISTANCE_FROM_CONTENT_TO_ARROW}px - ${offset}px),
              calc(-100% + ${HORI_ARROW_OFFSET}px)
            );
          `}
        `;
      default:
        return null;
    }
  }}
`;
