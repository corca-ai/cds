import { css } from '@emotion/react';
import { PropsWithChildren, ReactElement } from 'react';

import styled from '@emotion/styled';

import { color, typography } from '../styles';

type Placement = 'top' | 'bottom' | 'left' | 'right';
type Position = 'start' | 'end' | 'center';

export type TooltipDirection = `${Placement}-${Position}`;

export interface TooltipProps {
  direction?: TooltipDirection;
  withArrow?: boolean;
  content: string | ReactElement;
}

type Split<S extends string> = S extends `${infer T}-${infer U}` ? [T, U] : [S];

export function Tooltip({
  direction = 'top-center',
  withArrow = true,
  children,
  content,
}: PropsWithChildren<TooltipProps>) {
  const [placement, position] = direction.split('-') as Split<typeof direction>;

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
    }
  }
`;

const TooltipWrapper = styled.div`
  visibility: hidden;
  opacity: 0;
`;

const ContentsWrapper = styled.div`
  display: flex;
`;

const TOOLTIP_ARROW_WIDTH = 10;
const ARROW_DIAGONAL = Math.sqrt(TOOLTIP_ARROW_WIDTH ** 2 + TOOLTIP_ARROW_WIDTH ** 2);
const DISTANCE_FROM_CONTENT_TO_ARROW = 2;

const getArrowMixin = (placement: Placement) => {
  const BORDER_ARROW_RADIUS = 2;

  const DISTANCE_ARROW_DESCENDED_LENGTH = (ARROW_DIAGONAL - TOOLTIP_ARROW_WIDTH) / 2;
  const DISTANCE_ARROW_TO_ELEMENT =
    DISTANCE_ARROW_DESCENDED_LENGTH + DISTANCE_FROM_CONTENT_TO_ARROW;

  switch (placement) {
    case 'bottom':
      return css`
        border-bottom-right-radius: ${BORDER_ARROW_RADIUS}px;
        bottom: calc(100% + ${DISTANCE_ARROW_TO_ELEMENT}px);
        left: calc(50% - ${TOOLTIP_ARROW_WIDTH / 2}px);
      `;
    case 'top':
      return css`
        border-top-left-radius: ${BORDER_ARROW_RADIUS}px;
        top: calc(100% + ${DISTANCE_ARROW_TO_ELEMENT}px);
        left: calc(50% - ${TOOLTIP_ARROW_WIDTH / 2}px);
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
};

const TooltipArrow = styled.div<{ placement: Placement }>`
  position: absolute;
  background: ${color['main-black']};
  width: ${TOOLTIP_ARROW_WIDTH}px;
  height: ${TOOLTIP_ARROW_WIDTH}px;
  transform: rotate(45deg);
  z-index: 10;

  ${props => {
    return getArrowMixin(props.placement);
  }}
`;

const TOP_BOTTOM_ARROW_DISTANCE = 15;
const LEFT_RIGHT_ARROW_DISTANCE = 9;

const VERT_ARROW_OFFSET = ARROW_DIAGONAL + TOP_BOTTOM_ARROW_DISTANCE;
const HORI_ARROW_OFFSET = ARROW_DIAGONAL + LEFT_RIGHT_ARROW_DISTANCE;

type BubbleProps = {
  placement: Placement;
  position?: Position;
  withArrow?: boolean;
};

const getBubbleMixin = ({ withArrow, placement, position }: BubbleProps) => {
  const DISTANCE_FROM_CONTENT = TOOLTIP_ARROW_WIDTH - DISTANCE_FROM_CONTENT_TO_ARROW;
  const offset = withArrow ? 0 : DISTANCE_FROM_CONTENT;

  switch (placement) {
    case 'top':
      return css`
        top: calc(100% + ${ARROW_DIAGONAL / 2 + DISTANCE_FROM_CONTENT_TO_ARROW}px);
        left: 50%;
        transform: translate(-50%, ${-offset}px);
        ${position === 'start' &&
        css`
          transform: translate(-${VERT_ARROW_OFFSET}px, ${-offset}px);
        `}
        ${position === 'end' &&
        css`
          transform: translate(calc(${VERT_ARROW_OFFSET}px - 100%), ${-offset}px);
        `}
      `;
    case 'bottom':
      return css`
        bottom: calc(100% + ${ARROW_DIAGONAL / 2 + DISTANCE_FROM_CONTENT_TO_ARROW}px);
        left: 50%;
        transform: translate(-50%, ${offset}px);
        ${position === 'start' &&
        css`
          transform: translate(-${VERT_ARROW_OFFSET}px, ${offset}px);
        `}
        ${position === 'end' &&
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
        ${position === 'start' &&
        css`
          transform: translate(
            calc(-${ARROW_DIAGONAL / 2 + DISTANCE_FROM_CONTENT_TO_ARROW}px + ${offset}px),
            -${HORI_ARROW_OFFSET}px
          );
        `}
        ${position === 'end' &&
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
        ${position === 'start' &&
        css`
          transform: translate(
            calc(${ARROW_DIAGONAL / 2 + DISTANCE_FROM_CONTENT_TO_ARROW}px - ${offset}px),
            -${HORI_ARROW_OFFSET}px
          );
        `}
        ${position === 'end' &&
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
};

const TooltipBubble = styled.div<BubbleProps>`
  position: absolute;
  z-index: 10;
  width: max-content;
  height: max-content;
  max-width: 300px;
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
    return getBubbleMixin(props);
  }}
`;
